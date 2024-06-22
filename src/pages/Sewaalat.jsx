import React, { useState } from "react";

const SewaAlat = () => {
  const [tanggalMulai, setTanggalMulai] = useState("");
  const [tanggalAkhir, setTanggalAkhir] = useState("");

  const handleTanggalMulaiChange = (e) => {
    setTanggalMulai(e.target.value);
  };

  const handleTanggalAkhirChange = (e) => {
    setTanggalAkhir(e.target.value);
  };

  const hitungDurasi = () => {
    const mulai = new Date(tanggalMulai);
    const akhir = new Date(tanggalAkhir);
    const diffTime = Math.abs(akhir - mulai);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <main className="max-w-6xl mx-auto mt-8">
        <div className="bg-white p-8 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2 space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4">Informasi Pribadi</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nama"
                  className="p-4 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Nomor telepon"
                  className="p-4 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Alamat"
                  className="p-4 border rounded-lg col-span-2"
                />
                <input
                  type="text"
                  placeholder="Asal Instansi"
                  className="p-4 border rounded-lg col-span-2"
                />
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Informasi Rental</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block mb-2">Lokasi Mulai</label>
                    <select className="p-4 border rounded-lg w-full">
                      <option value="">Pilih Lokasi Mulai</option>
                      <option value="jakarta">Jakarta</option>
                      <option value="bandung">Bandung</option>
                      <option value="surabaya">Surabaya</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2">Tanggal Mulai</label>
                    <input
                      type="date"
                      className="p-4 border rounded-lg w-full"
                      onChange={handleTanggalMulaiChange}
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Waktu Mulai</label>
                    <input
                      type="time"
                      className="p-4 border rounded-lg w-full"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block mb-2">Lokasi Akhir</label>
                    <select className="p-4 border rounded-lg w-full">
                      <option value="">Pilih Lokasi Akhir</option>
                      <option value="jakarta">Jakarta</option>
                      <option value="bandung">Bandung</option>
                      <option value="surabaya">Surabaya</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2">Tanggal Akhir</label>
                    <input
                      type="date"
                      className="p-4 border rounded-lg w-full"
                      onChange={handleTanggalAkhirChange}
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Waktu Akhir</label>
                    <input
                      type="time"
                      className="p-4 border rounded-lg w-full"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gray-100 p-4 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-4">Metode Pembayaran</h2>
              <section className="bg-gray-100 p-4 rounded-lg shadow mb-6">
                <h3 className="text-xl font-bold mb-4">
                  Pilih metode pembayaran
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2">Card Number</label>
                    <input
                      type="text"
                      className="p-4 border rounded-lg w-full"
                      placeholder="Card number"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Expiration Date</label>
                    <input
                      type="text"
                      className="p-4 border rounded-lg w-full"
                      placeholder="DD / MM / YY"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Card Holder</label>
                    <input
                      type="text"
                      className="p-4 border rounded-lg w-full"
                      placeholder="Card holder"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">CVC</label>
                    <input
                      type="text"
                      className="p-4 border rounded-lg w-full"
                      placeholder="CVC"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block mb-2">Other Payment Methods</label>
                  <div className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="payment-method"
                      className="mr-2"
                    />
                    <span>DANA</span>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="payment-method"
                      className="mr-2"
                    />
                    <span>Gopay</span>
                  </div>
                </div>
              </section>
              <h2 className="text-2xl font-bold mb-4">Konfirmasi</h2>
              <section className="bg-gray-100 p-4 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4">
                  Konfirmasi pesanan Anda
                </h3>
                <div className="mb-4">
                  <input type="checkbox" className="mr-2" />
                  <span>
                    Saya akan bertanggung jawab penuh terhadap alat yang saya
                    sewa
                  </span>
                </div>
                <div className="mb-4">
                  <input type="checkbox" className="mr-2" />
                  <span>
                    Saya setuju dengan syarat dan ketentuan yang berlaku
                  </span>
                </div>
                <button className="bg-[#1b1a55] text-white py-2 px-4 rounded hover:bg-[#9290c3] duration-300">
                  Sewa Sekarang
                </button>
              </section>
              <p className="text-gray-600 mt-4">
                Semua data anda aman. Kami menggunakan keamanan tercanggih untuk
                memberikan Anda pengalaman terbaik.
              </p>
            </section>
          </div>

          <div className="space-y-6">
            <section className="bg-gray-100 p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Sewa Alat</h3>
              <div className="flex items-center mb-4">
                <div className="w-24 h-24 bg-gray-300 rounded-lg mr-4"></div>
                <div>
                  <h4 className="font-bold">Nama Alat</h4>
                  <p className="text-gray-600">
                    Deskripsi singkat alat yang disewa.
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-300 pt-4">
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>Rp. 100.000</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Durasi</span>
                  <span>{hitungDurasi()} hari</span>
                </div>
                <div className="flex justify-between mb-2">
                  <input
                    type="text"
                    placeholder="Masukkan kode promo"
                    className="p-2 border rounded-lg w-full mr-2"
                  />
                  <button className="bg-blue-500 text-white p-2 rounded-lg">
                    Pakai
                  </button>
                </div>
              </div>
              <div className="flex justify-between font-bold text-lg border-t border-gray-300 pt-4">
                <span>Total</span>
                <span>Rp. {100000 * hitungDurasi()}</span>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SewaAlat;
