<template>
	<view class="list">
		<view class="fixbg"></view>
		<MusicHead title="歌单" :icon="true" color="white"></MusicHead>
		<view class="container">
			<scroll-view scroll-y="true">
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import MusicHead from '@/components/music-head/music-head.vue'

	export default {
		components: {
			MusicHead
		},
		data() {
			return {

			}
		},
		onLoad: (options) => {
			console.log(options.id);
		},
		methods: {

		}
	}
</script>

<style>

</style>