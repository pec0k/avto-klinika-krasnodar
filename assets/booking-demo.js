const form = document.querySelector('[data-demo-form]');

if (form) {
  form.addEventListener('submit', event => {
    if (event.defaultPrevented) return;
    event.preventDefault();
    const status = form.querySelector('[data-form-status]');
    if (status) status.textContent = 'Анкета заполнена. В демо-версии заявка не отправляется.';
  });
}
