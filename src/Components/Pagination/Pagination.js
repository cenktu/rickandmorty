import React from 'react';
import ReactPaginate from 'react-paginate';
import "./Pagination.css";
const Pagination = ({ totalPages, onPageChange }) => {
    
    return (
        
        <ReactPaginate
            className="pagination justify-content-center"
            breakLabel="..."
            nextLabel="Next"
            onPageChange={onPageChange}
            pageRangeDisplayed={5}
            pageCount={totalPages}
            previousLabel="Previous"
            renderOnZeroPageCount={null}
            activeClassName='active'
        />
    );
};

export default Pagination;
