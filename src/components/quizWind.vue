<template>
    <div class="quizPage">
        <form class="quizWind" @submit.prevent="handlesubmit">
            <div class="quiz-head">
                <div class="quiz-head_question">
                    {{ questions[currentQuestion - 1].question }}
                </div>
                <div class="quiz-head_questNumb">
                    {{currentQuestion}} / {{ questions.length }}
                </div>
            </div>
            <div class="quiz_options" v-for="option in questions[currentQuestion -1].options">
                <lable class="quiz_option">
                    <input type="radio" class="radiobtn">
                    <div class="option">{{ option }}</div>
                </lable>
            </div>
            <div class="quiz_answer">
                <Button 
                    type="submit" 
                    :disabled="!this.selection"
                    class="selectAnverBtn"
                >{{ !this.selection  ? 'Выберите ответ' : 'Следующий вопрос' }}</Button>
            </div>
        </form>    
            <!-- <div class="quiz-info">
                <div class="quiz-question">
                    {{ questions[currentQuestion - 1].question }}
                </div>
                <div class="quiz-question-numb">
                    {{currentQuestion}} / {{ questions.length }}
                </div>
            </div>
            <div  class="quiz-selection" v-for="option in questions[currentQuestion -1].options">
                <div class="questionOption">
                    <input type="radio" class="radiobtn"/>
                    {{ option }}
                </div>  
            </div>
            <div class="quiz-answer">
                <Button 
                    type="submit" 
                    :disabled="!this.selection"
                    class="selectAnverBtn"
                >{{ !this.selection  ? 'Выберите ответ' : 'Следующий вопрос' }}</Button>
            </div> -->
        
    </div>
    

</template>


<script>
    import {mapState} from 'vuex';
    export default{
        data(){
            return{
                currentQuestion:1,
                selection: 0,
            }
        },
        methods:{
            handlesubmit(){
                if(this.currentQuestion !== this.questions.length) this.currentQuestion +=1;
                
            }
        },
        computed:{
            ...mapState({
                questions: state => state.quiz.questions,
            })
        }
    }


</script>

<style src="./styleComponents/styleQuizWind.css" scoped>

</style>