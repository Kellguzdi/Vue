
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        redirect: '/inicio'
    },
    {
        path:'/',
        component: {
            render(c){
                return c('router-view')
            }
        },
        children:[
            {
                path:'/inicio',
                name:'inicio',
                component:()=> import('../components/Inicio.vue')
            },
            {
                path:'/main',
                name:'main',
                component:()=> import('../components/Main.vue')
            },
            {
                path:'/tercero',
                name:'tercero',
                component:()=> import('../components/Tercero.vue')
            },
            {
                path:'/availableFlights',
                name:'availableFlights',
                component:()=> import('../components/VuelosDisponibles.vue')
            },
            {
                path:'/canceledFlights',
                name:'canceledFlights',
                component:()=> import('../components/VuelosCancelados.vue')
            },
            {
                path:'/reservations',
                name:'reservations',
                component:()=> import('../components/Reservaciones.vue')
            },
            {
                path:'/nextFlight',
                name:'nextFlight',
                component:()=> import('../components/proximoVuelo.vue')
            },
            {
                path:'/lineFlights',
                name:'lineFlights',
                component:()=> import('../components/LineasVuelo.vue')
            },
            {
                path:'/seats',
                name:'seats',
                component:()=> import('../components/Asientos.vue')
            },
        ]
    }
]
const router = new VueRouter({
    mode: 'history', // Use 'history' mode to remove the hash from the URL
    routes
  })
  
  export default router