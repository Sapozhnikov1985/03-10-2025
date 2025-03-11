<script lang="ts" setup></script>

<template>
    <section>
        <slot />
    </section>
</template>

<style lang="scss" scoped>
section {
    @apply bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-5 rounded-3xl border-2 flex flex-col justify-end p-6 sm:p-12;
}
</style>
