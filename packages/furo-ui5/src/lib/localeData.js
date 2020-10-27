import {
  registerCldr,
  setCldrData,
} from '@ui5/webcomponents-base/dist/asset-registries/LocaleData.js';

// eslint-disable-next-line camelcase
import de_CH from '../../assets/cldr/de_CH.js';

const cldrData = {
  de_CH,
};

Object.entries(cldrData).forEach(([key, value]) => {
  if (typeof value === 'object') {
    setCldrData(key, value);
  } else {
    registerCldr(key, value);
  }
});