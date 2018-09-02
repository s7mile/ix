<template>
	<!-- 쇼핑몰 메인홈 (아이템 리스트) -->
	<div id="homeWrap">
		<ul>
			<!-- 결과 데이터 출력 -->
			<li v-for="(result, index) in results">
				<!-- 이미지 슬라이더 -->
				<img-slide :imgs="result.imgs" :title="result.title"></img-slide>

				<a href="javascript:;" class="desc" @click="showDetail">{{ result.desc }}</a>
				<p class="prodInfo">
					<strong>{{ result.title }}</strong>
					<span class="price">${{ result.price }}</span>
				</p>
				<p class="prodDetail">
					<span class="added">{{ result.added }} ADDED</span>
					<a href="javascript:;" class="comments">{{ result.comments }} COMMENTS</a>
				</p>

				<button class="addMyList" :class="addActive(result.myList)" @click="addMyList(index, result.id)">
					<i class="icoFriends"></i>
					My list
				</button>
			</li>
		</ul>

		<prod v-if="visibleDetail"></prod>
	</div>
</template>

<script>
	import imgSlide from '../share/img-slide.vue' //이미지 슬라이드 컴포넌트 불러오기
	import prod from './prod.vue' //상품 상세보기

	export default {
		name: 'home',
		components: {imgSlide, prod},
		data() {
			return { 
				//더미 데이터
				results: [
					{
						id: 1,
						imgs: [
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00001.jpg?type=thumb&opt=R340x340.q100',
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00005.jpg?type=thumb&opt=R340x340.q100',
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00002.jpg?type=thumb&opt=R340x340.q100',
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00005.jpg?type=thumb&opt=R340x340.q100'
						],
						desc: 'Glide across the water on this pool float in Ryan print we love💜 In these lazy hazy crazy days of summer, all you need is a good does of vitamin sea!☀️🏝🌈 #poolfloat #Ryantube #floatingtube #beachitem',
						title: 'Floating Mat Surfing Tube-Ryan',
						price: '27.02',
						added: '2016',
						comments: '5',
						myList: false
					},
					{
						id: 2,
						imgs: [
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00001.jpg?type=thumb&opt=R340x340.q100',
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00005.jpg?type=thumb&opt=R340x340.q100',
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00002.jpg?type=thumb&opt=R340x340.q100',
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00005.jpg?type=thumb&opt=R340x340.q100'
						],
						desc: 'Glide across the water on this pool float in Ryan print we love💜 In these lazy hazy crazy days of summer, all you need is a good does of vitamin sea!☀️🏝🌈 #poolfloat #Ryantube #floatingtube #beachitem',
						title: 'Floating Mat Surfing Tube-Ryan',
						price: '27.02',
						added: '2016',
						comments: '5',
						myList: false
					},
					{
						id: 3,
						imgs: [
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00001.jpg?type=thumb&opt=R340x340.q100',
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00005.jpg?type=thumb&opt=R340x340.q100',
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00002.jpg?type=thumb&opt=R340x340.q100',
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00005.jpg?type=thumb&opt=R340x340.q100'
						],
						desc: 'Glide across the water on this pool float in Ryan print we love💜 In these lazy hazy crazy days of summer, all you need is a good does of vitamin sea!☀️🏝🌈 #poolfloat #Ryantube #floatingtube #beachitem',
						title: 'Floating Mat Surfing Tube-Ryan',
						price: '27.02',
						added: '2016',
						comments: '5',
						myList: false
					},
					{
						id: 4,
						imgs: [
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00001.jpg?type=thumb&opt=R340x340.q100',
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00005.jpg?type=thumb&opt=R340x340.q100',
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00002.jpg?type=thumb&opt=R340x340.q100',
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00005.jpg?type=thumb&opt=R340x340.q100'
						],
						desc: 'Glide across the water on this pool float in Ryan print we love💜 In these lazy hazy crazy days of summer, all you need is a good does of vitamin sea!☀️🏝🌈 #poolfloat #Ryantube #floatingtube #beachitem',
						title: 'Floating Mat Surfing Tube-Ryan',
						price: '27.02',
						added: '2016',
						comments: '5',
						myList: false
					},
					{
						id: 5,
						imgs: [
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00001.jpg?type=thumb&opt=R340x340.q100',
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00005.jpg?type=thumb&opt=R340x340.q100',
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00002.jpg?type=thumb&opt=R340x340.q100',
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00005.jpg?type=thumb&opt=R340x340.q100'
						],
						desc: 'Glide across the water on this pool float in Ryan print we love💜 In these lazy hazy crazy days of summer, all you need is a good does of vitamin sea!☀️🏝🌈 #poolfloat #Ryantube #floatingtube #beachitem',
						title: 'Floating Mat Surfing Tube-Ryan',
						price: '27.02',
						added: '2016',
						comments: '5',
						myList: false
					},
					{
						id: 6,
						imgs: [
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00001.jpg?type=thumb&opt=R340x340.q100',
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00005.jpg?type=thumb&opt=R340x340.q100',
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00002.jpg?type=thumb&opt=R340x340.q100',
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00005.jpg?type=thumb&opt=R340x340.q100'
						],
						desc: 'Glide across the water on this pool float in Ryan print we love💜 In these lazy hazy crazy days of summer, all you need is a good does of vitamin sea!☀️🏝🌈 #poolfloat #Ryantube #floatingtube #beachitem',
						title: 'Floating Mat Surfing Tube-Ryan',
						price: '27.02',
						added: '2016',
						comments: '5',
						myList: false
					},
					{
						id: 7,
						imgs: [
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00001.jpg?type=thumb&opt=R340x340.q100',
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00005.jpg?type=thumb&opt=R340x340.q100',
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00002.jpg?type=thumb&opt=R340x340.q100',
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00005.jpg?type=thumb&opt=R340x340.q100'
						],
						desc: 'Glide across the water on this pool float in Ryan print we love💜 In these lazy hazy crazy days of summer, all you need is a good does of vitamin sea!☀️🏝🌈 #poolfloat #Ryantube #floatingtube #beachitem',
						title: 'Floating Mat Surfing Tube-Ryan',
						price: '27.02',
						added: '2016',
						comments: '5',
						myList: false
					},
					{
						id: 8,
						imgs: [
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00001.jpg?type=thumb&opt=R340x340.q100',
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00005.jpg?type=thumb&opt=R340x340.q100',
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00002.jpg?type=thumb&opt=R340x340.q100',
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00005.jpg?type=thumb&opt=R340x340.q100'
						],
						desc: 'Glide across the water on this pool float in Ryan print we love💜 In these lazy hazy crazy days of summer, all you need is a good does of vitamin sea!☀️🏝🌈 #poolfloat #Ryantube #floatingtube #beachitem',
						title: 'Floating Mat Surfing Tube-Ryan',
						price: '27.02',
						added: '2016',
						comments: '5',
						myList: false
					}
				],
				visibleDetail: false
			}
		},
		created() {
			var vm = this
			vm.$EventBus.$on('visibleDetail', function(val) {
			    vm.visibleDetail = false
			});
		},
		methods: {
			addMyList: function(index, id) { //myList버튼 클릭 시 버튼 토글
				//tobe: 상품이 장바구니에 들어가도록 api 연결
				var vm = this;

				vm.results[index].myList = !vm.results[index].myList
			},

			addActive: function(val) { //active class를 add하기 위함
				if(val) return 'active'
			},

			showDetail: function() {
				this.visibleDetail = true
				document.body.className = 'scrollOff'
			}
		}
	}
