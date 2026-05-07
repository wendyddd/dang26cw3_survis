window.surVisVersion = '0.1.0';

$(document).ready(function () {
  page.init();
  page.update(true);  // first update: populates bib.parsedEntries
  // Pre-configure category selectors AFTER parsedEntries is ready (slots 0-2)
  selectors.selectors[0] = { type: 'keywords', text: 'category:storage-admission',    inverted: false, lock: false, count: 0 };
  selectors.selectors[1] = { type: 'keywords', text: 'category:management-update',    inverted: false, lock: false, count: 0 };
  selectors.selectors[2] = { type: 'keywords', text: 'category:retrieval-utilization', inverted: false, lock: false, count: 0 };
  selectors.readQueryFromUrl(); // read URL ?q= param AFTER slots 0-2 are taken (uses slot 3+)
  page.update(false); // second update: applies colors to populated entries
});

$(window).resize(function () {
  timeline.updateTimeline();
});

const electron = typeof require !== 'undefined';