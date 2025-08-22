// Example bill items
const items = [
  { desc: "Oneplus Z2 Bullet", qty: 1, rate: 1393.16 },
  { desc: "CGST 9%", qty: 1, rate: 152.91 },
  { desc: "SGST 9%", qty: 1, rate: 152.91 }
];

const tbody = document.querySelector("#billTable tbody");
let total = 0;

items.forEach((item, i) => {
  const tr = document.createElement("tr");
  const amount = item.qty * item.rate;
  total += amount;

  tr.innerHTML = `
    <td>${i + 1}</td>
    <td>${item.desc}</td>
    <td>${item.qty}</td>
    <td>${item.rate.toFixed(2)}</td>
    <td>${amount.toFixed(2)}</td>
  `;
  tbody.appendChild(tr);
});

document.getElementById("totalAmount").innerText = total.toFixed(2);
