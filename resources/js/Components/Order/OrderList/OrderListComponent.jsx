import { FormatRupiah } from "@arismun/format-rupiah"
import dayjs from "dayjs"
import { FaRegFaceSadTear } from "react-icons/fa6";

export default function OrderListComponent({ order }) {
    return (
    <>
        {order.data.length  != 0?listData({ order }):noData()}
    </>
  )
}


const listData = ({ order }) => {
    return (
    <table className="table table-xs table-zebra capitalize">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Client</th>
                    <th>Items name</th>
                    <th>Price</th>
                    <th>Amount</th>
                    <th>Piece</th>
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
                    <td>{ord.client? ord.client.name : "~ Empty ~"}</td>
                    <td>{ord.stock_stuff ? ord.stock_stuff.nama_barang : "~ Empty ~"}</td>
                    <td>
                        {ord.stock_stuff &&
                            <FormatRupiah value={ord.stock_stuff.harga_satuan} />
                        }
                    </td>
                    <td>{ord.jumlah}</td>
                    <td>{ord.piece ? ord.piece.nama_satuan : "~ Empty ~"}</td>
                    <td>
                        {ord.stock_stuff &&
                            <FormatRupiah
                                value={
                                    parseInt(ord.jumlah) *
                                    parseInt(
                                        ord.stock_stuff.harga_satuan
                                    )
                                }
                            />
                        }
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
                        {dayjs(ord.tanggal)
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
    )
}

const noData = () => {
    return (
        <>
            <div className="text-center my-2 bg-white p-10 rounded-md shadow-sm">
                <span className="text-center text-gray-400 font-bold flex flex-col gap-y-2 justify-center items-center">
                    <FaRegFaceSadTear className="text-2xl"/>
                    <span className="text-sm italic">
                        - Data Not Available -
                    </span>
                </span>
            </div>
        </>
    );
}