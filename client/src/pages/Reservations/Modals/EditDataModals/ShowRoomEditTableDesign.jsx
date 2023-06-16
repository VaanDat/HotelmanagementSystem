import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

const ShowRoomEditTableDesign = ({ tableInstance, filter, selectedID, deliverroom }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    const matchingRow = rows.find(row => row.original.ID === selectedID);
    setSelectedRow(matchingRow);
    deliverroom(matchingRow)
  }, [selectedID, rows]);

  const handleRowClick = (id) => {
    setSelectedRow(rows.find(row => row.original.ID === id));
  };

  return (
    <div className='h-[10rem] w-[32rem] overflow-auto'>
      <table {...getTableProps()} className="w-[30rem] table-fixed bg-white rounded-lg">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  className={classNames(
                    'px-4 py-2 text-left text-sm font-medium text-gray-600 uppercase tracking-wider',
                    column.className,
                  )}
                >
                  {column.render('Header')}
                  <div className='absolute translate-y-[-5.5rem] translate-x-[-1rem]'>
                    {column.canFilter ? column.render("Filter") : null}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            const isRowSelected = row === selectedRow;

            return (
              <tr
                {...row.getRowProps()}
                className={classNames("border-t border-gray-200", { "bg-blue-200": isRowSelected })}
                onClick={() => handleRowClick(row.original.ID)}
              >
                {row.cells.map(cell => (
                  <td
                    {...cell.getCellProps()}
                    className={classNames(
                      'px-4 py-2 text-sm font-normal text-gray-900',
                      cell.column.className,
                    )}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowRoomEditTableDesign;
