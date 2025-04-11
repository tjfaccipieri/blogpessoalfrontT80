//rfce -> criar a função do componente e fazeer o export dela

import CardPostagem from "../cardPostagem/CardPostagem"

// bootstrap // bulmacss // materialUI // chackraUI // shadcnUI // 

function ListaPostagem() {
  return(
    <>
      <div className="bg-red-300 w-full flex justify-center">
        <div className="container bg-indigo-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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