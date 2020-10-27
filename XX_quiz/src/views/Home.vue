<template>
  <div class="home">
    <template v-for="questionItem in questions" :key="questionItem.id">
      <Question
        :question="questionItem.question"
        v-if="questionItem.id === questionId"
        v-on:answer="(v) => answer(v)"
      />
    </template>
  </div>
</template>

<script>
import Question from '../components/Question.vue';

export default {
  name: 'Home',
  components: {
    Question,
  },
  data() {
    return {
      questionId: 1,
      answers: [],
    };
  },
  computed: {
    questions() {
      return this.$store.state.quiz;
    },
  },
  methods: {
    answer(value) {
      window.console.log({ value });
    },
  },
};
</script>
