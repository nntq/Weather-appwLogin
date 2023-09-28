import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit{
  constructor(private vcref: ViewContainerRef) {}
  
  async ngOnInit() {
    // const QuoteComponent =  await import('quote/QuoteComponent').then(m => m.QuoteComponent);

    // const {QuoteComponent} = await loadRemoteModule({
    //   type: 'module',
    //   remoteEntry: 'http://localhost:4202/remoteEntry.js',
    //   exposedModule: './QuoteComponent'
    // }); 
    //^^^---- Importazione dinamica che specifica l'indirizzo

    const {QuoteComponent} = await loadRemoteModule({
      type: 'manifest',
      remoteName: 'quote',
      exposedModule: './QuoteComponent'
    });

    this.vcref.createComponent(QuoteComponent);

  }
}

