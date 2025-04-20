<script lang="ts" setup></script>

<template>
    <div class="__home">
        <HeroRoot aos-delay="500" />
        <AboutRoot aos-delay="200" />
        <BlogRoot aos-delay="200" />
        <CommonVideoDialog :id="456239818" name="test" />
    </div>
</template>

<style lang="scss" scoped>
.__home {
    @apply space-y-4;
}
</style>
