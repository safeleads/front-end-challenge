<template>
  <div id="app">
    <TheHeader />

    <main class="main flex-fill">
      <TheSidebar />
      <router-view />
    </main>
  </div>
</template>

<script>
import { TheSidebar, TheHeader } from './components/common';
export default {
  components: {
    TheSidebar,
    TheHeader
  }
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  display: flex;
}
</style>
