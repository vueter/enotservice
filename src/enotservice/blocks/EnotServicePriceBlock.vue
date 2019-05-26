<template>
	<div class="floating bg-secondary">
		<v-container>
			<h3 class="block-title">Сколько стоит уборка квартиры</h3>
			<center>
				<p class="block-sub-title">Стоимость уборки квартиры напрямую зависит от нескольких критериев, таких как площадь помещения, колиество комнат и санузлов. Так же необходимо принять в учет тип планируемой уборки.</p>
			</center>
			<v-layout row wrap>
				<v-flex md3 xs12 sm12 pa-1>
					<es-price-card image="room-1" text="1 комнатная" price="от 40000 сум"/>
				</v-flex>
				<v-flex md3 xs12 sm12 pa-1>
					<es-price-card image="room-2" text="2-х комнатная" price="от 60000 сум"/>
				</v-flex>
				<v-flex md3 xs12 sm12 pa-1>
					<es-price-card image="room-3" text="3-х комнатная" price="от 80000 сум"/>
				</v-flex>
				<v-flex md3 xs12 sm12 pa-1>
					<es-price-card image="home" text="Свой дом" price="от 90000 сум"/>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>
<script>
export default {
	name: 'es-price-block'
}
</script>

