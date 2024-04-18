import Link from "next/link";
import Todo from "../app/components/todo";
import {prisma} from "./db";

export type TodoType = {
    id: string;
    title: string;
    complete: boolean;
    deleted: boolean;
};

export default async function Home() {

    function getTodos() {
        return prisma.todo.findMany({
        });
    }
    const todos = await getTodos();

    return (
        <>
            <header className="flex justify-between items-center pb-5">
                <h1 className="text-2xl underline underline-offset-4 ">Todos</h1>
                <Link
                    href="/newitem"
                    className="border border-slate-300 text-slate-300 rounded px-2 py-1 hover:bg-zinc-700 focus-within:bg-zinc-700 outline-none"
                >
                    New
                </Link>
            </header>


            <ul className="pl-4">
                {
                    todos.map(
                        (todo : TodoType)=> <div className="bg-green-200 flex flex-row items-center border border-slate-300 text-slate-300 rounded px-4 py-2 hover:bg-zinc-700 focus-within:bg-black-700 outline-none text-lg">{todo.id}{todo.title}</div>)


                }
            </ul>
        </>
    );
}
