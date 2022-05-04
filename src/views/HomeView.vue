<template>
	<main>
		<mobile />
	</main>
</template>
<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
	name: 'HomeIndex',
	components: {
		Mobile: defineAsyncComponent(() => import('@/components/pages/index.vue'))
	}
});
</script>
