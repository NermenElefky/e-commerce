// show and hide the cart
let cart = document.querySelector(".user_boughts");
let buying_car = document.querySelector(".buying_car");

buying_car.addEventListener("click",()=>{
    if(cart.style.display === "none"){
        cart.style.display = "block"
    }
    else{
        cart.style.display = "none";
    }
})
// plus and minus
let plus_minus_parent = document.querySelector(".number");

plus_minus_parent.addEventListener("click",(e)=>{
   if(e.target.className === "plus"){
        e.target.previousElementSibling.innerText = Number(e.target.previousElementSibling.innerText)+1;
   }
   else if (e.target.className === "minus"){
    e.target.nextElementSibling.innerText = Number(e.target.nextElementSibling.innerText)-1;
   }
})

//add to cart button
let add_btn = document.querySelector(".add button");
add_btn.addEventListener("click",()=>{
    cart.innerHTML = `
    <p class = "c">Cart</p>
    <div class = "sneaker">
    <div class = "p">
    <img src = "${document.querySelector(".product_ph_1").getAttribute("src")}">
    <div class = "text">
    <p>${document.querySelector("h1").innerText} <br>  ${document.querySelector("h2").innerText} x ${document.querySelector(".plus").previousElementSibling.innerText}<span>$${(125*Number(document.querySelector(".plus").previousElementSibling.innerText)).toFixed(2)}</span></p>
    </div>
    <img src="./images/icon-delete.svg" alt="delete" class ="dlt">
    </div>
    <button>Checkout</button>
    </div>
    `
    // delete if you want 
    if (cart.lastElementChild.innerText != "Your cart is empty"){
        dlt_btn = document.querySelector(".dlt");
        dlt_btn.addEventListener("click",()=>{
           cart.innerHTML = `
           <p class = "c">Cart</p>
          <p class = "empty">Your cart is empty</p>
           `
       })
    }
}) 

// when clicking in any thumbnail it plays
let bigger_img = document.querySelector(".bigger_image");
let bigger_img2 = document.querySelector(".bigger_image2");
let thumbnails = document.querySelectorAll(".small div img");

Array.from(thumbnails).forEach((img)=>{
    img.addEventListener("click",()=>{
        Array.from(thumbnails).forEach((i)=>{
            i.classList.remove("active");
        })
        img.classList.add("active");
        Array.from(thumbnails).forEach((i)=>{
            if(i.getAttribute("src") == img.getAttribute("src")){
                i.classList.add("active")
            }
        })
        bigger_img.setAttribute("src",img.getAttribute("src").split("-thumbnail").join(""));
        bigger_img2.setAttribute("src",img.getAttribute("src").split("-thumbnail").join(""));

    })
})
// open the gallery
bigger_img.addEventListener("click",()=>{
    bigger_img2.parentElement.parentElement.style.display = "flex";
});

// close the bigger 
let close_bigger = document.querySelector(".close_btn");
close_bigger.addEventListener("click",()=>{
    document.querySelector(".bigger_click").style.display = "none";
})

// next and prev photo
let next_prev = document.querySelector(".moves");
next_prev.addEventListener("click",(e)=>{
    if(e.target.classList == "next"){
        let n = document.querySelector(".pro_imgs2 .small img.active").getAttribute("data-number");
        Array.from(thumbnails).forEach((i)=>{
            i.classList.remove("active");
        });
        if(n < 4){
                n++;
                document.querySelector(`[data-number = '${n}']`).classList.add("active");
                bigger_img.setAttribute("src",document.querySelector(`[data-number = '${n}']`).getAttribute("src").split("-thumbnail").join(""));
                bigger_img2.setAttribute("src",document.querySelector(`[data-number = '${n}']`).getAttribute("src").split("-thumbnail").join(""));
                Array.from(thumbnails).forEach((i)=>{
                    if(i.getAttribute("src") == document.querySelector(`[data-number = '${n}']`).getAttribute("src")){
                        i.classList.add("active")
                    }
                })
            }
            else{
                    n =1 ;
                    document.querySelector(`[data-number = '${n}']`).classList.add("active");
                    bigger_img.setAttribute("src",document.querySelector(`[data-number = '${n}']`).getAttribute("src").split("-thumbnail").join(""));
                    bigger_img2.setAttribute("src",document.querySelector(`[data-number = '${n}']`).getAttribute("src").split("-thumbnail").join(""));    
                    Array.from(thumbnails).forEach((i)=>{
                        if(i.getAttribute("src") == document.querySelector(`[data-number = '${n}']`).getAttribute("src")){
                            i.classList.add("active")
                        }
                    })
            }
    }
    else if (e.target.classList == "prev"){
        let n = document.querySelector(".pro_imgs2 .small img.active").getAttribute("data-number");
        Array.from(thumbnails).forEach((i)=>{
            i.classList.remove("active");
        });    
        if(n > 1){
                n--;
                document.querySelector(`[data-number = '${n}']`).classList.add("active");
                bigger_img.setAttribute("src",document.querySelector(`[data-number = '${n}']`).getAttribute("src").split("-thumbnail").join(""));
                bigger_img2.setAttribute("src",document.querySelector(`[data-number = '${n}']`).getAttribute("src").split("-thumbnail").join(""));
                Array.from(thumbnails).forEach((i)=>{
                    if(i.getAttribute("src") == document.querySelector(`[data-number = '${n}']`).getAttribute("src")){
                        i.classList.add("active")
                    }
                })
            }
            else{
                    n =4 ;
                    document.querySelector(`[data-number = '${n}']`).classList.add("active");
                    bigger_img.setAttribute("src",document.querySelector(`[data-number = '${n}']`).getAttribute("src").split("-thumbnail").join(""));
                    bigger_img2.setAttribute("src",document.querySelector(`[data-number = '${n}']`).getAttribute("src").split("-thumbnail").join(""));    
                    Array.from(thumbnails).forEach((i)=>{
                        if(i.getAttribute("src") == document.querySelector(`[data-number = '${n}']`).getAttribute("src")){
                            i.classList.add("active")
                        }
                    })
            }
    }
})

