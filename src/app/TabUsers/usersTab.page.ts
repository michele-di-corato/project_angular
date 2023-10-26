import { Component } from '@angular/core';
import { ItemList } from '../shared/interfaces/list.interface';
import { UserService } from '../shared/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserDto } from '../shared/interfaces/user.interface';

@Component({
  selector: 'app-users-tab',
  templateUrl: 'usersTab.page.html',
  styleUrls: ['usersTab.page.scss'],
})
export class UsersTabPage {
  page: string = 'users';
  users: ItemList[] = [];
  constructor(
    private readonly _userService: UserService,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute
  ) {
    this._getUserList();
  }
  private _getUserList() {
    this._userService.userOb$.subscribe((userList: UserDto[]) => {
      this.users = userList.map((element: UserDto) => {
        return {
          id: element.id,
          name: element.name + ' ' + element.surname,
        };
      });
    });
    this._userService.getList();
  }
  goToDetailPage(id: number): void {
    this._router.navigate(['details', id], { relativeTo: this._route });
  }
  goToEditPage(id: number): void {
    this._router.navigate(['edit', id], { relativeTo: this._route });
  }
  deleteUser(id: number): void {
    this._userService.deleteUser(id);
  }
  goToAddPage(): void {
    this._router.navigate(['create'], { relativeTo: this._route });
  }
}
