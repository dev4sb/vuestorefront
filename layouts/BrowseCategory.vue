<template>
    <div class="mainBrowseCategory">
        <br/>
      <br/>
<div class="row">
  <div class="column">
    <div class="card rounded">
        <div class="circular-img">
            <img src="https://api.wonect.com/img/?width=120&height=120&action=fit&url=https%3A%2F%2Fwonect.cloud%2Fmedia%2Fcatalog%2Fcategory%2Fcleansers.png">
</div>
      <p>Cleansers</p>
    </div>
  </div>

  <div class="column">
    <div class="card rounded">
    <div class="circular-img">
            <img src="https://api.wonect.com/img/?width=120&height=120&action=fit&url=https%3A%2F%2Fwonect.cloud%2Fmedia%2Fcatalog%2Fcategory%2Fmoisturizers-creams.png">
</div>
      <p>Moisturizers & Creams</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card ">
     <div class="circular-img">
            <img src="https://api.wonect.com/img/?width=120&height=120&action=fit&url=https%3A%2F%2Fwonect.cloud%2Fmedia%2Fcatalog%2Fcategory%2Fserums-essences.png">
</div>
      <p>Serum and Essence</p>
    </div>
  </div>
    <div class="column">
    <div class="card ">
     <div class="circular-img">
            <img src="https://api.wonect.com/img/?width=120&height=120&action=fit&url=https%3A%2F%2Fwonect.cloud%2Fmedia%2Fcatalog%2Fcategory%2Feyelash-care.png">
</div>
      <p>Eyelash care</p>
    </div>
  </div>
  <div class="column">
    <div class="card ">
     <div class="circular-img">
            <img src="https://api.wonect.com/img/?width=120&height=120&action=fit&url=https%3A%2F%2Fwonect.cloud%2Fmedia%2Fcatalog%2Fcategory%2Fshampoo.png">
</div>
      <p>Shampoo</p>
    </div>
  </div>
   <div class="column">
    <div class="card ">
     <div class="circular-img">
            <img src="https://api.wonect.com/img/?width=120&height=120&action=fit&url=https%3A%2F%2Fwonect.cloud%2Fmedia%2Fcatalog%2Fcategory%2Fhair-loss.png">
</div>
      <p> Hair Loss</p>
    </div>
  </div>
   <div class="column">
    <div class="card ">
     <div class="circular-img">
            <img src="https://api.wonect.com/img/?width=120&height=120&action=fit&url=https%3A%2F%2Fwonect.cloud%2Fmedia%2Fcatalog%2Fcategory%2Foral-care.png">
</div>
      <p> Oral Care</p>
    </div>
  </div>

  <div class="column">
    <div class="card ">
     <div class="circular-img">
            <img src="https://api.wonect.com/img/?width=120&height=120&action=fit&url=https%3A%2F%2Fwonect.cloud%2Fmedia%2Fcatalog%2Fcategory%2Fbase-makeup.png">
</div>
      <p>Base Makeup</p>
    </div>
  </div>

  <div class="column">
    <div class="card ">
     <div class="circular-img">
            <img src="https://api.wonect.com/img/?width=120&height=120&action=fit&url=https%3A%2F%2Fwonect.cloud%2Fmedia%2Fcatalog%2Fcategory%2Fcollagen.png">
</div>
      <p> Collagen</p>
    </div>
  </div>

  <div class="column">
    <div class="card ">
     <div class="circular-img">
            <img src="https://api.wonect.com/img/?width=120&height=120&action=fit&url=https%3A%2F%2Fwonect.cloud%2Fmedia%2Fcatalog%2Fcategory%2Ffood-and-drink.png">
</div>
      <p> Food & Drink</p>
    </div>
  </div>
    
  
</div>
    </div>

</template>

<script>

export default {
  components: {
 
  }
};

</script>
<style lang="scss" scoped>
.circular-img
				{
					display:inline-block;
					padding:10px;
					border-radius:50%;
					background:#fef8e7;
					height:150px;
					width:150px;
				}
.circular-img img
{
   display: inline-block;
    margin-top: 27px;
    margin-left: 1px;
    height: 104px;
}
.mainBrowseCategory{
      margin: 0 20px;
    padding-left: 104px;

}
.column {
      float: left;
    width: 19%;
    padding: 0px 0px;
}

/* Remove extra left and right margins, due to padding */
.row {margin: 0 -5px;}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive columns */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

/* Style the counter cards */
.card {
  padding: 16px;
  text-align: center;
  background-color: #ffff;
}
</style>