</script>

<style scoped>
	#homeWrap > ul {
		text-align: center;
	}
	#homeWrap > ul > li {
		display: inline-block;
		width: 340px;
		height: 540px;
		padding: 0 20px;
		text-align: left;
	}
	.desc {
		display: block;
		overflow: hidden;
		width: 100%;
		height: 60px;
		margin-bottom: 10px;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		text-overflow:ellipsis;
		line-height: 20px;
	}
	.prodInfo {
		color: #fd6b94;
	}
	.prodInfo strong {font-weight: normal;}
	.prodInfo strong:after {
		content: " \00B7"
	}

	.prodDetail * {
		font-size: 12px;
		color: #767676;
	}
	.prodDetail a {
		text-decoration: underline;
	}
	.prodDetail span:after {
		content: " \00B7 "
	}

	button.addMyList i {
		display: inline-block;
		width: 12px;
		height: 11px;
		margin: 8px 4px 0 0;
   		vertical-align: top;
		background-position: -110px -100px;
	}
	button.addMyList.active {
		background: #fd6b94;
		border-color: #fd6b94;
		color: #fff;
	}
	button.addMyList.active i {
		background-position: -130px -100px;
	}
	button.addMyList {
		width: 75px;
		height: 28px;
		padding: 0 5px;
		margin-top: 20px;
		border: 1px solid #000;
		border-radius: 3px;
		line-height: 26px;
		font-size: 12px;
		font-weight: bold;
	}

	@media (max-width: 1000px) {
		#homeWrap > ul > li {
			width: calc(100% - 40px);
		}

		button.addMyList i {background-position: -50px -60px;}
		button.addMyList.active i {background-position: -65px -60px;}
	}
</style>