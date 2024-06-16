<script setup lang="ts">
import { getId } from '~/inner/getId'

const id = getId()
</script>

<template>
  <div>
    <slot /> {{ id }}
  </div>
</template>
