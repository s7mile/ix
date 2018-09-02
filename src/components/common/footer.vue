<template>
	<!-- [S]footer -->
	<footer>
		<div class="linkWrap">
			<h2>service link</h2>
			<strong>Follow Us</strong>
			<ul class="followList">
				<li>
					<a href="https://www.instagram.com/kakaofriends_usa" target="_blank" class="ico_instagram">
						kakao friends USA Instagram
					</a>
				</li>
				<li>
					<a href="https://www.facebook.com/kakaofriends_usa" target="_blank" class="ico_facebook">
						kakao friends USA Facebook
					</a>
				</li>
			</ul>
			<ul class="navList">
				<li><a class="link_service link_signin">Sign In</a></li>
				<li><a href="/help/faq" class="link_service link_faq">FAQ
			</a></li>
			</ul>
		</div>

		<div class="serviceWrap">
			<h2>service information</h2>
			<ul>
				<li><a href="/help/privacy-policy" class="link_service link_policy">Privacy Policy</a></li>
				<li><a href="/help/conditions-of-use" class="link_service">Conditions of Use</a></li>
			</ul>
		</div>

		<div class="copyrightWrap">
			<strong class="icoFriends">KAKAO FRIENDS</strong>
			<address>Copyright © Kakao IX Corp.</address>
		</div>
	</footer>
	<!-- [E]footer -->
</template>

<script>
export default {
	name: 'app-footer',
}
</script>

<style scoped>
	footer * {font-size: 12px;}
	h2 {
		position: absolute;
		top: 0;
		left: 0;
		text-indent: -999em;
		font-size: 1px;
	}
	footer {
		padding: 0 30px;
	}

	.linkWrap {
		height: 40px;
		padding: 10px 0 0 10px;
		border-top: 2px solid #333;
		border-bottom: 1px solid #eee;
	}

	.linkWrap > strong {
		display: inline-block;
		padding-top: 7px;
	}
	.followList {display: inline}
	.followList li {
		display: inline
	}
	.followList li a {
		display: inline-block;
		text-indent: -999em;
		font-size: 1px;
		background: #000;
	}

	.navList {
		float: right;
	}
	.navList li {
		display: inline-block;
	}
	.navList li:first-child {
		padding-right: 10px;
		border-right: 1px solid #eee;
	}
	.navList a {
		display: inline-block;
		height: 30px;
		line-height: 30px;
		padding: 0 30px;
		font-size: 12px;
		font-weight: 600
	}

	.serviceWrap {
		height: 34px;
		padding: 16px 0 0 10px;
		overflow: hidden;
	}
	.serviceWrap:after {
		content: "";
		display: block;
		clear: both;
	}

	.serviceWrap li {
		float: left;
	}
	.serviceWrap li:first-child:after {
		content: "\00B7";
		width: 20px;
		margin: 0 10px;
	}

	.copyrightWrap {
		border-top: 2px solid #333;
		overflow: hidden;
		padding: 15px 0 20px;
	}

	.icoFriends {
		float: right;
		display: inline-block;
		width: 100px;
		height: 18px;
		text-indent: -999em;
		font-size: 1px;
		background-position: 0 -100px;
	}

	address {font-style: normal;}

	@media (max-width: 1000px) {
		.icoFriends {
			background-position: 0 -75px;
			height: 14px;
		}
	}
</style>