// the next and prev in phone
let next_prev2 = document.querySelector(".moves2");
next_prev2.addEventListener("click",(e)=>{
    if(e.target.classList == "next"){
        let n = document.querySelector(".pro_imgs2 .small img.active").getAttribute("data-number");
        Array.from(thumbnails).forEach((i)=>{
            i.classList.remove("active");
        });
        if(n < 4){
                n++;
                document.querySelector(`[data-number = '${n}']`).classList.add("active");
                bigger_img.setAttribute("src",document.querySelector(`[data-number = '${n}']`).getAttribute("src").split("-thumbnail").join(""));
                bigger_img2.setAttribute("src",document.querySelector(`[data-number = '${n}']`).getAttribute("src").split("-thumbnail").join(""));
                Array.from(thumbnails).forEach((i)=>{
                    if(i.getAttribute("src") == document.querySelector(`[data-number = '${n}']`).getAttribute("src")){
                        i.classList.add("active")
                    }
                })
            }
            else{
                    n =1 ;
                    document.querySelector(`[data-number = '${n}']`).classList.add("active");
                    bigger_img.setAttribute("src",document.querySelector(`[data-number = '${n}']`).getAttribute("src").split("-thumbnail").join(""));
                    bigger_img2.setAttribute("src",document.querySelector(`[data-number = '${n}']`).getAttribute("src").split("-thumbnail").join(""));    
                    Array.from(thumbnails).forEach((i)=>{
                        if(i.getAttribute("src") == document.querySelector(`[data-number = '${n}']`).getAttribute("src")){
                            i.classList.add("active")
                        }
                    })
            }
    }
    else if (e.target.classList == "prev"){
        let n = document.querySelector(".pro_imgs2 .small img.active").getAttribute("data-number");
        Array.from(thumbnails).forEach((i)=>{
            i.classList.remove("active");
        });    
        if(n > 1){
                n--;
                document.querySelector(`[data-number = '${n}']`).classList.add("active");
                bigger_img.setAttribute("src",document.querySelector(`[data-number = '${n}']`).getAttribute("src").split("-thumbnail").join(""));
                bigger_img2.setAttribute("src",document.querySelector(`[data-number = '${n}']`).getAttribute("src").split("-thumbnail").join(""));
                Array.from(thumbnails).forEach((i)=>{
                    if(i.getAttribute("src") == document.querySelector(`[data-number = '${n}']`).getAttribute("src")){
                        i.classList.add("active")
                    }
                })
            }
            else{
                    n =4 ;
                    document.querySelector(`[data-number = '${n}']`).classList.add("active");
                    bigger_img.setAttribute("src",document.querySelector(`[data-number = '${n}']`).getAttribute("src").split("-thumbnail").join(""));
                    bigger_img2.setAttribute("src",document.querySelector(`[data-number = '${n}']`).getAttribute("src").split("-thumbnail").join(""));    
                    Array.from(thumbnails).forEach((i)=>{
                        if(i.getAttribute("src") == document.querySelector(`[data-number = '${n}']`).getAttribute("src")){
                            i.classList.add("active")
                        }
                    })
            }
    }
})

//show and hide menu
let  menu_m = document.querySelector(".menu_m");
let menu_icon = document.querySelector(".menu");

menu_icon.addEventListener("click",()=>{
    if(menu_m.style.display == "none"){
        menu_m.style.display = "block"
    }
    else{
        menu_m.style.display = "none";
    }
})

let menu_c = document.querySelector(".menu-c");
menu_c.addEventListener("click",()=>{
    if(menu_m.style.display == "none"){
        menu_m.style.display = "block"
    }
    else{
        menu_m.style.display = "none";
    }
}) 