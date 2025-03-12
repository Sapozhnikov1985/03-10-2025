<script lang="ts" setup>
defineProps<{
    src?: string;
}>();
</script>

<template>
    <CardContainer>
        <CardBody
            class="w-full group/card relative rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]"
        >
            <CardItem
                :translate-z="50"
                class="text-xl font-bold text-neutral-600 dark:text-white"
            >
                <slot name="title" />
            </CardItem>
            <CardItem
                as="p"
                translate-z="60"
                class="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
            >
                <slot name="description" />
            </CardItem>
            <CardItem v-if="src" :translate-z="100" class="mt-4 w-full">
                <img
                    :src="src"
                    class="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                    alt="thumbnail"
                />
            </CardItem>
        </CardBody>
    </CardContainer>
</template>

<style lang="scss" scoped></style>
