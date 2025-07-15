import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  FaArrowLeft,
  FaArrowRight,
  FaWhatsapp,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaSearchPlus,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import React, { useState } from "react";
import Slider from "react-slick";
import Modal from "react-modal";

// Accessibility requirement for screen readers
Modal.setAppElement("#root");

// Sample product data
const products = [
  {
    id: 1,
    name: "Blackout Curtains",
    image: "https://8upload.com/image/685c8fdbaa00d/WhatsApp_Image_2025-06-24_at_22.51.30_0a3810a5.jpg",
    subtitle: "Perfect for blocking light and enhancing privacy in bedrooms or media rooms.",
    link: "/curtains/blackout",
    rating: 4.5,
    discount: "20% OFF",
  },
  {
    id: 2,
    name: "Bedroom Curtains",
    image: "https://8upload.com/image/685c95754abe6/IMG-20250625-WA0012.jpg",
    subtitle: "Soft textures and elegant drapes designed to create a cozy bedroom ambiance.",
    link: "/curtains/bedroom",
    rating: 4,
  },
  {
    id: 3,
    name: "Wave Style Curtains",
    image: "https://8upload.com/image/685c8fda8b268/WhatsApp_Image_2025-06-24_at_22.51.31_ffba6044.jpg",
    subtitle: "Modern wave pleats that offer a clean, architectural look for any room.",
    link: "/curtains/wave",
    rating: 5,
    discount: "15% OFF",
  },
  {
    id: 4,
    name: "Living Room Curtains",
    image: "https://8upload.com/image/685c95337a7e1/IMG-20250625-WA0017.jpg",
    subtitle: "Stylish and functional, adding sophistication to your living area.",
    link: "/curtains/livingroom",
    rating: 3.5,
  },
];

// Arrow Components
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100 transition"
    aria-label="Next slide"
  >
    <FaArrowRight className="text-gray-800" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100 transition"
    aria-label="Previous slide"
  >
    <FaArrowLeft className="text-gray-800" />
  </button>
);

// Rating Stars Renderer
const renderStars = (rating) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <div className="flex text-yellow-400 text-sm">
      {[...Array(full)].map((_, i) => <FaStar key={`full-${i}`} />)}
      {half && <FaStarHalfAlt key="half" />}
      {[...Array(empty)].map((_, i) => <FaRegStar key={`empty-${i}`} />)}
    </div>
  );
};

const Products_Curtains = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (image) => {
    setModalImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalImage("");
    setModalIsOpen(false);
  };

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-12 bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Explore Our Curtain Collection
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
          From blackout to bedroom curtains, discover designs tailored to elevate your space with elegance and comfort.
        </p>

        {/* Product Slider */}
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="px-4">
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition duration-300">
                {product.discount && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded shadow">
                    {product.discount}
                  </span>
                )}

                <div className="relative group">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button
                    onClick={() => openModal(product.image)}
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition"
                    aria-label="Preview image"
                  >
                    <FaSearchPlus className="text-white text-2xl" />
                  </button>
                </div>

                <div className="p-6 flex flex-col h-56 justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-600 mt-2">{product.subtitle}</p>
                    <div className="mt-3">{renderStars(product.rating)}</div>
                  </div>

                  <div className="flex justify-between items-center gap-2 mt-5">
                    <Link
                      to={product.link}
                      className="px-5 py-2 text-sm font-medium rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
                    >
                      View Details
                    </Link>
                    <a
                      href="https://wa.me/97470373588"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-full bg-green-600 text-white hover:bg-green-700 transition"
                    >
                      <FaWhatsapp />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Modal Viewer */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="fixed inset-0 bg-black bg-opacity-70 z-50"
        className="relative bg-white rounded-xl max-w-3xl mx-auto p-4 shadow-2xl flex items-center justify-center mt-10 outline-none"
      >
        <div className="relative w-full">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-black bg-white rounded-full w-9 h-9 flex items-center justify-center text-lg font-bold shadow hover:bg-gray-200 transition"
            aria-label="Close"
          >
            &times;
          </button>
          <img
            src={modalImage}
            alt="Curtain Preview"
            className="w-full h-auto max-h-[80vh] object-contain rounded"
          />
        </div>
      </Modal>
    </section>
  );
};

export default Products_Curtains;
