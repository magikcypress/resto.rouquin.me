<script setup>
import ParentLayout from '@vuepress/theme-default/components/PageMeta.vue'
</script>

<template>
  <ParentLayout>
    <template #page-meta>
      <div class="my-footer">This is my custom page footer</div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.my-footer {
  text-align: center;
}
</style>