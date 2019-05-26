<template>
    <v-card flat class="es-header-card">
        <v-card-text>
            <v-layout row>
                <v-flex md3>
                    <slot name="icon"></slot>
                </v-flex>
                <v-flex md9>
                    <font class="es-header-card-title">Проверенные временем Исполнители</font>
                    <font class="es-header-card-sub-title">Мы тщательно проверяем и обучаем каждого клинера, а в дальнейш</font>
                </v-flex>
            </v-layout>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    name: 'es-header-card'
}
</script>
