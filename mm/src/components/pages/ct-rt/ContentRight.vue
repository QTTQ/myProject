<template>
  <div class="m-ct-rt">

    <right-header></right-header>
    <right-body></right-body>

  </div>
</template>  
  
<script>  
import RightHeader from './RightHeader'
import RightBody from './RightBody'

 export default {
  name: 'm-ct-rt',
  components: {
   
    RightHeader,
    RightBody
    
  }
}
</script>  

  
<!-- Add "scoped" attribute to limit CSS to this component only -->  
<style scoped>

</style> 