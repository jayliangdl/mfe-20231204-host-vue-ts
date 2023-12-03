<template>
  <div class="{{CONTAINER}}">
    <span>Host VUE TS - Vue Component In Vue</span>
    <MyVueButton />
  </div>
</template>

<script lang="ts">
// declare module "remotevue/MyVueButton.vue";
  import { defineComponent } from 'vue'
  import MyVueButton from 'remoteVueTs/MyVueButton';
  export default defineComponent({
    components:{
      MyVueButton
    }
  });
</script>
