import { RiReactjsLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiSqlite } from "react-icons/si";

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl">Technologies</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
    <RiReactjsLine className="text-7xl text-cyan-500" /> {/* React */}
</div>
<div className="rounded-2xl border-4 border-neutral-800 p-4">
    <SiTailwindcss className="text-7xl text-teal-400" /> {/* Tailwind CSS */}
</div>
<div className="rounded-2xl border-4 border-neutral-800 p-4">
    <SiFirebase className="text-7xl text-yellow-500" /> {/* Firebase */}
</div>
<div className="rounded-2xl border-4 border-neutral-800 p-4">
    <SiMongodb className="text-7xl text-green-500" /> {/* MongoDB */}
</div>
<div className="rounded-2xl border-4 border-neutral-800 p-4">
    <SiSqlite className="text-7xl text-blue-500" /> {/* SQLite */}
</div>
<div className="rounded-2xl border-4 border-neutral-800 p-4">
    <SiMysql className="text-7xl text-orange-800" /> {/* MySQL */}
</div>


            </div>
        </div>
    )
}

export default Technologies;