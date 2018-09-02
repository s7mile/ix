<template>
	<div id="prod">
		<!-- 상품 정보 -->
		<prod-info></prod-info>

		<!-- 상품 상세정보 -->
		<prod-detail></prod-detail>
	</div>
</template>

<script>
	import prodInfo from './prod-info.vue'
	import prodDetail from './prod-detail.vue'

	export default {
		name: 'prod',
		components: {prodInfo, prodDetail}
	}
</script>

<style scoped>
	#prod {
		z-index: 9999;
		overflow: hidden;
		overflow-y: auto;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: calc(100% - 40px);
		padding: 20px 0;
		background: rgba(0, 0, 0, .7);
	}
</style>