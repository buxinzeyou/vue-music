<template>
  <div class="app-container">

      <router-view></router-view>

  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },

  methods: {},

};
</script>

<style lang="scss" scoped>
.app-container {
  height: 100%;
}

</style>
