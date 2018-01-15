<template>
    <div class="row" style="margin:30px 0">
        <div class="col-lg-3">
            <img v-bind:src="image" class="img-thumbnail">
        </div>
        <div class="col-lg-9">
            <h3>{{name}}</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'lp-header',
    props: ['image', 'name'],

    data () {
        return {

        }
    }
}
</script>
