import DataTable from "../DataTable";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [allTools, setAllTools] = useState([]);

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
          setAllTools(res?.data.sort((a, b) => a.total_clicks.localeCompare(b.total_clicks)));
        }
      });
  }, []);

  return (
    <>
      <h2>Dashboard</h2>
      <DataTable tools={allTools} />
    </>
  );
};

export default Dashboard;
