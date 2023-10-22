import { useState } from "react";
import headersData from "../data/theader.json";
import { useDispatch, useSelector } from "react-redux";
import { setIsConfirmOpen } from "../redux/storeSlice";
import axios from "axios";
import DeleteConfirm from "./DeleteConfirm";
import { BASE_URL } from "../../api/apiConfig";
import { FaTrash } from "react-icons/fa";
import { setDeleteRows } from "../redux/panelSlice";

export const Table = ({ data }) => {
  const [Headers] = useState(headersData);
  const dispatch = useDispatch();
  const handleConfirm = async () => dispatch(setIsConfirmOpen());

  const handleDelete = async (id,index) => {
    try {
      await axios.delete(`${BASE_URL}Soldiers/${id}`);
      dispatch(setDeleteRows(index));
      dispatch(setIsConfirmOpen());
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4 h-96 bg-[#2E323C]">
        <table className="table-auto border w-full text-sm text-center text-gray-500">
          <thead className="text-xs bg-[#5B7D87] text-white">
            <tr>
              {Headers.headersData.map((profile) => {
                const { id, title } = profile;
                return (
                  <th
                    scope="col"
                    className="px-2 py-3 border border-[#2E323C]"
                    key={id}
                  >
                    {title}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="text-center">
            {data.length === 0
              ? null
              : data.map((row, index) => (
                  <tr
                    key={index}
                    className="bg-white border border-[#2E323C] text-center"
                  >
                    <td className="border border-[#2E323C]">{index + 1}</td>
                    <td className="border border-[#2E323C]">{row.firstName}</td>
                    <td className="border border-[#2E323C]">{row.lastName}</td>
                    <td className="border border-[#2E323C]">
                      {row.fatherName}
                    </td>
                    <td className="border border-[#2E323C]">{row.rank}</td>
                    <td className="border border-[#2E323C]">
                      {row.nationalCode}
                    </td>
                    <td className="border border-[#2E323C]">
                      {row.personnelCode}
                    </td>
                    <td className="border border-[#2E323C]">
                      {row.healthType}
                    </td>
                    <td className="border border-[#2E323C]">{row.entryDate}</td>
                    <td className="border border-[#2E323C]">
                      {row.serviceStartDate}
                    </td>
                    <td className="border border-[#2E323C]">
                      {row.serviceEndDate}
                    </td>
                    <td className="border border-[#2E323C]">
                      {row.departmentName}
                    </td>
                    <td className="border border-[#2E323C]">
                      {row.isActive ? "فعال" : "غیرفعال"}
                    </td>
                    <td className="border border-[#2E323C]">
                      <DeleteConfirm
                        massage={`آیا مطمئن هستید که میخواهید سرباز ${row.firstName} ${row.lastName} را حذف کنید؟`}
                        OnDelete={() => handleDelete(row.id,index)}
                      />
                      <FaTrash
                        className="inline-block border-0 cursor-pointer"
                        onClick={() => handleConfirm()}
                      />
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
