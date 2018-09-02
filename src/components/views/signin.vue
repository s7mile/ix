<template>
	<div id="signin" ref="signin">
		<div class="signinWrap">
			<h3>Sign in to your account</h3>
			<form>
				<fieldset>
					<legend>sign in</legend>
					<span class="errorMsg" style="display: none;">
					</span>
					<div class="area_login">
						<label for="email">Email</label>
						<input type="email" id="email" name="email" placeholder="Email" required="true">
					</div>
					<div class="area_login">
						<label for="password">Password</label>
						<input type="password" id="password" name="password" placeholder="Password" required="true">
					</div>
					<div class="area_login">
						<div class="chk_g chk_md">
							<input id="status" type="checkbox" name="status" value="" class="inp_g">
							<label for="status" class="lab_g">Remember me</label>
						</div>
						<a class="link_pwd">Forgot password?</a>
					</div>
					<button type="submit" class="btn_g btn_black">SIGN IN</button>
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
		name: 'signin'
	}
</script>

<style scoped>
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

h3 {
    margin: 40px 0 60px;
	font-size: 22px;
    font-weight: 600;
    text-align: center;
}


/* 반응형 */
@media (max-width: 1000px) {
	#signin {
		padding: 0;
		height: 100%;
	}

	.closeBtn {right: 12px;}
}
</style>