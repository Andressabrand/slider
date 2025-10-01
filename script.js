
let bntnext = document.querySelector(".back")
let bntback = document.querySelector(".next")

let container = document.querySelector(".container")
let list = document.querySelector(".container .list")
let thumb = document.querySelector(".container .thumb")




bntnext.onclick = () => moveItemOnClick("next")
bntback.onclick = () => moveItemOnClick("back")

function moveItemOnClick(type) {
    let listItem = document.querySelectorAll(".list  .list-item")
    let thumbIntens = document.querySelectorAll(".thumb .thumb-item")

    console.log(listItem)
    console.log(thumbIntens)


    if (type === "next") {
        list.appendChild(listItem[0])
        thumb.appendChild(thumbIntens[0])
        container.classList.add("next")


    
    }else {
        list.prepend(listItem[listItem.length -1])
        thumb.prepend(thumbIntens[thumbIntens.length -1])
          container.classList.add("back")


    }

    setTimeout(() => {
    container.classList.remove("next")
    container.classList.remove("back")

    },3000);
   

}

