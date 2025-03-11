<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps({
    error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
    <div v-if="error" class="flex flex-col items-center py-16 gap-4">
        <h1>{{ error.statusCode }}</h1>
        <h4>{{ error.message }}</h4>
        <Button @click="handleError">Домой</Button>
    </div>
</template>
