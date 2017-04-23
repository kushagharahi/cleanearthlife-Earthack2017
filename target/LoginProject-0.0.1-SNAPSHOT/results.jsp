<html>
<head>
<title>Highcharts Tutorial</title>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
   <script src="https://code.highcharts.com/highcharts.js"></script>  
   <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
</head>
<body bgcolor="#00b0ff">
<center>
<h1>Today's Reults for <%=session.getAttribute("user")%></h1>
</center>
<center>
<a href="/time">Click here to see your history!</a>
</center>
<form action="/logout" method="post">
		<input class = "w3-button w3-green"type="submit" style="position: absolute;
top: 10px;
right: 10px;" value="Logout">
	</form>
	<form action="/">
		<input class = "w3-button w3-green"type="submit" style="position: absolute;
top: 10px;
left: 10px;" value="Home">
	</form>
<div id="gal" style="width: 550px; height: 400px; margin: 0 auto"></div>
<br>
<br>
<div id="kwh" style="width: 550px; height: 400px; margin: 0 auto"></div>
<br>
<br>
<div id="gas" style="width: 550px; height: 400px; margin: 0 auto"></div>
<script language="JavaScript">
var temp = <%=request.getAttribute("gal")%>
var color = 'blue';
if(temp>80){
	color = 'red';
}else if(temp<80){
	color = 'green';
}
var options = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Water Usage'
    },
    xAxis: {
        categories: ['']
    },
    yAxis: {
        min: 0,
        title: {
            text: "Gallons (G)"
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Your Use',
        color: color,
        data: [temp]
      },{
        name: 'Average Use',
        color: 'gray',
        data: [80]
      }]
};
 var chart = $('#gal').highcharts(options);
</script>
<script language="JavaScript">
var temp2 = <%=request.getAttribute("kwh")%>
var color1 = 'blue';
if(temp2>30){
	color1 = 'red';
}else if(temp2<30){
	color1 = 'green';
}
var options = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Electricity Usage'
    },
    xAxis: {
        categories: ['']
    },
    yAxis: {
        min: 0,
        title: {
            text: "Electricity (kWH)"
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Your Use',
        color: color1,
        data: [temp2]
      },{
        name: 'Average Use',
        color: 'gray',
        data: [30]
      }]
};
 var chart = $('#kwh').highcharts(options);
</script>
<script language="JavaScript">
var temp3 = <%=request.getAttribute("gas")%>
var color2 = 'blue';
if(temp3>1.8){
	color2 = 'red';
}else if(temp3<1.8){
	color2 = 'green';
}
var options = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Gas Usage'
    },
    xAxis: {
        categories: ['']
    },
    yAxis: {
        min: 0,
        title: {
            text: "Gas (G)"
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Your Use',
        color: color2,
        data: [temp3]
      },{
        name: 'Average Use',
        color: 'gray',
        data: [1.8]
      }]
};
 var chart = $('#gas').highcharts(options);
</script>
</body>
</html>