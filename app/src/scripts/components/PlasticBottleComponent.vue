<template>
<div>
<i class="fa fa-tint" aria-hidden="true" style="font-size: 10em;"></i>
		<h2>Reusable Water Bottles!</h2>
		<p>Roughly only 20% of plastic bottles are recycled in the US.</p>
        <p>For <input v-model="numRefills" style="width: 20px;" maxlength="2"/> refills of a 32oz standard water bottle, you would be saving <b>{{Math.ceil(numRefills * 2 * .8)}} plastic bottles from the landfill.</b></p>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            numRefills: 6
        }
    }
}
</script>

<style lang="sass">
</style>