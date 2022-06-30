import React from 'react';
import { Route, Routes } from 'react-router-dom';
import StartPage from './../pages/StartPage/StartPage';

const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<StartPage/>} />
        </Routes>
    );
};

export default AppRouter;