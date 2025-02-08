import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    IconButton,
    useToast,
    useColorModeValue,
    Input,
    InputGroup,
    InputLeftElement,
    HStack,
    Text,
    ButtonGroup,
    Select,
} from '@chakra-ui/react';
import { FiEdit2, FiTrash2, FiPlus, FiSearch, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ItemsService } from '../../services/ItemsService';
import { useState, useEffect } from 'react';
import { useDebounce } from '../../hooks/useDebounce';

export function ItemsPage() {
    const navigate = useNavigate();
    const toast = useToast();
    const queryClient = useQueryClient();
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [search, setSearch] = useState('');
    const debouncedSearch = useDebounce(search, 500);
    
    useEffect(() => {
        setPage(1); // Reset para primeira página quando a busca mudar
    }, [debouncedSearch]);
    
    const bgColor = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.700');

    const { data, isLoading } = useQuery({
        queryKey: ['items', page, limit, debouncedSearch],
        queryFn: () => ItemsService.findAll({ page, limit, search: debouncedSearch }),
    });

    const deleteMutation = useMutation({
        mutationFn: (id: number) => ItemsService.delete(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['items'] });
            toast({
                title: 'Item deleted successfully!',
                status: 'success',
                duration: 3000,
                position: 'top',
            });
        },
        onError: () => {
            toast({
                title: 'Error deleting item',
                description: 'An error occurred while trying to delete the item',
                status: 'error',
                duration: 3000,
                position: 'top',
            });
        },
    });

    const handleEdit = (id: number) => {
        navigate(`/items/${id}/edit`);
    };

    const handleDelete = async (id: number) => {
        try {
            await deleteMutation.mutateAsync(id);
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    const handlePreviousPage = () => {
        setPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
        if (data?.pagination && data.pagination.currentPage < data.pagination.totalPages) {
            setPage((prev) => prev + 1);
        }
    };

    const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLimit(Number(e.target.value));
        setPage(1); // Resetar para primeira página ao mudar o limite
    };

    return (
        <Container maxW="container.xl">
            <Box bg={bgColor} p={6} rounded="lg" shadow="base" borderWidth="1px" borderColor={borderColor}>
                <Flex justify="space-between" align="center" mb={6}>
                    <Heading size="lg">Items</Heading>
                    <Button
                        leftIcon={<FiPlus />}
                        colorScheme="brand"
                        onClick={() => navigate('/items/new')}
                    >
                        New Item
                    </Button>
                </Flex>

                <HStack mb={6} spacing={4}>
                    <InputGroup flex={1}>
                        <InputLeftElement pointerEvents="none">
                            <FiSearch color="gray.300" />
                        </InputLeftElement>
                        <Input
                            placeholder="Search by name or description..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </InputGroup>
                    <Select
                        width="200px"
                        value={limit}
                        onChange={handleLimitChange}
                    >
                        <option value={5}>5 items per page</option>
                        <option value={10}>10 items per page</option>
                        <option value={20}>20 items per page</option>
                        <option value={50}>50 items per page</option>
                    </Select>
                </HStack>

                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Description</Th>
                            <Th>Created At</Th>
                            <Th width="100px">Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {isLoading ? (
                            <Tr>
                                <Td colSpan={4} textAlign="center" py={8}>
                                    <Text color="gray.500">Loading...</Text>
                                </Td>
                            </Tr>
                        ) : data?.items.length === 0 ? (
                            <Tr>
                                <Td colSpan={4} textAlign="center" py={8}>
                                    <Text color="gray.500">No items found</Text>
                                </Td>
                            </Tr>
                        ) : (
                            data?.items.map((item) => (
                                <Tr key={item.id}>
                                    <Td>{item.name}</Td>
                                    <Td>{item.description}</Td>
                                    <Td>{new Date(item.createdAt).toLocaleDateString('en-US')}</Td>
                                    <Td>
                                        <Flex gap={2}>
                                            <IconButton
                                                aria-label="Edit item"
                                                icon={<FiEdit2 />}
                                                size="sm"
                                                colorScheme="brand"
                                                variant="ghost"
                                                onClick={() => handleEdit(item.id)}
                                            />
                                            <IconButton
                                                aria-label="Delete item"
                                                icon={<FiTrash2 />}
                                                size="sm"
                                                colorScheme="red"
                                                variant="ghost"
                                                isLoading={deleteMutation.isPending}
                                                onClick={() => handleDelete(item.id)}
                                            />
                                        </Flex>
                                    </Td>
                                </Tr>
                            ))
                        )}
                    </Tbody>
                </Table>

                {data?.pagination && (
                    <Flex justify="space-between" align="center" mt={6}>
                        <Text color="gray.500">
                            Showing {((data.pagination.currentPage - 1) * data.pagination.limit) + 1} to{' '}
                            {Math.min(data.pagination.currentPage * data.pagination.limit, data.pagination.total)} of{' '}
                            {data.pagination.total} items
                        </Text>
                        <ButtonGroup>
                            <Button
                                leftIcon={<FiChevronLeft />}
                                onClick={handlePreviousPage}
                                isDisabled={data.pagination.currentPage === 1}
                            >
                                Previous
                            </Button>
                            <Button
                                rightIcon={<FiChevronRight />}
                                onClick={handleNextPage}
                                isDisabled={data.pagination.currentPage === data.pagination.totalPages}
                            >
                                Next
                            </Button>
                        </ButtonGroup>
                    </Flex>
                )}
            </Box>
        </Container>
    );
}

export { default as ItemForm } from './Form'; 