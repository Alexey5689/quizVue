<template>
  <transition name="fade">
    <Model v-if="show"/>
  </transition>
  
  <div class="container">
    <div class="head">
        <Header/>
    </div>
    <div class="body">
      <Quiz/>
    </div>
    <div class="foot">
      <Footer/>
    </div>
    
    
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Quiz from './components/quizWind.vue';
  export default{
    components:{
      Quiz
    },
    data() {
        return{
         
        }
    },
    computed:{
      ...mapState({
            show: state => state.show, 
        }),
    },
    methods:{
 
    }   
}
</script>

<style src="./styleApp/style.css">

</style>
