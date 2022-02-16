<template>
<div id="container">
    <div id="ap">
      <div class="User">     
       Name <input  type="text" name="Name" placeholder="Name">
       Surname <input type="text" name="Surname" placeholder="Surname">
       Phone <input id="phoneNumber" type="number">
       Email <input id= "emailAdress" type="email">
       <input type="submit" value="Submit">
  </div>
</div>
</div>
</template>
<script>
export default {
  name: 'App',
  data(){
    return{

    }
  },
  methods: {
  
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

</style>
