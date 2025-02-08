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
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ItemsService } from '../../services/ItemsService';
import type { CreateItemDTO } from '../../types';

export default function ItemForm() {
    const [formData, setFormData] = useState<CreateItemDTO>({
        name: '',
        description: '',
    });
    const [errors, setErrors] = useState<Partial<CreateItemDTO>>({});
    
    const navigate = useNavigate();
    const toast = useToast();
    const { id } = useParams();
    const queryClient = useQueryClient();
    const isEditing = !!id;

    const bgColor = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.700');

    const { data: item } = useQuery({
        queryKey: ['items', id],
        queryFn: () => ItemsService.findById(Number(id)),
        enabled: isEditing,
    });

    useEffect(() => {
        if (item) {
            setFormData({
                name: item.name,
                description: item.description,
            });
        }
    }, [item]);

    const createMutation = useMutation({
        mutationFn: (data: CreateItemDTO) => ItemsService.create(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['items'] });
            toast({
                title: 'Item created successfully!',
                status: 'success',
                duration: 3000,
                position: 'top',
            });
            navigate('/items');
        },
        onError: () => {
            toast({
                title: 'Error creating item',
                description: 'An error occurred while trying to create the item',
                status: 'error',
                duration: 3000,
                position: 'top',
            });
        },
    });

    const updateMutation = useMutation({
        mutationFn: ({ id, data }: { id: number; data: Partial<CreateItemDTO> }) => 
            ItemsService.update(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['items'] });
            toast({
                title: 'Item updated successfully!',
                status: 'success',
                duration: 3000,
                position: 'top',
            });
            navigate('/items');
        },
        onError: () => {
            toast({
                title: 'Error updating item',
                description: 'An error occurred while trying to update the item',
                status: 'error',
                duration: 3000,
                position: 'top',
            });
        },
    });

    const validateForm = () => {
        const newErrors: Partial<CreateItemDTO> = {};
        
        if (!formData.name) {
            newErrors.name = 'Name is required';
        }
        
        if (!formData.description) {
            newErrors.description = 'Description is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) return;

        try {
            if (isEditing) {
                await updateMutation.mutateAsync({ id: Number(id), data: formData });
            } else {
                await createMutation.mutateAsync(formData);
            }
        } catch (error) {
            console.error('Error saving item:', error);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof CreateItemDTO]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    return (
        <Container maxW="container.md">
            <Box bg={bgColor} p={6} rounded="lg" shadow="base" borderWidth="1px" borderColor={borderColor}>
                <Stack spacing={6}>
                    <Heading size="lg">
                        {isEditing ? 'Edit Item' : 'New Item'}
                    </Heading>

                    <form onSubmit={handleSubmit}>
                        <Stack spacing={4}>
                            <FormControl isInvalid={!!errors.name}>
                                <FormLabel>Name</FormLabel>
                                <Input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter item name"
                                    variant="filled"
                                />
                                <FormErrorMessage>{errors.name}</FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={!!errors.description}>
                                <FormLabel>Description</FormLabel>
                                <Textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="Enter item description"
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
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    colorScheme="brand"
                                    isLoading={createMutation.isPending || updateMutation.isPending}
                                >
                                    {isEditing ? 'Update' : 'Create'}
                                </Button>
                            </Stack>
                        </Stack>
                    </form>
                </Stack>
            </Box>
        </Container>
    );
} 