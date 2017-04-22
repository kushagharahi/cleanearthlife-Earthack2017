import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App.vue';

var VueSmoothScroll = require('vue-smoothscroll');

Vue.use(VueSmoothScroll);
Vue.use(VueRouter)
Vue.use(VueResource)

require('file-loader?name=[name].[ext]!../static/index.html');

const router = new VueRouter({
	mode: 'history',
	routes: [
	{
		path: '/',
		component: view('HomeComponent'),
		meta: {title: 'CleanEarth.life'}
	},{
		path: '/profile',
		component: view('ProfileComponent'),
		meta: {title: 'Find your Impact'}
	}]
});


router.beforeEach(function (to, from, next) {
	document.title = to.meta.title
	next()
});

const root = new Vue({
	el: '#app',
	router: router,
	render: function (h) {
		return h(App)
	},
	replace: false
});

function view (name) {
	return function (resolve) {
		require(['./components/' + name + '.vue'], resolve)
	}
}