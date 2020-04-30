<template>
  <div>
    <a>{{param}}</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      param: this.$route.params.id
    }
  }
}
</script>