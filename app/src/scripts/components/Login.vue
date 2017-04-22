
<template>
	<div class="form">
		<div id="login">
			<h1>Welcome Back!</h1>

			<form action="/login" method="post">

				<div class="field-wrap">
					<label>
						Username<span class="req">*</span>
					</label>
					<input type="text"required autocomplete="off" name="username"/>
				</div>

				<div class="field-wrap">
					<label>
						Password<span class="req">*</span>
					</label>
					<input type="password"required autocomplete="off" name="password"/>
				</div>

				<p class="forgot"><a href="/signup">Need an Account?</a></p>

				<button class="button button-block">Log In</button>
			</form>

		</div>
	</div>
</template>

<script>
</script>

<style lang="sass">
</style>
