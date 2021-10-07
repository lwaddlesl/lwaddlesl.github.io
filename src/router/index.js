import VueRouter from 'vue-router'
import Convert from '../pages/Convert'
import Portfolio from '../pages/Portfolio'


export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'convert',
            component: Convert
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio
        },
    ]
})