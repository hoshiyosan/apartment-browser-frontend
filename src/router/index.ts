import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import BrowseApartments from '@/views/apartments/BrowseApartments.vue'
import CreateApartment from '@/views/apartments/CreateApartment.vue'

import ApartmentDetails from '@/views/apartments/ApartmentDetails.vue'
import ApartmentSummary from '@/views/apartments/details/ApartmentSummary.vue'
import ApartmentRooms from '@/views/apartments/details/ApartmentRooms.vue'
import ApartmentPricing from '@/views/apartments/details/ApartmentPricing.vue'
import ApartmentAnalysis from '@/views/apartments/details/ApartmentAnalysis.vue'
import ApartmentComment from '@/views/apartments/details/ApartmentComment.vue'

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
    component: ApartmentDetails,
    children: [
      {
        path: 'summary',
        name: 'ApartmentSummary',
        component: ApartmentSummary
      },
      {
        path: 'rooms',
        name: 'ApartmentRooms',
        component: ApartmentRooms
      },
      {
        path: 'pricing',
        name: 'ApartmentPricing',
        component: ApartmentPricing
      },
      {
        path: 'analysis',
        name: 'ApartmentAnalysis',
        component: ApartmentAnalysis
      },
      {
        path: 'comment',
        name: 'ApartmentComment',
        component: ApartmentComment
      }
    ]
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
