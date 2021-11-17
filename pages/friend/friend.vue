<template>
	<u-index-list>
		<u-cell-group slot="header">
			<u-cell title="新的朋友">
				<u-avatar
					slot="icon"
					shape="square"
					size="35"
					icon="man-add-fill"
					fontSize="26"
					randomBgColor
					customStyle="margin: -3px 5px -3px 0"
				></u-avatar>
			</u-cell>
			<u-cell title="标签">
				<u-avatar
					slot="icon"
					shape="square"
					size="35"
					icon="tags-fill"
					fontSize="26"
					randomBgColor
					customStyle="margin: -3px 5px -3px 0"
				></u-avatar>
			</u-cell>
			<u-cell title="朋友圈">
				<u-avatar
					slot="icon"
					shape="square"
					size="35"
					icon="chrome-circle-fill"
					fontSize="26"
					randomBgColor
					customStyle="margin: -3px 5px -3px 0"
				></u-avatar>
			</u-cell>
			<u-cell
				title="QQ"
				:border="false"
			>
				<u-avatar
					slot="icon"
					shape="square"
					size="35"
					icon="qq-fill"
					fontSize="26"
					randomBgColor
					customStyle="margin: -3px 5px -3px 0"
				></u-avatar>
			</u-cell>
		</u-cell-group>
		<template
			v-for="(item, index) in itemArr"
		>
			<!-- #ifdef APP-NVUE -->
			<u-index-anchor :text="indexLists[index]" :key="index"></u-index-anchor>
			<!-- #endif -->
			<u-index-item :key="index">
				<!-- #ifndef APP-NVUE -->
				<u-index-anchor :text="indexLists[index]"></u-index-anchor>
				<!-- #endif -->
				<u-cell
					v-for="(item1, index1) in item"
					:key="index1"
					:title="item1.name"
					:border="index1 !== item.length - 1"
				>
					<u-avatar
						slot="icon"
						shape="square"
						size="35"
						:src="item1.url"
						customStyle="margin: -3px 5px -3px 0"
					></u-avatar>
				</u-cell>
			</u-index-item>
		</template>
	</u-index-list>
</template>

<script>
	const indexList = () => {
		const indexList = []
		const charCodeOfA = 'A'.charCodeAt(0)
		for (let i = 0; i < 26; i++) {
			indexList.push(String.fromCharCode(charCodeOfA + i))
		}
		return indexList
	}
	// #ifdef APP-NVUE
    // 复制后解开下面一行注释
	// const dom = uni.requireNativePlugin('dom')
	// #endif
	export default {
		data() {
			return {
				indexList: indexList(),
				list:[
					{st:"A",data:[{name:'勇往无敌',url:'https://cdn.uviewui.com/uview/album/1.jpg'},{name:'麦小姐',url:'https://cdn.uviewui.com/uview/album/2.jpg'}]},
					{st:"B",data:[{name:'疯狂的迪飙',url:'https://cdn.uviewui.com/uview/album/3.jpg'},{name:'胡格罗雅',url:'https://cdn.uviewui.com/uview/album/4.jpg'}]},
					{st:"C",data:[{name:'梦幻梦幻梦',url:'https://cdn.uviewui.com/uview/album/5.jpg'},{name:'乐乐立立',url:'https://cdn.uviewui.com/uview/album/6.jpg'}]}
				],
				indexLists:[],
			}
		},
		computed: {
			itemArr() {
				let self = this;
				return self.indexList.map((item,index) => {
					const arr = []
					if(self.list[index]&&self.list[index]['st']===item){
						self.indexLists.push(item)
						for (let i = 0; i < self.list[index]['data'].length; i++) {
							arr.push({
						   // 复制后解开下面两行注释
								name: self.list[index]['data'][i].name,
								url: self.list[index]['data'][i].url
							})
						}
					}
					return arr
				})
			}
		},
	}
</script>

<style lang="scss">
	.icon {
		width: 36px;
		height: 36px;
		margin: -3px 5px -3px 0;
	}
</style>
