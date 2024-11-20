import DataTable from "../DataTable";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [allTools, setAllTools] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const totalTools = allTools.length;

    // set pagination
    const perPage = 2;
    const offset = (currentPage - 1) * perPage;
  
    // found total page
    let totalPages = Math.ceil(totalTools / perPage);

  useEffect(() => {
    fetch(TATP.ajax_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      body: new URLSearchParams({
        action: "tatp-posts-request",
        security: TATP.nonce,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setAllTools(res?.data.sort((a, b) => Number(b.total_clicks) - Number(a.total_clicks)));
        }
      });
  }, []);

  console.log(totalPages);

  return (
    <>
      <h2>Dashboard</h2>
      <DataTable tools={allTools} />
    </>
  );
};

export default Dashboard;
