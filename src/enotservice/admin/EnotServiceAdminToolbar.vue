<template>
	<v-toolbar color="info" dark>
		<v-toolbar-items>
			<v-btn flat v-for="(nav, index) in navs" v-bind:key="index" v-bind:to="nav.link">{{ nav.text }}</v-btn>
		</v-toolbar-items>
		<v-spacer></v-spacer>
		<v-toolbar-items>
			<v-menu v-bind:nudge-width="200" offset-y>
					<template v-slot:activator="{ on }">
						<v-btn icon v-on="on">
							<v-icon>
								more_vert
							</v-icon>
						</v-btn>
					</template>
					<v-list>
						<v-list-tile v-on:click="go('/admin/logout')">
							<v-list-tile-title>Logout</v-list-tile-title>
						</v-list-tile>
					</v-list>
				</v-menu>
		</v-toolbar-items>
	</v-toolbar>
</template>
<script>
import Routable from '../mixins/Routable'
export default {
	name: 'es-admin-toolbar',
	mixins: [Routable],
	data: () => ({
		navs: [
			{ text: 'Home', link: '/admin/home' },
			{ text: 'Orders', link: '/admin/orders' },
			{ text: 'Users', link: '/admin/grud/users' },
			{ text: 'Cities', link: '/admin/grud/cities' },
			{ text: 'Regison', link: '/admin/grud/regions' },
			{ text: 'Order Elements', link: '/admin/grud/order-elements' },
			{ text: 'Payment Elements', link: '/admin/grud/payment-elements' },
			{ text: 'Info', link: '/admin/grud/info' },
			{ text: 'Slider', link: '/admin/grud/slider' },
			{ text: 'Requests', link: '/admin/grud/requests' },
			{ text: 'File Upload', link: '/admin/upload' }
		]
	})
}
</script>

