import React from "react";
import { FormatRupiah } from "@arismun/format-rupiah";
import dayjs from "dayjs";
import "dayjs/locale/id";
import { RiEmotionSadLine } from "react-icons/ri";

function LastOrderComponent({ order }) {
    console.log(order);

    return (
        <>
            <span className="text-semibold flex justify-start mx-5 font-semibold">
                Last Order :
            </span>
            <div className="overflow-x-auto mx-5 pt-2 pb-20">
                {order.length < 1 ? (
                    <div className="flex flex-col justify-center items-center gap-2 mt-5 text-gray-400">
                        <p className="text-center font-semibold text-2xl">
                            ~ No Order Yet ~
                        </p>
                        <RiEmotionSadLine className="text-3xl" />
                    </div>
                ) : (
                    <table className="table table-xs table-zebra">
                        <thead className="text-center font-semibold">
                            <tr>
                                <th>#</th>
                                <th>Items Name</th>
                                <th>Amount</th>
                                <th>Count</th>
                                <th>Status</th>
                                <th>Date Order</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order.map((ord, i) => (
                                <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>{ord.stock_stuff.nama_barang}</td>
                                    <td>{ord.jumlah}</td>
                                    <td>{ord.piece.nama_satuan}</td>

                                    <td>{ord.approve}</td>

                                    <td>
                                        {dayjs(ord.created_at)
                                            .locale("id")
                                            .format("DD MMMM YYYY")}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
}

export default LastOrderComponent;
