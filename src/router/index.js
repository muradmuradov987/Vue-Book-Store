import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NewBooks from '../views/NewBooks.vue'
import BestSellers from '../views/BestSellers.vue'
import GiftCard from '../views/GiftCard.vue'
import Contact from '../views/Contact.vue'
import Profile from '../views/Profile/Profile.vue'
import Basket from '../views/Basket.vue'
import ProductDetails from '../views/ProductDetails.vue'
import DiscountBooks from '../views/DiscountBooks.vue'
import ForgettenPassword from '../views/Profile/ForgottenPassword'
import Register from '../views/Profile/Register'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/newbooks',
    name: 'NewBooks',
    component: NewBooks
  },
  {
    path: '/best-sellers',
    name: 'BestSellers',
    component: BestSellers
  },

  {
    path: '/gift-card',
    name: 'GiftCard',
    component: GiftCard
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket
  },
  {
    path: '/product-details/:id',
    name: 'ProductDetails',
    component: ProductDetails
  },
  {
    path: '/discount-books',
    name: 'DiscountBooks',
    component: DiscountBooks
  },
  {
    path: '/forgetten-password',
    name: 'ForgettenPassword',
    component: ForgettenPassword
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
