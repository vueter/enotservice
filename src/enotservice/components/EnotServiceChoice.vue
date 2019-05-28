<template>
	<v-layout row class="es-choice">
		<v-flex md2 xs2 class="es-choice-btn">
			<v-btn icon v-on:click="update(activeIndex - 1)"><v-icon>chevron_left</v-icon></v-btn>
		</v-flex>
		<v-flex md8 xs8 class="es-choice-content">
			{{ items[activeIndex].text }}
		</v-flex>
		<v-flex md2 xs2 class="es-choice-btn">
			<v-btn icon v-on:click="update(activeIndex + 1)"><v-icon>chevron_right</v-icon></v-btn>
		</v-flex>
	</v-layout>
</template>
<script>
export default {
	name: 'es-choice',
	props: {
		items: {
			type: Array,
			default : () => {
				return []
			}
		},
		circle: {
			type: Boolean,
			default: false
		},
		name: {
			type: String
		}
	},
	data: () => {
		return {
			activeIndex: 0
		}
	},
	methods: {
		update(target){
			if(0 <= target && target < this.items.length){
				this.activeIndex = target
			}
			else{
				if(this.circle === true){
					if(target < 0){
						this.activeIndex = this.items.length - 1
					}
					else{
						this.activeIndex = 0
					}
				}
			}
		}
	}
}
</script>
