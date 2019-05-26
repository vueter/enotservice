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
					<v-card class="es-card-header">
						<v-card-title>РАССКАЖИТЕ НАМ О СВОЕЙ КВАРТИРЕ</v-card-title>
						<v-divider></v-divider>
						<v-card-text>
							Где вы живете?
							<v-layout row wrap>
								<v-flex md3 xs6 pa-1>
									<es-choice-card/>
								</v-flex>
								<v-flex md3 xs6 pa-1>
									<es-choice-card/>
								</v-flex>
								<v-flex md6 xs12 pa-1>
									<es-choice v-bind:items="types" v-bind:circle="true"/>
									<es-choice v-bind:items="numberRooms" v-bind:circle="false"/>
								</v-flex>
							</v-layout>
						</v-card-text>
						<v-divider></v-divider>
						<v-card-text>
							Тип уборки
							<v-layout row wrap>
								<v-flex md3 xs6 pa-1 v-for="i in 4" v-bind:key="i">
									<es-choice-card/>
								</v-flex>
							</v-layout>
						</v-card-text>
						<v-divider></v-divider>
						<v-card-text>
							Вы можете выбрать дополнительные услуги:
							<v-layout row wrap>
								<v-flex md3 xs6 pa-1 v-for="i in 12" v-bind:key="i">
									<es-choice-card/>
								</v-flex>
							</v-layout>
						</v-card-text>
					</v-card>
					<v-card class="es-card-bottom">
						<v-card-title>КУДА НАМ ПРИЕХАТЬ?</v-card-title>
						<v-divider></v-divider>
						<v-card-text>
							<v-layout row wrap>
								<v-flex md4 xs12 sm12 pa-1>
									<v-autocomplete box v-bind:items="cities"/>
								</v-flex>
								<v-flex md4 xs12 sm12 pa-1>
									<v-autocomplete box v-bind:items="regions"/>
								</v-flex>
								<v-flex md4 xs12 sm12 pa-1>
									<v-text-field box label="Улица"/>
								</v-flex>
								<v-flex md4 xs12 sm12 pa-1>
									<v-text-field box label="Номер дома"/>
								</v-flex>
								<v-flex md4 xs12 sm12 pa-1>
									<v-text-field box label="Подъезд"/>
								</v-flex>
								<v-flex md4 xs12 sm12 pa-1>
									<v-text-field box label="Квартира"/>
								</v-flex>
							</v-layout>
							<v-btn color="primary" block round large to="/payment">Продолжить</v-btn>
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
		<es-footer/>
	</v-content>
</template>
<script>
export default {
	name: 'order',
	data: () => ({
		step : 2,
		types: ['Квартира', 'Свой дом'],
		numberRooms: ['1 комнатная', '2-х комнатная', '3-х комнатная', '4-х комнатная', '5-х комнатная'],
		cities: ['Toshkent', 'Samarkand'],
		regions: ['Chilonzor', 'Olmazor']
	})
}
</script>
