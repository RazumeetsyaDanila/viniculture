import React from 'react';
import { Route, Routes } from 'react-router-dom';
import StartPage from './../pages/StartPage/StartPage';
import GamePage from './../pages/GamePage/GamePage';
import InfoPage from './../pages/InfoPage/InfoPage';

const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<StartPage/>} />
            <Route path="/game" element={<GamePage/>} />
            <Route path="/info" element={<InfoPage/>} />
        </Routes>
    );
};

export default AppRouter;