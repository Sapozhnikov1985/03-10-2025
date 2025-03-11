<script setup lang="ts">
const { path } = useRoute();

const { data } = await useAsyncData(() =>
    queryCollection("content").path(path).first()
);

if (!data.value)
    throw createError({
        statusCode: 404,
        message: "Страница не найдена",
        fatal: true,
    });

useSeoMeta({
    title: data.value?.title,
    description: data.value?.description,
});
</script>

<template>
    <div class="md">
        <ContentRenderer v-if="data" :value="data" />
    </div>
</template>

<style lang="scss"></style>
