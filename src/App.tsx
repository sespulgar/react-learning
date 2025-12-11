import React from 'react'
import HomePage from './pages/HomePage'
import NavBar from './components/NavBar'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import AddJob from './pages/AddJob';
import PartOne from './pages/PartOne';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/add-job' element={<AddJob />} />
        <Route path='/part-one' element={<PartOne />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App
