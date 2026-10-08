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
    productSelection: { strategy: 'role' as const, value: '[[Product Selection]]', role: 'button', actionKind: 'button' as const },
    productSelectionSelectRate: { strategy: 'role' as const, value: 'Product Selection Select rate', role: 'button', actionKind: 'button' as const },
    targetedCpmRate: { strategy: 'css' as const, value: '[name="Targeted CPM Rate"]', role: 'group', actionKind: 'generic' as const },
    next: { strategy: 'role' as const, value: 'Next', role: 'button', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickProductSelection(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductSelectionPage.L.productSelection));
  }

  async doubleClickProductSelection(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductSelectionPage.L.productSelection));
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


  async longPressProductSelection(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductSelectionPage.L.productSelection));
  }

  async expectProductSelectionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductSelectionPage.L.productSelection), timeoutMs);
  }

  async expectProductSelectionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductSelectionPage.L.productSelection), expected, timeoutMs);
  }

  async expectProductSelectionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductSelectionPage.L.productSelection), substring, timeoutMs);
  }

  async expectProductSelectionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductSelectionPage.L.productSelection), value, timeoutMs);
  }

  async expectProductSelectionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductSelectionPage.L.productSelection), timeoutMs);
  }

  async expectProductSelectionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductSelectionPage.L.productSelection), timeoutMs);
  }

  async expectProductSelectionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductSelectionPage.L.productSelection), timeoutMs);
  }

  async expectProductSelectionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductSelectionPage.L.productSelection), timeoutMs);
  }

  async expectProductSelectionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductSelectionPage.L.productSelection), timeoutMs);
  }

  async expectProductSelectionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductSelectionPage.L.productSelection), count, timeoutMs);
  }

  async scrollProductSelectionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductSelectionPage.L.productSelection));
  }

  async longPressProductSelectionSelectRate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductSelectionPage.L.productSelectionSelectRate));
  }

  async expectProductSelectionSelectRateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductSelectionPage.L.productSelectionSelectRate), timeoutMs);
  }

  async expectProductSelectionSelectRateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductSelectionPage.L.productSelectionSelectRate), expected, timeoutMs);
  }

  async expectProductSelectionSelectRateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductSelectionPage.L.productSelectionSelectRate), substring, timeoutMs);
  }

  async expectProductSelectionSelectRateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductSelectionPage.L.productSelectionSelectRate), value, timeoutMs);
  }

  async expectProductSelectionSelectRateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductSelectionPage.L.productSelectionSelectRate), timeoutMs);
  }

  async expectProductSelectionSelectRateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductSelectionPage.L.productSelectionSelectRate), timeoutMs);
  }

  async expectProductSelectionSelectRateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductSelectionPage.L.productSelectionSelectRate), timeoutMs);
  }

  async expectProductSelectionSelectRateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductSelectionPage.L.productSelectionSelectRate), timeoutMs);
  }

  async expectProductSelectionSelectRateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductSelectionPage.L.productSelectionSelectRate), timeoutMs);
  }

  async expectProductSelectionSelectRateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductSelectionPage.L.productSelectionSelectRate), count, timeoutMs);
  }

  async scrollProductSelectionSelectRateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductSelectionPage.L.productSelectionSelectRate));
  }

  async doubleClickTargetedCpmRate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductSelectionPage.L.targetedCpmRate));
  }

  async longPressTargetedCpmRate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductSelectionPage.L.targetedCpmRate));
  }

  async expectTargetedCpmRateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductSelectionPage.L.targetedCpmRate), timeoutMs);
  }

  async expectTargetedCpmRateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductSelectionPage.L.targetedCpmRate), expected, timeoutMs);
  }

  async expectTargetedCpmRateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductSelectionPage.L.targetedCpmRate), substring, timeoutMs);
  }

  async expectTargetedCpmRateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductSelectionPage.L.targetedCpmRate), value, timeoutMs);
  }

  async expectTargetedCpmRateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductSelectionPage.L.targetedCpmRate), timeoutMs);
  }

  async expectTargetedCpmRateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductSelectionPage.L.targetedCpmRate), timeoutMs);
  }

  async expectTargetedCpmRateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductSelectionPage.L.targetedCpmRate), timeoutMs);
  }

  async expectTargetedCpmRateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductSelectionPage.L.targetedCpmRate), timeoutMs);
  }

  async expectTargetedCpmRateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductSelectionPage.L.targetedCpmRate), timeoutMs);
  }

  async expectTargetedCpmRateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductSelectionPage.L.targetedCpmRate), count, timeoutMs);
  }

  async scrollTargetedCpmRateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductSelectionPage.L.targetedCpmRate));
  }

  async longPressNext(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductSelectionPage.L.next));
  }

  async expectNextHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductSelectionPage.L.next), timeoutMs);
  }

  async expectNextText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductSelectionPage.L.next), expected, timeoutMs);
  }

  async expectNextContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductSelectionPage.L.next), substring, timeoutMs);
  }

  async expectNextValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductSelectionPage.L.next), value, timeoutMs);
  }

  async expectNextEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductSelectionPage.L.next), timeoutMs);
  }

  async expectNextDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductSelectionPage.L.next), timeoutMs);
  }

  async expectNextChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductSelectionPage.L.next), timeoutMs);
  }

  async expectNextUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductSelectionPage.L.next), timeoutMs);
  }

  async expectNextFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductSelectionPage.L.next), timeoutMs);
  }

  async expectNextCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductSelectionPage.L.next), count, timeoutMs);
  }

  async scrollNextIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductSelectionPage.L.next));
  }

}
