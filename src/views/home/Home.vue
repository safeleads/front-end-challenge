<template>
  <section class="home-page">
    <BodyTabs :tabs="tabs" />
  </section>
</template>

<script>
import { BodyTabs } from '~/components/common';
export default {
  name: 'Home',
  components: { BodyTabs },
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
