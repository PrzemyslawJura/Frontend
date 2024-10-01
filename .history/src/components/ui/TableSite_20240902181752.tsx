import { Table } from "flowbite-react";

export function TableSite({results, keys} : {results:any, keys:any}) {
  return (
    <div className="overflow-x-auto">
      <Table striped>
        <Table.Head>
          {keys.map((key:any) =>
            <Table.HeadCell>
              {key}
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"/>
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
