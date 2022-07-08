import routePaths from './routePaths'
import loadable from '@loadable/component';
import MAIN from '../containers/MainContainer'

// const MAIN = loadable(() => import('../containers/MainContainer'));

// const CalendarContainer = loadable(()=>import('../containers/rentMng'));
// const Register = loadable(()=>import('../rent_note_page/account/components/Register'));


/**
 * todo- 메인페이지 교체
 */
const Route1 = [
    {
        path: routePaths.INDEX,
        element: <MAIN />
    }
]

export default Route1
