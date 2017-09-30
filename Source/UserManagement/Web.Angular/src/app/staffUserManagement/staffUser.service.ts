import { StaffUser } from '../domain/staffUser';
import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';


@Injectable()
export class StaffUserService {
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  saveUser(staffUser: StaffUser): Promise<void> {
    const url = `http://localhost:5000/api/usermanagement/user`;

    const addStaffUser = new StaffUser();
    addStaffUser.name = staffUser.name;

    return this.http
      .post(url, JSON.stringify(addStaffUser), { headers: this.headers })
      .toPromise()
      .then(() => { console.log('staff user added successfully'); })
      .catch((error) => console.error(error));
  }

  getAllUsers(): Promise<void> {
    const url = 'http://localhost:5000/api/usermanagement/users';

    return this.http
      .get(url, { headers: this.headers })
      .toPromise()
      .then((users) => { console.log(users); })
      .catch((error) => console.error(error));
  }
}
