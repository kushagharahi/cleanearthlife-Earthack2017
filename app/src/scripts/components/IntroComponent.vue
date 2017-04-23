<template>
	<div class="wrapper">
		<div class="col-one">
		<i class="fa fa-globe" aria-hidden="true" style="font-size: 10em;"></i>
		<h1>Cleanearth.life</h1>
		<p>A little change goes far</p>
		<p>A common misconception is that your individual impact on the environment is negligible. That is false. A single person can make a huge difference with just a few small habit changes. Scroll down to see how you can help save the environment!</p>
		</div>

		<div class="col-two">
		<h2>So far, we have saved:</h2>
		<p>showering <input v-model="showerMinutes" style="width: 20px;" maxlength="2"/> minutes less a day</p>
		<p>driving   <input v-model="milesReduced" style="width: 20px;" maxlength="2"/> miles less a day</p>
		<p>replacing <input v-model="lightReplaced" style="width: 20px;" maxlength="2"/> traditional light bulbs</p>
		<p>using     <input v-model="bottlesReduced" style="width: 20px;" maxlength="2"/> disposable water bottles less a week</p>
		<p>eating 	 <input v-model="mealsReduced" style="width: 20px;" maxlength="2"/> less meals with meat a week</p>
		</div>
	</div>
</template>

<script>
	export default {
		data: function () {
			return {
				meals: 1,
				cowWeight: 1000,
				cowLife: 540,
				cowMethane: 250,
				poundPerMeal: .5
			}
		},
		methods: {
			totalWater: function () {
				return
			},
			totalMethane: function () {
				return
			}

		}
	}
</script>

<style lang="sass">
	.wrapper {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 10px;
		grid-auto-rows: minmax(100px, auto);
	}
	.col-one {
		grid-column: 1;
		grid-row: 1;
	}
	.col-two {
		grid-column: 2;
		grid-row: 1;
	}
</style>
