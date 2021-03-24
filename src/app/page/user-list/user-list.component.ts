import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  /* table */
  users$: Observable<User[]> = this.userService.getAll();

  constructor(
    private userService: UserService      /* table */
  ) { }

  ngOnInit(): void {
  }

  /* delete */
  onDelete(user: User): void {
    alert('Biztos szeretné törölni?');
    this.userService.delUser(user).subscribe(
      () => {
         this.users$ = this.userService.getAll();
       }
    );
  }

}
