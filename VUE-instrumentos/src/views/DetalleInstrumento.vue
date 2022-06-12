<template>
  <div class="container-fluid d-flex container border">
    <div class="row">
      <div class="col-lg-8">
        <b-img :src="urlImage" style="max-width:50%, max-height= 50%"></b-img>
        <div>
          <p> Descripción : </p>
          <p>{{ instrumentoEncontrado?.descripcion }}</p>
        </div>
      </div>

      <div class="col-lg-4 mt-3">
        <p>{{ instrumentoEncontrado?.cantidadVendida }} vendidos </p>
        <h2><b>{{ instrumentoEncontrado?.nombre }}</b></h2>
        <h5>Marca : {{ instrumentoEncontrado?.marca }}</h5>
        <h5>Modelo : {{ instrumentoEncontrado?.modelo }}</h5>
        <h2><b> ${{ instrumentoEncontrado?.precio }}</b></h2>
        Costo Envío:
        <span v-if="instrumentoEncontrado.costoEnvio == 'G'" style="color:green; font-weight: bold;">
          Gratis
        </span>
        <span v-else style="color: orange">
          $ {{ instrumentoEncontrado.costoEnvio }}
        </span>
      </div>
      <b-button variant="primary" class="btn btn-primary" href="/productos"> Volver </b-button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "DetalleInstrumento",
  components: {},
  mounted() {
    this.getInstrumentoPorId();
  },
  updated() {
    if (String(this.instrumentoEncontrado.imagen).indexOf("http") >= 0) {
      this.urlImage = this.instrumentoEncontrado.imagen;
    } else {
      this.urlImage = '/assets/images/' + this.instrumentoEncontrado.imagen;
    }

  },
  data() {
    return {
      urlImage: String,
      instrumentoEncontrado: [],
      costoEnvio: String
    };
  },
  methods: {
    async getInstrumentoPorId() {
      const parametroId = this.$route.params.id;
      const res = await fetch(
        "http://localhost:3001/instrumentos/" + parametroId
      );
      const resJson = await res.json();
      this.instrumentoEncontrado = resJson;
      console.log(this.instrumentoEncontrado);
    }
  }
};
</script>