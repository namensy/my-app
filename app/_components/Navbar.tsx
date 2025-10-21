import { NextPage } from "next";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

interface Props {}

const Navbar: NextPage<Props> = ({}) => {
  const session = true;

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Contact Manager
        </Link>
        <div className="flex items-center space-x-4">
          {session ? (
            <>
              <Link href="/contact" className="hover:text-blue-600 mr-8">
                Contacts
              </Link>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link href="/Login" className="hover:text-blue-600 mr-5">
                Login
              </Link>
              <Link href="/register" className="hover:text-blue-600">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
