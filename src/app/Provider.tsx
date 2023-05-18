import { View } from '@/types';
import views from '@/variables/views';
import React, { useState } from 'react';

interface ProviderProps {
   children: React.ReactNode;
}

interface ProviderStates {
   showMenu: boolean;
   currentView: View;
   activeLetter: boolean;
   submitStatus: {
      sent: boolean;
      error: boolean;
   };
}

interface ContextProps {
   showMenu: boolean;
   setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
   currentView: View;
   setCurrentView: React.Dispatch<React.SetStateAction<View>>;
   activeLetter: boolean;
   setActiveLetter: React.Dispatch<React.SetStateAction<boolean>>;
   submitStatus: {
      sent: boolean;
      error: boolean;
   };
   setSubmitStatus: React.Dispatch<
      React.SetStateAction<{
         sent: boolean;
         error: boolean;
      }>
   >;
}

const Context = React.createContext<ContextProps>({} as ContextProps);

const Provider = (props: ProviderProps) => {
   const initialSubmitStatus = {
      sent: false,
      error: false,
   };

   const [showMenu, setShowMenu] = useState<ProviderStates['showMenu']>(false);
   const [currentView, setCurrentView] = useState<ProviderStates['currentView']>(views['home']);
   const [activeLetter, setActiveLetter] = useState<ProviderStates['showMenu']>(false);
   const [submitStatus, setSubmitStatus] =
      useState<ProviderStates['submitStatus']>(initialSubmitStatus);

   return (
      <Context.Provider
         value={{
            showMenu,
            setShowMenu,
            currentView,
            setCurrentView,
            activeLetter,
            setActiveLetter,
            submitStatus,
            setSubmitStatus,
         }}>
         {props.children}
      </Context.Provider>
   );
};

export { Context, Provider };
