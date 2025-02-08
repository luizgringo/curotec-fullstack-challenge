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
} from '@chakra-ui/react';
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ItemsService } from '../../services/ItemsService';

export function ItemsPage() {
    const navigate = useNavigate();
    const toast = useToast();
    const queryClient = useQueryClient();
    
    const bgColor = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.700');

    const { data: items = [], isLoading } = useQuery({
        queryKey: ['items'],
        queryFn: () => ItemsService.findAll(),
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

    return (
        <Container maxW="container.xl">
            <Box bg={bgColor} p={6} rounded="lg" shadow="base" borderWidth="1px" borderColor={borderColor}>
                <Flex justify="space-between" align="center" mb={8}>
                    <Heading size="lg">Items</Heading>
                    <Button
                        leftIcon={<FiPlus />}
                        colorScheme="brand"
                        onClick={() => navigate('/items/new')}
                    >
                        New Item
                    </Button>
                </Flex>

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
                        {items.map((item) => (
                            <Tr key={item.id}>
                                <Td>{item.name}</Td>
                                <Td>{item.description}</Td>
                                <Td>{new Date(item.created_at).toLocaleDateString('en-US')}</Td>
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
                        ))}
                    </Tbody>
                </Table>
            </Box>
        </Container>
    );
}

export { default as ItemForm } from './Form'; 