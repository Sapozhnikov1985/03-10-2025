<script lang="ts" setup>
defineProps<{
    name: string;
    cover: string;
    vid: string;
}>();
</script>

<template>
    <Dialog>
        <DialogTrigger class="vid">
            <Card class="w-96 aspect-video relative overflow-hidden -z-20">
                <CardHeader class="space-y-2 flex justify-center h-full">
                    <img
                        class="absolute w-full h-full left-0 top-0 object-cover object-center -z-10 opacity-80 vid-img transition duration-500"
                        :src="cover"
                        :alt="name"
                    />
                    <CardTitle class="text-background">{{ name }}</CardTitle>
                </CardHeader>
            </Card>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[1000px]">
            <DialogHeader>
                <DialogTitle>{{ name }}</DialogTitle>
            </DialogHeader>

            <iframe
                class="w-full aspect-video rounded-sm"
                :src="`https://vkvideo.ru/video_ext.php?oid=-92204627&id=${vid}&hd=2&autoplay=1`"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
                frameborder="0"
                allowfullscreen
            />
        </DialogContent>
    </Dialog>
</template>

<style lang="scss" scoped>
.vid:hover {
    .vid-img {
        @apply scale-125;
    }
}
</style>
