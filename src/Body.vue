<template>
    <div class="row">
        <lp-captura></lp-captura>
        <lp-chamada titulo="Chamada interessante para o produto" descricao="Mais uma informação relevante"></lp-chamada>
    </div>
</template>

<script>
import lpChamada from "./Chamada";
import lpCaptura from "./Captura";

export default {
    components: {lpCaptura, lpChamada},
    name: 'lp-body',
  data () {
    return {

    }
  }
}
</script>
