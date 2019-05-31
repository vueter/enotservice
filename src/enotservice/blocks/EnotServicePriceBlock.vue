<template>
	<div class="floating bg-secondary" id="services">
		<v-container>
			<h3 class="block-title">Сколько стоит уборка квартиры</h3>
			<center>
				<p class="block-sub-title">Стоимость уборки квартиры напрямую зависит от нескольких критериев, таких как площадь помещения, колиество комнат и санузлов. Так же необходимо принять в учет тип планируемой уборки.</p>
			</center>
			<v-layout row wrap v-if="schema !== null">
				<v-flex md3 xs12 sm12 pa-1 v-for="(item, index) in schema[0].body[1].items" v-bind:key="index">
					<template v-if="index < 3">
						<es-price-card v-bind:image="'room-' + (index + 1)" v-bind:text="item.text" v-bind:price="'от ' + item.price + ' сум'"/>
					</template>
				</v-flex>
				<v-flex md3 xs12 sm12 pa-1>
					<es-price-card image="home" text="Свой дом" v-bind:price="'от ' + schema[0].body[0].items[1].price + ' сум'"/>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>
<script>
import axios from 'axios'
export default {
	name: 'es-price-block',
	data: () => ({
		schema: null
	}),
	mounted(){
		axios({
			method: 'GET',
			url: 'http://localhost:3000/schema',
			headers: {
				'Content-Type': 'application/json',
				'Accept-Version': '1.x'
			}
		}).then(response => {
			if(response.data.error === 'Ok'){
				this.schema = response.data.data
			}
		})
	}
}
</script>

