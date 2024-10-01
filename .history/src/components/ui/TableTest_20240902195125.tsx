import DataTable from "react-data-table-component";


export function TableTest(results:any) {

    const columns = [
        {
            name: 'Id',
            selector: (row:any) => row.id,
            sortable: true,
        },
        {
            name: 'firstName',
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
