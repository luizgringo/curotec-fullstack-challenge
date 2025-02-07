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
    Text,
    useColorModeValue,
    useToast,
    Flex,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../../components/Logo';

interface LoginFormData {
    email: string;
    password: string;
}

export function LoginPage() {
    const [formData, setFormData] = useState<LoginFormData>({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState<Partial<LoginFormData>>({});
    const [isLoading, setIsLoading] = useState(false);
    
    const navigate = useNavigate();
    const toast = useToast();

    // Cores dinâmicas baseadas no tema
    const bgColor = useColorModeValue('white', 'gray.800');
    const textColor = useColorModeValue('gray.600', 'gray.200');
    const boxShadow = useColorModeValue('base', 'dark-lg');

    const validateForm = () => {
        const newErrors: Partial<LoginFormData> = {};
        
        if (!formData.email) {
            newErrors.email = 'E-mail é obrigatório';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'E-mail inválido';
        }
        
        if (!formData.password) {
            newErrors.password = 'Senha é obrigatória';
        } else if (formData.password.length < 6) {
            newErrors.password = 'A senha deve ter pelo menos 6 caracteres';
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
            
            // TODO: Implementar integração com API real
            if (formData.email === 'admin@example.com' && formData.password === '123456') {
                toast({
                    title: 'Login realizado com sucesso!',
                    status: 'success',
                    duration: 3000,
                    position: 'top',
                });
                navigate('/');
            } else {
                toast({
                    title: 'Erro ao fazer login',
                    description: 'E-mail ou senha inválidos',
                    status: 'error',
                    duration: 3000,
                    position: 'top',
                });
            }
        } catch (error) {
            toast({
                title: 'Erro ao fazer login',
                description: 'Ocorreu um erro ao tentar fazer login',
                status: 'error',
                duration: 3000,
                position: 'top',
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Limpa o erro do campo quando o usuário começa a digitar
        if (errors[name as keyof LoginFormData]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    return (
        <Flex minH="100vh" align="center" justify="center">
            <Container maxW="md">
                <Box 
                    bg={bgColor} 
                    p={8} 
                    rounded="lg" 
                    shadow={boxShadow}
                    borderWidth="1px"
                >
                    <Stack spacing={6}>
                        <Heading size="lg" textAlign="center">
                            <Flex justify="center" align="center">
                                <Logo height="40px" />
                            </Flex>
                        </Heading>
                        <Text color={textColor} textAlign="center">
                            Entre com suas credenciais para acessar
                        </Text>

                        <form onSubmit={handleSubmit}>
                            <Stack spacing={4}>
                                <FormControl isInvalid={!!errors.email}>
                                    <FormLabel>E-mail</FormLabel>
                                    <Input
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="seu@email.com"
                                        variant="filled"
                                    />
                                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                                </FormControl>

                                <FormControl isInvalid={!!errors.password}>
                                    <FormLabel>Senha</FormLabel>
                                    <Input
                                        name="password"
                                        type="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="******"
                                        variant="filled"
                                    />
                                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                                </FormControl>

                                <Button
                                    type="submit"
                                    colorScheme="brand"
                                    size="lg"
                                    fontSize="md"
                                    isLoading={isLoading}
                                >
                                    Entrar
                                </Button>
                            </Stack>
                        </form>
                    </Stack>
                </Box>
            </Container>
        </Flex>
    );
} 