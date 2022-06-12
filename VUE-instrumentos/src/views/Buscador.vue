<script lang="ts">
export async function getInstrumentosXBuscador(termino:String){

	let response = await fetch("http://localhost:3000/instrumentosbuscar/" + termino, {
		method: 'GET',
        headers: {
			'Content-type': 'application/json',
			'Access-Control-Allow-Origin':'*'
		},
        mode: 'cors'
	});
	console.log(response);
	return await response.json();
}</script>