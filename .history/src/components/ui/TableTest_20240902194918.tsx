import DataTable from "react-data-table-component";
import { useEffect, useState } from 'react';


export function TableTest({results, keys} : {results:any, keys:any}) {
    const columns = [
        {
            name: 'Id',
            selector: (row:any) => row.id,
            sortable: true,
        },
        {
            name: 'firstname',
            selector: (row:any) => row.firstname,
            sortable: true,
        },
        {
            name: 'Year',
            selector: (row:any) => row.year,
            sortable: true,
        },
    ];

    return (
        <DataTable title="Workers" columns={columns} data={results.results} pagination />
    );
}
