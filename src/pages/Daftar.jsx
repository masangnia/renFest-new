import React from 'react';
import { Link } from 'react-router-dom';
import masukdandaftar from '../assets/images/masukdandaftar.webp';

const Daftar = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white rounded-2xl shadow-lg">
        <div className="relative hidden w-1/2 bg-cover rounded-l-2xl lg:block" style={{ backgroundImage: `url(${masukdandaftar})` }}>
          <div className="absolute bottom-0 left-0 px-12 py-4 text-[#9290c3] font-bold bg-black bg-opacity-70 text-3xl rounded-tr-xl rounded-bl-2xl">
            Daftar
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-6 space-y-6">
          <form className="flex flex-col gap-3">
            <input
              id="nama"
              name="nama"
              type="text"
              placeholder="Nama Lengkap"
              required
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#1b1a55] focus:border-[#1b1a55]"
            />
            <input
              id="nik"
              name="nik"
              type="text"
              placeholder="NIK"
              required
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#1b1a55] focus:border-[#1b1a55]"
            />
            <div className="py-4">
              <label htmlFor="alamat" className="block mb-2 text-gray-600">Alamat</label>
              <input
                id="jalan"
                name="jalan"
                type="text"
                placeholder="Jalan"
                required
                className="w-full px-3 py-2 mb-3 border rounded-md shadow-sm focus:outline-none focus:ring-[#1b1a55] focus:border-[#1b1a55]"
              />
              <div className="flex gap-3 mb-3">
                <input
                  id="kecamatan"
                  name="kecamatan"
                  type="text"
                  placeholder="Kecamatan"
                  required
                  className="w-1/2 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#1b1a55] focus:border-[#1b1a55]"
                />
                <input
                  id="kota"
                  name="kota"
                  type="text"
                  placeholder="Kota/Kabupaten"
                  required
                  className="w-1/2 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#1b1a55] focus:border-[#1b1a55]"
                />
              </div>
              <div className="flex gap-3">
                <input
                  id="provinsi"
                  name="provinsi"
                  type="text"
                  placeholder="Provinsi"
                  required
                  className="w-1/2 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#1b1a55] focus:border-[#1b1a55]"
                />
                <input
                  id="kodepos"
                  name="kodepos"
                  type="text"
                  placeholder="Kode Pos"
                  required
                  className="w-1/2 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#1b1a55] focus:border-[#1b1a55]"
                />
              </div>
            </div>
              <input
                id="telepon"
                name="telepon"
                type="tel"
                placeholder="Telepon"
                required
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#1b1a55] focus:border-[#1b1a55]"
              />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                required
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#1b1a55] focus:border-[#1b1a55]"
              />
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                required
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#1b1a55] focus:border-[#1b1a55]"
              />
              <input
                id="konfirmasi-password"
                name="konfirmasi-password"
                type="password"
                placeholder="Konfirmasi Password"
                required
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#1b1a55] focus:border-[#1b1a55]"
              />
            <button
              type="submit"
              className="w-full px-4 py-2 text-lg text-white bg-[#1b1a55] rounded-md hover:bg-[#9290c3] focus:outline-none focus:ring-2 focus:ring-[#1b1a55] focus:ring-offset-2 duration-300"
            >
              Daftar
            </button>
          </form>
          <p className="text-md text-center text-gray-600">
            Sudah memiliki akun? <Link to="/masuk" className="font-medium text-[#1b1a55] hover:text-[#9290c3] duration-300">
            Masuk
          </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Daftar;
