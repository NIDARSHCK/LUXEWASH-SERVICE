// Smooth scroll for nav links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Interactive service cards
document.querySelectorAll('.interactive-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.add('selected');
    setTimeout(() => card.classList.remove('selected'), 600);
  });
});

// Booking form validation and confirmation
document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;

  // Clear previous errors
  ['name', 'car', 'service', 'date'].forEach(id => {
    document.getElementById(id + 'Error').textContent = '';
    document.getElementById(id + 'Error').classList.remove('active');
  });

  // Validate fields
  const name = document.getElementById('name').value.trim();
  const car = document.getElementById('car').value.trim();
  const service = document.getElementById('service').value;
  const date = document.getElementById('date').value;

  if (!name) {
    showError('nameError', 'Please enter your name.');
    valid = false;
  }
  if (!car) {
    showError('carError', 'Please enter your car model.');
    valid = false;
  }
  if (!service) {
    showError('serviceError', 'Please select a service.');
    valid = false;
  }
  if (!date) {
    showError('dateError', 'Please select a date.');
    valid = false;
  }

  if (!valid) return;

  const confirmation = document.getElementById('confirmation');
  confirmation.textContent = `Thank you, ${name}! Your ${service} for ${car} is booked on ${date}.`;
  confirmation.classList.remove('hidden');
  this.reset();
});

function showError(id, message) {
  const el = document.getElementById(id);
  el.textContent = message;
  el.classList.add('active');
}

// Ripple effect for buttons
document.querySelectorAll('.ripple').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const circle = document.createElement('span');
    circle.classList.add('ripple-circle');
    circle.style.left = `${e.offsetX}px`;
    circle.style.top = `${e.offsetY}px`;
    this.appendChild(circle);
    setTimeout(() => circle.remove(), 500);
  });
});
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.add('selected');
    setTimeout(() => card.classList.remove('selected'), 500);
    alert(`You selected: ${card.querySelector('h3').textContent}`);
  });
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      card.click();
    }
  });
});
