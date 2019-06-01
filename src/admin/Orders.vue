<template>
	<v-content>
		<es-admin-toolbar/>
		<v-container>
			<v-layout row wrap>
				<v-flex md9 sm12 xs12 pa-3>
					<v-card v-if="orders">
						<v-card-title>ИСТОРИЯ ЗАКАЗОВ</v-card-title>
						<template v-for="(order, index) in orders">
							<v-divider v-bind:key="'divider_' + index"></v-divider>
							<v-card-text v-bind:key="index" class="es-clickable" v-on:click="setActiveOrder(order)">
								<h4> <v-icon color="primary" small>location_on</v-icon> {{order.city}}, {{order.region}}, ул. {{order.street}}, дом {{order.home}}, под. {{order.tier}}, кв {{order.accommodation}}</h4>
								<template v-for="(item, index) in order.segments">
									<template v-for="(value, name) in item">
										<v-chip v-if="typeof value === 'string'" color="primary"  v-bind:key="name + index" outline>
											<v-avatar>
												<v-icon>check_circle</v-icon>
											</v-avatar>
											{{value}}
										</v-chip>
										<template v-else v-for="(v, index) in value">
											<v-chip v-if="v.value !== 0" color="primary" v-bind:key="name + index" outline>
												<v-avatar>
													<v-icon>check_circle</v-icon>
												</v-avatar>
												{{v.name}}: {{v.value}}x
											</v-chip>
										</template>
									</template>
								</template>
								<v-chip color="primary" outline="">
									<v-avatar>
										<v-icon>check_circle</v-icon>
									</v-avatar>
									{{ order.price }} сум
								</v-chip>
							</v-card-text>
						</template>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</v-content>
</template>
<script>
import axios from 'axios'
export default {
	name: 'Orders',
	data:() => ({
		activeOrder: null,
		orders: null
	}),
	mounted(){
		axios({
			method: 'GET',
			url: 'http://enotservice.uz/api/orders',
			headers: {
				'Conente-Type': 'application/json',
				'Accept-Version': '1.0.0'
			}
		}).then(response => {
			this.orders = response.data.data
		})
	}
}
</script>

