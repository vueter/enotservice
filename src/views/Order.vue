<template>
	<v-content>
		<es-toolbar />
		<v-container>
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
					<v-card class="es-card-header">
						<v-card-title>РАССКАЖИТЕ НАМ О СВОЕЙ КВАРТИРЕ</v-card-title>
						<template v-for="(item, index) in schema">
							<template>
								<v-divider v-bind:key="'divider' + index"></v-divider>
							</template>
							<OrderDisplayer v-bind:onUpdate="update" v-bind:data="item" v-model="values[index]" v-bind:value="values[index]" v-bind:key="index"></OrderDisplayer>
						</template>
					</v-card>
					<v-card class="es-card-bottom">
						<v-card-title>КУДА НАМ ПРИЕХАТЬ?</v-card-title>
						<v-divider></v-divider>
						<v-card-text>
							<v-layout row wrap>
								<v-flex md4 xs12 sm12 pa-1>
									<v-autocomplete box v-bind:items="cities" v-model="city"/>
								</v-flex>
								<v-flex md4 xs12 sm12 pa-1>
									<v-autocomplete box v-bind:items="regions" v-model="region"/>
								</v-flex>
								<v-flex md4 xs12 sm12 pa-1>
									<v-text-field box label="Улица" v-model="street"/>
								</v-flex>
								<v-flex md4 xs12 sm12 pa-1>
									<v-text-field box label="Номер дома" type="number" v-model="home"/>
								</v-flex>
								<v-flex md4 xs12 sm12 pa-1>
									<v-text-field box label="Подъезд" type="number" v-model="tier"/>
								</v-flex>
								<v-flex md4 xs12 sm12 pa-1>
									<v-text-field box label="Квартира" type="number" v-model="accommodation"/>
								</v-flex>
							</v-layout>
							<v-btn color="primary" block round large v-on:click="createOrder">Продолжить</v-btn>
						</v-card-text>
					</v-card>
				</v-flex>
				<v-flex md3 pa-3 class="hidden-sm-and-down">
					<v-card class="br-4">
						<v-card-title>
							Ваш заказ
						</v-card-title>
						<v-card-text>
							<template v-for="(item, index) in getOrder().segments">
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
									{{getOrder().price}}
								</v-list-tile-action>
							</v-list-tile>
						</v-list>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
		<es-footer/>
	</v-content>
</template>
<script>
import axios from 'axios'
import OrderDisplayer from '@/components/OrderDisplayer'
export default {
	name: 'order',
	components: {OrderDisplayer},
	data: () => ({
		step : 2,
		types: ['Квартира', 'Свой дом'],
		numberRooms: ['1 комнатная', '2-х комнатная', '3-х комнатная', '4-х комнатная', '5-х комнатная'],
		cities: [],
		regions: [],
		schema: [],
		city: '',
		region: '',
		street: '',
		home: 1,
		tier: null,
		accommodation: null,
	}),
	methods: {
		getWhere(data, name, target, excludes = []){
			var items = []
			for(const item of data){
				if(item[name] === target && excludes.indexOf(item.name) === -1){
					items.push(item)
				}
			}
			return items
		},
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
		getOrder(){
			var price = 0;
			for(var i = 0; i < this.schema.length; i++){
				for(const item of this.schema[i].body){
					if(item.kind === 'Counter'){
						const values = this.values[i][item.name]
						for(var i = 0; i < values.length; i++){
							price += item.items[i].price * values[i].value
						}
					}
					else{
						const name = this.values[i][item.name]
						var p = 0
						for(const __item of item.items){
							if(__item.text == name){
								p = __item.price
							}
						}
						price += p
					}
					
				}
			}
			const order = {
				user: this.user._id,
				city: this.city,
				region: this.region,
				street: this.street,
				home: this.home,
				tier: this.tier,
				accommodation: this.accommodation,
				segments: this.values,
				price: price
			}
			return order
		},
		createOrder(){
			axios({
				method: 'POST',
				url: 'http://enotservice.uz/api/orders/create',
				headers: {
					'Content-Type': 'application/json',
					'Accept-Version': '1.0.0'
				},
				data: this.getOrder()
			}).then(response => {
				if(response.data.error == 'Ok'){
					this.$router.push({ path: '/payment/' + response.data.insertedId })
				}
			})
		},
		update(){
			this.$forceUpdate()
		}
	},
	mounted(){
		if(!this.user){
			this.$router.push({ path: '/register' })
		}
		axios({
			method: 'GET',
			url: 'http://enotservice.uz/api/schema',
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
			url: 'http://enotservice.uz/api/cities',
			headers: {
				'Content-Type': 'application/json',
				'Accept-Version': '1.0.x'
			}
		}).then(response => {
			const cities = []
			if(response.data.error === 'Ok'){
				for(const item of response.data.data){
					cities.push(item.name)
				}
			}
			this.cities = cities
			this.city = this.cities[0]
		})
		axios({
			method: 'GET',
			url: 'http://enotservice.uz/api/regions',
			headers: {
				'Content-Type': 'application/json',
				'Accept-Version': '1.0.x'
			}
		}).then(response => {
			const regions = []
			if(response.data.error === 'Ok'){
				for(const item of response.data.data){
					regions.push(item.name)
				}
			}
			this.regions = regions
			this.region = this.regions[0]
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
