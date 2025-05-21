fetch('https://whggxrtzztmcbnjzfrem.supabase.co/rest/v1/v_resell_summary', {
  headers: {
    apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndoZ2d4cnR6enRtY2JuanpmcmVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3Mzc3ODIsImV4cCI6MjA2MzMxMzc4Mn0.vYx2KVKOybIDVO3hUNHjC_ADMihCfwo6P5fqNNgFDQ4',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndoZ2d4cnR6enRtY2JuanpmcmVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3Mzc3ODIsImV4cCI6MjA2MzMxMzc4Mn0.vYx2KVKOybIDVO3hUNHjC_ADMihCfwo6P5fqNNgFDQ4'
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
