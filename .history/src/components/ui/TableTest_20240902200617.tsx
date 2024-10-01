import DataTable from "react-data-table-component";


export function TableTest({results, keys} : {results:any, keys:any}) {

    const columns = [
        {
            name: keys.results[0],
            selector: (row:any) => row.keys[0],
            sortable: true,
        },
        {
            name: keys.results[1],
            selector: (row:any) => row.keys[1],
            sortable: true,
        },
        {
            name: keys.results[2],
            selector: (row:any) => row.keys[2],
            sortable: true,
        },
    ];

    return (
        <DataTable title="Workers" columns={columns} data={results.results} pagination />
    );
}
