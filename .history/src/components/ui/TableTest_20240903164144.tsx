import DataTable from "react-data-table-component";


export function TableTest({results, keys} : {results:any, keys:any}) {

    const columns = [
        {
            name: 'direcror',
            selector: (row:any) => row.id,
            sortable: true,
        }
    ];

    return (
        <>
                {console.log(keys[0])}
                <DataTable title="Workers" columns={columns} data={results.results} pagination />
        </>
    );
}
