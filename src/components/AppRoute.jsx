import React from 'react';
import {privateRoute, publicRoute} from "./routes/index.js";
import {Route, Routes} from "react-router-dom";

const AppRoute = () => {
    const selectUser = true;
    return (
        <>
            <Routes>
                {selectUser
                    ? privateRoute.map(route => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<route.component />}
                        />
                    ))
                    : publicRoute.map(route => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<route.component />}
                        />
                    ))
                }
            </Routes>

        </>
    );
};

export default AppRoute;