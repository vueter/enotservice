<template>
	<v-content>
		<es-toolbar/>
		<v-container>
			<v-layout row>
				<v-flex md4 offset-md4>
					<v-layout row wrap>
						<v-flex md6 xs12 sm12 pa-1>
							<v-btn color="primary" round block large to="/login">ВОЙТИ В КАБИНЕТ</v-btn>
						</v-flex>
						<v-flex md6 xs12 sm12 pa-1>
							<v-btn color="primary" round block large to="/register">Реистрация</v-btn>
						</v-flex>
					</v-layout>
					<v-card>
						<v-card-title>ВОЙТИ В КАБИНЕТ</v-card-title>
						<v-card-text>
							Пожалуйста, заполните поля
							<v-form>
								<v-text-field v-model="username" box label="Логин"/>
								<v-text-field v-model="password" box type="password" label="Пароль"/>
								<v-btn large round color="primary" block v-on:click="login">ВОЙТИ</v-btn>
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
					url: 'http://localhost:3000/login',
					data: { username: this.username, password: this.password },
					headers: {
						'Accept-Version': '1.0.0',
						'Content-Type': 'application/json'
					}
				}).then(response => {
					if(response.data.error === 'Ok'){
						this.$store.commit('updateUser', response.data.data)
						this.$store.commit('login')
						this.$router.push({ path: '/profile' })
					}
				})
			}
		}
	}
}
</script>

