import { FaCartShopping } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";

export default function MenuMobile() {
    return (
        <>
            <div className="btm-nav xs:block md:hidden">
                <button className="bg-blue-200 text-blue-600 hover:bg-blue-400 hover:text-blue-800 transition-all ease-in-out duration-200">
                    <FaCartShopping className="text-md" />
                    <span className="btm-nav-label font-semibold text-[14px]">
                        Orders
                    </span>
                </button>
                <button className="bg-pink-200 text-pink-600 hover:bg-pink-400 hover:text-pink-800 transition-all ease-in-out duration-200">
                    <FaHouse className="text-md" />
                    <span className="btm-nav-label font-semibold text-[14px]">
                        Home
                    </span>
                </button>
                <button className="bg-teal-200 text-teal-600 hover:bg-teal-400 hover:text-teal-800 transition-all ease-in-out duration-200">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                    </svg>
                    <span className="btm-nav-label font-semibold text-[14px]">
                        Statics
                    </span>
                </button>
            </div>
        </>
    );
}
