<template>
	<v-toolbar app flat color="white">
		<v-toolbar-title class="headline text-uppercase">
			<span>ENOT</span>
			<span class="font-weight-light">SERVICE</span>
		</v-toolbar-title>
		<v-toolbar-items>
			<v-btn flat>Главная</v-btn>
			<v-btn flat>О нас</v-btn>
			<v-btn flat>Стоимость услуг</v-btn>
			<v-btn flat>Исполнители</v-btn>
			<v-btn flat>Отзывы</v-btn>
			<v-btn flat>Гарантии</v-btn>
			<v-btn flat>Контакты</v-btn>
		</v-toolbar-items>
		<v-spacer></v-spacer>
		<v-toolbar-items>
			<v-menu v-bind:nudge-width="200" offset-y>
				<template v-slot:activator="{ on }">
					<v-btn icon v-on="on">
						<v-icon>
							more_vert
						</v-icon>
					</v-btn>
				</template>
				<v-list>
						<v-list-tile v-on:click="go('/bot')">
							<v-list-tile-title>Телеграм бот</v-list-tile-title>
						</v-list-tile>
						<v-list-tile v-on:click="go('/support')">
							<v-list-tile-title>Телеграм поддержка</v-list-tile-title>
						</v-list-tile>
						<v-list-tile v-on:click="go('/profile')">
							<v-list-tile-title>Войти в кабинет</v-list-tile-title>
						</v-list-tile>
						<v-divider></v-divider>
						<v-list-tile>
							<v-list-tile-title>+998 90 988 8010</v-list-tile-title>
						</v-list-tile>
					</v-list>
			</v-menu>
		</v-toolbar-items>
	</v-toolbar>
</template>

<script>
import Routable from '../mixins/Routable'
export default {
	name: 'es-toolbar',
	mixins: [ Routable ]
}
</script>

