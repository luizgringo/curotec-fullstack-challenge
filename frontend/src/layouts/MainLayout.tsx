import { type ReactNode } from 'react';
import { Link as RouterLink, Outlet, useLocation } from 'react-router-dom';
import {
    IconButton,
    Avatar,
    Box,
    CloseButton,
    Flex,
    HStack,
    VStack,
    Icon,
    useColorModeValue,
    Text,
    Drawer,
    DrawerContent,
    useDisclosure,
    type BoxProps,
    type FlexProps,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
} from '@chakra-ui/react';
import {
    FiHome,
    FiInfo,
    FiLogIn,
    FiMenu,
    FiMoon,
    FiSun,
    FiChevronDown,
    FiList,
} from 'react-icons/fi';
import { type IconType } from 'react-icons';
import { useTheme } from '../contexts/ThemeContext';
import { Logo } from '../components/Logo';
import { AnimatePresence } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';

interface LinkItemProps {
    name: string;
    icon: IconType;
    path: string;
}

interface NavItemProps extends FlexProps {
    icon: IconType;
    children: React.ReactNode;
    path: string;
    isActive?: boolean;
}

interface MobileProps extends FlexProps {
    onOpen: () => void;
}

interface SidebarProps extends BoxProps {
    onClose: () => void;
}

const LinkItems: Array<LinkItemProps> = [
    { name: 'Início', icon: FiHome, path: '/' },
    { name: 'Sobre', icon: FiInfo, path: '/sobre' },
    { name: 'Itens', icon: FiList, path: '/items' },
    { name: 'Login', icon: FiLogIn, path: '/login' },
];

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    const location = useLocation();
    const bgColor = useColorModeValue('white', 'gray.900');
    const borderColor = useColorModeValue('gray.200', 'gray.700');

    return (
        <Box
            transition="3s ease"
            bg={bgColor}
            borderRight="1px"
            borderRightColor={borderColor}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="100vh"
            top={0}
            left={0}
            zIndex={3}
            {...rest}
        >
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Logo height="25px" />
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {LinkItems.map((link) => (
                <NavItem 
                    key={link.name} 
                    icon={link.icon} 
                    path={link.path}
                    isActive={location.pathname === link.path}
                >
                    {link.name}
                </NavItem>
            ))}
        </Box>
    );
};

const NavItem = ({ icon, children, path, isActive, ...rest }: NavItemProps) => {
    const activeBg = useColorModeValue('brand.500', 'brand.200');
    const activeColor = useColorModeValue('white', 'gray.900');
    const hoverBg = useColorModeValue('brand.50', 'brand.900');
    const hoverColor = useColorModeValue('brand.700', 'brand.200');
    const textColor = useColorModeValue('gray.700', 'gray.200');

    return (
        <Box
            as={RouterLink}
            to={path}
            style={{ textDecoration: 'none' }}
            _focus={{ boxShadow: 'none' }}
        >
            <Flex
                align="center"
                p="4"
                mx="4"
                mb={2}
                borderRadius="lg"
                role="group"
                cursor="pointer"
                bg={isActive ? activeBg : 'transparent'}
                color={isActive ? activeColor : textColor}
                transition="all 0.2s"
                fontWeight="normal"
                _hover={{
                    bg: isActive ? activeBg : hoverBg,
                    color: isActive ? activeColor : hoverColor,
                    fontWeight: 'bold',
                }}
                {...rest}
            >
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: isActive ? activeColor : hoverColor,
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Box>
    );
};

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    const { isDarkMode, toggleTheme } = useTheme();
    const bgColor = useColorModeValue('white', 'gray.900');
    const borderColor = useColorModeValue('gray.200', 'gray.700');

    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            bg={bgColor}
            borderBottomWidth="1px"
            borderBottomColor={borderColor}
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
            position="fixed"
            top={0}
            right={0}
            left={0}
            zIndex={2}
            {...rest}
        >
            <IconButton
                display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
                variant="outline"
                aria-label="abrir menu"
                icon={<FiMenu />}
            />

            <Box
                display={{ base: 'flex', md: 'none' }}
                alignItems="center"
            >
                <Logo height="25px" />
            </Box>

            <HStack spacing={{ base: '0', md: '6' }}>
                <IconButton
                    size="lg"
                    variant="ghost"
                    aria-label="alternar tema"
                    icon={isDarkMode ? <FiSun /> : <FiMoon />}
                    onClick={toggleTheme}
                />
                <Flex alignItems="center">
                    <Menu>
                        <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
                            <HStack>
                                <Avatar
                                    size="sm"
                                    name="Usuário"
                                    bg="brand.500"
                                    color="white"
                                />
                                <VStack
                                    display={{ base: 'none', md: 'flex' }}
                                    alignItems="flex-start"
                                    spacing="1px"
                                    ml="2"
                                >
                                    <Text fontSize="sm">Visitante</Text>
                                    <Text fontSize="xs" color="gray.600">
                                        Não autenticado
                                    </Text>
                                </VStack>
                                <Box display={{ base: 'none', md: 'flex' }}>
                                    <FiChevronDown />
                                </Box>
                            </HStack>
                        </MenuButton>
                        <MenuList>
                            <MenuItem as={RouterLink} to="/login">
                                Entrar
                            </MenuItem>
                            <MenuDivider />
                            <MenuItem onClick={toggleTheme}>
                                {isDarkMode ? 'Tema Claro' : 'Tema Escuro'}
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </HStack>
        </Flex>
    );
};

export function MainLayout({ children }: { children?: ReactNode }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const bgColor = useColorModeValue('gray.50', 'gray.900');
    const location = useLocation();

    return (
        <Box minH="100vh" bg={bgColor}>
            <SidebarContent onClose={onClose} display={{ base: 'none', md: 'block' }} />
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
            >
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            <MobileNav onOpen={onOpen} />
            <Box 
                ml={{ base: 0, md: 60 }} 
                p="4"
                pt="24"
            >
                <AnimatePresence mode="wait">
                    <PageTransition key={location.pathname}>
                        {children || <Outlet />}
                    </PageTransition>
                </AnimatePresence>
            </Box>
        </Box>
    );
} 