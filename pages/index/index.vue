<template>
	<view>
		<view class="top"><u-search placeholder="找呱友" v-model="keyword" input-align="center"></u-search></view>
		<view><map style="width: 100%; height: 100vh" :latitude="latitude" :longitude="longitude" :markers="covers"></map></view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			keyword: '找呱友',
			title: 'Hello',
			id: 0, // 使用 marker点击事件 需要填写id
			title: 'map',
			latitude: 39.909,
			longitude: 116.39742,
			covers: [
				{
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '../../../static/location.png'
				},
				{
					latitude: 39.9,
					longitude: 116.39,
					iconPath: '../../../static/location.png'
				}
			]
		};
	},
	onLoad() {},
	methods: {}
};
</script>

<style lang="scss" scoped>
.top {
	margin-bottom: 5px;
	margin-top: 5px;
}
.content {
	// width: 90%;
}
</style>
