const submit = document.getElementById('submit');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const tel = document.getElementById('tel');
const form = document.getElementById('form');
const tableData = document.getElementById('tableData');

submit.addEventListener('click', check);
getData();

async function check() {
  if (fullname.value && email.value && tel != '') {
    // new item(input.value);

    await fetch('/api/create', {
      method: 'POST',
      body: JSON.stringify({
        fullname: fullname.value,
        email: email.value,
        tel: tel.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    fullname.value = '';
    email.value = '';
    tel.value = '';
  }
}

function getData() {
  fetch('/api/get')
    .then((response) => response.json())
    .then((data) => spreadData(data));
}

const spreadData = (data) => {
  data.map(function (element) {
    tableData.innerHTML += `<tr><td>${element.fullname}</td><td>${element.email}</td></tr>`;
  });
};
