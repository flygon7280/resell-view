fetch('https://YOUR_PROJECT.supabase.co/rest/v1/v_resell_summary', {
  headers: {
    apikey: 'YOUR_API_KEY',
    Authorization: 'Bearer YOUR_API_KEY'
  }
})
.then(res => res.json())
.then(data => {
  const grouped = {};
  data.forEach(item => {
    if (!grouped[item.category]) grouped[item.category] = [];
    grouped[item.category].push(item);
  });

  const container = document.getElementById('container');
  for (const [category, items] of Object.entries(grouped)) {
    const h2 = document.createElement('h2');
    h2.textContent = category;
    container.appendChild(h2);

    const ul = document.createElement('ul');
    items.forEach(product => {
      const li = document.createElement('li');
      li.textContent = `✔ ${product.title} – ${product.total_sold}건 (최저 $${product.lowest_price})`;
      ul.appendChild(li);
    });
    container.appendChild(ul);
  }
});
