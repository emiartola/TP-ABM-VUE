<template>
    <div style="max-width: 75%; padding-left: 25%;">
        <div class="mb-3">
            <label for="FormControlInput1" class="form-label">Nombre</label>
            <input v-model="instrumentoEncontrado.nombre" type="text" class="form-control" id="FormControlInput1"
                placeholder="Nombre" required>
        </div>
        <div class="mb-3">
            <label for="FormControlInput2" class="form-label">Rubro</label>
            <input v-model="instrumentoEncontrado.marca" type="text" class="form-control" id="FormControlInput2"
                placeholder="Rubro" required>
        </div>
        <div class="mb-3">
            <label for="FormControlInput3" class="form-label">Modelo</label>
            <input v-model="instrumentoEncontrado.modelo" type="text" class="form-control" id="FormControlInput3"
                placeholder="Modelo" required>
        </div>
        <div class="mb-3">
            <label for="FormControlInput4" class="form-label">Imagen</label>
            <input v-model="instrumentoEncontrado.imagen" type="text" class="form-control" id="FormControlInput4"
                placeholder="Imagen" required>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput4" class="form-label">Precio</label>
            <input v-model="instrumentoEncontrado.precio" type="number" class="form-control" id="FormControlInput5"
                placeholder="Precio" required>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput4" class="form-label">Costo Envío</label>
            <input v-model="instrumentoEncontrado.costoEnvio" type="text" class="form-control" id="FormControlInput6"
                placeholder="Costo Envío" required>
        </div>
        <div class="mb-3">
            <label for="FormControlInput4" class="form-label">Cantidad Vendida</label>
            <input v-model="instrumentoEncontrado.cantidadVendida" type="number" class="form-control"
                id="FormControlInput7" placeholder="Cantidad Vendida" required>
        </div>
        <div class="mb-3">
            <label for="FormControlInput4" class="form-label">Descripción</label>
            <input v-model="instrumentoEncontrado.descripcion" type="text" class="form-control" id="FormControlInput8"
                placeholder="Descripción" required>
        </div>
        <div class="col-auto">
            <button type="button" @click="guardar(instrumentoEncontrado)" class="btn btn-primary mb-3">Guardar</button>
        </div>
    </div>
</template>

<script lang="ts">
import Instrumento from '@/entidades/Instrumento';
import router from '@/router';
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
    name: 'FormularioInstrumento',
    components: {},
    setup() {
        const route = useRoute()
        const instrumentoEncontrado = ref<Instrumento>(new Instrumento())
        onMounted(async () => {
            const parametroId: string = route.params.id as string;
            if (parseInt(parametroId) != 0) {
                const res = await fetch(
                    "http://localhost:3001/instrumentos/" + parametroId, {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    mode: 'cors'
                });
                const resJson = await res.json();
                console.log(resJson);
                instrumentoEncontrado.value = resJson;
            }
        });

        return {
            instrumentoEncontrado
        };
    },
    methods: {

        async guardar(instrumento: Instrumento) {
            let urlServer = 'http://localhost:3001/instrumentos/';
            let method = "POST";
            if (instrumento && instrumento.id > 0) {
                urlServer = 'http://localhost:3001/instrumentos/';
                method = "PUT";
            }
            await fetch(urlServer, {
                "method": method,
                "body": JSON.stringify(instrumento),
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                mode: 'cors'
            });
            router.push('/grilla')
        }
    }
});
</script>