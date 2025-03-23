const generateStars = (count) => {
  const starsOverlay = document.querySelector('.stars-overlay');
  for (let i = 0; i < count; i++) {
      const star = document.createElement('img');
      star.classList.add('star');
      star.src = 'images/others/star.svg'; // SVG path

      // Dynamic sizing (adjust these values as needed)
      const size = Math.random() * 3 + 1; // Random size between 1px and 4px
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      // Random positioning
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;

      // Random animation speed
      star.style.animationDuration = `${Math.random() * 2 + 1}s`; // 1-3 seconds

      starsOverlay.appendChild(star);
  }
};

const OverlayStars = (starPositions) => {
  const starsOverlay = document.querySelector('.stars-overlay');
  starPositions.forEach(({ top, left }) => {
      const star = document.createElement('img');
      star.classList.add('star');
      star.src = '/images/others/star.svg'; // SVG path
      star.style.width = '2px'; // Fixed size for overlay stars
      star.style.height = '2px';
      star.style.top = `${top}px`;
      star.style.left = `${left}px`;
      starsOverlay.appendChild(star);
  });
};

// Single DOMContentLoaded listener for both functions
document.addEventListener('DOMContentLoaded', () => {
  generateStars(200); // Random stars
  OverlayStars([ // Specific positioned stars
      { top: 50, left: 100 },
      { top: 200, left: 400 },
      { top: 300, left: 800 },
      // Add more positions...
  ]);
});

  // Array of image paths (replace these with your actual image paths)
  const images = [
    '/import/star/star_1.png',
    '/import/star/star_2.png',
    '/import/star/star_3.png',
    '/import/star/star_4.png',
    '/import/star/star_5.png',
    '/import/star/star_6.png',
    '/import/star/star_7.png',
    '/import/star/star_8.png',
    '/import/star/star_9.png',
    '/import/star/star_10.png',
    '/import/star/star_11.png',
    '/import/star/star_12.png',
    '/import/star/star_13.png',
    '/import/star/star_14.png',
    '/import/star/star_15.png',
    '/import/star/star_16.png',
    '/import/star/star_17.png',
    '/import/star/star_18.png',
    '/import/star/star_19.png',
    '/import/star/star_20.png',
    '/import/star/star_21.png',
    '/import/star/star_22.png',
    '/import/star/star_23.png',
    '/import/star/star_24.png',
  ];
  
  // Function to select two different random images ensuring no duplicates
  function getRandomImages() {
    const shuffled = images.sort(() => 0.5 - Math.random()); // Shuffle the array
    return shuffled.slice(0, 2); // Return the first two elements
  }
  
  // Apply the random images to the background
  const [randomImage1, randomImage2] = getRandomImages();
  const background = document.getElementById('background');
  
  // Combine the two images into one background style
  background.style.backgroundImage = `url('${randomImage1}'), url('${randomImage2}')`;
  background.style.backgroundSize = 'cover'; // Adjust the background size as needed
  background.style.backgroundRepeat = 'no-repeat'; // Ensure no repetition
  

  
  function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random position and size
    const left = Math.random() * 100;
    const size = Math.random() * 4 + 2; // Between 2px and 6px
    const duration = Math.random() * 10 + 5; // Between 5s and 15s
    
    particle.style.left = left + '%';
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.animationDuration = duration + 's';
    
    // Add slight horizontal drift
    particle.style.setProperty('--random-drift', `${Math.random() * 20 - 10}px`);
    
    // document.querySelector('.particle-container').appendChild(particle);
    
    // Remove element after animation
    setTimeout(() => {
        particle.remove();
    }, duration * 1000);
}

// Create particles periodically
setInterval(createParticle, 100);



function highlight() {
  const container = document.querySelector('.container');

  // Highlight "beli"
  const beliRegex = /beli/gi; // Case-insensitive global search for "beli"
  container.innerHTML = container.innerHTML.replace(beliRegex, '<span class="highlight-beli">$&</span>');

  // Highlight "ƒ"
  const fragmentRegex = /ƒ/g;
  container.innerHTML = container.innerHTML.replace(fragmentRegex, '<span class="highlight-fragment">$&</span>');  
  
  const hakiRegex = /haki/gi;
  container.innerHTML = container.innerHTML.replace(hakiRegex, '<span class="highlight-haki">$&</span>');

  const masteryRegex = /mastery/gi;
  container.innerHTML = container.innerHTML.replace(masteryRegex, '<span class="highlight-mastery">$&</span>');

  const bossRegex = /boss/gi;
  container.innerHTML = container.innerHTML.replace(bossRegex, '<span class="highlight-boss">$&</span>');

  const meleeRegex = /melee/gi;
  container.innerHTML = container.innerHTML.replace(meleeRegex, '<span class="highlight-melee">$&</span>');
}

// Call the function when the page loads
window.onload = highlight;
