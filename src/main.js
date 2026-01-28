// Main render function - two page layout
function renderRecipe() {
  const container = document.getElementById('recipe-content');

  let html = '';

  // ==========================================
  // PAGE 1: STUDENT PAGE
  // ==========================================
  html += `<div class="page page-student">`;

  // Big Idea Section
  html += `
    <div class="big-idea">
      <h2>What Are We Discovering?</h2>
      <p>Some liquids are <strong class="color-pink">sour</strong> (like lemon juice) and some feel <strong class="color-green">slippery</strong> (like soap). Scientists call sour things <strong>acids</strong> and slippery things <strong>bases</strong>.</p>
      <p style="margin-top: 0.5rem;">Today we'll use color-changing tea to find out which is which!</p>
    </div>
  `;

  // pH Scale Diagram with callouts above, labels below
  html += `
    <div class="section">
      <h2 class="section-title">The pH Scale</h2>
      <div class="ph-scale">
        <div class="ph-callouts-above">
          <div class="ph-callout ph-callout-lemon">
            <span class="ph-callout-text">Lemon<br>pH ~2</span>
            <div class="ph-callout-line"></div>
          </div>
          <div class="ph-callout ph-callout-baking-soda">
            <span class="ph-callout-text">Baking Soda<br>pH ~8</span>
            <div class="ph-callout-line"></div>
          </div>
        </div>
        <div class="ph-bar">
          <div class="ph-segment acid-strong">0</div>
          <div class="ph-segment acid-strong">1</div>
          <div class="ph-segment acid-medium">2</div>
          <div class="ph-segment acid-medium">3</div>
          <div class="ph-segment acid-weak">4</div>
          <div class="ph-segment acid-weak">5</div>
          <div class="ph-segment acid-weak">6</div>
          <div class="ph-segment neutral">7</div>
          <div class="ph-segment base-weak">8</div>
          <div class="ph-segment base-weak">9</div>
          <div class="ph-segment base-medium">10</div>
          <div class="ph-segment base-medium">11</div>
          <div class="ph-segment base-strong">12</div>
          <div class="ph-segment base-strong">13</div>
          <div class="ph-segment base-strong">14</div>
        </div>
        <div class="ph-labels">
          <div class="ph-label-group">
            <span class="ph-label-text"><strong>ACIDS</strong><br>Sour taste</span>
          </div>
          <div class="ph-label-group ph-label-center">
            <span class="ph-arrow">←</span>
            <span class="ph-label-text"><strong>NEUTRAL</strong><br>Water<br>pH 7</span>
            <span class="ph-arrow">→</span>
          </div>
          <div class="ph-label-group">
            <span class="ph-label-text"><strong>BASES</strong><br>Slippery feel</span>
          </div>
        </div>
      </div>
    </div>
  `;

  // The Science (moved to page 1)
  html += `
    <div class="section">
      <h2 class="section-title">The Science</h2>
      <p class="science-text">Butterfly pea flowers contain <strong>anthocyanin</strong>, a pigment that changes color at different pH levels. Lemons are acidic because of <strong>citric acid</strong>. Baking soda is basic because it contains <strong>sodium bicarbonate</strong>.</p>
    </div>
  `;

  // Student Procedure
  html += `
    <div class="section">
      <h2 class="section-title">Your Experiment</h2>
      <div class="section-content">
        <p class="intro-text">Your teacher has made tea from butterfly pea flowers. This tea is a <strong>pH indicator</strong> – it changes color to show if something is an acid or a base!</p>

        <div class="experiment-steps">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <strong>Look at Cup 1</strong> – This is the tea. What color is it?
            </div>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <strong>Cup 2: Add Water</strong> – Predict: Will the color change? Add some water and stir. What happened?
            </div>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <strong>Cup 3: Add Lemon Juice</strong> – Predict: What will the sour lemon do? Add lemon juice and stir. What color is it now?
            </div>
          </div>
          <div class="step">
            <div class="step-number">4</div>
            <div class="step-content">
              <strong>Cup 4: Add Baking Soda Water</strong> – Predict: What will happen? Add baking soda water and stir. What color did you get?
            </div>
          </div>
        </div>

        <div class="prediction-box">
          <h3>My Predictions</h3>
          <div class="prediction-grid">
            <div class="prediction-item">
              <span class="prediction-label">Water:</span>
              <span class="prediction-blank"></span>
            </div>
            <div class="prediction-item">
              <span class="prediction-label">Lemon Juice:</span>
              <span class="prediction-blank"></span>
            </div>
            <div class="prediction-item">
              <span class="prediction-label">Baking Soda:</span>
              <span class="prediction-blank"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Wow Experiment (student version)
  html += `
    <div class="section wow-section">
      <h2 class="section-title">Bonus: Color Shift!</h2>
      <div class="section-content">
        <p>Want to see something amazing? Take your <strong>pink lemon juice cup</strong> and slowly add baking soda water, a little bit at a time.</p>
        <div class="color-shift-visual">
          <div class="shift-cup pink"></div>
          <div class="shift-arrow">→</div>
          <div class="shift-cup purple"></div>
          <div class="shift-arrow">→</div>
          <div class="shift-cup blue"></div>
          <div class="shift-arrow">→</div>
          <div class="shift-cup green"></div>
        </div>
        <p class="wow-question"><strong>Think about it:</strong> Why does the color keep changing? What's happening to the acid?</p>
      </div>
    </div>
  `;

  html += `</div>`; // End page-student

  // ==========================================
  // PAGE 2: TEACHER PAGE
  // ==========================================
  html += `<div class="page page-teacher">`;

  html += `<h1 class="teacher-header">Teacher Guide</h1>`;

  // Two-column layout for teacher page
  html += `<div class="teacher-columns">`;

  // Left column
  html += `<div class="teacher-col">`;

  // Materials (first)
  html += `
    <div class="section section-compact">
      <h2 class="section-title">Materials</h2>
      <div class="section-content">
        <ul class="materials-list-compact">
          <li>1 tbsp dried butterfly pea flowers</li>
          <li>2 cups hot water</li>
          <li>1 fresh lemon (squeezed)</li>
          <li>1 tsp baking soda + ¼ cup water</li>
          <li>4 clear cups + labels</li>
          <li>Measuring spoons</li>
          <li>Stirring spoons</li>
          <li>White paper backdrop</li>
        </ul>
        <p class="small-text" style="margin-top: 0.5rem;"><strong>Where to buy flowers:</strong> Asian grocery stores, Amazon, tea shops. A 1oz bag = 10+ experiments.</p>
      </div>
    </div>
  `;

  // Prep Section (second)
  html += `
    <div class="section section-compact">
      <h2 class="section-title">Preparation</h2>
      <div class="section-content">
        <ol class="prep-steps">
          <li>Boil <strong>2 cups water</strong></li>
          <li>Add <strong>1 tbsp dried butterfly pea flowers</strong> (or 2 tea bags)</li>
          <li>Steep <strong>5 minutes</strong> until deep blue</li>
          <li>Remove flowers, cool <strong>10 minutes</strong></li>
          <li>Mix <strong>1 tsp baking soda</strong> into <strong>¼ cup water</strong> until dissolved</li>
          <li>Pour ¼ cup indicator into each of 4 labeled cups</li>
        </ol>
        <div class="note safety-note">Handle hot water away from students!</div>
      </div>
    </div>
  `;

  html += `</div>`; // End left column

  // Right column
  html += `<div class="teacher-col">`;

  // Expected Results
  html += `
    <div class="section section-compact">
      <h2 class="section-title">Expected Results</h2>
      <table class="results-table-compact">
        <thead>
          <tr>
            <th>Cup</th>
            <th>Added</th>
            <th>Type</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Nothing</td>
            <td>Control</td>
            <td class="color-blue"><strong>Blue</strong></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Water</td>
            <td>Neutral</td>
            <td class="color-blue"><strong>Blue</strong></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Lemon</td>
            <td>Acid</td>
            <td class="color-pink"><strong>Pink</strong></td>
          </tr>
          <tr>
            <td>4</td>
            <td>Baking Soda</td>
            <td>Base</td>
            <td class="color-green"><strong>Green</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  `;

  // Discussion Questions
  html += `
    <div class="section section-compact">
      <h2 class="section-title">Discussion Answers</h2>
      <div class="section-content">
        <ul class="discussion-list">
          <li><strong>Why pink with lemon?</strong> Lemon is an acid (sour!)</li>
          <li><strong>Why green with baking soda?</strong> It's a base (opposite of acid)</li>
          <li><strong>Why no change with water?</strong> Water is neutral (pH 7)</li>
          <li><strong>Bonus reaction?</strong> Base neutralizes the acid</li>
        </ul>
      </div>
    </div>
  `;

  // Vocabulary
  html += `
    <div class="section section-compact">
      <h2 class="section-title">Key Terms</h2>
      <div class="vocab-grid">
        <div><strong>Acid:</strong> Sour, turns tea pink</div>
        <div><strong>Base:</strong> Slippery, turns tea green</div>
        <div><strong>pH:</strong> Scale measuring acid/base (0-14)</div>
        <div><strong>Indicator:</strong> Changes color to show pH</div>
        <div><strong>Neutral:</strong> Neither acid nor base (pH 7)</div>
      </div>
    </div>
  `;

  // Safety
  html += `
    <div class="section section-compact">
      <h2 class="section-title">Safety</h2>
      <ul class="safety-list">
        <li>All materials are non-toxic and safe to touch</li>
        <li>Butterfly pea tea and lemon juice are safe to drink</li>
        <li>Wash hands after experiment</li>
      </ul>
      <p class="safety-caution">⚠️ Avoid drinking baking soda water</p>
    </div>
  `;

  html += `</div>`; // End right column
  html += `</div>`; // End teacher-columns

  html += `</div>`; // End page-teacher

  container.innerHTML = html;
}

// Initialize
function init() {
  renderRecipe();

  // Set up print button
  document.getElementById('print-btn').addEventListener('click', () => {
    window.print();
  });
}

init();
