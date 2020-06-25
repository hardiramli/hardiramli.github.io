<template>
  <div>

    <virtual-list style="height: 300px; overflow-y: auto;"
      :data-key="'index'"
      :data-sources="items"
      :data-component="itemComponent"
      :estimate-size="80"
    />

  </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import VirtualList from 'vue-virtual-scroll-list';
    import FavoriteListContentsItem from '@/components/Dashboard/FavoriteListContentsItem.vue';

  export default Vue.extend ({
    name: 'root',
    props:{
      items:Array
    },
    data: () => ({
        itemComponent:FavoriteListContentsItem,
    }),
    components: { 'virtual-list': VirtualList }
  });
</script>