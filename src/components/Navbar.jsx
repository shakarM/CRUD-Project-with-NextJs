import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-700 text-slate-200 px-6 py-3">
      <Link className="font-bold" href="/">
        NextJs Project
      </Link>
      <Link
        className="bg-yellow-500 text-slate-700 px-4 py-2 rounded-[10px] hover:bg-yellow-600"
        href="/addTopic"
      >
        Add a topic
      </Link>
    </nav>
  );
};

export default Navbar;
