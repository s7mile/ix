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
				<li><a href="/" title="Sign in to your account">ACCOUNT</a></li>
			</ul>
		</nav>
	</header>
	<!-- [E]header -->
</template>

<script>
export default {
	name: 'app-header',
}
</script>

<style scoped>
h1 {
	text-indent: -999em;
	font-size: 1px;
}

header {
	z-index: 999;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 75px;
	padding-top: 5px;
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
	text-align: center;
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
	display: inline-block;
	width: 40px;
	height: 40px;
	padding: 0;
	text-indent: -999em;
	font-size: 1px;
}
</style>
