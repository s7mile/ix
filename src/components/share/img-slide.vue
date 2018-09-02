<template>
	<div class="imgSlide" @mouseover="showButton = true" @mouseout="showButton = false" @click="showDetail">

		<!-- 이전, 다음 버튼 -->
		<button class="icoFriends prev" v-show="showButton" @click="moveImgCurrentIndex('prev')">이전</button>
		<button class="icoFriends next" v-show="showButton" @click="moveImgCurrentIndex('next')">다음</button>
		
		<ul>
			<!-- 트랜지션을 위해 감싸주기 -->
			<transition name="slide-fade">
			<li v-for="(img, index) in imgs" v-if="currentImgIndex === index" :key="index">
				<img :src="img" :alt="title">
			</li>
			</transition>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'img-slide',
		props: ["imgs", "title"],
		data() {
			return {
				currentImgIndex: 0,
				showButton: false
			}
		},
		methods: {
			movePrev: function() {
				var vm = this;
				if(vm.currentImgIndex == 0) return

				vm.currentImgIndex -= 1
			},
			moveNext: function() {
				var vm = this;
				if(vm.currentImgIndex == (vm.imgs.length - 1)) return

				vm.currentImgIndex += 1
			},
			moveImgCurrentIndex: function(type) {
				var vm = this;

				if(type == "prev"){
					vm.movePrev()
				}else{
					vm.moveNext()
				}
				
			},
			showDetail: function() {
				this.$EventBus.$emit("visibleDetail", true)
			}
		}
	}
</script>

<style scoped>
	ul {position: relative;}
	ul > li {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}
	.imgSlide {
		position: relative;
		overflow: hidden;
		width: 340px;
		height: 340px;
		border-radius: 5px;
	}
	.icoFriends {
		z-index: 99;
		position: absolute;
		display: block;
	    text-indent: -999px;
	    font-size: 1px;
	    width: 32px;
	    height: 32px;
	}
	.icoFriends.prev {
		top: calc(50% - 16px);
		left: 10px;
		background-position: 0px -30px;
	}
	.icoFriends.next {
		top: calc(50% - 16px);
		right: 10px;
		background-position: -40px -30px;
	}

	.slide-fade-enter-active {
		transition: all .3s ease;
	}
	.slide-fade-leave-active {
		transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.slide-fade-enter, .slide-fade-leave-to {
		opacity: 0;
	}

	@media (max-width: 1000px) {
		.imgSlide {
			width: 100%;
		}

		.imgSlide img {width: 100%;}

		.imgSlide > button {display: none}
	}
</style>