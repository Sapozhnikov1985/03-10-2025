<script lang="ts" setup></script>

<template>
    <header
        class="flex items-center gap-4 justify-between p-4 border-2 rounded-3xl backdrop-blur-xl"
        style="background-color: hsl(var(--muted) / 0.5)"
    >
        <div class="branding">
            <ClientOnly>
                <MorphingText
                    class="text-[100pt]"
                    :texts="['САМАЯ', 'ЛУЧШАЯ', 'ПОМОЩЬ']"
                />
            </ClientOnly>
        </div>
        <nav class="hidden sm:flex gap-4 items-center"></nav>
        <HeaderColorSwitcher />
    </header>
</template>

<style lang="scss" scoped></style>
