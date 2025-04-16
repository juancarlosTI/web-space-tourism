import {  Routes, Route } from 'react-router-dom'
import HomePage from './home';
import Destination from './destination';
import Technology from './tecnology';
import Crew from './crew';

const AppRoutes = () => {
    return (

        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/destination" element={<Destination />} />
            <Route exact path="/crew" element={<Crew />} />
            <Route exact path="/tech" element={<Technology />} />
        </Routes>

    )
}

export { AppRoutes }