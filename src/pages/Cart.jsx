import React from 'react';
import macbook from '../assets/macbook.png';
import { FaTrashAlt } from 'react-icons/fa';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

function Cart() {
  return (
    <div className="flex justify-center  h-[83.2vh] px-7 pt-10">
      {/* Product Section */}
      <div className="w-2/3 p-8 overflow-y-scroll">
        <div className="space-y-4 ">
          {/* Product Card */}
          <div className="flex items-center py-4  bg-light--gray border-b-2 border-b-black">
            <img src={macbook} alt="macbook" className="w-1/6 h-24 mr-4 pl-1" />
            <div className='w-2/3'>
                <h2 className="pb-8 text-2xl">Macbook Pro 13"</h2>
                <div className="flex flex-row items-center">
                    <button><AiOutlinePlusCircle className="h-6 w-6" /></button>
                    <p className="mx-2">1</p>
                    <button><AiOutlineMinusCircle className="h-6 w-6" /></button>
                </div>
            </div>
            <div className='flex flex-col justify-end items-end ml-7 '>
                <button><FaTrashAlt className='h-6 w-6 mb-10' /></button>
                <h3 className='text-lg font-bold'>40000 TL</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Space */}
      <div className="w-12" />

      {/* Order Detail Section */}
      <div className="flex flex-col justify-center items-center w-1/3 h-2/5 bg-light--gray border border-black">
        <h2 className="text-2xl font-bold mb-4">Sipariş Detayı</h2>
        <hr className="border-black w-full mb-4" />
        <div className="p-4 mb-4">
          <h3 className="text-lg font-bold">Toplam Tutar : <span className='-text--turquoise'>40000 TL</span></h3>
        </div>
        <button className="bg-black text-white py-2 px-4 rounded-xl w-1/4">
          Satın Al
        </button>
      </div>
    </div>
  );
}

export default Cart;
