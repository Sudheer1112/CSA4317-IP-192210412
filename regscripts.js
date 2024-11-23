function showFields(method) {
  document.getElementById('emailField').classList.add('hidden');
  document.getElementById('phoneField').classList.add('hidden');
  document.getElementById('mailField').classList.add('hidden');

  if (method === 'email') {
    document.getElementById('emailField').classList.remove('hidden');
  } else if (method === 'phone') {
    document.getElementById('phoneField').classList.remove('hidden');
  } else if (method === 'mail') {
    document.getElementById('mailField').classList.remove('hidden');
  }
}
