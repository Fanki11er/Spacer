<template>
    <div class="claimWrapper">
        <h1 class="claim">SPACER</h1>
        <p class="subclaim">
            Begin your jurney trough our amazing galaxy,
            and discover places you never even heared of.  
        </p>
        <p class="subclaim">
            Type anything space-related to start
        </p>
    </div>
</template>

<script>
export default {
    name: 'Claim',
}
</script>

<style lang='scss' scoped>
.ClaimWrapper {
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}

.claim {
font-size: 50px;
margin: 0;
}

.subclaim {
font-size: 13px;
margin: 25px 0 0 0;
}

</style>
