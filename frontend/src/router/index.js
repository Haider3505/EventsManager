import * as React from "react";
import * as ReactDOM from "react-dom/client";
import HomePage from '../pages/HomePage'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import EventsPage, { loader as eventsLoader } from "../pages/EventsPage";
import EventDetailPage from "../pages/EventDetailPage";
import NewEventPage from "../pages/NewEventPage";
import EditEventPage from "../pages/EditEventPage";
import RootLayout from "../layout/RootLayout";
import ErrorPage from "../pages/Error";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '',
                element: <HomePage />,
            },
            {
                path: 'events',
                element: <EventsPage />,
                loader: eventsLoader,
            },
            {
                path: 'events/:id',
                element: <EventDetailPage />
            },
            {
                path: 'events/new',
                element: <NewEventPage />
            },
            {
                path: 'events/:id/edit',
                element: <EditEventPage />
            }
        ]
    },

])

export default router