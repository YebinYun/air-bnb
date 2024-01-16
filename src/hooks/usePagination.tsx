import React, { useState } from "react";

function usePagination(data: any, itemsPerPage: any) {
  const [Page, setPage] = useState(1);
  const maxPage = Math.ceil(data?.length / itemsPerPage);

  function pageData() {
    const post = data.post;
    const begin = (Page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return post?.slice(begin, end);
  }

  function next() {
    setPage((Page) => Math.min(Page + 1, maxPage));
  }

  function prev() {
    setPage((Page) => Math.max(Page - 1, 1));
  }

  function jump(page: any) {
    const pageNumber = Math.max(1, page);
    setPage((Page) => Math.min(pageNumber, maxPage));
  }

  return { next, prev, jump, pageData, Page, maxPage };
}

export default usePagination;
