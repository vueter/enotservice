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
					<img v-if="tab.image" class="image-center" src="../assets/images/cleaning.png">
					<img v-else class="image-center" src="../assets/images/cleaning.png">
				</template>
			</div>
		</v-container>
	</div>
</template>
<script>
export default {
	name: 'es-cleaning-block',
	props: {
		tabs: {
			type: Array,
			default: () => {
				return [{name: 'Жилая комната'}, {name: 'Кухня'}, {name: 'Ванная и туалет'}, {name: 'Коридор'}, {name: 'Дополнительные услуги'}]
			}
		}
	},
	data: () => {
		return {
			activeTab: null
		}
	}
}
</script>
