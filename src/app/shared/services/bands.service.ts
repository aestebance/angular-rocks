import { Injectable } from '@angular/core';
import bands from '../../_files/bands.json';
import {ReplaySubject} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class BandsService {
  public bandList:[] = bands;
  bandListSubject = new ReplaySubject(1);

  constructor() {
    if (localStorage.getItem('bands') === null) {
      localStorage.setItem('bands', JSON.stringify(this.bandList));
    } else {
      let retrievedObject = localStorage.getItem('bands');
      if (retrievedObject != null) {
        this.bandList = JSON.parse(retrievedObject);
      }
    }
    this.bandListSubject.next(this.bandList);
  }

  getBandListObservable() {
    return this.bandListSubject;
  }

  deleteBand(bandId: number) {
    let newBandList: any;
    this.getBandListObservable().subscribe(bandList => {
      newBandList = bandList;
    });
    newBandList.splice(bandId, 1);
    this.bandListSubject.next(newBandList);
    localStorage.setItem('bands', JSON.stringify(newBandList));
  }

  addBand(newBandValue: any) {
    let newBandList: any;
    this.getBandListObservable().subscribe(bandList => {
      newBandList = bandList;
    });
    newBandList.push(newBandValue);
    this.bandListSubject.next(newBandList);
    localStorage.setItem('bands', JSON.stringify(newBandList));
  }

  setBandList(bandId: number, newBandValue: any) {
    let newBandList: any;
    this.getBandListObservable().subscribe(bandList => {
      newBandList = bandList;
    });
    newBandList[bandId] = newBandValue;
    this.bandListSubject.next(newBandList);
    localStorage.setItem('bands', JSON.stringify(newBandList));
  }
}
