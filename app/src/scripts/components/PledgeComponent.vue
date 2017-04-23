<template>
	<div>
		<i class="fa fa-handshake-o" aria-hidden="true" style="font-size: 10em;"></i>
		<span v-if="!pledgeMade">
		<h1>Make the Pledge!</h1>
		<p>I will commit to:</p>
		<p>showering <input v-model="showerMinutes" style="width: 30px;" maxlength="2" :disabled="pledgeMade"/> minutes less a day</p>
		<p>driving   <input v-model="milesReduced" style="width: 30px;" maxlength="2" :disabled="pledgeMade"/> miles less a day</p>
		<p>replacing <input v-model="lightReplace" style="width: 30px;" maxlength="2" :disabled="pledgeMade"/> traditional light bulbs</p>
		<p>using     <input v-model="bottlesReduced" style="width: 30px;" maxlength="2":disabled="pledgeMade"/> disposable water bottles less a week</p>
		<p>eating 	 <input v-model="meatReduced" style="width: 30px;" maxlength="2":disabled="pledgeMade"/> less meals with meat a week</p>
		<input type='button' v-on:click='postData()' value='Make the Pledge!' :disabled="pledgeMade">
		</span>
		<span v-if="pledgeMade">
			<h2>Thanks for making the pledge!! You and {{fbData.usersPledged}} others have committed to:</h2>
			<p>Using {{(fbData.showerMinutes * 2.1).toFixed(1)}} gallons when showering per day!</p>
			<p>Reducing car pollution by {{(fbData.milesReduced/25*19.5).toFixed(1)}} pounds!</p>
			<p>Saving ${{fbData.lightReplace * 100}} a year on energy!</p>
			<p>Using {{fbData.bottlesReduced}} less disposible plastic bottles per week!</p>
			<p>Reducing methane emissions by {{(540 * 250 * (.5/1000) * fbData.meatReduced).toFixed(1)}} liters a day!</p>
		</span>
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
			meatReduced: 2,
			pledgeMade: false,
			fbData: {}
		}
	},
	created: function () {
	},
	methods: {
		postData: function (){
			var vm = this;
			firebase.database().ref('Pledge/').transaction(function (data){
					vm.pledgeMade = true
					data.showerMinutes += vm.showerMinutes
					data.milesReduced += vm.milesReduced
					data.lightReplace += vm.lightReplace
					data.bottlesReduced += vm.bottlesReduced
					data.meatReduced += vm.meatReduced
					data.usersPledged += 1
					vm.fbData = data;
					return data
			});
		}
	}
}
</script>

<style lang="sass">
</style>
