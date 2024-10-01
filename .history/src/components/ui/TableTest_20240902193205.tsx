import DataTable from "react-data-table-component";

const columns = [
	{
		name: 'Id',
		sortable: true,
	},
	{
		name: 'Director',

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
