<template>
	<div class="es-header" v-bind:style="'height: ' + getheight()">
		<es-toolbar />
		<v-container class="main">
			<v-layout row wrap>
				<v-flex md3>
					<v-card>
						<v-card-title> Расчет стоимости уборки </v-card-title>
						<v-card-text style="height:150px;">
							<es-choice v-bind:items="types" v-bind:circle="true"/>
							<es-choice v-bind:items="numberRooms" v-bind:circle="false"/>
						</v-card-text>
						<v-divider></v-divider>
						<v-card-text>
							<v-btn color="primary" block round large dark to="/order">
								Рассчитать стоимость
							</v-btn>
						</v-card-text>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
		<v-content class="es-header-bottom">
			<v-container>
				<v-layout row wrap>
					<v-flex md4>
						<es-header-card>
							<template v-slot:icon>
								<img src="../assets/icons/es-header-card-icon-1.png"/>
							</template>
						</es-header-card>
					</v-flex>
					<v-flex md4>
						<es-header-card>
							<template v-slot:icon>
								<img src="../assets/icons/es-header-card-icon-2.png"/>
							</template>
						</es-header-card>
					</v-flex>
					<v-flex md4>
						<es-header-card>
							<template v-slot:icon>
								<img src="../assets/icons/es-header-card-icon-3.png"/>
							</template>
						</es-header-card>
					</v-flex>
				</v-layout>
			</v-container>
		</v-content>
	</div>
</template>
<script>
export default {
	name: 'es-header',
	data: () => {
		return {
			types: ['Квартира', 'Свой дом'],
			numberRooms: ['1 комнатная', '2-х комнатная', '3-х комнатная', '4-х комнатная', '5-х комнатная']
		}
	},
	methods: {
		getheight(){
			const height = window.screen.availHeight ;
			console.log(height)
			if(height > 700){
				return (height - 120) + 'px'
			}
			return 'auto';
		}
	}
}
</script>