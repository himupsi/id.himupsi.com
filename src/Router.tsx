import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home"
import NotFound from "./pages/NotFound";

interface RouterDef {
    path: string,
    name?: string,
    element:JSX.Element
    visible: boolean,
}

export const routeDefs: RouterDef[] = [
    {
        path: "*",
        element: <NotFound />,
        visible: false
    },
    {
        path: "/",
        name: 'Home',
        element: <Home />,
        visible: false
    },
]

export const visibleRoutes = routeDefs.filter(routeDef => routeDef.visible);

export const router = createBrowserRouter(routeDefs);

