<template>
  <div>
    <h1>{{param}}TODOリスト</h1>

    <add-todo-form />

    <ul v-if="hasTodo">
      <li class="h5" v-for="todo in todos" :key="todo.todo">
        <a>{{ todo.todo }}</a>
      </li>
    </ul>
    <div v-else>
      <p>TODOがありません。</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import addTodoForm from '~/components/addTodoForm';

export default {
  components: {
    addTodoForm,
  },
  data() {
    return {
      param: this.$route.params.listName,
    };
  },
  computed: {
    ...mapGetters({
      todoList: 'todoList/list'
    }),
    hasTodo() {
      return Boolean(this.todoList.length);
    },
    todos() {
      if (!this.hasTodo) return []
      return this.todoList[this.todoList.findIndex(({listName}) => listName === this.param)].todos;
    },
  },
};
</script>