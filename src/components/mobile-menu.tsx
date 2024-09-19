import { HomeIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function MobileMenu() {
  return (
    <div className="md:hidden fixed bottom-8 h-12 rounded-lg w-8/12 bg-white border left-1/2 -translate-x-1/2 flex justify-around items-center p-4">
      <Button className="bg-white text-black hover:bg-white" asChild>
        <Link href={"/home"}>
          <HomeIcon />
        </Link>
      </Button>
      <Button className="bg-white text-black hover:bg-white" asChild>
        <Link href={"/home"}>
          <HomeIcon />
        </Link>
      </Button>
      <Button className="bg-white text-black hover:bg-white" asChild>
        <Link href={"/home"}>
          <HomeIcon />
        </Link>
      </Button>
      <Button className="bg-white text-black hover:bg-white" asChild>
        <Link href={"/home"}>
          <HomeIcon />
        </Link>
      </Button>
    </div>
  );
}
