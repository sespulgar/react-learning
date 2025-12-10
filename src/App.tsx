import React from 'react'
import HomePage from './pages/HomePage'
import NavBar from './components/NavBar'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App