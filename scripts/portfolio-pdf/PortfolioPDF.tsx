import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles, getCategoryColor } from './styles';

// PortfolioItem 타입 정의 (lib/data/types.ts와 동일)
export interface PortfolioItem {
  id: string;
  date: string;
  title: string;
  company: string;
  shortDesc: string;
  description: string;
  techStack: string[];
  category: string[];
  tasks: string[];
  achievements: string[];
  sourceUrl?: string;
  images?: { src: string; alt: string }[];
}

// PDF 라벨 타입
export interface PDFLabels {
  portfolioTitle: string;
  title: string;
  company: string;
  description: string;
  techStack: string;
  tasks: string;
  achievements: string;
  category: string;
  date: string;
}

interface PortfolioPDFProps {
  items: PortfolioItem[];
  labels: PDFLabels;
}

// 카테고리 배지 컴포넌트
function CategoryBadge({ category }: { category: string }) {
  const color = getCategoryColor(category);

  return (
    <Text
      style={[
        styles.categoryBadge,
        {
          backgroundColor: color.bg,
          color: color.text,
        },
      ]}
    >
      {category}
    </Text>
  );
}

// 기술 스택 태그 컴포넌트
function TechTag({ name }: { name: string }) {
  return <Text style={styles.techTag}>{name}</Text>;
}

// 불릿 리스트 컴포넌트
function BulletList({ items }: { items: string[] }) {
  if (!items || items.length === 0) return null;

  return (
    <View style={styles.bulletList}>
      {items.map((item, index) => (
        <View key={index} style={styles.bulletItem}>
          <Text style={styles.bullet}>-</Text>
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

// 프로젝트 카드 컴포넌트
function ProjectCard({ item, labels, isLast }: { item: PortfolioItem; labels: PDFLabels; isLast: boolean }) {
  return (
    <View style={isLast ? styles.projectCardLast : styles.projectCard} wrap={false}>
      {/* 헤더: 제목 + 날짜 + 회사 */}
      <View style={styles.projectHeader}>
        <View style={styles.projectTitleRow}>
          <Text style={styles.projectTitle}>{item.title}</Text>
          <Text style={styles.projectDate}>{item.date}</Text>
        </View>
        <Text style={styles.companyName}>{item.company}</Text>
      </View>

      {/* 카테고리 배지 */}
      <View style={styles.categoryRow}>
        {item.category.map((cat) => (
          <CategoryBadge key={cat} category={cat} />
        ))}
      </View>

      {/* 설명 */}
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>{labels.description}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>

      {/* 기술 스택 */}
      {item.techStack && item.techStack.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>{labels.techStack}</Text>
          <View style={styles.techStackRow}>
            {item.techStack.map((tech) => (
              <TechTag key={tech} name={tech} />
            ))}
          </View>
        </View>
      )}

      {/* 2단 레이아웃: 업무 + 성과 */}
      <View style={styles.twoColumnSection}>
        {/* 업무 내용 */}
        <View style={styles.column}>
          <Text style={styles.sectionLabel}>{labels.tasks}</Text>
          <BulletList items={item.tasks} />
        </View>

        {/* 성과 */}
        <View style={styles.columnLast}>
          <Text style={styles.sectionLabel}>{labels.achievements}</Text>
          <BulletList items={item.achievements} />
        </View>
      </View>
    </View>
  );
}

// 메인 PDF 문서 컴포넌트
export function PortfolioPDF({ items, labels }: PortfolioPDFProps) {
  const currentDate = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* 문서 헤더 */}
        <View style={styles.documentHeader}>
          <Text style={styles.documentTitle}>{labels.portfolioTitle}</Text>
          <Text style={styles.documentDate}>{currentDate}</Text>
        </View>

        {/* 포트폴리오 항목들 */}
        {items.map((item, index) => (
          <ProjectCard key={item.id} item={item} labels={labels} isLast={index === items.length - 1} />
        ))}

        {/* 페이지 번호 */}
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
          fixed
        />
      </Page>
    </Document>
  );
}
