import defaultConfig from '@redux-offline/redux-offline/lib/defaults';
import { Config } from '@redux-offline/redux-offline/lib/types';
import immutableTransform from 'redux-persist-transform-immutable';

const config = {
  rootUrl: 'http://localhost:4000',
};

export const offlineConfig: Config = {
  ...defaultConfig,
  effect: async (effect, action) => {
    return new Promise(async (resolve, reject) => {
      const response = await fetch(`${config.rootUrl}/graphql`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          query: effect.query,
          variables: effect.variables,
        }),
      });
      if (response.ok) {
        const json = response.json();
        resolve(json);
      } else {
        reject(response);
      }
    });
  },
  discard: (error, action, retries) => {
    return true;
  },
  persistOptions: {
    transforms: [immutableTransform()],
    whitelist: [],
  },
};
