<template>
	<div id="prod" ref="prod">
		<!-- 상품 정보 -->
		<prod-info></prod-info>

		<!-- 상품 상세정보 -->
		<prod-detail></prod-detail>

		<button class="closeBtn icoFriends" @click="closeModal">modal close</button>
	</div>
</template>

<script>
	import prodInfo from './prod-info.vue'
	import prodDetail from './prod-detail.vue'

	export default {
		name: 'prod',
		components: {prodInfo, prodDetail},
		methods: {
			closeModal: function() {
				var container = this.$refs.prod;
				var vm = this

				//home.vue에 있는 visibleDetail 제어하여 컴포넌트 숨기기
				vm.$EventBus.$emit('visibleDetail', false);
				document.body.className = ''; //body의 scrollOff class 없애주기

				//스크롤 초기화
				container.scrollTop = 0;
			}
		}
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

	.closeBtn {
		position: fixed;
		top: 12px;
		right: 27px;
	    width: 32px;
	    height: 32px;
		background-position: -80px -30px;
		text-indent: -999em;
		font-size: 1px;
	}


	/* 반응형 */
	@media (max-width: 1000px) {
		#prod {
			padding: 0;
			height: 100%;
		}

		.closeBtn {
			right: 12px;
			background-position: 0 -40px;
		}
	}
</style>