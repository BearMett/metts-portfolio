import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { PortfolioItem } from './portfolio-data';

/**
 * PDF 스타일 설정을 위한 인터페이스
 */
export interface PDFStyleOptions {
  /** 폰트 크기 */
  fontSize: {
    title: number; // 제목 폰트 크기
    date: number; // 날짜 폰트 크기
    sectionTitle: number; // 섹션 제목 폰트 크기
    company: number; // 회사명 폰트 크기
    normal: number; // 일반 텍스트 폰트 크기
  };
  /** 여백 및 간격 */
  margin: {
    top: number; // 상단 여백
    left: number; // 좌측 여백
    right: number; // 우측 여백
    bottom: number; // 하단 여백
    lineSpacing: number; // 줄 간격
    paragraphSpacing: number; // 문단 간격
    sectionSpacing: number; // 섹션 간격
  };
  /** 컬러 설정 */
  colors: {
    text: string; // 텍스트 색상
    divider: string; // 구분선 색상
  };
  /** 페이지 설정 */
  page: {
    format: string; // 페이지 포맷 (예: 'a4')
    orientation: 'portrait' | 'landscape'; // 페이지 방향
    unit: 'pt' | 'px' | 'in' | 'mm' | 'cm' | 'ex' | 'em' | 'pc'; // 단위 (예: 'mm')
  };
  /** 폰트 설정 */
  font: {
    path: string; // 폰트 파일 경로
    name: string; // 폰트 이름
    style: string; // 폰트 스타일
  };
}

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

/**
 * 기본 PDF 스타일 설정
 */
const DEFAULT_PDF_STYLE: PDFStyleOptions = {
  fontSize: {
    title: 24,
    date: 10,
    sectionTitle: 16,
    company: 12,
    normal: 10,
  },
  margin: {
    top: 20,
    left: 15,
    right: 15,
    bottom: 20,
    lineSpacing: 5,
    paragraphSpacing: 8,
    sectionSpacing: 10,
  },
  colors: {
    text: '#000000',
    divider: '#c8c8c8',
  },
  page: {
    format: 'a4',
    orientation: 'portrait',
    unit: 'mm',
  },
  font: {
    path: '/fonts/NotoSansKR-VariableFont_wght.ttf',
    name: 'NotoSansKR',
    style: 'normal',
  },
};

/**
 * 포트폴리오 PDF 생성을 위한 클래스
 */
class PortfolioPDFGenerator {
  private doc: jsPDF;
  private items: PortfolioItem[];
  private labels: PDFLabels;
  private style: PDFStyleOptions;
  private maxY: number;
  private maxWidth: number;

  /**
   * 생성자
   * @param items 포트폴리오 항목 배열
   * @param labels 라벨 텍스트
   * @param styleOptions PDF 스타일 옵션 (기본값 사용 시 생략 가능)
   */
  constructor(items: PortfolioItem[], labels: PDFLabels, styleOptions?: Partial<PDFStyleOptions>) {
    this.items = items;
    this.labels = labels;
    this.style = { ...DEFAULT_PDF_STYLE };

    // 사용자 지정 스타일 설정이 있는 경우 깊은 병합
    if (styleOptions) {
      this.mergeStyleOptions(styleOptions);
    }

    // PDF 문서 생성
    this.doc = new jsPDF({
      orientation: this.style.page.orientation,
      unit: this.style.page.unit,
      format: this.style.page.format,
    });

    // 페이지 높이에서 하단 여백을 뺀 최대 Y 값 계산
    this.maxY = this.doc.internal.pageSize.height - this.style.margin.bottom;
    this.maxWidth = this.doc.internal.pageSize.width - this.style.margin.left - this.style.margin.right;
  }

  /**
   * 스타일 옵션 병합
   * @param styleOptions 부분적인 스타일 옵션
   */
  private mergeStyleOptions(styleOptions: Partial<PDFStyleOptions>) {
    // 깊은 병합을 수행하여 중첩된 속성들도 병합
    if (styleOptions.fontSize) {
      this.style.fontSize = { ...this.style.fontSize, ...styleOptions.fontSize };
    }

    if (styleOptions.margin) {
      this.style.margin = { ...this.style.margin, ...styleOptions.margin };
    }

    if (styleOptions.colors) {
      this.style.colors = { ...this.style.colors, ...styleOptions.colors };
    }

    if (styleOptions.page) {
      this.style.page = { ...this.style.page, ...styleOptions.page };
    }

    if (styleOptions.font) {
      this.style.font = { ...this.style.font, ...styleOptions.font };
    }
  }

