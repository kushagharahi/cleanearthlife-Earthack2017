<template>
	<div class="w3-panel w3-blue">
				<h1 class="w3-padding-32">Water</h1>
				<div class="w3-row">
					<div class="w3-col l6">

						Showers per Day: <br> 
						<input v-model="showers" style="width: 100%;" maxlength="2"/><br>
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
</template>
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
 <script src="https://code.highcharts.com/highcharts.js"></script>  
<script>

export default {
  data: function () {
    return {
      showers: 0,
      total: 0
    }
  },
  created: function () {
    this.total = this.showers * 2.1;
  }
  }

		var temp = this.total*2.1;
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
				color : 'blue',
				data : [ temp ]
			}, {
				name : 'Average Use',
				color : 'gray',
				data : [ 80 ]
			} ]
		};
		var chart = $('#gal').highcharts(options);
	</script>