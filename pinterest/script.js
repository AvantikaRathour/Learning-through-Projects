let arr=[
    {name:"a desert landscape",image:"https://images.unsplash.com/photo-1707343843437-caacff5cfa74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"},
    {name:"two people with shoes",image:"https://images.unsplash.com/photo-1709123490816-dd419481e3c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8"},
    {name:"abstract design",image:"https://plus.unsplash.com/premium_photo-1706344618667-7135607ad235?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"tree with white flowers",image:"https://images.unsplash.com/photo-1709203401459-64ac9935c725?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"},
    {name:"painting",image:"https://images.unsplash.com/photo-1709149470183-1389a64e2c88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"},
    {name:"women walking down the streets",image:"https://images.unsplash.com/photo-1709056842165-20d5f72064b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"women holding a surf board",image:"https://plus.unsplash.com/premium_photo-1664369472963-fcdeed732a3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D"},


]
function showTheCArds(){
    let clutter="";
    arr.forEach(function(obj){
        clutter+=`<div class="box">
        <img class="cursor-pointer" src="${obj.image}" alt="image">
        <div class="caption">lorem ipsum</div>
        </div>`;
    })
    document.querySelector(".container")
    .innerHTML=clutter
}
function handleSearchFunctiionality(){
    let input=document.querySelector("#searchinput")
input.addEventListener("focus",function(){
    document.querySelector(".overlay").style.display="block";
})
input.addEventListener("blur",function(){
    document.querySelector(".overlay").style.display="none";
})
// to show similar results as searched
input.addEventListener("input",function(){
    let filteredarray= arr.filter(obj=>obj.name.toLowerCase().startsWith(input.value))
    let clutter="";
    filteredarray.forEach(function(obj){
        clutter+=`<div class="res flex px-8 py-3">
        <i class="ri-search-line font-semibold mr-5"></i>
        <h3 class="font-semibold">${obj.name}</h3>
        </div>`
    })
    document.querySelector(".searchdata").style.display="block";
    document.querySelector(".searchdata").innerHTML=clutter;
})

}


showTheCArds();
handleSearchFunctiionality()