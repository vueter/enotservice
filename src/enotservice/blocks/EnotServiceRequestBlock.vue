<template>
	<div class="floating" id="guarantees">
		<v-container>
			<h3 class="block-title">Часто задаваемы вопросы</h3>
			<center>
				<p class="block-sub-title">Мы постарались собрать самые часто задаваемые вопросы тут и ответили на них максимально подробно, чтобы сэкономить ваше драгоценное время</p>
			</center>
			<v-layout row wrap>
				<v-flex md6 v-for="(request, index) in requests" v-bind:key="index" pa-2>
					<es-request-card v-bind:request="request.text"/>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>
<script>
import axios from 'axios'
export default {
	name: 'es-request-block',
	data: () => ({
		requests: []
	}),
	mounted(){
		axios({
			method: 'GET',
			url: 'http://localhost:3000/requests',
			headers: {
				'Content-Type': 'application/json',
				'Accept-Version': '1.x'
			}
		}).then(response => {
			if(response.data.error === 'Ok'){
				this.requests = response.data.data
			}
		})
	}
}
</script>
