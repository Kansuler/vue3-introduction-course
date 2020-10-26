Setup data in the App.vue file

```vue
<script>
export default {
  name: 'App',
  data() {
    return {
      quiz: [
        {
          question: 'Which two US states share a border with Rhode Island?',
          answer: 'Connecticut and Massachusetts',
          category: 'history'
        },
        {
          question: 'Macrophobia is the fear of what?',
          answer: 'long waits',
          category: 'general'
        },
        {
          question: 'What country was policed by the Blackshirts for almost 25 years?',
          answer: 'Italy',
          category: 'geography'
        }
      ]
    };
  },
};
</script>
```
