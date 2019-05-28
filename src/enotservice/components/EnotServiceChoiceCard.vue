<template>
	<v-card flat class="es-card">
		<v-card-text v-on:click="setActive()">
			<center>
				<img v-bind:src="'http://localhost:3000/uploads/' + schema.icon">
				<p style="font-size:18px">{{ schema.text }}</p>
			</center>
		</v-card-text>
		<v-layout v-if="kind === 'Counter'" mb-2 mr-2 ml-2 row style="border: 1px solid #d2d2d2;border-radius: 40px;">
			<v-btn color="primary darken-5" fab flat small v-on:click="minus()">
				<v-icon>chevron_left</v-icon>
			</v-btn>
			<v-spacer/>
			<p style="font-size:18px;margin-top:10px">{{count}} шт</p>
			<v-spacer/>
			<v-btn color="primary darken-5" fab flat small v-on:click="plus()">
				<v-icon>chevron_right</v-icon>
			</v-btn>
		</v-layout>
	</v-card>
</template>
<script>
export default {
	name: 'es-choice-card',
	props: {
		schema: {
			type: Object
		},
		kind: {
			type: String
		},
		isActive: {
			type: Boolean,
			default: false
		},
		name: {
			type: String
		},
		result: {
			type: Object,
			deep: true
		}
	},
	data: () => ({
		count: 0
	}),
	methods: {
		minus(){
			if(this.count > 0){
				this.count -= 1
			}
		},
		plus(){
			if(this.count < 5){
				this.count += 1
			}
		},
		setActive(){
			if(this.kind == 'Counter'){
				this.plus()
			}
			else{
				this.$parent.setActive(this.name, this.schema.text)
			}
		}
	}
}
</script>
