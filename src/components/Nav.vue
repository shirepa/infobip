<template>
  <div>
  <nav class="topnav">
    <router-link class="spacing" to="/info/table">Table</router-link>
    <router-link class="spacing" to="/info/rounds">Rounds</router-link>
  </nav>
  </div>
</template>

<script>
    export default {
        name: "Nav"
    }
</script>

<style scoped>
  .spacing {
    Margin-right: 10px;
  }

  .topnav {
    background-color: #333;
    overflow: hidden;
  }

  /* Style the links inside the navigation bar */
  .topnav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  /* Change the color of links on hover */
  .topnav a:hover {
    background-color: #ddd;
    color: black;
  }

  /* Add a color to the active/current link */
  .topnav a.active {
    background-color: #4CAF50;
    color: white;
  }

</style>
