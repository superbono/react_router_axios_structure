import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import NotFound from '../components/commons/NotFound';
import Route1 from './route1'

const RouteContainer = () => {

    // if (process.env.REACT_APP_STAGE === 'PROD') {
    //     console.log = function noConsole() { }
    // }

    return (
        <>
            <BrowserRouter>
                <Routes>
                    {Route1.map((entry) => {
                        console.log('entry==>> ', entry);
                        return <Route {...entry} key={entry.path} />
                    })}
                    {/* {Route2.map((entry) => {
                        console.log('entry==>> ', entry);
                        return <Route {...entry} key={entry.path} />
                    })} */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>

        </>
    );
};

export default RouteContainer;