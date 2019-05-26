<template>
	<v-card class="es-request-card" v-bind:class="isActive === true ? 'active' : ''" v-on:click="isActive = isActive === true ? false : true">
		<v-card-text>{{ request }}</v-card-text>
	</v-card>
</template>
<script>
export default {
	name: 'es-request-card',
	props: {
		request: {
			type: String,
			default: ''
		}
	},
	data: () => ({
		isActive: false
	})
}
</script>
