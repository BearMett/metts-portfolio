import fs from 'fs';
import path from 'path';

export interface Project {
  title: string;
  achievement: string;
  role: string;
  tech: string;
}

export interface Company {
  name: string;
  position: string;
  period: string;
  projects: Project[];
}

export interface ResumeData {
  name: string;
  title: string;
  contact: {
    github: string;
    email: string;
  };
  introduction: string;
  strengths: Array<{ title: string; description: string }>;
  skills: {
    core: string[];
    areas: Array<{ category: string; items: string }>;
  };
  experience: Company[];
  education: string[];
  awards: string[];
  languages: string[];
}

export function parseResumeMarkdown(filePath: string): ResumeData {
  const absolutePath = path.isAbsolute(filePath) ? filePath : path.join(process.cwd(), filePath);
  const content = fs.readFileSync(absolutePath, 'utf-8');
  const lines = content.split('\n');

  const data: ResumeData = {
    name: '',
    title: '',
    contact: { github: '', email: '' },
    introduction: '',
    strengths: [],
    skills: { core: [], areas: [] },
    experience: [],
    education: [],
    awards: [],
    languages: [],
  };

  let currentSection = '';
  let currentCompany: Company | null = null;
  let currentProject: Project | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // 헤더 파싱 (이름 | 타이틀)
    if (line.startsWith('# ') && line.includes('|')) {
      const [name, title] = line
        .replace('# ', '')
        .split('|')
        .map((s) => s.trim());
      data.name = name;
      data.title = title;
      continue;
    }

    // GitHub 링크
    if (line.startsWith('**GitHub**:')) {
      const match = line.match(/\[([^\]]+)\]/);
      if (match) {
        data.contact.github = match[1];
      }
      continue;
    }

    // Email
    if (line.startsWith('**Email**:')) {
      data.contact.email = line.replace('**Email**:', '').replace(/\\/g, '').trim();
      continue;
    }

    // 섹션 헤더 감지
    if (line.startsWith('## **') && line.endsWith('**')) {
      currentSection = line.replace(/## \*\*|\*\*/g, '').trim();

      // 이전 회사/프로젝트 저장
      if (currentProject && currentCompany) {
        currentCompany.projects.push(currentProject);
        currentProject = null;
      }
      if (currentCompany) {
        data.experience.push(currentCompany);
        currentCompany = null;
      }
      continue;
    }

    // 포트폴리오 섹션 스킵
    if (currentSection === '포트폴리오') {
      continue;
    }

    // 자기소개
    if (currentSection === '자기소개' && line && !line.startsWith('---')) {
      data.introduction = data.introduction ? data.introduction + '\n' + line : line;
      continue;
    }

    // 강점
    if (currentSection === '강점' && line.startsWith('- **')) {
      const match = line.match(/- \*\*([^*]+)\*\*: (.+)/);
      if (match) {
        data.strengths.push({ title: match[1], description: match[2] });
      }
      continue;
    }

    // 핵심 기술 (categorized format: "카테고리: item1, item2, ...")
    if (line.startsWith('**핵심 기술**:')) {
      currentSection = '핵심 기술';
      continue;
    }
    if (currentSection === '핵심 기술' && line && !line.startsWith('**') && !line.startsWith('---')) {
      const match = line.match(/^([^:]+): (.+)/);
      if (match) {
        const items = match[2].split(',').map((s) => s.trim());
        if (data.skills.core.length === 0) {
          data.skills.core = items;
        }
        data.skills.areas.push({ category: match[1], items: match[2] });
      }
      continue;
    }

    // 경력 섹션
    if (currentSection === '경력') {
      // 회사 헤더
      if (line.startsWith('### **')) {
        // 이전 프로젝트/회사 저장
        if (currentProject && currentCompany) {
          currentCompany.projects.push(currentProject);
          currentProject = null;
        }
        if (currentCompany) {
          data.experience.push(currentCompany);
        }

        const companyMatch = line.match(/### \*\*([^|]+)\|([^(]+)\(([^)]+)\)\*\*/);
        if (companyMatch) {
          currentCompany = {
            name: companyMatch[1].trim(),
            position: companyMatch[2].trim(),
            period: companyMatch[3].trim(),
            projects: [],
          };
        }
        continue;
      }

      // 프로젝트 제목
      if (line.startsWith('**') && line.endsWith('**') && !line.includes(':')) {
        if (currentProject && currentCompany) {
          currentCompany.projects.push(currentProject);
        }
        currentProject = {
          title: line.replace(/\*\*/g, '').trim(),
          achievement: '',
          role: '',
          tech: '',
        };
        continue;
      }

      // 프로젝트 상세
      if (currentProject) {
        if (line.startsWith('- **성과**:')) {
          currentProject.achievement = line.replace('- **성과**:', '').trim();
        } else if (line.startsWith('- **역할**:')) {
          currentProject.role = line.replace('- **역할**:', '').trim();
        } else if (line.startsWith('- **기술**:')) {
          currentProject.tech = line.replace('- **기술**:', '').trim();
        }
      }
      continue;
    }

    // 학력
    if (currentSection === '학력') {
      if (line && !line.startsWith('---')) {
        data.education.push(line.replace(/^- /, ''));
      }
      continue;
    }

    // 수상 기록
    if (currentSection === '수상 기록') {
      if (line.startsWith('- ')) {
        data.awards.push(line.replace('- ', ''));
      }
      continue;
    }

    // 언어
    if (currentSection === '언어') {
      if (line.startsWith('- ')) {
        data.languages.push(line.replace('- ', ''));
      }
      continue;
    }
  }

  // 마지막 회사/프로젝트 저장
  if (currentProject && currentCompany) {
    currentCompany.projects.push(currentProject);
  }
  if (currentCompany) {
    data.experience.push(currentCompany);
  }

  return data;
}
