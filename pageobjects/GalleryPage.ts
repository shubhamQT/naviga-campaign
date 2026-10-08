import type { Page } from "@playwright/test";
import {
  checkWhenVisible,
  clearWhenVisible,
  clickOpensNewPage,
  clickWhenVisible,
  closePage,
  doubleClickWhenVisible,
  expectChecked,
  expectContainsText,
  expectCount,
  expectCountGreaterThan,
  expectDisabled,
  expectEnabled,
  expectFocused,
  expectHidden,
  expectPageTitle,
  expectSelected,
  expectText,
  expectUnchecked,
  expectValue,
  expectVisible,
  fill,
  fillWhenVisible,
  getTextWhenVisible,
  goBack,
  hoverWhenVisible,
  longPressWhenVisible,
  navigateTo,
  scrollIntoView,
  scrollIntoViewWhenVisible,
  selectOptionWhenVisible,
  takeScreenshot,
  typeTextWhenVisible,
  uncheckWhenVisible,
  waitForHidden,
  waitForNewPage,
  waitForVisible,
  waitMs,
  webLocator,
} from "../support/web-actions";

export class GalleryPage {
  private static readonly L = {
    mediaGallery: { strategy: 'role' as const, value: 'Media Gallery', role: 'heading', level: 3, actionKind: 'text' as const },
    uploadFiles: { strategy: 'role' as const, value: 'Upload Files', role: 'button', actionKind: 'button' as const },
    gridView: { strategy: 'role' as const, value: 'Grid view', role: 'button', actionKind: 'button' as const },
    listView: { strategy: 'role' as const, value: 'List view', role: 'button', actionKind: 'button' as const },
    search: { strategy: 'css' as const, value: '#gallery-search-field[name="search"]', role: 'textbox', actionKind: 'textbox' as const },
    allFiles: { strategy: 'role' as const, value: 'All Files', role: 'button', actionKind: 'button' as const },
    images: { strategy: 'role' as const, value: 'Images', role: 'button', actionKind: 'button' as const },
    pDFs: { strategy: 'role' as const, value: 'PDFs', role: 'button', actionKind: 'button' as const },
    x2502Jpg: { strategy: 'altText' as const, value: '300x250-2.jpg', role: 'img', actionKind: 'generic' as const },
    x250Gif: { strategy: 'altText' as const, value: '970X250.gif', role: 'img', actionKind: 'generic' as const },
    x300Jpg: { strategy: 'altText' as const, value: '300x300.jpg', role: 'img', actionKind: 'generic' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextMediaGallery(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, GalleryPage.L.mediaGallery));
  }

