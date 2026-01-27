import { Recipe } from 'cooklang';

// Fetch and parse the cooklang recipe
async function loadRecipe() {
  const response = await fetch('/butterfly-pea-flower-experiment.cook');
  const text = await response.text();
  const recipe = new Recipe(text);
  return { recipe, rawText: text };
}

// Render ingredient with styling
function renderIngredient(ingredient) {
  const qty = ingredient.quantity ? `${ingredient.quantity}` : '';
  const unit = ingredient.units ? ` ${ingredient.units}` : '';
  return `<span class="ingredient">${ingredient.name}${qty ? ` (${qty}${unit})` : ''}</span>`;
}

// Render equipment with styling
function renderEquipment(equipment) {
  return `<span class="equipment">${equipment.name}</span>`;
}

// Render timer with styling
function renderTimer(timer) {
  const qty = timer.quantity || '';
  const unit = timer.units || '';
  return `<span class="timer">${qty} ${unit}</span>`;
}

// Render a single step
function renderStep(step, index) {
  let html = '';

  for (const item of step) {
    if (item.type === 'text') {
      html += item.value;
    } else if (item.type === 'ingredient') {
      html += renderIngredient(item);
    } else if (item.type === 'cookware') {
      html += renderEquipment(item);
    } else if (item.type === 'timer') {
      html += renderTimer(item);
    }
  }

  return html;
}

// Parse comments from raw text to extract notes
function extractComments(rawText) {
  const comments = [];
  const lines = rawText.split('\n');

  for (const line of lines) {
    const commentMatch = line.match(/^--\s*(.+)\s*--$/);
    if (commentMatch) {
      comments.push(commentMatch[1].trim());
    }
  }

  return comments;
}

// Extract sections from raw text
function extractSections(rawText) {
  const sections = [];
  const sectionRegex = /==\s*(.+?)\s*==/g;
  let match;

  while ((match = sectionRegex.exec(rawText)) !== null) {
    sections.push(match[1]);
  }

  return sections;
}

