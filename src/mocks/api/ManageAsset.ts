import { http, HttpResponse } from 'msw'
import axiosService from './config'

const RESPONSE = [
  {
    idAsset: "V001",
    AssetName: "Van Pengiriman",
    Kategori: "Kendaraan",
    Status: "Aktif",
    ModelNumber: "VD2000",
    SerialNumber: "SN1234567890",
    Deskripsi: "Ford Transit 2021",
    PurchaseCost: 450000000,
    PurchaseDate: "2021-06-15",
    VendorName: "Ford Motor",
  },
  {
    idAsset: "V002",
    AssetName: "Truk Forklift",
    Kategori: "Kendaraan",
    Status: "Tidak aktif",
    ModelNumber: "FT400",
    SerialNumber: "SN9876543210",
    Deskripsi: "Toyota Forklift 2020",
    PurchaseCost: 375000000,
    PurchaseDate: "2020-10-22",
    VendorName: "Toyota Industri",
  },
  {
    idAsset: "T001",
    AssetName: "Ban Tugas Berat",
    Kategori: "Ban",
    Status: "Aktif",
    ModelNumber: "HT500",
    SerialNumber: "SN5678901234",
    Deskripsi: "Medan Lumpur Bridgestone",
    PurchaseCost: 5000000,
    PurchaseDate: "2023-03-05",
    VendorName: "Ban Bridgestone",
  },
  {
    idAsset: "T002",
    AssetName: "Set Ban Semua Musim",
    Kategori: "Ban",
    Status: "Aktif",
    ModelNumber: "AS400",
    SerialNumber: "SN2345678901",
    Deskripsi: "Michelin CrossClimate+",
    PurchaseCost: 6750000,
    PurchaseDate: "2022-08-12",
    VendorName: "Ban Michelin",
  },
  {
    idAsset: "V003",
    AssetName: "SUV",
    Kategori: "Kendaraan",
    Status: "Aktif",
    ModelNumber: "SUV2022",
    SerialNumber: "SN1122334455",
    Deskripsi: "Honda CR-V 2022",
    PurchaseCost: 52.0,
    PurchaseDate: "2022-04-30",
    VendorName: "Motor Honda",
  },
  {
    idAsset: "V004",
    AssetName: "Truk",
    Kategori: "Kendaraan",
    Status: "Aktif",
    "Nomor Model": "TRK3000",
    "Nomor Seri": "SN9988776655",
    Deskripsi: "Truk Isuzu NPR",
    PurchaseCost: 820000000,
    PurchaseDate: "2023-01-10",
    VendorName: "Isuzu Motors",
  },
  {
    idAsset: "T003",
    AssetName: "Performa Ban",
    Kategori: "Ban",
    Status: "Aktif",
    ModelNumber: "PT700",
    SerialNumber: "SN8765432109",
    Deskripsi: "Goodyear Eagle F1",
    PurchaseCost: 8000000,
    PurchaseDate: "2021-11-25",
    VendorName: "Ban Goodyear",
  },
  {
    idAsset: "T004",
    AssetName: "Set Ban Musim Dingin",
    Kategori: "Ban",
    Status: "Aktif",
    ModelNumber: "WT300",
    SerialNumber: "SN5432109876",
    Deskripsi: "Pirelli Winter Sottozero",
    PurchaseCost: 6000000,
    PurchaseDate: "2023-06-18",
    VendorName: "Ban Pirelli",
  },
]

const manageAsset = [
    http.get(axiosService('/manage-asset'), ({ request }) => {
        const url = new URL(request.url)
        const keyword = url.searchParams.get('keyword')

        let res = RESPONSE

        if (keyword) {
          res = RESPONSE.filter((item) => 
                item.AssetName
                  .toLowerCase()
                  .includes(keyword.toLowerCase())
              )
        }

        const response = {
          status: {
            code: 0,
            message: "Berhasil mengambil data",
          },
          data: res,
        };

        return HttpResponse.json(response)
    }),
];

export default manageAsset;
