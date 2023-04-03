'use strict';

// Set current year
export const autoChangeYear = function () {
  const yearEl = document.querySelectorAll('.year');
  const currentYear = new Date().getFullYear();

  yearEl.forEach(year => {
    year.textContent = currentYear;
  });
  yearEl.textContent = currentYear;
};
