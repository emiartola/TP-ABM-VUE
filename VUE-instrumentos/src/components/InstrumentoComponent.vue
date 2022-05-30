<template>
  <b-container class="d-flex justify-content-center">
    <b-card no-body class="overflow-hidden sizeImg">
      <b-row no-gutters>
        <b-col md="4">
          <b-link :href="'/detalle/' + instrumentoParam.id"> 
            <b-card-img :src="'assets/images/' + instrumentoParam.imagen" alt="Image" class="rounded-0"></b-card-img>
          </b-link>
        </b-col>
        <b-col md="8">
          <b-card-body>
            <b-card-title>{{ instrumentoParam.instrumento }}</b-card-title>
            <b-card-sub-title class="mb-2 precio">
              {{ instrumentoParam.precio }}
            </b-card-sub-title>
            <b-card-text>
              <span v-if="instrumentoParam.costoEnvio == 'G'" class="gratis">
                <b-card-img src="assets/images/camion.png" style="max-width: 35px;"></b-card-img>
                Envío gratis
              </span>
              <span v-else class="costoEnvio">Costo de envío al interior de Argentina:
                {{ instrumentoParam.costoEnvio }}
              </span>
            </b-card-text>
            <b-card-text>{{ instrumentoParam.cantidadVendida }} Vendidos</b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </b-container>
</template>
<script lang="ts">
export default {
  props: ["instrumentoParam"],
};
</script>
<style scoped>
.gratis {
  color: #00bd4f;
}

.costoEnvio {
  color: #e94d05;
}

.sizeImg {
  min-width: 650px;
  max-width: 650px;
}

.precio {
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: normal;
}
</style>
