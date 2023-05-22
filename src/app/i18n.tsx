import { createContext, useCallback, useContext } from "react";
import en from './../translations/en.json';
import es from './../translations/es.json';
import { useRouter } from "next/router";

interface ContextProps {
   t: (key: string) => string;
}

interface I18NProviderProps {
   children: React.ReactNode;
}

const I18NContext = createContext<ContextProps | null>(null);

const languages = {es, en};

export function I18NProvider({ children }: I18NProviderProps) {
   const { locale } = useRouter();
   const t = useCallback((key: string) => {
      return languages[locale as keyof typeof languages][key as keyof typeof en];
   }, [locale]);

   return <I18NContext.Provider value={{ t }}>{children}</I18NContext.Provider>;
};

export function useI18N() {
   const context = useContext(I18NContext);
   if (!context) {
      throw new Error('useI18N must be used within an I18NProvider');
   }
   return context;
}