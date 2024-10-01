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
            name: 'Director',
            selector: (row:any) => row.director,
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
