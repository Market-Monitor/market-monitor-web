import Image from "next/image";
import Welcome from "./Welcome";

import imgBroccoli from "../assets/broccoli.svg";
import imgCabbage from "../assets/cabbage.svg";
import imgCarrot from "../assets/carrot.svg";
import imgRadish from "../assets/radish.svg";

export default function Page() {
  return (
    <div className="py-10">
      <Welcome />

      <div className="mt-6 w-11/12 mx-auto pt-2 pb-8">
        <table className="table-auto w-full text-left border-collapse">
          <thead className="border-b">
            <tr className="">
              <th className="pt-4 pb-2 px-6"></th>
              <th className="pt-4 pb-2 px-6">Name</th>
              <th className="pt-4 pb-2 px-6">Class / Category</th>
              <th className="pt-4 pb-2 px-6" colSpan={2}>
                Price
              </th>
              <th className="pt-4 pb-2 px-6">Last Updated</th>
            </tr>
            <tr>
              <th className="pb-2"></th>
              <th className="pb-2"></th>
              <th className="pb-2"></th>
              <th className="pb-2 text-sm px-6 font-medium">(Lowest)</th>
              <th className="pb-2 text-sm px-6 font-medium">(Highest)</th>
              <th className="pb-2"></th>
            </tr>
          </thead>

          <tbody className="">
            <tr className="border-b">
              <th className="py-3 px-6" rowSpan={2}>
                <button
                  className="hover:text-yellow-500 duration-300"
                  title="Add to Watchlist"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </button>
              </th>
              <th className="py-3 px-6" rowSpan={2}>
                <a href="#" className="inline-flex items-center">
                  <Image
                    className="mr-2"
                    src={imgCabbage}
                    alt=""
                    height={40}
                    width={40}
                  />
                  Cabbage Wonderball
                </a>
              </th>
              <td className="py-3 px-6">1st Class</td>
              <td className="py-3 px-6 font-bold text-red-500">&#8369;23</td>
              <td className="py-3 px-6 font-bold text-emerald-500">
                &#8369;27
              </td>
              <td className="py-3 px-6 text-sm">
                {new Date().toLocaleString()}
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-3 px-6">2nd Class</td>
              <td className="py-3 px-6 font-bold text-red-500">&#8369;20</td>
              <td className="py-3 px-6 font-bold text-emerald-500">
                &#8369;24
              </td>
              <td className="py-3 px-6 text-sm">
                {new Date().toLocaleString()}
              </td>
            </tr>
          </tbody>

          <tbody className="">
            <tr className="border-b">
              <th className="py-3 px-6" rowSpan={2}>
                <button
                  className="hover:text-yellow-500 duration-300"
                  title="Add to Watchlist"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </button>
              </th>
              <th className="py-3 px-6" rowSpan={2}>
                <a href="#" className="inline-flex items-center">
                  <Image
                    className="mr-2"
                    src={imgBroccoli}
                    alt=""
                    height={40}
                    width={40}
                  />
                  Broccoli
                </a>
              </th>
              <td className="py-3 px-6">Trimmed</td>
              <td className="py-3 px-6 font-bold text-red-500">&#8369;20</td>
              <td className="py-3 px-6 font-bold text-emerald-500">
                &#8369;40
              </td>
              <td className="py-3 px-6 text-sm">
                {new Date().toLocaleString()}
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-3 px-6">Untrimmed</td>
              <td className="py-3 px-6 font-bold text-red-500">&#8369;10</td>
              <td className="py-3 px-6 font-bold text-emerald-500">
                &#8369;20
              </td>
              <td className="py-3 px-6 text-sm">
                {new Date().toLocaleString()}
              </td>
            </tr>
          </tbody>

          <tbody className="">
            <tr className="border-b">
              <th className="py-3 px-6" rowSpan={4}>
                <button
                  className="hover:text-yellow-500 duration-300"
                  title="Add to Watchlist"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </button>
              </th>
              <th className="py-3 px-6" rowSpan={4}>
                <a href="#" className="inline-flex items-center">
                  <Image
                    className="mr-2"
                    src={imgCarrot}
                    alt=""
                    height={40}
                    width={40}
                  />
                  Carrot
                </a>
              </th>
              <td className="py-3 px-6">Big</td>
              <td className="py-3 px-6 font-bold text-red-500">&#8369;14</td>
              <td className="py-3 px-6 font-bold text-emerald-500">
                &#8369;20
              </td>
              <td className="py-3 px-6 text-sm">
                {new Date().toLocaleString()}
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-3 px-6">ML</td>
              <td className="py-3 px-6 font-bold text-red-500"></td>
              <td className="py-3 px-6 font-bold text-emerald-500">&#8369;8</td>
              <td className="py-3 px-6 text-sm">
                {new Date().toLocaleString()}
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-3 px-6">Medium</td>
              <td className="py-3 px-6 font-bold text-red-500"></td>
              <td className="py-3 px-6 font-bold text-emerald-500">&#8369;5</td>
              <td className="py-3 px-6 text-sm">
                {new Date().toLocaleString()}
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-3 px-6">Lumpia</td>
              <td className="py-3 px-6 font-bold text-red-500">&#8369;1</td>
              <td className="py-3 px-6 font-bold text-emerald-500">&#8369;2</td>
              <td className="py-3 px-6 text-sm">
                {new Date().toLocaleString()}
              </td>
            </tr>
          </tbody>

          <tbody className="">
            <tr className="border-b">
              <th className="py-3 px-6" rowSpan={4}>
                <button
                  className="hover:text-yellow-500 duration-300"
                  title="Add to Watchlist"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </button>
              </th>
              <th className="py-3 px-6" rowSpan={4}>
                <a href="#" className="inline-flex items-center">
                  <Image
                    className="mr-2"
                    src={imgRadish}
                    alt=""
                    height={40}
                    width={40}
                  />
                  Radish Long
                </a>
              </th>
              <td className="py-3 px-6">Good</td>
              <td className="py-3 px-6 font-bold text-red-500">&#8369;20</td>
              <td className="py-3 px-6 font-bold text-emerald-500">
                &#8369;25
              </td>
              <td className="py-3 px-6 text-sm">
                {new Date().toLocaleString()}
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-3 px-6">Semi</td>
              <td className="py-3 px-6 font-bold text-red-500">&#8369;12</td>
              <td className="py-3 px-6 font-bold text-emerald-500">
                &#8369;15
              </td>
              <td className="py-3 px-6 text-sm">
                {new Date().toLocaleString()}
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-3 px-6">Big Size</td>
              <td className="py-3 px-6 font-bold text-red-500">&#8369;15</td>
              <td className="py-3 px-6 font-bold text-emerald-500">
                &#8369;12
              </td>
              <td className="py-3 px-6 text-sm">
                {new Date().toLocaleString()}
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-3 px-6">Putol</td>
              <td className="py-3 px-6 font-bold text-red-500">&#8369;8</td>
              <td className="py-3 px-6 font-bold text-emerald-500">
                &#8369;10
              </td>
              <td className="py-3 px-6 text-sm">
                {new Date().toLocaleString()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