  /**
   * 한글 폰트 설정
   */
  private async setupKoreanFont(): Promise<void> {
    try {
      // 폰트 파일 경로
      const fontPath = this.style.font.path;

      // 폰트 파일 가져오기
      const fontResponse = await fetch(fontPath);
      if (!fontResponse.ok) {
        throw new Error(`Failed to load font: ${fontResponse.statusText}`);
      }

      const fontData = await fontResponse.arrayBuffer();

      // Base64로 인코딩
      const base64Font = this.arrayBufferToBase64(fontData);

      // 폰트 ID 생성 및 등록 (일반 폰트)
      const normalFontName = `${this.style.font.name}-normal.ttf`;
      this.doc.addFileToVFS(normalFontName, base64Font);
      this.doc.addFont(normalFontName, this.style.font.name, 'normal');

      // 폰트 ID 생성 및 등록 (볼드 폰트)
      const boldFontName = `${this.style.font.name}-bold.ttf`;
      this.doc.addFileToVFS(boldFontName, base64Font);
      this.doc.addFont(boldFontName, this.style.font.name, 'bold');

      // 폰트 설정
      this.doc.setFont(this.style.font.name);

      console.log('한글 폰트 로드 완료');
    } catch (error) {
      console.error('한글 폰트 설정 실패:', error);
      // 에러 발생 시 기본 폰트 사용
      this.doc.setFont('helvetica');
    }
  }

  /**
   * 페이지 넘김 확인
   * @param currentY 현재 Y 위치
   * @param contentHeight 추가할 콘텐츠의 높이
   * @returns 페이지 넘김 필요 여부
   */
  private checkPageBreak(currentY: number, contentHeight: number): boolean {
    return currentY + contentHeight > this.maxY;
  }

  /**
   * 문서 제목 및 날짜 추가
   * @returns 다음 요소의 시작 Y 위치
   */
  private addTitleAndDate(): number {
    const startY = this.style.margin.top;

    // 제목 설정
    this.doc.setFontSize(this.style.fontSize.title);
    this.doc.setFont(this.style.font.name, 'normal');
    this.doc.text(this.labels.portfolioTitle, this.style.margin.left, startY);

    // 날짜 설정
    const currentDate = new Date().toLocaleDateString();
    this.doc.setFontSize(this.style.fontSize.date);
    this.doc.text(currentDate, this.style.margin.left, startY + this.style.margin.lineSpacing * 2);

    // 다음 요소 시작 Y 위치 반환
    return startY + this.style.margin.lineSpacing * 4;
  }

  /**
   * Y 위치를 업데이트하고 필요시 페이지를 추가
   * @param yPos 현재 Y 위치
   * @param contentHeight 추가할 콘텐츠의 높이
   * @returns 업데이트된 Y 위치
   */
  private ensureSpace(yPos: number, contentHeight: number): number {
    if (this.checkPageBreak(yPos, contentHeight)) {
      this.doc.addPage();
      return this.style.margin.top;
    }
    return yPos;
  }

  /**
   * 텍스트 줄바꿈 처리 및 렌더링
   * @param text 텍스트
   * @param yPos 현재 Y 위치
   * @param indent 들여쓰기 (기본값: 0)
   * @returns 업데이트된 Y 위치
   */
  private addWrappedText(text: string, yPos: number, indent: number = 0): number {
    const lines = this.doc.splitTextToSize(text, this.maxWidth - indent);

    yPos = this.ensureSpace(yPos, lines.length * this.style.margin.lineSpacing);
    this.doc.text(lines, this.style.margin.left + indent, yPos);

    return yPos + lines.length * this.style.margin.lineSpacing;
  }

  /**
   * 라벨과 콘텐츠 추가
   * @param label 라벨
   * @param content 콘텐츠
   * @param yPos 현재 Y 위치
   * @returns 업데이트된 Y 위치
   */
  private addLabeledContent(label: string, content: string, yPos: number): number {
    yPos = this.ensureSpace(yPos, this.style.margin.lineSpacing);
    this.doc.text(`${label}:`, this.style.margin.left, yPos);
    yPos += this.style.margin.lineSpacing;

    return this.addWrappedText(content, yPos);
  }

  /**
   * 불릿 포인트 목록 추가
   * @param label 섹션 라벨
   * @param items 목록 항목 배열
   * @param yPos 현재 Y 위치
   * @returns 업데이트된 Y 위치
   */
  private addBulletList(label: string, items: string[], yPos: number): number {
    if (!items || items.length === 0) {
      return yPos;
    }

    yPos = this.ensureSpace(yPos, this.style.margin.lineSpacing);
    this.doc.text(`${label}:`, this.style.margin.left, yPos);
    yPos += this.style.margin.lineSpacing;

    for (const item of items) {
      const bulletText = `• ${item}`;
      yPos = this.addWrappedText(bulletText, yPos, 0);
      yPos += this.style.margin.lineSpacing * 0.4;
    }

    return yPos + this.style.margin.lineSpacing * 0.6;
  }

  /**
   * 기술 스택 정보 추가
   * @param techStack 기술 스택 배열
   * @param yPos 현재 Y 위치
   * @returns 업데이트된 Y 위치
   */
  private addTechStack(techStack: string[], yPos: number): number {
    if (!techStack || techStack.length === 0) {
      return yPos;
    }

    return (
      this.addLabeledContent(this.labels.techStack, techStack.join(', '), yPos) + this.style.margin.paragraphSpacing
    );
  }

