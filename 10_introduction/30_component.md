# Component

Now we have a perfect opportunity to setup a component that can be reused for any question.

Create Question.vue in `/workspace/quiz/src/components/Question.vue`. And write the following code in it:

```vue
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
```

In the code above we've made a generic component gets a [prop](https://v3.vuejs.org/guide/component-props.html) named `question` from parent and display it in the HTML code under `{{question}}`.

Notice that we are not sending down the entire questionItem. Try to avoid sending objects through props, it will make the logic of the components very hard to wrap your head around. Send down primitive data types as much as you can.
In this case we send down a string that contain the question.

We also set up data property named `answer` and bind it to our input through the [v-model](https://v3.vuejs.org/api/directives.html#v-model) directive. This directive will make the data property update if it changes in the element.

we added a `v-on:submit.prevent` to the `<form/>` element. When the user click enter, or the `<input type="submit" />` emits a submit it will be catched by the form and call the method `emitSubmit`. The `.prevent` will automatically call `call event.preventDefault()` which prevents the default submit events to happen. The emitSubmit method will trigger [$emit](https://v3.vuejs.org/api/instance-methods.html#emit) which triggers an event on the component that can be catched by the parent component.

Now lets go back to the `/workspace/quiz/src/view/Home.vue` file and add the component to it.
```vue
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
```

Here we imported the Question component with `import Question from '../components/Question.vue';` and we register the component to Home.vue with the [components](https://v3.vuejs.org/api/options-assets.html#components) property.

We also define a `<template />` which is an element that you can bind logic to, without it being rendered in the browser. For this program we bind a [v-for](https://v3.vuejs.org/guide/list.html#list-rendering) directive that will loop our `<Question />` component.

By then using the `<Question :question="questionItem.question" v-if="questionItem.id === questionId" v-on:answer="(v) => answer(v)" />` element in the template we'll use the component. But yes, this declaration does a lot so let's break it down.

By putting `:` in front of the attribute of an element you bind it to either data, methods or computed property. So when we write `:question="questionItem.question"` it will refer to the computed property questionItem.question, instead of the string "questionItem.question".

We have a [v-if](https://v3.vuejs.org/guide/conditional.html#v-if) directive that will tell the component to render if the expression is a match.

When we use `v-on:answer="(v) => answer(v)"` we listen to the answer event from the component. This happens when our child component uses `this.$emit()` but could also happen on normal element events such as `v-on:change` which is the same as `element.addEventListener('change', () => {})`

Now we should see the following:

![First Component](https://raw.githubusercontent.com/Kansuler/vue3-introduction-course/master/XX_assets/30_using_question_component.PNG)

When you click on the button we should see console log output of the input value in our child component.
