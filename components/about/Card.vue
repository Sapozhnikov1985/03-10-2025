<script lang="ts" setup>
const props = defineProps<{
    src?: string;
    class?: string;
}>();
</script>

<template>
    <CardContainer :container-class="props.class">
        <CardBody
            class="w-full flex flex-col relative rounded-xl border border-black/[0.1] bg-gray-50 p-6 h-full"
        >
            <CardItem
                :translate-z="50"
                class="text-xl font-bold text-neutral-600"
            >
                <slot name="title" />
            </CardItem>
            <CardItem
                as="p"
                translate-z="60"
                class="mb-4 max-w-sm text-sm text-neutral-500"
            >
                <slot name="description" />
            </CardItem>
            <CardItem v-if="src" :translate-z="100" class="w-42 h-min mt-auto">
                <img
                    :src="src"
                    class="w-full aspect-video rounded-xl object-cover group-hover/card:shadow-xl"
                    alt="Фотография"
                />
            </CardItem>
        </CardBody>
    </CardContainer>
</template>

<style lang="scss" scoped></style>
