<template>
  <div>
    <div v-if="currentPath === '/search-city'">
        
        <SidoSearchBox/>
    </div>
    <div v-else-if="currentPath === '/search-theme'">
        
        <SearchBox/>
    </div>
    <!--<Divider color="#ff8181" thickness="0" />-->
    <KinderList/>
  </div>
</template>

<script>
import KinderList from '../components/KinderList.vue'
import SidoSearchBox from '../components/SidoSearchBox.vue'
import Divider from '../components/Divider.vue'
import UserMessage from '../components/UserMessage.vue'
import SearchBox from '../components/SearchBox.vue'

import { computed } from 'vue';
import { useRoute } from 'vue-router';


export default {
    components:{
        KinderList,
        SidoSearchBox,
        Divider,
        UserMessage,
        SearchBox,
    },
    setup() {
        const route = useRoute();
        const currentPath = computed(() => route.path);

        return {
            currentPath,
        };
  },

}
</script>

<style scoped>

</style>