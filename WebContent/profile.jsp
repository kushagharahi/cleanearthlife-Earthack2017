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
<h1>
	Welcome
	<%=session.getAttribute("user")%></h1>
<form action="/logout" method="post">
	<button>Log Out</button>

	<center>
		<form action="/calculate" method="post">
			<div class="w3-panel w3-blue">
				<h1 class="w3-padding-32">Water</h1>
				<div class="w3-row">
					<div class="w3-col l6">

						Showers per Day: <br> 
						<div ng-controller="numS">
						<input class="w3-input" type="number" name="nshowered"> <br>
						</div> 
						Time spent per shower: <br>
						<input class="w3-input" type="number" name="tshowered"> <br>
						Times toilet flushed: <br> 
						<input class="w3-input" type="number" name="tflushed"> <br> 
						Times washer used: <br> 
						<input class="w3-input" type="number" name="twasher"> <br>
					</div>
					<div class="w3-col l6">
						<div id="gal""></div>
							

					</div>

				</div>

			</div>
			<div class="w3-panel w3-yellow">
				<h1 class="">Energy</h1>
				<br>

				<h3>Check all of the following that apply</h3>
				<br> <input type="checkbox" id="AC" name="electric" value="AC">
				AC <input type="checkbox" id="LM" name="electric" value="LM">
				Laundry Machine <input type="checkbox" id="WH" name="electric"
					value="WH"> Water Heater <input type="checkbox" id="R"
					name="electric" value="R"> Refrigerator <input
					type="checkbox" id="TV" name="electric" value="TV"> TV <input
					type="checkbox" id="L" name="electric" value="L"> Laptop <input
					type="checkbox" id="CP" name="electric" value="CP"> Cell
				Phone <input type="checkbox" id="C" name="electric" value="C">
				Console <input type="checkbox" id="T" name="electric" value="T">
				Toaster <input type="checkbox" id="M" name="electric" value="M">
				Microwave <input type="checkbox" id="CM" name="electric" value="CM">
				Coffee Maker <input type="checkbox" id="D" name="electric" value="D">
				Desktop <input type="checkbox" id="B" name="electric" value="B">
				Incandescent Bulbs

			</div>
			<div class="w3-panel w3-green">
				<h1 class="w3-padding-32">Pollution</h1>
				Highway MPG:<br> <input class="w3-input" type="number"
					name="hmpg"> <br> City MPG:<br> <input
					class="w3-input" type="number" name="cmpg"> <br> Daily
				Commute:<br> <input class="w3-input" type="number" name="miles">
			</div>
			<input type="submit" value="Get your personalized results"> <input
				type="checkbox" id="LIC" name="electric" value="LIC"> Live
			in a city
			<hr>
		</form>
	</center>

	</body>

	<script language="JavaScript">
		var temp = $scope.val;
		var options = {
			chart : {
				type : 'column'
			},
			title : {
				text : 'Water Usage'
			},
			xAxis : {
				categories : [ '' ]
			},
			yAxis : {
				min : 0,
				title : {
					text : "Gallons (G)"
				}
			},
			plotOptions : {
				column : {
					pointPadding : 0.2,
					borderWidth : 0
				}
			},
			series : [ {
				name : 'Your Use',
				color : color,
				data : [ temp ]
			}, {
				name : 'Average Use',
				color : 'gray',
				data : [ 80 ]
			} ]
		};
		var chart = $('#gal').highcharts(options);
	</script>
</html>