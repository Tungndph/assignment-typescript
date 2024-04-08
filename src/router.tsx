import { createBrowserRouter } from "react-router-dom";
import LayoutAdmin from "./components/layout/LayoutAdmin";
import TripList from "./pages/trips";
import LayoutWebsite from "./components/layout/LayoutWebsite";
import LayoutDetail from "./components/layout/LayoutDetail";
import LayoutPay from "./components/layout/LayoutPay";
import AddTrip from "./pages/trips/add";
// import NotFound from './pages/notFound';
import { getBusHouses } from "./api/busHouse.api";
import { getTripById } from "./api/trips.api";
import UpdateTrip from "./pages/trips/update";
import NotFound from "./pages/notFound";
import Login from "./pages/Signin";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <LayoutWebsite />,
    // children: [
    //   {
    //     path: "detail",
    //     element: <LayoutDetail />,
    //   },
    // ],
  },
  {
    path: "/detail",
    element: <LayoutDetail />,
  },

  {
    path: "/pay",
    element: <LayoutPay />,
  },
  {
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "trips",
        element: <TripList />,
      },
      {
        path: "trips/add",
        loader: async () => {
          const { data } = await getBusHouses();
          return data;
        },
        element: <AddTrip />,
      },
      {
        path: "trips/:id",
        loader: async ({ params }) => {
          const { data: busHouses } = await getBusHouses();
          if (params.id) {
            const { data: trip } = await getTripById(params.id);
            return { trip, busHouses };
          }
          return { busHouses };
        },
        element: <UpdateTrip />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default routers;
