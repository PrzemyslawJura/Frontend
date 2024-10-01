import DataTable from "react-data-table-component";


export function TableTest({results, keys} : {results:any, keys:any}) {

    const columns = [
        {
            name: keys[0],
            selector: (row:any) => row.keys[0],
            sortable: true,
        }
    ];

    return (
        <>
                console.log(keys[0]);
                <DataTable title="Workers" columns={columns} data={results.results} pagination />
        </>
    );
}
