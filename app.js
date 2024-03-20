let dados = document.querySelector("#dados")
let perfil = document.querySelector("#perfil")
let foto = document.querySelector("#foto")

// controle de sessão.
auth.onAuthStateChanged(firebaseUser => {

    if(firebaseUser){
        console.log(auth.currentUser.email + "logado" )
        dados.style.display = "block"
        perfil.innerHTML = auth.currentUser.email
        + " " + auth.currentUser.displayName
        //redirecionarPagina();
    }
    else {
        dados.style.display = "none"

    }
    
})


let emailCad = document.querySelector("#emailCad")
let senhaCad = document.querySelector("#senhaCad")
let senhaCad2 = document.querySelector("#senhaCad2")

let btnCad =  document.querySelector("#btnCad")

btnCad.addEventListener("click", cadastrar ) 

function cadastrar(){
    if (senhaCad.value === senhaCad2.value) {
        auth.createUserWithEmailAndPassword(emailCad.value, senhaCad.value).
        then(function(user){ console.log(auth.currentUser.email)},
            function(error){ console.log(error.message)})    
    }    
}

let emailEntrar = document.querySelector("#emailEntrar")
let senhaEntrar = document.querySelector("#senhaEntrar")
let btnEntrar =  document.querySelector("#btnEntrar")
let btnGoogle =  document.querySelector("#btnGoogle")