  /**
   * 프로젝트 제목 추가
   * @param title 제목
   * @param yPos 현재 Y 위치
   * @returns 업데이트된 Y 위치
   */
  private addProjectTitle(title: string, yPos: number): number {
    yPos = this.ensureSpace(yPos, this.style.margin.paragraphSpacing);

    this.doc.setFontSize(this.style.fontSize.sectionTitle);
    this.doc.setFont(this.style.font.name, 'bold');
    this.doc.text(title, this.style.margin.left, yPos);

    return yPos + this.style.margin.paragraphSpacing;
  }

  /**
   * 회사명 추가
   * @param company 회사명
   * @param yPos 현재 Y 위치
   * @returns 업데이트된 Y 위치
   */
  private addCompanyInfo(company: string, yPos: number): number {
    yPos = this.ensureSpace(yPos, this.style.margin.paragraphSpacing);

    this.doc.setFontSize(this.style.fontSize.company);
    this.doc.setFont(this.style.font.name, 'normal');
    this.doc.text(`${this.labels.company}: ${company}`, this.style.margin.left, yPos);

    return yPos + this.style.margin.paragraphSpacing;
  }

  /**
   * 카테고리 정보 추가
   * @param categories 카테고리 배열
   * @param yPos 현재 Y 위치
   * @returns 업데이트된 Y 위치
   */
  private addCategories(categories: string[], yPos: number): number {
    yPos = this.ensureSpace(yPos, this.style.margin.paragraphSpacing);

    this.doc.setFontSize(this.style.fontSize.normal);
    this.doc.text(`${this.labels.category}: ${categories.join(', ')}`, this.style.margin.left, yPos);

    return yPos + this.style.margin.paragraphSpacing;
  }

  /**
   * 프로젝트 사이 구분선 추가
   * @param isLast 마지막 항목인지 여부
   * @param yPos 현재 Y 위치
   * @returns 업데이트된 Y 위치
   */
  private addSeparator(isLast: boolean, yPos: number): number {
    if (isLast) {
      return yPos;
    }

    yPos += this.style.margin.sectionSpacing;

    if (this.checkPageBreak(yPos, this.style.margin.sectionSpacing)) {
      this.doc.addPage();
      return this.style.margin.top;
    }

    this.doc.setDrawColor(parseInt(this.style.colors.divider.substring(1, 3), 16));
    const lineY = yPos - this.style.margin.sectionSpacing / 2;
    this.doc.line(this.style.margin.left, lineY, this.doc.internal.pageSize.width - this.style.margin.right, lineY);

    return yPos + this.style.margin.sectionSpacing;
  }

  /**
   * 포트폴리오 항목 추가
   * @param startYPos 시작 Y 위치
   */
  private addPortfolioItems(startYPos: number): void {
    let yPos = startYPos;

    // 각 포트폴리오 항목에 대한 처리
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      const isLast = i === this.items.length - 1;

      // 각 항목의 콘텐츠 추가
      yPos = this.addProjectTitle(item.title, yPos);
      yPos = this.addCompanyInfo(item.company, yPos);
      yPos = this.addCategories(item.category, yPos);

      // 설명 추가
      yPos = this.addLabeledContent(this.labels.description, item.description, yPos);

      // 기술 스택 추가
      yPos = this.addTechStack(item.techStack, yPos);

      // 업무 내용 추가
      yPos = this.addBulletList(this.labels.tasks, item.tasks, yPos);

      // 성과 추가
      yPos = this.addBulletList(this.labels.achievements, item.achievements, yPos);

      // 구분선 추가
      yPos = this.addSeparator(isLast, yPos);
    }
  }

  /**
   * PDF 문서 생성
   * @returns {Promise<jsPDF>} 생성된 PDF 문서
   */
  public async generate(): Promise<jsPDF> {
    // 한글 폰트 설정
    await this.setupKoreanFont();

    // 제목과 날짜 추가
    const startYPos = this.addTitleAndDate();

    // 포트폴리오 항목 추가
    this.addPortfolioItems(startYPos);

    return this.doc;
  }

  /**
   * ArrayBuffer를 Base64 문자열로 변환
   */
  private arrayBufferToBase64(buffer: ArrayBuffer): string {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }
}

/**
 * PDF 다운로드 함수 - 기존 인터페이스 유지
 */
export const downloadPortfolioPDF = async (
  items: PortfolioItem[],
  labels: PDFLabels,
  filename: string = 'portfolio.pdf',
  styleOptions?: Partial<PDFStyleOptions>,
): Promise<void> => {
  const pdfGenerator = new PortfolioPDFGenerator(items, labels, styleOptions);
  const doc = await pdfGenerator.generate();
  doc.save(filename);
};
