import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import BrowseApartments from '@/views/apartments/BrowseApartments.vue'
import CreateApartment from '@/views/apartments/CreateApartment.vue'
import ApartmentDetails from '@/views/apartments/ApartmentDetails.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/apartments/browse',
    name: 'BrowseApartments',
    component: BrowseApartments
  },
  {
    path: '/apartments/create',
    name: 'CreateApartments',
    component: CreateApartment
  },
  {
    path: '/apartment/:apartmentId',
    name: 'ApartmentDetails',
    component: ApartmentDetails
  },
  {
    path: '/settings',
    name: 'Settings',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Settings.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
