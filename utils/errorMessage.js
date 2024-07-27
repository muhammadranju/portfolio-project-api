const errorMessageTemplates = (message) => /*html*/ `

<section class="my-lg-10 my-10 margin-top">
<div class="container m-100">
<div class="row justify-content-center align-items-center my-12">
 <div class="col-12 col-md-6 col-lg-8 order-lg-2 order-1  p-10">
   <!-- <div class="mb-lg-2">
     <h1 class="mb-2 h4 ">${message}</h1>
   </div>
   <div class="col-12 d-grid">
    <a href="/"> <button type="submit" class="btn btn-info">Back to Home</button></a>  
     </div> -->
     <div class="alert alert-danger mb-5" style="text-align: center;" role="alert">
  <h4 class="alert-heading bold" style="color: red; font-weight: bold;">You you not fill all fields!</h4>
  <strong style="color: red; font-size: 20px;">This message coming for you need to fill all fields otherwise you can submit this project form</strong>  
  <br>
 <a href="/"> <button class="btn btn-info">Back to Home</button></a>
</div>
 </div>
</div>
</div>
</section>

`;

module.exports = errorMessageTemplates;
