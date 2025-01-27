<template>
  <div>
    <h1>Food</h1>
    <personal-profile/> <br>
    <div class="food-container">
      <food-item></food-item>
      <food-item2></food-item2>
      <food-item></food-item>
      <food-item2></food-item2>
    </div>
  </div>
</template>

<script> </script>

<style>
.food-container {
  display: flex;
  flex-wrap: wrap; 
  gap: 10px;
  justify-content: flex-start; 
}
</style>
