// const toggler = document.querySelector("#toggler")
// const navbar = document.querySelector("#nav");
// const ul = document.querySelector("#ul");

// toggler.addEventListener("click", (e)=> {
//   ul.classList.toggle("hidden")
//   toggler.classList.toggle("hidden")
// })



//  const showNav = document.querySelector(".show-nav");
//  const closeNav = document.querySelector(".close-nav");
//  const nav = document.querySelector(".nav");


//  closeNav.addEventListener("click", ()=>{
//   nav.classList.remove("right-0")
//   nav.classList.add("right-[-50%]");
//  })

//  showNav.addEventListener("click", () => {
//    nav.classList.remove("right-[-50%]");
//    nav.classList.add("right-0");
//  });


//selectors
// const menuBtn = document.querySelector(".mobile__menu__button");
// const closeBtn = document.querySelector(".close__menu");
// const menu = document.querySelector(".mobile__menu");

// //even listeners
// menuBtn.addEventListener("click", () => {
//   menu.classList.toggle("-translate-x-full");
// });
// closeBtn.addEventListener("click", () => {
//   menu.classList.toggle("-translate-x-full");
// });


// document.addEventListener("click", function(e){
//   if(e.target.id !== 'sidebar'){
//     menu.classList.toggle("-translate-x-full");
//   }
// })



const sidebar = document.querySelector("#sidebar");
const menu = document.querySelector("#menu");
const backdrop = document.querySelector("#backdrop");
const closeMenu =document.querySelector(".close-menu")
const body = document.querySelector(".body");



menu.addEventListener("click", ()=>{
  sidebar.classList.remove("translate-x-full");
  sidebar.classList.add("transition-all");
  backdrop.classList.remove("hidden")
  // body.classList.add("fixed");
})

backdrop.addEventListener("click", ()=>{
 sidebar.classList.add("translate-x-full");
 sidebar.classList.add("transition-all");
 backdrop.classList.add("hidden");
//  body.classList.remove("fixed");


})



closeMenu.addEventListener("click", ()=>{
  sidebar.classList.add("translate-x-full");
    sidebar.classList.add("transition-all");
    backdrop.classList.add("hidden");
    // body.classList.remove("fixed");


})

