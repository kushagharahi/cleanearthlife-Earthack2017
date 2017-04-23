<template>
	<div>
		<i class="fa fa-lightbulb-o" aria-hidden="true" style="font-size: 10em;"></i>
		<h2>Energy Efficient Lighting</h2>
		<p>Replacing traditional lights with energy efficient lighting can save 25%-80% less energy and can last 3-25 times longer (energy.gov)</p>
		<p>For every <input v-model="traditionalBulb" style="width: 20px;" maxlength="2"/> traditional light bulbs (60w Incandecent) replaced with energy efficient bulbs (10w LED), you save nearly <b>${{traditionalBulb * 100}} a year!!</b></p>

	</div>
</template>

<script>

export default {
	data: function () {
		return {
			traditionalBulb: 2
		}
	}
}
</script>

<style lang="sass">
</style>
