<template>
	<v-content>
		<es-admin-toolbar/>
		<v-container>
			<es-admin-grud v-bind:target="target" v-bind:schema="getSchema()"/>
		</v-container>
	</v-content>
</template>
<script>
const schema = {
	'users' : {
		segments: [
			[{ name: 'username', text: 'Username', type: 'text', value: '' }],
			[{ name: 'password', text: 'Password', type: 'password', value: '' }],
			[{ name: 'firstname', text: 'First name', type: 'text', value: '' }],
			[{ name: 'lastname', text: 'Last name', type: 'text', value: '' }],
			[{ name: 'phonenumber', text: 'Phone number', type: 'text', value: '' }],
			[{ name: 'email', text: 'Email', type: 'text', value: '' }]
		]
	},
	'cities': {
		segments: [
			[{ name: 'name', text: 'City name', type: 'text', value: '' }]
		]
	},
	'regions': {
		segments: [
			[{ name: 'name', text: 'City name', type: 'text', value: '' }]
		]
	}
}
export default {
	name: 'EnotServiceAdminGrud',
	data: () => ({
		schema: schema
	}),
	methods: {
		getSchema(){
			const target = this.$route.params.target
			if(this.schema[target] !== undefined){
				return this.schema[target]
			}
			return null
		},
		getTraget(){
			return this.$route.params.target
		}
	},
	computed: {
		target(){
			return this.$route.params.target
		}
	}
}
</script>

