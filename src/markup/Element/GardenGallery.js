import React from "react";

// import Gallery from "react-photo-gallery";
// import Carousel, { Modal, ModalGateway } from "react-images";
import { Carousel } from "react-carousel-minimal";
// import { photos } from "./photos";

let img1 = require("./../../images/product/marriage/marriage-1.jpg");
let img2 = require("./../../images/product/marriage/marriage-2.jpg");
let img3 = require("./../../images/product/marriage/marriage-3.jpg");
let img4 = require("./../../images/product/marriage/marriage-4.jpg");
let img5 = require("./../../images/product/marriage/marriage-5.jpg");
let img6 = require("./../../images/product/marriage/marriage-6.jpg");
let img7 = require("./../../images/product/marriage/marriage-7.jpg");
let img8 = require("./../../images/product/marriage/marriage-8.jpg");

function GardenGallery() {
  const data = [
    {
      image: img1,
    },
    {
      image: img2,
    },
    {
      image: img3,
    },
    {
      image: img4,
    },
    {
      image: img5,
    },
    {
      image: img6,
    },
    {
      image: img7,
    },
    {
      image: img8,
    },
  ];

  // const [currentImage, setCurrentImage] = useState(0);
  // const [viewerIsOpen, setViewerIsOpen] = useState(false);

  // const openLightbox = useCallback((event, { photo, index }) => {
  //   setCurrentImage(index);
  //   setViewerIsOpen(true);
  // }, []);

  // const closeLightbox = () => {
  //   setCurrentImage(0);
  //   setViewerIsOpen(false);
  // };

  // const captionStyle = {
  //   fontSize: "2em",
  //   fontWeight: "bold",
  // };
  // const slideNumberStyle = {
  //   fontSize: "20px",
  //   fontWeight: "bold",
  // };

  return (
    <div>
      {/* <div className="container">
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div> */}
      <div className="container">
        <Carousel
          data={data}
          time={4000}
          width="850px"
          height="500px"
          // captionStyle={captionStyle}
          radius="10px"
          slideNumber={false}
          // slideNumberStyle={slideNumberStyle}
          // captionPosition="bottom"
          automatic={true}
          dots={false}
          // pauseIconColor="white"
          // pauseIconSize="40px"
          slideBackgroundColor="darkGray"
          slideImageFit="cover"
          thumbnails={true}
          thumbnailWidth="100px"
          style={{
            textAlign: "center",
            maxWidth: "850px",
            maxHeight: "500px",
            margin: "40px auto",
          }}
        />
      </div>
    </div>
  );
}

export default GardenGallery;
