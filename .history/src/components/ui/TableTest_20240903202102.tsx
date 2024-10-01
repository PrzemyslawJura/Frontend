import DataTable from "react-data-table-component";

export function TableTest(results:any, columns:any) {
    return (
        <>
            <DataTable title="Workers" columns={columns.result} data={results.results} pagination />
        </>
    );
}
