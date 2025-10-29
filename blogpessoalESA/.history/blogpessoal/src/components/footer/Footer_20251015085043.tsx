import { FacebookLogoIcon, InstagramLogoIcon,LinkedinLogoIcon } from "@phosphor-icons/react";

function Footer (){
    let data = new Date().getFullYear

    return(
        <>
        <div className="flex justify-center bg-indigo-900 text-white">
            <div className="container flex flex-col items-center py-4">
                <p className='text-xl font-bold'>
                    Blog Pessoal Fiap | Copyright : {data}
                </p>
                <p className=""
            </div>
        </div>
        </>
    )
}