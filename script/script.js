let countNumber = ""
let count = document.querySelector(".number")
let moreButton = document.querySelector("#more")
let lessButton = document.querySelector("#less")
let information = document.querySelector("#notification")



function moreAdd(){

    count.innerHTML = "0" + countNumber
            
    if(countNumber < 10){

        countNumber++
        information.innerHTML = `<b>Atenção: </b>Clique no botão de <b>"+"</b> para contar de forma crescente e clique no botão de <b>"-"</b> para contar de forma decresente.`

    }else{

        information.innerHTML = `<b>Atenção: </b> O contador só vai até 10, use o botão de <b>"-"</b> para descontar.`
    }
}

function lessSub(){

    count.innerHTML = "0" + countNumber

    if(countNumber >  0){
        countNumber--
        information.innerHTML = `<b>Atenção: </b>Clique no botão de <b>"+"</b> para contar de forma crescente e clique no botão de <b>"-"</b> para contar de forma decresente.`

    }else{

        information.innerHTML = `<b>Atenção: </b> O contador só vai até 0, use o botão de <b>"+"</b> para acrescentar.`
    }
}


moreButton.addEventListener("click", moreAdd)
lessButton.addEventListener("click", lessSub)


