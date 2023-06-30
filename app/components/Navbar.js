import Link from "next/link";

function Navbar() {
  return (
    <header className="bg-slate-800 py-4">
      <nav className="flex justify-between items-center w-4/5 m-auto ">
        <Link href={"/"} className="text-cyan-400 font-bold text-2xl">
          DevCt.
        </Link>
        <Link href={"/addTopic"} className="btn btn-outline btn-info">
          Add Topic
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
