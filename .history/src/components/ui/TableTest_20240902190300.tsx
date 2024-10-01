import DataTable from "react-data-table-component";

export function TableTest() {
  return (
    <DataTable
    columns={columns}
    data={data}
    pagination
  />
  );
}
