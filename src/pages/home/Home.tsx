import React from "react";

function Home() {
  return (
    // fragmento pra agrupar lista de elementos dentro de uma unica situação agrupa tds elementos html <> </>
    <>
      <div className="bg-indigo-900 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Sejam Bem- Vindos</h2>
            <p className="text-xl">Expresse aqui seus pensamentos</p>
            <div className="flex justify-around gap-4">
              <div className="rounded text-white border-white border-solid border-2 py-2 px-4"></div>
              Nova Postagem
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://i.imgur.com/fyfri1v.png"
              alt=""
              className="w-2/3"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
