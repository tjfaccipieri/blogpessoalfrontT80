
function CardPostagem() {
  return (
    <div className="border rounded bg-indigo-200">
      <div className="bg-indigo-950 flex items-center gap-4 p-2">
        <img src="https://github.com/tjfaccipieri.png" alt="" className="h-12 rounded-full" />
        <h2 className="text-white text-lg font-bold">Thiago Faccipieri</h2>
      </div>
      <div className="bg-white">Textos</div>
      <div className="flex">
        <button className="p-2 w-full bg-indigo-400 hover:bg-indigo-800 cursor-pointer">Editar</button>
        <button className="p-2 w-full bg-red-400 hover:bg-red-800 cursor-pointer">Deletar</button>
      </div>
    </div>
  )
}

export default CardPostagem