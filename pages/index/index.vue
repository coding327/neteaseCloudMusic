<template>
	<view class="index">
		<MusicHead title="网易云音乐" :icon="false"></MusicHead>
		<view class="container">
			<scroll-view scroll-y="true">
				<view class="index-search">
					<text class="iconfont iconsearch"></text>
					<input type="text" placeholder="搜索歌曲">
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import '@/common/iconfont.css';
	import MusicHead from '@/components/music-head/music-head.vue';

	export default {
		data() {
			return {}
		},
		components: {
			MusicHead
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style scoped>
	.index-search {
		display: flex;
		align-items: center;
		height: 70rpx;
		margin: 70rpx 30rpx 30rpx;
		background: #f7f7f7;
		border-radius: 50rpx;
	}

	.index-search text {
		font-size: 26rpx;
		margin-right: 26rpx;
		margin-left: 28rpx;
	}

	.index-search input {
		flex: 1;
	}
</style>