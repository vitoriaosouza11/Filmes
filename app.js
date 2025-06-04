// JSON - javascript object notation

let filme = {
    titulo: "Jurassic Park 0",
    foto: "filme1.webp",
    avaliacao: "10/10",
    duracao: "1h50m"
}

console.log(filme)

let filme2 = {
    titulo: "Karate kid",
    foto: "filme2.jpg",
    avaliacao: "9/10",
    duracao: "2h20m"
}

let filme3 = {
    titulo: "Lilo e Stitch 2",
    foto: "filme3.jpg",
    avaliacao: "8/10",
    duracao: "2h06m"
}

let filme4 = {
    titulo: "Pecadores",
    foto: "filme4.jpg",
    avaliacao: "7/10",
    duracao: "1h50m"
}

function fnMontarCartao(filmeAtual){
    console.log(`
        <div class="card-filme">
            <img src="img/${filmeAtual.foto}">
            <h3>${filmeAtual.titulo}</h3>
            <span>⭐ ${filmeAtual.avaliacao}</span>
        </div>
        `)
}

//DOM 

fnMontarCartao(filme)
fnMontarCartao(filme2)
fnMontarCartao(filme3)
fnMontarCartao(filme4)