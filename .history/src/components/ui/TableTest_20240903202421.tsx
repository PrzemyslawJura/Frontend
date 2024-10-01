import DataTable from "react-data-table-component";

export function TableTest(results:any, columns:any) {
    return (
        <>
        {console.log(columns)}
        {console.log(results.results)}
            <DataTable title="Workers" columns={columns} data={results.results} pagination />
        </>
    );
}
