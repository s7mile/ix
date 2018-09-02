<template>
	<!-- 상품 상세정보 -->
	<div class="commentWrap">
		<h3>
			<a href="javascript:;">ADD A COMMENTS</a>
		</h3>
		<div class="detailsArea" v-show="visible">
			<span>Rate this product</span>
			<!-- tobe : 별점 매기기 -->
			<p class="rating">
				<span class="rating" style="width: 70%">3.5</span>
			</p>

			<textarea cols="30" rows="10">Just like I imagined!</textarea>

			<input type="submit" value="Submit">
		</div>
	</div>
</template>

<script>
	export default {
		name: 'prod-detail-addcomment',
		data() {
			return {
				visible: true,
				comments: [
					{
						rating: 3.5,
						comment: "Wow! so coooooool:)",
						author: 'alice',
						date: '05.05.2018'
					},
					{
						rating: 3.5,
						comment: "Wow! so coooooool:)",
						author: 'alice',
						date: '05.05.2018'
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
	.commentWrap {
		overflow: hidden;
		width: 560px;
		margin: 0 auto;
		padding: 0 30px 60px;
		background: #fff;
	}

	.commentWrap > h3 a {
		display: block;
		margin-bottom: 10px;
		padding: 10px 0;
		border-top: 1px solid #ccc;
		font-weight: 600
	}
	/* //기존 사이트의 CSS 가져옴 */

	.detailsArea > span {color: #999;}

	/*점수*/
	.rating {
		width: 100px;
		height: 20px;
		background-size: 185px 210px;
	}
	p.rating {
		display: inline-block;
		background-position: 0 -170px;
	}
	span.rating {
		display: block;
		background-position: 0 -190px;
		text-indent: -999em;
		font-size: 1px;
	}

	textarea {
		width: 100%;
		height: 85px;
		margin-top: 20px;
	}

	input[type="submit"] {
		display: block;
		width: 120px;
		height: 34px;
		margin: 20px auto 0;
		line-height: 34px;
		border: 1px solid #000;
		border-radius: 3px;
	}


	/* 반응형 */
	@media (max-width: 1000px) {
		.commentWrap {
			width: calc(100% - 60px);
		}
	}
</style>