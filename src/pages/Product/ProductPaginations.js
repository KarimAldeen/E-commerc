import React from 'react'
import ReactPaginate from "react-paginate";
import { ChevronLeft, ChevronRight } from "react-feather";

function ProductPaginations({page  , handlePageChange , filterIsApplied , totalRows}) {
    
  return (
        <ReactPaginate
                previousLabel={<ChevronLeft size={15} />}
                nextLabel={<ChevronRight size={15} />}
                breakLabel="..."
                breakClassName="break-me"
                pageCount={totalRows }
                containerClassName="vx-pagination separated-pagination pagination-center pagination-sm mb-0 mt-2"
                activeClassName="active"
                forcePage={
                  filterIsApplied ? 1 : page - 1
                }
                onPageChange={(v) => {
                    handlePageChange(v);
                  
                }}
              />  )
}

export default ProductPaginations