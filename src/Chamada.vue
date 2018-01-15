<template>

    <div class="col-lg-6">
        <h1>{{titulo}}</h1>
        <h2>{{descricao}}</h2>
    </div>

</template>

<script>
export default {
    name: 'lp-chamada',
    props: ['titulo', 'descricao'],
    data () {
        return {

        }
    }
}
</script>
