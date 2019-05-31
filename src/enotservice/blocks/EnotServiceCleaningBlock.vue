<template>
	<div class="bg-secondary floating" id="performers">
		<v-container>
			<h3 class="block-title">Как мы делаем уборку квартиры</h3>
			<center>
				<p class="block-sub-title">Наш сотрудник приезжает в назначенное время со всем необходимым и сразу приступает к делу. Вам остаётся только оценить результат</p>
			</center>
			<v-tabs v-bind:hide-slider="true" show-arrows v-model="activeTab" fixed-tabs style="background-color: none" color="#E0E7EF">
				<v-tab v-for="(tab, index) in tabs" v-bind:key="index">
					{{ tab.name }}
				</v-tab>
			</v-tabs>
			<div v-for="(tab, index) in tabs" v-bind:key="index">
				<template v-if="index == activeTab">
					<img v-if="tab.path" class="image-center" v-bind:src="makePath(tab.path)">
					<img v-else class="image-center" src="../assets/images/cleaning.png">
				</template>
			</div>
		</v-container>
	</div>
</template>
<script>
import axios from 'axios'

export default {
	name: 'es-cleaning-block',
	data: () => {
		return {
			activeTab: null,
			tabs: []
		}
	},
	methods: {
		makePath(path){
			return 'http://localhost:3000/uploads/' + path
		}
	},
	mounted(){
		axios({
			method: 'GET',
			url: 'http://localhost:3000/slider',
			headers: {
				'Content-Type': 'application/json',
				'Accept-Version': '1.x'
			}
		}).then(response => {
			if(response.data.error === 'Ok'){
				this.tabs = response.data.data
			}
		})
	}
}
</script>
