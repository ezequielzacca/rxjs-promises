import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { IPurchase } from 'src/interfaces/app.interfaces';
import { MockApiService } from './mock-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  purchases$?: Observable<IPurchase[]>;
  loading: boolean;

  constructor(private mockApi: MockApiService) { }

  ngOnInit() {
    this.loading = true;
    this.purchases$ = this.mockApi.getPurchases()
      .pipe(
        finalize(() => this.loading = false)
      );
  }
}
