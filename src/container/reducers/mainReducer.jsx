import { handleActions } from 'redux-actions'
// import axios from '../../utils/axios'
// import APIS from '../../apis'

const GET_MAIN_MODULE = 'MAIN/GET_MAIN_MODULE'

const initialState = {

    main: {},
    initVal: {},

}

//   export const getMainModule = () => (dispatch) => {     
//     axios.post(APIS.main, {}, {}).then((res) => {    
//           dispatch({
//             type: GET_MAIN_MODULE,
//             payload: {
//               home: res.data.data
//             }
//           })


//     })  
// }

export default handleActions(
    {
        [GET_MAIN_MODULE]: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },
    }, initialState)
