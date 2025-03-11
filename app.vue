<template>
    <div class="root space-y-2">
        <NuxtRouteAnnouncer />
        <HeaderRoot />
        <NuxtPage />
    </div>
</template>

<style lang="scss" scoped>
.root {
    @apply max-w-[1000px] mx-auto p-4;
}
</style>
