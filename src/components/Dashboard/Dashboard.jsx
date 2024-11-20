import DataTable from "../DataTable";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [allTools, setAllTools] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalTools, setTotalTools] = useState(0);

  // set pagination
  const perPage = 5;
  const offset = (currentPage - 1) * perPage;

  // found total page
  let totalPages = Math.ceil(totalTools / perPage);

  // next page handle
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // prev page handle
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  /**
   * Pagination
   */
  useEffect(() => {
    fetch(TATP.ajax_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      body: new URLSearchParams({
        action: "tatp-posts-request",
        security: TATP.nonce,
        number: perPage,
        offset: offset,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setAllTools(
            res?.data.sort(
              (a, b) => Number(b.total_clicks) - Number(a.total_clicks)
            )
          );
        }
      });
  }, [currentPage]);

  /**
   * get all items count
   */
  useEffect(() => {
    fetch(TATP.ajax_url + "?action=tatp-total-posts")
      .then((res) => res.json())
      .then((res) => {
        if (res?.success) {
          setTotalTools(res?.data);
        }
      });
  }, []);

  return (
    <>
      <h2>Dashboard</h2>
      <DataTable
        tools={allTools}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        currentPage={currentPage}
        totalPages={totalPages}
        totalTools={totalTools}
      />
    </>
  );
};

export default Dashboard;
