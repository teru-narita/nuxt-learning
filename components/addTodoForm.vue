<template>
  <div>
    <b-container fluid class="bv-example-row">
      <form ref="form" @submit.stop.prevent="submit">
        <b-row>
          <b-col>
            <b-form-group
              label-cols-sm="3"
              label="TODO"
              label-for="todo-input"
              invalid-feedback="todo is required"
            >
              <b-form-input
                id="todo-input"
                v-model="todo"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              label-cols-sm="3"
              label="優先度"
            >
              <b-form-radio-group
                v-model="selected"
                :options="options"/>
            </b-form-group>
          </b-col>
          <b-col>
            <b-button
              @click="submit"
              variant="outline-primary">
              TODO作成
            </b-button>
          </b-col>
        </b-row>
      </form>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      param: this.$route.params.listName,
      todo: '',
      selected: 'B',
      options: [
        { text: '高', value: 'A' },
        { text: '中', value: 'B' },
        { text: '低', value: 'C' },
      ]
    }
  },
  methods: {
    submit() {
      this.$store.commit('todoList/addTodo', {
        listName: this.param,
        todo: this.todo,
        priority: this.selected,
      });
      this.resetForm();
    },
    resetForm() {
      this.todo = '';
      this.selected = 'B';
    },
  }
}
</script>