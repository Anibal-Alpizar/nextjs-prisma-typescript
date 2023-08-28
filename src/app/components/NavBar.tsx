import Link from "next/link";

function NavBar() {
  return (
    <nav className="flex justify-between items-center py-4  ">
      <Link href={"/"}>
        <h3 className="text-2xl font-bold">Next CRUD</h3>
      </Link>
      <ul>
        <li>
          <Link className="text-slate-200 hover:text-slate-400" href="/new">
            New
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
