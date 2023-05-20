<template>
        <div class="modelWindow">
            <div class="entranceBtn"  @click="getShow">
                <img class="imgStyle"  src="../../assets/hogwarts2-1.svg" alt="">
            </div>
        </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default{
        name:'Model',
        methods:{
            ...mapActions({
                getShow:'getShow'
            })
        }
    }
</script>


<style src="./styleUI/styleModel.css" scoped>
</style>