<template>
  <div>
    <div class="navMobileBG">
      <router-link to="/"
                   class="navMobileTitle">{{mobilePageTitle}}</router-link>
    </div>
    <input class="navMenu"
           v-model="mobileMenu"
           type="checkbox" />
    <label for="navMenu"></label>
    <ul class="nav">
      <li>
        <router-link class="navTitle"
                     to="/">CleanEarth.Life</router-link>
        </li>
        <li>
        <router-link active-class="active" class="navLink"
        to="/" exact>Home</router-link>
                    
      </li>
        <li>
        <router-link active-class="active" class="navLink"
        to="/profile">Profile</router-link>
                    
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      mobilePageTitle: '',
      mobileMenu: false
    }
  },
  watch: {
    '$route' (to, from) {
      this.mobilePageTitle = to.meta.title
      if (this.mobileMenu) {
        this.mobileMenu = !this.mobileMenu
      }
    }
  }
}
</script>

<style lang="sass">
.nav, .navMobileBG {
background-color: black;
position: fixed;
top: 0;
width: 100%;    
overflow: hidden;
margin: 0;
padding: 0; 
}

.nav {
list-style: none;
}

.navMobileBG {
height: 40px;
margin-bottom:0px;
text-align: center;
display: none;
}

.navTitle, .navLink {
float: left;
display: block;
color: white;
text-decoration:none;
}

.navTitle {
padding: 5px;
font-size: 20px;
}

.navMobileTitle {
margin: 5px;
font-size: 20px;
text-decoration:none;
display: none;
color: white;
}

.navLink {
padding: 10px;
}

.navLink:hover {
background-color: #808080;
}

.navLink.active {
background-color: #808080;
}

.navMenu[type="checkbox"], .navMenu[type=checkbox] + label  {
height: 20px;
width: 30px;
margin: 10px;
position: fixed;
top: 0;
left: 0;
}
.navMenu[type=checkbox] + label {
z-index: 0;
}
.navMenu[type="checkbox"] {
z-index: 1;
opacity: 0;
}

.navMenu[type=checkbox] + label {
background: url('~img/menu.svg');
background-size:100%;
display: none;
}
.navMenu[type=checkbox]:checked + label {
background: url('~img/close.svg');
background-size:100%;
}

.navMenu[type=checkbox]:checked + label + .nav{
display: block;
}

@media screen and (max-width : 600px) {
  .navMobileBG, .navMobileTitle, .navMenu[type=checkbox] + label {
  display: inline-block;
  }

  .nav, .navTitle {
  display: none;
  }

  .nav {
  border-bottom: 1px solid rgba(0,0,0,0.15);
  box-shadow: 0 8px 10px rgba(0,0,0,0.15);
  top: 40px;
  }

  .navLink{
  float: none;
  }
}

</style>
