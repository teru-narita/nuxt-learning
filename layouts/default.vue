<template>
  <div>
    <b-container fluid>
      <pageHeader />
      <nuxt />
    </b-container>
  </div>
</template>

<script>
import pageHeader from '~/components/header'

export default {
  components: {
    pageHeader
  }
}
</script>
