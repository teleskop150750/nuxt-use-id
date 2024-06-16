<script setup lang="ts">
import { provideConfigContext } from '~/inner/config'

const useIdFunction = () => useId()

provideConfigContext({
  getId: useIdFunction,
})
</script>


<template>
  <div>
    <AccordionItem />
  </div>
</template>
