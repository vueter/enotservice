<template>
	<v-content>
		<es-toolbar />
		<v-container>
			<v-layout>
				<v-flex md7 offset-md1 pa-3>
					<v-stepper v-model="step" flat>
						<v-stepper-header>
							<v-stepper-step :complete="step > 1" step="1">Реистрация</v-stepper-step>
							<v-divider></v-divider>
							<v-stepper-step :complete="step > 2" step="2">Детали заказа</v-stepper-step>
							<v-divider></v-divider>
							<v-stepper-step step="3">Оплата</v-stepper-step>
						</v-stepper-header>
					</v-stepper>
					<br/>
					<v-card>
						<v-card-title>ИНФОРМАЦИЯ О ПЛАТЕЖЕ</v-card-title>
						<v-divider></v-divider>
						<v-card-text>
							<v-layout row wrap>
                                <v-flex md3 xs6 sm6 pa-1>
                                    <!--<es-choice-card />-->
                                </v-flex>
                                <v-flex md3 sm6 xs6 pa-1>
                                    <!--<es-choice-card />-->
                                </v-flex>
                                <v-flex md6 sm12 xs12 pa-1>
                                    Оплата картой посредством платежной системы CLICK или Payme наиболее рекомендуемый способ оплаты. Тут будет дополнительный описательный текст или его не будет вовсе
                                </v-flex>
							</v-layout>
						</v-card-text>
                        <v-card-text>
                            Введите промокод в поле ниже, если он у вас есть
                            <v-layout row wrap>
                                <v-flex md8 xs12 ms12 pa-1>
                                    <v-text-field box/>
                                </v-flex>
                                <v-flex md4 xs12 sm12 pa-1>
                                    <v-btn block large color="primary" round>Применить</v-btn>
                                </v-flex>
                            </v-layout>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-text>
                            <v-btn block color="primary" round large>Перейти к оплате</v-btn>
                        </v-card-text>
					</v-card>
				</v-flex>
				<v-flex md3 pa-3 class="hidden-sm-and-down">
					<v-card class="br-4">
						<v-card-title>
							Ваш заказ
						</v-card-title>
						<v-card-text>
							Hello world
						</v-card-text>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
        <es-footer />
	</v-content>
</template>
<script>
import axios from 'axios'
export default {
	name: 'order',
	data: () => ({
		step : 3,
		order: null
	}),
	mounted(){
		axios({
			method: 'POST',
			url: 'http://localhost:3000/orders',
			data: {
				_id: this.$route.params.order_id
			},
			headers: {
				'Content-Type': 'application/json',
				'Accept-Version': '1.0.0'
			}
		}).then(response => {
			console.log(response.data)
		})
	}
}
</script>
