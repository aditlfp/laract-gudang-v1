import { Head } from "@inertiajs/react";
import OrderListComponent from "./OrderList/OrderListComponent";

export default function OrderIndex({ order }) {
    return (
        <>
            <Head title="DATA ORDERS"/>
            <div className="bg-sky-500 pt-10 pb-5 px-3 rounded-md shadow-md">
                <p class="text-center font-semibold text-2xl my-10">
                    Data Orders
                </p>
                <div>
                   <OrderListComponent order={order}/>
                </div>
            </div>
        </>
    );
}
