import Login from './Views/Login';
import Home from './Views/Home';
import Register from './Views/Register';
import NotFound from './Views/NotFound';

const routes = [
    {
        path: '/register',
        component: Register,
        isPrivate: false,
    },
    {
        path: '/login',
        component: Login,
        isPrivate: false,
    },
    {
        path: '/home',
        component: Home,
        isPrivate: true,
    },
    {
        path: '/*',
        component: NotFound,
        isPrivate: true,
    },
];

export default routes;
