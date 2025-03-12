<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

interface BlockProps {
    class?: HTMLAttributes["class"];
}

const props = defineProps<BlockProps>();
</script>

<template>
    <ClientOnly>
        <section
            data-aos="fade-up"
            :class="
                cn(
                    'bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-5 rounded-3xl border-2 flex flex-col justify-end p-4 sm:p-6',
                    props.class
                )
            "
        >
            <slot />
        </section>
        <template #fallback>
            <Skeleton>
                <section
                    :class="
                        cn(
                            'opacity-0 pointer-events-none bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-5 rounded-3xl border-2 flex flex-col justify-end p-4 sm:p-6',
                            props.class
                        )
                    "
                >
                    <slot />
                </section>
            </Skeleton>
        </template>
    </ClientOnly>
</template>

<style lang="scss" scoped></style>
