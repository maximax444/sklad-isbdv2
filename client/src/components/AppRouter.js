import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {myRoutes} from "../routes";

const AppRouter = () => {
    return (
        <Routes>
            {myRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact />
            )}
        </Routes>
    );
};

export default AppRouter;