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
import DoctorsDetails from "../pages/Shared/Doctors/DoctorsDetails";
import AddDoctors from "../pages/Shared/AddDoctors/AddDoctors";


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
        path: '/addDoctors',
        element: <AddDoctors></AddDoctors>
      },
      {
        path: '/services/:id',
        element: <EditServices></EditServices>
      },
      {
        path: '/servicesDetails/:id',
        element: <ServiceDetails></ServiceDetails>
      },
      {
        path: '/doctorsDetails/:id',
        element: <DoctorsDetails></DoctorsDetails>
      }
    ]
  },
  // {
  //   path: '/admin/dashboard',
  //   element: <adminDashboardLayout/>,
  //   children: [
  //     {
  //       path: '/admin/dashboard',
  //       element: <Dashboard/>
  //     },
  //     {
  //       path: '/admin/dashboard/addDoctor',
  //       element: <UploadDoctor/>
  //     },
  //     {
  //       path: '/admin/dashboard/AddService',
  //       element: <UploadService/>
  //     },
  //     {
  //       path: '/admin/dashboard/EditService',
  //       element: <EditService/>
  //     },
  //     {
  //       path: '/admin/dashboard/manageService',
  //       element: <ManageService/>
  //     },

  //   ]
  // }
]);


export default router