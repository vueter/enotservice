<template>
	<v-content>
	</v-content>
</template>
<script>
export default {
	name: 'EnotServiceAdminLogout',
	mounted(){
		this.$store.commit('adminLogout')
		this.$router.push({ path: '/' })
	}
}
</script>