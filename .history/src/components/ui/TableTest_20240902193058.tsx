import DataTable from "react-data-table-component";

const columns = [
	{
		name: 'Id',
		selector: (row:any) => row.id,
		sortable: true,
	},
	{
		name: 'Director',
		selector: (row:any) => row.director,
		sortable: true,
	},
	{
		name: 'Year',

		sortable: true,
	},
];

export function TableTest(results:any) {
    return (
        <DataTable title="Movie List" columns={columns} data={results.results} pagination />
    );
}
