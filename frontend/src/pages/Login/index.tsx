import {
    Box,
    Button,
    Container,
    Divider,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Heading,
    Input,
    Stack,
    Text,
    useColorModeValue,
    Flex,
    VStack,
    HStack,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FiMail } from 'react-icons/fi';
import { Logo } from '../../components/Logo';
import { useAuth } from '../../contexts/AuthContext';

interface LoginFormData {
    email: string;
}

export function LoginPage() {
    const [formData, setFormData] = useState<LoginFormData>({ email: '' });
    const [errors, setErrors] = useState<Partial<LoginFormData>>({});
    const navigate = useNavigate();
    const location = useLocation();
    const { loginWithGoogle, loginWithCredentials, isAuthenticated, isLoading } = useAuth();

    const bgColor = useColorModeValue('white', 'gray.800');
    const textColor = useColorModeValue('gray.600', 'gray.200');
    const boxShadow = useColorModeValue('base', 'dark-lg');
    const dividerColor = useColorModeValue('gray.300', 'gray.600');

    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (isAuthenticated) {
            navigate(from, { replace: true });
        }
    }, [isAuthenticated, navigate, from]);

    const handleEmailLogin = () => {
        if (!formData.email) {
            setErrors({ email: 'E-mail é obrigatório' });
            return;
        }
        loginWithCredentials({ email: formData.email });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
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
                        <VStack spacing={4}>
                            <Logo height="40px" />
                            <Heading size="lg" textAlign="center">
                                Bem-vindo de volta
                            </Heading>
                            <Text fontSize="md" color={textColor} textAlign="center">
                                Escolha como deseja fazer login
                            </Text>
                        </VStack>

                        <VStack spacing={4} align="stretch">
                            <Button
                                size="lg"
                                onClick={() => loginWithGoogle()}
                                isLoading={isLoading}
                                leftIcon={<FcGoogle />}
                                variant="outline"
                            >
                                Continuar com Google
                            </Button>

                            <HStack>
                                <Divider borderColor={dividerColor} />
                                <Text fontSize="sm" color={textColor} whiteSpace="nowrap">
                                    ou use seu e-mail
                                </Text>
                                <Divider borderColor={dividerColor} />
                            </HStack>

                            <FormControl isInvalid={!!errors.email}>
                                <FormLabel>E-mail</FormLabel>
                                <Input
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Digite seu e-mail"
                                    size="lg"
                                />
                                <FormErrorMessage>{errors.email}</FormErrorMessage>
                            </FormControl>

                            <Button
                                colorScheme="brand"
                                size="lg"
                                onClick={handleEmailLogin}
                                isLoading={isLoading}
                                leftIcon={<FiMail />}
                            >
                                Continuar com E-mail
                            </Button>
                        </VStack>
                    </Stack>
                </Box>
            </Container>
        </Flex>
    );
} 