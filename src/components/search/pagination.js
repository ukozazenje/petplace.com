import React from 'react'
import Pagination from "react-paginating";

const pagination = ({total, currentPage, onPageChange}) => {
  return (
    <Pagination
      total={total}
      limit={6}
      pageCount={3}
      currentPage={currentPage}
    >
      {({
        pages,
        currentPage,
        hasNextPage,
        hasPreviousPage,
        previousPage,
        nextPage,
        totalPages,
        getPageItemProps
      }) => (
        <div>
          {hasPreviousPage && (
            <button
              {...getPageItemProps({
                pageValue: previousPage,
                onPageChange: onPageChange
              })}
            >
              {"<"}
            </button>
          )}
            Page: {currentPage} of {totalPages}
          {hasNextPage && (
            <button
              {...getPageItemProps({
                pageValue: nextPage,
                onPageChange: onPageChange
              })}
            >
              {">"}
            </button>
          )}
        </div>
      )}
    </Pagination>
  )
}

export default pagination
