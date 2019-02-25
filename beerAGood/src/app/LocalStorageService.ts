import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import {User} from "./User";
import {Bier} from "./Bier";
import {Achievement} from "./Achievement";

@Injectable()
export class LocalStorageService {

  signedInUser: User;
  bier: Bier;
  behaaldeAchievementIds: Array<Achievement>;

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  public storeUser(user: User): void {
    this.storage.set('signedInUser', user);
  }

  public getStoredUser(): User {
    return this.storage.get('signedInUser');
  }

  public storeBier(bier: Bier): void {
    this.storage.set('bier', bier);
  }

  public getStoredBier(): Bier {
    return this.storage.get('bier');
  }

  public setBehaaldeAchievements(behaaldeAchievementIds: Achievement[]) {
    this.storage.set('behaaldeAchievementIds', behaaldeAchievementIds);
  }

  public getBehaaldeAchievementIds(): Array<Achievement>{
    return this.storage.get('behaaldeAchievementIds');
  }

  public setItem(key: string, item: string) {
    this.storage.set(key, item);
  }
  public getItem(key: string) {
    return this.storage.get(key);
  }
}
