<template>
	<div>
	<i class="fa fa-shower" aria-hidden="true" style="font-size: 10em;"></i>
		<h2>Take Shorter Showers</h2>
		<p>In an average home, showers have the third largest water usage, after toilets and washing machines. On average each shower uses <b>17.2 gallons</b> over <b>8 minutes</b>.</p>
		<p>If you showered <input v-model="minutes" style="width: 20px;" maxlength="2"/> minutes less a day, you would save <b>{{waterSaved}} gallons</b> a shower.</p>
	</div>
</template>

<script>

export default {
  data: function () {
    return {
      minutes: 2,
      waterSaved: 0
    }
  },
  created: function () {
    this.waterSaved = this.minutes * 2.1
  },
  watch: {
	  'minutes' (to, from) {
    this.waterSaved = (this.minutes * 2.1).toFixed(1);
	  }
  }
}
</script>

<style lang="sass">
#child {
display: inline-block;
       vertical-align: top;
}
</style>
