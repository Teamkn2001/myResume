import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../pages/homePages/LandingPage";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {index: true, element: <LandingPage />}
        ]
    }
])

export default function AppRouter() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}