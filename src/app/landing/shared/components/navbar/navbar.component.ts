import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SearchDialogComponent } from '../search-dialog/search-dialog.component';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
  selectedLang = 'ar';
  constructor(
    private dialog: MatDialog,
    private translateService: TranslateService,
    @Inject(DOCUMENT) private document: Document
  ) {}
  ngOnInit(): void {
    this.translateService.setDefaultLang('ar');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SearchDialogComponent, {
      height: '192px',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
  toggle() {
    this.isCollapsed = !this.isCollapsed;
  }
  changeLangage(lang: string) {
    let htmlTag = this.document.getElementsByTagName(
      'html'
    )[0] as HTMLHtmlElement;
    htmlTag.dir = lang === 'ar' ? 'rtl' : 'ltr';
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
    this.selectedLang = lang;
    console.log(lang, this.selectedLang);
  }
}
