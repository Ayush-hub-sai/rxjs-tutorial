import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, Observable, of, Subject, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  imports: [ReactiveFormsModule],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class RxjsComponent implements OnInit {
  http = inject(HttpClient)
  private ngUnsubscribe = new Subject<void>();
  userList: any[] = [];
  searchValue: FormControl = new FormControl("");
  fullUserList: any[] = [];
  currentPage: number = 1;
  pageSize: number = 10;

  ngOnInit(): void {

    this.getUserData();
   
    /**Search Customer through rxjs operators from backend api*/

    /**
     * The below method has a problem that when the blank value is null or undefined then it is uable to call the getUserData function.
     * To solve this issue i have written the below method without filter and switch map method. 
     * Pleae look in to this.
     */

    // this.searchValue.valueChanges.pipe(
    //   takeUntil(this.ngUnsubscribe),
    //   debounceTime(200),
    //   distinctUntilChanged(),
    //   filter(value => !!value && value.trim().length > 0),
    //   switchMap(value => this.customerSearch(value))
    // ).subscribe((res: any) => {
    //   this.userList = res.users;
    // });


    /**Correct method for call getUserData function when the searchValue property will blank, null or undefined */

    this.searchValue.valueChanges.pipe(
      takeUntil(this.ngUnsubscribe),
      debounceTime(200),
      distinctUntilChanged()
    ).subscribe(value => {
      const trimmedValue = value?.trim();

      if (trimmedValue) {
        this.customerSearch(trimmedValue).subscribe((res: any) => {
          this.userList = res.users;
        });
      } else {
        this.getUserData(); // call API to get all users
      }
    });


    /**Normal filter from frontend side */

    // this.searchValue.valueChanges.pipe(
    //   debounceTime(100),
    //   distinctUntilChanged(),
    // ).subscribe(res => {
    //   const trimValue = res?.trim().toLowerCase();

    //   if (trimValue) {
    //     this.userList = this.fullUserList.filter(user =>
    //       user.firstName.toLowerCase().includes(trimValue)
    //     );
    //   } else {
    //     this.userList = [...this.fullUserList]; // Reset to original
    //   }
    // });

  }

  getUserData() {
    this.http.get('https://dummyjson.com/users').subscribe({
      next: (data: any) => {
        this.fullUserList = data.users;
        this.userList = [... this.fullUserList]
        // this.updatePaginatedItems();
      },
      error: (err) => {
        console.error('Error occurred:', err);
      },
      complete: () => {
        console.log('Request completed');
      }
    });
  }

  customerSearch(searchItem: string): Observable<any> {
    if (searchItem) {
      return this.http.get(`https://dummyjson.com/users/search?q=${searchItem}`);
    } else {
      return of({ data: [] });
    }
  }

  getObjectEntries(address: any): string {
    return address
      ? [address.address, address.city, address.postalCode, address.state, address.country].filter(Boolean).join(', ')
      : '';
  }

  get totalPages() {
    return Math.ceil(this.userList.length / this.pageSize);
  }

  next() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedItems();
    }
  }

  prev() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedItems();
    }
  }

  updatePaginatedItems() {
    const start = (this.currentPage - 1) * this.pageSize;
    this.userList = this.fullUserList.slice(start, start + this.pageSize);
  }
}
