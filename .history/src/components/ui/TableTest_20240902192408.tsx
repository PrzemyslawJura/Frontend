import DataTable from "react-data-table-component";

const columns = [
	{
		name: 'Title',
		selector: (row:any) => row.title,
		sortable: true,
	},
	{
		name: 'Director',
		selector: (row:any) => row.director,
		sortable: true,
	},
	{
		name: 'Year',
		selector: (row:any) => row.year,
		sortable: true,
	},
];

const data = [
	{
		name: 'Title',
        year: '12312'

	},
	{
		name: 'Director',
        year: '12312'

	},
	{
		name: 'Year',
        year: '12312'

	},
];

export function TableTest() {
    return (
        <DataTable title="Movie List" columns={columns} data={data} pagination />
    );
}
