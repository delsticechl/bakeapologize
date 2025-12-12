document.addEventListener('click', function(e){
    if (e.target.matches('.add-cart')) {
      const id = e.target.dataset.cakeid;
      fetch('/api/cart/add', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ cakeId: id, qty: 1 })
      }).then(r => r.json()).then(j => {
        if (j.success) {
          alert('Added to cart');
        } else {
          alert(j.error || 'Error');
        }
      }).catch(()=> alert('Error'));
    }
  });
  
  if (document.querySelector('.cart-table')) {
    document.querySelectorAll('.qty-input').forEach(input => {
      input.addEventListener('change', (e) => {
        const tr = e.target.closest('tr');
        const itemId = tr.dataset.itemid;
        const qty = e.target.value;
        fetch('/api/cart/update', {
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify({ itemId, quantity: qty })
        }).then(()=> location.reload())
          .catch(()=> alert('Error'));
      });
    });
  
    document.querySelectorAll('.remove-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tr = e.target.closest('tr');
        const itemId = tr.dataset.itemid;
        fetch('/api/cart/remove', {
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify({ itemId })
        }).then(()=> location.reload())
          .catch(()=> alert('Error'));
      });
    });
  }
  
