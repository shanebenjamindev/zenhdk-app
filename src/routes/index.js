import { Route } from 'react-router-dom';
import { lazy } from 'react';

const routes = [
    {
        path: "",
        element: lazy(() => import("../components/Main")),
        nested: [
            {
                path: "/dashboard",
                element: lazy(() => import("../pages/Admin/Dashboard")),
            },
            {
                path: "/sales",
                element: lazy(() => import("../pages/Admin/Sales")), // Make sure to correct the import path
            }
        ]
    },
    {
        path: "/login",
        element: lazy(() => import("../pages/Auth")), // Auth page without header
    },
];

const renderRoutes = () => {
    return routes.map((route) => {
        if (route.nested) {
            return (
                <Route key={route.path} path={route.path} element={<route.element />}>
                    {route.nested.map((item) => (
                        <Route key={item.path} path={item.path} element={<item.element />} />
                    ))}
                </Route>
            );
        } else {
            return <Route key={route.path} path={route.path} element={<route.element />} />;
        }
    });
};

export default renderRoutes;
