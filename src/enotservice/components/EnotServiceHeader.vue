<template>
	<div class="es-header" v-bind:style="'height: ' + getheight()" id="header">
		<es-toolbar />
		<v-container class="main">
			<v-layout row wrap>
				<v-flex md3>
					<v-card>
						<v-card-title> Расчет стоимости уборки </v-card-title>
						<v-card-text style="height:150px;">
							<template v-for="(data, position) in schema">
								<template v-for="(item, index) in data.body">
									<template v-if="item.kind === 'Choice'">
										<es-choice
											v-bind:key="item.name + '_' + index + '_' + position" 
											v-bind:items="item.items" 
											v-bind:setActive="setActive" 
											v-bind:name="item.name"/>
									</template>
								</template>
							</template>
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
		<v-content class="es-header-bottom" id="about">
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
import axios from 'axios'
const mixin = {
	data:() => ({
      schema: []
	}),
	methods: {
		setActive(){
			this.$forceUpdate()
		}
	},
    mounted(){
      axios({
        method: 'GET',
        url: 'http://localhost:3000/schema',
        headers: {
          'Content-Type': 'application/json',
          'Accept-Version': '1.0.x'
        }
      }).then(response => {
        if(response.data.error == 'Ok'){
          this.schema = response.data.data
        }
      })
    }
}
export default {
	name: 'es-header',
	mixins: [mixin],
	data: () => {
		return {
			types: ['Квартира', 'Свой дом'],
			numberRooms: ['1 комнатная', '2-х комнатная', '3-х комнатная', '4-х комнатная', '5-х комнатная']
		}
	},
	methods: {
		getheight(){
			const height = window.screen.availHeight ;
			if(height > 700){
				return (height - 120) + 'px'
			}
			return 'auto';
		}
	}
}
</script>