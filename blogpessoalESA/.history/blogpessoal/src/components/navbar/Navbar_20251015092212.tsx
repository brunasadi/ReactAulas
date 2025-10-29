function Navbar(){
    return(
        <>
        <div className="w-full flex justify-center py-4 bg-indigo-900 text-white">
            <div className="container flex justify-between text-lg mx-8">
                <Link to='/home' className="text-2xl font-bold"
                <div className="flex gap-4">
                    Postagens
                    Temas
                    Cadastrar Temas
                    Perfil
                    Sair
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar