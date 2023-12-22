import React from 'react';
import MenuIcon from '../assets/images/icon-menu.svg';
import Logo from '../assets/images/logo.svg';
import Cart from '../assets/images/icon-cart.svg';
import Avatar from '../assets/images/image-avatar.png';
import CloseIcon from '../assets/images/icon-close.svg';
import Thumb1 from '../assets/images/image-product-1-thumbnail.jpg';
import Delete from '../assets/images/icon-delete.svg';
import { GlobalContext } from './GlobalContext';


const Header = () => {

  const [modalCart, setModalCart] = React.useState('')
  const [menu, setMenu] = React.useState();
  const [totalPrice, setTotalPrice] = React.useState(0);

  const pageClasses = document.documentElement.classList;



  const global = React.useContext(GlobalContext);

  React.useEffect(() => {
    setTotalPrice(+global.itemPrice * global.item)
  }, [global.itemPrice, global.item])

  const toggle = () => {
    pageClasses.toggle('dark');
}


  

  return (
    <>
    <header className='w-full flex justify-between items-center h-[4.3rem] px-6 relative md:w-[70%] xl:w-[58%] xl:px-0 xl:h-[7rem] xl:border-b xl:border-gravishBlue'>
      <div className='flex items-center justify-center gap-4'>
        <img src={MenuIcon} alt="Menu tipo hamburguer" onClick={() => setMenu(true)} className='xl:hidden'/>
        <img src={Logo} alt="Logotipo empresa" className='dark:brightness-[9]' />

        <nav className='hidden xl:flex ml-[2.6rem] text-[.96rem]'>
          <ul className='xl:flex gap-[2rem]'>
            <li className="dark:text-paleOrange text-[#979797] cursor-pointer relative after:content-[''] after:w-0 after:h-1 after:absolute after:left-0 after:top-[4rem] after:transition-all after:duration-500 after:ease-in-out after:bg-gradient-to-b from-[#EF8A3A] to-[#EF8A3A] after:hover:w-full hover:text-black transition-all duration-300 ease-in-out">Collections</li>
            <li className="dark:text-paleOrange text-[#979797] cursor-pointer relative after:content-[''] after:w-0 after:h-1 after:absolute after:left-0 after:top-[4rem] after:transition-all after:duration-500 after:ease-in-out after:bg-gradient-to-b from-[#EF8A3A] to-[#EF8A3A] after:hover:w-full hover:text-black transition-all duration-300 ease-in-out">Men</li>
            <li className="dark:text-paleOrange text-[#979797] cursor-pointer relative after:content-[''] after:w-0 after:h-1 after:absolute after:left-0 after:top-[4rem] after:transition-all after:duration-500 after:ease-in-out after:bg-gradient-to-b from-[#EF8A3A] to-[#EF8A3A] after:hover:w-full hover:text-black transition-all duration-300 ease-in-out">Women</li>
            <li className="dark:text-paleOrange text-[#979797] cursor-pointer relative after:content-[''] after:w-0 after:h-1 after:absolute after:left-0 after:top-[4rem] after:transition-all after:duration-500 after:ease-in-out after:bg-gradient-to-b from-[#EF8A3A] to-[#EF8A3A] after:hover:w-full hover:text-black transition-all duration-300 ease-in-out">About</li>
            <li className="dark:text-paleOrange text-[#979797] cursor-pointer relative after:content-[''] after:w-0 after:h-1 after:absolute after:left-0 after:top-[4rem] after:transition-all after:duration-500 after:ease-in-out after:bg-gradient-to-b from-[#EF8A3A] to-[#EF8A3A] after:hover:w-full hover:text-black transition-all duration-300 ease-in-out">Contact</li>
          </ul>
        </nav>


        <nav className={`fixed bg-blackMenu top-0 left-0 h-full w-full z-20 closeMenu ${menu ? 'openMenu' : ''} xl:hidden z-40`}>
          <div className='bg-white h-full w-[66.8%] p-8'>
            <img src={CloseIcon} alt="Icone fechar" onClick={() => setMenu(false)} />
            <ul className='flex flex-col gap-6 mt-16 font-bold list-none text-lg xl:flex-row'>
              <li className="">Collections</li>
              <li className="">Men</li>
              <li className="">Women</li>
              <li className="">About</li>
              <li className="">Contact</li>
            </ul>
          </div>
        </nav>

      </div>


      <div className='flex items-center justify-center gap-6 xl:gap-[3.2rem]'>
        <div className='relative w-10 h-10 flex items-center justify-center cursor-pointer' onClick={() => setModalCart(!modalCart)}>
          <img src={Cart} alt="Carrinho de compras" className='w-5 dark:brightness-[2]' />
          {global.cart ? <div className='absolute top-1 right-1 bg-orange h-[15px] px-[.4rem] rounded-[.4rem] text-[.7rem] text-white'>{global.item}</div> : '' }
        </div>
        <div className='cursor-pointer rounded-[50%] xl:border-2 xl:border-transparent hover:border-orange transition-all duration-300 ease-in-out' onClick={toggle}>
          <img src={Avatar} alt="Foto" className='w-6 xl:w-[3rem]' />
        </div>
      </div>

      <div className={`absolute w-[23.5rem] right-[.5rem] top-[4.8rem] rounded-[10px] bg-white z-30 h-[16rem] modalCart ${modalCart ? 'open' : ''} xl:right-0 xl:mt-4 xl:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]`}>
        <div className='py-5 px-6'>
          <p className='font-bold'>Cart</p>
        </div>

        <div className='w-full h-[1px] bg-gravishBlue'></div>


        {global.cart ? <div>
        <div className='w-full flex items-center px-6'>
          <div className='w-full flex items-center gap-4 mt-7'>
            <div className='w-[3.1rem] rounded-[4px] overflow-hidden'>
              <img src={Thumb1} alt="Foto Tenis" />
            </div>
            <div>
              <p>Autumn Limited Edition...</p>
              <div>
                <span><span>$</span>{global.itemPrice}<span> x </span></span> 
                <span>{global.item}</span>
                <span className='font-bold'><span> $</span>{totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
            <div className='flex items-center justify-center mt-5 w-5 h-5 cursor-pointer' onClick={global.handleDeleteItem} >
              <img src={Delete} alt="Button delete item cart" />
            </div>
        </div>

        <div className='w-full flex items-center px-6 mt-7'>
          <input type="button" value="Checkout" className='w-full flex items-center justify-center bg-[#FF7D1B] text-white rounded-[10px] py-4' />
        </div>
        </div> : <div className='w-full flex items-center justify-center px-6 mt-20'>
          <p className='text-[#6A6E73] font-bold'>Your cart is empty</p>
        </div> }
      </div>
    </header>
    </>
  )
}

export default Header
