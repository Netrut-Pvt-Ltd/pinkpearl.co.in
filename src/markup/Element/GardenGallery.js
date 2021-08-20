import React, { useState, useCallback } from "react";

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
// import { photos } from "./photos";

let img1 = require("./../../images/product/marriage/marriage-1.jpg");
let img2 = require("./../../images/product/marriage/marriage-2.jpg");
let img3 = require("./../../images/product/marriage/marriage-3.jpg");
let img4 = require("./../../images/product/marriage/marriage-4.jpg");
let img5 = require("./../../images/product/marriage/marriage-5.jpg");
let img6 = require("./../../images/product/marriage/marriage-6.jpg");

function GardenGallery() {
  const photos = [
    {
      src: img1,
      width: 4,
      height: 3,
    },
    {
      src: img2,
      width: 4,
      height: 3,
    },
    {
      src: img3,
      width: 4,
      height: 3,
    },
    {
      src: img4,
      width: 4,
      height: 3,
    },
    {
      src: img5,
      width: 4,
      height: 3,
    },
    {
      src: img6,
      width: 4,
      height: 3,
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <div className="container">
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
      </div>
    </div>
  );
}

export default GardenGallery;
