import { ModuleWithProviders, NgModule } from '@angular/core';
import { LoggerService, LoggerLevel } from './logger.service';

@NgModule({})
export class LoggerModule {
  static forRoot(level: LoggerLevel = LoggerLevel.INFO): ModuleWithProviders<LoggerModule> {
    return {
      ngModule: LoggerModule,
      providers: [
        {
          provide: LoggerService,
          useFactory: () => {
            const logger = new LoggerService();
            logger.setLogLevel(level); // Configurer le niveau de log par défaut
            return logger;
          }
        }
      ]
    };
  }
}
