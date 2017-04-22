<template>
	<div id='content'>
        <router-link to='/profile'>Go to Profile</router-link>
        <div class='fullscreen' id='intro' style='background-color:lightblue'>
            <div id='component'>
                <intro-component></intro-component>
                 <a class='button-link' v-on:click='scroll("water")'><i class="fa fa-angle-down"></i> Next</a>
            </div>
        </div>
        <div class='fullscreen' id='water' style='background-color:green'>
            <div id='component'>
			    <water-component></water-component>
                 <a class='button-link' v-on:click='scroll("pollution")'><i class="fa fa-angle-down"></i> Next</a>
            </div>
        </div>
        <div class='fullscreen' id='pollution' style='background-color:yellow'>
            <div id='component'>
			    <pollution-component></pollution-component>
                <a class='button-link' v-on:click='scroll("intro")'><i class="fa fa-angle-up"></i> Back to Top</a>
            </div>
        </div>
	</div>
</template>

<script>
import LoginComponent from './LoginComponent.vue'
import IntroComponent from './IntroComponent.vue'
import NavComponent from './NavComponent.vue'
import HomeComponent from './HomeComponent.vue'
import WaterComponent from './WaterComponent.vue'
import PollutionComponent from './PollutionComponent.vue'

export default {
  name: 'app',
  components: { NavComponent, HomeComponent, LoginComponent, IntroComponent, PollutionComponent, WaterComponent },
  methods: {
    scroll: function (id) {
      this.$SmoothScroll(document.getElementById(id))
    }
  }
}
</script>

<style lang="sass">
.fullscreen {
    width: 100%; 
    height: 100vh;
}

#component {
    margin: 0 auto;
    max-width: 800px;
    padding-top: 60px;
    padding-left: 20px;
    padding-right: 20px;
}

.button-link {
	padding: 10px 15px;
	background: #4479BA;
	color: #FFF;
	-webkit-border-radius: 4px;
	-moz-border-radius: 4px;
	border-radius: 4px;
	border: solid 1px #20538D;
	text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.4);
	-webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 1px 1px rgba(0, 0, 0, 0.2);
	-moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 1px 1px rgba(0, 0, 0, 0.2);
	box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 1px 1px rgba(0, 0, 0, 0.2);
	-webkit-transition-duration: 0.2s;
	-moz-transition-duration: 0.2s;
	transition-duration: 0.2s;
	-webkit-user-select:none;
	-moz-user-select:none;
	-ms-user-select:none;
	user-select:none;    
}
.button-link:hover {
	background: #356094;
	border: solid 1px #2A4E77;
	text-decoration: none;
}
.button-link:active {
	-webkit-box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.6);
	-moz-box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.6);
	box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.6);
	background: #2E5481;
	border: solid 1px #203E5F;
}
</style>
