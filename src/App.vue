<template>
  <div id="app" class="overflow-hidden w-100">
    <div class="header">Header</div>

    <main class="main">
      <TheSidebar />
      <router-view />
    </main>
  </div>
</template>

<script>
import TheSidebar from './components/common/TheSidebar';
export default {
  components: {
    TheSidebar
  }
};
</script>

<style lang="scss">
.main {
  display: flex;
  min-height: 100%;
}

.sidebar + div {
  flex: 1;
}
</style>
