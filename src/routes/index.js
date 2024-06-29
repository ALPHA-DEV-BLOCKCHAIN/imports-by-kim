import {createRouter, createWebHistory} from 'vue-router'

import Homepage from "./../components/Homepage.vue"
import Product from "./../components/Product.vue"
import AboutUs from "./../components/AboutUs.vue"
import ContactUs from "./../components/ContactUs.vue"
import Cart from "../components/Cart.vue"
import ServiceOffered from "./../components/ServiceOffered.vue"
const routes = [
{
path: '/',
name: 'home',
component: Homepage,
},

{
path: '/product',
name: 'product',
component: Product,
},
{
path: '/aboutus',
name: 'aboutus',
component: AboutUs,
},
{
    path: '/contactUs',
    name: 'contactUs',
    component: ContactUs,
  },
{
    path: '/cart',
    name: 'cart',
    component: Cart,
  },
  {
    path: '/serviceOffered',
    name: 'serviceOffered',
    component: ServiceOffered,
  },

]
const router = createRouter({
history: createWebHistory(),
routes,
})
export default router