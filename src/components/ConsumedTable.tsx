"use client";

import Image from "next/image";

const ConsumedTable = ({
  consumed,
}: {
  consumed: Array<{ image: string; title: string; link: string }>;
}) => {
  return (
    <div className="min-h-screen">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
            </tr>
          </thead>
          <tbody>
            {consumed.map((consume) => {
              return (
                <tr
                  className="bg-white border-b hover:bg-gray-50 hover:cursor-pointer"
                  onClick={() =>
                    !!window && window.open(consume.link, "_blank")
                  }
                >
                  <td className="w-64 p-4">
                    <Image
                      width={50}
                      height={50}
                      src={consume.image}
                      alt={`Image of ${consume.title}`}
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {consume.title}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConsumedTable;
