<template>
	<v-content>
		<es-toolbar />
		<v-container>
			<v-layout row wrap>
				<v-flex md9 sm12 xs12 pa-3>
					<h3>Личный кабинет</h3>
				</v-flex>
				<v-flex md3 xs12 sm12 pa-3>
					<v-btn large round color="primary" block to="/order">Создать новый заказ на уборку</v-btn>
				</v-flex>
			</v-layout>
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
							</v-card-text>
						</template>
					</v-card>
				</v-flex>
				<v-flex md3 sm12 xs12 pa-3>
					<v-card>
						<v-card-title>Получите скидку на уборку</v-card-title>
						<v-divider></v-divider>
						<v-card-text>
							<p>Пригласите друга и за каждого вы получите 5000 сум. Эти кредиты Вы сможете тратить на уборку своей квартиры или дома</p>
							<strong>Делитесь этой ссылкой со своими друзьями</strong>
							<v-text-field v-model="inviteCode" type="url"/>
						</v-card-text>
						<v-card-text v-if="activeOrder">
							<center><font style="font-weight: bold;font-size:16px">Ваш бонусный баланс</font></center>
							<v-btn large round color="primary" block v-on:click="pay(activeOrder._id)">{{activeOrder.price}} сум</v-btn>
						</v-card-text>
					</v-card>
				</v-flex> 
			</v-layout>
		</v-container>
	</v-content>
</template>
<script>
import axios from 'axios'
export default {
	name: 'EnotServiceProfile',
	data: () => ({
		inviteCode: '',
		orders: null,
		activeOrder: null
	}),
	methods: {
		setActiveOrder(order){
			this.activeOrder = order
		},
		pay(target){
			this.$router.push({ path: '/payment/' + target })
		}
	},
	computed: {
		isGuest(){ return this.$store.state.isGuest },
		user(){ return this.$store.state.user }
	},
	mounted(){
		if(this.isGuest === true || this.user === null){
			this.$router.push({ path: '/login' })
		}
		this.inviteCode = 'http://enotservice.uz/i/' + this.user._id
		axios({
			method: 'POST',
			url: 'http://enotservice.uz/api/orders',
			data: {
				user: this.user._id
			},
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
<style>
.es-clickable{
	cursor: pointer;
}
.es-clickable:hover{
	background-color: #E3E3E3 !important;
}
</style>

