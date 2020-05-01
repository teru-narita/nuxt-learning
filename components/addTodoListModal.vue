<template>
  <div>
    <b-modal
      v-model="showModal"
      title="TODOリストを作成"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk">
        <form ref="form" @submit.stop.prevent="handleOk">
          <b-form-group
            label-cols="4"
            label-cols-lg="2"
            label="リスト名"
            label-for="text-input"
            invalid-feedback="text is required"
          >
            <b-form-input
              id="text-input"
              :type="'text'"
              v-model="listName"
              required
            ></b-form-input>
          </b-form-group>
        </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    showAddTodoListModal: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      showModal: false,
      listName: '',
    };
  },
  watch: {
    showAddTodoListModal() {
      this.showModal = this.showAddTodoListModal;
    }
  },
  methods: {
    handleOk() {
      this.$store.commit('todoList/addList', this.listName);
      this.resetModal();
    },
    resetModal() {
      this.listName = '';
      this.$emit('closeModal');
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    },
  },
};
</script>
