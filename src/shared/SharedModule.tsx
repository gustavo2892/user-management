import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { I18nProvider } from './i18n';
import ReactQueryClientProvider from './query/providers/ReactQueryClientProvider';
import { ThemeProvider } from "./theme/ThemeProvider";
import { store } from './redux/store';

export const SharedModule: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Provider store={store}>
    <I18nProvider>
      <BrowserRouter>
        <ThemeProvider>
          <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        </ThemeProvider>
      </BrowserRouter>
    </I18nProvider>
  </Provider>
);
