document.getElementById('loginBtn')?.addEventListener('click', function() {
  document.getElementById('emailError').textContent = '';
  document.getElementById('passwordError').textContent = '';

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  let valid = true;

    if (!email) {
      document.getElementById('emailError').textContent = "Email tidak boleh kosong.";
      valid = false;
    }
    if (!password) {
      document.getElementById('passwordError').textContent = "Password tidak boleh kosong.";
      valid = false;
    }

    if (valid) {
      alert("Login berhasil");
      window.location.href = 'dashboard.html';
    }
});

const summary = {
  totalProducts: 120,
  totalSales: 85,
  totalRevenue: 12500000,
};

document.getElementById('viewPrd')?.addEventListener('click',function() {
  window.location.href = 'product.html';
});

let produkElement = document.getElementById("produk");
if(produkElement){
  produkElement.innerHTML = "Total Produk <br>" + summary.totalProducts;
}
let salesElement = document.getElementById("sales");

if(salesElement){
  salesElement.innerHTML = "Total Penjualan <br>" + summary.totalSales;
}

let revenueElement = document.getElementById("revenue");
if(revenueElement){
  revenueElement.innerHTML = "Total Pemasukan <br>" + summary.totalRevenue;
}

const products = [
  { id: 1, name: "Kopi Gayo", price: 25000, stock: 50 },
  { id: 2, name: "Teh Hitam", price: 18000, stock: 30 },
  { id: 3, name: "Coklat Aceh", price: 30000, stock: 20 }
];


window.products = products;


let listProductTbody = document.getElementById("listProduct");

console.log('listProductTbody', listProductTbody);


function renderProducts() {
  if (!listProductTbody) return; 
  let list = '';
  products.forEach((prod) => {
    list += `<tr>
      <td>${prod.id}</td>
      <td>${prod.name}</td>
      <td>Rp ${prod.price.toLocaleString('id-ID')}</td>
      <td>${prod.stock}</td>
      <td>
        <button data-id='${prod.id}' class='btn-edit'>✎</button>
        <button data-id='${prod.id}' class='btn-delete'>🗑</button>
      </td>
    </tr>`;
  });
  console.log('Rendered list:', list);
  listProductTbody.innerHTML = list;
}

if (listProductTbody) {
  renderProducts();
}

if (listProductTbody) {
  listProductTbody.addEventListener('click', (event) => {
    console.log('event', event);
    const target = event.target;
    
    if (target.classList.contains('btn-edit')) {
      console.log('edit triggered');
      const productId = parseInt(target.getAttribute('data-id'));
      const product = products.find(p => p.id === productId);
      
      if (product) {
        document.getElementById('editProductId').value = product.id;
        document.getElementById('editName').value = product.name;
        document.getElementById('editPrice').value = product.price;
        document.getElementById('editStock').value = product.stock;
        
        const editForm = document.getElementById('editForm');
        if (editForm) editForm.style.display = 'block';
      } else {
        alert('Produk tidak ditemukan!');
      }
    }
    
    if (target.classList.contains('btn-delete')) {
      console.log('delete triggered');
      const productId = parseInt(target.getAttribute('data-id'));
      const index = products.findIndex(p => p.id === productId);
      
      if (index !== -1 && confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
        products.splice(index, 1); 
        renderProducts(); 
        alert('Produk berhasil dihapus!');
      }
    }
  });
}

const saveEditBtn = document.getElementById('saveEdit');
if (saveEditBtn) {
  saveEditBtn.addEventListener('click', () => {
    const id = parseInt(document.getElementById('editProductId').value);
    const name = document.getElementById('editName').value.trim();
    const price = parseFloat(document.getElementById('editPrice').value);
    const stock = parseInt(document.getElementById('editStock').value);
    
    if (name && price > 0 && stock >= 0) {
      const product = products.find(p => p.id === id);
      if (product) {
        product.name = name;
        product.price = price;
        product.stock = stock;
      }
      
      const editForm = document.getElementById('editForm');
      if (editForm) editForm.style.display = 'none';
      renderProducts();
      alert('Produk berhasil diupdate!');
    } else {
      alert('Harap isi semua field dengan benar.');
    }
  });
}

const cancelEditBtn = document.getElementById('cancelEdit');
if (cancelEditBtn) {
  cancelEditBtn.addEventListener('click', () => {
    const editForm = document.getElementById('editForm');
    if (editForm) editForm.style.display = 'none';
  });
}
