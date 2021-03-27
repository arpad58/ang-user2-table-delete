import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /* table */ /* serverAddress máshol apiUrl volt megadva vagy endpoint*/
  serverAddress: string = 'http://localhost:3000/users';

    /*table                */
    constructor(private http: HttpClient) { }

  /* table */
  /**
   * Get all users from the database.
   * @returns on observable with all users.
   */
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.serverAddress}`);
  }

  /**
   * Delete a user from the database.
   * The method is: this.http.delete
   */
   delUser(user: User): Observable<User> {
    return this.http.delete<User>(`${this.serverAddress}/${user.id}`);
  }
}
