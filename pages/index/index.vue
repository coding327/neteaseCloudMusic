<template>
	<view class="index">
		<MusicHead title="网易云音乐" :icon="false"></MusicHead>
		<view class="container">
			<scroll-view scroll-y="true">
				<view class="index-search">
					<text class="iconfont iconsearch"></text>
					<input type="text" placeholder="搜索歌曲">
				</view>
				<view class="index-list">
					<view class="index-list-item" v-for="(item, index) in topList" :key="index" @tap="handleToList(item.id)">
						<view class="index-list-img">
							<image :src="item.coverImgUrl" mode=""></image>
							<text>{{ item.updateFrequency }}</text>
						</view>
						<view class="index-list-text">
							<view v-for="(item, index) in item.tracks" :key="index">
								{{ index + 1 }}.{{ item.first}} - {{ item.second }}
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	// import '@/common/iconfont.css';
	import MusicHead from '@/components/music-head/music-head.vue';
	import {
		getTopList
	} from '@/common/api.js'

	export default {
		data() {
			return {
				topList: []
			}
		},
		components: {
			MusicHead
		},
		async onLoad() {
			const res = await getTopList()
			console.log(res);
			if (res.length) this.topList = res;
		},
		methods: {
			handleToList(id) {
				uni.navigateTo({
					url: '/pages/list/list?id=' + id,
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
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

	.index-list {
		margin: 0 30rpx;
	}

	.index-list-item {
		display: flex;
		margin-bottom: 35rpx;
	}

	.index-list-img {
		width: 212rpx;
		height: 212rpx;
		margin-right: 20rpx;
		border-radius: 15rpx;
		overflow: hidden;
		position: relative;
	}

	.index-list-img image {
		width: 100%;
		height: 100%;
	}

	.index-list-img text {
		position: absolute;
		font-size: 22rpx;
		color: white;
		bottom: 15rpx;
		left: 15rpx;
	}

	.index-list-text {
		flex: 1;
		font-size: 24rpx;
		line-height: 68rpx;
		overflow: hidden;

		view {
			white-space: nowrap;
		}
	}
</style>