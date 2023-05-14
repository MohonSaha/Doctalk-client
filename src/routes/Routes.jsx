import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/Signup";
import Appoinments from "../pages/Appoinments/Appoinments";
import AddDiseases from "../pages/Shared/AddServices/AddServices";
import AddServices from "../pages/Shared/AddServices/AddServices";
import EditServices from "../pages/Shared/EditServices/EditServices";
import ServiceDetails from "../pages/Shared/ServiceDetails/ServiceDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'appoinment',
        element: <Appoinments></Appoinments>
      },
      {
        path: '/addDiseases',
        element: <AddServices></AddServices>
      },
      {
        path: '/services/:id',
        element: <EditServices></EditServices>
      },
      {
        path: '/servicesDetails/:id',
        element: <ServiceDetails></ServiceDetails>
      }
    ]
  },
]);


export default router