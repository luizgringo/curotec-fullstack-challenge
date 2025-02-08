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
            setErrors({ email: 'Email is required' });
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
                                Welcome Back
                            </Heading>
                            <Text fontSize="md" color={textColor} textAlign="center">
                                Choose how you want to sign in
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
                                Continue with Google
                            </Button>

                            <HStack>
                                <Divider borderColor={dividerColor} />
                                <Text fontSize="sm" color={textColor} whiteSpace="nowrap">
                                    or use your email
                                </Text>
                                <Divider borderColor={dividerColor} />
                            </HStack>

                            <FormControl isInvalid={!!errors.email}>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
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
                                Continue with Email
                            </Button>
                        </VStack>
                    </Stack>
                </Box>
            </Container>
        </Flex>
    );
} 