import React, { useEffect, useState } from 'react';
import CommonLayout from './CommonLayout';
import { useLocation } from 'react-router-dom';

import MainComponent from '../components/MainComponent';


const MainContainer = () => {
    const location = useLocation();
    const [viewPage, setViewPage] = useState(<MainComponent />);
    useEffect(() => {
        // dispatch(mainReducer.getMainModule())
        // axios.post('http://192.168.50.81:9090/test')
        // .then((res)=>{
        //   window.alert(res.data.test2);
        // })
        console.log('currentPage====>>>  ', location);

        const drawModule = (path) => {

            switch (path) {
                case '/':
                    return setViewPage(<MainComponent />)
                // case '/calendar':
                //   return setViewPage(<CalendarComponent />)
                // case '/rental_status':
                //   return setViewPage(<RentalList />)
                // // return setViewPage ( <RentalStatus/>  )
                // case '/bookRegister':
                //   return setViewPage(<RentalBookDetail />)
                // case '/dispatchReturnCarMng':
                //   return setViewPage(<DispatchReturnCarList />)
                // case '/bllgRcptClndr':
                //   return setViewPage(<BllgRcptClndr />)
                // case '/bllgSchDtl':
                //   return setViewPage(<BllgSchDtl />)
                // case '/bllgRcptList':
                //   return setViewPage(<BllgRcptList />)
                // case '/etcBllgHwrInpt':
                //   return setViewPage(<EtcBllgHwrInpt />)
                // case '/ostdOdList':
                //   return setViewPage(<OstdOdList />)
                // case '/ostdOdDtl':
                //   return setViewPage(<OstdOdDtl />)
                // case '/rentStbyCarCurrent':
                //   return setViewPage(<RentStbyCarCurrent />)
                // case '/registCarCurrent':
                //   return setViewPage(<RegistCarCurrent />)
                // case '/carRegist':
                //   return setViewPage(<CarRegist />)
                // case '/carInfoDetail':
                //   return setViewPage(<CarInfoDetail />)
                // case '/taxInvList':
                //   return setViewPage(<TaxInvList />)
                // case '/compInfo':
                //   return setViewPage(<CompInfo />)
                // case '/membersInfo':
                //   return setViewPage(<MembersInfo />)
                // case '/contractInfo':
                //   return setViewPage(<ContractInfo />)
                // case '/tossPaymentsTest':
                //   return setViewPage(<TossPaymentsTest />)
                default:
                    return null
            }
        }
        drawModule(location.pathname);
        // console.log('main/layout/index.jsx: ', selectedMenuTitle);
    }, [location.pathname]);
    return (
        <CommonLayout >
            {viewPage}
        </CommonLayout>
    );
};

export default MainContainer;