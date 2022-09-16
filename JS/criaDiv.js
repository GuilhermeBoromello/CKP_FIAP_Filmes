function criaCard(filme)
{
    let div  = document.createElement("div")
    div.classList.add("cards")
    div.classList.add("cards-filmes")
    
    let img  = document.createElement("img")
    img.src = filme.imagem
    img.alt = `Poster do filme ${filme.titulo}`

    let p    = document.createElement("p")
    p.innerHTML = filme.titulo
    p.classList.add("titulo-filme")

    let span = document.createElement("span")
    let a    = document.createElement("a")
    a.setAttribute("href", "Detalhes.html")

    span.innerHTML = filme.nota
    
    a.innerHTML = "Detalhes"
    a.classList.add("btn-detalhes")

    div.appendChild(img)
    div.appendChild(p)
    div.appendChild(span)
    div.appendChild(a)

    return div
}