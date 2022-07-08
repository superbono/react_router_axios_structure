import React, { Children, useCallback, useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import MainComponent from '../components/MainComponent';
import { Modal, Tabs, Button } from 'antd';
// import Layout from '../../common/layout/containers/layout';
import 'antd/dist/antd.min.css';
// import Calendar from '../components/rentMng/Calendar';
// import BasicForm from '../components/BasicForm';
// import BizForm from '../components/BizForm';
import { useNavigate, useLocation } from 'react-router-dom';
// import routePaths from '../routes/routePaths';
// import iconuser from '../images/icon_user.svg';
import LeftMenu from '../components/commons/LeftMenu';
import Header from '../components/commons/Header';
// import Payments from '../components/payments/payments';
// import PaymentsResult from '../components/payments/paymentsResult';
// import PaymentsFail from '../components/payments/paymentsFail';
// import loginUtil, { PINCAR_LOGIN_JWT } from '../utils/loginUtil';
// import util from '../utils/util';

const CommonLayout = ({ children }) => {
    // const { loginSuccessData } = useSelector((store) => ({
    //     ...store.loginPinca
    // }));
    const navigate = useNavigate();
    const location = useLocation();

    // useEffect(() => {
    //     console.log('newTabIndex====>> ', util.readCookie('obj'), ' : : ', loginSuccessData);
    //     const loginChk = loginUtil.getPincarJWT(PINCAR_LOGIN_JWT);
    //     if (!loginChk) {
    //         if (!(location.pathname.startsWith('/payments/') || location.pathname === '/paymentsResult' || location.pathname === '/paymentsFail')) {
    //             navigate(routePaths.LOGIN);
    //         }
    //     }
    //     util.readCookie('obj')
    // }, [])

    return (
        <div className="webapp_container">
            {
                // (!(location.pathname.startsWith('/payments/') || location.pathname === '/paymentsResult' || location.pathname === '/paymentsFail')) ?
                <>
                    <LeftMenu isMainPage={location.pathname === '/' ? true : false} />
                    <Header >
                        {children}
                    </Header>
                </>
                // : location.pathname.startsWith('/payments/') ? <Payments />
                //     : location.pathname === '/paymentsResult' ? <PaymentsResult />
                //         : location.pathname === '/paymentsFail' ? <PaymentsFail />
                //             : null
            }
        </div>
    )

}

export default CommonLayout
