<template>
	<v-card-text>
		{{data.title}}
		<v-layout row wrap>
			<template v-for="(item, index) in data.body">
				<template v-if="item.kind !== 'Choice'">
					<v-flex md3 xs12 sm12 pa-1 v-for="(component, jindex) in item.items" v-bind:key="item.name + '_' + index + '_' + jindex">
						<es-choice-card
							v-bind:isActive="reactiveValue[item.name] == component.text"
							v-bind:setActive="setActive" 
							v-bind:schema="component" 
							v-bind:name="item.name" 
							v-bind:index="jindex" 
							v-bind:kind="item.kind" 
							v-bind:key="jindex"/>
					</v-flex>
				</template>
			</template>
			<v-flex md6 xs12 sm12 pa-1 v-if="hasChoice(data.body)">
				<template v-for="(item, index) in data.body">
					<template v-if="item.kind === 'Choice'">
						<es-choice
							v-bind:key="item.name + '_' + index" 
							v-bind:items="item.items" 
							v-bind:setActive="setActive" 
							v-bind:name="item.name"/>
					</template>
				</template>
			</v-flex>
			<v-flex md6 sm12 xs12 pa-1 v-if="isPayment">
				Оплата картой посредством платежной системы CLICK или Payme наиболее рекомендуемый способ оплаты. Тут будет дополнительный описательный текст или его не будет вовсе
			</v-flex>
		</v-layout>
	</v-card-text>
</template>
<script>
import Vue from 'vue'
export default {
	name: 'OrderDisplayer',
	props: {
		data: {
			type: Object,
			default(){
				return null
			}
		},
		value: {
			type: Object,
			default: () => ({})
		},
		isPayment: {
			type: Boolean,
			default: false
		},
		onUpdate: Function
	},
	methods: {
		hasChoice(data){
			for(const item of data){
				if(item.kind == 'Choice'){
					return true
				}
			}
			return false
		},
		setActive(name, value, index){
			if(index !== undefined){
				this.value[name][index] = value
				this.$emit('input', this.value)
			}
			else{
				this.value[name] = value
				this.$emit('input', this.value)
			}
			this.$forceUpdate()
			this.onUpdate()
		}
	},
	computed: {
		reactiveValue(){
			return this.value
		}
	}
}
</script>
