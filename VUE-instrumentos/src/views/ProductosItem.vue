<template>
  <div>
    <div
      v-for="instrumento in instrumentosData"
      :key="instrumento.id"
      style="margin-top:15px"
      class="d-flex justify-content-center"
    >
      <instrumento-item :instrumentoParam="instrumento"></instrumento-item>
    </div>
  </div>
</template>

<script>
import InstrumentoComponent from "../components/InstrumentoComponent.vue";

export default {
  name: "ProductosItem",
  components: {
    "instrumento-item": InstrumentoComponent,
  },
  mounted() {
    this.getInstrumentos();
  },
  data() {
    return {
      instrumentosData: [],
    };
  },
  methods: {
    async getInstrumentos() {
      const res = await fetch("http://localhost:8080/instrumentos");
      console.log(res);
      const resJson = await res.json();
      console.log(resJson.instrumentos);
      this.instrumentosData = resJson.instrumentos;
    },
  },
};
</script>
