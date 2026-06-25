// Wetplate Hub — small UI interactions (no dependencies)

(function () {
  // Mobile navigation toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Close menu when a link is clicked (mobile)
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // Filter chips: purely visual demo (toggles the active state within a group)
  document.querySelectorAll('.chips').forEach(function (group) {
    group.querySelectorAll('.chip').forEach(function (chip) {
      chip.addEventListener('click', function () {
        group.querySelectorAll('.chip').forEach(function (c) { c.classList.remove('active'); });
        chip.classList.add('active');
      });
    });
  });

  // Live text filter — powers transcript search and the video index.
  // <input data-filter="#scope" data-filter-count="#count">
  // Filters elements marked [data-filter-item] inside #scope (or its direct
  // children as a fallback, e.g. transcript <details>), matching on text.
  document.querySelectorAll('[data-filter]').forEach(function (input) {
    var scope = document.querySelector(input.getAttribute('data-filter'));
    if (!scope) return;
    var explicit = scope.querySelectorAll('[data-filter-item]');
    var items = explicit.length ? explicit : scope.children;
    var countSel = input.getAttribute('data-filter-count');
    var counter = countSel ? document.querySelector(countSel) : null;

    function run() {
      var q = input.value.trim().toLowerCase();
      var shown = 0;
      Array.prototype.forEach.call(items, function (it) {
        var match = !q || it.textContent.toLowerCase().indexOf(q) !== -1;
        it.style.display = match ? '' : 'none';
        if (it.tagName === 'DETAILS') it.open = !!q && match;
        if (match) shown++;
      });
      if (counter) {
        counter.textContent = q
          ? (shown + ' result' + (shown === 1 ? '' : 's') + ' for “' + input.value.trim() + '”')
          : '';
      }
    }
    input.addEventListener('input', run);
  });
})();
