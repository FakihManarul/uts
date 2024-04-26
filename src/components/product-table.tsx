import { getBuah } from "../../lib/data";

const ProductTable = async () => {
  const Buahs = await getBuah();
  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead>
        <tr>
          <th className="py-3 px-6">#</th>
          <th className="py-3 px-6">Nama Buah</th>
          <th className="py-3 px-6">Harga</th>
          <th className="py-3 px-6">Tanggal</th>
        </tr>
      </thead>
      <tbody>
        {Buahs.map(
          (
            buah: any,
            index: number // Assign types explicitly
          ) => (
            <tr key={buah.id} className="big-white border-b">
              <td className="py-3 px-6">{index + 1}</td>
              <td className="py-3 px-6">{buah.buah}</td>
              <td className="py-3 px-6">{buah.harga}</td>
              <td className="py-3 px-6">{buah.createdAt.toString()}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default ProductTable;
