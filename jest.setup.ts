import '@testing-library/jest-dom';
import { setConfig } from 'next/config';

// eslint-disable-next-line n/no-missing-import
import config from './next.config.cjs';

setConfig({
  ...config,
});
