<template>
	<v-content>
		<es-toolbar />
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
						<v-card-title>
							РЕГИСТРАЦИЯ
						</v-card-title>
						<v-card-text>
							Пожалуйста, заполните поля
							<v-form v-if="state == 1">
								<v-layout row wrap>
									<v-flex md6 sm12 xs12 pa-1>
										<v-text-field v-model="firstname" label="Имя" box/>
									</v-flex>
									<v-flex md6 sm12 xs12 pa-1>
										<v-text-field v-model="lastname" label="Фамилия" box/>
									</v-flex>
									<v-flex md6 sm12 xs12 pa-1>
										<v-text-field v-model="phonenumber" label="Номер телефона" box prefix="+998" mask="(##) ### - ## - ##"/>
									</v-flex>
									<v-flex md6 sm12 xs12 pa-1>
										<v-text-field v-model="email" label="Эл. адрес" box/>
									</v-flex>
									<v-flex md12 sm12 xs12 pa-1>
										<v-text-field v-model="username" label="Логин" box/>
									</v-flex>
									<v-flex md6 sm12 xs12 pa-1>
										<v-text-field v-model="password" label="Пароль" box type="password"/>
									</v-flex>
									<v-flex md6 sm12 xs12 pa-1>
										<v-text-field v-model="repassword" label="Подтвердите пароль" box type="password"/>
									</v-flex>
									<v-flex md12 sm12 xs12>
										<v-btn large round color="primary" block v-on:click="register">РЕГИСТРАЦИЯ</v-btn>
									</v-flex>
								</v-layout>
							</v-form>
							<v-form v-else>
								<v-layout row wrap>
									<v-flex md12 xs12 sm12>
										<v-text-field v-model="smscode" box label="Код смс"/>
									</v-flex>
									<v-flex md12 sm12 xs12>
										<v-btn large round color="primary" block v-on:click="register">РЕГИСТРАЦИЯ</v-btn>
									</v-flex>
								</v-layout>
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
	name: 'EnotServiceRegister',
	data: () => ({
		state: 1,
		username: 'tensor2flow',
		firstname: 'Firdavs',
		lastname: 'Beknazarov',
		phonenumber: '933363933',
		email: 'tensor2flow@gmail.com',
		password: 'bellur48512673',
		repassword: 'bellur48512673',
		smscode: ''
	}),
	methods: {
		register(){
			if(
				(this.username.length > 0 && this.firstname.length > 0 && this.lastname.length > 0) && 
				(this.phonenumber.length > 0 && this.password.length > 0 && this.repassword.length > 0)
			){
				if(this.password === this.repassword){
					if(this.state == 1){
						axios({
							method: 'POST',
							url: 'http://localhost:3000/verify',
							data: { phonenumber: this.phonenumber },
							headers: {
								'Accept-Version': '1.x',
								'Content-Type': 'application/json'
							}
						}).then(response => {
							if(response.data.error == 'Ok'){
								this.state = 2
							}
						})
					}
					else{
						axios({
							method: 'POST',
							url: 'http://localhost:3000/verify/code',
							data: { phonenumber: this.phonenumber, smscode: this.smscode },
							headers: {
								'Accept-Version': '1.0.0',
								'Content-Type': 'application/json'
							}
						}).then(response => {
							if(response.data.error === 'Ok'){
								axios({
									method: 'POST',
									url: 'http://localhost:3000/register',
									data: {
										username: this.username,
										password: this.password,
										firstname: this.firstname,
										lastname: this.lastname,
										phonenumber: this.phonenumber,
										email: this.email
									},
									headers: {
										'Content-Type': 'application/json',
										'Accept-Version': '1.0.0'
									}
								}).then(response => {
									if(response.data.error === 'Ok'){
										this.$router.push({ path: '/login' })
									}
								})
							}
						})
					}
				}
			}
			else{
				console.log('ERROR')
			}
		}
	}
}
</script>

