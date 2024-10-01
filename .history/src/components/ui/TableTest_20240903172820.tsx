import DataTable, { TableColumn } from "react-data-table-component";
import { useEffect, useState } from 'react';

export function TableTest(results:any, keys:any) {
    const columnTable = keys.map((key:any) => ({
        name: key.name,
        selector: (row:any) => row.key,
        sortable: true,
      }));


    return (
        <>

                {console.log(columnTable)}
                <DataTable title="Workers" columns={columnTable} data={results.results} pagination />
        </>
    );
}
