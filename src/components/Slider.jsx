import React from "react";
import ArrowNext from "../assets/images/icon-next.svg";
import ArrowPrevious from "../assets/images/icon-previous.svg";
import PhotoModal from "./PhotoModal";

const Slider = () => {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();
  const imgRef = React.useRef()

  const [modalOpen, setModalOpen] = React.useState(false);
  const [photo, setPhoto] = React.useState(null);
  

  const handleClick = (photo) => {
    setModalOpen(true);
    setPhoto(photo);
  };



  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  window.addEventListener('resize', function() {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  });

  function nextSlide() {
    if (active < dataPhoto.length - 1) {
      setActive(active + 1);
    }
  }

  function prevSlide() {
    if (active > 0) {
      setActive(active - 1);
    }
  }

  function handlePhoto (e) {
    const clickedPhotoId = e.target.id;
    let total = ((contentRef.current.getBoundingClientRect().width * clickedPhotoId) - (contentRef.current.getBoundingClientRect().width * clickedPhotoId * clickedPhotoId));
    setActive(clickedPhotoId - 1);
    setPosition(total);
  }


  // console.log(imageIndex);

  const dataPhoto = [
    {
      id: 1,
      path: "assets/images/image-product-1.jpg",
      thumb: "assets/images/image-product-1-thumbnail.jpg",
      alt: "Foto tenis 1",
    },
    {
      id: 2,
      path: "assets/images/image-product-2.jpg",
      thumb: "assets/images/image-product-2-thumbnail.jpg",
      alt: "Foto tenis 2",
    },
    {
      id: 3,
      path: "assets/images/image-product-3.jpg",
      thumb: "assets/images/image-product-3-thumbnail.jpg",
      alt: "Foto tenis 3",
    },
    {
      id: 4,
      path: "assets/images/image-product-4.jpg",
      thumb: "assets/images/image-product-4-thumbnail.jpg",
      alt: "Foto tenis 4",
    },
  ];

  return (
    <>
      <section className="w-full xl:w-[80%] xl:ml-[3rem]">
        <div className="w-full h-[18.75rem] flex justify-center items-center overflow-hidden relative xl:rounded-[10px] xl:overflow-hidden xl:h-auto">
          <div
            ref={contentRef}
            style={{border: '0px solid transparent', transform: `translateX(${position}px)`}}
            className={`flex transition-transform duration-500 ease-in-out cursor-pointer`}
          >
            {dataPhoto.map((photo) => (
              <img
                ref={imgRef}
                key={photo.id}
                src={photo.path}
                alt={photo.alt}
                id={photo.id}
                className="w-full h-full object-cover"
                onClick={() => handleClick(photo)}
              />
            ))}
          </div>
          <div className="w-full flex justify-between px-4 absolute xl:hidden">
            <div
              className="w-10 h-10 bg-white rounded-[50%] z-10 flex items-center justify-center"
              onClick={prevSlide}
            >
              <img src={ArrowPrevious} alt="Icone Prev" />
            </div>
            <div
              className="w-10 h-10 bg-white rounded-[50%] z-10 flex items-center justify-center"
              onClick={nextSlide}
            >
              <img src={ArrowNext} alt="Icone Next" />
            </div>
          </div>
        </div>

        <div className="w-full hidden xl:flex xl:justify-between xl:mt-8">
        {dataPhoto.map((item) => (
          <div key={item.id} className="xl:w-[5.5rem] xl:rounded-md xl:overflow-hidden cursor-pointer border-2 border-transparent hover:border-red-300">
              <img src={item.thumb} alt={item.alt} id={item.id} onClick={handlePhoto} className="hover:opacity-80 transition-all duration-300 ease-in-out" />
          </div>
        ))}
        </div>
      </section>
      <PhotoModal photo={photo} setPhoto={setPhoto} modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  );
};

export default Slider;
