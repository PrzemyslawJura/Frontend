import DataTable from "react-data-table-component";
import { useEffect, useState } from 'react';

type ColumnTable = {
    title: string;
    selector: string;
    sortable: boolean;
  };

export function TableTest(results:any, keys:any) {
    const [columnTable, setcolumnTable] = useState<ColumnTable[]>([]);

    const addColumnTable = (newColumnTable: ColumnTable) => {
        setcolumnTable((prevColumnTable) => [...prevColumnTable, newColumnTable]);
    };

    const columns = [
        {
            name: 'id',
            selector: (row:any) => row.id,
            sortable: true,
        }
    ];

    return (
        <>
                {addColumnTable({ title: "Id", selector: 'id', sortable: true })}
                <DataTable title="Workers" columns={columnTable} data={results.results} pagination />
        </>
    );
}
