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
                Bem-vindo ao Curotec Challenge
            </Heading>
            <Text fontSize="lg" color="gray.500" mb={8}>
                Esta é uma aplicação de exemplo usando React, TypeScript e as melhores práticas de desenvolvimento.
            </Text>
            <Stack direction="row" spacing={4} justify="center">
                <Button colorScheme="brand" size="lg">
                    Começar Agora
                </Button>
                <Button variant="outline" colorScheme="brand" size="lg" onClick={() => navigate('/sobre')}>
                    Saiba Mais
                </Button>
            </Stack>
        </Container>
    );
} 