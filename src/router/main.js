import LayoutMain from '@/layouts/Main'
import Home from '@/components/Home'
import Rekam from '@/components/Rekam'
import About from '@/components/About'

export default {
    path: '/',
    component: LayoutMain,
    meta: { mwAuth: true },
    children: [
        {
            path: '',
            name: 'Home',
            component: Home
        },
        {
            path: 'rekam',
            name: 'Rekam',
            component: Rekam
        },
        {
            path: 'about',
            name: 'About',
            component: About
        }
    ]
}