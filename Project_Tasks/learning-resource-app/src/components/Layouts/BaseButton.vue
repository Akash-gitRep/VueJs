<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
props:['mode'],
}
</script>


<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #000000;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  margin-left: 20px;
}

button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

.flat {
  background-color: #080808e4;
  border-radius: 20px;
  color:#fff ;
}

.flat:hover,
.flat:active {
  background-color:rgb(193, 10, 10);
  color:rgb(0, 0, 0) ;
  border: none;
}
</style>