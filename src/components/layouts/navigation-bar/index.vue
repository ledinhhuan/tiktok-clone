<template>
	<div class="navigation-bar">
		<navigation-item />
	</div>
</template>
<script>
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
	name: 'NavigationBar',
	components: {
		NavigationItem: defineAsyncComponent(() =>
			import('@/components/layouts/navigation-bar/item.vue')
		)
	}
});
</script>
<style lang="scss" scoped>
.navigation-bar {
	background: #000;
	height: 90px;
}
</style>
