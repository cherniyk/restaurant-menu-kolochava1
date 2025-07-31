import { menu } from './menu.js';

const root = document.getElementById('root');
menu.forEach(section => {
  const sectionEl = document.createElement('div');
  sectionEl.innerHTML = `<h2>${section.category}</h2>`;

  section.items.forEach(item => {
    const itemEl = document.createElement('div');
    itemEl.className = 'card';
    itemEl.innerHTML = `
      <strong>${item.name}</strong><br/>
      <small>${item.description}</small><br/>
      <b>${item.price} ₴</b>
    `;
    sectionEl.appendChild(itemEl);
  });

  root.appendChild(sectionEl);
});
