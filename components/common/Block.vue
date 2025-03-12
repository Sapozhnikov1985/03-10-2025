<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

interface BlockProps {
    class?: HTMLAttributes["class"];
    aosDelay?: string;
}

const props = defineProps<BlockProps>();

const cardStyle =
    "bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-5 rounded-3xl border-2 flex flex-col justify-end p-4 sm:p-6";
</script>

<template>
    <ClientOnly>
        <section
            data-aos="fade-up"
            :data-aos-delay="props.aosDelay"
            :class="cn(cardStyle, props.class)"
        >
            <slot />
        </section>
        <template #fallback>
            <Skeleton>
                <section
                    :class="
                        cn(
                            `opacity-0 pointer-events-none ${cardStyle}`,
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
