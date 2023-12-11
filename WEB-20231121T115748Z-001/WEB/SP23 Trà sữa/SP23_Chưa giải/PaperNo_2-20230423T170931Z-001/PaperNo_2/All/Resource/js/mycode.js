
function CalTotal(){
    let total = 0,
        menuListItem = document.querySelectorAll(".menu-list")[0],
        menuListCart = document.querySelectorAll(".menu-list")[1],
        totalPrice = document.getElementById("total-price"),
        checkItems = menuListItem.querySelectorAll('input[type="checkbox"]:checked'),
        menuListFooter = menuListCart.querySelector(".menu-list_footer"),
        menuListCartContent = menuListCart.querySelector(".menu-list_content");
    menuListCartContent.innerHTML = "";
    checkItems.forEach((item) => {
        const itemName = item.parentElement.querySelector("label").innerText;
        total += Number(item.value);
        menuListCartContent.innerHTML += `<div class="menu-list_item-name"></div><label>${itemName}</label></l`  
    }) 
    totalPrice.innerText = `${total}$`;
    if (total > 0){
        menuListFooter.style.display = "block";
    } else {
        menuListFooter.style.display = "none";
    }
}