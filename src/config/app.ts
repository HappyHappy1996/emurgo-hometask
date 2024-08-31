import { registerAs } from '@nestjs/config';

export interface AppConfig {
  apiPort: number;
  apiDocumentation: boolean;

  logLevel: string;

  apiKey: string;
}

export const appConfig = registerAs(
  'appConfig',
  (): AppConfig => ({
    apiPort: Number(process.env.API_PORT) || 3000,
    apiDocumentation: !!process.env.API_DOCUMENTATION,

    logLevel: process.env.LOG_LEVEL || 'info',

    apiKey: process.env.API_KEY
  }),
);
