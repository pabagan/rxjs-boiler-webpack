import $ from 'jquery';
import Rx from 'rxjs/Rx';

const source1$ = Rx.Observable.range(0, 5).map(v => "source1$: "+v);
const source2$ = Rx.Observable.range(6, 5).map(v => "source2$: "+v);
//
// All these guys are helping us avoiding
// nesting subscribe
//

//
// mergeMap:
//
/*
// NOT TO DO: nesting subscribe
Rx.Observable.of('Mello')
  .subscribe(x => {
    Rx.Observable.of(x + ' Everyone')
    .subscribe(x => console.log(x))
  });
  */

Rx.Observable.of('Hello')
  .mergeMap(x => {
    return Rx.Observable.of(x + ' Everyone')
  })
  .subscribe(x => console.log(x))
//
// swichtMap:
//


//
// concatMap:
//
