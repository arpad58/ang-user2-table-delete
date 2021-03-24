import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /* table */ /* endpoint máshol apiUrl volt megadva */
  endpoint: string = 'http://localhost:3000/users';

  constructor(
    private http: HttpClient      /* table */
  ) { }

  /* table */
  /**
   * Get all users from the database.
   * @returns on observable with all users.
   */
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.endpoint}`);
  }

  /**
   * Delete a user from the database.
   * The method is: this.http.delete
   */
   delUser(user: User): Observable<User> {
    return this.http.delete<User>(`${this.endpoint}/${user.id}`);

  }
}
