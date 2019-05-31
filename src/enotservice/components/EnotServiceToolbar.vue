<template>
	<v-layout>
		<v-toolbar app flat color="primary" dark>
			<v-toolbar-title class="headline text-uppercase">
				<span>ENOT</span>
				<span class="font-weight-light">SERVICE</span>
			</v-toolbar-title>
			<v-toolbar-items class="navs hidden-sm-and-down">
				<v-btn flat v-for="(nav, index) in navs" v-bind:key="index" v-bind:to="nav.link">{{nav.text}}</v-btn>
			</v-toolbar-items>
			<v-spacer></v-spacer>
			<v-toolbar-items>
				<v-menu v-bind:nudge-width="200" offset-y>
					<template v-slot:activator="{ on }">
						<v-toolbar-side-icon class="hidden-sm-and-up" v-on="on"></v-toolbar-side-icon>
					</template>
					<v-list>
						<v-list-tile v-bind:to="nav.link" v-for="(nav, index) in navs" v-bind:key="index"><v-list-tile-title>
							{{nav.text}}
						</v-list-tile-title></v-list-tile>
					</v-list>
				</v-menu>
				<v-menu v-bind:nudge-width="200" offset-y v-if="info !== null">
					<template v-slot:activator="{ on }">
						<v-btn icon v-on="on">
							<v-icon>
								more_vert
							</v-icon>
						</v-btn>
					</template>
					<v-list>
						<v-list-tile v-on:click="link(info['telegram_bot'])">
							<v-list-tile-title>Телеграм бот</v-list-tile-title>
						</v-list-tile>
						<v-list-tile v-on:click="link(info['telegram_support'])">
							<v-list-tile-title>Телеграм поддержка</v-list-tile-title>
						</v-list-tile>
						<v-list-tile v-on:click="go('/profile')">
							<v-list-tile-title>Войти в кабинет</v-list-tile-title>
						</v-list-tile>
						<v-divider></v-divider>
						<v-list-tile>
							<v-list-tile-title>{{info['phone_number']}}</v-list-tile-title>
						</v-list-tile>
					</v-list>
				</v-menu>
			</v-toolbar-items>
		</v-toolbar>
	</v-layout>
</template>

<script>
import Routable from '../mixins/Routable'
import axios from 'axios'
export default {
	name: 'es-toolbar',
	mixins: [ Routable ],
	data: () => {
		return {
			navs: [
				{text: 'Главная', link:'/#header'},
				{text: 'О нас', link:'/#about'},
				{text: 'Стоимость услуг', link: '/#services'},
				{text: 'Исполнители', link: '/#performers'},
				{text: 'Отзывы', link: '/#reviews'},
				{text: 'Гарантии', link: '/#guarantees'},
				{text: 'Контакты', link: '/#contact'}
			],
			info: null
		}
	},
	mounted(){
		axios({
			method: 'GET',
			url: 'http://localhost:3000/info',
			headers: {
				'Content-Type': 'application/json',
				'Accept-Version': '1.x'
			}
		}).then(response => {
			const info = {}
			if(response.data.error === 'Ok'){
				for(const item of response.data.data){
					info[item.name] = item.value
				}
			}
			this.info = info
		})
	}
}
</script>

