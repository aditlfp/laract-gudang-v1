import { Link } from "@inertiajs/react";
import { FaSignOutAlt } from "react-icons/fa";

export default function NavbarComponent({ auth }) {
    // console.log(auth);
    return (
        <>
            <div className="navbar xs:fixed xs:top-0 bg-slate-100 xs:rounded-b-md drop-shadow-md">
                <div className="navbar-start">
                    <span className="text-sm bg-gray-100 rounded-md p-4 font-semibold mx-2">
                        {auth?.nama_lengkap}
                    </span>
                </div>
                <div className="navbar-end">
                    {auth &&
                        <Link href={route('logout')} method="POST" className="btn btn-error text-white text-md">
                            <span>Logout</span>
                            <FaSignOutAlt />
                        </Link>
                    }
                </div>
            </div>
        </>
    );
}
