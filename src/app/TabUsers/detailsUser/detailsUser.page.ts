import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { UserDto } from 'src/app/shared/interfaces/user.interface';
import { ActivatedRoute } from '@angular/router';
import { HolidayService } from 'src/app/shared/services/holiday.service';

@Component({
  selector: 'app-user-details',
  templateUrl: 'detailsUser.page.html',
  styleUrls: ['detailsUser.page.scss'],
})
export class UserDetailsTabPage {
  back: boolean = true;
  page: string = 'users';
  user: UserDto | undefined;
  favHoliday: string | undefined;
  gender: string | undefined;
  constructor(
    private readonly _userService: UserService,
    private readonly _holidayService: HolidayService,
    private readonly _route: ActivatedRoute
  ) {
    const id = this._route.snapshot.params['id'];
    this.user = this._userService.getUserById(Number(id));
    this.favHoliday = this._holidayService._getHolidayType(
      this.user?.favouriteHolidayType
    );
    this.gender = this._userService._getGender(this.user?.gender);
  }
}
