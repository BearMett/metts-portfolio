import React from 'react';
import { renderToFile } from '@react-pdf/renderer';
import { ResumePDF } from './resume-pdf/ResumePDF';
import { parseResumeMarkdown } from '../lib/resume-parser';
import path from 'path';

async function main() {
  console.log('📄 Parsing resume markdown...');
  const data = parseResumeMarkdown(path.join(process.cwd(), 'app/resume/resume.md'));

  console.log('📝 Generating PDF...');
  const outputPath = path.join(process.cwd(), 'public/resume.pdf');

  await renderToFile(<ResumePDF data={data} />, outputPath);

  console.log(`✅ Resume PDF generated successfully: ${outputPath}`);
}

main().catch((error) => {
  console.error('❌ Failed to generate resume PDF:', error);
  process.exit(1);
});
