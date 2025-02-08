import {
    Container,
    Heading,
    Text,
    Stack,
    List,
    ListItem,
    Box,
    Divider,
    useColorModeValue,
} from '@chakra-ui/react';

export function AboutPage() {
    const sectionBg = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.700');

    return (
        <Container maxW="4xl">
            <Stack spacing={8}>
                <Box>
                    <Heading as="h1" size="2xl" mb={4}>
                        About Curotec Challenge
                    </Heading>
                    <Text fontSize="lg" color="gray.500">
                        A modern inventory management system showcasing best practices in full-stack development
                        with React, TypeScript, and Node.js.
                    </Text>
                </Box>

                <Box p={6} bg={sectionBg} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
                    <Heading as="h2" size="lg" mb={4}>
                        Project Overview
                    </Heading>
                    <Text color="gray.500" mb={4}>
                        This project demonstrates a modern approach to building scalable web applications
                        using industry-standard technologies and best practices. It features a clean,
                        intuitive interface for managing inventory items with real-time updates and
                        secure authentication.
                    </Text>
                </Box>

                <Box p={6} bg={sectionBg} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
                    <Heading as="h2" size="lg" mb={4}>
                        Frontend Architecture
                    </Heading>
                    <Stack spacing={4}>
                        <section>
                            <Heading as="h3" size="md" mb={2}>
                                Core Technologies
                            </Heading>
                            <List spacing={2}>
                                <ListItem color="gray.500">• React 19 with TypeScript for type-safe development</ListItem>
                                <ListItem color="gray.500">• Vite for lightning-fast development and building</ListItem>
                                <ListItem color="gray.500">• React Router v6 for client-side routing</ListItem>
                                <ListItem color="gray.500">• React Query for efficient server state management</ListItem>
                            </List>
                        </section>
                        
                        <Divider />
                        
                        <section>
                            <Heading as="h3" size="md" mb={2}>
                                UI Components
                            </Heading>
                            <List spacing={2}>
                                <ListItem color="gray.500">• Chakra UI for accessible, responsive components</ListItem>
                                <ListItem color="gray.500">• Custom theme with light/dark mode support</ListItem>
                                <ListItem color="gray.500">• Framer Motion for smooth animations</ListItem>
                                <ListItem color="gray.500">• Responsive design for all devices</ListItem>
                            </List>
                        </section>
                    </Stack>
                </Box>

                <Box p={6} bg={sectionBg} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
                    <Heading as="h2" size="lg" mb={4}>
                        Backend Architecture
                    </Heading>
                    <Stack spacing={4}>
                        <section>
                            <Heading as="h3" size="md" mb={2}>
                                Core Technologies
                            </Heading>
                            <List spacing={2}>
                                <ListItem color="gray.500">• Node.js with Express for robust API development</ListItem>
                                <ListItem color="gray.500">• TypeScript for type safety across the stack</ListItem>
                                <ListItem color="gray.500">• SQLite for reliable data persistence</ListItem>
                                <ListItem color="gray.500">• Express middleware for error handling and validation</ListItem>
                            </List>
                        </section>
                        
                        <Divider />
                        
                        <section>
                            <Heading as="h3" size="md" mb={2}>
                                API Features
                            </Heading>
                            <List spacing={2}>
                                <ListItem color="gray.500">• RESTful endpoints following best practices</ListItem>
                                <ListItem color="gray.500">• CRUD operations for inventory management</ListItem>
                                <ListItem color="gray.500">• Comprehensive error handling</ListItem>
                                <ListItem color="gray.500">• Data validation and sanitization</ListItem>
                            </List>
                        </section>
                    </Stack>
                </Box>

                <Box p={6} bg={sectionBg} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
                    <Heading as="h2" size="lg" mb={4}>
                        Key Features
                    </Heading>
                    <Stack spacing={4}>
                        <section>
                            <Heading as="h3" size="md" mb={2}>
                                User Experience
                            </Heading>
                            <List spacing={2}>
                                <ListItem color="gray.500">• Intuitive inventory management interface</ListItem>
                                <ListItem color="gray.500">• Real-time updates with optimistic UI</ListItem>
                                <ListItem color="gray.500">• Responsive design for all screen sizes</ListItem>
                                <ListItem color="gray.500">• Smooth transitions and loading states</ListItem>
                            </List>
                        </section>
                        
                        <Divider />
                        
                        <section>
                            <Heading as="h3" size="md" mb={2}>
                                Security & Performance
                            </Heading>
                            <List spacing={2}>
                                <ListItem color="gray.500">• Secure authentication with Auth0</ListItem>
                                <ListItem color="gray.500">• Protected API routes and endpoints</ListItem>
                                <ListItem color="gray.500">• Optimized bundle size and loading</ListItem>
                                <ListItem color="gray.500">• Efficient data caching and updates</ListItem>
                            </List>
                        </section>
                    </Stack>
                </Box>

                <Box p={6} bg={sectionBg} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
                    <Heading as="h2" size="lg" mb={4}>
                        Development Practices
                    </Heading>
                    <List spacing={2}>
                        <ListItem color="gray.500">• Clean, modular architecture for maintainability</ListItem>
                        <ListItem color="gray.500">• Comprehensive TypeScript types across the stack</ListItem>
                        <ListItem color="gray.500">• Docker support for easy deployment</ListItem>
                        <ListItem color="gray.500">• Monorepo structure with Turborepo</ListItem>
                        <ListItem color="gray.500">• Consistent code style with ESLint and Prettier</ListItem>
                        <ListItem color="gray.500">• Git workflow with conventional commits</ListItem>
                    </List>
                </Box>
            </Stack>
        </Container>
    );
} 