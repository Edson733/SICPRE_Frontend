import {Route, Routes} from 'react-router-dom';
import {Login} from '../pages/Login';
import PublicRouter from './PublicRouter';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={
                    <PublicRouter>
                        <Login/>
                    </PublicRouter>
                }/>
            </Routes>
        </>
    );
};