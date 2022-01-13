import { Injectable } from '@angular/core';

// `Services` abstract business logic into re-usable forms

@Injectable({ // marks class as eligible for Dependency Injections (i.e. - `@Injectable`)
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  // method can be called by component when service is injected (see: `master-sword-component.ts` constructor)
  getUserName(): string {
    return 'Link';
  }

}
