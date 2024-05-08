import { ActionStrategy } from './action-strategy';
import { Theme } from '../../model/theme';
import { Injectable } from '@angular/core';
import { SpeechSynthesizerService } from '../web-apis/speech-synthesizer.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ChangeSearchDocStrategy extends ActionStrategy {

  constructor(private speechSynthesizer: SpeechSynthesizerService, private router: Router) {
    super();
    this.mapStartSignal.set('en-US', 'hello search');
    this.mapStartSignal.set('es-ES', 'hola buscar');

    this.mapEndSignal.set('en-US', 'finish hello search');
    this.mapEndSignal.set('es-ES', 'terminar hola buscar');

    this.mapInitResponse.set('en-US', 'tell me what you want to search?');
    this.mapInitResponse.set('es-ES', 'dime que quieres buscar?');

    this.mapActionDone.set('en-US', 'searching for keyword');
    this.mapActionDone.set('es-ES', 'buscando palabra clave');

  }

  navigateToSearchDocument(input: string): void {
    console.log('navigateToSearchDocument');
    this.router.navigate(['/search-document', input]);
  }

  runAction(input: string, language: string): void {
    this.navigateToSearchDocument(input);
    this.speechSynthesizer.speak(
      `${this.mapActionDone.get(language)}: ${input}`,
      language
    );
  }
}
