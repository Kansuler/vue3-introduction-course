<template>
  <div class="home">
    <Question :question="questionItem.question" v-on:answer="(v) => answer(v)"/>
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
    };
  },
  computed: {
    questionItem() {
      return this.$store.getters.questionById(this.questionId);
    },
  },
  methods: {
    answer(value) {
      window.console.log({ value });
    },
  },
};
</script>
