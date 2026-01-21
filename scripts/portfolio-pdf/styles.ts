import { StyleSheet, Font } from '@react-pdf/renderer';
import path from 'path';

// 폰트 등록 - @fontsource/noto-sans-kr의 WOFF 파일 사용
const fontsPath = path.join(process.cwd(), 'node_modules/@fontsource/noto-sans-kr/files');

Font.register({
  family: 'NotoSansKR',
  fonts: [
    {
      src: path.join(fontsPath, 'noto-sans-kr-korean-400-normal.woff'),
      fontWeight: 400,
    },
    {
      src: path.join(fontsPath, 'noto-sans-kr-korean-700-normal.woff'),
      fontWeight: 700,
    },
  ],
});

// 색상 시스템
export const colors = {
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
export const getCategoryColor = (category: string): { bg: string; text: string } => {
  return colors.categories[category] || { bg: colors.background, text: colors.text };
};

export const styles = StyleSheet.create({
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
