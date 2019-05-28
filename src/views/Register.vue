<template>
	<v-content>
		<es-toolbar />
		<v-container>
			<v-layout row>
				<v-flex md4 offset-md4>
					<v-layout row>
						<v-flex md6 xs12 sm12>
							<v-btn color="primary" round block to="/login">ВОЙТИ В КАБИНЕТ</v-btn>
						</v-flex>
						<v-flex md6 xs12 sm12>
							<v-btn color="primary" round block to="/register">Реистрация</v-btn>
						</v-flex>
					</v-layout>
					<v-card>
						<v-card-title>
							РЕГИСТРАЦИЯ
						</v-card-title>
						<v-card-text>
							Пожалуйста, заполните поля
							<v-form>
								<v-layout row wrap>
									<v-flex md6 sm12 xs12>
										<v-text-field v-model="firstname" box/>
									</v-flex>
									<v-flex md6 sm12 xs12>
										<v-text-field v-model="lastname" box />
									</v-flex>
									<v-flex md6 sm12 xs12>
										<v-text-field v-model="phonenumber" box/>
									</v-flex>
									<v-flex md6 sm12 xs12>
										<v-text-field v-model="email" box/>
									</v-flex>
									<v-flex md6 sm12 xs12>
										<v-text-field v-model="password" box/>
									</v-flex>
									<v-flex md6 sm12 xs12>
										<v-text-field v-model="repassword" box/>
									</v-flex>
									<v-flex md12 sm12 xs12>
										<v-btn large round color="primary" block>РЕГИСТРАЦИЯ</v-btn>
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
export default {
	name: 'EnotServiceRegister',
	data: () => ({
		firstname: '',
		lastname: '',
		phonenumber: '',
		email: '',
		password: '',
		repassword: ''
	}),
	method: {
		register(){

		}
	}
}
</script>

