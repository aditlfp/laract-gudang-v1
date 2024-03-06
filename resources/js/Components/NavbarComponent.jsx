import { FaSignOutAlt } from "react-icons/fa";

export default function NavbarComponent({ auth }) {
    return (
    <>
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <span className="text-lg bg-gray-100 rounded-md p-3 font-semibold mx-2">{ auth.name }</span>
            </div>
            <div className="navbar-end">
                <a className="btn btn-error text-white text-xl"><FaSignOutAlt /></a>
            </div>
            </div>
    </>
  )
}