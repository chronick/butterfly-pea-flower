import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import { setTimeout } from 'timers/promises';

const PORT = 4173;
const OUTPUT_FILE = 'butterfly-pea-flower-experiment.pdf';

async function exportPDF() {
  console.log('Building project...');

  // Build the project first
  const build = spawn('npm', ['run', 'build'], { stdio: 'inherit' });
  await new Promise((resolve, reject) => {
    build.on('close', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`Build failed with code ${code}`));
    });
  });

  console.log('Starting preview server...');

  // Start the preview server
  const preview = spawn('npm', ['run', 'preview', '--', '--port', String(PORT)], {
    stdio: ['ignore', 'pipe', 'pipe']
  });

  // Wait for server to start
  await setTimeout(2000);

  try {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    console.log(`Loading page at http://localhost:${PORT}...`);
    await page.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle0' });

    // Hide the print button for PDF
    await page.evaluate(() => {
      const btn = document.querySelector('.print-btn');
      if (btn) btn.style.display = 'none';
    });

    console.log(`Generating PDF: ${OUTPUT_FILE}...`);
    await page.pdf({
      path: OUTPUT_FILE,
      format: 'Letter',
      printBackground: true,
      margin: {
        top: '0.5in',
        right: '0.5in',
        bottom: '0.5in',
        left: '0.5in'
      }
    });

    console.log(`PDF exported successfully: ${OUTPUT_FILE}`);

    await browser.close();
  } finally {
    // Kill the preview server
    preview.kill();
  }
}

exportPDF().catch((err) => {
  console.error('Error exporting PDF:', err);
  process.exit(1);
});
