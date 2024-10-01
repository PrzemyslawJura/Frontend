import DataTable, { TableColumn } from "react-data-table-component";
import { useEffect, useState } from 'react';

export function TableTest(results:any, keys:any) {
    const [columnTable, setcolumnTable] = useState<TableColumn<any>[]>([]);

    const addColumnTable = (newColumnTable: TableColumn<any>) => {
        setcolumnTable((prevColumnTable) => [...prevColumnTable, newColumnTable]);
    };

    return (
        <>
                {addColumnTable({ name: "Id", selector: (row:any) => row.id, sortable: true })}
                <DataTable title="Workers" columns={columnTable} data={results.results} pagination />
        </>
    );
}
