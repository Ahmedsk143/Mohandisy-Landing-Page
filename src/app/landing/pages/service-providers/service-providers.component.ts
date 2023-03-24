import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { skip } from 'rxjs';

@Component({
  selector: 'app-service-providers',
  templateUrl: './service-providers.component.html',
  styleUrls: ['./service-providers.component.scss'],
})
export class ServiceProvidersComponent implements OnInit {
  searchForm: FormGroup;
  sproviders = [];
  constructor(private router: Router, private route: ActivatedRoute) {
    this.searchForm = new FormGroup({
      enumfilter: new FormControl('0'),
      city: new FormControl(''),
      district: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.route.queryParams.pipe(skip(1)).subscribe({
      next: (params) => {
        console.log(params);
        this.getFilterData();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  search() {
    console.log(this.searchForm.value);
    const queryS = this.buildQueryString(this.searchForm.value);
    this.router.navigateByUrl(`/home/serviceProviders/${queryS}`);
  }
  buildQueryString(params: any) {
    let queryString = '?';
    for (let key of Object.keys(params)) {
      if (params[key]) {
        if (queryString[queryString.length - 1] == '?') {
          queryString += `${key}=${params[key]}`;
        } else {
          queryString += `&${key}=${params[key]}`;
        }
      }
    }
    return queryString[queryString.length - 1] == '?' ? '' : queryString;
  }
  getFilterData() {
    // this.homeService.getAllSp(1).subscribe({
    //   next: (res) => {
    //     this.sproviders = res;
    //     console.log(res);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });
  }
}
