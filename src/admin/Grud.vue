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
	},
	'order-groups': {
		segments: [
			[{ name: 'name', text: 'Group name', type: 'text', value: '' }]
		]
	},
	'order-elements': {
		segments: [
			[{ name: 'order', text: 'Title', type: 'combobox', value: '', items: ['Где вы живете?', 'Тип уборки', 'Вы можете выбрать дополнительные услуги:','Как часто нам убираться у Вас?'] }],
			[{ name: 'text', text: 'Text', type: 'text', value: '' }],
			[{ name: 'icon', text: 'Icon', type: 'text', value: '' }],
			[{ name: 'price', text: 'Price', type: 'number', value: 5000 }],
			[{ name: 'discount', text: 'Discount', type: 'number', value: 0 }],
			[{ name: 'name', text: 'name', type: 'text', value: ''}],
			[{ name: 'kind', text: 'Type', type: 'combobox', value: '', items: ['Choice', 'Radio', 'Counter'] }],
			[{ name: 'position', text: 'Position', type: 'number', value: '' }]
		]
	},
	'payment-elements': {
		segments: [
			[{ name: 'order', text: 'Title', type: 'combobox', value: 'ИНФОРМАЦИЯ О ПЛАТЕЖЕ', items: ['ИНФОРМАЦИЯ О ПЛАТЕЖЕ'] }],
			[{ name: 'text', text: 'Text', type: 'text', value: '' }],
			[{ name: 'icon', text: 'Icon', type: 'text', value: '' }],
			[{ name: 'price', text: 'Price', type: 'number', value: 5000 }],
			[{ name: 'discount', text: 'Discount', type: 'number', value: 0 }],
			[{ name: 'name', text: 'name', type: 'text', value: ''}],
			[{ name: 'kind', text: 'Type', type: 'combobox', value: '', items: ['Choice', 'Radio', 'Counter'] }],
			[{ name: 'position', text: 'Position', type: 'number', value: '' }]
		]
	},
	'info': {
		segments: [
			[{ name: 'name', text: 'Name', type: 'text', value: '' }],
			[{ name: 'value', text: 'Value', type: 'text', value: '' }],
		]
	},
	'slider': {
		segments: [
			[{ name: 'name', text: 'Name', type: 'text', value: '' }],
			[{ name: 'path', text: 'Image name', type: 'text', value: '' }]
		]
	},
	'requests': {
		segments: [
			[{ name: 'text', text: 'Text', type: 'text', value: '' }]
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
		},
		isAdmin(){ return this.$store.state.isAdmin }
	},
	mounted(){
		if(this.isAdmin === false){
			this.$router.push({ path: '/admin/login' })
		}
	}
}
</script>

