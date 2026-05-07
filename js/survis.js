window.surVisVersion = '0.1.0';

$(document).ready(function () {
  // Set selectors before init
  selectors.selectors[0] = { type: 'keywords', text: 'category:storage-admission',     inverted: false, lock: false, count: 0 };
  selectors.selectors[1] = { type: 'keywords', text: 'category:management-update',     inverted: false, lock: false, count: 0 };
  selectors.selectors[2] = { type: 'keywords', text: 'category:retrieval-utilization', inverted: false, lock: false, count: 0 };
  page.init();
  // page.update() runs synchronously:
  //   1. selectors.updateSelectors() → sets filteredEntries (parsedEntries empty, similarities=0)
  //   2. tags.updateTagClouds()      → populates parsedEntries  ← after this line parsedEntries is ready
  //   3. timeline.updateTimeline()   → scheduled at t+500ms
  page.update(true);
  selectors.readQueryFromUrl();
  // Re-compute similarities now that parsedEntries is populated,
  // before the timeline's 500ms timer fires
  selectors.computeEntrySelectorSimilarities();
});

$(window).resize(function () {
  timeline.updateTimeline();
});

const electron = typeof require !== 'undefined';
