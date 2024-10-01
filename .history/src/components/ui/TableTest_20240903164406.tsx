import DataTable from "react-data-table-component";


export function TableTest(results:any, keys:any) {

    const columns = [
        {
            name: 'id',
            selector: (row:any) => row.keys[0],
            sortable: true,
        }
    ];

    return (
        <>
                <DataTable title="Workers" columns={columns} data={results.results} pagination />
        </>
    );
}
