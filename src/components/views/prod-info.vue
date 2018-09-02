<template>
	<!-- 상품 정보 -->
	<div class="prodWrap">
		<img src="http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MAIN_C_00001.jpg?type=thumb&amp;opt=R620x620.q100" alt="Floating Mat Surfing Tube-Ryan">

		<h2>Floating Mat Surfing Tube-Ryan</h2>
		<p class="price">$27.02</p>
		<p class="desc">
			Glide across the water on this pool float in Ryan print we love💜 In these lazy hazy crazy days of summer, all you need is a good does of vitamin sea!☀️🏝🌈 #poolfloat #Ryantube #floatingtube #beachitem
		</p>

		<ul class="button">
			<li>
				<button class="addMyList" :class="addActive()" @click="addMyList">
					<i class="icoFriends"></i>
					My list
				</button>
			</li>
			<li>
				<button class="buyProd" @click="location.href='/collection'">
					<i class="icoFriends"></i>
					Buy
				</button>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'prod-info',
		data() {
			return {
				myList: false
			}
		},
		methods: {
			addMyList: function() { //myList버튼 클릭 시 버튼 토글
				//tobe: 상품이 장바구니에 들어가도록 api 연결
				var vm = this;

				vm.myList = !vm.myList
			},

			addActive: function() { //active class를 add하기 위함
				var vm = this

				if(vm.myList) return 'active'
			},
		}
	}
</script>

<style scoped>
	.prodWrap {
		overflow: hidden;
		max-width: 620px;
		margin: 0 auto;
		padding-bottom: 42px;
		background: #fff;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		text-align: center;
	}

	.prodWrap > img {width: 100%;}

	.prodWrap > h2 {
		display: block;
		margin-top: 27px;
		margin-bottom: 10px;
		font-size: 24px;
		font-weight: 600;
	}
	.prodWrap .desc {
		width: 560px;
		margin: 10px auto 20px;
		color: #666;
	}

	ul.button li {
		display: inline-block;
		width: 275px;
		height: 40px;
	}
	ul.button button {
		display: block;
		width: 100%;
		height: 40px;
		border-radius: 3px;
		font-weight: 600;
		line-height: 40px;
		border: 1px solid #707070;
	}

	ul.button button i {
		display: inline-block;
		margin: 13px 4px 0 0;
   		vertical-align: top;
	}

	button.buyProd i {
		width: 14px;
		height: 16px;
		background-position: -160px -130px;
	}

	button.addMyList i {
		width: 16px;
		height: 15px;
		background-position: -120px -130px;
	}
	button.addMyList.active {
		background: #fd6b94;
		border-color: #fd6b94;
		color: #fff;
	}
	button.addMyList.active i {
		background-position: -140px -130px;
	}


	/* 반응형 */
	@media (max-width: 1000px) {
		.prodWrap {
			border-top-left-radius: 0;
			border-top-right-radius: 0;
		}
		.prodWrap .desc {width: 100%;}

		ul.button li {
			margin-bottom: 5px;
			width: 90%;
		}
	}
</style>