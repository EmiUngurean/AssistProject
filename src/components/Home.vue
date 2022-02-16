<template>
<div id="container">
    <div id="ap">
      <div class="menu">
        <img class="logo" src="../assets/logoAssist.png" alt="Logo Assist">
        <div class="home" @click="homePage()">Home</div>
        <div class="about" @click="aboutPage()">About</div>
        <div class="contact" @click="contactPage()">Contact</div>
      </div>  
      <footer>
        <div>Assist Software 2022</div>
        <br>
        <div>Created by: {{myName}}</div>
      </footer>
  </div>
</div>
</template>
<script>
export default {
  name: 'App',
  data(){
    return{
       myName:'Ungurean Emanuel-Bogdan',
    }
  },
  methods: {
    homePage(){
      location.replace("home")
    },
    aboutPage(){
      location.replace("about")
    },
    contactPage(){
      location.replace("contact")
    },

      
    }
}
</script>

<style>
#container {
  height: 100vh;
  width: 230px;
  background-color: #347ab4; 
  color: #fff
  
}
.home, .about, .contact{
  cursor: pointer;
  padding: 20px;
}

.logo{
  width: 200px;
  padding: 20px;
}
footer{
  background-color: #ededed;
  height: 40px;
  width:auto;
  color:#515356
}
</style>
