import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IoArrowBack } from "react-icons/io5";
import produk1 from "../assets/images/fitur/produk1.png";
import produk2 from "../assets/images/fitur/produk2.png";
import produk3 from "../assets/images/fitur/produk3.png";
import produk4 from "../assets/images/fitur/produk4.png";
import produk5 from "../assets/images/fitur/produk5.png";
import produk6 from "../assets/images/fitur/produk6.png";


const productData = [
  {
    id: 1,
    images: [produk1, produk1, produk1],
    name: "Wireless Headphones",
    price: "100000",
    description: "Deskripsi untuk Wireless Headphones",
  },
  {
    id: 2,
    images: [produk2, produk2, produk2],
    name: "Sony Camera",
    price: "190000",
    description: "Deskripsi untuk Sony Camera",
  },
  {
    id: 3,
    images: [produk3, produk3, produk3],
    name: "Noise Cancelling Headphones",
    price: "150000",
    description: "Deskripsi untuk Noise Cancelling Headphones",
  },
  {
    id: 4,
    images: [produk4, produk4, produk4],
    name: "SoundCard",
    price: "200000",
    description: "Deskripsi untuk SoundCard",
  },
  {
    id: 5,
    images: [produk5, produk5, produk5],
    name: "Logitech Gaming Speaker",
    price: "120000",
    description: "Deskripsi untuk Logitech Gaming Speaker",
  },
  {
    id: 6,
    images: [produk6, produk6, produk6],
    name: "Speaker Bluetooth",
    price: "50000",
    description: "Dskripsi untuk Speaker Bluetooth ",
  },
  {
    id: 7,
    images: [produk3, produk3, produk3],
    name: "Bluetooth Speaker",
    price: "250000",
    description: "Deskripsi untuk Bluetooth Speaker",
  },
  {
    id: 8,
    images: [produk3, produk3, produk3],
    name: "Action Camera",
    price: "250000",
    description: "Deskripsi untuk Action Camera",
  },
  {
    id: 9,
    images: [produk3, produk3, produk3],
    name: "VR Headset",
    price: "250000",
    description: "Deskripsi untuk VR Headset",
  },
  {
    id: 10,
    images: [produk3, produk3, produk3],
    name: "Fitness Tracker",
    price: "250000",
    description: "Deskripsi untuk Fitness Tracker",
  },
  {
    id: 11,
    images: [produk3, produk3, produk3],
    name: "Smart Home Hub",
    price: "300000",
    description: "Deskripsi untuk Smart Home Hub",
  },
];

const Deskripsi = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productData.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Produk tidak ditemukan</div>;
  }
  const handleSewaSekarang = () => {
    navigate("/sewa-alat");
  };

  return (
    <div className="container mx-auto mt-12 p-12 flex flex-col">
      <button
        className="w-32 border border-[#1b1a55] text-[#1b1a55] py-2 px-4 rounded hover:bg-[#1b1a55] hover:text-white duration-300 flex items-center justify-center"
        onClick={() => navigate(-1)}
      >
        <IoArrowBack className="mr-2" />
        Kembali
      </button>
      <div className="container mx-auto mb-12 py-12 flex">
        <div className="w-1/2 pr-6">
          <Carousel
            showThumbs={false}
            showStatus={false}
            className="bg-[#252525] rounded-lg p-4"
          >
            {product.images.map((image, index) => (
              <div key={index} className="flex justify-center items-center">
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="rounded-lg"
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="w-1/2 pl-6">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg mb-4">Rp. {product.price} / hari</p>
          <p className="text-base mb-4">{product.description}</p>
          <div className="flex space-x-4">
            <button
              className="bg-[#1b1a55] text-white py-2 px-4 rounded hover:bg-[#9290c3] duration-300"
              onClick={handleSewaSekarang}
            >
              Sewa Sekarang
            </button>
          </div>
        </div>
      </div>

      <section className="reviews">
        <h2>All Reviews (461)</h2>
        <button className="write-review">Write a Review</button>
        <div className="review-list">
          <div className="review">
            <h3>Sindi</h3>
            <p>5 ★★★★★</p>
            <p>Hasil kamera ini luar biasa dengan harga terjangkau...</p>
            <p>Posted on August 16, 2023</p>
          </div>
          <div className="review">
            <h3>Adrian Wahyu</h3>
            <p>5 ★★★★★</p>
            <p>Pengalaman saya menggunakan kamera ini sangat memuaskan...</p>
            <p>Posted on August 15, 2023</p>
          </div>
          <div className="review">
            <h3>Ikhsan</h3>
            <p>5 ★★★★★</p>
            <p>Kamera ini menawarkan performa yang sangat baik...</p>
            <p>Posted on August 15, 2023</p>
          </div>
          <div className="review">
            <h3>Darto</h3>
            <p>5 ★★★★★</p>
            <p>Setelah menggunakan kamera ini, saya sangat terkesan...</p>
            <p>Posted on August 15, 2023</p>
          </div>
        </div>
      </section>

      <section className="related-products">
        <h2>Related product</h2>
        <div className="related-product-list">
          <div className="related-product">
            <img src="related-product1-url" alt="Canon Camera EOS" />
            <p>Canon Camera EOS</p>
            <p>Rp. 140.000,- / hari</p>
          </div>
          <div className="related-product">
            <img src="related-product2-url" alt="Inzoka Mini Camera" />
            <p>Inzoka Mini Camera</p>
            <p>Rp. 100.000,- / hari</p>
          </div>
          <div className="related-product">
            <img src="related-product3-url" alt="Sony Video Camera" />
            <p>Sony Video Camera</p>
            <p>Rp. 160.000,- / hari</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Deskripsi;
