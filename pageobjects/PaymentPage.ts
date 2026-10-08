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

export class PaymentPage {
  private static readonly L = {
    payment: { strategy: 'role' as const, value: '[[Payment]]', role: 'button', actionKind: 'button' as const },
    addProfile: { strategy: 'role' as const, value: 'Add Profile', role: 'button', actionKind: 'button' as const },
    nameJcbSelected: { strategy: 'label' as const, value: 'Name:: jcb , selected', role: 'group', actionKind: 'generic' as const },
    deleteJcb: { strategy: 'role' as const, value: 'Delete: jcb ', role: 'button', actionKind: 'button' as const },
    next: { strategy: 'role' as const, value: 'Next', role: 'button', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickPayment(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PaymentPage.L.payment));
  }

  async doubleClickPayment(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PaymentPage.L.payment));
  }

  async expectPaymentVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PaymentPage.L.payment), timeoutMs, soft);
  }

  async clickAddProfile(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PaymentPage.L.addProfile));
  }

  async doubleClickAddProfile(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PaymentPage.L.addProfile));
  }

  async expectAddProfileVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PaymentPage.L.addProfile), timeoutMs, soft);
  }

  async clickNameJcbSelected(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PaymentPage.L.nameJcbSelected));
  }

  async expectNameJcbSelectedVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PaymentPage.L.nameJcbSelected), timeoutMs, soft);
  }

  async clickDeleteJcb(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PaymentPage.L.deleteJcb));
  }

  async doubleClickDeleteJcb(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PaymentPage.L.deleteJcb));
  }

  async expectDeleteJcbVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PaymentPage.L.deleteJcb), timeoutMs, soft);
  }

  async clickNext(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PaymentPage.L.next));
  }

  async doubleClickNext(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PaymentPage.L.next));
  }

  async expectNextVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PaymentPage.L.next), timeoutMs, soft);
  }


  async longPressPayment(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PaymentPage.L.payment));
  }

  async expectPaymentHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PaymentPage.L.payment), timeoutMs);
  }

  async expectPaymentText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PaymentPage.L.payment), expected, timeoutMs);
  }

  async expectPaymentContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PaymentPage.L.payment), substring, timeoutMs);
  }

  async expectPaymentValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PaymentPage.L.payment), value, timeoutMs);
  }

  async expectPaymentEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PaymentPage.L.payment), timeoutMs);
  }

  async expectPaymentDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PaymentPage.L.payment), timeoutMs);
  }

  async expectPaymentChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PaymentPage.L.payment), timeoutMs);
  }

  async expectPaymentUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PaymentPage.L.payment), timeoutMs);
  }

  async expectPaymentFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PaymentPage.L.payment), timeoutMs);
  }

  async expectPaymentCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PaymentPage.L.payment), count, timeoutMs);
  }

  async scrollPaymentIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PaymentPage.L.payment));
  }

  async longPressAddProfile(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PaymentPage.L.addProfile));
  }

  async expectAddProfileHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PaymentPage.L.addProfile), timeoutMs);
  }

  async expectAddProfileText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PaymentPage.L.addProfile), expected, timeoutMs);
  }

  async expectAddProfileContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PaymentPage.L.addProfile), substring, timeoutMs);
  }

  async expectAddProfileValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PaymentPage.L.addProfile), value, timeoutMs);
  }

  async expectAddProfileEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PaymentPage.L.addProfile), timeoutMs);
  }

  async expectAddProfileDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PaymentPage.L.addProfile), timeoutMs);
  }

  async expectAddProfileChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PaymentPage.L.addProfile), timeoutMs);
  }

  async expectAddProfileUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PaymentPage.L.addProfile), timeoutMs);
  }

  async expectAddProfileFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PaymentPage.L.addProfile), timeoutMs);
  }

  async expectAddProfileCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PaymentPage.L.addProfile), count, timeoutMs);
  }

  async scrollAddProfileIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PaymentPage.L.addProfile));
  }

  async doubleClickNameJcbSelected(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PaymentPage.L.nameJcbSelected));
  }

  async longPressNameJcbSelected(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PaymentPage.L.nameJcbSelected));
  }

  async expectNameJcbSelectedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PaymentPage.L.nameJcbSelected), timeoutMs);
  }

  async expectNameJcbSelectedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PaymentPage.L.nameJcbSelected), expected, timeoutMs);
  }

  async expectNameJcbSelectedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PaymentPage.L.nameJcbSelected), substring, timeoutMs);
  }

  async expectNameJcbSelectedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PaymentPage.L.nameJcbSelected), value, timeoutMs);
  }

  async expectNameJcbSelectedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PaymentPage.L.nameJcbSelected), timeoutMs);
  }

  async expectNameJcbSelectedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PaymentPage.L.nameJcbSelected), timeoutMs);
  }

  async expectNameJcbSelectedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PaymentPage.L.nameJcbSelected), timeoutMs);
  }

  async expectNameJcbSelectedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PaymentPage.L.nameJcbSelected), timeoutMs);
  }

  async expectNameJcbSelectedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PaymentPage.L.nameJcbSelected), timeoutMs);
  }

  async expectNameJcbSelectedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PaymentPage.L.nameJcbSelected), count, timeoutMs);
  }

  async scrollNameJcbSelectedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PaymentPage.L.nameJcbSelected));
  }

  async longPressDeleteJcb(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PaymentPage.L.deleteJcb));
  }

  async expectDeleteJcbHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PaymentPage.L.deleteJcb), timeoutMs);
  }

  async expectDeleteJcbText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PaymentPage.L.deleteJcb), expected, timeoutMs);
  }

  async expectDeleteJcbContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PaymentPage.L.deleteJcb), substring, timeoutMs);
  }

  async expectDeleteJcbValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PaymentPage.L.deleteJcb), value, timeoutMs);
  }

  async expectDeleteJcbEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PaymentPage.L.deleteJcb), timeoutMs);
  }

  async expectDeleteJcbDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PaymentPage.L.deleteJcb), timeoutMs);
  }

  async expectDeleteJcbChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PaymentPage.L.deleteJcb), timeoutMs);
  }

  async expectDeleteJcbUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PaymentPage.L.deleteJcb), timeoutMs);
  }

  async expectDeleteJcbFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PaymentPage.L.deleteJcb), timeoutMs);
  }

  async expectDeleteJcbCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PaymentPage.L.deleteJcb), count, timeoutMs);
  }

  async scrollDeleteJcbIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PaymentPage.L.deleteJcb));
  }

  async longPressNext(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PaymentPage.L.next));
  }

  async expectNextHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PaymentPage.L.next), timeoutMs);
  }

  async expectNextText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PaymentPage.L.next), expected, timeoutMs);
  }

  async expectNextContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PaymentPage.L.next), substring, timeoutMs);
  }

  async expectNextValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PaymentPage.L.next), value, timeoutMs);
  }

  async expectNextEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PaymentPage.L.next), timeoutMs);
  }

  async expectNextDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PaymentPage.L.next), timeoutMs);
  }

  async expectNextChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PaymentPage.L.next), timeoutMs);
  }

  async expectNextUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PaymentPage.L.next), timeoutMs);
  }

  async expectNextFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PaymentPage.L.next), timeoutMs);
  }

  async expectNextCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PaymentPage.L.next), count, timeoutMs);
  }

  async scrollNextIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PaymentPage.L.next));
  }

}
