<template>
  <div>
    <UserMessage/>
    <!--<Divider color="#ff8181" thickness="0" />-->
    <SidoSearchBox/>
    <!--<Divider color="#ff8181" thickness="0" />-->
    
    <KinderList/>
  </div>
</template>

<script>
import KinderList from '../components/KinderList.vue'
import SidoSearchBox from '../components/SidoSearchBox.vue'
import Divider from '../components/Divider.vue'
import UserMessage from '../components/UserMessage.vue'

export default {
    components:{
        KinderList,
        SidoSearchBox,
        Divider,
        UserMessage,
    }
}
</script>

<style scoped>

</style>