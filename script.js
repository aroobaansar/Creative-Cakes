let cart = [];

function addToCart(item, price) {
    cart.push({ item, price });
    alert(`${item} added to cart!`);
}

function viewCart() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
    } else {
        let cartDetails = 'Cart Contents:\n';
        cart.forEach(item => {
            cartDetails += `${item.item} - $${item.price.toFixed(2)}\n`;
        });
        alert(cartDetails);
    }
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty. Add items to proceed to checkout.');
    } else {
        alert('Redirecting to checkout. This is a static example without backend functionality.');
    }
}
function showHome() {
    hideAllSections();
    document.getElementById('home-section').style.display = 'block';
}

function showDeals() {
    hideAllSections();
    document.getElementById('deals-section').style.display = 'block';
}

function showContact() {
    hideAllSections();
    document.getElementById('contact-section').style.display = 'block';
}

function showAbout() {
    hideAllSections();
    document.getElementById('about-section').style.display = 'block';
}

function showCategories() {
    hideAllSections();
    document.getElementById('categories-section').style.display = 'block';
}

function showWeddingCakes() {
    hideAllCategories();
    document.getElementById('wedding-cakes').style.display = 'block';
}

function showBirthdayCakes() {
    hideAllCategories();
    document.getElementById('birthday-cakes').style.display = 'block';
}

// Add more functions for other categories as needed

function hideAllSections() {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
}

function hideAllCategories() {
    const categories = document.querySelectorAll('.cake-category');
    categories.forEach(category => {
        category.style.display = 'none';
    });
}
function sendEmail() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Get form data
      const formData = new FormData(this);
  
      // Check if form data is empty
      if (formData.size === 0) {
        alert("Please fill in all fields before submitting");
        return;
      }
  
      // Create email body
      const emailBody = Array.from(formData.entries())
        .map(entry => `${entry[0]}: ${entry[1]}`)
        .join('\n');
  
      // Send email using JavaScript (dummy implementation)
      const email = 'creativewebmagic@gmail.com';
      const subject = 'Contact Form Submission';
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
  
      // Open default email client to send email
      window.location.href = mailtoLink;
  
      // Show success message
      alert("Message sent successfully!");
    });
  }
  