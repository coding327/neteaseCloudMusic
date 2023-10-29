<template>
	<view class="music-head" :style="{ color }">
		<view v-if="icon" class="music-head-icon">
			<text class="iconfont iconzuojiantou-copy" @tap="handleToBack"></text>
			|
			<text class="iconfont iconshouye" @tap="handleToHome"></text>
		</view>
		{{ title }}
	</view>
</template>

<script>
	import '@/common/iconfont.css'

	export default {
		name: "music-head",
		props: ['title', 'icon', 'color'],
		data() {
			return {

			};
		},
		methods: {
			handleToBack() {
				uni.navigateBack()
			},
			handleToHome() {
				uni.navigateTo({
					url: '/pages/index/index'
				})
			}
		}
	}
</script>

<style scoped>
	.music-head {
		height: 75px;
		font-size: 16px;
		line-height: 80px;
		text-align: center;
		color: #000;
		position: relative;
	}

	.music-head-icon {
		position: absolute;
		left: 8px;
		top: 23px;
		width: 90px;
		height: 31px;
		background-color: rgba(0, 0, 0, .4);
		color: white;
		line-height: 31px;
		display: flex;
		justify-content: space-evenly;
		border-radius: 15px;
	}
</style>