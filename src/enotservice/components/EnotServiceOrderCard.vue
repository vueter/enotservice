<template>
	<div class="floating">
		<v-container class="en-order-card-container">
			<v-card flat class="es-order-card-main">
				<v-card flat class="es-order-card">
					<v-card-text>
						<v-layout row wrap>
							<v-flex md8 sm12 xs12>
								<h2 class="es-order-card-sub-title">Оформите уборку с периодичностью "Раз в неделю"</h2>
								<h1 class="es-order-card-title">ПОЛУЧИТЕ СКИДКУ 20% ОТ ЕЕ СТОИМОСТИ</h1>
							</v-flex>
							<v-flex md4 xs12 sm12>
								<v-btn color="white" round large block to="/order">
									Заказать
								</v-btn>
							</v-flex>
						</v-layout>
					</v-card-text>
				</v-card>
			</v-card>
		</v-container>
	</div>
</template>
<script>
export default {
	name: 'es-order-card'
}
</script>
