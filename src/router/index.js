import { createRouter, createWebHistory } from 'vue-router'

const PokemonApp = () => import('../views/PokemonApp.vue')
const PokemonDetails = () => import('../views/PokemonDetails.vue')
const HomeView = () => import('../views/HomeView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pokemons',
      name: 'pokemons',
      component: PokemonApp
    },
    {
      path: '/pokemon/:id',
      name: 'pokemonDetails',
      component: PokemonDetails
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
