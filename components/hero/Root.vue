<script lang="ts" setup></script>

<template>
    <CommonBlock class="hero">
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

<style lang="scss" scoped>
.hero {
    height: calc(100vh - 7rem);
}
</style>
