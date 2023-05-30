import { View } from '@/types';
import views from '@/variables/views';
import React, { useState } from 'react';

interface ProviderProps {
   children: React.ReactNode;
}

interface ProviderStates {
   currentView: View;
   activeLetter: boolean;
   submitStatus:
      | {
           sent: true;
           error: false;
        }
      | {
           sent: false;
           error: true;
        }
      | {
           sent: false;
           error: false;
        };
}

interface ContextProps {
   currentView: View;
   setCurrentView: React.Dispatch<React.SetStateAction<View>>;
   activeLetter: boolean;
   setActiveLetter: React.Dispatch<React.SetStateAction<boolean>>;
   submitStatus:
      | {
           sent: true;
           error: false;
        }
      | {
           sent: false;
           error: true;
        }
      | {
           sent: false;
           error: false;
        };
   setSubmitStatus: React.Dispatch<React.SetStateAction<ContextProps['submitStatus']>>;
}

const Context = React.createContext<ContextProps>({} as ContextProps);

const Provider = (props: ProviderProps) => {
   const initialSubmitStatus: ContextProps['submitStatus'] = {
      sent: false,
      error: false,
   };

   const [currentView, setCurrentView] = useState<ProviderStates['currentView']>(views['home']);
   const [activeLetter, setActiveLetter] = useState<ProviderStates['activeLetter']>(false);
   const [submitStatus, setSubmitStatus] =
      useState<ProviderStates['submitStatus']>(initialSubmitStatus);

   return (
      <Context.Provider
         value={{
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
