import LayoutMain from '@/layouts/Main'
import Home from '@/components/Home'
import About from '@/components/About'

export default {
    path: '/',
    component: LayoutMain,
    meta: { mwAuth: true },
    children: [
        {
            path: 'home',
            name: 'Home',
            component: Home
        },
        {
            path: 'about',
            name: 'About',
            component: About
        }
    ]
}