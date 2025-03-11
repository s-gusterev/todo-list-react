import { createContext } from 'react';
import { StoreContextType } from './model';

export const StoreContext = createContext<StoreContextType | undefined>(
  undefined,
);
