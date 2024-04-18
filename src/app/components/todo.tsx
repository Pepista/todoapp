
export default function Todo() {
    return (
        <main className=" flex min-h-screen justify-center items-center bg-slate-50 ">
            <div className="bg-slate-300 rounded-3xl py-6  h-[400px] w-[450px] flex flex-col text-slate-800">
                <h1 className="text-3xl text-center">My to dos</h1>
                <div className="mx-8 mt-4 mb-6">
                    <form className="flex gap-3 items-center">
                        <input type="text" name="title" placeholder="New todo" classname=" border border-slate-400 rounded-full flex-1  py-1 px-2 outline-none focus-within:border-slate-100 bg-slate-50 focus-within:bg-slate-100 placeholder:text-slate-300" required=""/>
                        <button className="  bg-slate-50 rounded-full p-1 border border-slate-400 text-slate-400 hover:text-slate-500 text-base hover:ring-0 hover:ring-slate-100 hover:border-slate-500">
                            <p className=" text-center">+</p>
                        </button>
                    </form>
                </div>
                <ul className="px-6">
                    <li className="flex px-4">
				<span className="flex gap-2 flex-1">
					<input type="checkbox" name="check" className="peer cursor-pointer accent-slate-300 "/>
					<label htmlFor="" className="peer-checked:line-through peer-checked:text-slate-500 cursor-pointer">
						Todo 1
					</label>
				</span>
                        <button className="text-slate-500  hover:text-slate-800 mr-3">
                            X
                        </button>
                    </li>
                </ul>
            </div>
        </main>
    );
}