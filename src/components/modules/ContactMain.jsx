export function ContactMain() {
    return (
        <main className="flex-1 p-5 flex flex-col gap-10 pt-32 justify-center items-center">
            <h1 className='text-4xl font-semibold text-black/80 w-full text-center p-2.5 border-b-[1px] border-b-black/30'>Contate-nos</h1>
            <form className="w-full max-w-96 h-full flex flex-col gap-5 items-center justify-center">
                <label className="w-full flex flex-col gap-2.5">
                    <span className="text-black/50">
                        Nome:
                    </span>
                    <input className="w-full p-2.5 rounded ring-[1px] ring-black/30 focus:pl-4 transition-all" type="text" name="" placeholder="Digite seu nome" />
                </label>
                <label className="w-full flex flex-col gap-2.5">
                    <span className="text-black/50">
                        E-mail:
                    </span>
                    <input className="w-full p-2.5 rounded ring-[1px] ring-black/30 focus:pl-4 transition-all" type="text" name="" placeholder="Digite seu e-mail" />
                </label>
                <label className="w-full flex flex-col gap-2.5">
                    <span className="text-black/50">
                        Mensagem:
                    </span>
                    <textarea className="w-full p-2.5 rounded ring-[1px] ring-black/30 focus:pl-4 transition-all" type="text" name="" placeholder="Digite sua mensagem" />
                </label>
                <button className="cursor-pointer bg-black/85 w-full rounded p-2.5 font-bold text-white hover:bg-black/100 transition-all">
                    Enviar
                </button>
            </form>
        </main>
    )
}
