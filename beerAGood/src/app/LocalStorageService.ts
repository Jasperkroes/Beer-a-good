import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import {User} from "./User";

@Injectable()
export class LocalStorageService {

  signedInUser: User;

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  public storeUser(user: User): void {
    this.storage.set('signedInUser', user);
    console.log("new user id "+ user.id);
  }

  public getStoredUser(): User {
    return this.storage.get('signedInUser');
  }

}
