<template>
	<!-- 상품 상세정보 -->
	<div class="shippingWrap">
		<h3>
			<a href="javascript:;" @click="showArea">SHIPPING</a>
		</h3>
		<div class="detailsArea" v-show="visible">
			<div class="area_info">
				<dl class="list_info">
					<dt>Shipping time</dt>
					<dd>Arrives in 5-7 business days</dd>
				</dl>
				<dl class="list_info">
					<dt>Customs</dt>
					<dd>Customs fees, taxes and other expenses are not included in the price of delivery. Payment of these additional expenses is the burden of the buyer upon receiving the package.</dd>
				</dl>
				<dl class="list_info">
					<dt>Inquiries</dt>
					<dd>The global delivery of the entire order may be delayed if even several of the items have not arrived at the delivery location. Please direct all questions about global shipments to the Contact Us service or email support.usa@kakaofriends.com</dd>
				</dl>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'prod-detail-shipping',
		data() {
			return {
				visible: false
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
	.shippingWrap {
		overflow: hidden;
		width: 560px;
		margin: 0 auto;
		padding: 0 30px 30px;
		background: #fff;
	}

	.shippingWrap > h3 a {
		display: block;
		margin-bottom: 10px;
		padding: 10px 0;
		border-top: 1px solid #ccc;
		font-weight: 600
	}

	dl {
	    margin-top: 10px;
	}

	dl dt {
	    color: #666;
	    font-weight: 600;
	    line-height: 20px;
	}

	dl dd {
	    color: #666;
	    line-height: 20px;
	}

	/* //기존 사이트의 CSS 가져옴 */
</style>