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

interface Item {
    id: number;
    name: string;
    description: string;
    createdAt: string;
}

// Mock data - substituir por dados reais da API
const mockItems: Item[] = [
    {
        id: 1,
        name: 'Item 1',
        description: 'Descrição do item 1',
        createdAt: '2024-02-20',
    },
    {
        id: 2,
        name: 'Item 2',
        description: 'Descrição do item 2',
        createdAt: '2024-02-21',
    },
];

export function ItemsPage() {
    const navigate = useNavigate();
    const toast = useToast();
    
    const bgColor = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.700');

    const handleEdit = (id: number) => {
        navigate(`/items/${id}/edit`);
    };

    const handleDelete = (id: number) => {
        // TODO: Implementar deleção real
        toast({
            title: 'Item deletado com sucesso!',
            status: 'success',
            duration: 3000,
            position: 'top',
        });
    };

    return (
        <Container maxW="container.xl">
            <Box bg={bgColor} p={6} rounded="lg" shadow="base" borderWidth="1px" borderColor={borderColor}>
                <Flex justify="space-between" align="center" mb={8}>
                    <Heading size="lg">Itens</Heading>
                    <Button
                        leftIcon={<FiPlus />}
                        colorScheme="brand"
                        onClick={() => navigate('/items/new')}
                    >
                        Novo Item
                    </Button>
                </Flex>

                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Nome</Th>
                            <Th>Descrição</Th>
                            <Th>Data de Criação</Th>
                            <Th width="100px">Ações</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {mockItems.map((item) => (
                            <Tr key={item.id}>
                                <Td>{item.name}</Td>
                                <Td>{item.description}</Td>
                                <Td>{new Date(item.createdAt).toLocaleDateString('pt-BR')}</Td>
                                <Td>
                                    <Flex gap={2}>
                                        <IconButton
                                            aria-label="Editar item"
                                            icon={<FiEdit2 />}
                                            size="sm"
                                            colorScheme="brand"
                                            variant="ghost"
                                            onClick={() => handleEdit(item.id)}
                                        />
                                        <IconButton
                                            aria-label="Deletar item"
                                            icon={<FiTrash2 />}
                                            size="sm"
                                            colorScheme="red"
                                            variant="ghost"
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