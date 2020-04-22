<template>
  <section class="home-page flex-fill">
    <Tabs :tabs="tabs" />
  </section>
</template>

<script>
import { Tabs } from '~/components/UI';
export default {
  name: 'Home',
  components: { Tabs },
  data() {
    return {
      tabs: [
        {
          title: 'Kanban Leads',
          content: () => import('./tabs/kanban/Kanban.vue')
        }
      ]
    };
  }
};
</script>
