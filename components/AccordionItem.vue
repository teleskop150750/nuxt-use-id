<script setup lang="ts">
import { getId } from '~/inner/getId'

const id = getId()
</script>

<template>
  <Collapsible>
    <slot /> {{ id }} |
  </Collapsible>
</template>
