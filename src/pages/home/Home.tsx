import React from "react";

function Home() {
  return (
    // fragmento pra agrupar lista de elementos dentro de uma unica situação agrupa tds elementos html <> </>
    <>
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <div
            style={{
              width: "80vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2>Seja bem vindo</h2>
            <p>Expresse seus pensamentos e opiniões</p>

            <div
              style={{
                width: "80vw",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src="https://i.imgur.com/VpwApCU.png"
                alt="img da pag home"
                width="400px"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
