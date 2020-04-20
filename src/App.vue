<template>
  <div id="app" class="overflow-hidden w-100">
    <TheHeader />

    <main class="main">
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
.main {
  display: flex;
  min-height: 100%;
}

.sidebar + div {
  flex: 1;
}
</style>
