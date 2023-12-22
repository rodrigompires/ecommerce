import React from 'react';
import '../App.css';
import VanillaTilt from 'vanilla-tilt';

import Thumb1 from "../assets/images/image-product-1.jpg";
import Thumb2 from "../assets/images/image-product-2.jpg";
import Thumb3 from "../assets/images/image-product-3.jpg";
import Thumb4 from "../assets/images/image-product-4.jpg";


// eslint-disable-next-line react/prop-types
const PhotoModal = ({photo, modalOpen, setModalOpen}) => {

    function handleOutsideClick(e) {
        if (e.target === e.currentTarget) {
            setModalOpen(false); 
        }
      }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const options = [
        {
          max: 25,
          speed: 400,
          glare: true,
        },
        
      ];
    
    const tilt = React.useRef(null);

    React.useEffect(() => {
        
        VanillaTilt.init(tilt.current, options);
    }, [options]);


    if (modalOpen) {
        return (
          <section className="modal fixed top-0 left-0 w-screen h-screen bg-bgModal flex flex-col items-center justify-center dark:bg-dark-darkElements" onClick={handleOutsideClick}>
            <div className="box relative rounded-[20px] cursor-pointer flex items-center justify-center" ref={tilt}>
                <div className='elements tb0 absolute top-[50px] left-[-60px] w-[6.25rem] h-[6.25rem] bg-bgCardModal rounded-xl overflow-hidden'>
                    <img src={Thumb1} alt="Foto tenis 1" className='opacity-80' />
                </div>
                <div className='elements tb1 absolute -top-5  right-0  w-[7.5rem] h-[7.5rem] bg-bgCardModal rounded-xl overflow-hidden'>
                    <img src={Thumb2} alt="Foto tenis 2" className='opacity-80' />
                </div>
                <div className='name absolute top-[235px] left-0 right-0 w-full p-3 text-right h-[100px] rounded-xl border-none'>
                    <h2 className='text-white font-light'>desenvolvido por Rodrigo Pires</h2>
                    <p className='text-[14px]'>veja mais projetos em meu GitHub</p>
                </div>
                <div className='elements tb2 absolute bottom-0 right-0 w-[10rem] h-[7.5rem] bg-bgCardModal rounded-xl overflow-hidden'>
                    <img src={Thumb3} alt="Foto tenis 3" className='opacity-80' />
                </div>
                <div className='elements tb3 absolute bottom-[-100px] left-[-20px] w-[8rem] h-[12rem] bg-bgCardModal rounded-xl overflow-hidden'>
                    <img src={Thumb4} alt="Foto tenis 4" className='opacity-80 h-full' />
                </div>
                <div className='card relative bg-bgCardModal w-[70%] xl:w-[80%] h-[25rem] backdrop-blur-md rounded-[20px] overflow-hidden'><img src={photo.path} alt="" className='w-full h-full opacity-30'/></div>
            </div>
          </section>
        )

    } else {
        return null
    }


}

export default PhotoModal