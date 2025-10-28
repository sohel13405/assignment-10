import { createBrowserRouter } from "react-router";
import Root from "../components/root/Root";
import Home from "../components/home/Home";
import AllGroups from "../pages/allGroups/AllGroups";
import CreateGroup from "../pages/createGroup/CreateGroup";
import MyGroup from "../pages/myGroup/MyGroup";
import About from "../pages/about/About";
import GroupDetails from "../pages/groupDetails/GroupDetails";
import Loading from "../pages/loading/Loading";
import UpdateGroup from "../pages/updateGroup/UpdateGroup";
import AuthLayout from "../components/auth/AuthLayout";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import PrivateRoute from "../components/privateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
      path: '/',
      element:<Root></Root> ,
      children:[
        {
            index: true,
            loader: ()=> fetch('http://localhost:3000/groups'),
            element: <Home></Home>
        },
        {
            path: '/allGroups',
            loader: ()=> fetch('http://localhost:3000/groups'),
            element: <PrivateRoute>
                <AllGroups></AllGroups>
            </PrivateRoute>
        },
        {
            path: '/createGroup',
            element: <PrivateRoute>
                <CreateGroup></CreateGroup>
            </PrivateRoute>
        },
        {
            path: '/myGroup',
            element:
                <PrivateRoute>
                    <MyGroup></MyGroup>
                </PrivateRoute>,
            
            loader: ()=> fetch('http://localhost:3000/groups')
        },
        {
            path: 'about',
            element: <About></About>
        },
        {
            path:'/groupDetails/:id',
            element: <PrivateRoute>
                <GroupDetails></GroupDetails>
            </PrivateRoute>,
            loader: ()=> fetch('http://localhost:3000/groups'),
            hydrateFallbackElement:<Loading></Loading>
        },
        {
            path: '/updateGroup/:id',
            loader: ({params}) => fetch(`http://localhost:3000/groups/${params.id}`),
            element:<UpdateGroup></UpdateGroup>
        },
        
       
      ]
    },

    {
        path:'/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
         {
            path: '/auth/login',
            element: <Login></Login>
         },
         {
            path: '/auth/register',
            element: <Register></Register>
         }

        ]
    },



  ]);

  export default router;