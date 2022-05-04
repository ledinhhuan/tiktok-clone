<template>
	<div class="default-layout">
		<div class="default-layout__container">
			<router-view />
		</div>
		<div class="default-layout__footer">
			<navigation-bar />
		</div>
	</div>
</template>
<script>
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
	name: 'DefaultLayout',
	components: {
		NavigationBar: defineAsyncComponent(() =>
			import('@/components/layouts/navigation-bar/index.vue')
		)
	}
});
</script>
<style lang="scss" scoped>
.default-layout {
	&__container {
		height: calc(100vh - 90px);
	}
}
</style>
