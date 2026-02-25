import React from 'react';
import { Document, Page, View, Text } from '@react-pdf/renderer';
import { styles } from './styles';
import type { ResumeData, Project } from '../../lib/resume-parser';

interface ResumePDFProps {
  data: ResumeData;
}

// Header Component
function Header({ data }: { data: ResumeData }) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerName}>{data.name}</Text>
      <Text style={styles.headerTitle}>{data.title}</Text>
      <View style={styles.headerContact}>
        <Text style={styles.headerContactItem}>GitHub: {data.contact.github}</Text>
        <Text style={styles.headerContactItem}>Email: {data.contact.email}</Text>
      </View>
    </View>
  );
}

// Section Component
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

// Introduction Component
function Introduction({ text }: { text: string }) {
  return (
    <Section title="자기소개">
      <Text style={styles.introduction}>{text}</Text>
    </Section>
  );
}

// Strengths Component
function Strengths({ strengths }: { strengths: ResumeData['strengths'] }) {
  return (
    <Section title="강점">
      <View style={styles.strengthsContainer}>
        {strengths.map((item, index) => (
          <View key={index} style={styles.strengthItem}>
            <Text style={styles.strengthTitle}>{item.title}</Text>
            <Text style={styles.strengthDesc}>{item.description}</Text>
          </View>
        ))}
      </View>
    </Section>
  );
}

// Skills Component
function Skills({ skills }: { skills: ResumeData['skills'] }) {
  return (
    <Section title="기술 스택">
      <View style={styles.skillsCore}>
        {skills.core.map((skill, index) => (
          <Text key={index} style={styles.skillTag}>
            {skill}
          </Text>
        ))}
      </View>
      {skills.areas.map((area, index) => (
        <View key={index} style={styles.skillArea}>
          <Text style={styles.skillAreaCategory}>{area.category}</Text>
          <Text style={styles.skillAreaItems}>{area.items}</Text>
        </View>
      ))}
    </Section>
  );
}

// Project Bullet List Helper
function ProjectBulletList({ items }: { items: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <View style={styles.projectBulletList}>
      {items.map((item, index) => (
        <View key={index} style={styles.projectBulletItem}>
          <Text style={styles.projectBulletText}>- {item}</Text>
        </View>
      ))}
    </View>
  );
}

// Project Subsection (label + content)
function ProjectSubsection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <View>
      <Text style={styles.projectSubsectionLabel}>{label}</Text>
      {children}
    </View>
  );
}

// Project Card with 4-section narrative
function ProjectCard({ project }: { project: Project }) {
  return (
    <View style={styles.project}>
      <Text style={styles.projectTitle}>{project.title}</Text>

      {project.background && (
        <ProjectSubsection label="문제 및 배경">
          <Text style={styles.projectBackground}>{project.background}</Text>
        </ProjectSubsection>
      )}

      {project.process.length > 0 && (
        <ProjectSubsection label="역할 및 해결 과정">
          <ProjectBulletList items={project.process} />
        </ProjectSubsection>
      )}

      {project.impact.length > 0 && (
        <ProjectSubsection label="성과 및 영향">
          <ProjectBulletList items={project.impact} />
        </ProjectSubsection>
      )}

      {project.decisions.length > 0 && (
        <ProjectSubsection label="기술적 의사결정">
          <ProjectBulletList items={project.decisions} />
        </ProjectSubsection>
      )}

      {project.tech && <Text style={styles.projectTechLine}>{project.tech}</Text>}
    </View>
  );
}

// Experience Component
function Experience({
  experience,
  totalExperience,
}: {
  experience: ResumeData['experience'];
  totalExperience: string;
}) {
  const sectionTitle = totalExperience ? `경력 (${totalExperience})` : '경력';
  return (
    <Section title={sectionTitle}>
      {experience.map((company, companyIndex) => (
        <View key={companyIndex} style={styles.company}>
          <View style={styles.companyHeader}>
            <View>
              <Text style={styles.companyName}>{company.name}</Text>
              <Text style={styles.companyPosition}>{company.position}</Text>
            </View>
            <Text style={styles.companyPeriod}>{company.period}</Text>
          </View>
          {company.projects.map((project, projectIndex) => (
            <ProjectCard key={projectIndex} project={project} />
          ))}
        </View>
      ))}
    </Section>
  );
}

// Footer Component (Education, Certifications, Awards, Languages)
function Footer({ data }: { data: ResumeData }) {
  return (
    <View>
      {/* 학력 */}
      <View style={styles.footerSection}>
        <Text style={styles.sectionTitle}>학력</Text>
        {data.education.map((item, index) => (
          <Text key={index} style={styles.footerItem}>
            {item}
          </Text>
        ))}
      </View>

      {/* 자격증 */}
      {data.certifications.length > 0 && (
        <View style={styles.footerSection}>
          <Text style={styles.sectionTitle}>자격증</Text>
          {data.certifications.map((item, index) => (
            <Text key={index} style={styles.footerItem}>
              • {item}
            </Text>
          ))}
        </View>
      )}

      {/* 수상 기록 */}
      {data.awards.length > 0 && (
        <View style={styles.footerSection}>
          <Text style={styles.sectionTitle}>수상 기록</Text>
          {data.awards.map((item, index) => (
            <Text key={index} style={styles.footerItem}>
              • {item}
            </Text>
          ))}
        </View>
      )}

      {/* 언어 */}
      {data.languages.length > 0 && (
        <View style={styles.footerSection}>
          <Text style={styles.sectionTitle}>언어</Text>
          {data.languages.map((item, index) => (
            <Text key={index} style={styles.footerItem}>
              • {item}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}

// Main PDF Document
export function ResumePDF({ data }: ResumePDFProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Header data={data} />
        <Introduction text={data.introduction} />
        <Strengths strengths={data.strengths} />
        <Skills skills={data.skills} />
        <Experience experience={data.experience} totalExperience={data.totalExperience} />
        <Footer data={data} />
      </Page>
    </Document>
  );
}
