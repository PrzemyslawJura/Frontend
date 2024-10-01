import { Table } from "flowbite-react";

export function TableSite({results, keys} : {results:any, keys:any}) {
  return (
    <div className="overflow-x-auto">
      <Table striped>
        <Table.Head>
          {keys.map((key:any) =>
            <Table.HeadCell>
              {key}
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5.05 3C3.291 3 2.352 5.024 3.51 6.317l5.422 6.059v4.874c0 .472.227.917.613 1.2l3.069 2.25c1.01.742 2.454.036 2.454-1.2v-7.124l5.422-6.059C21.647 5.024 20.708 3 18.95 3H5.05Z"/>
              </svg>
</Table.HeadCell>
          )}
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            {results.map((result:any) =>
              <>
                {keys.map((key:any) =>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {result[key]}


                   </Table.Cell>
                )}
                <Table.Cell>
                  <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">Edit</a>
                </Table.Cell>
              </>
            )}
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
