import { Component, OnInit } from '@angular/core';
import { Planet, PlanetService } from '../services/planet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.page.html',
  styleUrls: ['./planet.page.scss'],
})
export class PlanetPage implements OnInit {

  planet: Planet = {
    name: "",
    description: "",
    img: ""
  };

  planetId = null;

  constructor(private planetService: PlanetService, private route: ActivatedRoute, private loadingController: LoadingController, private router: Router) { }

  ngOnInit() {
    this.planetId = this.route.snapshot.params['id'];
      if (this.planetId){
        this.loadPlanet();
      }
    }
    async loadPlanet() {
      const loading = await this.loadingController.create({
        message: 'Loading Planet..'
      });
      await loading.present();
      this.planetService.getPlanet(this.planetId).subscribe(res => {
        loading.dismiss();
        this.planet = res;
      });
  }

  homepage() {
    this.router.navigate(['/home']);
  }
}
