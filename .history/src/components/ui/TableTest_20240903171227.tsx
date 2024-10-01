import DataTable, { TableColumn } from "react-data-table-component";
import { useEffect, useState } from 'react';

export function TableTest(results:any, keys:any) {
    const [columnTable, setcolumnTable] = useState<TableColumn<any>[]>([]);

    const addColumnTable = (newColumnTable: TableColumn<any>) => {
        setcolumnTable((prevColumnTable) => [...prevColumnTable, newColumnTable]);
    };

    useEffect(() => {
        () => addColumnTable({ name: "Id", selector: (row:any) => row.id, sortable: true });
        () => addColumnTable({ name: "asd", selector: (row:any) => row.id, sortable: true });
      }, [])



    return (
        <>

                {console.log(columnTable)}
                <DataTable title="Workers" columns={columnTable} data={results.results} pagination />
        </>
    );
}
