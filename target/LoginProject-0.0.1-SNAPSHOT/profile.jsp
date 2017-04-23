<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Profile</title>
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
</head>
<body ng-app="myApp">
	</form>
	<center>
		<h1>
			Welcome
			<%=session.getAttribute("user")%></h1>
	</center>
	<center>
		<a href="/time">Click here to see your history!</a>
	</center>
	<form action="/logout" method="post">
		<input class="w3-button w3-green" type="submit"
			style="position: absolute; top: 10px; right: 10px;" value="Logout">
	</form>
	<form action="/">
		<input class="w3-button w3-green" type="submit"
			style="position: absolute; top: 10px; left: 10px;" value="Home">
	</form>

	<center>
		<form action="/calculate" method="post">
			<div class="w3-panel" style="background:#00b0ff;">
				<h1 class="w3-padding-16">Water</h1>
				<div class="w3-row">
					<div class="w3-col l4">
						<h1></h1>
					</div>
					<div class="w3-col l4">
						Showers per Day: <br>
						<div ng-controller="numS">
							<input class="w3-input" type="number" name="nshowered"> <br>
						</div>
						Time spent per shower: <br> <input class="w3-input"
							type="number" name="tshowered"> <br> Times toilet
						flushed: <br> <input class="w3-input" type="number"
							name="tflushed"> <br> Times washer used: <br> <input
							class="w3-input" type="number" name="twasher"> <br>
					</div>
					<div class="w3-col l4"></div>
					<h1></h1>
				</div>

			</div>
			<div class="w3-panel" style="background:#ffea00;">
				<h1 class="">Energy</h1>
				<br>

				<h3>Check all of the following that apply</h3>
				<br> <input class="w3-check" type="checkbox" id="AC"
					name="electric" value="AC"> AC <input class="w3-check"
					type="checkbox" id="LM" name="electric" value="LM"> Laundry
				Machine <input class="w3-check" type="checkbox" id="WH"
					name="electric" value="WH"> Water Heater <input
					class="w3-check" type="checkbox" id="R" name="electric" value="R">
				Refrigerator <input class="w3-check" type="checkbox" id="TV"
					name="electric" value="TV"> TV <input class="w3-check"
					type="checkbox" id="L" name="electric" value="L"> Laptop <input
					class="w3-check" type="checkbox" id="CP" name="electric" value="CP">
				Cell Phone <input class="w3-check" type="checkbox" id="C"
					name="electric" value="C"> Console <input class="w3-check"
					type="checkbox" id="T" name="electric" value="T"> Toaster <input
					class="w3-check" type="checkbox" id="M" name="electric" value="M">
				Microwave <input class="w3-check" type="checkbox" id="CM"
					name="electric" value="CM"> Coffee Maker <input
					class="w3-check" type="checkbox" id="D" name="electric" value="D">
				Desktop <input class="w3-check" type="checkbox" id="B"
					name="electric" value="B"> Incandescent Bulbs <br> <br>
			</div>
			<div class="w3-panel" style="background: #bdbdbd;">
				<h1 class="w3-padding-16">Pollution</h1>
				<div class="w3-row">
					<div class="w3-col l4">
						<h1></h1>
					</div>
					<div class="w3-col l4">
						Highway MPG:<br> <input class="w3-input" type="number"
							name="hmpg"> <br> City MPG:<br> <input
							class="w3-input" type="number" name="cmpg"> <br>
						Daily Commute:<br> <input class="w3-input" type="number"
							name="miles">
					</div>

				</div>
				<div class="w3-col l4">
					<h1></h1>
				</div>
			</div>
			<center>
				<input class="w3-button w3-blue" type="submit"
					value="Get your personalized results"> <br> <input
					class="w3-check" type="checkbox" id="LIC" name="electric"
					value="LIC"> I Live in a city
				<hr>
			</center>

		</form>
	</center>

</body>

</html>