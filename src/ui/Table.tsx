import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from "react-paginate";

interface TableProps {
  data: any[];
  columns: any[];
  link: any[];
  itemsPerPage: number;
  onEdit?: Function;
  onDelete?: Function;
  loading: boolean;
  showCheckbox
}

const TableComponent: React.FC<TableProps> = ({
  data,
  columns,
  link,
  itemsPerPage,
  onEdit,
  onDelete,
  loading,
  showCheckbox
}) => {
//   const history = useHistory();

  const [page, setPage] = useState(0);
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const totalPages = Math.ceil(data?.length / itemsPerPage);

  const startIndex = page  * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data?.slice(startIndex, endIndex);
  const remainingItems = data?.slice(page * itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setPage(selected);
  };

  const goToPage = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const handleSelection = (item: any) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((selected) => selected !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const selectAllItems = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems([...data]);
    }
    setSelectAll(!selectAll);
  };

//   const handleLinkClick = (linkItem: any) => {
//     if (linkItem.action) {
//       linkItem.action();
//     } else {
//       history.push(linkItem.to);
//     }
//   };


  return (
    <div>
      {/* ... your loading skeleton code ... */}
      <table className="w-full">
        <thead className="text-black  px-3 rounded-lg">
          <tr className="bg-[#FFF9E3]">
          {showCheckbox && (
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="w-6 h-6 cursor-pointer text-blue bg-white border-gray rounded hover:border-blue focus:ring-2"
                  checked={selectAll}
                  onChange={selectAllItems}
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            )}
            {columns.map((column) => (
              <th key={column.value} scope="col" className="p-6 whitespace-nowrap text-center">
                {column.text}
              </th>
            ))}
            <th scope="col" className="p-4 text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedData?.map((item, index) => (
            <tr key={item.id} className="bg-white border-b border-gray-dark">
              {showCheckbox && (
              <td className="w-4 p-2">
                <div className="flex items-center">
                  <input
                    id={`checkbox-table-search-${index}`}
                    type="checkbox"
                    className="w-6 h-6 cursor-pointer text-blue bg-white border-gray rounded hover:border-blue focus:ring-2"
                    checked={selectedItems.includes(item)}
                    onChange={() => handleSelection(item)}
                  />
                  <label htmlFor={`checkbox-table-search-${index}`} className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
               )}
              {columns.map((column) => (
                <td
                  key={column.value}
                  className="text-black leading-tight p-4 text-center font-medium text-md whitespace-nowrap"
                >
                    {column.value === 'verif' ? (
                    item[column.value].icon ? (
                        <div className="flex items-center justify-center">
                        {React.createElement(item[column.value].icon)}
                        {item[column.value].text}
                        </div>
                    ) : (
                        <span>{item[column.value].text}</span>
                    )
                    ) : column.value === 'active' ? (
                    item[column.value] ? (
                        <span className="bg-green-deep text-white border p-2 rounded-lg">Successful</span>
                    ) : (
                        <span className="bg-red text-white border p-2 rounded-lg">Failed</span>
                    )
                    ) : (
                    item[column.value]
                    )}

                    
                  {/* ... Logic for rendering cell content ... */}
                </td>
              ))}
              <td className="relative text-center px-4 py-4 text-2xl cursor-pointer font-bold text-black">
                {/* ... Dropdown menu code ... */}
                View
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot className="text-black bg-white border-t border-gray-dark shadow-lg">
        <tr>
          <td colspan="7" className="w-full px-6 py-4">
            <div className="flex w-full justify-between">
            {remainingItems?.length > 0 && (
            <tr>
              <td colSpan={columns.length + 2} className="px-6 uppercase py-4 text-sm text-gray-500">
                {remainingItems.length} More
              </td>
            </tr>
          )}
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={Math.ceil(data.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination flex flex-col space-x-5"}
          activeClassName={"bg-blue-500 text-white border rounded-md p-2"}
          previousClassName={" p-2 rounded-md cursor-pointer"}
          nextClassName={" p-2 rounded-md cursor-pointer"}
          pageClassName={" p-2 rounded-md cursor-pointer"}
          pageLinkClassName={"hover:bg-gray-200"}
        />
            
  </div>
  </td>
  </tr>
  </tfoot>
      </table>
    </div>
  );
};

export default TableComponent;
