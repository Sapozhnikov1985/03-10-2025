<script lang="ts" setup>
import InteractiveGridPattern from "../ui/interactive-grid-pattern/InteractiveGridPattern.vue";
</script>

<template>
    <CommonBlock class="h-[500px]">
        <div class="grid">
            <img
                src="https://picsum.photos/600/800?random=6"
                alt="Фотография"
                class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full aspect-square object-cover w-48 z-10"
            />
            <InteractiveGridPattern />
        </div>
        <h2>Обо мне</h2>
    </CommonBlock>
</template>

<style lang="scss" scoped>
.grid {
    @apply [mask-image:radial-gradient(350px_circle_at_center,white,transparent)] inset-0 h-[100%] skew-y-12 relative;
}
</style>
