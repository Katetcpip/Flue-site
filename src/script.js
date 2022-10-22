const modalButton = document.getElementById('button')

function openPop() {
    let addName = document.getElementById('name').value
    let addTel = document.getElementById('tel').value


    alert("Спасибо! Вам скоро перезвонят, " + addName + "!")

    document.getElementById("name").value = ""
    document.getElementById("tel").value = ""
}

modalButton.addEventListener('click', openPop)