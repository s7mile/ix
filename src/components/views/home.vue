<template>
	<div id="homeWrap">
		<ul>
			<li v-for="result in results">
				<div class="imgSlide">
					<ul>
						<li v-for="img in result.imgs">
							<img :src="img" :alt="result.title">
						</li>
					</ul>
				</div>

				<p class="desc">{{ result.desc }}</p>
				<p class="prodInfo">
					<strong>{{ result.title }}</strong>
					<span class="price">${{ result.price }}</span>
				</p>
				<p class="prodDetail">
					<span class="added">{{ result.added }} ADDED</span>
					<a href="javascript:;" class="comments">{{ result.comments }} COMMENTS</a>
				</p>

				<button class="addMyList">
					<i class="icoFriends"></i>
					My list
				</button>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		data () {
			return {
				results: [
					{
						imgs: [
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00001.jpg?type=thumb&opt=R340x340.q100',
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00002.jpg?type=thumb&opt=R340x340.q100'
						],
						desc: 'Glide across the water on this pool float in Ryan print we love💜 In these lazy hazy crazy days of summer, all you need is a good does of vitamin sea!☀️🏝🌈 #poolfloat #Ryantube #floatingtube #beachitem',
						title: 'Floating Mat Surfing Tube-Ryan',
						price: '27.02',
						added: '2016',
						comments: '5'
					},
					{
						imgs: [
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00001.jpg?type=thumb&opt=R340x340.q100',
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00002.jpg?type=thumb&opt=R340x340.q100'
						],
						desc: 'Glide across the water on this pool float in Ryan print we love💜 In these lazy hazy crazy days of summer, all you need is a good does of vitamin sea!☀️🏝🌈 #poolfloat #Ryantube #floatingtube #beachitem',
						title: 'Floating Mat Surfing Tube-Ryan',
						price: '27.02',
						added: '2016',
						comments: '5'
					},
					{
						imgs: [
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00001.jpg?type=thumb&opt=R340x340.q100',
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00002.jpg?type=thumb&opt=R340x340.q100'
						],
						desc: 'Glide across the water on this pool float in Ryan print we love💜 In these lazy hazy crazy days of summer, all you need is a good does of vitamin sea!☀️🏝🌈 #poolfloat #Ryantube #floatingtube #beachitem',
						title: 'Floating Mat Surfing Tube-Ryan',
						price: '27.02',
						added: '2016',
						comments: '5'
					},
					{
						imgs: [
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00001.jpg?type=thumb&opt=R340x340.q100',
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00002.jpg?type=thumb&opt=R340x340.q100'
						],
						desc: 'Glide across the water on this pool float in Ryan print we love💜 In these lazy hazy crazy days of summer, all you need is a good does of vitamin sea!☀️🏝🌈 #poolfloat #Ryantube #floatingtube #beachitem',
						title: 'Floating Mat Surfing Tube-Ryan',
						price: '27.02',
						added: '2016',
						comments: '5'
					},
					{
						imgs: [
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00001.jpg?type=thumb&opt=R340x340.q100',
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00002.jpg?type=thumb&opt=R340x340.q100'
						],
						desc: 'Glide across the water on this pool float in Ryan print we love💜 In these lazy hazy crazy days of summer, all you need is a good does of vitamin sea!☀️🏝🌈 #poolfloat #Ryantube #floatingtube #beachitem',
						title: 'Floating Mat Surfing Tube-Ryan',
						price: '27.02',
						added: '2016',
						comments: '5'
					},
					{
						imgs: [
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00001.jpg?type=thumb&opt=R340x340.q100',
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00002.jpg?type=thumb&opt=R340x340.q100'
						],
						desc: 'Glide across the water on this pool float in Ryan print we love💜 In these lazy hazy crazy days of summer, all you need is a good does of vitamin sea!☀️🏝🌈 #poolfloat #Ryantube #floatingtube #beachitem',
						title: 'Floating Mat Surfing Tube-Ryan',
						price: '27.02',
						added: '2016',
						comments: '5'
					},
					{
						imgs: [
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00001.jpg?type=thumb&opt=R340x340.q100',
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00002.jpg?type=thumb&opt=R340x340.q100'
						],
						desc: 'Glide across the water on this pool float in Ryan print we love💜 In these lazy hazy crazy days of summer, all you need is a good does of vitamin sea!☀️🏝🌈 #poolfloat #Ryantube #floatingtube #beachitem',
						title: 'Floating Mat Surfing Tube-Ryan',
						price: '27.02',
						added: '2016',
						comments: '5'
					},
					{
						imgs: [
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00001.jpg?type=thumb&opt=R340x340.q100',
							'http://t1.kakaocdn.net/kakaofriends_global/product_0804/FRPBRYMAT0001_MODEL_C_00002.jpg?type=thumb&opt=R340x340.q100'
						],
						desc: 'Glide across the water on this pool float in Ryan print we love💜 In these lazy hazy crazy days of summer, all you need is a good does of vitamin sea!☀️🏝🌈 #poolfloat #Ryantube #floatingtube #beachitem',
						title: 'Floating Mat Surfing Tube-Ryan',
						price: '27.02',
						added: '2016',
						comments: '5'
					}
				]
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
	.imgSlide {
		overflow: hidden;
		width: 340px;
		height: 340px;
		border-radius: 5px;
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
</style>