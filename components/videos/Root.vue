<script lang="ts" setup>
const { data: vids } = await useAsyncData("vids", () => {
    return queryCollection("videos").select("name", "vid", "cover").all();
});
</script>

<template>
    <CommonBlock class="space-y-2">
        <h2>Видео</h2>
        <Carousel class="mx-12">
            <CarouselContent>
                <CarouselItem v-for="vid in vids" class="vid-item">
                    <CommonVideoDialog
                        :cover="vid.cover"
                        :vid="vid.vid"
                        :name="vid.name"
                    />
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </CommonBlock>
</template>

<style lang="scss" scoped>
.vid-item {
    @apply sm:basis-1/2 lg:basis-1/3;
}
</style>
