import DataTable from 'react-data-table-component';

type Column<T> = {
  name: string;
  selector: (row: T) => any;
  sortable?: boolean;
};

type DataTableProps<T> = {
  columns: Column<T>[];
  data: T[];
  title: string;
};

function TableTest<T>({ columns, data }: DataTableProps<T>): JSX.Element {
  const dataTableColumns = columns.map((col) => ({
    name: col.name,
    selector: col.selector,
    sortable: col.sortable || false,
  }));

  return (
    <DataTable
      columns={dataTableColumns}
      data={data}
    />
  );
}

export default TableTest;