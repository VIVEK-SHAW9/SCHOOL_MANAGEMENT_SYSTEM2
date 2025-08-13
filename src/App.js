import React from 'react';
import Signup from './components/Signup';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import AddCourses from './components/AddCourses';
import AddStudent from './components/AddStudent';
import Home from './components/Home';
import Courses from './components/Courses';
import Student from './components/Student';
import CollectFee from './components/CollectFee';
import PaymentHistory from './components/PaymentHistory';

const App = () => {
  const myRouter = createBrowserRouter([
    { path: '', element: <Login /> },  
    { path: 'login', element: <Login /> },
    { path: 'signup', element: <Signup /> },
    { path: 'dashboard', element: <Dashboard />, children: [
      { path: '', element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'courses', element: <Courses /> },
      { path: 'add-courses', element: <AddCourses /> }, // ✅
      { path: 'student', element: <Student /> },
      { path: 'add-student', element: <AddStudent /> },
      { path: 'collect-fee', element: <CollectFee /> },
      { path: 'payment-history', element: <PaymentHistory /> }
    ]}
  ]);

  return <RouterProvider router={myRouter} />;
}

export default App;
