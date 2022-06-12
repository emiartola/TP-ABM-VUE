<template>
  <div>
    <div
      v-for="instrumento in instrumentosData"
      :key="instrumento.id"
      style="margin-top:15px"
      class="d-flex justify-content-center"
    >
      <instrumento-item v-bind:instrumentoParam="instrumento"></instrumento-item>
    </div>
  </div>
</template>

<script>

import InstrumentoItem from "@/components/InstrumentoItem.vue";

export default {
  name: "ProductosItem",
  components: {
    "instrumento-item": InstrumentoItem
  },
  mounted() {
    this.getInstrumentos();
  }, 
  data() {
    return {
      instrumentosData: []
    };
  },
  methods: {
    async getInstrumentos() {
      const res = await fetch(
        "http://localhost:3001/instrumentos"
      );
      const resJson = await res.json();
      console.log(resJson);
      this.instrumentosData = resJson;
    }
  }
};
</script>