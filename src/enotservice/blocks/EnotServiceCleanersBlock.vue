<template>
	<div class="bg-secondary floating">
		<v-container>
			<h3 class="block-title">Наши клинеры</h3>
			<br/>
			<v-layout row wrap>
				<v-flex md3 xs12 sm12 pa-1>
					<es-cleaner-card/>
				</v-flex>
				<v-flex md3 xs12 sm12 pa-1>
					<es-cleaner-card/>
				</v-flex>
				<v-flex md3 xs12 sm12 pa-1>
					<es-cleaner-card/>
				</v-flex>
				<v-flex md3 xs12 sm12 pa-1>
					<es-cleaner-card/>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>
<script>
export default {
	name: 'es-cleaners-block'
}
</script>

