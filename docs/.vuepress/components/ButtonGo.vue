<template>
    <div class="grid-item">
        <button type="button" v-on:click="gotosite()" class="action-button">Go to website<br /> 🎺</button>
    </div>
</template>
 
<script>
   export default {
     name: "GoLive Button",
     data() {
         return {
             producturl: "https://www.rouquin.me/"
         }
     },
     methods : {
         gotosite(){
             window.open(this.producturl);
         }
     }
 }
 </script>