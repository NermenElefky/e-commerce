// show and hide the cart
let cart = document.querySelector(".user_boughts");
let buying_car = document.querySelector(".buying_car");

buying_car.addEventListener("click",()=>{
    if(cart.style.display == "none"){
        cart.style.display = "block"
    }
    else{
        cart.style.display = "none";
    }    
})
// hidden the cart from any where
document.body.addEventListener("click",(e)=>{
        if (!e.target.closest(".buying_car") && !e.target.closest(".user_boughts") && !e.target.closest(".btn_add") && !e.target.closest(".minus") && !e.target.closest(".plus") && !e.target.closest(".dlt")){
           if(cart.style.display === "block"){
                cart.style.display = "none"
            }
        }
})
// plus and minus
let plus_minus_parent = document.querySelector(".number");

plus_minus_parent.addEventListener("click",(e)=>{
   if(e.target.parentElement.className === "plus"){
        e.target.parentElement.previousElementSibling.innerText = Number(e.target.parentElement.previousElementSibling.innerText)+1;
   }
   else if (e.target.parentElement.className === "minus"){
    e.target.parentElement.nextElementSibling.innerText = Number(e.target.parentElement.nextElementSibling.innerText)-1;
   }
})

//add to cart button
let add_btn = document.querySelector(".btn_add");
let buying_number = document.querySelector(".buying_number");
add_btn.addEventListener("click",()=>{
    if (`${document.querySelector(".plus").previousElementSibling.innerText}` > 0){
    cart.innerHTML = `
    <p class = "c">Cart</p>
    <div class = "sneaker">
    <div class = "p">
    <img src = "${document.querySelector(".product_ph_1").getAttribute("src")}">
    <div class = "text">
    <p>${document.querySelector("h1").innerText} <br>  ${document.querySelector("h2").innerText} x ${document.querySelector(".plus").previousElementSibling.innerText}<span>$${(125*Number(document.querySelector(".plus").previousElementSibling.innerText)).toFixed(2)}</span></p>
    </div>
    <button class ="dlt"><img src="./images/icon-delete.svg" alt="delete"></button>
    </div>
    <button>Checkout</button>
    </div>
    `
    buying_number.innerText = `${document.querySelector(".plus").previousElementSibling.innerText}`;
    buying_number.style.display = "block";
    }
    else{
        buying_number.style.display = "none";
        cart.innerHTML = `
        <p class = "c">Cart</p>
       <p class = "empty">Your cart is empty</p>
        `
    }
    // delete if you want 
    if (cart.lastElementChild.innerText != "Your cart is empty"){
        dlt_btn = document.querySelector(".dlt");
        dlt_btn.addEventListener("click",()=>{
           cart.innerHTML = `
           <p class = "c">Cart</p>
          <p class = "empty">Your cart is empty</p>
           `
           buying_number.style.display = "none";
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
    bigger_img2.parentElement.parentElement.previousElementSibling.style.display = "block";
});

// close the bigger
let photo_gallery = document.querySelector(".bigger_click"); 
let close_bigger = document.querySelector(".close_btn");
close_bigger.addEventListener("click",()=>{
    photo_gallery.style.display = "none";
    photo_gallery.previousElementSibling.style.display = "none";
})
photo_gallery.addEventListener("click",(e)=>{
    if (e.target.className == "bigger_click"){
        photo_gallery.style.display = "none";
        photo_gallery.previousElementSibling.style.display = "none"
    }
})
// next and prev photo
let next_prev = document.querySelector(".moves");
next_prev.addEventListener("click",(e)=>{
    if(e.target.parentElement.classList == "next"){
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
    else if (e.target.parentElement.classList == "prev"){
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
    if(e.target.parentElement.classList == "next"){
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
    else if (e.target.parentElement.classList == "prev"){
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
// open the sidebar when clicking on the menu icon
menu_icon.addEventListener("click",()=>{
    menu_m.style.display = "block";
    menu_m.previousElementSibling.style.display = "block";
})

// close the sidebar when clicking on the backdrop only
menu_m.addEventListener("click",(e)=>{
    if(!e.target.closest("ul")){
        menu_m.style.display = "none";
        menu_m.previousElementSibling.style.display = "none";
    }
})

let menu_c = document.querySelector(".menu-c");
// closing the sidebar when clicking on the close icon
menu_c.addEventListener("click",()=>{
  menu_m.style.display = "none";
  menu_m.previousElementSibling.style.display = "none";
}) 