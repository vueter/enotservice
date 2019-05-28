<template>
	<v-content>
		<es-toolbar/>
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
						<v-card-title>ВОЙТИ В КАБИНЕТ</v-card-title>
						<v-card-text>
							Пожалуйста, заполните поля
							<v-form>
								<v-text-field v-model="username" box/>
								<v-text-field v-model="password" box />
								<v-btn large round color="primary" block>ВОЙТИ</v-btn>
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
	name: 'EnotServiceLogin',
	data: () => ({
		username: '',
		password: ''
	}),
	methods: {
		login(){

		}
	}
}
</script>

