<script lang="ts" setup>
import InteractiveGridPattern from "@/components/ui/interactive-grid-pattern/InteractiveGridPattern.vue";
</script>

<template>
    <CommonBlock>
        <div class="effect">
            <img
                src="https://picsum.photos/600/800?random=6"
                alt="Фотография"
                class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full aspect-square object-cover w-48 z-10 shadow-2xl"
            />
            <InteractiveGridPattern />
        </div>
        <h2>Обо мне</h2>
        <div class="flex flex-wrap gap-4">
            <ClientOnly>
                <AboutCard src="/media/cards/1.jpg">
                    <template #title>
                        <span class="text-3xl">Паллиативный онкопсихолог</span>
                    </template>
                    <template #description> 15 лет практики </template>
                </AboutCard>
                <AboutCard src="/media/cards/2.jpg">
                    <template #title
                        >10 лет - работы в Федеральных больницах.
                    </template>
                    <template #description
                        >Последнее место работы онкологическое отделение СПБГУ
                    </template>
                </AboutCard>
            </ClientOnly>
        </div>
    </CommonBlock>
</template>

<style lang="scss" scoped>
.effect {
    @apply aspect-video [mask-image:radial-gradient(350px_circle_at_center,white,transparent)] inset-0  skew-y-12 relative;
}
</style>
