import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { AuthButton } from "@/modules/auth/ui/components/auth-button";

export const HomeNavbar = () => {
  return (
    <div className="fixed top-0 z-50 h-16 right-0 left-0 bg-white  px-2 pr-5 flex items-center    ">
      <div className="flex gap-4 items-center w-full">
        {/* Menu and Logo */}
        <div className="flex items-center flex-shrink-0">
          <SidebarTrigger />

          <Link href="/">
            <div className="flex p-4 items-center gap-1 ">
              <Image src="/logo.svg" alt="logo" width={32} height={32} />
              <p className="text-xl font-semibold tracking-tight">NewTube</p>
            </div>
          </Link>
        </div>
        {/* Search bar */}
        <div className="flex-1 flex justify-center max-w-[720px] mx-auto">
          <SearchInput />
        </div>
        <div className="flex-shrink-0 items-center ">
          <AuthButton />
        </div>
      </div>
    </div>
  );
};
