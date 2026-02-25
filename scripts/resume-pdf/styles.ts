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

export const colors = {
  primary: '#1a365d',
  secondary: '#2d3748',
  accent: '#3182ce',
  text: '#1a202c',
  textLight: '#4a5568',
  border: '#e2e8f0',
  background: '#f7fafc',
  white: '#ffffff',
};

export const styles = StyleSheet.create({
  page: {
    fontFamily: 'NotoSansKR',
    fontSize: 10,
    paddingTop: 40,
    paddingBottom: 40,
    paddingHorizontal: 40,
    color: colors.text,
  },

  // Header
  header: {
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  headerName: {
    fontSize: 24,
    fontWeight: 700,
    color: colors.primary,
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 12,
    color: colors.textLight,
    marginBottom: 8,
  },
  headerContact: {
    flexDirection: 'row',
    gap: 15,
  },
  headerContactItem: {
    fontSize: 9,
    color: colors.secondary,
  },

  // Section
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 700,
    color: colors.primary,
    marginBottom: 8,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  // Introduction
  introduction: {
    fontSize: 10,
    lineHeight: 1.6,
    color: colors.secondary,
    textAlign: 'justify',
  },

  // Strengths
  strengthsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  strengthItem: {
    width: '50%',
    paddingRight: 10,
    marginBottom: 6,
  },
  strengthTitle: {
    fontSize: 9,
    fontWeight: 700,
    color: colors.secondary,
  },
  strengthDesc: {
    fontSize: 8,
    color: colors.textLight,
    lineHeight: 1.4,
  },

  // Skills
  skillsCore: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 10,
  },
  skillTag: {
    backgroundColor: colors.primary,
    color: colors.white,
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 3,
    fontSize: 8,
  },
  skillArea: {
    marginBottom: 4,
  },
  skillAreaCategory: {
    fontSize: 9,
    fontWeight: 700,
    color: colors.secondary,
  },
  skillAreaItems: {
    fontSize: 8,
    color: colors.textLight,
    marginLeft: 10,
  },

  // Experience
  company: {
    marginBottom: 12,
  },
  companyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  companyName: {
    fontSize: 11,
    fontWeight: 700,
    color: colors.secondary,
  },
  companyPosition: {
    fontSize: 9,
    color: colors.textLight,
  },
  companyPeriod: {
    fontSize: 9,
    color: colors.textLight,
  },
  project: {
    marginBottom: 10,
    paddingLeft: 10,
  },
  projectTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: colors.text,
    marginBottom: 3,
  },
  projectSubsectionLabel: {
    fontSize: 8,
    fontWeight: 700,
    color: colors.accent,
    marginBottom: 2,
    marginTop: 3,
  },
  projectBackground: {
    fontSize: 8,
    lineHeight: 1.5,
    color: colors.textLight,
    textAlign: 'justify',
  },
  projectBulletList: {
    marginLeft: 4,
  },
  projectBulletItem: {
    flexDirection: 'row',
    marginBottom: 1,
  },
  projectBulletText: {
    fontSize: 8,
    color: colors.textLight,
    lineHeight: 1.4,
    flex: 1,
  },
  projectTechLine: {
    fontSize: 8,
    color: colors.secondary,
    marginTop: 2,
  },

  // Footer sections
  footerSection: {
    marginBottom: 10,
  },
  footerItem: {
    fontSize: 9,
    color: colors.secondary,
    marginBottom: 2,
  },
  footerItemBullet: {
    fontSize: 8,
    color: colors.textLight,
    paddingLeft: 10,
  },
});
