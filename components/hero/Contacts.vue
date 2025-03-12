<script lang="ts" setup>
import ShimmerButton from "@/components/ui/shimmer-button/ShimmerButton.vue";
</script>

<template>
    <nav class="flex items-center gap-4 h-fit">
        <NuxtLink to="https://t.me/psihologiyagorevaniya" external>
            <ShimmerButton size="icon" class="text-xl sm:text-2xl p-4">
                <Icon class="text-white" name="icon-park-outline:telegram" />
                <span class="sr-only">Написать в телеграм</span>
            </ShimmerButton>
        </NuxtLink>
        <NuxtLink to="https://wa.me/+79122899048" external>
            <ShimmerButton size="icon" class="text-xl sm:text-2xl p-4">
                <Icon class="text-white" name="tabler:brand-whatsapp-filled" />
                <span class="sr-only">Написать в ватсапп</span>
            </ShimmerButton>
        </NuxtLink>
    </nav>
</template>

<style lang="scss" scoped></style>
