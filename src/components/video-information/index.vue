<template>
	<div class="video-info">
		<div class="video-info__container">
			<div class="video-info__name">@fintory</div>
			<div class="video-info__title">We build digital products.</div>
			<div class="video-info__song">Original sound - @Fintory</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'VideoInformation'
};
</script>
<style lang="scss" scoped>
.video-info {
	&__name {
		font-weight: 600;
		font-size: 14.5px;
		line-height: 18px;
		letter-spacing: -0.1px;
		color: #fff;
	}
	&__title,
	&__song {
		font-size: 14px;
		line-height: 17px;
		letter-spacing: -0.5px;

		color: #ffffff;
	}
	&__title {
		margin: 9px 0;
	}
}
</style>
