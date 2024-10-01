import DataTable from "react-data-table-component";
import { useEffect, useState } from 'react';

export function TableTest({results, keys} : {results:any, keys:any}) {
    const [workerss, setWorkerss] = useState(['a', 'b']);
  return (
    <DataTable
    columns={workers}
    data={workerss}
    pagination
  />
  );
}
