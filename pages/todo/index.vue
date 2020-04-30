<template>
  <div>
    <h1>TODO</h1>
    <ul>
      <li v-for="todo in todoList" :key="todo.name">
        <nuxt-link :to="todo.link">{{todo.name}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoList: [
        { name: '課題リスト', link: 'todo/1'},
        { name: 'ほげほげリスト', link: 'todo/2'},
        { name: 'ふがふがリスト', link: 'todo/3'},
      ],
    };
  },
}
</script>
