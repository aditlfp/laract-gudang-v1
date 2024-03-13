import Modal from "@/Components/Modal";
import { FormatRupiah } from "@arismun/format-rupiah";
import dayjs from "dayjs";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaRegFaceSadTear } from "react-icons/fa6";

export default function OrderListComponent({ order }) {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      {order.data.length != 0 ? (
        <ListData order={order} toggleModal={toggleModal} />
      ) : (
        <NoData />
      )}
      {modalOpen && <OrderModal show={modalOpen} toggleModal={toggleModal} />}
    </>
  );
}

const OrderModal = ({ show, toggleModal }) => {
  return (
    <>
      {show && (
        <div className="fixed inset-0 bg-slate-400/70 transition-all ">
          <AnimatePresence>
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <div className="">
                Aku Modal
                <button onClick={() => toggleModal()}>X</button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </>
  );
};

const ListData = ({ order, toggleModal }) => {
  return (
    <table className="table table-xs table-zebra capitalize bg-white rounded-md">
      <thead>
        <tr>
          <th className="bg-sky-300 rounded-tl-md">#</th>
          <th className="bg-sky-300">Client</th>
          <th className="bg-sky-300">Items name</th>
          <th className="bg-sky-300">Price</th>
          <th className="bg-sky-300">Amount</th>
          <th className="bg-sky-300">Piece</th>
          <th className="bg-sky-300">Total</th>
          <th className="bg-sky-300">Status</th>
          <th className="bg-sky-300">Date</th>
          <th className="bg-sky-300 rounded-tr-md">Action</th>
        </tr>
      </thead>
      <tbody>
        {order.data.map((ord, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{ord.client ? ord.client.name : "~ Empty ~"}</td>
            <td>
              {ord.stock_stuff ? ord.stock_stuff.nama_barang : "~ Empty ~"}
            </td>
            <td>
              {ord.stock_stuff && (
                <FormatRupiah value={ord.stock_stuff.harga_satuan} />
              )}
            </td>
            <td>{ord.jumlah}</td>
            <td>{ord.piece ? ord.piece.nama_satuan : "~ Empty ~"}</td>
            <td>
              {ord.stock_stuff && (
                <FormatRupiah
                  value={
                    parseInt(ord.jumlah) *
                    parseInt(ord.stock_stuff.harga_satuan)
                  }
                />
              )}
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
            <td>{dayjs(ord.tanggal).locale("id").format("DD MMMM YYYY")}</td>
            <td>
              <button
                onClick={() => toggleModal()}
                className="btn btn-xs btn-info text-white"
              >
                Open Order
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const NoData = () => {
  return (
    <>
      <div className="text-center my-2 bg-white p-10 rounded-md shadow-sm">
        <span className="text-center text-gray-400 font-bold flex flex-col gap-y-2 justify-center items-center">
          <FaRegFaceSadTear className="text-2xl" />
          <span className="text-sm italic">- Data Not Available -</span>
        </span>
      </div>
    </>
  );
};
