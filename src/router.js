import { createRouter, createWebHistory } from 'vue-router';
import ListingPage from './pages/ListingPage.vue';
import ProductPage from './pages/ProductPage.vue';
import CartPage from './pages/CartPage.vue';
import CheckoutPage from './pages/CheckoutPage.vue';

const routes = [
  {
    path: '/',
    component: ListingPage,
    name: 'list',
  },
  {
    path: '/product/:id(\\d+)',
    component: ProductPage,
    props: true,
    name: 'product',
  },
  {
    path: '/cart',
    component: CartPage,
    name: 'cart',
  },
  {
    path: '/checkout',
    component: CheckoutPage,
    name: 'checkout',
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
