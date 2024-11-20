import { useState } from "react";

const DataTable = ({ tools = [] }) => {
  const [titleSortBy, setTitleSortBy] = useState("");
  const [clickSortBy, setClickSortBy] = useState("desc");

  const allTools = tools;

  const handleTitleSort = () => {
    if (titleSortBy === "desc") {
      setTitleSortBy("asc");
      allTools.sort((a, b) => a.title.localeCompare(b.title));
    } else if(titleSortBy === 'asc'){
      setTitleSortBy("desc");
      allTools.sort((a, b) => b.title.localeCompare(a.title));
    } else{
      setTitleSortBy('asc');
      allTools.sort((a, b) => a.title.localeCompare(b.title));
    }
  };

  const handleClickSort = () => {
    if (clickSortBy === "desc") {
      setClickSortBy("asc");
      allTools.sort((a, b) => Number(a.total_clicks) - Number(b.total_clicks));
    } else {
      setClickSortBy("desc");
      allTools.sort((a, b) => Number(b.total_clicks) - Number(a.total_clicks));
    }
  };

  return (
    <table className="wp-list-table widefat fixed striped table-view-list posts">
      <thead>
        <tr>
          <td className="manage-column">
            <span>ID</span>
          </td>
          <th
            scope="col"
            id="title"
            className={`manage-column column-title column-primary sorted ${titleSortBy ? titleSortBy : ''}`}
            aria-sort="ascending"
            abbr="Title"
          >
            <div className="tatp-table-head" onClick={handleTitleSort}>
              <span>Tool Title</span>
              <span className="sorting-indicators">
                <span
                  className="sorting-indicator asc"
                  aria-hidden="true"
                ></span>
                <span
                  className="sorting-indicator desc"
                  aria-hidden="true"
                ></span>
              </span>
            </div>
          </th>
          <th
            scope="col"
            id="total-clicks"
            className={`manage-column column-title column-primary sorted ${clickSortBy ? clickSortBy : ''}`}
            aria-sort="descending"
            abbr="Title"
          >
            <div className="tatp-table-head" onClick={handleClickSort}>
              <span>Total Clicks</span>
              <span className="sorting-indicators">
                <span
                  className="sorting-indicator asc"
                  aria-hidden="true"
                ></span>
                <span
                  className="sorting-indicator desc"
                  aria-hidden="true"
                ></span>
              </span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {allTools.map((tool) => (
          <tr key={tool.id}>
            <td># {tool.id}</td>
            <td>{tool.title}</td>
            <td>{tool.total_clicks || 0}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
