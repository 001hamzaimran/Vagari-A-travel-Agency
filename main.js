import './style.css';
import './responsive.css';
import arrayOfProducts from './products';

function hot_Products() {
    let parentContainer = document.querySelector(".hot_Products");
    var clutter ='';
    arrayOfProducts.forEach(elem => {
        clutter +=`<div class=" main_hot_product_Wrapper ">
      <div class="hot_prod_img">
        <img src=${elem.image} class="img-fluid " alt="">
      </div>
      <div class="main_content p-4 ">
        <div class="content_hot_prod">
          <h2 class="diplay-4 fw-semibold ">${elem.Name}</h2>
          <p><span class="icon_span"><i class="fa-solid fa-location-dot" ></i></span>${elem.location}</p>
        </div>
        <hr>
        <div class="hot_prod_desc">
          <p>${elem.description}</p>
        </div>
        <hr>
        <div class="hot_prod_btn">
          <button > Detail</button>
          <div class="hot_prod_price">
            <h5>FROM</h5>
            <h3>${elem.rates}</h3>
          </div>
        </div>
      </div>
    </div>`;
});
parentContainer.innerHTML=clutter;
console.log(parentContainer);
    

}


hot_Products();