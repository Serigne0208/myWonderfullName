import { Directive, OnInit } from '@angular/core';
import { LoggerLevel, LoggerService } from './logger.service';


@Directive() // Ajoute le décorateur pour éviter l'erreur
export class BaseComponent implements OnInit {

  constructor(private logger: LoggerService) {}

  ngOnInit(): void {
    // Log par défaut pour tous les composants héritant de cette classe
    this.logger.log(LoggerLevel.INFO, 'Composant initialisé - Message par défaut.');
  }
}

