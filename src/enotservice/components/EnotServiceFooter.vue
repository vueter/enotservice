<template>
	<v-footer class="floating" height="auto" color="primary lighten-1" id="contact">
		<v-layout justify-center row wrap>
			<v-container v-if="info !== null">
				<v-layout row wrap>
					<v-flex md4 sm12 xs12>
						<h3 class="white--text">ENOT SERVICE</h3>
						<p class="white--text">
							В нашей работе всегда ценятся честность, ответственность и аккуратность. Вопрос доверия собственного жилья и вещей другим людям для большинства является первостепенным.
						</p>
					</v-flex>
					<v-flex md4 sm12 xs12>
						<h3 class="white--text">ПОЛЕЗНЫЕ ССЫЛКИ</h3>
						<v-layout row>
							<v-flex md6 ms12 xs12>
								<ul class="list-group">
									<li><router-link to="/" class="white--text">Виды уборки</router-link></li>
									<li><router-link to="/" class="white--text">Стоимость</router-link></li>
									<li><router-link to="/" class="white--text">Исполнители</router-link></li>
									<li><router-link to="/" class="white--text">Отзывы</router-link></li>
									<li><router-link to="/" class="white--text">Гарантии</router-link></li>
								</ul>
							</v-flex>
							<v-flex md6 ms12 xs12>
								<ul class="list-group">
									<li><a v-on:click="link(info['telegram_bot'])" class="white--text">Телеграм-бот</a></li>
									<li><router-link to="/" class="white--text">До и после</router-link></li>
									<li><a v-on:click="link(info['instagram'])" class="white--text">Инстаграм</a></li>
									<li><a v-on:click="link(info['application'])" class="white--text">Приложение</a></li>
									<li><router-link to="/" class="white--text">Средства</router-link></li>
								</ul>
							</v-flex>
						</v-layout>
					</v-flex>
					<v-flex md4 sm12 xs12>
						<h3 class="white--text">КОНТАКТНАЯ ИНФОРМАЦИЯ</h3>
						<ul class="list-group">
							<li class="white--text">{{ info['address'] }}</li>
							<li class="white--text">{{ info['phone_numbers'] }}</li>
							<li class="white--text">{{ info['phone_number'] }}</li>
							<li class="white--text">{{ info['email'] }}</li>
							<li class="white--text">{{ info['emailbase'] }}</li>
						</ul>
					</v-flex>
				</v-layout>
			</v-container>
			<v-flex primary lighten-2 py-3 text-xs-center white--text xs12>
				&copy;2019 — <strong>Enot Service</strong> Все права защищены
			</v-flex>
		</v-layout>
	</v-footer>
</template>
<script>
import axios from 'axios'
import Routable from '../mixins/Routable'
export default {
	name: 'es-footer',
	mixins: [Routable],
	data: () => {
		return {
			links: [
				'Home',
				'About Us',
				'Team',
				'Services',
				'Blog',
				'Contact Us'
			],
			info: null
		}
	},
	mounted(){
		axios({
			method: 'GET',
			url: 'http://enotservice.uz/api/info',
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
			this.$forceUpdate()
		})
	}
}
</script>
