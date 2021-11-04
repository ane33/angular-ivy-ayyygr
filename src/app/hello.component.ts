import { Component, Input } from '@angular/core';
import { Observable, Observer } from 'rxjs';


@Component({
  selector: 'hello',
  template: '<div><code>observable|async</code>: Time: {{ time | async }}</div>'
})
export class HelloComponent {
  @Input() name: string;
  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
}