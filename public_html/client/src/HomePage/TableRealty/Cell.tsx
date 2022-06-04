import React from 'react';

interface IProps {
  children: React.ReactNode
}

const Cell = ({ children }: IProps) => (
  <td className="text-nowrap text-center px-2 py-1">{children}</td>
);

export default Cell;
