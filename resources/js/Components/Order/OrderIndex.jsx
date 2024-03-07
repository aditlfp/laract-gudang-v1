import Index from "@/Pages/Admin/Index";
import dayjs from "dayjs";
import { FormatRupiah } from "@arismun/format-rupiah";

export default function OrderIndex({ order }) {
    console.log(order);
    console.log(order.data[0].total);
    return (
        <>
            <div>
                <p class="text-center font-semibold text-2xl my-10">
                    Order Data
                </p>
                <div>
                    <table className="table table-xs table-zebra">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Client</th>
                                <th>Items name</th>
                                <th>RP. piece</th>
                                <th>Amount</th>
                                <th>Count</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order.data.map((ord, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{ord.client.name}</td>
                                    <td>{ord.stock_stuff.nama_barang}</td>
                                    <td>
                                        <FormatRupiah
                                            value={ord.stock_stuff.harga_satuan}
                                        />
                                    </td>
                                    <td>{ord.jumlah}</td>
                                    <td>{ord.piece.nama_satuan}</td>
                                    <td>
                                        <FormatRupiah
                                            value={
                                                parseInt(ord.jumlah) *
                                                parseInt(
                                                    ord.stock_stuff.harga_satuan
                                                )
                                            }
                                        />
                                    </td>
                                    <td>
                                        <span
                                            className={
                                                ord.approve == "waiting"
                                                    ? "bg-yellow-500 p-1 rounded-sm text-white font-semibold text-center"
                                                    : "bg-green-500 p-1 rounded-sm text-white font-semibold text-center"
                                            }
                                        >
                                            {ord.approve}
                                        </span>
                                    </td>
                                    <td>
                                        {dayjs(ord.created_at)
                                            .locale("id")
                                            .format("DD MMMM YYYY")}
                                    </td>
                                    <td>
                                        <button className="btn btn-xs btn-info text-white">
                                            Open Order
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
