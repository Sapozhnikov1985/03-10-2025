<script lang="ts" setup>
const { data: blog } = await useAsyncData("blog", () => {
    return queryCollection("content")
        .select("title", "description", "cover", "path")
        .all();
});
</script>

<template>
    <CommonBlock class="space-y-2">
        <h2>Посты</h2>
        <Carousel class="mx-12">
            <CarouselContent>
                <CarouselItem v-for="post in blog" class="blog-item">
                    <BlogPost :post="post" />
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </CommonBlock>
</template>

<style lang="scss" scoped>
.blog-item {
    @apply sm:basis-1/2 lg:basis-1/3;
}
</style>
