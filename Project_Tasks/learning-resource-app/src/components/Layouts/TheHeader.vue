<template>
    <header>
        {{heading}}
    </header>

</template>

<script>
export default {
    
    props:['heading'],
    
}
</script>

<style scoped>

header{
    background-color: brown;
    text-align: center;
    padding: 2rem 0px;
    font-size: 19px;
    font-weight: 900;
    color: white;
    font-family:Georgia, 'Times New Roman', Times, serif;

}

</style>
