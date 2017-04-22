<template>
	<div>
		<head>
			<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
			<title>Sign-Up/Login Form</title>
			<link href='https://fonts.googleapis.com/css?family=Titillium+Web:400,300,600' rel='stylesheet' type='text/css'>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
			<link rel="stylesheet" href="style.css">

		</head>
		<body>
			<intro></intro>
			<water></water>
			<polution></polution>
		</body>
	</div>
</template>

<script>
	import Login from './components/Login.vue'
	import Intro from './components/Intro.vue'

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
