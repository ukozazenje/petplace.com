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
        <div className="pagination-buttons">
          {hasPreviousPage && (
            <button
              className="prev"
              {...getPageItemProps({
                pageValue: previousPage,
                onPageChange: onPageChange
              })}
            >
              {""}
            </button>
          )}
            Page: {currentPage} of {totalPages}
          {hasNextPage && (
            <button className="next"
              {...getPageItemProps({
                pageValue: nextPage,
                onPageChange: onPageChange
              })}
            >
              {""}
            </button>
          )}
        </div>
      )}
    </Pagination>
  )
}

export default pagination
