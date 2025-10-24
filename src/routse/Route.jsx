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
            element: <AllGroups></AllGroups>
        },
        {
            path: '/createGroup',
            element: <CreateGroup></CreateGroup>
        },
        {
            path: '/myGroup',
            loader: ()=> fetch('http://localhost:3000/groups'),
            element: <MyGroup></MyGroup>
        },
        {
            path: 'about',
            element: <About></About>
        },
        {
            path:'/groupDetails/:id',
            element: <GroupDetails></GroupDetails>,
            loader: ()=> fetch('http://localhost:3000/groups'),
            hydrateFallbackElement:<Loading></Loading>
        },
        {
            path: '/updateGroup/:id',
            loader: ({params}) => fetch(`http://localhost:3000/groups/${params.id}`),
            element:<UpdateGroup></UpdateGroup>
        }
      ]
    },
  ]);

  export default router;