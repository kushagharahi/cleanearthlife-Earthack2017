<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
   <script src="https://code.highcharts.com/highcharts.js"></script>  
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
 <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<title>All Results</title>
</head>
<form action="/logout" method="post">
		<input class = "w3-button w3-green"type="submit" style="position: absolute;
top: 10px;
right: 10px;" value="Logout">
	</form>
	<form action="/profile">
		<input class = "w3-button w3-green"type="submit" style="position: absolute;
top: 10px;
left: 10px;" value="Profile">
	</form>
<body bgcolor="#bdbdbd">
<div id="combo" style="width: 550px; height: 400px; margin: 0 auto"></div>
</body>
<script language="JavaScript">
var waterarr = <%=request.getAttribute("waterarr")%>
var kwharr = <%=request.getAttribute("kwharr")%>
var gasarr = <%=request.getAttribute("gasarr")%>

var options = {
    chart: {
        type: 'line'
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
            text: ""
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Water',
        color: 'blue',
        data: waterarr
      },{
        name: 'Electricity',
        color: 'yellow',
        data: kwharr
      },{
        name: 'Gas',
        color: 'black',
        data: gasarr
      }]
};
 var chart = $('#combo').highcharts(options);
</script>
</html>