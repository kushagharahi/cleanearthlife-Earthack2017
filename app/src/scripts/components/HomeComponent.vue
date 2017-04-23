<template>

	<div id='content'>
        <div class='fullscreen' id='intro' style='background-color:#00e676'>
            <div id='component'>
                <intro-component></intro-component>

            </div>
                            <div class="bottom_aligner">
                 <a href="#" v-on:click='scroll("water")'><i class="fa fa-angle-down" style="font-size:7em"></i></a>
                 </div>
        </div>
        <div class='fullscreen' id='water' style='background-color:#00b0ff'>
            <div id='component'>
			    <water-component></water-component>
            </div>
            <div class="bottom_aligner">
                 <a href="#" v-on:click='scroll("pollution")'><i class="fa fa-angle-down" style="font-size:7em"></i></a>
                 </div>
        </div>
        <div class='fullscreen' id='pollution' style='background-color:#bdbdbd'>
            <div id='component'>
			    <pollution-component></pollution-component>
            </div>
            <div class="bottom_aligner">
                 <a href="#" v-on:click='scroll("lights")'><i class="fa fa-angle-down" style="font-size:7em"></i></a>
                 </div>
        </div>
        <div class='fullscreen' id='lights' style='background-color:#ffea00'>
            <div id='component'>
			    <lights-component></lights-component>
            </div>
            <div class="bottom_aligner">
                 <a href="#" v-on:click='scroll("conclusion")'><i class="fa fa-angle-down" style="font-size:7em"></i></a>
                 </div>
        </div>
        <div class='fullscreen' id='conclusion' style='background-color:#651fff'>
            <div id='component'>
			    <conclusion-component></conclusion-component>
            </div>
            <div class="bottom_aligner">
                 <a href="#" v-on:click='scroll("intro")'><i class="fa fa-angle-down" style="font-size:7em"></i></a>
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
import ConclusionComponent from './ConclusionComponent.vue'
import LightsComponent from './LightsComponent.vue'

export default {
  components: { NavComponent, HomeComponent, LoginComponent, IntroComponent, PollutionComponent, WaterComponent, ConclusionComponent, LightsComponent },
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
    display: flex;
      justify-content: center;

      align-items: center;

}

.bottom_aligner {
  display: inline-block;
align-self: flex-end;
margin-top: auto;
}

#component {
    margin: 0 auto;
    max-width: 800px;
    padding-top: 60px;
    padding-left: 20px;
    padding-right: 20px;
}

</style>
