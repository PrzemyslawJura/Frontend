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
		title: 'Tasdasd',
        year: '12312'

	},
	{
		name: 'Diasdasdector',
        year: '12312'

	},
	{
		name: 'Yeasdasar',
        year: '1231231'

	},
];

export function TableTest() {
    return (
        <DataTable title="Movie List" columns={columns} data={data} pagination />
    );
}
