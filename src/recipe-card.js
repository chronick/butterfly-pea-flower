// Recipe card render function
function renderRecipeCard() {
  const container = document.getElementById('recipe-content');

  let html = '';

  // Recipe Card
  html += `<div class="recipe-card">`;

  // Two column layout
  html += `<div class="recipe-columns">`;

  // Left column - Recipe
  html += `<div class="recipe-col recipe-col-main">`;

  // Intro
  html += `
    <div class="recipe-intro">
      <p>Remember the color-changing tea from our science experiment? Now you can make a <strong>magical lemonade</strong> that changes from <span class="color-blue">blue</span> to <span class="color-pink">pink</span> right before your eyes!</p>
    </div>
  `;

  // Ingredients
  html += `
    <div class="recipe-section">
      <h2>Ingredients</h2>
      <ul class="ingredient-list">
        <li><span class="amount">1 tablespoon</span> dried butterfly pea flowers</li>
        <li><span class="amount">2 cups</span> hot water</li>
        <li><span class="amount">1/4 cup</span> sugar (or honey)</li>
        <li><span class="amount">2-3</span> fresh lemons</li>
        <li><span class="amount">2 cups</span> cold water</li>
        <li>Ice cubes</li>
      </ul>
    </div>
  `;

  // Instructions
  html += `
    <div class="recipe-section">
      <h2>Instructions</h2>
      <ol class="instruction-list">
        <li>
          <strong>Make the blue base:</strong> Ask an adult to pour hot water over the butterfly pea flowers. Steep for 5 minutes until deep blue. Strain and let cool.
        </li>
        <li>
          <strong>Add sweetener:</strong> Stir sugar into the warm blue tea until dissolved.
        </li>
        <li>
          <strong>Squeeze lemons:</strong> Juice 2-3 lemons into a separate cup. You'll need about 1/2 cup of lemon juice.
        </li>
        <li>
          <strong>Assemble:</strong> Add cold water and ice to the blue tea in a pitcher.
        </li>
        <li>
          <strong>The magic moment:</strong> Pour lemon juice into your glass of blue lemonade and watch it turn <span class="color-pink">PINK</span>!
        </li>
      </ol>
    </div>
  `;

  html += `</div>`; // End left column

  // Right column - Tips & Science
  html += `<div class="recipe-col recipe-col-side">`;

  // Color shift visual
  html += `
    <div class="recipe-visual">
      <div class="visual-cups">
        <div class="visual-cup blue-cup">
          <div class="cup-liquid"></div>
          <span class="cup-label">Blue Tea</span>
        </div>
        <div class="visual-plus">+</div>
        <div class="visual-lemon">
          <div class="lemon-shape"></div>
          <span class="cup-label">Lemon</span>
        </div>
        <div class="visual-equals">=</div>
        <div class="visual-cup pink-cup">
          <div class="cup-liquid"></div>
          <span class="cup-label">Pink!</span>
        </div>
      </div>
    </div>
  `;

  // Why it works
  html += `
    <div class="recipe-section science-box">
      <h2>Why Does It Work?</h2>
      <p>Butterfly pea flowers contain <strong>anthocyanin</strong>, the same pigment you used in the experiment! The citric acid in lemon juice changes the pigment from blue to pink.</p>
      <p class="science-fact">The more lemon you add, the pinker it gets!</p>
    </div>
  `;

  // Tips
  html += `
    <div class="recipe-section tips-box">
      <h2>Tips</h2>
      <ul class="tips-list">
        <li>Add lemon juice slowly to watch the color change</li>
        <li>Try adding lemon to just half your glass for a two-tone drink!</li>
        <li>Tastes best very cold</li>
      </ul>
    </div>
  `;

  // Substitutions box
  html += `
    <div class="recipe-section subs-box">
      <h2>No Butterfly Pea Flowers?</h2>
      <p>These also contain anthocyanins and change color with acid:</p>
      <ul class="subs-list">
        <li><strong>Blueberries</strong> – blend and strain</li>
        <li><strong>Blackberries</strong> – blend and strain</li>
        <li><strong>Red cabbage</strong> – simmer in water</li>
        <li><strong>Beets</strong> – simmer in water</li>
        <li><strong>Hibiscus tea</strong> – already reddish, turns brighter pink</li>
      </ul>
      <p class="subs-note">Great way to use overripe berries!</p>
    </div>
  `;

  html += `</div>`; // End right column
  html += `</div>`; // End recipe-columns

  // Footer
  html += `
    <div class="recipe-footer">
      <p>From the <strong>Butterfly Pea Flower pH Experiment</strong> – Science you can drink!</p>
    </div>
  `;

  html += `</div>`; // End recipe-card

  container.innerHTML = html;
}

// Initialize
function init() {
  renderRecipeCard();

  // Set up print button
  document.getElementById('print-btn').addEventListener('click', () => {
    window.print();
  });
}

init();
