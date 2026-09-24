const tourDates = [
  { iso: '2026-10-03T19:00:00-04:00', label: 'OCT 03', city: 'Cincinnati, OH', venue: "Bogart’s", url: 'https://www.ticketmaster.com/artist/991231' },
  { iso: '2026-12-19T19:00:00-05:00', label: 'DEC 19', city: 'Orlando, FL', venue: 'House of Blues Orlando', url: 'https://www.ticketmaster.com/artist/991231' }
];
const today = new Date();
const upcoming = tourDates.filter(d => new Date(d.iso) >= today);
document.querySelector('#dates').innerHTML = upcoming.length ? upcoming.map(d => `
  <article class="date"><time datetime="${d.iso}">${d.label}</time><strong>${d.city}</strong><small>${d.venue}</small><a href="${d.url}" target="_blank" rel="noreferrer">Tickets ↗</a></article>`).join('') : '<p class="date">New dates will appear here when officially confirmed.</p>';
const observer = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')), {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
const menu = document.querySelector('.menu');
const nav = document.querySelector('#navlinks');
menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', open); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded','false'); }));
