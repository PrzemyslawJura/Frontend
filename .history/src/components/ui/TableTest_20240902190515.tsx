import DataTable from "react-data-table-component";

export function TableTest({results, keys} : {results:any, keys:any}) {
  return (
    <DataTable
    columns={keys}
    data={results}
    pagination
  />
  );
}
