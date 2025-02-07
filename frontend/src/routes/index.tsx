import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { HomePage, AboutPage } from '../pages';
import { LoginPage, ItemsPage, ItemForm } from '../pages';

export const router = createBrowserRouter([
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'home',
                element: <Navigate to="/" replace />,
            },
            {
                path: 'sobre',
                element: <AboutPage />,
            },
            {
                path: 'items',
                element: <ItemsPage />,
            },
            {
                path: 'items/new',
                element: <ItemForm />,
            },
            {
                path: 'items/:id/edit',
                element: <ItemForm />,
            },
            {
                path: '*',
                element: <Navigate to="/" replace />,
            },
        ],
    },
]); 