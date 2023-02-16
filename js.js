const itemColors = document.querySelectorAll(".item")
const colors = ["orenge", "tomato", "blue"]
const btn = document.querySelector(".btn");

btn.addEventListener('click', function(){
  itemColors.forEach(function(itemColor,index){
    itemColors.style.Color = colors[index]
  })
  btn.innerHTML = "hello"
})