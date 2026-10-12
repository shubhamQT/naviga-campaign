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

export class ProductSelectionPage {
  private static readonly L = {
    productSelection: { strategy: 'css' as const, value: '.accordian-product-selection', actionKind: 'generic' as const },
    productSelectionSelectRate: { strategy: 'role' as const, value: 'Product Selection Select rate', role: 'button', actionKind: 'button' as const },
    targetedCpmRate: { strategy: 'css' as const, value: '[name="Targeted CPM Rate"]', role: 'group', actionKind: 'generic' as const },
    next: { strategy: 'role' as const, value: 'Next', role: 'button', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickProductSelection(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductSelectionPage.L.productSelection));
  }

  async expectProductSelectionVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProductSelectionPage.L.productSelection), timeoutMs, soft);
  }

  async clickProductSelectionSelectRate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductSelectionPage.L.productSelectionSelectRate));
  }

  async doubleClickProductSelectionSelectRate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductSelectionPage.L.productSelectionSelectRate));
  }

  async expectProductSelectionSelectRateVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProductSelectionPage.L.productSelectionSelectRate), timeoutMs, soft);
  }

  async clickTargetedCpmRate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductSelectionPage.L.targetedCpmRate));
  }

  async expectTargetedCpmRateVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProductSelectionPage.L.targetedCpmRate), timeoutMs, soft);
  }

  async clickNext(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductSelectionPage.L.next));
  }

  async doubleClickNext(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductSelectionPage.L.next));
  }

  async expectNextVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProductSelectionPage.L.next), timeoutMs, soft);
  }

  async scrollNextIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductSelectionPage.L.next));
  }

}
