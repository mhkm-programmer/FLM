import { useState } from "react";
import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";
import CustomerReviews from "../pages/Home/CustomerReviews";
import Modal from "react-modal";
import { FaCogs, FaLightbulb, FaRulerCombined, FaCertificate } from "react-icons/fa";

const hotelCurtainsGallery = [
 { type: "image", src: "https://8upload.com/image/685d92a9cc5e6/IMG-20250625-WA0027.jpg" },
  { type: "video", src: "https://streamable.com/e/rw7urq" },
  { type: "image", src: "https://8upload.com/image/685d92aa09581/IMG-20250625-WA0028.jpg" },
  { type: "video", src: "https://streamable.com/e/w35dgp" },
  { type: "image", src: "https://8upload.com/image/685d92aa822d0/IMG-20250625-WA0029.jpg" },
  { type: "video", src: "https://streamable.com/e/gxpb4o" },
];
Modal.setAppElement('#root');

const Parking = () => {
  const [modalMedia, setModalMedia] = useState(null);

  return (
    <div className="font-sans text-gray-800 dark:text-gray-100 bg-[#fdfbf9] dark:bg-gray-900">
      {/* SEO Title */}
      <PageTitle title="Hotel Curtains in Qatar | Blackout & Elegant Styles | Curtains Furniture" />

      {/* Hero Section */}
      <ParallaxSection
        imagePath="https://8upload.com/image/685d92600dd4c/IMG-20250625-WA0025.jpg"
        title="Hotel Curtains Collection"
        subTitle="Tailored for Hospitality. Designed for Comfort."
      />

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4A342E] dark:text-white mb-6">
          Hospitality Curtains That Impress & Perform
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          We design and install premium blackout and decorative curtains for hotels, resorts, and serviced apartments across Qatar. With custom sizes, fire-retardant fabrics, and durable stitching, we ensure your rooms meet comfort and aesthetic expectations.
        </p>
      </section>

      {/* Features */}
      <section className="bg-[#f5f0e8] dark:bg-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <FaRulerCombined size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Custom-Sized Curtains",
              desc: "Measured and made to fit each room and window configuration perfectly.",
            },
            {
              icon: <FaLightbulb size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Full Blackout Solutions",
              desc: "Block light, reduce noise, and improve guest comfort with layered blackout options.",
            },
            {
              icon: <FaCogs size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Elegant & Functional",
              desc: "Premium materials, easy-care fabrics, and colors that match your interior branding.",
            },
          ].map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow hover:shadow-lg transition"
            >
              {icon}
              <h3 className="text-xl font-semibold mb-2 text-[#4A342E] dark:text-white">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
<section className="max-w-7xl mx-auto px-6 py-20">
  <h3 className="text-3xl font-bold text-center text-[#4A342E] dark:text-white mb-8">
    Hotel Curtain Installations
  </h3>
  <p className="text-center text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
    Explore our recent hotel curtain projects — from luxury suites to executive rooms.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {hotelCurtainsGallery.map((media, index) => (
      <button
        key={index}
        onClick={() => setModalMedia(media)}
        className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
        aria-label={`Open media ${index + 1}`}
      >
        {media.type === "image" ? (
          <img
            src={media.src}
            alt={`Hotel curtain ${index + 1}`}
            className="w-full h-64 object-cover transform hover:scale-105 transition-all duration-500"
          />
        ) : (
          <div className="w-full h-64 bg-black overflow-hidden">
            <iframe
              src={media.src}
              title={`Hotel curtain video ${index + 1}`}
              className="w-full h-full object-cover"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        )}
      </button>
    ))}
  </div>

  {/* Modal Preview */}
   <Modal
     isOpen={!!modalMedia}
     onRequestClose={() => setModalMedia(null)}
     contentLabel="Media Preview"
     // Ensure modal is above all elements
     className="fixed inset-0 flex items-center justify-center p-4 z-[9999]"
     overlayClassName="fixed inset-0 bg-black bg-opacity-70 z-[9998]"
   >
     <div className="relative bg-white dark:bg-gray-900 rounded-xl p-4 max-w-4xl max-h-[90vh] w-full overflow-auto">
       
       {/* Close Button */}
       <button
         onClick={() => setModalMedia(null)}
         className="absolute top-4 right-4 text-2xl z-[10000] text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition"
         aria-label="Close Modal"
       >
         ✕
       </button>
   
       {/* Image or Video Preview */}
       {modalMedia && (
         modalMedia.type === "image" ? (
           <img
             src={modalMedia.src}
             alt="Media Preview"
             className="max-w-full max-h-[80vh] mx-auto rounded"
           />
         ) : (
           <div className="w-full h-[80vh] overflow-hidden">
             <iframe
               src={modalMedia.src}
               title="Video Preview"
               className="w-full h-full rounded-xl"
               frameBorder="0"
               allow="autoplay; fullscreen"
               allowFullScreen
             />
           </div>
         )
       )}
     </div>
   </Modal>
</section>


      {/* Customer Reviews */}
      <CustomerReviews />

      {/* Why Curtains Furniture */}
      <section className="py-20 px-6 bg-[#f2ede8] dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#4A342E] dark:text-white mb-6">
            Why Curtains Furniture for Hotels?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            We’re trusted by hotels across Qatar for quality, consistency, and timely delivery.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Free Site Consultation", desc: "We visit your property to assess, suggest fabrics, and measure accurately." },
              { title: "Bulk & Contract Rates", desc: "Discounted packages for large-scale hotel projects and long-term partnerships." },
              { title: "Timely Installation", desc: "We ensure fast delivery and professional installation, minimizing room downtime." },
            ].map(({ title, desc }, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
                <h3 className="font-semibold text-lg text-[#6B4226] dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
              </div>
            ))}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow flex items-center gap-3">
              <FaCertificate className="text-[#6B4226]" size={24} />
              <div>
                <h3 className="font-semibold text-lg text-[#6B4226] dark:text-white">Trusted Materials</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  We use internationally certified blackout fabrics and fire-rated options for hotels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#4A342E] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let’s Style Your Hotel with Elegance & Comfort
        </h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Contact us today for hotel curtain consultations, bulk pricing, and professional installation across Qatar.
        </p>
        <a
          href="https://wa.me/97466280037"
          className="inline-block bg-white text-[#4A342E] font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition"
        >
          Chat on WhatsApp
        </a>
      </section>
    </div>
  );
};

export default Parking;
