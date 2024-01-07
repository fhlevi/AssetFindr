import MainLayoutView from '@/components/templates/MainLayoutView.vue'

const ManageAssetRoute = {
    name: 'ManageAssetRouteView',
    path: '/manage-asset',
    component: MainLayoutView,
    children: [
        {
            name: 'ManageAssetPage',
            path: '',
            component: () => import('@/pages/manage-asset/ManageAssetPage.vue')
        }
    ]
}

export default ManageAssetRoute