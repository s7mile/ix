<template>
	<!-- 상품 상세정보 -->
	<div class="recommendWrap">
		<h3>
			<a href="javascript:;" @click="showArea">RECOMMEND</a>
		</h3>
		<div class="detailsArea" v-show="visible">
			<ul>
				<li v-for="result in results">
					<p class="imgThumb">
						<img :src="result.img" :alt="result.title">
					</p>
					<strong>{{ result.title }}</strong>
					<p class="price">${{ result.price }}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'prod-detail-recommend',
		data() {
			return {
				visible: true,
				results: [
					{
						img: 'http://t1.kakaocdn.net/kakaofriends_global/product_0804/8809557980696_MODEL_C_00001.jpg?type=thumb&opt=R270x270.q100',
						title: 'Under the Sea Ice Tumbler-Ryan',
						price: '12.83'
					},
					{
						img: 'http://t1.kakaocdn.net/kakaofriends_global/product_0804/8809557980696_MODEL_C_00001.jpg?type=thumb&opt=R270x270.q100',
						title: 'Under the Sea Ice Tumbler-Ryan',
						price: '12.83'
					},
					{
						img: 'http://t1.kakaocdn.net/kakaofriends_global/product_0804/8809557980696_MODEL_C_00001.jpg?type=thumb&opt=R270x270.q100',
						title: 'Under the Sea Ice Tumbler-Ryan',
						price: '12.83'
					}
				]
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
	/* 기존 사이트의 CSS 가져옴 */
	.recommendWrap {
		overflow: hidden;
		width: 560px;
		margin: 0 auto;
		padding: 0 30px 10px;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		background: #fff;
	}

	.recommendWrap > h3 a {
		display: block;
		margin-bottom: 10px;
		padding: 10px 0;
		border-top: 1px solid #ccc;
		font-weight: 600
	}
	/* //기존 사이트의 CSS 가져옴 */
	
	p.imgThumb {
		overflow: hidden;
		width: 270px;
		height: 270px;
		border-radius: 5px;
	}
	.detailsArea strong {
		display: block;
		margin: 10px 0;
		font-weight: normal
	}
	.price {
		color: #fd6b94;
	}
	.detailsArea li {
		display: block;
		float: left;
		margin-bottom: 20px;
	}
	.detailsArea li:nth-child(2n) {
		margin-left: 20px;
	}


	/* 반응형 */
	@media (max-width: 1000px) {
		.recommendWrap {
			width: calc(100% - 60px);
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		.detailsArea li:nth-child(2n) {margin-left: 0;}
		
		p.imgThumb {width: 100%;}
		p.imgThumb img {width: 100%;}

		.detailsArea li {
			float: none;
		}
	}
</style>