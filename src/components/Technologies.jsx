import { RiReactjsLine } from "react-icons/ri";
import { SiRedux, SiTailwindcss, SiFramer, SiNodedotjs, SiExpress, SiFirebase, SiSupabase, SiMongodb, SiPhp, SiSqlite, SiMysql } from "react-icons/si";

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h2 className="my-20 text-center text-4xl">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-500" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiRedux className="text-7xl text-purple-600" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTailwindcss className="text-7xl text-teal-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiFramer className="text-7xl text-pink-500" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiNodedotjs className="text-7xl text-green-600" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiExpress className="text-7xl text-gray-500" />
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiFirebase className="text-7xl text-yellow-500" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiSupabase className="text-7xl text-emerald-500" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-500" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiSqlite className="text-7xl text-blue-500" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMysql className="text-7xl text-orange-800" />
                </div>
            </div>

        </div>
    )
}

export default Technologies;