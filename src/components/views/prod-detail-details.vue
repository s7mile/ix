<template>
	<!-- 상품 상세정보 -->
	<div class="detailWrap">
		<h3>
			<a href="javascript:;" @click="showArea">DETAILS</a>
		</h3>
		<div class="detailsArea" v-show="visible">
			<div data-v-3d58d422="" class="area_edit"><p data-v-3d58d422=""><!----></p><p data-v-3d58d422=""><!----></p><p data-v-3d58d422=""><!----></p><p data-v-3d58d422=""><!----></p><p data-v-3d58d422=""><span data-v-3d58d422=""><b>Enjoy the waves with this exciting floating mat tube!</b></span></p><p data-v-3d58d422=""><!----></p><p data-v-3d58d422=""><span data-v-3d58d422=""><font color="#666666">If you want a more special summer vacation, how about this?
			This is a surf board shaped tube that is perfect for enjoying the waves lying down.
			</font></span></p><p data-v-3d58d422=""><!----></p><p data-v-3d58d422=""><img alt="Floating Mat Surfing Tube-Ryan" data-v-3d58d422="" src="http://t1.kakaocdn.net/kakaofriends_global/product_0809/FRPBRYMAT0001_DETAIL_00001.jpg?type=thumb&amp;opt=R560x0.q100"></p><p data-v-3d58d422=""><!----></p><p data-v-3d58d422=""><img alt="Floating Mat Surfing Tube-Ryan" data-v-3d58d422="" src="http://t1.kakaocdn.net/kakaofriends_global/product_0809/FRPBRYMAT0001_DETAIL_00002.jpg?type=thumb&amp;opt=R560x0.q100"></p><p data-v-3d58d422=""><!----></p><p data-v-3d58d422=""><span data-v-3d58d422=""><font color="#666666">It is wide and long enough for both children and adults to use.
			Experience the fun in lying on your stomach and paddling through the waves.
			Enjoy a more exciting swim with your friends!

			</font></span></p><p data-v-3d58d422=""><!----></p><p data-v-3d58d422=""><img alt="Floating Mat Surfing Tube-Ryan" data-v-3d58d422="" src="http://t1.kakaocdn.net/kakaofriends_global/product_0809/FRPBRYMAT0001_DETAIL_00003.jpg?type=thumb&amp;opt=R560x0.q100"></p><p data-v-3d58d422=""><img alt="Floating Mat Surfing Tube-Ryan" data-v-3d58d422="" src="http://t1.kakaocdn.net/kakaofriends_global/product_0809/FRPBRYMAT0001_DETAIL_00004.jpg?type=thumb&amp;opt=R560x0.q100"></p><p data-v-3d58d422=""><img alt="Floating Mat Surfing Tube-Ryan" data-v-3d58d422="" src="http://t1.kakaocdn.net/kakaofriends_global/product_0809/FRPBRYMAT0001_DETAIL_00005.jpg?type=thumb&amp;opt=R560x0.q100"></p><p data-v-3d58d422=""><span data-v-3d58d422=""><font color="#666666">Swimming will be even more exhilarating with the floating mat tube and beach ball!
			</font></span></p><p data-v-3d58d422=""><img alt="Floating Mat Surfing Tube-Ryan" data-v-3d58d422="" src="http://t1.kakaocdn.net/kakaofriends_global/product_0809/FRPBRYMAT0001_DETAIL_00006.jpg?type=thumb&amp;opt=R560x0.q100"></p><p data-v-3d58d422=""><img alt="Floating Mat Surfing Tube-Ryan" data-v-3d58d422="" src="http://t1.kakaocdn.net/kakaofriends_global/product_0809/FRPBRYMAT0001_DETAIL_00007.jpg?type=thumb&amp;opt=R560x0.q100"></p><p data-v-3d58d422=""><img alt="Floating Mat Surfing Tube-Ryan" data-v-3d58d422="" src="http://t1.kakaocdn.net/kakaofriends_global/product_0809/FRPBRYMAT0001_DETAIL_00009.jpg?type=thumb&amp;opt=R560x0.q100"></p><p data-v-3d58d422=""><img alt="Floating Mat Surfing Tube-Ryan" data-v-3d58d422="" src="http://t1.kakaocdn.net/kakaofriends_global/product_0809/FRPBRYMAT0001_DETAIL_00010.jpg?type=thumb&amp;opt=R560x0.q100"></p><p data-v-3d58d422=""><img alt="Floating Mat Surfing Tube-Ryan" data-v-3d58d422="" src="http://t1.kakaocdn.net/kakaofriends_global/product_0809/FRPBRYMAT0001_DETAIL_00011.jpg?type=thumb&amp;opt=R560x0.q100"></p><p data-v-3d58d422=""><span data-v-3d58d422=""><br><br><dl class="list_info"><dt>Dimensions</dt><dd>83cm x 187cm x 13cm</dd></dl><dl class="list_info"><dt>Weight</dt><dd>1,165g</dd></dl><dl class="list_info"><dt>Material</dt><dd>P.V.C</dd><dd></dd></dl></span></p></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'prod-detail-details',
		data() {
			return {
				visible: true
			}
		},
		methods: {
			showArea: function() {
				var vm = this
				vm.visible = !vm.visible
			}
		}
	}
</script>

<style scoped>
	.detailsArea {padding-bottom: 60px;}
	/* 기존 사이트의 CSS 가져옴 */
	.detailWrap {
		overflow: hidden;
		width: 560px;
		margin: 0 auto;
		padding: 0 30px;
		background: #fff;
	}

	.detailWrap > h3 a {
		display: block;
		margin-bottom: 10px;
		padding: 10px 0;
		border-top: 1px solid #ccc;
		font-weight: 600
	}

	.area_edit p {
	    margin-top: 16px;
	}

	.list_info {
	    margin-top: 10px;
	}

	.list_info dt {
	    color: #666;
	    font-weight: 600;
	    line-height: 20px;
	}

	.list_info dd {
	    color: #666;
	    line-height: 20px;
	}
	/* //기존 사이트의 CSS 가져옴 */


	/* 반응형 */
	@media (max-width: 1000px) {
		.detailWrap {
			width: calc(100% - 60px);
		}

		.detailsArea img {max-width: 100%;}

	}
</style>