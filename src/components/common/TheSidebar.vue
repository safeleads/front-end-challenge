<template>
  <div class="sidebar bg-white">
    <b-nav class="sidebar__nav" vertical>
      <b-nav-item v-for="{ icon } in items" :key="icon" class="text-center">
        <b-img :src="require(`../../assets/icons/${icon}`)" />
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: 'TheSidebar',
  data() {
    return {
      items: [
        { icon: 'house.svg' },
        { icon: 'store.svg' },
        { icon: 'user.svg' },
        { icon: 'projeto.svg' },
        { icon: 'money.svg' },
        { icon: 'percent.svg' },
        { icon: 'calendar.svg' },
        { icon: 'dashboard.svg' },
        { icon: 'task.svg' },
        { icon: 'info.svg' },
        { icon: 'file.svg' },
        { icon: 'selecao.svg' },
        { icon: 'flow.svg' },
        { icon: 'lapis.svg' },
        { icon: 'engrenagem.svg' }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
}

.sidebar__nav {
  .nav-link {
    position: relative;
    padding: 18.5px 20px;
    min-height: 64px;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 4px;
      height: 100%;
      background-color: $primary;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.25s cubic-bezier(0.895, 0.03, 0.685, 0.22);
    }

    @include hover-focus-active {
      &:after {
        opacity: 1;
        pointer-events: visible;
      }
    }
  }
}
</style>
