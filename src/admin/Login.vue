<template>
	<v-content>
		<v-container>
			<v-layout row>
				<v-flex md4 offset-md4>
					<v-card>
						<v-toolbar card color="info" dark>
							<v-toolbar-title>Login</v-toolbar-title>
						</v-toolbar>
						<v-card-text>
							<v-form>
								<v-text-field box v-model="username"/>
								<v-text-field box v-model="password" type="password"/>
								<v-btn block large color="info" v-on:click="login">Login</v-btn>
							</v-form>
						</v-card-text>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</v-content>
</template>
<script>
import axios from 'axios'

export default {
	name: 'EnotServiceLogin',
	data: () => ({
		username: '',
		password: ''
	}),
	methods: {
		login(){
			if(this.username.length > 0 && this.password.length > 0){
				axios({
					method: 'POST',
					url: 'http://localhost:3000/admin/login',
					data: { username: this.username, password: this.password },
					headers: {
						'Accept-Version': '1.x'
					}
				}).then(response => {
					if(response.data.error == 'Ok'){
						this.$store.commit('adminLogin')
						this.$router.push({ path: '/admin/home' })
					}
				})
			}
		}
	}
}
</script>
