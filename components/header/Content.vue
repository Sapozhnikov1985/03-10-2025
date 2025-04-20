<script lang="ts" setup></script>

<template>
    <header
        class="flex items-center gap-4 justify-between p-4 border-2 rounded-3xl backdrop-blur-xl"
        style="background-color: hsl(var(--muted) / 0.5)"
    >
        <NuxtLink to="/" class="branding">
            <ClientOnly>
                <MorphingText
                    class="text-[100pt]"
                    :texts="['ПАВЕЛ', 'САПОЖНИКОВ']"
                />
            </ClientOnly>
        </NuxtLink>
        <nav class="hidden sm:flex gap-4 items-center"></nav>
    </header>
</template>

<style lang="scss" scoped></style>
