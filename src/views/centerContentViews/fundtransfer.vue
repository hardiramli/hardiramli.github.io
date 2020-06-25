<template>
<div class="fundtransfer">
    <FundTransfer class="hello" />
</div>
</template>

<script>
import FundTransfer from "@/components/centerContentComponents/FundTransferComponent"

export default {
    components: {
        FundTransfer
    }
};
</script>

<style scoped>
.home {
    background: #42b983;
}

.hello {
    float: right;
}
</style>
