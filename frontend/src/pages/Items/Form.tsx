import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Heading,
    Input,
    Stack,
    Textarea,
    useToast,
    useColorModeValue,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface ItemFormData {
    name: string;
    description: string;
}

export default function ItemForm() {
    const [formData, setFormData] = useState<ItemFormData>({
        name: '',
        description: '',
    });
    const [errors, setErrors] = useState<Partial<ItemFormData>>({});
    const [isLoading, setIsLoading] = useState(false);
    
    const navigate = useNavigate();
    const toast = useToast();
    const { id } = useParams();
    const isEditing = !!id;

    const bgColor = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.700');

    useEffect(() => {
        if (isEditing) {
            // TODO: Buscar dados do item para edição
            setFormData({
                name: 'Item 1',
                description: 'Descrição do item 1',
            });
        }
    }, [isEditing]);

    const validateForm = () => {
        const newErrors: Partial<ItemFormData> = {};
        
        if (!formData.name) {
            newErrors.name = 'Nome é obrigatório';
        }
        
        if (!formData.description) {
            newErrors.description = 'Descrição é obrigatória';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) return;

        setIsLoading(true);
        
        try {
            // Simulando uma chamada à API
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            toast({
                title: isEditing ? 'Item atualizado com sucesso!' : 'Item criado com sucesso!',
                status: 'success',
                duration: 3000,
                position: 'top',
            });
            navigate('/items');
        } catch (error) {
            toast({
                title: 'Erro ao salvar item',
                description: 'Ocorreu um erro ao tentar salvar o item',
                status: 'error',
                duration: 3000,
                position: 'top',
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof ItemFormData]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    return (
        <Container maxW="container.md">
            <Box bg={bgColor} p={6} rounded="lg" shadow="base" borderWidth="1px" borderColor={borderColor}>
                <Stack spacing={6}>
                    <Heading size="lg">
                        {isEditing ? 'Editar Item' : 'Novo Item'}
                    </Heading>

                    <form onSubmit={handleSubmit}>
                        <Stack spacing={4}>
                            <FormControl isInvalid={!!errors.name}>
                                <FormLabel>Nome</FormLabel>
                                <Input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Digite o nome do item"
                                    variant="filled"
                                />
                                <FormErrorMessage>{errors.name}</FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={!!errors.description}>
                                <FormLabel>Descrição</FormLabel>
                                <Textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="Digite a descrição do item"
                                    variant="filled"
                                    rows={4}
                                />
                                <FormErrorMessage>{errors.description}</FormErrorMessage>
                            </FormControl>

                            <Stack direction="row" spacing={4} justify="flex-end">
                                <Button
                                    variant="ghost"
                                    onClick={() => navigate('/items')}
                                >
                                    Cancelar
                                </Button>
                                <Button
                                    type="submit"
                                    colorScheme="brand"
                                    isLoading={isLoading}
                                >
                                    {isEditing ? 'Atualizar' : 'Criar'}
                                </Button>
                            </Stack>
                        </Stack>
                    </form>
                </Stack>
            </Box>
        </Container>
    );
} 