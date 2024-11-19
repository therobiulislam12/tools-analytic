const DataTable = ({ tools = [] }) => {
  return (
    <table
      border="1"
      style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}
    >
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Total Clicks</th>
        </tr>
      </thead>
      <tbody>
        {tools.map((tool) => (
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
