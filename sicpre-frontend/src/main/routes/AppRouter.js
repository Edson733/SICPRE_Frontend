import {Route, Routes} from 'react-router-dom';
import {Login} from '../pages/Login';
import PageNotFound from '../pages/PageNotFound';
import PublicRouter from './PublicRouter';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/*" element={<PageNotFound/>}/>
                
                <Route path="/" element={
                    <PublicRouter>
                        <Login/>
                    </PublicRouter>
                }/>
            </Routes>
        </>
    );
};