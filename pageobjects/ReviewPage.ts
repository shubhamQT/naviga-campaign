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

export class ReviewPage {
  private static readonly L = {
    review: { strategy: 'role' as const, value: '[[Review]]', role: 'button', actionKind: 'button' as const },
    addMoreProducts: { strategy: 'css' as const, value: '#addMoreProducts', role: 'button', actionKind: 'button' as const },
    proceedToUploadCreatives: { strategy: 'css' as const, value: '#proceedToUploadCreatives', role: 'button', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickReview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ReviewPage.L.review));
  }

  async doubleClickReview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ReviewPage.L.review));
  }

  async expectReviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ReviewPage.L.review), timeoutMs, soft);
  }

  async clickAddMoreProducts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ReviewPage.L.addMoreProducts));
  }

  async doubleClickAddMoreProducts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ReviewPage.L.addMoreProducts));
  }

  async expectAddMoreProductsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ReviewPage.L.addMoreProducts), timeoutMs, soft);
  }

  async clickProceedToUploadCreatives(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ReviewPage.L.proceedToUploadCreatives));
  }

  async doubleClickProceedToUploadCreatives(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ReviewPage.L.proceedToUploadCreatives));
  }

  async expectProceedToUploadCreativesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ReviewPage.L.proceedToUploadCreatives), timeoutMs, soft);
  }


  async longPressReview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ReviewPage.L.review));
  }

  async expectReviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ReviewPage.L.review), timeoutMs);
  }

  async expectReviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ReviewPage.L.review), expected, timeoutMs);
  }

  async expectReviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ReviewPage.L.review), substring, timeoutMs);
  }

  async expectReviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ReviewPage.L.review), value, timeoutMs);
  }

  async expectReviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ReviewPage.L.review), timeoutMs);
  }

  async expectReviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ReviewPage.L.review), timeoutMs);
  }

  async expectReviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ReviewPage.L.review), timeoutMs);
  }

  async expectReviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ReviewPage.L.review), timeoutMs);
  }

  async expectReviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ReviewPage.L.review), timeoutMs);
  }

  async expectReviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ReviewPage.L.review), count, timeoutMs);
  }

  async scrollReviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ReviewPage.L.review));
  }

  async longPressAddMoreProducts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ReviewPage.L.addMoreProducts));
  }

  async expectAddMoreProductsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ReviewPage.L.addMoreProducts), timeoutMs);
  }

  async expectAddMoreProductsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ReviewPage.L.addMoreProducts), expected, timeoutMs);
  }

  async expectAddMoreProductsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ReviewPage.L.addMoreProducts), substring, timeoutMs);
  }

  async expectAddMoreProductsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ReviewPage.L.addMoreProducts), value, timeoutMs);
  }

  async expectAddMoreProductsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ReviewPage.L.addMoreProducts), timeoutMs);
  }

  async expectAddMoreProductsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ReviewPage.L.addMoreProducts), timeoutMs);
  }

  async expectAddMoreProductsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ReviewPage.L.addMoreProducts), timeoutMs);
  }

  async expectAddMoreProductsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ReviewPage.L.addMoreProducts), timeoutMs);
  }

  async expectAddMoreProductsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ReviewPage.L.addMoreProducts), timeoutMs);
  }

  async expectAddMoreProductsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ReviewPage.L.addMoreProducts), count, timeoutMs);
  }

  async scrollAddMoreProductsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ReviewPage.L.addMoreProducts));
  }

  async longPressProceedToUploadCreatives(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ReviewPage.L.proceedToUploadCreatives));
  }

  async expectProceedToUploadCreativesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ReviewPage.L.proceedToUploadCreatives), timeoutMs);
  }

  async expectProceedToUploadCreativesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ReviewPage.L.proceedToUploadCreatives), expected, timeoutMs);
  }

  async expectProceedToUploadCreativesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ReviewPage.L.proceedToUploadCreatives), substring, timeoutMs);
  }

  async expectProceedToUploadCreativesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ReviewPage.L.proceedToUploadCreatives), value, timeoutMs);
  }

  async expectProceedToUploadCreativesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ReviewPage.L.proceedToUploadCreatives), timeoutMs);
  }

  async expectProceedToUploadCreativesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ReviewPage.L.proceedToUploadCreatives), timeoutMs);
  }

  async expectProceedToUploadCreativesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ReviewPage.L.proceedToUploadCreatives), timeoutMs);
  }

  async expectProceedToUploadCreativesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ReviewPage.L.proceedToUploadCreatives), timeoutMs);
  }

  async expectProceedToUploadCreativesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ReviewPage.L.proceedToUploadCreatives), timeoutMs);
  }

  async expectProceedToUploadCreativesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ReviewPage.L.proceedToUploadCreatives), count, timeoutMs);
  }

  async scrollProceedToUploadCreativesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ReviewPage.L.proceedToUploadCreatives));
  }

}
