<template>
    <div>欢迎登录
     {{$store.state.count}}
     <button @click="addBtn">点我自增</button>
        </div> 
</template>
<script>
    export default {
        created(){
                console.log(this.$store.state.count,99999999)
        },
        methods:{
            addBtn(){
                // this.$store.commit('add');
                this.$store.state.count = this.$store.state.count + 1
                console.log(this.$store.state.count)
            }
        } 
    } 
</script>
<style lang="scss" scoped>

</style>
