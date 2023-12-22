import React from 'react';
import MinusIcon from '../assets/images/icon-minus.svg';
import PlusIcon from '../assets/images/icon-plus.svg';
import Cart from '../assets/images/icon-cart-w.svg';
import { GlobalContext } from './GlobalContext';


const Description = () => {

  const global = React.useContext(GlobalContext);


  return (
    <section className="w-full pt-5 px-6">

      <div className='w-full flex flex-col xl:mt-[2.6rem]'>

        <div className='xl:ml-[2.4rem]'>
            <p className="text-orange uppercase font-bold text-sm xl:text-[.96rem]">Sneaker Company</p>
        </div>
        <div className="mt-3 xl:mt-[1.1rem] xl:ml-[2.4rem]">
            <h1 className="text-[28px] font-semibold leading-[32px] text-veryDarkBlue font-kumbh xl:text-[2.75rem] xl:leading-[2.8rem] dark:text-dark-darkText">Fall Limited Edition Sneakers</h1>
        </div>
        <div className="mt-4 xl:mt-[2.5rem] xl:ml-[2.4rem]">
            <p className="text-[.939rem] font-medium text-gravishBlue leading-[1.6rem] xl:text-[1rem]">These low-profile sneakers are your perfect casual wear companion. Featuring a
            durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        </div>

        <div className="w-full flex justify-between items-center mt-6 xl:flex-col xl:items-start xl:ml-[2.4rem]">
          <div className="flex items-center gap-4">
            <span className="font-bold text-[1.86rem] dark:text-paleOrange"><span>$</span>{(global.itemPrice * global.discount).toFixed(2)}</span>
            <span className="py-[.1rem] px-[.6rem] bg-paleOrange flex items-center justify-center rounded-md text-orange font-semibold">{global.discount * 100 + '%'}</span>
          </div>
          <div>
            <span className="font-bold line-through text-gravishBlue"><span>$</span>{global.itemPrice}</span>
          </div>
        </div>

        <div className='xl:grid xl:grid-cols-[35%_59%] xl:gap-3 xl:mt-5 xl:ml-[2.4rem] items-center'>
          <div className='w-full flex items-center justify-between px-2 py-2 bg-lightGravishBlue rounded-md mt-5'>
            <div className='w-10 h-10 flex items-center justify-center cursor-pointer' onClick={global.reduceItem}>
              <img src={MinusIcon} alt="Minus icon" />
            </div>
            <span className='font-bold'>{global.item}</span>
            <div className='w-10 h-10 flex items-center justify-center cursor-pointer' onClick={global.addItem}>
              <img src={PlusIcon} alt="Plus icon" />
            </div>
          </div>

          <div className='w-full flex items-center justify-center bg-[#FF7D1B] text-white rounded-[10px] gap-4 mt-4 py-4 xl:mt-[20px] cursor-pointer' onClick={global.addCart}>
            <img src={Cart} alt="Carrinho" className='text-white w-[1.1rem]' />
            <input type="button" value="Add to cart" className='text-md font-semibold cursor-pointer'/>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Description
