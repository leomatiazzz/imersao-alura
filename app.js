function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Remove espaços em branco extras do início e do fim da string
    campoPesquisa = campoPesquisa.trim();

    //se campoPesquisa for uma string sem nada
    if(campoPesquisa == ""){
        section.innerHTML = "Digite uma palavra válida para pesquisa."
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa);
   

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        //se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            //Cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;

        }
        // Constrói o HTML para cada item do resultado da pesquisa
        
    }

    if(!resultados){
        resultados = "Nada foi encontrado."
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}




