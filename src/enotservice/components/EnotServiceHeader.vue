<template>
	<v-content class="es-header">
		<es-toolbar />
		<v-container class="main">
			<v-layout row wrap>
				<v-flex md3>
					<v-card>
						<v-card-title> Расчет стоимости уборки </v-card-title>
						<v-card-text style="height:150px;">
							Card body
						</v-card-text>
						<v-card-text>
							<v-btn color="primary" block round dark>
								Рассчитать стоимость
							</v-btn>
						</v-card-text>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
		<v-content class="es-header-bottom">
			<v-container>
				<v-layout>
					<v-flex>
						<es-header-card></es-header-card>
					</v-flex>
					<v-flex>
						<es-header-card></es-header-card>
					</v-flex>
					<v-flex>
						<es-header-card></es-header-card>
					</v-flex>
				</v-layout>
			</v-container>
		</v-content>
	</v-content>
</template>
<script>
export default {
	name: 'es-header'
}
</script>