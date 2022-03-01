<template>
      <div>
<div class="grid-container">
  <div class="item1">
               <div style="float:left">
              <img alt="Quality" class="w-16" 
              data-src="https://assets.wonect.com/assets/img/icon/icon-quality.png" src="https://assets.wonect.com/assets/img/icon/icon-quality.png" lazy="loaded">
               </div>
               <div class="flex-container2">
                  <div>
                    <h3>Quality</h3>
                    <span  class="text-secondary2"> Bringing you authentic products  </span>
      </div>
                </div>
                 </div>
  <div class="item2">
             <div style="float:left">
              <img alt="Quality" class="w-16" 
              data-src="https://assets.wonect.com/assets/img/icon/icon-delivery.png" src="https://assets.wonect.com/assets/img/icon/icon-delivery.png" lazy="loaded">
               </div>
               <div class="flex-container2">
                  <div>
                    <h3>Delivery</h3>
                  <span class="text-secondary2"> Bringing you authentic products  </span>

      </div>
                </div>

  </div>
  <div class="item3">
             <div style="float:left">
              <img alt="Quality" class="w-16" 
              data-src="https://assets.wonect.com/assets/img/icon/icon-refund.png" src="	https://assets.wonect.com/assets/img/icon/icon-refund.png" lazy="loaded">
               </div>
               <div class="flex-container2">
                  <div>
                    <h3>Refund</h3>
       <span  class="text-secondary2"> Bringing you authentic products  </span>

      </div>
                </div>

      </div>  
 
</div>
      </div>
</template>

<script>


export default {
  components: {
  
  },
  setup() {
    return {
      
    };
  },
  data() {
    return {
     
    };
  }
};
</script>

<style lang="scss">

.text-secondary2 {
    color: #898687;
}

.flex-container2 {
  display: flex;
  flex-direction: column;
}

.flex-container2 > div {
   width: 308px;
  margin: 10px;
  text-align:left;
}
.ml-4 {
    margin-left: 1rem;
}
.w-16 {
    width: 4rem;
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 47px;
  padding: 0px;
 border-bottom: 1px solid #9e9e9e;

}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 35px;
  
}

</style>
