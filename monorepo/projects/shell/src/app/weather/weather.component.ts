import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private vcref: ViewContainerRef) {}
  
  async ngOnInit() {  
    // const WeatherComponent =  await import('weather/WeatherComponent').then(m => m.WeatherComponent);

    // const {WeatherComponent} = await loadRemoteModule({
    //   type: 'module',
    //   remoteEntry: 'http://localhost:4201/remoteEntry.js',
    //   exposedModule: './WeatherComponent'
    // }); 
    //^^^---- Importazione dinamica che specifica l'indirizzo

    const {WeatherComponent} = await loadRemoteModule({
      type: 'manifest',
      remoteName: 'weather',
      exposedModule: './WeatherComponent'
    });

    this.vcref.createComponent(WeatherComponent);

  }
}

