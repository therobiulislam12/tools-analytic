import {createHashRouter} from 'react-router-dom';
import Main from '../Layouts/Main';
import PaidToolsAnalytic from '../components/PaidToolsAnalytic';
import { Dashboard } from '../components/Dashboard';
const router = createHashRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '',
                element: <Dashboard/>
            },
            {
                path: 'paid-tools-analytic',
                element: <PaidToolsAnalytic/>
            }
        ]
    }
]);

export default router;