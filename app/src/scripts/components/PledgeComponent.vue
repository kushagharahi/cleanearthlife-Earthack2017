<template>
	<div>
		<i class="fa fa-handshake-o" aria-hidden="true" style="font-size: 10em;"></i>
		<h1>Make the Pledge!</h1>
		<p>I will commit to:</p>
		<p>showering <input v-model="showerMinutes" style="width: 20px;" maxlength="2"/> minutes less a day</p>
		<p>driving   <input v-model="milesReduced" style="width: 20px;" maxlength="2"/> miles less a day</p>
		<p>replacing <input v-model="lightReplace" style="width: 20px;" maxlength="2"/> traditional light bulbs</p>
		<p>using     <input v-model="bottlesReduced" style="width: 20px;" maxlength="2"/> disposable water bottles less a week</p>
		<p>eating 	 <input v-model="meatReduced" style="width: 20px;" maxlength="2"/> less meals with meat a week</p>
		<input type='button' v-on:click='postData()' value='Make the Pledge!'>
	</div>
</template>

<script>
export default {
	data: function () {
		return {
			showerMinutes: 2,
			milesReduced: 2,
			lightReplace: 2,
			bottlesReduced: 2,
			meatReduced: 2
		}
	},
	created: function () {
	},
	methods: {
		postData: function (){
			var vm = this;
			firebase.database().ref('Pledge/').transaction(function (data){
					data.showerMinutes += vm.showerMinutes
					data.milesReduced += vm.milesReduced
					data.lightReplace += vm.lightReplace
					data.bottlesReduced += vm.bottlesReduced
					data.meatReduced += vm.meatReduced
					return data
			});
		}
	}
}
</script>

<style lang="sass">
</style>
