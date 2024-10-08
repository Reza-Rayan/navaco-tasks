import React from "react";
import { Product } from "../types/Product";

export default function Modal(product: Product) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-indigo-600 px-4 py-2 rounded-lg"
        type="button"
        onClick={() => setShowModal(true)}
      >
        show Details
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto lg:max-w-3xl w-full">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-700 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="lg:text-3xl text-lg text-center font-semibold">
                    {product.title}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto lg:flex gap-8">
                  <img
                    src={product.image}
                    alt=""
                    width={300}
                    className="rounded-xl mx-auto"
                  />
                  <div>
                    <p className="my-4 text-blueGray-500 text-lg text-justify leading-8">
                      {product.description}
                    </p>
                    <p className="my-4 text-blueGray-500 text-lg text-justify leading-8">
                      Category: {product.category}
                    </p>
                    <h4 className="font-semibold text-lg">
                      Price: {product.price}$
                    </h4>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
