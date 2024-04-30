import { createRouter, createWebHistory } from 'vue-router';
import ListingPage from './pages/ListingPage.vue';
import ProductPage from './pages/ProductPage.vue';
import CartPage from './pages/CartPage.vue';
import CheckoutPage from './pages/CheckoutPage.vue';

const routes = [
  {
    path: '/',
    component: ListingPage
  },
  {
    path: '/product/:id',
    component: ProductPage,
    props: true
  },
  {
    path: '/cart',
    component: CartPage
  },
  {
    path: '/checkout',
    component: CheckoutPage
  }

]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

