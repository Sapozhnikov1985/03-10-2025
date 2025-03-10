<script lang="ts" setup>
withDefaults(
    defineProps<{
        coef?: number;
    }>(),
    {
        coef: 1,
    }
);
</script>

<template>
    <section :style="{ '--scale': coef }">
        <slot />
    </section>
</template>

<style lang="scss" scoped>
section {
    @apply bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-5 rounded-3xl border-2 flex flex-col justify-end p-6 sm:p-12;
    height: calc((100vh - 7rem) / var(--scale));
}
</style>
