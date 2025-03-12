<script lang="ts" setup></script>

<template>
    <CommonBlock class="hero" style="height: calc(100vh - 7rem)">
        <img
            class="h-4/5 mb-8 rounded-md shadow-xl object-cover"
            src="https://picsum.photos/600/800?random=6"
            alt="Фотография"
        />
        <div class="flex flex-wrap gap-x-8 gap-y-4 justify-between items-end">
            <h1 class="uppercase font-bold text-3xl sm:text-5xl lg:text-6xl">
                Павел
                <br />
                Сапожников
            </h1>
            <HeroContacts />
        </div>
    </CommonBlock>
</template>

<style lang="scss">
.hero {
    @apply overflow-hidden p-6 sm:p-12;
    height: calc(100vh - 7rem);
}
</style>
