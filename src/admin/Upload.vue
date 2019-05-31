<template>
	<v-content>
		<es-admin-toolbar></es-admin-toolbar>
		<v-container>
			<v-layout row>
				<v-flex md6 offset-md3>
					<v-card>
						<v-toolbar card>
							<v-toolbar-title class="body-2 grey--text">File upload</v-toolbar-title>
						</v-toolbar>
						<v-card-text>
							<v-text-field v-model="name" readonly/>
							<upload-btn round v-on:file-update="fileUpdate"></upload-btn>
						</v-card-text>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</v-content>
</template>
<script>
import UploadButton from 'vuetify-upload-button'
import axios from 'axios'
export default {
	name: 'EnotAdminFileUpload',
	components: {
		'upload-btn': UploadButton
	},
	data: () => ({
		name: ''
	}),
	methods: {
		fileUpdate(file){
			var formData = new FormData()
			formData.append('image', file)
			axios.post('http://enotservice.uz/api/upload', formData, { headers: { 'Content-Type': 'multipart/form-data' } }).then(response => {
				if(response.data.error === 'Ok'){
					this.name = response.data.path
				}
			})
		}
	},
	computed: {
		isAdmin(){ return this.$store.state.isAdmin }
	},
	mounted(){
		if(this.isAdmin === false){
			this.$router.push({ path: '/admin/login' })
		}
	}
}
</script>

