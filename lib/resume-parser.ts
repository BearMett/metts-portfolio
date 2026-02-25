import fs from 'fs';
import path from 'path';

export interface Project {
  title: string;
  background: string;
  process: string[];
  impact: string[];
  decisions: string[];
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
  totalExperience: string;
  experience: Company[];
  education: string[];
  awards: string[];
  certifications: string[];
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
    totalExperience: '',
    experience: [],
    education: [],
    awards: [],
    certifications: [],
    languages: [],
  };

  let currentSection = '';
  let currentCompany: Company | null = null;
  let currentProject: Project | null = null;
  let currentProjectSection: 'background' | 'process' | 'impact' | 'decisions' | 'tech' | '' = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // 헤더 파싱 (이름)
    if (line.startsWith('# ') && !line.startsWith('## ')) {
      data.name = line.replace('# ', '').trim();
      continue;
    }

    // 타이틀 (이름 이후, 첫 섹션 마커 전까지의 텍스트)
    if (data.name && !data.title && !line.startsWith('**') && !line.startsWith('##') && !line.startsWith('---') && line) {
      data.title = line;
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
    if (line.startsWith('## **')) {
      // 이전 회사/프로젝트 저장
      if (currentProject && currentCompany) {
        currentCompany.projects.push(currentProject);
        currentProject = null;
      }
      if (currentCompany) {
        data.experience.push(currentCompany);
        currentCompany = null;
      }
      currentProjectSection = '';

      // 경력 (총 N년) 패턴 파싱
      const experienceMatch = line.match(/## \*\*경력\s*\(([^)]+)\)\*\*/);
      if (experienceMatch) {
        currentSection = '경력';
        data.totalExperience = experienceMatch[1].trim();
        continue;
      }

      currentSection = line.replace(/## \*\*|\*\*/g, '').trim();
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
    if (currentSection === '핵심 기술' && line && !line.startsWith('---')) {
      const match = line.match(/^-?\s*\*{0,2}([^*:]+)\*{0,2}:\s*(.+)/);
      if (match) {
        const category = match[1].trim();
        const items = match[2].split(',').map((s) => s.trim());
        if (data.skills.core.length === 0) {
          data.skills.core = items;
        }
        data.skills.areas.push({ category, items: match[2].trim() });
      }
      continue;
    }

    // 경력 섹션
    if (currentSection === '경력') {
      // 구분선 스킵
      if (line === '---') {
        continue;
      }

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
        currentProjectSection = '';

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
          background: '',
          process: [],
          impact: [],
          decisions: [],
          tech: '',
        };
        currentProjectSection = '';
        continue;
      }

      // 프로젝트 서브섹션 헤더 감지
      if (currentProject) {
        if (line === '[문제 및 배경]') {
          currentProjectSection = 'background';
          continue;
        }
        if (line === '[역할 및 해결 과정]') {
          currentProjectSection = 'process';
          continue;
        }
        if (line === '[성과 및 영향]') {
          currentProjectSection = 'impact';
          continue;
        }
        if (line === '[기술적 의사결정]') {
          currentProjectSection = 'decisions';
          continue;
        }
        if (line === '[스택]') {
          currentProjectSection = 'tech';
          continue;
        }

        // 서브섹션 내용 파싱
        if (currentProjectSection === 'background' && line) {
          currentProject.background = currentProject.background
            ? currentProject.background + ' ' + line
            : line;
        } else if (currentProjectSection === 'process' && line.startsWith('- ')) {
          currentProject.process.push(line.replace(/^- /, ''));
        } else if (currentProjectSection === 'impact' && line.startsWith('- ')) {
          currentProject.impact.push(line.replace(/^- /, ''));
        } else if (currentProjectSection === 'decisions' && line.startsWith('- ')) {
          currentProject.decisions.push(line.replace(/^- /, ''));
        } else if (currentProjectSection === 'tech' && line) {
          currentProject.tech = line;
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

    // 자격증
    if (currentSection === '자격증') {
      if (line.startsWith('- ')) {
        data.certifications.push(line.replace('- ', ''));
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
