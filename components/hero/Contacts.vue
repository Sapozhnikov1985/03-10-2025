<script lang="ts" setup></script>

<template>
    <nav class="flex items-center gap-4 h-fit">
        <NuxtLink to="https://t.me/psihologiyagorevaniya" external>
            <Button size="icon" class="text-xl sm:text-2xl p-3">
                <Icon class="text-white" name="icon-park-outline:telegram" />
                <span class="sr-only">Написать в телеграм</span>
            </Button>
        </NuxtLink>
        <NuxtLink to="https://wa.me/+79122899048" external>
            <Button size="icon" class="text-xl sm:text-2xl p-3">
                <Icon class="text-white" name="tabler:brand-whatsapp-filled" />
                <span class="sr-only">Написать в ватсапп</span>
            </Button>
        </NuxtLink>
    </nav>
</template>

<style lang="scss" scoped></style>
