<template>
    <div class="quizPage">
        <div v-if="this.stop" class="quizWindow">
            <div class="resultWind">
                <div class="result">
                    <div class="resultHead">
                       <b>Ваш Результат</b> 
                    </div>
                    <div class="resultInfo">
                        {{rightAnsw}} правильных из {{questions.length}}
                    </div>
                </div>
                <div class="againBtn">
                    <Button
                        @click="again"
                        class="quizButtn"
                    >Повторить?</Button>
                </div>
            </div>
        </div>
        <form  v-else class="quizWindow" @submit.prevent="handlesubmit">
            <div class="quizWindWrapp">
                <div class="quizHead">
                    <div class="quizHead_left">
                       <b> {{questions[currentQuestion].question }}</b>
                    </div>
                    <div class="quizHead_right">
                       <b> {{currentQuestion + 1}} / {{ questions.length }}</b>
                    </div>
                </div>
                <div class="quizBody">
                    <label  v-for="(option, index) in this.questions[currentQuestion].options" class="quizOption"  :for="index">
                        <div class="optionLeft">
                            <input type="radio" class="radiobtn" :id="index" :value="index"  v-model="answ" @change="answer">
                        </div>
                        <div class="optionRight">
                           {{ option }}
                        </div>
                    </label>
                </div>
                <div class="quizBottom">
                    <Button
                        type="submit" 
                        :disabled="!this.selection"
                        class="quizButtn"
                    >{{ !this.selection  ? 'Выбери ответ' : (currentQuestion !== questions.length - 1 ? 'Следующий вопрос' : 'Результат' ) }}</Button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
   import {mapState,} from 'vuex';
    export default{
        data(){
            return{
                currentQuestion: 0,
                selection: null,
                answ: null,
                rightAnsw: 0,
                stop:0,
                right:null,
            }
        },
        methods:{
            again(){
                this.stop = 0;
                this.rightAnsw = 0;
                this. currentQuestion = 0;
            },
            answer(e){
                this.selection = (e.target.value);
                this.right = this.questions[this.currentQuestion].answer
            },
            handlesubmit(){
                console.log(this.right);
                console.log(this.selection);
                if(this.currentQuestion !== this.questions.length -1){ this.currentQuestion +=1;}
                else{this.stop = 1; }
                if(this.answ === this.right){
                    this.rightAnsw += 1;
                    console.log('true');
                }
                else{
                    console.log('false');
                }
                this.selection = null;
                this.answ = null; 
            },
        },
        computed:{
            ...mapState({
                questions: state => state.quiz.questions,
            }),
        }
    }
</script>
<style src="./styleComponents/styleQuizWind.css" scoped>
</style>