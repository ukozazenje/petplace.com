import React from 'react'
import Pagination from "react-paginating";

const pagination = ({limit, total, currentPage, onPageChange}) => {
  return (
    <Pagination
      total={total}
      limit={limit}
      // pageCount={3}
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
          { total === 0 ? "No Posts" :  `Page: ${currentPage} of ${totalPages}` }
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
