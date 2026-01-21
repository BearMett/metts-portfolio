import React from 'react';
import { pdf, Document, Page, Text, View, StyleSheet, Font, DocumentProps } from '@react-pdf/renderer';
import { PortfolioItem } from './portfolio-data';

/**
 * PDF 라벨 텍스트를 위한 인터페이스
 */
export interface PDFLabels {
  title: string;
  company: string;
  description: string;
  techStack: string;
  tasks: string;
  achievements: string;
  category: string;
  date: string;
  portfolioTitle: string;
}

// 색상 시스템
const colors = {
  primary: '#1a365d',
  secondary: '#2d3748',
  accent: '#3182ce',
  text: '#1a202c',
  textLight: '#4a5568',
  border: '#e2e8f0',
  background: '#f7fafc',
  white: '#ffffff',

  // 카테고리별 색상 (웹 UI와 동일)
  categories: {
    backend: { bg: '#dbeafe', text: '#1e40af' },
    database: { bg: '#fef3c7', text: '#92400e' },
    devops: { bg: '#ede9fe', text: '#5b21b6' },
    security: { bg: '#fee2e2', text: '#991b1b' },
    parser: { bg: '#d1fae5', text: '#065f46' },
    ai: { bg: '#e0e7ff', text: '#3730a3' },
    refactoring: { bg: '#ffedd5', text: '#9a3412' },
    integration: { bg: '#ccfbf1', text: '#115e59' },
    frontend: { bg: '#fce7f3', text: '#9d174d' },
    search: { bg: '#d1fae5', text: '#065f46' },
    mobile: { bg: '#e0f2fe', text: '#075985' },
    cloud: { bg: '#f3e8ff', text: '#6b21a8' },
  } as Record<string, { bg: string; text: string }>,
};

// 카테고리 색상 가져오기 헬퍼 함수
const getCategoryColor = (category: string): { bg: string; text: string } => {
  return colors.categories[category] || { bg: colors.background, text: colors.text };
};

// 스타일 정의
const styles = StyleSheet.create({
  // 페이지 기본 설정
  page: {
    fontFamily: 'NotoSansKR',
    fontSize: 10,
    paddingTop: 40,
    paddingBottom: 40,
    paddingHorizontal: 40,
    color: colors.text,
    backgroundColor: colors.white,
  },

  // 문서 헤더
  documentHeader: {
    marginBottom: 24,
    paddingBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  documentTitle: {
    fontSize: 20,
    fontWeight: 700,
    color: colors.primary,
    marginBottom: 4,
  },
  documentDate: {
    fontSize: 9,
    color: colors.textLight,
  },

  // 프로젝트 카드
  projectCard: {
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  projectCardLast: {
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomWidth: 0,
  },

  // 프로젝트 헤더 (제목 + 회사)
  projectHeader: {
    marginBottom: 8,
  },
  projectTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 2,
  },
  projectTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: colors.primary,
    flex: 1,
    paddingRight: 10,
  },
  projectDate: {
    fontSize: 9,
    color: colors.textLight,
  },
  companyName: {
    fontSize: 11,
    color: colors.secondary,
    marginBottom: 6,
  },

  // 카테고리 배지
  categoryRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginBottom: 10,
  },
  categoryBadge: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 10,
    fontSize: 8,
  },

  // 섹션 (설명, 기술 스택, 업무, 성과)
  section: {
    marginBottom: 10,
  },
  sectionLabel: {
    fontSize: 10,
    fontWeight: 700,
    color: colors.secondary,
    marginBottom: 4,
  },
  description: {
    fontSize: 9,
    lineHeight: 1.5,
    color: colors.text,
    textAlign: 'justify',
  },

  // 기술 스택 태그
  techStackRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  techTag: {
    backgroundColor: colors.primary,
    color: colors.white,
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 3,
    fontSize: 8,
  },

  // 2단 레이아웃 (업무 + 성과)
  twoColumnSection: {
    flexDirection: 'row',
    marginTop: 8,
  },
  column: {
    flex: 1,
    paddingRight: 8,
  },
  columnLast: {
    flex: 1,
    paddingRight: 0,
  },

  // 불릿 리스트
  bulletList: {
    marginTop: 4,
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  bullet: {
    width: 10,
    fontSize: 8,
    color: colors.accent,
  },
  bulletText: {
    flex: 1,
    fontSize: 8,
    lineHeight: 1.4,
    color: colors.textLight,
  },

  // 페이지 번호
  pageNumber: {
    position: 'absolute',
    fontSize: 9,
    bottom: 20,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: colors.textLight,
  },
});

// 폰트 등록 여부 추적
let fontRegistered = false;

// 폰트 등록 함수
const registerFont = () => {
  if (fontRegistered) return;

  Font.register({
    family: 'NotoSansKR',
    fonts: [
      {
        src: '/fonts/NotoSansKR-VariableFont_wght.ttf',
        fontWeight: 400,
      },
      {
        src: '/fonts/NotoSansKR-VariableFont_wght.ttf',
        fontWeight: 700,
      },
    ],
  });

  fontRegistered = true;
};

