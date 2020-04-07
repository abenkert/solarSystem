import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 
export interface Planet {
  id?: string;
  img: string;
  name: string;
  description: string;
}
 
@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  private planetsCollection: AngularFirestoreCollection<Planet>;
 
  private planets: Observable<Planet[]>;
 
  constructor(db: AngularFirestore) {
    this.planetsCollection = db.collection<Planet>('planets');
 
    this.planets = this.planetsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
 
  getPlanets() {
    return this.planets;
  }
 
  getPlanet(id) {
    return this.planetsCollection.doc<Planet>(id).valueChanges();
  }
 
  updatePlanet(planet: Planet, id: string) {
    return this.planetsCollection.doc(id).update(planet);
  }
 
  addPlanet(planet: Planet) {
    return this.planetsCollection.add(planet);
  }
 
  removePlanet(id) {
    return this.planetsCollection.doc(id).delete();
  }
}