import React from 'react';
import ReactPaginate from 'react-paginate';
import Facts from './facts';

const List = ({ query, data, pageCount, handlePageClick }) => (
  <div className="react-paginate">
    Learn more about {query === '' ? 'historical events' : query} below: 
    <br />
    <Facts data={data} />
    <ReactPaginate 
      previousLabel={"previous"}
      nextLabel={"next"}
      breakLabel={<a href="">...</a>}
      breakClassName={"break-me"}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={handlePageClick}
      containerClassName={"pagination"}
      subContainerClassName={"pages pagination"}
      activeClassName={"active"} 
    />
  </div> 
);

export default List;
