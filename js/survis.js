window.surVisVersion = '0.1.0';

$(document).ready(function () {
  page.init();
  page.update(true);  // first update: populates bib.parsedEntries
  selectors.readQueryFromUrl();
  // Pre-configure color selectors AFTER parsedEntries is ready
  selectors.selectors[0] = { type: 'keywords', text: 'category:storage-admission',    inverted: false, lock: false, count: 0 };
  selectors.selectors[1] = { type: 'keywords', text: 'category:management-update',    inverted: false, lock: false, count: 0 };
  selectors.selectors[2] = { type: 'keywords', text: 'category:retrieval-utilization', inverted: false, lock: false, count: 0 };
  page.update(false); // second update: applies colors to populated entries
});

$(window).resize(function () {
  timeline.updateTimeline();
});

const electron = typeof require !== 'undefined';