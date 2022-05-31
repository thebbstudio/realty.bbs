import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import HttpTable from '../../http/HttpTable';

const TableRealty = () => {
  async function getData() {
    const response = await HttpTable.getData();
    console.log(response.data);
    return response.data;
  }

  useEffect(() => {
    getData();
  });

  return (
    <Table>
      <thead>
        <tr>

        </tr>
      </thead>
    </Table>
  );
};

export default TableRealty;
