<script lang="ts" setup>
const { data: blog } = await useAsyncData("blog", () => {
    return queryCollection("content")
        .select("title", "description", "cover", "path")
        .all();
});
</script>

<template>
    <div class="__home">
        <HeroRoot />
        <CommonBlock>
            <Carousel class="w-full">
                <CarouselContent>
                    <CarouselItem v-for="post in blog" class="blog-item">
                        <NuxtLink :to="post.path">
                            <Card>
                                <CardHeader>
                                    <img
                                        class="blog-cover"
                                        :src="post.cover"
                                        :alt="post.title"
                                    />
                                    <CardTitle>{{ post.title }}</CardTitle>
                                    <CardDescription>{{
                                        post.description
                                    }}</CardDescription>
                                </CardHeader>
                            </Card>
                        </NuxtLink>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </CommonBlock>
    </div>
</template>

<style lang="scss" scoped>
.__home {
    @apply space-y-2;
    .blog-item {
        @apply sm:basis-1/2 lg:basis-1/3;
        .blog-cover {
            @apply aspect-[16/9]  rounded object-cover;
        }
    }
}
</style>
