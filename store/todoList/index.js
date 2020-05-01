export const state = () => ({
  list: [
    {
      listName: '旅行準備',
      link: 'todo/旅行準備',
      todos: [
        {todo: '荷造り', priority: 'B', done: false}
      ],
    }
  ]
})

export const getters = {
  list: state => state.list,
}

export const mutations = {
  addList (state, listName) {
    state.list.push({
      listName: listName,
      link: `todo/${ listName }`,
      todos: [],
    })
  },
  addTodo (state, payload) {
    const index = state.list.findIndex(({listName}) => listName === payload.listName);
    state.list[index].todos.push({
      todo: payload.todo,
      priority: payload.priority,
      done: false
    })
  },
  remove (state, { todo }) {
    state.list.splice(
      state.list.indexOf(todo),
      1,
    )
  },
}
