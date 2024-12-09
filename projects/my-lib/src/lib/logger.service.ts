import { Injectable } from '@angular/core';

// Enum pour définir les niveaux de log
export enum LoggerLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3
}

@Injectable({
  providedIn: 'root' 
})
export class LoggerService {
  private loggerLevel: LoggerLevel = LoggerLevel.INFO; 

  constructor() {this.log(LoggerLevel.INFO, 'LoggerService initialisé avec le niveau : ' + this.loggerLevel);}

  // Méthode pour configurer le niveau de log
  setLogLevel(level: LoggerLevel): void {
    this.loggerLevel = level;
  }

  // Méthode pour afficher les logs
  log(lvl: LoggerLevel, msg: string): void {
    if (lvl < this.loggerLevel) return; // Si le niveau est inférieur au niveau configuré, ignorer le log
    switch (lvl) {
      case LoggerLevel.INFO:
        console.info('%c' + msg, 'color: #6495ED');
        break;
      case LoggerLevel.WARN:
        console.warn('%c' + msg, 'color: #FF8C00');
        break;
      case LoggerLevel.ERROR:
        console.error('%c' + msg, 'color: #DC143C');
        break;
      default:
        console.log('debug : ' + msg);
    }
  }
}
