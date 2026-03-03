import { authEnv } from '@/envs/auth';

import { buildOidcConfig } from '../helpers';
import { type GenericProviderDefinition } from '../types';

type LunanEnv = {
  AUTH_LUNAN_ID?: string;
  AUTH_LUNAN_ISSUER?: string;
  AUTH_LUNAN_SECRET?: string;
};

const provider: GenericProviderDefinition<LunanEnv> = {
  build: (env) =>
    buildOidcConfig({
      clientId: env.AUTH_LUNAN_ID!,
      clientSecret: env.AUTH_LUNAN_SECRET!,
      issuer: env.AUTH_LUNAN_ISSUER!,
      providerId: 'lunan',
    }),
  checkEnvs: () => {
    const clientId = authEnv.AUTH_LUNAN_ID;
    const clientSecret = authEnv.AUTH_LUNAN_SECRET;
    const issuer = authEnv.AUTH_LUNAN_ISSUER;
    return !!(clientId && clientSecret && issuer)
      ? {
          AUTH_LUNAN_ID: clientId,
          AUTH_LUNAN_ISSUER: issuer,
          AUTH_LUNAN_SECRET: clientSecret,
        }
      : false;
  },
  id: 'lunan',
  type: 'generic',
};

export default provider;
