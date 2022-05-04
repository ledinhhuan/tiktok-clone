import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DefaultLayout from '@/layouts/default.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: DefaultLayout,
			children: [
				{
					path: '/',
					component: HomeView
				}
			]
		}
	]
});

export default router;
