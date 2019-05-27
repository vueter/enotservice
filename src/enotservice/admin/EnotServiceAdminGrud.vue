<template>
	<v-layout>
		<v-flex md8 pa-1>
			<v-card>
				<v-toolbar card>
					<v-toolbar-title class="body-2 grey--text text-uppercase">{{ target }}</v-toolbar-title>
				</v-toolbar>
				<v-card-text>
					<v-data-table v-bind:headers="getHeaders()" :items="items">
						<template v-slot:items="props">
							<template v-for="(item, index) in props.item">
								<td v-bind:key="index" v-if="index !== '_id' && index !== '__v'">
									{{ item }}
								</td>
							</template>
							<td class="justify-center layout px-0">
								<v-icon small class="mr-2" v-on:click="edit(props)"> edit </v-icon>
								<v-icon small v-on:click="remove(props)"> delete </v-icon>
							</td>
						</template>
					</v-data-table>
				</v-card-text>
			</v-card>
		</v-flex>
		<v-flex md4 pa-1>
			<v-card>
				<v-toolbar card>
					<v-toolbar-title class="body-2 grey--text text-uppercase">{{submitText}}</v-toolbar-title>
					<v-spacer></v-spacer>
					<v-btn color="info" v-on:click="reset()">Reset</v-btn>
				</v-toolbar>
				<v-card-text>
					<v-layout row wrap v-for="(segment, index) in schema.segments" v-bind:key="index">
						<v-flex v-for="(component, index) in segment" v-bind:key="index">
							<v-combobox v-if="component.type === 'combobox'" v-bind:items="component.items" v-bind:label="component.text" color="info" box v-model="component.value"/>
							<v-text-field v-else v-bind:type="component.type" v-bind:label="component.text" color="info" box v-model="component.value"/>
						</v-flex>
					</v-layout>
					<v-btn color="info" block round large v-on:click="submit()">{{submitText}}</v-btn>
				</v-card-text>
			</v-card>
		</v-flex>
	</v-layout>
</template>
<script>
import axios from 'axios'

export default {
	name: 'es-admin-grud',
	props: ['schema', 'target'],
	
	data: () => ({
		items: [],
		submitText: 'Create',
		updateId: null
	}),
	methods: {
		getHeaders(){
			var headers = []
			for(const segment of this.schema.segments){
				for(const component of segment){
					headers.push({ text: component.text, value: component.name })
				}
			}
			headers.push({text: 'Actions', value: 'name', sortable: false })
			return headers
		},
		submit(){
			var values = {}
			for(const segment of this.schema.segments){
				for(const component of segment){
					values[component.name] = component.value
				}
			}
			if(this.updateId === null){
				axios({
					method: 'POST',
					url: 'http://localhost:3000/' + this.target + '/create',
					headers: {
						'Accept-Version': '1.0.0',
						'Content-Type': 'application/json'
					},
					data: values
				}).then(() => {
					this.update()
				})
			}
			else{
				axios({
					method: 'POST',
					url: 'http://localhost:3000/' + this.target + '/' + this.updateId + '/update',
					headers: {
						'Accept-Version': '1.0.0',
						'Content-Type': 'application/json'
					},
					data: values
				}).then(() => {
					this.update()
				})
			}
		},
		edit(props){
			this.updateId = props.item._id
			this.submitText = 'Update'
			var values = {}
			for(const name in props.item){
				if(name !== '_id' && name !== '__v'){
					values[name] = props.item[name]
				}
			}
			for(const segmentIndex in this.schema.segments){
				for(const componentIndex in this.schema.segments[segmentIndex]){
					const component = this.schema.segments[segmentIndex][componentIndex]
					this.schema.segments[segmentIndex][componentIndex].value = values[component.name]
				}
			}
		},
		remove(props){
			const id = props.item._id
			axios({
				method: 'DELETE',
				url: 'http://localhost:3000/' + this.target + '/' + id + '/delete',
				headers: {
					'Accept-Version': '1.0.0',
					'Content-Type': 'application/json'
				}
			}).then(() => {
				this.update()
			})
		},
		update(){
			axios({
				method: 'GET',
				url: 'http://localhost:3000/' + this.target,
				headers: {
					'Accept-Version': '1.0.0'
				}
			}).then(response => {
				this.items = response.data.data
			})
		},
		reset(){
			this.updateId = null
			this.submitText = 'Create'
			for(const segmentIndex in this.schema.segments){
				for(const componentIndex in this.schema.segments[segmentIndex]){
					this.schema.segments[segmentIndex][componentIndex].value = ''
				}
			}
		}
	},
	mounted(){
		this.update()
	},
	watch:{
		'$route.params.target':{
			handler: function(){
				this.update()
			},
			deep: true,
			immediate: true
		}
	}
}
</script>

