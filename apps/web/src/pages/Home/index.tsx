import {
    Container,
    Heading,
    Stack,
    Text,
    Button,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export function HomePage() {
    const navigate = useNavigate();

    return (
        <Container maxW="2xl" textAlign="center">
            <Heading as="h1" size="2xl" mb={4}>
                Welcome to Curotec Challenge
            </Heading>
            <Text fontSize="lg" color="gray.500" mb={4}>
                A modern inventory management system built with React and TypeScript.
            </Text>
            <Text fontSize="md" color="gray.500" mb={8}>
                Securely manage your items with an intuitive interface, real-time updates, and Auth0 authentication.
            </Text>
            <Stack direction="row" spacing={4} justify="center">
                <Button colorScheme="brand" size="lg" onClick={() => navigate('/items')}>
                    Manage Items
                </Button>
                <Button variant="outline" colorScheme="brand" size="lg" onClick={() => navigate('/about')}>
                    Learn More
                </Button>
            </Stack>
        </Container>
    );
} 