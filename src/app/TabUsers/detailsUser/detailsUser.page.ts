import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaceDto } from '@interfaces/holiday.interface';
import { UserDto } from '@interfaces/user.interface';
import { HolidayService } from '@services/holiday.service';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: 'detailsUser.page.html',
  styleUrls: ['detailsUser.page.scss'],
})
export class UserDetailsTabPage implements OnInit {
  back: boolean = true;
  page: string = 'users';
  user: UserDto | undefined;
  favHoliday: string | undefined;
  favPlace: PlaceDto | undefined;
  gender: string | undefined;
  constructor(
    private readonly _userService: UserService,
    private readonly _holidayService: HolidayService,
    private readonly _route: ActivatedRoute
  ) {
    // const id = this._route.snapshot.params['id'];
    // this.user = this._userService.getUserById(Number(id));
    // if (this.user?.favouritePlace) {
    //   this.favPlace = this._holidayService.getPlaceById(
    //     this.user?.favouritePlace
    //   );
    // }
    // this.favHoliday = this._holidayService._getHolidayType(
    //   this.user?.favouriteHolidayType
    // );
    // this.gender = this._userService._getGender(this.user?.gender);
  }
  ngOnInit(): void {
    this._route.data.subscribe(({ user }) => {
      this.user = user;
      if (this.user?.favouritePlace) {
        this.favPlace = this._holidayService.getPlaceById(
          this.user?.favouritePlace
        );
      }
      this.favHoliday = this._holidayService._getHolidayType(
        this.user?.favouriteHolidayType
      );
      this.gender = this._userService._getGender(this.user?.gender);
    });
  }
}
