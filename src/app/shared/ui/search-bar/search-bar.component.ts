import { Input, Output, Component, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnDestroy {

  ngOnInit(): void {
  }

  @Input() placeholder = 'Search...';
  @Input() debounceDelay = 300;
  @Output() search = new EventEmitter<string>();

  private searchText = new Subject<string>();
  private subscription: Subscription;

  constructor() {
    this.subscription = this.searchText
      .pipe(
        // waits for user to stop typing for debounceDelay seconds
        debounceTime(this.debounceDelay),

        // only search if value actually changed
        distinctUntilChanged()
      )
      .subscribe(value => {
        this.search.emit(value);
      });
  }

  onInput(event: Event): void{
    const value = (event.target as HTMLInputElement).value;
    this.searchText.next(value);
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }
}
