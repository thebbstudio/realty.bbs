import React from 'react';

interface IProps {
  children: React.ReactNode
}

const Thead = ({ children }: IProps) => (
  <th className="text-nowrap text-center px-3 py-2">{children}</th>
);

export default Thead;
