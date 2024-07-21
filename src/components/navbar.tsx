import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Sidebar } from "./sidebar";
import { Avatar } from "./avatar";

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center justify-start gap-2 p-3">
        <Link href="/">ZZZ</Link>
      </div>
      <div className="flex flex-row items-center justify-end gap-3 p-3">
        <div className="hidden flex-row items-center justify-end gap-3 md:flex">
          <Link href={"/public"}>public</Link>
          <Link href={"/protected"}>protected</Link>
          <Link href="/private">private</Link>
          <ModeToggle />
          <Avatar />
        </div>
        <div className="block md:hidden">
          <Sidebar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
