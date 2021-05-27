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
    this.bandListSubject.next(this.bandList);
  }

  getBandListObservable() {
    return this.bandListSubject;
  }

  deleteBandList(bandId: number) {
    let newBandList: any;
    this.getBandListObservable().subscribe(bandList => {
      newBandList = bandList;
    });

    newBandList.splice(bandId, 1);
    this.bandListSubject.next(newBandList);
    this.getBandListObservable().unsubscribe();
  }

  addBandList(newBandValue: any) {
    let newBandList: any;
    this.getBandListObservable().subscribe(bandList => {
      newBandList = bandList;
    });

    newBandList.push(newBandValue);
    this.bandListSubject.next(newBandList);
    this.getBandListObservable().unsubscribe();
  }

  setBandList(bandId: number, newBandValue: any) {
    let newBandList: any;
    this.getBandListObservable().subscribe(bandList => {
      newBandList = bandList;
    });

    newBandList[bandId] = newBandValue;
    this.bandListSubject.next(newBandList);
    this.getBandListObservable().unsubscribe();
  }
}
