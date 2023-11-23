import { buttonVariants } from "@/app/components/ui/button";
import { HandMetal } from "lucide-react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0 ">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <HandMetal />
        </Link>
        <Link className={buttonVariants()} href="/sign-in">
          Sing in
        </Link>
      </div>
    </div>
  );
}
export default Navbar;