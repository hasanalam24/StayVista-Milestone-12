import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import RoomDetails from '../pages/RoomDetails/RoomDetails'
import PrivateRoute from './PrivateRoute'
import Dashboard from '../layouts/Dashboard'
import Statistics from '../pages/Dashboard/Common/Statistics'
import Addroom from '../pages/Dashboard/Host/Addroom'
import MyListings from '../pages/Dashboard/Host/MyListings'
import Profile from '../pages/Dashboard/Common/Profile'
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/room/:id',
        element: <PrivateRoute>
          <RoomDetails />
        </PrivateRoute>,
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        //path: '/dashboard' (dewa r "index: true" same )
        index: true,
        element: <Statistics></Statistics>
      },
      {
        path: 'add-room',
        element: <Addroom></Addroom>
      },
      {
        path: 'my-listings',
        element: <MyListings></MyListings>
      },
      {
        path: 'manage-users',
        element: <ManageUsers></ManageUsers>
      },
      {
        path: 'profile',
        element: <Profile></Profile>
      },
    ],
  }
])
