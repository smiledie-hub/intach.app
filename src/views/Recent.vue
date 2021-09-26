<template>
  <BaseLayout>
    <template #content>
      <div class="page page--recent">
        <h1 class="page__title">Последнее</h1>
      </div>
    </template>
  </BaseLayout>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import BaseLayout from "@/components/BaseLayout.vue";

@Options({
  components: {BaseLayout}
})
export default class Recent extends Vue {}
</script>
