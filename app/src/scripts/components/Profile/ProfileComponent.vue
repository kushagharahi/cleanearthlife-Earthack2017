<template>
	<div>
		<h1>
			Welcome
			<%=session.getAttribute("user")%></h1>
		<form action="/logout" method="post">
			<button>Log Out</button>
		</form>

		<form action="/calculate" method="post">

			<div class="w3-panel w3-yellow">
				<h1 class="">Energy</h1>
				<br>
				<h3>Check all of the following that apply</h3>
				<br>
				<input type="checkbox" id="AC" name="electric"
					   value="AC"> AC
				<input type="checkbox" id="LM" name="electric"
					   value="LM"> Laundry Machine
				<input type="checkbox" id="WH" name="electric"
					   value="WH"> Water Heater
				<input type="checkbox" id="R" name="electric"
					   value="R"> Refrigerator
				<input type="checkbox" id="TV" name="electric"
					   value="TV"> TV
				<input type="checkbox" id="L" name="electric"
					   value="L"> Laptop
				<input type="checkbox" id="CP" name="electric"
					   value="CP"> Cell Phone
				<input type="checkbox" id="C" name="electric"
					   value="C"> Console
				<input type="checkbox" id="T" name="electric"
					   value="T"> Toaster
				<input type="checkbox" id="M" name="electric"
					   value="M"> Microwave
				<input type="checkbox" id="CM" name="electric"
					   value="CM"> Coffee Maker
				<input type="checkbox" id="D" name="electric"
					   value="D"> Desktop
				<input type="checkbox" id="B" name="electric"
					   value="B"> Incandescent Bulbs

			</div>
			<div class="w3-panel w3-green">
				<h1 class="w3-padding-32">Pollution</h1>
				Highway MPG:<br>
				<input type="number" name="hmpg">
				<br>
				City MPG:<br>
				<input type="number" name="cmpg">
				<br>
				Daily Commute:<br>
				<input type="number" name="miles">
			</div>
			<input type="submit" value="Get your personalized results">
			<input type="checkbox" id="LIC" name="electric"
				   value="LIC"> Live in a city
			<hr>
		</form>
	</div>
</template>

<script>
</script>

<style lang="sass">
</style>
