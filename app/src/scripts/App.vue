<template>
	<div>
		<intro></intro>
		<water></water>
		<pollution></pollution>
	</div>
</template>

<script>
	import Login from './components/Login.vue'
	import Intro from './components/Intro.vue'
	import Water from './components/Water.vue'
	import Pollution from './components/Pollution.vue'


	export default {
		  name: 'app',
		  components: {
	    Login,
	    Intro
		  }
	}
</script>

<style lang="sass">
</style>
