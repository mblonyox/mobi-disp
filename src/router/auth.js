import LayoutAuth from '@/layouts/Auth'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import ResetPassword from '@/components/ResetPassword'

export default {
    path: '/auth',
    component: LayoutAuth,
    meta: { mwGuest: true },
    children: [
        {
            path: 'login',
            name: 'Login',
            component: Login
        },
        {
            path: 'signup',
            name: 'SignUp',
            component: SignUp
        },
        {
            path: 'reset-pass',
            name: 'ResetPassword',
            component: ResetPassword
        }
    ]
}