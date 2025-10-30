import { Provider } from 'react-redux';

import { I18nProvider } from './i18n';
import ReactQueryClientProvider from './query/providers/ReactQueryClientProvider';
import { store } from './redux/store';

export const SharedModule: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Provider store={store}>
    <I18nProvider>
      <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
    </I18nProvider>
  </Provider>
);