// 카테고리 배지 컴포넌트
function CategoryBadge({ category }: { category: string }) {
  const color = getCategoryColor(category);

  return React.createElement(
    Text,
    {
      style: [
        styles.categoryBadge,
        {
          backgroundColor: color.bg,
          color: color.text,
        },
      ],
    },
    category,
  );
}

// 기술 스택 태그 컴포넌트
function TechTag({ name }: { name: string }) {
  return React.createElement(Text, { style: styles.techTag }, name);
}

// 불릿 리스트 컴포넌트
function BulletList({ items }: { items: string[] }) {
  if (!items || items.length === 0) return null;

  return React.createElement(
    View,
    { style: styles.bulletList },
    items.map((item, index) =>
      React.createElement(
        View,
        { key: index, style: styles.bulletItem },
        React.createElement(Text, { style: styles.bullet }, '-'),
        React.createElement(Text, { style: styles.bulletText }, item),
      ),
    ),
  );
}

// 프로젝트 카드 컴포넌트
function ProjectCard({ item, labels, isLast }: { item: PortfolioItem; labels: PDFLabels; isLast: boolean }) {
  return React.createElement(
    View,
    { style: isLast ? styles.projectCardLast : styles.projectCard, wrap: false },
    // 헤더: 제목 + 날짜 + 회사
    React.createElement(
      View,
      { style: styles.projectHeader },
      React.createElement(
        View,
        { style: styles.projectTitleRow },
        React.createElement(Text, { style: styles.projectTitle }, item.title),
        React.createElement(Text, { style: styles.projectDate }, item.date),
      ),
      React.createElement(Text, { style: styles.companyName }, item.company),
    ),
    // 카테고리 배지
    React.createElement(
      View,
      { style: styles.categoryRow },
      item.category.map((cat) => React.createElement(CategoryBadge, { key: cat, category: cat })),
    ),
    // 설명
    React.createElement(
      View,
      { style: styles.section },
      React.createElement(Text, { style: styles.sectionLabel }, labels.description),
      React.createElement(Text, { style: styles.description }, item.description),
    ),
    // 기술 스택
    item.techStack &&
      item.techStack.length > 0 &&
      React.createElement(
        View,
        { style: styles.section },
        React.createElement(Text, { style: styles.sectionLabel }, labels.techStack),
        React.createElement(
          View,
          { style: styles.techStackRow },
          item.techStack.map((tech) => React.createElement(TechTag, { key: tech, name: tech })),
        ),
      ),
    // 2단 레이아웃: 업무 + 성과
    React.createElement(
      View,
      { style: styles.twoColumnSection },
      // 업무 내용
      React.createElement(
        View,
        { style: styles.column },
        React.createElement(Text, { style: styles.sectionLabel }, labels.tasks),
        React.createElement(BulletList, { items: item.tasks }),
      ),
      // 성과
      React.createElement(
        View,
        { style: styles.columnLast },
        React.createElement(Text, { style: styles.sectionLabel }, labels.achievements),
        React.createElement(BulletList, { items: item.achievements }),
      ),
    ),
  );
}

// 메인 PDF 문서 컴포넌트
function PortfolioPDFDocument({ items, labels }: { items: PortfolioItem[]; labels: PDFLabels }) {
  const currentDate = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return React.createElement(
    Document,
    null,
    React.createElement(
      Page,
      { size: 'A4', style: styles.page },
      // 문서 헤더
      React.createElement(
        View,
        { style: styles.documentHeader },
        React.createElement(Text, { style: styles.documentTitle }, labels.portfolioTitle),
        React.createElement(Text, { style: styles.documentDate }, currentDate),
      ),
      // 포트폴리오 항목들
      items.map((item, index) =>
        React.createElement(ProjectCard, {
          key: item.id,
          item: item,
          labels: labels,
          isLast: index === items.length - 1,
        }),
      ),
      // 페이지 번호
      React.createElement(
        Text,
        {
          style: styles.pageNumber,
          render: ({ pageNumber, totalPages }: { pageNumber: number; totalPages: number }) =>
            `${pageNumber} / ${totalPages}`,
          fixed: true,
        },
        null,
      ),
    ),
  );
}

/**
 * PDF 다운로드 함수
 */
export const downloadPortfolioPDF = async (
  items: PortfolioItem[],
  labels: PDFLabels,
  filename: string = 'portfolio.pdf',
): Promise<void> => {
  // 폰트 등록
  registerFont();

  // PDF 문서 생성
  const doc = React.createElement(PortfolioPDFDocument, { items, labels }) as React.ReactElement<DocumentProps>;

  // Blob으로 변환
  const blob = await pdf(doc).toBlob();

  // 다운로드 트리거
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
