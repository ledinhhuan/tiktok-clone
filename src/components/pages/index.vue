<template>
	<section class="home">
		<div class="home__container">
			<div class="home__wrapper">
				<div class="home__video">
					<video
						:loop="true"
						src="https://v16m-webapp.tiktokcdn-us.com/71439e268f8affcf8109958fd2a35702/626e8fc9/video/tos/useast2a/tos-useast2a-pve-0037-aiso/aa0153a6353f4a76bd1fb3d778db0f3d/?a=1988&amp;br=3036&amp;bt=1518&amp;cd=0%7C0%7C1%7C0&amp;ch=0&amp;cr=0&amp;cs=0&amp;cv=1&amp;dr=0&amp;ds=3&amp;er=&amp;ft=ebtHKHk_Myq8Z_q7Rwe2NgeGfl7Gb&amp;l=2022050107475101011313517619DE03DA&amp;lr=tiktok&amp;mime_type=video_mp4&amp;net=0&amp;pl=0&amp;qs=0&amp;rc=M3VuOzk6ZnhkPDMzZjgzM0ApZjU4Zjo7OjwzN2VpZzc0ZmdkM2YxcjRvMmlgLS1kL2Nzcy4yYjYvYS8zXjMuMzE2LzI6Yw%3D%3D&amp;vl=&amp;vr="
						webkit-playsinline="true"
						playsinline=""
						class="jsx-4125644611"
						style="object-fit: cover"
					></video>
				</div>
				<div class="home__video-info">
					<video-information />
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
	name: 'HomePage',
	components: {
		VideoInformation: defineAsyncComponent(() =>
			import('@/components/video-information/index.vue')
		)
	}
});
</script>
<style lang="scss" scoped>
.home {
	&__wrapper {
		position: relative;
	}
  &__video {
    width: 100vw;
    height: calc(100vh - 90px);
    video {
      width: 100%;
      height: 100%;
    }
  }
	&__video-info {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 143px;
		background: linear-gradient(
			180deg,
			rgba(0, 0, 0, 7e-5) 0%,
			rgba(0, 0, 0, 0.7) 100%
		);
		mix-blend-mode: hard-light;
	}
}
</style>
