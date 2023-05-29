import { IGamesList } from '@/interfaces/context/IAPIService';
import React, { useState } from 'react'
import { SimpleGrid } from '@chakra-ui/react';
import ProductCard from '@/components/helpers/product-card';

import styles from './paginate.module.css'


// paginate
import ReactPaginate from 'react-paginate';

function Items({ currentItems }:{currentItems: IGamesList[]}) {
  return (
    <>
      {currentItems && (
        <SimpleGrid mt={15} gap={5} columns={[1, 2, 3, 4]}>
         {currentItems.map((game, i) => (
           <ProductCard key={i} game={game} />
           ))}
        </SimpleGrid> 
      )}
    </>
  );
}

const Paginate = ({itemPerPage, items}: any) => {
 // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event:any) => {
    const newOffset = (event.selected * itemPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          activeClassName={styles.activePaginateLink}
          className={styles.paginateBox}
        />
    </>
  );
}

export default Paginate