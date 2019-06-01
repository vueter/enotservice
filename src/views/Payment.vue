<template>
	<v-content>
		<es-toolbar />
		<v-container v-if="order">
			<v-layout>
				<v-flex md7 offset-md1 pa-3>
					<v-stepper v-model="step" flat>
						<v-stepper-header>
							<v-stepper-step :complete="step > 1" step="1">Реистрация</v-stepper-step>
							<v-divider></v-divider>
							<v-stepper-step :complete="step > 2" step="2">Детали заказа</v-stepper-step>
							<v-divider></v-divider>
							<v-stepper-step step="3">Оплата</v-stepper-step>
						</v-stepper-header>
					</v-stepper>
					<br/>
					<v-card>
						<v-card-title>ИНФОРМАЦИЯ О ПЛАТЕЖЕ</v-card-title>
						<template v-for="(item, index) in schema">
							<template>
								<v-divider v-bind:key="'divider' + index"></v-divider>
							</template>
							<OrderDisplayer v-bind:isPayment="true" v-bind:data="item" v-model="values[index]" v-bind:value="values[index]" v-bind:key="index"></OrderDisplayer>
						</template>
                        <v-card-text>
                            Введите промокод в поле ниже, если он у вас есть
                            <v-layout row wrap>
                                <v-flex md8 xs12 ms12 pa-1>
                                    <v-text-field box/>
                                </v-flex>
                                <v-flex md4 xs12 sm12 pa-1>
                                    <v-btn block large color="primary" round>Применить</v-btn>
                                </v-flex>
                            </v-layout>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-text>
                            <v-btn block color="primary" round large v-on:click="pay">Перейти к оплате</v-btn>
                        </v-card-text>
					</v-card>
				</v-flex>
				<v-flex md3 pa-3 class="hidden-sm-and-down">
					<v-card class="br-4">
						<v-card-title>
							Ваш заказ
						</v-card-title>
						<v-card-text v-if="order !== null && order.data.length > 0">
							<template v-for="(item, index) in order.data[0].segments">
								<template v-for="(value, name) in item">
									<v-chip v-if="typeof value === 'string'" color="teal" text-color="white" v-bind:key="name + index">
										<v-avatar>
											<v-icon>check_circle</v-icon>
										</v-avatar>
										{{value}}
									</v-chip>
									<template v-else v-for="(v, index) in value">
										<v-chip v-if="v.value !== 0" color="teal" text-color="white" v-bind:key="name + index">
											<v-avatar>
												<v-icon>check_circle</v-icon>
											</v-avatar>
											{{v.name}}: {{v.value}}x
										</v-chip>
									</template>
								</template>
							</template>
						</v-card-text>
						<v-divider></v-divider>
						<v-list>
							<v-list-tile>
								<v-list-tile-content>
									Общая сумма:
								</v-list-tile-content>
								<v-list-tile-action>
									{{order.data[0].price}}
								</v-list-tile-action>
							</v-list-tile>
						</v-list>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
        <es-footer />
	</v-content>
</template>
<script>
import axios from 'axios'
import OrderDisplayer from '@/components/OrderDisplayer'
export default {
	name: 'order',
	data: () => ({
		step : 3,
		order: null,
		schema: [],
		orderSchema: [],
		dialog: true
	}),
	components: { OrderDisplayer },
	methods: {
		getResult(data){
			const result = {}
			for(const item of data.body){
				if(item.kind === 'Counter'){
					var array = []
					for(const item of item.items){
						array.push({ name: item.text, value: 0 })
					}
					result[item.name] = array
				}
				else{
					result[item.name] = item.items[0].text
				}
			}
			return result
		},
		pay(){
			if(this.values[0].payment === 'CLICK'){
				const request = {
					phonenumber: '+998' + this.user.phonenumber,
					amount: this.order.data[0].price
				}
				axios({
					method: 'POST',
					url: 'http://enotservice.uz/api/pay',
					data: request,
					headers: {
						'Content-Type': 'application/json',
						'Accept-Version': '1.0.0'
					}
				}).then(response => {
					console.log(response.data)
				})
				
			}
		}
	},
	mounted(){
		if(!this.user){
			this.$router.push({ path: '/register' })
		}

		axios({
			method: 'POST',
			url: 'http://enotservice.uz/api/orders',
			data: {
				_id: this.$route.params.order_id
			},
			headers: {
				'Content-Type': 'application/json',
				'Accept-Version': '1.0.0'
			}
		}).then(response => {
			this.order = response.data
		})
		
		axios({
			method: 'GET',
			url: 'http://enotservice.uz/api/payment-schema',
			headers: {
				'Content-Type': 'application/json',
				'Accept-Version': '1.0.x'
			}
		}).then(response => {
			if(response.data.error == 'Ok'){
				this.schema = response.data.data
			}
		})

		axios({
			method: 'GET',
			url: 'http://enotservice.uz/api/schema',
			headers: {
				'Content-Type': 'application/json',
				'Accept-Version': '1.0.0'
			}
		}).then(response => {
			if(response.data.error === 'Ok'){
				this.orderSchema = response.data.data
			}
		})
	},
	computed: {
		values(){
			const values = []
			for(var i = 0; i < this.schema.length; i++){
				values.push(this.getResult(this.schema[i]))
			}
			return values
		},
		user(){
			return this.$store.state.user
		}
	}
}
</script>
