<template>
    <div>
     <SfTopBar class="blog_topbar">
               <template #center>
                         <h3 class="mb-4"> Trending </h3>              
                          </template>
                          
              </SfTopBar>            <div class="tranding_product">
                 <div class="trending_image">
                    <SfImage
    src="https://api.wonect.com/img/?width=200&height=266&action=fit&url=https%3A%2F%2Fwonect.cloud%2Fmedia%2Fcatalog%2Fcategory%2Fwhitening-title_1.png"
    :srcsets="[]"
    alt="Vila stripe maxi shirt dress"
    :width="216"
    :height="326"
  />
           <div class="tranding_name">  <h4> Whitening</h4></div>
                 </div>

                 <div class="trending_image">
                    <SfImage
    src="https://api.wonect.com/img/?width=200&height=266&action=fit&url=https%3A%2F%2Fwonect.cloud%2Fmedia%2Fcatalog%2Fcategory%2Fdiet-title.png"
    :srcsets="[]"
    alt="Vila stripe maxi shirt dress"
    :width="216"
    :height="326"
  />  
      <div class="tranding_name">  <h4>Diet
</h4></div>
            

                 </div>

                 <div class="trending_image">
                    <SfImage
    src="https://api.wonect.com/img/?width=200&height=266&action=fit&url=https%3A%2F%2Fwonect.cloud%2Fmedia%2Fcatalog%2Fcategory%2Fhair-care-title.png"
    :srcsets="[]"
    alt="Vila stripe maxi shirt dress"
    :width="216"
    :height="326"
  />
      <div class="tranding_name">  <h4>Hair Care</h4></div>

                 </div>

                 <div class="trending_image">
                    <SfImage
    src="https://api.wonect.com/img/?width=200&height=266&action=fit&url=https%3A%2F%2Fwonect.cloud%2Fmedia%2Fcatalog%2Fcategory%2Fcollagen-title.png"
    :srcsets="[]"
    alt="Vila stripe maxi shirt dress"
    :width="216"
    :height="326"
  />
      <div class="tranding_name">  <h4> Collagen</h4></div>

                 </div>

            </div>
 
    </div>
</template>

<script>
import {
 SfImage,
 SfTopBar
} from '@storefront-ui/vue';
import {
 

 
} from '@storefront-ui/vue';

export default {
  components: {
  SfImage,
  SfTopBar
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



.tranding_name
{
  text-align: center;
      margin-top: 30px;

}
.tranding_product{
  display: flex;
}
.tranding_product >div{
  margin: 29px;
}
</style>
