const modalButton = document.getElementById('button')

function openPop() {
    let addName = document.getElementById('name').value
    let addTel = document.getElementById('tel').value


    alert("Спасибо! Вам скоро перезвонят, " + addName + "!")

    document.getElementById("name").value = ""
    document.getElementById("tel").value = ""
}

modalButton.addEventListener('click', openPop)



const burgerMenu = document.getElementById('menu')

function openMenu() {
    let block = document.getElementById('block');
    if (block.style.display === "none")
        block.style.display = "flex"
    else
        block.style.display = "none";
}

burgerMenu.addEventListener('click', openMenu)