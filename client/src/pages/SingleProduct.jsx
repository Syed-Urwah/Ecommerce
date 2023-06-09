import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductSwipper from '../components/ProductSwipper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function SingleProduct() {

  const [product, setProduct] = useState({});
  const [count, setCount] = useState(0)

  const fetchProduct = async () => {
    const response = await axios.get('https://dummyjson.com/products/1');
    setProduct(response.data);
    console.log(response.data);
  }

  function IncreamentCount() {
    setCount((prev) => prev + 1);
    console.log(count)
  }

  function decreamentCount() {
    setCount((prev) => prev - 1);
  }

  useEffect(() => {
    fetchProduct();
  }, [])

  return (
    <section className='w-screen py-20 px-5 sm:px-10 flex flex-col md:flex-row gap-4 md:items-start items-center'>
      <div className="left md:w-3/6 w-full">
        <ProductSwipper product={product} />
      </div>

      <div className="right md:w-1/2 h-96 lg:h-[500px] flex flex-col items-center md:items-start gap-5">
        <div className="heading">
          <h1 className='md:text-6xl text-4xl'>Smart Digital Watch</h1>
        </div>

        <div className="price">
          <p className='bg-[#3584e4] px-2 py-2 w-fit text-blue-800 font-bold rounded-md'>{`Rs ${product.price}`}</p>
        </div>

        <div className="description">
          <p className='text-gray-600'>{product.description}</p>
        </div>

        <div className="buy bg-white h-16 w-full flex items-center sm:justify-start justify-center gap-4">
          <div className="increase flex lg:gap-8 gap-2">
            <button disabled={count === 0} onClick={decreamentCount} className='border border-gray-600 rounded-full px-2 py-2'><FontAwesomeIcon icon={faMinus} size='xl' /></button>
            <p className='text-4xl'>{count}</p>
            <button onClick={IncreamentCount} className='border border-gray-600 rounded-full px-2 py-2'><FontAwesomeIcon icon={faPlus} size='xl' /></button>
          </div>

          <button className=' bg-[#3584e4] text-white text-xs lg:text-base px-4 py-2'>Buy</button>
          <p>Rs ${product.price * count}</p>
          <button className=' bg-[#3584e4] text-white text-xs lg:text-base px-4 py-2'>ADD TO CART </button>
        </div>
      </div>
    </section>
  )
}
