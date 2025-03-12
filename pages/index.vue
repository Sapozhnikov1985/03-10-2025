<script lang="ts" setup></script>

<template>
    <div class="__home">
        <HeroRoot />
        <AboutRoot aos-delay="50" />
        <BlogRoot aos-delay="100" />
    </div>
</template>

<style lang="scss" scoped>
.__home {
    @apply space-y-2;
}
</style>
