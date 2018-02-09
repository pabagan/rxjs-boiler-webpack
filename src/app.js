import $ from 'jquery';
import Rx from 'rxjs/Rx';

const hnItemURL = itemId => `https://hacker-news.firebaseio.com/v0/item/${itemId}.json`;

const retrieveDocumentsPerStoryType = (storyType) => {
  console.log('retrieveDocumentsPerStoryType');
  console.log('retrieveDocumentsPerStoryType');
  console.log('retrieveDocumentsPerStoryType');
  console.log('retrieveDocumentsPerStoryType');
    console.log(storyType);
  //alert('birdie!');
}

// async function
async function fetchAsync(url) {
  // await response of fetch call
  let response = await fetch(url);

  if (response.ok) return response.json();

  throw new Error(response.status)
}

function* retrieveDocumentsFromIds(ids) {
  console.log('Retrieving documents...')
  yield ids.map(id => fetchAsync(hnItemURL(id)));
}

async function getHackerNewsDocumentFromIds(ids) {
  console.log('Retrieving documents...')
  return ids.map(id => fetchAsync(hnItemURL(id)));
}



//
// mergeMap: ahorrar subscribe
//
/*
// NOOOO: necesitamos 2 observables con herencia 2 de 1
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
