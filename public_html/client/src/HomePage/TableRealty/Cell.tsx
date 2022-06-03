import React from 'react';

interface ICell {
  className: string,
  key: React.Key,
  children: React.ReactNode
}

const Cell = ({ key, children, className }: ICell) => (
  <td className={className} key={key}>{children}</td>
);

export default Cell;
