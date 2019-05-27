<template>
	<v-content>
		<es-admin-toolbar/>
		<v-container>{{isAdmin}}</v-container>
	</v-content>
</template>
<script>
export default {
	computed:{
		isAdmin(){ return this.$store.state.isAdmin }
	},
	mounted(){
		if(this.isAdmin === true){
			this.$router.push({ path:  '/admin/grud/users' })
		}
		else{
			this.$router.push({ path:  '/admin/login' })
		}
	}
}
</script>
