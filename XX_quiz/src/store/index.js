import { createStore } from 'vuex';

export default createStore({
  state: {
    quiz: [
      {
        id: 1,
        question: 'Which two US states share a border with Rhode Island?',
        answer: 'Connecticut and Massachusetts',
        category: 'history',
      },
      {
        id: 2,
        question: 'Macrophobia is the fear of what?',
        answer: 'Long waits',
        category: 'general',
      },
      {
        id: 3,
        question: 'What country was policed by the Blackshirts for almost 25 years?',
        answer: 'Italy',
        category: 'geography',
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    questionsCount: (state) => state.quiz.length,
    questionById: (state) => (id) => state.quiz.find((q) => q.id === id),
    questionIdExist: (state) => (id) => state.quiz.findIndex((q) => q.id === id) >= 0,
  },
});
