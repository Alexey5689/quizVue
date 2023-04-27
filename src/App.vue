<template>
  <Header/>
  <div class="container">
    <Quiz/>
  </div>
</template>

<script>
  import Quiz from './components/quizWind.vue';
  export default{
    components:{
      Quiz
    },
    data() {
        return{
          answ:'',
        }
    },
    computed:{
     
    },
    methods:{
 
    }   
}
</script>

<style src="./styleApp/style.css">

</style>
