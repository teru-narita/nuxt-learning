<template>
  <div>
    <h1>
      TODOリスト一覧
      <b-button
        @click="openModal"
        variant="outline-primary">
        TODOリスト作成
      </b-button>
    </h1>

    <add-todo-list-modal
      :show-add-todo-list-modal="showAddTodoListModal"
      @closeModal="closeModal" />

    <ul v-if="hasTodo">
      <li class="h5" v-for="todo in todoList" :key="todo.link">
        <nuxt-link :to="todo.link">{{ todo.listName }}</nuxt-link>
      </li>
    </ul>
    <div v-else>
      <p>TODOリストがありません。</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import addTodoListModal from '~/components/addTodoListModal'

export default {
  components: {
    addTodoListModal,
  },
  data() {
    return {
      showAddTodoListModal: false,
    };
  },
  computed: {
    ...mapGetters({
      todoList: 'todoList/list'
    }),
    hasTodo() {
      return Boolean(this.todoList.length);
    },
  },
  methods: {
    openModal() {
      this.showAddTodoListModal = true;
    },
    closeModal() {
      this.showAddTodoListModal = false;
    },
  },
}
</script>