// Main render function
function renderRecipe(recipe, rawText) {
  const container = document.getElementById('recipe-content');

  // Build the HTML content
  let html = '';

  // Big Idea Section
  html += `
    <div class="big-idea">
      <h2>The Big Idea</h2>
      <p>Butterfly pea flowers make a special blue tea that changes color like magic!
      When you add something <strong class="color-pink">sour</strong> (an acid), it turns <strong class="color-pink">pink</strong>.
      When you add something <strong class="color-green">slippery-feeling</strong> (a base), it turns <strong class="color-green">green</strong>.</p>
    </div>
  `;

  // Color Demo
  html += `
    <div class="color-demo">
      <div class="color-cup">
        <div class="cup-visual blue"></div>
        <div class="cup-label">Water<br>(Neutral)</div>
      </div>
      <div class="color-cup">
        <div class="cup-visual pink"></div>
        <div class="cup-label">Lemon Juice<br>(Acid)</div>
      </div>
      <div class="color-cup">
        <div class="cup-visual green"></div>
        <div class="cup-label">Baking Soda<br>(Base)</div>
      </div>
    </div>
  `;

  // Background Section
  html += `
    <div class="section">
      <h2 class="section-title">Background for Teachers</h2>
      <div class="section-content">
        <p><strong>What is pH?</strong> A scale from 0-14 that measures how acidic or basic a substance is:</p>
        <ul>
          <li><strong>0-6</strong> = Acidic (sour things like lemon juice)</li>
          <li><strong>7</strong> = Neutral (plain water)</li>
          <li><strong>8-14</strong> = Basic/Alkaline (slippery things like soap)</li>
        </ul>
        <p style="margin-top: 1rem;"><strong>What is an Indicator?</strong> Something that changes color to show if a liquid is an acid or base. Butterfly pea flowers contain <em>anthocyanin</em>, a natural blue pigment that changes color!</p>
      </div>
    </div>
  `;

  // Materials Section
  html += `
    <div class="section">
      <h2 class="section-title">Materials Needed</h2>
      <div class="section-content">
        <h3 style="margin-bottom: 0.5rem;">For the Indicator:</h3>
        <ul class="materials-list">
          <li>1 tbsp dried butterfly pea flowers (or 2 tea bags)</li>
          <li>2 cups hot water</li>
        </ul>
        <h3 style="margin: 1rem 0 0.5rem;">For Testing:</h3>
        <ul class="materials-list">
          <li>1/4 cup plain water</li>
          <li>1 fresh lemon (for juice)</li>
          <li>1 tsp baking soda + 1/4 cup water</li>
        </ul>
        <h3 style="margin: 1rem 0 0.5rem;">Equipment:</h3>
        <ul class="materials-list">
          <li>4 clear cups or jars</li>
          <li>Measuring cups/spoons</li>
          <li>Spoons for stirring</li>
          <li>Labels or marker</li>
          <li>White paper (backdrop)</li>
        </ul>
      </div>
    </div>
  `;

  // Procedure Section
  html += `
    <div class="section">
      <h2 class="section-title">Procedure</h2>
      <div class="section-content">
        <h3>Part 1: Make the Indicator (Teacher Prep)</h3>
        <div class="step">
          <div class="step-number">1</div>
          <div class="step-content">Pour <span class="ingredient">2 cups hot water</span> into a heat-safe container</div>
        </div>
        <div class="step">
          <div class="step-number">2</div>
          <div class="step-content">Add <span class="ingredient">dried butterfly pea flowers (1 tbsp)</span> or tea bags</div>
        </div>
        <div class="step">
          <div class="step-number">3</div>
          <div class="step-content">Steep for <span class="timer">5 minutes</span> until deep blue</div>
        </div>
        <div class="step">
          <div class="step-number">4</div>
          <div class="step-content">Remove flowers and cool for <span class="timer">10 minutes</span></div>
        </div>
        <div class="note safety-note">Adults should handle hot water!</div>

        <h3 style="margin-top: 1.5rem;">Part 2: Run the Experiment</h3>
        <div class="step">
          <div class="step-number">1</div>
          <div class="step-content">Label 4 <span class="equipment">clear cups</span>: "Blue Tea", "Water", "Lemon Juice", "Baking Soda"</div>
        </div>
        <div class="step">
          <div class="step-number">2</div>
          <div class="step-content">Pour 1/4 cup blue indicator into each cup</div>
        </div>
        <div class="step">
          <div class="step-number">3</div>
          <div class="step-content"><strong>Cup 1:</strong> Leave alone (control) - stays <span class="color-blue">BLUE</span></div>
        </div>
        <div class="step">
          <div class="step-number">4</div>
          <div class="step-content"><strong>Cup 2:</strong> Add 1 tbsp plain water - stays <span class="color-blue">BLUE</span> (neutral)</div>
        </div>
        <div class="step">
          <div class="step-number">5</div>
          <div class="step-content"><strong>Cup 3:</strong> Add 1 tbsp <span class="ingredient">lemon juice</span> - turns <span class="color-pink">PINK</span> (acid!)</div>
        </div>
        <div class="step">
          <div class="step-number">6</div>
          <div class="step-content"><strong>Cup 4:</strong> Add 1 tbsp <span class="ingredient">baking soda solution</span> - turns <span class="color-green">GREEN</span> (base!)</div>
        </div>
        <div class="note tip-note">Ask students to predict what will happen BEFORE each test!</div>
      </div>
    </div>
  `;

  // Results Table
  html += `
    <div class="section">
      <h2 class="section-title">Expected Results</h2>
      <table class="results-table">
        <thead>
          <tr>
            <th>Cup</th>
            <th>Added</th>
            <th>Type</th>
            <th>pH</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Nothing</td>
            <td>Control</td>
            <td>~7</td>
            <td class="color-blue"><strong>Blue</strong></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Water</td>
            <td>Neutral</td>
            <td>7</td>
            <td class="color-blue"><strong>Blue</strong></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Lemon Juice</td>
            <td>Acid</td>
            <td>~2</td>
            <td class="color-pink"><strong>Pink</strong></td>
          </tr>
          <tr>
            <td>4</td>
            <td>Baking Soda</td>
            <td>Base</td>
            <td>~8</td>
            <td class="color-green"><strong>Green</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  `;

  // Bonus Section
  html += `
    <div class="section">
      <h2 class="section-title">Bonus: Reverse the Color!</h2>
      <div class="section-content">
        <p>This is the "wow" moment:</p>
        <div class="step">
          <div class="step-number">1</div>
          <div class="step-content">Take Cup 3 (the <span class="color-pink">pink</span> lemon juice cup)</div>
        </div>
        <div class="step">
          <div class="step-number">2</div>
          <div class="step-content">Slowly add baking soda solution, a little at a time</div>
        </div>
        <div class="step">
          <div class="step-number">3</div>
          <div class="step-content">Watch: <span class="color-pink">Pink</span> → <span class="color-purple">Purple</span> → <span class="color-blue">Blue</span> → <span class="color-green">Green</span></div>
        </div>
        <div class="note">This is called a <strong>neutralization reaction</strong> - the base cancels out the acid!</div>
      </div>
    </div>
  `;

  // Discussion Questions
  html += `
    <div class="section">
      <h2 class="section-title">Discussion Questions</h2>
      <div class="section-content">
        <ol>
          <li><strong>Why did lemon juice turn the tea pink?</strong><br>→ Because lemon juice is an ACID (it's sour!)</li>
          <li style="margin-top: 0.75rem;"><strong>Why did baking soda turn the tea green?</strong><br>→ Because baking soda is a BASE (opposite of acid)</li>
          <li style="margin-top: 0.75rem;"><strong>Why didn't water change the color?</strong><br>→ Because water is NEUTRAL (not acid, not base)</li>
          <li style="margin-top: 0.75rem;"><strong>What other sour things might be acids?</strong><br>→ Vinegar, orange juice, soda, tomatoes</li>
        </ol>
      </div>
    </div>
  `;

  // Vocabulary
  html += `
    <div class="section">
      <h2 class="section-title">Key Vocabulary</h2>
      <div class="section-content">
        <ul>
          <li><span class="vocab-term">Acid:</span> A substance that tastes sour and turns our tea PINK</li>
          <li><span class="vocab-term">Base:</span> A substance that feels slippery and turns our tea GREEN</li>
          <li><span class="vocab-term">pH:</span> A number that tells us how sour or slippery something is</li>
          <li><span class="vocab-term">Indicator:</span> Something that changes color to show acid or base</li>
          <li><span class="vocab-term">Neutral:</span> Not sour, not slippery – right in the middle (like water)</li>
          <li><span class="vocab-term">Anthocyanin:</span> The special blue color in butterfly pea flowers</li>
        </ul>
      </div>
    </div>
  `;

  // Safety
  html += `
    <div class="section">
      <h2 class="section-title">Safety Notes</h2>
      <div class="section-content">
        <ul class="materials-list">
          <li>All materials are non-toxic and safe</li>
          <li>Safe for ages 3+ with adult supervision</li>
          <li>Adults should handle hot water</li>
          <li>Don't drink after adding baking soda</li>
          <li>Wash hands after experiment</li>
        </ul>
      </div>
    </div>
  `;

  container.innerHTML = html;
}

// Initialize
async function init() {
  try {
    const { recipe, rawText } = await loadRecipe();
    console.log('Parsed recipe:', recipe);
    renderRecipe(recipe, rawText);

    // Set up print button
    document.getElementById('print-btn').addEventListener('click', () => {
      window.print();
    });
  } catch (error) {
    console.error('Error loading recipe:', error);
    document.getElementById('recipe-content').innerHTML = `
      <div class="note safety-note">
        Error loading recipe. Make sure butterfly-pea-flower-experiment.cook exists.
      </div>
    `;
  }
}

init();
