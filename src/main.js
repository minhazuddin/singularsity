// Singularsity Website JavaScript

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS
  AOS.init({
    duration: 500,
    easing: 'ease-out',
    once: true,
    mirror: false
  });

  // Set the current year for copyright
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // Debug footer logo loading
  const footerLogo = document.querySelector('.footer-logo');
  if (footerLogo) {
    console.log('Footer logo found:', footerLogo);
    console.log('Footer logo src:', footerLogo.src);
    console.log('Footer logo complete:', footerLogo.complete);
    
    // Force the image to be visible
    footerLogo.style.opacity = '1';
    footerLogo.style.display = 'block';
    
    // Add a fallback if image fails to load
    if (!footerLogo.complete || footerLogo.naturalWidth === 0) {
      console.log('Footer logo not loaded yet or has errors, setting fallback text');
      const logoParent = footerLogo.parentElement;
      const fallbackText = document.createElement('h3');
      fallbackText.textContent = 'Singularsity';
      fallbackText.className = 'text-white mb-3';
      logoParent.insertBefore(fallbackText, footerLogo.nextSibling);
    }
    
    footerLogo.addEventListener('load', function() {
      console.log('Footer logo loaded successfully');
      console.log('Natural width:', this.naturalWidth);
      console.log('Natural height:', this.naturalHeight);
      // Make sure it's visible
      this.style.opacity = '1';
      this.style.display = 'block';
    });
    
    footerLogo.addEventListener('error', function() {
      console.error('Footer logo failed to load');
      console.error('Image path:', this.src);
    });
    
    // If already loaded, check status
    if (footerLogo.complete) {
      console.log('Footer logo already loaded:', footerLogo.naturalWidth > 0 ? 'successfully' : 'with errors');
    }
  } else {
    console.error('Footer logo element not found in DOM');
  }

  // Navbar scroll behavior
  const mainNav = document.getElementById('mainNav');
  
  if (mainNav) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 70) {
        mainNav.classList.add('navbar-shrink');
      } else {
        mainNav.classList.remove('navbar-shrink');
      }
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Close mobile menu if open
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navbarCollapse = document.querySelector('.navbar-collapse');
      
      if (navbarCollapse.classList.contains('show')) {
        navbarToggler.click();
      }
      
      // Scroll to target
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Contact form submission handling
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    // Initialize EmailJS
    (function() {
      // Replace with your actual EmailJS user ID
      emailjs.init("YOUR_EMAILJS_USER_ID");
    })();

    // Add input event listeners for real-time validation
    const formInputs = contactForm.querySelectorAll('input, select, textarea');
    
    // Track validation timeouts to prevent multiple messages
    const validationTimeouts = new Map();
    
    // Track which fields have already been validated as valid
    const validatedFields = new Set();
    
    // Track typing debounce timeouts
    const typingTimeouts = new Map();
    
    // Debounce delay in milliseconds
    const TYPING_DEBOUNCE_DELAY = 800; // Wait for 800ms of inactivity
    
    formInputs.forEach(input => {
      input.addEventListener('input', function() {
        // Clear any existing typing timeout for this input
        if (typingTimeouts.has(input)) {
          clearTimeout(typingTimeouts.get(input));
        }
        
        // Clear any existing validation feedback while typing
        const nextSibling = input.nextElementSibling;
        if (nextSibling && (nextSibling.classList.contains('invalid-feedback') || nextSibling.classList.contains('valid-feedback'))) {
          nextSibling.remove();
        }
        
        // Remove validation classes while typing
        input.classList.remove('is-valid', 'is-invalid');
        
        // Set a new timeout to validate after the user stops typing
        const timeout = setTimeout(() => {
          validateInput(input, false);
        }, TYPING_DEBOUNCE_DELAY);
        
        // Store the timeout
        typingTimeouts.set(input, timeout);
      });
      
      input.addEventListener('blur', function() {
        // Clear any typing timeout
        if (typingTimeouts.has(input)) {
          clearTimeout(typingTimeouts.get(input));
          typingTimeouts.delete(input);
        }
        
        // Validate immediately on blur
        validateInput(this, true);
      });
    });
    
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Show loading state
      const submitBtn = document.getElementById('submit-btn');
      const buttonText = document.getElementById('button-text');
      const buttonSpinner = document.getElementById('button-spinner');
      const successMessage = document.getElementById('success-message');
      const errorMessage = document.getElementById('error-message');
      
      // Hide any previous messages
      successMessage.classList.add('d-none');
      errorMessage.classList.add('d-none');
      
      // Show spinner
      buttonText.textContent = 'Sending...';
      buttonSpinner.classList.remove('d-none');
      submitBtn.disabled = true;
      
      // Get form data
      const templateParams = {
        from_name: document.getElementById('name').value,
        reply_to: document.getElementById('email').value,
        inquiry_type: document.getElementById('inquiry').value,
        message: document.getElementById('message').value
      };
      
      // Send the email using EmailJS
      // Replace with your actual EmailJS service ID and template ID
      emailjs.send('service_id', 'template_id', templateParams)
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          
          // Hide spinner
          buttonText.textContent = 'Send Message';
          buttonSpinner.classList.add('d-none');
          submitBtn.disabled = false;
          
          // Show success message
          successMessage.classList.remove('d-none');
          
          // Reset form
          contactForm.reset();
        }, function(error) {
          console.log('FAILED...', error);
          
          // Hide spinner
          buttonText.textContent = 'Send Message';
          buttonSpinner.classList.add('d-none');
          submitBtn.disabled = false;
          
          // Show error message
          errorMessage.classList.remove('d-none');
        });
    });
    
    // Input validation function
    function validateInput(input, showError = false) {
      let isValid = true;
      let errorMessage = '';
      
      // Clear any existing timeout for this input
      if (validationTimeouts.has(input)) {
        clearTimeout(validationTimeouts.get(input));
      }
      
      // Remove any existing feedback elements
      const nextSibling = input.nextElementSibling;
      if (nextSibling && (nextSibling.classList.contains('invalid-feedback') || nextSibling.classList.contains('valid-feedback'))) {
        nextSibling.remove();
      }
      
      // Check for empty values
      if (!input.value.trim()) {
        isValid = false;
        errorMessage = `This field is required`;
        // Field is no longer valid, so remove from validated set
        validatedFields.delete(input);
      } else {
        // Specific validation for email
        if (input.type === 'email') {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(input.value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
            // Field is no longer valid, so remove from validated set
            validatedFields.delete(input);
          }
        }
        
        // Specific validation for select
        if (input.tagName === 'SELECT' && input.value === '') {
          isValid = false;
          errorMessage = 'Please select an option';
          // Field is no longer valid, so remove from validated set
          validatedFields.delete(input);
        }
      }
      
      // Update UI based on validation
      if (isValid) {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        
        // Only show "Looks good!" if this is the first time the field is validated as valid
        // or if it was previously invalid
        if (!validatedFields.has(input)) {
          // Mark this field as validated
          validatedFields.add(input);
          
          // Add valid feedback
          const validFeedback = document.createElement('div');
          validFeedback.classList.add('valid-feedback');
          validFeedback.textContent = 'Looks good!';
          input.after(validFeedback);
          
          // Hide the "Looks good!" message after 2 seconds
          const timeout = setTimeout(() => {
            if (validFeedback.parentNode) {
              // Add fade-out class first for smooth transition
              validFeedback.classList.add('fade-out');
              // Then remove after transition completes
              setTimeout(() => {
                if (validFeedback.parentNode) {
                  validFeedback.remove();
                }
              }, 300); // Match this with the CSS transition duration
            }
          }, 2000);
          
          // Store the timeout so we can clear it if needed
          validationTimeouts.set(input, timeout);
        }
      } else if (showError) {
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        
        // Add error message
        const invalidFeedback = document.createElement('div');
        invalidFeedback.classList.add('invalid-feedback');
        invalidFeedback.textContent = errorMessage;
        input.after(invalidFeedback);
      }
      
      return isValid;
    }
  }

  // Debug the Privacy Policy link styles
  const privacyLinks = document.querySelectorAll('.privacy-link');
  
  privacyLinks.forEach(link => {
    console.log('Privacy Link:', link);
    console.log('Computed Style:', window.getComputedStyle(link));
    
    // Add manual tracking of hover state
    link.addEventListener('mouseenter', function() {
      console.log('Link hovered - current color:', window.getComputedStyle(this).color);
      this.style.color = 'white';
    });
    
    link.addEventListener('mouseleave', function() {
      console.log('Link mouse left - reverting color');
      this.style.color = 'rgba(255, 255, 255, 0.8)';
    });
  });
});

// Add custom cursor for interactive elements (optional enhancement)
document.addEventListener('mousemove', function(e) {
  const cursor = document.querySelector('.custom-cursor');
  
  if (cursor) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  }
});

// Hover effect for service cards
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.classList.add('active');
  });
  
  card.addEventListener('mouseleave', function() {
    this.classList.remove('active');
  });
});

// Newsletter form submission
const newsletterForm = document.querySelector('footer form');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.querySelector('input[type="email"]').value;
    
    // In a real implementation, you would send this data to your server
    console.log('Newsletter subscription:', email);
    
    // Show success message (for demo purposes)
    alert('Thank you for subscribing to our newsletter!');
    
    // Reset form
    this.reset();
  });
} 