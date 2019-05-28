<template>
	<v-footer class="floating" height="auto" color="primary lighten-1">
		<v-layout justify-center row wrap>
			<v-container>
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
									<li><router-link to="/" class="white--text">Телеграм-бот</router-link></li>
									<li><router-link to="/" class="white--text">До и после</router-link></li>
									<li><router-link to="/" class="white--text">Инстаграм</router-link></li>
									<li><router-link to="/" class="white--text">Приложение</router-link></li>
									<li><router-link to="/" class="white--text">Средства</router-link></li>
								</ul>
							</v-flex>
						</v-layout>
					</v-flex>
					<v-flex md4 sm12 xs12>
						<h3 class="white--text">КОНТАКТНАЯ ИНФОРМАЦИЯ</h3>
						<ul class="list-group">
							<li class="white--text">Ул. Ш. Руставели, дом 210, г. Ташкент 100068</li>
							<li class="white--text">+998 71 255 55 50; +998 71 255 50 55</li>
							<li class="white--text">+998 71 255 55 20</li>
							<li class="white--text">manager@enot-clean.uz</li>
							<li class="white--text">@enot-clean.uz</li>
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
export default {
	name: 'es-footer',
	data: () => {
		return {
			links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us'
      ]
		}
	}
}
</script>
