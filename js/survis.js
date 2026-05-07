window.surVisVersion = '0.1.0';

$(document).ready(function () {
  // Pre-configure selectors before update (tags.updateTagClouds now runs first in page.update)
  selectors.selectors[0] = { type: 'keywords', text: 'category:storage-admission',     inverted: false, lock: false, count: 0 };
  selectors.selectors[1] = { type: 'keywords', text: 'category:management-update',     inverted: false, lock: false, count: 0 };
  selectors.selectors[2] = { type: 'keywords', text: 'category:retrieval-utilization', inverted: false, lock: false, count: 0 };
  page.init();
  page.update(true); // single update: tags runs first → parsedEntries ready → selectors apply correctly
  selectors.readQueryFromUrl();
});

$(window).resize(function () {
  timeline.updateTimeline();
});

const electron = typeof require !== 'undefined';
