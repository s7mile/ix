<template>
	<div id="signin" ref="signin">
		<div class="signinWrap">
			<h3>Sign in to your account</h3>
			<form>
				<fieldset>
					<legend>sign in</legend>
					<span class="errorMsg" style="display: none;">
					</span>
					<div class="loginArea">
						<label for="email">Email</label>
						<input type="email" id="email" name="email" placeholder="Email" required="true">
					</div>
					<div class="loginArea">
						<label for="password">Password</label>
						<input type="password" id="password" name="password" placeholder="Password" required="true">
					</div>
					<div>
						<input id="status" type="checkbox" name="status" value="" class="checkbox">
						<label for="status">Remember me</label>

						<a class="findPwBtn" href="javascript: alert('준비중입니다')">Forgot password?</a>
					</div>
					<input type="submit" value="SIGN IN">
				</fieldset>
			</form>
			<div class="btnWrap">
				<ul>
					<li><button type="button">GUEST CHECKOUT INQUERY</button></li>
					<li><button type="button">CREATE AN ACCOUNT</button></li>
				</ul>
			</div>
		</div>

		<button class="closeBtn icoFriends" @click="closeModal">modal close</button>
	</div>
</template>

<script>
	export default {
		name: 'signin',
		methods: {
			closeModal: function() {
				var container = this.$refs.signin;
				var vm = this

				//home.vue에 있는 visibleDetail 제어하여 컴포넌트 숨기기
				vm.$EventBus.$emit('visibleDetail', false);
				document.body.className = ''; //body의 scrollOff class 없애주기

				//스크롤 초기화
				container.scrollTop = 0;
			}
		}
	}
</script>

<style scoped>
h3 {
    margin: 40px 0 60px;
	font-size: 22px;
    font-weight: 600;
    text-align: center;
}

#signin {
	z-index: 9999;
	overflow: hidden;
	overflow-y: auto;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: calc(100% - 40px);
	padding: 65px 0;
	background: rgba(0, 0, 0, .7);
}

.closeBtn {
	position: fixed;
	top: 12px;
	right: 27px;
	width: 32px;
	height: 32px;
	background-position: -80px -30px;
	text-indent: -999em;
	font-size: 1px;
}

.signinWrap {
	width: 340px;
	height: 540px;
	padding: 30px;
	margin: 0 auto;
	background: #fff;
	border-radius: 8px;
}

fieldset > div {margin-bottom: 10px;}

.findPwBtn {
	float: right;
	color: #767676;
}

.loginArea label {display: none}

input[type="submit"] {
	width: 100%;
	height: 40px;
	line-height: 40px;
	background-color: #000;
	border-radius: 3px;
    color: #fff;
}

.btnWrap {
	margin-top: 50px;
}

.btnWrap li:last-child {
	margin-top: 20px;
	padding-top: 20px;
	border-top: 1px solid #ccc;
}

.btnWrap button {
	width: 100%;
	height: 40px;
	border: 1px solid #000;
	line-height: 40px;
}


/* 반응형 */
@media (max-width: 1000px) {
	#signin {
		padding: 0;
		height: 100%;
	}

	.closeBtn {right: 12px;}

	.signinWrap {
		width: calc(100% - 60px);
		border-radius: 0;
		height: calc(100% - 60px);
	}
}
</style>