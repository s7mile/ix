<template>
	<!-- [S]header -->
	<header>
		<!-- 사이트 제목 -->
		<h1>KAKAO FRIENDS</h1>
		<nav>
			<ul>
				<li><a href="/" title="home">HOME</a></li>
				<li class="myList">
					<a href="/collection" class="icoApeach" title="my list">My List</a>
				</li>
				<li><a href="javascript:;" @click="showSignIn" title="Sign in to your account">ACCOUNT</a></li>
			</ul>
		</nav>

		<signin v-if="visibleDetail"></signin>
	</header>
	<!-- [E]header -->
</template>

<script>
	import signin from '../views/signin.vue'
	export default {
		name: 'app-header',
		components: {signin},
		data() {
			return {
				visibleDetail: false
			}
		},
		created() {
			var vm = this
			vm.$EventBus.$on('visibleDetail', function(val) {
				//visibleDetail 이벤트버스가 오면(닫기 버튼 눌렀을 경우) signin컴포넌트 숨겨주기
			    vm.visibleDetail = false
			});
		},
		methods: {
			showSignIn: function() { //signin 컴포넌트 보여주기
				this.visibleDetail = true
				document.body.className = 'scrollOff'
			}
		}
	}
</script>

<style scoped>
h1 {
	position: absolute;
	text-indent: -999em;
	font-size: 1px;
}

header {
	z-index: 999;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 62px;
	padding-top: 18px;
	background: rgba(255, 255, 255, 0.95);
	border-bottom: 1px solid rgb(204, 204, 204);
}

header li:first-child {
	float: left;
	width: 30%;
}
header li.myList {
	float: left;
	width: 40%;
}
header li:last-child {
	float: right;
	width: 30%;
	text-align: right;
}

header li a {
	display: inline-block;
	padding: 13px 30px;
	font-size: 14px;
	color: #767676;
}
li.myList > a {
	display: block;
	width: 40px;
	height: 40px;
	padding: 0;
	margin: 2px auto;
	text-indent: -999em;
	font-size: 1px;
}
</style>
