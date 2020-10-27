# Setup the questions

In our quiz we need to setup our questions that the visitors should see and answer. Since these should be reachable
everywhere in the application we need to set them up in our state management Vuex store.

Go into `/workspace/quiz/src/store/index.js` and add our quiz structure. Feel free to use your own quiz questions!

```js
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
```

Additionally we add two [getters](https://vuex.vuejs.org/guide/getters.html) to get a modified version of the state. You can use them to filter data, modify data or similar activities before the components access them. 

Now we need to show our first question when the visitor enters the app. Go into the `/workspace/quiz/src/views/Home.vue` component and make it display our first question.

```vue
<template>
  <div class="home">
    {{questionItem.question}}
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      questionId: 1,
    };
  },
  computed: {
    questions() {
      return this.$store.state.quiz;
    },
  },
};
</script>
```

Above you see that we added a [computed property](https://v3.vuejs.org/guide/computed.html#computed-properties) that access the global `this.$store` which access the Vuex store. We also defined [data](https://v3.vuejs.org/guide/data-methods.html#data-properties) that is specific for this instance of this component.

We then form a basic data binding with text interpolation using the "Mustache" syntax `{{questionItem.question}}`. You should now see the following on your website:

![First Question](https://raw.githubusercontent.com/Kansuler/vue3-introduction-course/master/XX_assets/20_first_question.PNG)

