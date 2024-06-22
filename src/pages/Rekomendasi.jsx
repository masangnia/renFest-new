import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
    description: "Deskripsi untuk Speaker Bluetooth",
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

const Rekomendasi = () => {
  const [anggaran, setAnggaran] = useState("");
  const [alat, setAlat] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const filtered = productData.filter(
      (item) =>
        (!anggaran ||
          parseInt(item.price) <= parseInt(anggaran.replace(/\D/g, ""))) &&
        (!alat || item.name.toLowerCase().includes(alat.toLowerCase()))
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full lg:w-1/2 p-6 space-y-6">
        <h2 className="text-2xl font-bold text-center text-[#1b1a55]">
          Rekomendasi Alat
        </h2>
        <p className="text-center text-gray-600">
          Daripada bingung cari alatnya, mending sini kita bantu untuk mencari
        </p>
        <p className="text-center text-gray-600">
          alat yang cocok dengan acaramu.
        </p>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <label htmlFor="anggaran" className="block mb-2 text-gray-600">
            Anggaran Yang Disediakan
          </label>
          <input
            id="anggaran"
            name="anggaran"
            type="text"
            placeholder="masukan anggaran"
            value={anggaran}
            onChange={(e) => setAnggaran(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#1b1a55] focus:border-[#1b1a55]"
          />
          <label htmlFor="alat" className="block mb-2 text-gray-600">
            Alat Yang Dibutuhkan
          </label>
          <input
            id="alat"
            name="alat"
            type="text"
            placeholder="pilih alat"
            value={alat}
            onChange={(e) => setAlat(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#1b1a55] focus:border-[#1b1a55]"
          />
          <div className="flex space-x-4">
            <button className="bg-[#1b1a55] text-white py-2 px-4 rounded hover:bg-[#9290c3] duration-300">
              Cari Rekomendasi
            </button>
          </div>
        </form>

        {filteredProducts.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-bold text-center text-[#1b1a55]">
              Hasil Pencarian
            </h3>
            <div className="space-y-4">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col md:flex-row items-center bg-white p-4 rounded shadow-md"
                >
                  <div className="w-full md:w-1/2 pr-6">
                    <Carousel
                      showThumbs={false}
                      showStatus={false}
                      className="bg-[#252525] rounded-lg p-4"
                    >
                      {product.images.map((image, index) => (
                        <div
                          key={index}
                          className="flex justify-center items-center"
                        >
                          <img
                            src={image}
                            alt={`${product.name} ${index + 1}`}
                            className="rounded-lg"
                          />
                        </div>
                      ))}
                    </Carousel>
                  </div>
                  <div className="w-full md:w-1/2 pl-6 mt-4 md:mt-0">
                    <h4 className="text-2xl font-bold mb-2">{product.name}</h4>
                    <p className="text-lg mb-2">
                      Rp. {product.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    </p>
                    <p className="text-base mb-2">{product.description}</p>
                    <button className="bg-[#1b1a55] text-white py-2 px-4 rounded hover:bg-[#9290c3] duration-300">
                      Sewa Sekarang
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Rekomendasi;
