<template >
<div>
            <div >
              <SfTopBar class="blog_topbar">
               <template #center>
                         <h3 class="mb-4"> From the Blog </h3>              
                          </template>
                          
              </SfTopBar>
              <SfTopBar class="blog_topbar_bttn">
               <template #center >
                 <SfButton
   :class="classes"
    :disabled="disabled" 
    :type="type"
    @click="click"
    :link="link">
        View all on wonect.life

  </SfButton>
                          </template>
                          
              </SfTopBar>
            </div>

    <template >
      <div class="flex-container">
  <div><SfCard
     
    image="https://api.wonect.com/img/?width=370&height=250&action=fit&url=https%3A%2F%2Fwonect.life%2Fwp-content%2Fuploads%2F2020%2F06%2FUntitled-design-19.png"
    :imageWidth="288"
    :imageHeight="189"
    title="Easy Mask Friendly Makeup from Japan"
    :titleLevel="1"
    description="Between social distancing and daily mask-wearing, many of us have stopped bothering with makeup in t..."
  buttonText="Learn more"
  />
  
  </div>
  <div><SfCard
     
    image="https://api.wonect.com/img/?width=370&height=250&action=fit&url=https%3A%2F%2Fwonect.life%2Fwp-content%2Fuploads%2F2020%2F06%2FUntitled-design-5.png"
    :imageWidth="288"
    :imageHeight="189"
    title="Japanese Eye Makeup to Wear With Your Mask"
    :titleLevel="1"
    description="Just because we have to wear masks doesn’t mean we can’t still turn heads. The best way to create an..."
  buttonText="Learn more"
  /></div>

  <div> <SfCard
     
    image="https://api.wonect.com/img/?width=370&height=250&action=fit&url=https%3A%2F%2Fwonect.life%2Fwp-content%2Fuploads%2F2020%2F06%2FUntitled-design-11.png"
    :imageWidth="288"
    :imageHeight="189"
    title="Easy Mask Friendly Makeup from Japan"
    :titleLevel="1"
    description="Between social distancing and daily mask-wearing, many of us have stopped bothering with makeup in t..."
  buttonText="Learn more"
  /></div>  
</div>
  
    </template>
 
</div>      
      
      
</template>

<script>

import { SfCard ,SfTopBar ,SfButton } from '@storefront-ui/vue';

export default {
  components: {
  SfCard,
  SfTopBar,
  SfButton
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
.mb-4{
  padding-bottom: 5px;
      font-weight: 700;
    font-size: 1.25rem;

}
.blog_topbar_bttn.SfButton{
      height: 38px;
      margin-top: 5px;

}
.blog_topbar_bttn {
      background-color: #fff;

}
.blog_topbar{
    background-color: #fff;

}
.pdp-upsell-section {
    margin: 0 !important;
    padding-bottom: 0px  !important;
}


.sf-heading__title.h2{
  font-weight: 700 !important;
    font-size: 0.875rem !important;
}
.flex-container {
  display: flex;
}

.flex-container > div {
  margin: 10px;
  padding: 20px;
}
.sf-card__action{
   top: 90%;
}
.sf-card__details{
    height: 154px;
}
</style>
