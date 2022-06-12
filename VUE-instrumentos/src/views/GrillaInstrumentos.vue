<template>

    <div>
        Buscar entre precios
        <input type="text" v-model="precioDesde" placeholder="precioDesde">
        <input type="text" v-model="precioHasta" placeholder="precioHasta">
        <!-- <button type="button" @click="getInstrumentosEntrePrecios(precioDesde, precioHasta)" class="btn btn-primary mb-3">Buscar</button>  -->
        <a class="btn btn-primary" @click="getInstrumentosEntrePrecios(precioDesde, precioHasta)"> Buscar </a>
    </div>

    <section className="bg-light p-5">
        <div>
            <b-button variant="primary" class="btn btn-primary" href="/formulario/0"> Nuevo </b-button>
        </div>
        <div class=" flex container bg-light p-5 bg-white">
            <!-- Para que ocupe toda la pantalla, si no sacar el -fluid -->
            <div class="row bg-dark text-light">
                <div class="col">
                    <b>ID</b>
                </div>
                <div class="col">
                    <b>Nombre</b>
                </div>
                <div class="col">
                    <b>Marca</b>
                </div>
                <div class="col">
                    <b>Modelo</b>
                </div>
                <div class="col">
                    <b>Precio</b>
                </div>
                <div class="col">
                    <b>Costo Envío</b>
                </div>
                <div class="col">
                    <b>Cantidad Vendida</b>
                </div>
                <div class="col">
                    <b>Modificar</b>
                </div>
                <div class="col">
                    <b>Eliminar</b>
                </div>
            </div>
            <div class="row" v-for="instrumento in instrumentosData" :key="instrumento.id" style="padding-top: 5px;">
                <div class="col">
                    {{ instrumento.id }}
                </div>
                <div class="col">
                    {{ instrumento.nombre }}
                </div>
                <div class="col">
                    {{ instrumento.marca }}
                </div>
                <div class="col">
                    {{ instrumento.modelo }}
                </div>
                <div class="col">
                    {{ instrumento.precio }}
                </div>
                <div class="col">
                    {{ instrumento.costoEnvio }}
                </div>
                <div class="col">
                    {{ instrumento.cantidadVendida }}
                </div>
                <div class="col">
                    <a class="btn btn-primary" :href="'/formulario/' + instrumento.id" role="button"> Modificar </a>
                </div>
                <div class="col">
                    <button type="button" @click="deleteInstrumento(instrumento.id)" class="btn btn-danger"> Eliminar
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import Instrumento from '@/entidades/Instrumento';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
    name: 'GrillaInstrumentos',
    components: {},
    setup() { //setup se encargará de dispararse en la fase de inicialización del componente, al construir el componente, equivalente a created de V2
        const instrumentosData = ref<Instrumento[]>([]) //ref es el equivalente en react de useState, indico que la variable sera reactiva
        //V3
        onMounted(async () => {
            const res = await fetch(
                "http://localhost:3001/instrumentos", {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                mode: 'cors'
            },
            );
            const resJson = await res.json();
            console.log(resJson);
            instrumentosData.value = await resJson;
        });
        return {
            instrumentosData,
            precioDesde: "",
            precioHasta: ""
        };
    },
    methods: {
        deleteInstrumento: async function (id: number) {
            let urlServer = 'http://localhost:3001/instrumentos/' + id;
            console.log(urlServer);
            let result = await fetch(urlServer, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                mode: 'cors'
            });
            window.location.reload();

        },
        async getInstrumentosEntrePrecios(precioDesde: string, precioHasta: string) {
            const res = await fetch(
                "http://localhost:3001/instrumentos/precios/query?min=" + precioDesde + "&max=" + precioHasta
            );
            const resJson = await res.json();
            this.instrumentosData = resJson;
            this.precioDesde = "0";
            this.precioHasta = "";
        }

    }
});
</script>