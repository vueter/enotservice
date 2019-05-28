<template>
	<v-content>
		<es-toolbar />
		<v-container>
			<v-layout row wrap>
				<v-flex md9 sm12 xs12 pa-3>
					<h3>Личный кабинет</h3>
				</v-flex>
				<v-flex md3 xs12 sm12 pa-3>
					<v-btn large round color="primary" block>Создать новый заказ на уборку</v-btn>
				</v-flex>
			</v-layout>
			<v-layout row wrap>
				<v-flex md9 sm12 xs12 pa-3>
					<v-card>
						<v-card-title>ИСТОРИЯ ЗАКАЗОВ</v-card-title>
						<v-divider></v-divider>
						<v-card-text>
							Hello world
						</v-card-text>
					</v-card>
				</v-flex>
				<v-flex md3 sm12 xs12 pa-3>
					<v-card>
						<v-card-title>Получите скидку на уборку</v-card-title>
						<v-divider></v-divider>
						<v-card-text>
							<p>Пригласите друга и за каждого вы получите 5000 сум. Эти кредиты Вы сможете тратить на уборку своей квартиры или дома</p>
							<strong>Делитесь этой ссылкой со своими друзьями</strong>
							<v-text-field v-model="inviteCode"/>
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
	data: () => ({
		inviteCode: ''
	}),
	computed: {
		isGuest(){ return this.$store.state.isGuest }
	},
	mounted(){
		if(this.isGuest === true){
			this.$router.push({ path: '/login' })
		}
	}
}
</script>

