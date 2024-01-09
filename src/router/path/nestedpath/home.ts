import MainLayoutView from '@/components/templates/MainLayoutView.vue'

const HomeRoute = {
    name: 'MainRouteView',
    path: '/home',
    component: MainLayoutView,
    children: [
        {
            name: 'HomePage',
            path: '',
            alias: '/',
            component: () => import('@/pages/home/HomePage.vue'),
            meta: {
                title: 'Home'
            }
        }
    ]
}

export default HomeRoute