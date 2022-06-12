<template>
  <nav>
      <div id="nav">
      <nav-bar></nav-bar>
    </div>
    <router-view />
  </nav>
</template>

<script>

import NavBar from "@/components/NavBar";

export default {
  components: {
    "nav-bar": NavBar
  },
};
</script>
<style>
</style>

