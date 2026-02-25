import { describe, it, expect } from 'vitest';
import { PAGE_ORDER, getNextPage, getPageLabel } from '../page-order';

describe('PAGE_ORDER', () => {
  it('has 4 pages in correct order', () => {
    expect(PAGE_ORDER).toEqual(['/', '/resume', '/portfolio', '/contact']);
  });
});

describe('getNextPage', () => {
  it('returns /resume for /', () => {
    expect(getNextPage('/')).toBe('/resume');
  });

  it('returns /portfolio for /resume', () => {
    expect(getNextPage('/resume')).toBe('/portfolio');
  });

  it('returns /contact for /portfolio', () => {
    expect(getNextPage('/portfolio')).toBe('/contact');
  });

  it('returns null for /contact (last page)', () => {
    expect(getNextPage('/contact')).toBeNull();
  });

  it('returns null for unknown paths', () => {
    expect(getNextPage('/blog')).toBeNull();
    expect(getNextPage('/unknown')).toBeNull();
  });
});

describe('getPageLabel', () => {
  it('returns correct resource key for each page', () => {
    expect(getPageLabel('/')).toBe('navigation.home');
    expect(getPageLabel('/resume')).toBe('navigation.resume');
    expect(getPageLabel('/portfolio')).toBe('navigation.portfolio');
    expect(getPageLabel('/contact')).toBe('navigation.contact');
  });
});
