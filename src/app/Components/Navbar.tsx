import Link from "next/link";
import Logo from "@/app/Components/Logo";
import { Links } from "@/Data/Links";

export default function Navbar() {
    return (
        <nav className="absolute w-full z-10 flex items-center justify-around border-b-[1px]">
            <div>
                <Link href={"/"}>
                    <Logo width={250} height={100} />
                </Link>
            </div>
            <div className="hidden sm:block">
                <ul className="flex">
                    {Links.map(({ id, name, URL }) => (
                        <li className="text-white font-semibold	 text-xl" key={id}>
                            <Link className="px-6" href={URL}>{name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
