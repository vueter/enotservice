export default {
    methods: {
        go(url){
            this.$router.push({ path: url })
        },
        link(url){
            window.open(url, '_blank')
        }
    }
}