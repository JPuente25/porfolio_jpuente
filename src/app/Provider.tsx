import { View } from '@/types';
import views from '@/variables/views';
import React, { useState } from 'react';

interface ProviderProps {
   children: React.ReactNode;
}

interface ProviderStates {
   showMenu: boolean;
   currentView: View;
}

interface ContextProps {
   showMenu: boolean;
   setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
   currentView: View;
   setCurrentView: React.Dispatch<React.SetStateAction<View>>;
}

const Context = React.createContext<ContextProps>({} as ContextProps);

const Provider = (props: ProviderProps) => {
   const [showMenu, setShowMenu] = useState<ProviderStates['showMenu']>(false);
   const [currentView, setCurrentView] = useState<ProviderStates['currentView']>(views['home']);

   return (
      <Context.Provider value={{ showMenu, setShowMenu, currentView, setCurrentView }}>
         {props.children}
      </Context.Provider>
   );
};

export { Context, Provider };
