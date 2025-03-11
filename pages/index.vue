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
                    <CarouselItem v-for="post in blog" class="basis-1/3">
                        <NuxtLink :to="post.path">
                            <Card>
                                <CardHeader>
                                    <img :src="post.cover" :alt="post.title" />
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
}
</style>
