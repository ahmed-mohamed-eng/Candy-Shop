import React from 'react'
import ReactPaginate from 'react-paginate';
function Pagination() {
    const handlePageClick = ()=>{

    }

  return (
    <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        pageCount={100}
        marginPagesDisplayed={2}
        breakLabel={0}
        pageRangeDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}

      />
  )
}

export default Pagination