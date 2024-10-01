import { useEffect, useState } from 'react';
import { Table } from "flowbite-react";

export function TableSite({results, keys} : {results:any, keys:any}) {
  return (
    <div className="overflow-x-auto">
      <Table striped>
        <Table.Head>
          {keys.map((key:any) =>
            <Table.HeadCell>{key}</Table.HeadCell>
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
                  {result}.id
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
