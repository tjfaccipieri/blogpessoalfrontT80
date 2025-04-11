//rfce -> criar a função do componente e fazeer o export dela

import CardPostagem from "../cardPostagem/CardPostagem"

// Outras bibliotecas de estilização que tbm trabalham com responsividade nativa
//  bootstrap // bulmacss // materialUI // chackraUI // shadcnUI // 

//criação básica de um componente React.
/* 
function NomeDoComponente() {
  return(
    <>Conteudo do componente</>
  )
}

export default NomeDoComponente
*/
function ListaPostagem() {
  return(
    <>
    {/* div inicial que vai pegar a tela com a largura total, e tudo que estiver dentro, ficará centralizado */}
      <div className="bg-red-300 w-full flex justify-center">
        {/* div interna que tera o tamanho de um container (vai se ajustar automaticamente de acordo com a tela do usuário), e exibir o conteudo interno em formato grid (parecido com uma tabela) */}
        <div className="container bg-indigo-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* grid-cols-1: exibir a grade com 1 coluna apenas, um item abaixo do outro */}
          {/* md:grid-cols-2: quando a tela for média, mostrar com 2 colunas */}
          {/* lg:grid-cols-3: quando a tela for larga, exibir com 3 colunas */}

          {/* chamar o componente CardPostagem por quantas vezes forem necessárias */}
          <CardPostagem />
          <CardPostagem />
          <CardPostagem />
          <CardPostagem />
          <CardPostagem />
        </div>
      </div>
    </>
  )
}

export default ListaPostagem