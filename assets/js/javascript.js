let i = 0

async function vlrApi(){
    const url = await fetch(`https://valorant-api.com/v1/agents`)
    let info = await url.json()

    console.log(info)

    let imagensAgentes = document.querySelector("#imagensAgentes")
    let nomeAgentes = document.querySelector("#nomeAgentes")
    
    nomeAgentes.innerHTML = `
        <div class="agents">
           <p>${info.data[i].displayName}</p>  
        </div>

    `
        imagensAgentes.innerHTML = `
        <div class="agents">
           <img src="${info.data[i].displayIcon}">  
        </div>

    `
    if(true == 1) {
        i++     
    }
    
    if(i >= info.data.length){
        i = 0
    }
}
