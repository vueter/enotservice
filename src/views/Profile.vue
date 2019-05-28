<template>
	<v-content>
		<es-toolbar />
		<v-container>
			<v-layout row wrap>
				<v-flex md9 sm12 xs12>
					<v-card>
						<v-toolbar card>
							<v-toolbar-title class="">Orders</v-toolbar-title>
						</v-toolbar>
						<v-card-text>
							Hello world
						</v-card-text>
					</v-card>
				</v-flex>
				<v-flex md3 sm12 xs12>
					<v-card>
						<v-toolbar card>
							<v-card-title class=""></v-card-title>
						</v-toolbar>
						<v-card-text>
							Hello world
						</v-card-text>
					</v-card>
				</v-flex> 
			</v-layout>
		</v-container>
	</v-content>
</template>
<script>
export default {
	name: 'EnotServiceProfile',
	computed: {
		isGuest(){ return this.$store.isGuest }
	},
	mounted(){
		if(this.isGuest){
			this.$router.push({ path: '/login' })
		}
	}
}
</script>

