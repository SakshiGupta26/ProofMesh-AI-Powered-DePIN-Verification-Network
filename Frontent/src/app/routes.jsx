import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import Home from "../pages/Home";
import Dashboard from '../pages/Dashboard'
import SecurityPage from '../pages/SecurityPage'
import ReputationPage from '../pages/ReputationPage';
import VerificationPage from '../pages/VerificationPage';
import NodesPage from '../pages/NodesPage';
import NetworkPage from '../pages/NetworkPage'
import MainLayout from '../layouts/MainLayout';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/network",
        element: <NetworkPage />
      },
      {
        path: "/verification",
        element: <VerificationPage />
      },
      {
        path: "/nodes",
        element: <NodesPage />
      },
      {
        path: "/reputation",
        element: <ReputationPage />,
      },
      {
        path: "/security",
        element: <SecurityPage />
      },
    ]
  },
])

export default routes