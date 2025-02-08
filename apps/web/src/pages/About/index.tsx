import {
    Container,
    Heading,
    Text,
    Stack,
    List,
    ListItem,
} from '@chakra-ui/react';

export function AboutPage() {
    return (
        <Container maxW="3xl">
            <Heading as="h1" size="xl" mb={6}>
                Sobre o Projeto
            </Heading>
            
            <Stack spacing={8}>
                <section>
                    <Heading as="h2" size="lg" mb={4}>
                        Nossa Missão
                    </Heading>
                    <Text color="gray.500" mb={4}>
                        Demonstrar as melhores práticas de desenvolvimento frontend usando React,
                        TypeScript e uma arquitetura escalável e manutenível.
                    </Text>
                </section>

                <section>
                    <Heading as="h2" size="lg" mb={4}>
                        Tecnologias Utilizadas
                    </Heading>
                    <List spacing={2}>
                        <ListItem color="gray.500">• React com TypeScript</ListItem>
                        <ListItem color="gray.500">• React Router para navegação</ListItem>
                        <ListItem color="gray.500">• React Query para gerenciamento de estado</ListItem>
                        <ListItem color="gray.500">• Chakra UI para interface</ListItem>
                        <ListItem color="gray.500">• Componentes reutilizáveis</ListItem>
                        <ListItem color="gray.500">• Design System próprio</ListItem>
                    </List>
                </section>

                <section>
                    <Heading as="h2" size="lg" mb={4}>
                        Estrutura do Projeto
                    </Heading>
                    <Text color="gray.500" mb={4}>
                        O projeto segue uma arquitetura modular com separação clara de responsabilidades:
                    </Text>
                    <List spacing={2}>
                        <ListItem color="gray.500">• Components: Componentes reutilizáveis</ListItem>
                        <ListItem color="gray.500">• Pages: Páginas da aplicação</ListItem>
                        <ListItem color="gray.500">• Theme: Sistema de temas</ListItem>
                        <ListItem color="gray.500">• Services: Integrações com APIs</ListItem>
                        <ListItem color="gray.500">• Hooks: Hooks personalizados</ListItem>
                        <ListItem color="gray.500">• Utils: Funções utilitárias</ListItem>
                    </List>
                </section>
            </Stack>
        </Container>
    );
} 