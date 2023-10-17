import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { AuthService } from 'src/app/Features/auth/Services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  isUserLoggedIn: boolean = false


  constructor(
    private cdref: ChangeDetectorRef,
    private _AuthService: AuthService
  ) {

    _AuthService.isUserLoggedIn.subscribe((res) => {
      this.isUserLoggedIn = res
    })
  }


  ngOnInit(): void {


  }


  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
}
