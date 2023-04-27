
export const QuizModul={
    state:()=>({
        questions:[
            {
                answer: 1,
                question: 'Известный код из Матрицы на самом деле обозначае ...',
                options:[
                    'Рецепт суши',
                    'Состав шоколадного батончика',
                    'Случайный набор сомволов',
                ],
                selected: null,
            },
            {
                answer: 3,
                question:'Чем известен Герострат?',
                options:[
                    'Жил в бочке',
                    'Сжёг храм Артемиды Эфесскойэ',
                    'Был слепой',
                ],
                selected: null,
            },
            {
                answer: 3,
                question:'Как именовали корабли США, созданные с целью полёта на Луну?',
                options:[
                    'Зевс',
                    'Кронос',
                    'Аполон',
                ],
                selected: null,
            },
            {
                answer: 2,
                question:'Вместе с рюмкой коньяка в России обычно просят …',
                options:[
                    'Стакан водки',
                    'Дольку лимона',
                    'Еще одну рюмку коньяка',
                ],
                selected: null,
            },

        ]
    }),
    getters:{
       
    },
    mutations:{
       
    },
    actions:{
       
        
    },
    namespased: true,
}