import { FaTrash, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setIsConfirmOpen } from "../redux/storeSlice";

const DeleteConfirm = ({ massage, OnDelete }) => {
  const isConfirmOpen = useSelector((state) => state.app.isConfirmOpen);
  const dispatch = useDispatch();
  return (
    <>
      {isConfirmOpen && (
        <div
          id="deleteModal"
          className={
            "mx-auto overflow-y-auto overflow-x-hidden flex justify-center items-start fixed top-0 right-0 left-0 z-50 w-full md:h-full" +
            (isConfirmOpen ? " block" : " hidden")
          }
        >
          <div className="inline-block relative p-1 w-full max-w-md h-full md:h-auto">
            <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
              <button
                type="button"
                className="text-gray-400 absolute cursor-pointer top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="deleteModal"
                onClick={() => dispatch(setIsConfirmOpen())}
              >
                <FaTimes className="w-5 h-5" />
              </button>

              <FaTrash className="text-red-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto" />

              <p className="mb-4 text-red-900 dark:text-gray-300">{massage}</p>

              <div className="flex justify-center items-center space-x-4">
                <button
                  onClick={() => dispatch(setIsConfirmOpen(false))}
                  data-modal-toggle="deleteModal"
                  type="button"
                  className="py-2 px-3 mx-2 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  نه، لغو
                </button>

                <button
                  onClick={OnDelete}
                  type="submit"
                  className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
                >
                  بله ، مطمئن هستم
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteConfirm;
