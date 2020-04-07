import { Component, OnInit } from '@angular/core';
import { AppVersion } from '@ionic-native/app-version';
import { Planet, PlanetService } from '../services/planet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{


  planets: Planet[];
  versionNumber = null;

  constructor(private planetService: PlanetService, private route: Router) { }

  ngOnInit(){
    this.planetService.getPlanets().subscribe(res => {
      this.planets = res;
    });

    // this.versionNumber = this.appVersion.getVersionNumber();
    // Also made the appversion call iin the constructor but cant comment that out!
  }

  nextpage(id) {
    this.route.navigate(['/planet', id]);
  }

  remove(item) {
    this.planetService.removePlanet(item.id);
  }

}


