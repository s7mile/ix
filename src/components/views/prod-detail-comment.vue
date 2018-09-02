<template>
	<!-- 상품 상세정보 -->
	<div class="commentWrap">
		<h3>
			<a href="javascript:;" @click="showArea">COMMENTS</a>
		</h3>
		<div class="detailsArea" v-show="visible">
			<div class="total">
				<p class="rating">
					<span class="rating" style="width: 70%">3.5</span>
				</p>
				6 Comments
			</div>

			<ul class="userComment">
				<li v-for="result in comments">
					<p class="rating">
						<span class="rating" :style="'width: ' + 20 * result.rating + '%'">3.5</span>
					</p>
					<p class="comment">
						{{ result.comment }}
					</p>
					<p class="commentInfo">
						<span>{{ result.author }}</span>
						<span>{{ result.date }}</span>
					</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'prod-detail-comment',
		data() {
			return {
				visible: false,
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
		padding: 0 30px;
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

	.detailsArea {padding-bottom: 30px;}

	/*토탈 점수*/
	.total {
		padding: 30px 0;
		text-align: center;
		background: #f1f1f1;
	}
	.total .rating {
		width: 100px;
		height: 20px;
		background-size: 185px 210px;
	}
	.total p.rating {
		margin: 0 auto;
		background-position: 0 -170px;
	}
	.total span.rating {
		display: block;
		background-position: 0 -190px;
		text-indent: -999em;
		font-size: 1px;
	}


	/*유저 코멘트*/
	.userComment li {
		padding: 20px 0;
		border-bottom: 1px solid #ddd;
	}
	.userComment li:last-child {border: 0;}
	.userComment p.comment {margin: 8px 0;}
	.userComment .rating {
		width: 70px;
		height: 14px;
		background-size: 185px 210px;
	}
	.userComment p.rating {
		background-position: -105px -150px;
	}
	.userComment span.rating {
		display: block;
		background-position: -105px -165px;
		text-indent: -999em;
	}
	
	.commentInfo span {
	    display: inline-block;
	    font-size: 12px;
		color: #999;
	}
</style>