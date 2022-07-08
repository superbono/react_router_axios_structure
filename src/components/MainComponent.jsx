import React from 'react';

const MainComponent = (selectedMenuTitle) => {

    const drawModule = (item) => {

        // if(!item.menuTitle) {
        //   return <CalendarComponent/>;
        // }
        // switch (item.menuTitle.path) {

        //   case MODULE_ID.MODULE_ID_CALENDAR:
        //     return <CalendarComponent/>        
        //   case MODULE_ID.MODULE_ID_RENT_BOOKING:
        //     return <BasicForm/>        

        // return (
        //   <h1>main page</h1>
        // )
        switch (item.menuTitle.path) {
            default:
                return null
        }
    }

    return (
        <>
            <div>Main Page</div>
        </>
    )
}


export default MainComponent
