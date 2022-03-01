<template>
    <div>
       
<div class="flex-container">
  <div style="flex-grow: 0.1">
  <SfIcon class="sf-header__icon" icon="mail" size="2.25rem" />

  </div>
  <div style="flex-grow: 1">
    <h3 class="email_sub_heading">
      Sign up to our newsletter
    </h3>
   <span class="text-secondary1 ">
      Subscribe to the Wonect newsletter and receive limited time sale information.
    </span>
  </div>
  <div style="flex-grow: 7">
      <div>
      <div>
        <h1 style="float:left">
            <input class="email_input" type="text" id="fname" name="fname" placeholder=" E-mail address *">
        </h1>
      </div>
      <div>
        <h1 style="float:right" class="email_button">
           <SfButton
   :class="classes"
    :disabled="disabled" 
    :type="type"
    @click="click"
    :link="link">
      Sign up
  </SfButton>
        </h1>
      </div>
      </div>
  </div>
</div>
    </div>
</template>

<script>
import {
 

  SfIcon,
  SfButton

} from '@storefront-ui/vue';

export default {
  components: {
   SfIcon,
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
.text-secondary1 {
    color: #898687;
}
.email_sub_heading
{
font-weight: 700;
    font-size: 1.25rem;
}

.sf-header__icon{
      margin: 20px;

}
.email_button .sf-button 
  {
    height: 43px;
    width: 66%;
      }
.email_button{
      margin: 22px;

}
.email_input{
width: 132%;
    height: 36px;
    }
@media (min-width: 1024px)
{
.lg\:mr-8 {
    margin-right: 2rem;
}
}
.pl-4 {
    padding-left: 1rem;
}
.text-sm {
    font-size: .875rem;
}
.flex-container {
  display: flex;
  align-items: stretch;
      border-bottom: 1px solid #9e9e9e;

}

.flex-container > div {

  margin: 10px;
  line-height: 27px;
}
</style>
