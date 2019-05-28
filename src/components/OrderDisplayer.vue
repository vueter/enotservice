<template>
	<v-card-text>
		{{data.title}} <v-btn v-on:click="show()">Show</v-btn>
		<v-layout row wrap>
			<template v-for="(item, index) in data.body">
				<template v-if="item.kind !== 'Choice'">
					<v-flex md3 xs12 sm12 pa-1 v-for="(component, jindex) in item.items" v-bind:key="item.name + '_' + index + '_' + jindex">
							<es-choice-card v-bind:schema="component" v-bind:name="item.name" v-bind:result="result" v-bind:index="jindex" v-bind:kind="item.kind" v-bind:key="jindex"/>
					</v-flex>
				</template>
			</template>
			<v-flex md6 xs12 sm12 pa-1 v-if="hasChoice(data.body)">
				<template v-for="(item, index) in data.body">
					<template v-if="item.kind === 'Choice'">
						<es-choice v-bind:key="item.name + '_' + index" v-bind:items="item.items" v-bind:name="item.name"/>
					</template>
				</template>
			</v-flex>
		</v-layout>
	</v-card-text>
</template>
<script>
export default {
	name: 'OrderDisplayer',
	props: {
		data: {
			type: Object,
			default(){
				return null
			}
		}
	},
	data: () => ({
		result: {}
	}),
	methods: {
		hasChoice(data){
			for(const item of data){
				if(item.kind == 'Choice'){
					return true
				}
			}
			return false
		},
		setActive(name, value){
			this.result[name] = value
		},
		show(){
			console.log(this.result)
		}
	},
	created(){
		for(const item of this.data.body){
			if(item.kind === 'Counter'){
				var array = []
				for(const _ of item.items){
					array.push(0)
				}
				this.result[item.name] = array
			}
			else{
				this.result[item.name] = item.items[0].text
			}
		}
	}
}
</script>
