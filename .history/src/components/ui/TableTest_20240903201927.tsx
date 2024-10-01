import DataTable from "react-data-table-component";

export function TableTest(results:any, columns:any) {
    return (
        <>
            <DataTable title="Workers" columns={columns} data={results.results} pagination />
        </>
    );
}
