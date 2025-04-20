<script lang="ts" setup>
defineProps<{
    name: string;
    id: number;
}>();
</script>

<template>
    <Dialog>
        <DialogTrigger>
            <Card>
                <CardHeader class="space-y-2">
                    <img />
                    <CardTitle>{{ name }}</CardTitle>
                </CardHeader>
            </Card>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[1000px]">
            <DialogHeader>
                <DialogTitle>{{ name }}</DialogTitle>
            </DialogHeader>

            <iframe
                class="w-full aspect-video rounded-sm"
                :src="`https://vkvideo.ru/video_ext.php?oid=-92204627&id=${id}&hd=2&autoplay=1`"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
                frameborder="0"
                allowfullscreen
            />
        </DialogContent>
    </Dialog>
</template>

<style lang="scss" scoped></style>
