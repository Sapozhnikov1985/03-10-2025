<script lang="ts" setup>
defineProps<{
    post: {
        title: string;
        description: string;
        cover: string;
        path: string;
    };
}>();
</script>

<template>
    <NuxtLink :to="post.path">
        <Card>
            <CardHeader class="space-y-2">
                <img class="blog-cover" :src="post.cover" :alt="post.title" />
                <CardTitle>{{ post.title }}</CardTitle>
                <CardDescription>{{ post.description }}</CardDescription>
            </CardHeader>
        </Card>
    </NuxtLink>
</template>

<style lang="scss" scoped>
.blog-cover {
    @apply aspect-[16/9]  rounded object-cover;
}
</style>
