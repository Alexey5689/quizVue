import {createStore} from "vuex";
import { QuizModul } from "./QuizModul";

export default createStore({
    state: ()=>({
        show: true,
    }),
    getters:{

    },
    mutations:{
        show(state){
            state.show = false;
        }
    },
    actions:{
        getShow({commit}){
            commit('show')
        }
    },
    modules:{
        quiz: QuizModul
    }
})