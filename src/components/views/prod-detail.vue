<template>
	<div>
		<prod-detail-details></prod-detail-details>
		<prod-detail-shipping></prod-detail-shipping>
		<prod-detail-comment></prod-detail-comment>
		<prod-detail-addcomment></prod-detail-addcomment>
		<prod-detail-recommend></prod-detail-recommend>
	</div>
</template>

<script>
	import prodDetailDetails from './prod-detail-details.vue'
	import prodDetailShipping from './prod-detail-shipping.vue'
	import prodDetailComment from './prod-detail-comment.vue'
	import prodDetailAddcomment from './prod-detail-addcomment.vue'
	import prodDetailRecommend from './prod-detail-recommend.vue'

	export default {
		name: 'prod-detail',
		components: {
			prodDetailDetails, 
			prodDetailShipping,
			prodDetailComment,
			prodDetailAddcomment,
			prodDetailRecommend
		}
	}
</script>