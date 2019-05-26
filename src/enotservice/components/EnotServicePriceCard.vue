<template>
	<v-card class="br-4">
		<v-card-text>
			<v-layout row>
				<v-flex md9 xs9 sm9>
					<p class="es-card-sub-title">{{text}}</p>
					<p class="es-card-title">{{price}}</p>
				</v-flex>
				<v-flex md3 xs3 sm3>
					<img v-bind:src="getImgUrl()">
				</v-flex>
			</v-layout>
			<v-layout>
				<v-flex md12>
					<v-btn color="primary" block round to="/order">
						Заказать
					</v-btn>
				</v-flex>
			</v-layout>
		</v-card-text>
	</v-card>
</template>
<script>
export default {
	name: 'es-price-card',
	props: {
		text: {
			type: String,
			default: '1 комнатная'
		},
		price: {
			type: String,
			default: 'от 40000 сум'
		},
		image: {
			type: String,
			default: 'home'
		}
	},
	methods: {
		getImgUrl(){
			var images = require.context('../assets/icons/', false, /\.png$/)
			return images('./' + this.image + ".png")
		}
	}
}
</script>
