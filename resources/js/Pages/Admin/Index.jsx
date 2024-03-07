import OrderIndex from "@/Components/Order/OrderIndex";
import OrderCreate from "@/Components/Order/OrderCreate";
import { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { PiPackageDuotone } from "react-icons/pi";
import { RiAddFill, RiBookReadLine } from "react-icons/ri";
import { Link, usePage } from "@inertiajs/react";

export default function Index({ user, order }) {
    const [isCrut, setIsCrut] = useState("admin");

    let isLink;
    if (isCrut === "orderI") {
        isLink = <OrderIndex order={order} />;
    } else if (isCrut === "orderC") {
        isLink = <OrderCreate />;
    }
    // console.log(usePage().props.ziggy.location);
    return (
        <>
            <div class="min-h-screen">
                <div className="flex w-full h-[10vh] justify-between items-center bg-[#333A73] px-5 py-4">
                    <span className="text-white capitalize">
                        {user?.nama_lengkap}
                    </span>
                    <a className="btn btn-error text-white text-md">
                        <span>Logout</span>
                        <FaSignOutAlt />
                    </a>
                </div>
                <div className="w-full h-[90vh] flex gap-4">
                    <div className="w-1/4 m-5 p-2 drop-shadow-md bg-teal-500 rounded-lg ">
                        <span>
                            <p className="text-center text-white">Menu Admin</p>
                            <ul className="menu">
                                <li>
                                    <details>
                                        <summary className=" w-full">
                                            <span className="flex items-center gap-2">
                                                <PiPackageDuotone />{" "}
                                                <p>Order</p>
                                            </span>
                                        </summary>
                                        <ul>
                                            <li>
                                                <span className="flex gap-2">
                                                    <RiBookReadLine />
                                                    <button
                                                        onClick={() =>
                                                            setIsCrut("orderI")
                                                        }
                                                    >
                                                        Index
                                                    </button>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="flex gap-2">
                                                    <RiAddFill />
                                                    <button>create</button>
                                                </span>
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                            </ul>
                        </span>
                    </div>
                    <div className="w-3/4 m-5">{isLink}</div>
                </div>
            </div>
        </>
    );
}
