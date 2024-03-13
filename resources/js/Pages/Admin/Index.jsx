import OrderIndex from "@/Components/Order/OrderIndex";
import OrderCreate from "@/Components/Order/OrderCreate";
import { useState } from "react";
import { PiPackageDuotone } from "react-icons/pi";
import { RiBookReadLine } from "react-icons/ri";
import { Head } from "@inertiajs/react";
import NavbarComponent from "@/Components/NavbarComponent";

export default function Index({ user, order }) {
  const [component, setComponent] = useState("admin");

  let isLink;
  if (component === "orderI") {
    isLink = <OrderIndex order={order} />;
  } else if (component === "orderC") {
    isLink = <OrderCreate />;
  }
  // console.log(usePage().props.ziggy.location);
  return (
    <>
      <Head title="ADMIN PANEL" />
      <div class="min-h-screen bg-sky-100">
        <NavbarComponent auth={user} />
        <div className="w-full h-[89vh] flex gap-4">
          <div className="w-1/4 m-5 p-2 drop-shadow-md bg-sky-500 rounded-lg ">
            <span>
              <p className="text-center text-white font-semibold">Menu Admin</p>
              <hr />
              <ul className="menu">
                <li>
                  <details>
                    <summary className="w-full">
                      <span className="flex items-center gap-2 text-base font-medium">
                        <PiPackageDuotone /> <p>Order</p>
                      </span>
                    </summary>
                    <ul>
                      <li onClick={() => setComponent("orderI")}>
                        <span className="flex gap-2">
                          <RiBookReadLine />
                          <button>Data Orders</button>
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
