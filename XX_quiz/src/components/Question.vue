<template>
  <form v-on:submit.prevent="emitSubmit" class="question">
    <h1>
      {{question}}
    </h1>
    <div>
      <input type="text" v-model="answer" />
    </div>
    <div>
      <input type="submit" value="Next question" />
    </div>
  </form>
</template>

<script>
export default {
  props: ['question'],
  data() {
    return {
      answer: '',
    };
  },
  methods: {
    emitSubmit() {
      this.$emit('answer', this.answer);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