  async expectMediaGalleryVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, GalleryPage.L.mediaGallery), timeoutMs, soft);
  }

  async clickUploadFiles(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, GalleryPage.L.uploadFiles));
  }

  async doubleClickUploadFiles(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, GalleryPage.L.uploadFiles));
  }

  async expectUploadFilesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, GalleryPage.L.uploadFiles), timeoutMs, soft);
  }

  async clickGridView(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, GalleryPage.L.gridView));
  }

  async doubleClickGridView(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, GalleryPage.L.gridView));
  }

  async expectGridViewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, GalleryPage.L.gridView), timeoutMs, soft);
  }

  async clickListView(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, GalleryPage.L.listView));
  }

  async doubleClickListView(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, GalleryPage.L.listView));
  }

  async expectListViewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, GalleryPage.L.listView), timeoutMs, soft);
  }

  async fillSearch(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, GalleryPage.L.search), value);
  }

  async clearSearch(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, GalleryPage.L.search));
  }

  async getSearchValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, GalleryPage.L.search));
  }

  async expectSearchVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, GalleryPage.L.search), timeoutMs, soft);
  }

  async clickAllFiles(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, GalleryPage.L.allFiles));
  }

  async doubleClickAllFiles(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, GalleryPage.L.allFiles));
  }

  async expectAllFilesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, GalleryPage.L.allFiles), timeoutMs, soft);
  }

  async clickImages(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, GalleryPage.L.images));
  }

  async doubleClickImages(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, GalleryPage.L.images));
  }

  async expectImagesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, GalleryPage.L.images), timeoutMs, soft);
  }

  async clickPDFs(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, GalleryPage.L.pDFs));
  }

  async doubleClickPDFs(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, GalleryPage.L.pDFs));
  }

  async expectPDFsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, GalleryPage.L.pDFs), timeoutMs, soft);
  }

  /** "300x250-2.jpg" matches 5 elements with the exact same locator (e.g. a repeated list/feed item) — pass index (0-based) to pick a specific occurrence; omit it to use whichever match is currently visible (click helpers pick the in-viewport one, assertions check the first). No distinguishing context was found between occurrences — check the page manually to know which is which. */
  async clickX2502Jpg(index?: number): Promise<void> {
    await clickWhenVisible(webLocator(this.page, { ...GalleryPage.L.x2502Jpg, index }), undefined, index !== undefined);
  }

  async expectX2502JpgVisible(timeoutMs = 30_000, soft = true, index?: number): Promise<void> {
    await expectVisible(webLocator(this.page, { ...GalleryPage.L.x2502Jpg, index }), timeoutMs, soft, index !== undefined);
  }

  async clickX250Gif(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, GalleryPage.L.x250Gif));
  }

  async expectX250GifVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, GalleryPage.L.x250Gif), timeoutMs, soft);
  }

  /** "300x300.jpg" matches 4 elements with the exact same locator (e.g. a repeated list/feed item) — pass index (0-based) to pick a specific occurrence; omit it to use whichever match is currently visible (click helpers pick the in-viewport one, assertions check the first). No distinguishing context was found between occurrences — check the page manually to know which is which. */
  async clickX300Jpg(index?: number): Promise<void> {
    await clickWhenVisible(webLocator(this.page, { ...GalleryPage.L.x300Jpg, index }), undefined, index !== undefined);
  }

  async expectX300JpgVisible(timeoutMs = 30_000, soft = true, index?: number): Promise<void> {
    await expectVisible(webLocator(this.page, { ...GalleryPage.L.x300Jpg, index }), timeoutMs, soft, index !== undefined);
  }


  async clickMediaGallery(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, GalleryPage.L.mediaGallery));
  }

  async doubleClickMediaGallery(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, GalleryPage.L.mediaGallery));
  }

  async longPressMediaGallery(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, GalleryPage.L.mediaGallery));
  }

  async expectMediaGalleryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, GalleryPage.L.mediaGallery), timeoutMs);
  }

  async expectMediaGalleryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, GalleryPage.L.mediaGallery), expected, timeoutMs);
  }

  async expectMediaGalleryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, GalleryPage.L.mediaGallery), substring, timeoutMs);
  }

  async expectMediaGalleryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, GalleryPage.L.mediaGallery), value, timeoutMs);
  }

  async expectMediaGalleryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, GalleryPage.L.mediaGallery), timeoutMs);
  }

  async expectMediaGalleryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, GalleryPage.L.mediaGallery), timeoutMs);
  }

  async expectMediaGalleryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, GalleryPage.L.mediaGallery), timeoutMs);
  }

  async expectMediaGalleryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, GalleryPage.L.mediaGallery), timeoutMs);
  }

  async expectMediaGalleryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, GalleryPage.L.mediaGallery), timeoutMs);
  }

  async expectMediaGalleryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, GalleryPage.L.mediaGallery), count, timeoutMs);
  }

  async scrollMediaGalleryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, GalleryPage.L.mediaGallery));
  }

  async longPressUploadFiles(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, GalleryPage.L.uploadFiles));
  }

  async expectUploadFilesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, GalleryPage.L.uploadFiles), timeoutMs);
  }

  async expectUploadFilesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, GalleryPage.L.uploadFiles), expected, timeoutMs);
  }

  async expectUploadFilesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, GalleryPage.L.uploadFiles), substring, timeoutMs);
  }

  async expectUploadFilesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, GalleryPage.L.uploadFiles), value, timeoutMs);
  }

  async expectUploadFilesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, GalleryPage.L.uploadFiles), timeoutMs);
  }

  async expectUploadFilesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, GalleryPage.L.uploadFiles), timeoutMs);
  }

  async expectUploadFilesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, GalleryPage.L.uploadFiles), timeoutMs);
  }

  async expectUploadFilesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, GalleryPage.L.uploadFiles), timeoutMs);
  }

  async expectUploadFilesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, GalleryPage.L.uploadFiles), timeoutMs);
  }

  async expectUploadFilesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, GalleryPage.L.uploadFiles), count, timeoutMs);
  }

  async scrollUploadFilesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, GalleryPage.L.uploadFiles));
  }

  async longPressGridView(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, GalleryPage.L.gridView));
  }

  async expectGridViewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, GalleryPage.L.gridView), timeoutMs);
  }

  async expectGridViewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, GalleryPage.L.gridView), expected, timeoutMs);
  }

  async expectGridViewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, GalleryPage.L.gridView), substring, timeoutMs);
  }

  async expectGridViewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, GalleryPage.L.gridView), value, timeoutMs);
  }

  async expectGridViewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, GalleryPage.L.gridView), timeoutMs);
  }

  async expectGridViewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, GalleryPage.L.gridView), timeoutMs);
  }

  async expectGridViewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, GalleryPage.L.gridView), timeoutMs);
  }

  async expectGridViewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, GalleryPage.L.gridView), timeoutMs);
  }

  async expectGridViewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, GalleryPage.L.gridView), timeoutMs);
  }

  async expectGridViewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, GalleryPage.L.gridView), count, timeoutMs);
  }

  async scrollGridViewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, GalleryPage.L.gridView));
  }

  async longPressListView(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, GalleryPage.L.listView));
  }

  async expectListViewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, GalleryPage.L.listView), timeoutMs);
  }

  async expectListViewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, GalleryPage.L.listView), expected, timeoutMs);
  }

  async expectListViewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, GalleryPage.L.listView), substring, timeoutMs);
  }

  async expectListViewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, GalleryPage.L.listView), value, timeoutMs);
  }

  async expectListViewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, GalleryPage.L.listView), timeoutMs);
  }

  async expectListViewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, GalleryPage.L.listView), timeoutMs);
  }

  async expectListViewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, GalleryPage.L.listView), timeoutMs);
  }

  async expectListViewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, GalleryPage.L.listView), timeoutMs);
  }

  async expectListViewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, GalleryPage.L.listView), timeoutMs);
  }

  async expectListViewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, GalleryPage.L.listView), count, timeoutMs);
  }

  async scrollListViewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, GalleryPage.L.listView));
  }

  async typeTextSearch(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, GalleryPage.L.search), value);
  }

  async expectSearchHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, GalleryPage.L.search), timeoutMs);
  }

  async expectSearchText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, GalleryPage.L.search), expected, timeoutMs);
  }

  async expectSearchContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, GalleryPage.L.search), substring, timeoutMs);
  }

  async expectSearchValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, GalleryPage.L.search), value, timeoutMs);
  }

  async expectSearchEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, GalleryPage.L.search), timeoutMs);
  }

  async expectSearchDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, GalleryPage.L.search), timeoutMs);
  }

  async expectSearchChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, GalleryPage.L.search), timeoutMs);
  }

  async expectSearchUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, GalleryPage.L.search), timeoutMs);
  }

  async expectSearchFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, GalleryPage.L.search), timeoutMs);
  }

  async expectSearchCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, GalleryPage.L.search), count, timeoutMs);
  }

  async scrollSearchIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, GalleryPage.L.search));
  }

  async longPressAllFiles(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, GalleryPage.L.allFiles));
  }

  async expectAllFilesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, GalleryPage.L.allFiles), timeoutMs);
  }

  async expectAllFilesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, GalleryPage.L.allFiles), expected, timeoutMs);
  }

  async expectAllFilesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, GalleryPage.L.allFiles), substring, timeoutMs);
  }

  async expectAllFilesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, GalleryPage.L.allFiles), value, timeoutMs);
  }

  async expectAllFilesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, GalleryPage.L.allFiles), timeoutMs);
  }

  async expectAllFilesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, GalleryPage.L.allFiles), timeoutMs);
  }

  async expectAllFilesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, GalleryPage.L.allFiles), timeoutMs);
  }

  async expectAllFilesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, GalleryPage.L.allFiles), timeoutMs);
  }

  async expectAllFilesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, GalleryPage.L.allFiles), timeoutMs);
  }

  async expectAllFilesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, GalleryPage.L.allFiles), count, timeoutMs);
  }

  async scrollAllFilesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, GalleryPage.L.allFiles));
  }

  async longPressImages(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, GalleryPage.L.images));
  }

  async expectImagesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, GalleryPage.L.images), timeoutMs);
  }

  async expectImagesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, GalleryPage.L.images), expected, timeoutMs);
  }

  async expectImagesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, GalleryPage.L.images), substring, timeoutMs);
  }

  async expectImagesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, GalleryPage.L.images), value, timeoutMs);
  }

  async expectImagesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, GalleryPage.L.images), timeoutMs);
  }

  async expectImagesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, GalleryPage.L.images), timeoutMs);
  }

  async expectImagesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, GalleryPage.L.images), timeoutMs);
  }

  async expectImagesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, GalleryPage.L.images), timeoutMs);
  }

  async expectImagesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, GalleryPage.L.images), timeoutMs);
  }

  async expectImagesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, GalleryPage.L.images), count, timeoutMs);
  }

  async scrollImagesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, GalleryPage.L.images));
  }

  async longPressPDFs(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, GalleryPage.L.pDFs));
  }

  async expectPDFsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, GalleryPage.L.pDFs), timeoutMs);
  }

  async expectPDFsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, GalleryPage.L.pDFs), expected, timeoutMs);
  }

  async expectPDFsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, GalleryPage.L.pDFs), substring, timeoutMs);
  }

  async expectPDFsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, GalleryPage.L.pDFs), value, timeoutMs);
  }

  async expectPDFsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, GalleryPage.L.pDFs), timeoutMs);
  }

  async expectPDFsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, GalleryPage.L.pDFs), timeoutMs);
  }

  async expectPDFsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, GalleryPage.L.pDFs), timeoutMs);
  }

  async expectPDFsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, GalleryPage.L.pDFs), timeoutMs);
  }

  async expectPDFsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, GalleryPage.L.pDFs), timeoutMs);
  }

  async expectPDFsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, GalleryPage.L.pDFs), count, timeoutMs);
  }

  async scrollPDFsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, GalleryPage.L.pDFs));
  }

  async doubleClickX2502Jpg(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, GalleryPage.L.x2502Jpg));
  }

  async longPressX2502Jpg(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, GalleryPage.L.x2502Jpg));
  }

  async expectX2502JpgHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, GalleryPage.L.x2502Jpg), timeoutMs);
  }

  async expectX2502JpgText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, GalleryPage.L.x2502Jpg), expected, timeoutMs);
  }

  async expectX2502JpgContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, GalleryPage.L.x2502Jpg), substring, timeoutMs);
  }

  async expectX2502JpgValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, GalleryPage.L.x2502Jpg), value, timeoutMs);
  }

  async expectX2502JpgEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, GalleryPage.L.x2502Jpg), timeoutMs);
  }

  async expectX2502JpgDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, GalleryPage.L.x2502Jpg), timeoutMs);
  }

  async expectX2502JpgChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, GalleryPage.L.x2502Jpg), timeoutMs);
  }

  async expectX2502JpgUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, GalleryPage.L.x2502Jpg), timeoutMs);
  }

  async expectX2502JpgFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, GalleryPage.L.x2502Jpg), timeoutMs);
  }

  async expectX2502JpgCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, GalleryPage.L.x2502Jpg), count, timeoutMs);
  }

  async scrollX2502JpgIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, GalleryPage.L.x2502Jpg));
  }

  async doubleClickX250Gif(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, GalleryPage.L.x250Gif));
  }

  async longPressX250Gif(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, GalleryPage.L.x250Gif));
  }

  async expectX250GifHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, GalleryPage.L.x250Gif), timeoutMs);
  }

  async expectX250GifText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, GalleryPage.L.x250Gif), expected, timeoutMs);
  }

  async expectX250GifContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, GalleryPage.L.x250Gif), substring, timeoutMs);
  }

  async expectX250GifValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, GalleryPage.L.x250Gif), value, timeoutMs);
  }

  async expectX250GifEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, GalleryPage.L.x250Gif), timeoutMs);
  }

  async expectX250GifDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, GalleryPage.L.x250Gif), timeoutMs);
  }

  async expectX250GifChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, GalleryPage.L.x250Gif), timeoutMs);
  }

  async expectX250GifUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, GalleryPage.L.x250Gif), timeoutMs);
  }

  async expectX250GifFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, GalleryPage.L.x250Gif), timeoutMs);
  }

  async expectX250GifCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, GalleryPage.L.x250Gif), count, timeoutMs);
  }

  async scrollX250GifIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, GalleryPage.L.x250Gif));
  }

  async doubleClickX300Jpg(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, GalleryPage.L.x300Jpg));
  }

  async longPressX300Jpg(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, GalleryPage.L.x300Jpg));
  }

  async expectX300JpgHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, GalleryPage.L.x300Jpg), timeoutMs);
  }

  async expectX300JpgText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, GalleryPage.L.x300Jpg), expected, timeoutMs);
  }

  async expectX300JpgContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, GalleryPage.L.x300Jpg), substring, timeoutMs);
  }

  async expectX300JpgValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, GalleryPage.L.x300Jpg), value, timeoutMs);
  }

  async expectX300JpgEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, GalleryPage.L.x300Jpg), timeoutMs);
  }

  async expectX300JpgDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, GalleryPage.L.x300Jpg), timeoutMs);
  }

  async expectX300JpgChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, GalleryPage.L.x300Jpg), timeoutMs);
  }

  async expectX300JpgUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, GalleryPage.L.x300Jpg), timeoutMs);
  }

  async expectX300JpgFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, GalleryPage.L.x300Jpg), timeoutMs);
  }

  async expectX300JpgCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, GalleryPage.L.x300Jpg), count, timeoutMs);
  }

  async scrollX300JpgIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, GalleryPage.L.x300Jpg));
  }

}
