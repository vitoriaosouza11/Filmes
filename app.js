async function fnPegarFilmes(){
    let filmes = await fetch ("dados-filmes.json")
    let filmesTratados = await filmes.json()

    filmesTratados.slice(0,4).forEach((filmeAtual)=> {
        document.querySelector(".lista-filmes").innerHTML += `
        <div class="card-filme">
        <img src="${filmeAtual.foto}">
        <h3>${filmeAtual.titulo}</h3>
        <span> ⭐ ${filmeAtual.avaliacao}</span>
        </div>
         `
    })
}
 
 
fnPegarFilmes()
 
function fnMontarCartao(filmeAtual) {
    document.querySelector(".lista-filmes").innerHTML += `
        <div class="card-filme">
        <img src="img/${filmeAtual.foto}">
        <h3>${filmeAtual.titulo}</h3>
        <span> ⭐ ${filmeAtual.avaliacao}</span>
        </div>
         `
}
 
 