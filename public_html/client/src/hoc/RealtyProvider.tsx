import React, { createContext, useMemo, useState } from 'react';
import Flat from '../models/Flat';
import House from '../models/House';
import Room from '../models/Room';

interface IRealtyContext {
  realty: Flat | Room | House | undefined
  setRealty: React.Dispatch<React.SetStateAction<Flat | Room | House | undefined>>
}

export const RealtyContext = createContext<IRealtyContext | null>(null);

interface IProps {
  children: React.ReactNode
}

const RealtyProvider = ({ children }: IProps) => {
  const [realty, setRealty] = useState<Flat | Room | House>();

  const value = useMemo(() => ({ realty, setRealty }), [realty]);

  return (
    <RealtyContext.Provider value={value}>
      {children}
    </RealtyContext.Provider>
  );
};

export default RealtyProvider;
