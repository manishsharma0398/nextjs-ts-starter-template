import '@testing-library/jest-dom';
import { setConfig } from 'next/config';

import config from './next.config.cjs';

setConfig({
  ...config,
});
