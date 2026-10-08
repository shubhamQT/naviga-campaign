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

export class CampaignBookingPage {
  private static readonly L = {
    backToCampaignListing: { strategy: 'role' as const, value: 'Back to campaign listing', role: 'button', actionKind: 'button' as const },
    campaignBooking: { strategy: 'role' as const, value: 'Campaign Booking', role: 'heading', level: 3, actionKind: 'text' as const },
    promoCode: { strategy: 'css' as const, value: '#promo-code-input-desktop[name="promoCode"]', role: 'textbox', actionKind: 'textbox' as const },
    confirmYourBooking: { strategy: 'role' as const, value: 'Confirm Your Booking', role: 'heading', level: 6, actionKind: 'text' as const },
    closeIcon: { strategy: 'testId' as const, value: 'close-icon', role: 'button', actionKind: 'button' as const },
    campaignSummary: { strategy: 'role' as const, value: 'Campaign Summary', role: 'heading', level: 6, actionKind: 'text' as const },
    aPurchaseOrderPo: { strategy: 'role' as const, value: 'A Purchase Order (PO) number is used for billing and invoice reference.', role: 'button', actionKind: 'button' as const },
    poNumber: { strategy: 'css' as const, value: '#poNumber[name="poNumber"]', role: 'textbox', actionKind: 'textbox' as const },
    paymentMethod: { strategy: 'role' as const, value: 'Payment Method', role: 'heading', level: 6, actionKind: 'text' as const },
    cancel: { strategy: 'role' as const, value: 'Cancel', role: 'button', actionKind: 'button' as const },
    confirmPayment: { strategy: 'role' as const, value: 'Confirm Payment $526.05', role: 'button', actionKind: 'button' as const },
    close: { strategy: 'role' as const, value: 'Close', role: 'button', actionKind: 'button' as const },
    paymentSuccessful: { strategy: 'role' as const, value: 'Payment Successful!', role: 'heading', level: 6, actionKind: 'text' as const },
    continueToDashboard: { strategy: 'role' as const, value: 'Continue to Dashboard', role: 'button', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickBackToCampaignListing(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CampaignBookingPage.L.backToCampaignListing));
  }

  async doubleClickBackToCampaignListing(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CampaignBookingPage.L.backToCampaignListing));
  }

  async expectBackToCampaignListingVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CampaignBookingPage.L.backToCampaignListing), timeoutMs, soft);
  }

  async getInnerTextCampaignBooking(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CampaignBookingPage.L.campaignBooking));
  }

  async expectCampaignBookingVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CampaignBookingPage.L.campaignBooking), timeoutMs, soft);
  }

  async fillPromoCode(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, CampaignBookingPage.L.promoCode), value);
  }

  async clearPromoCode(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, CampaignBookingPage.L.promoCode));
  }

  async getPromoCodeValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CampaignBookingPage.L.promoCode));
  }

  async expectPromoCodeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CampaignBookingPage.L.promoCode), timeoutMs, soft);
  }

  async getInnerTextConfirmYourBooking(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CampaignBookingPage.L.confirmYourBooking));
  }

  async expectConfirmYourBookingVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CampaignBookingPage.L.confirmYourBooking), timeoutMs, soft);
  }

  async clickCloseIcon(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CampaignBookingPage.L.closeIcon));
  }

  async doubleClickCloseIcon(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CampaignBookingPage.L.closeIcon));
  }

  async expectCloseIconVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CampaignBookingPage.L.closeIcon), timeoutMs, soft);
  }

  async getInnerTextCampaignSummary(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CampaignBookingPage.L.campaignSummary));
  }

  async expectCampaignSummaryVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CampaignBookingPage.L.campaignSummary), timeoutMs, soft);
  }

  async clickAPurchaseOrderPo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CampaignBookingPage.L.aPurchaseOrderPo));
  }

  async doubleClickAPurchaseOrderPo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CampaignBookingPage.L.aPurchaseOrderPo));
  }

  async expectAPurchaseOrderPoVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CampaignBookingPage.L.aPurchaseOrderPo), timeoutMs, soft);
  }

  async fillPoNumber(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, CampaignBookingPage.L.poNumber), value);
  }

  async clearPoNumber(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, CampaignBookingPage.L.poNumber));
  }

  async getPoNumberValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CampaignBookingPage.L.poNumber));
  }

  async expectPoNumberVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CampaignBookingPage.L.poNumber), timeoutMs, soft);
  }

  async getInnerTextPaymentMethod(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CampaignBookingPage.L.paymentMethod));
  }

  async expectPaymentMethodVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CampaignBookingPage.L.paymentMethod), timeoutMs, soft);
  }

  async clickCancel(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CampaignBookingPage.L.cancel));
  }

  async doubleClickCancel(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CampaignBookingPage.L.cancel));
  }

  async expectCancelVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CampaignBookingPage.L.cancel), timeoutMs, soft);
  }

  async clickConfirmPayment(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CampaignBookingPage.L.confirmPayment));
  }

  async doubleClickConfirmPayment(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CampaignBookingPage.L.confirmPayment));
  }

  async expectConfirmPaymentVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CampaignBookingPage.L.confirmPayment), timeoutMs, soft);
  }

  async clickClose(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CampaignBookingPage.L.close));
  }

  async doubleClickClose(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CampaignBookingPage.L.close));
  }

  async expectCloseVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CampaignBookingPage.L.close), timeoutMs, soft);
  }

  async getInnerTextPaymentSuccessful(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CampaignBookingPage.L.paymentSuccessful));
  }

  async expectPaymentSuccessfulVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CampaignBookingPage.L.paymentSuccessful), timeoutMs, soft);
  }

  async clickContinueToDashboard(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CampaignBookingPage.L.continueToDashboard));
  }

  async doubleClickContinueToDashboard(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CampaignBookingPage.L.continueToDashboard));
  }

  async expectContinueToDashboardVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CampaignBookingPage.L.continueToDashboard), timeoutMs, soft);
  }


  async longPressBackToCampaignListing(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CampaignBookingPage.L.backToCampaignListing));
  }

  async expectBackToCampaignListingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CampaignBookingPage.L.backToCampaignListing), timeoutMs);
  }

  async expectBackToCampaignListingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CampaignBookingPage.L.backToCampaignListing), expected, timeoutMs);
  }

  async expectBackToCampaignListingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CampaignBookingPage.L.backToCampaignListing), substring, timeoutMs);
  }

  async expectBackToCampaignListingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CampaignBookingPage.L.backToCampaignListing), value, timeoutMs);
  }

  async expectBackToCampaignListingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CampaignBookingPage.L.backToCampaignListing), timeoutMs);
  }

  async expectBackToCampaignListingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CampaignBookingPage.L.backToCampaignListing), timeoutMs);
  }

  async expectBackToCampaignListingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CampaignBookingPage.L.backToCampaignListing), timeoutMs);
  }

  async expectBackToCampaignListingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CampaignBookingPage.L.backToCampaignListing), timeoutMs);
  }

  async expectBackToCampaignListingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CampaignBookingPage.L.backToCampaignListing), timeoutMs);
  }

  async expectBackToCampaignListingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CampaignBookingPage.L.backToCampaignListing), count, timeoutMs);
  }

  async scrollBackToCampaignListingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CampaignBookingPage.L.backToCampaignListing));
  }

  async clickCampaignBooking(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CampaignBookingPage.L.campaignBooking));
  }

  async doubleClickCampaignBooking(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CampaignBookingPage.L.campaignBooking));
  }

  async longPressCampaignBooking(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CampaignBookingPage.L.campaignBooking));
  }

  async expectCampaignBookingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CampaignBookingPage.L.campaignBooking), timeoutMs);
  }

  async expectCampaignBookingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CampaignBookingPage.L.campaignBooking), expected, timeoutMs);
  }

  async expectCampaignBookingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CampaignBookingPage.L.campaignBooking), substring, timeoutMs);
  }

  async expectCampaignBookingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CampaignBookingPage.L.campaignBooking), value, timeoutMs);
  }

  async expectCampaignBookingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CampaignBookingPage.L.campaignBooking), timeoutMs);
  }

  async expectCampaignBookingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CampaignBookingPage.L.campaignBooking), timeoutMs);
  }

  async expectCampaignBookingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CampaignBookingPage.L.campaignBooking), timeoutMs);
  }

  async expectCampaignBookingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CampaignBookingPage.L.campaignBooking), timeoutMs);
  }

  async expectCampaignBookingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CampaignBookingPage.L.campaignBooking), timeoutMs);
  }

  async expectCampaignBookingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CampaignBookingPage.L.campaignBooking), count, timeoutMs);
  }

  async scrollCampaignBookingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CampaignBookingPage.L.campaignBooking));
  }

  async typeTextPromoCode(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, CampaignBookingPage.L.promoCode), value);
  }

  async expectPromoCodeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CampaignBookingPage.L.promoCode), timeoutMs);
  }

  async expectPromoCodeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CampaignBookingPage.L.promoCode), expected, timeoutMs);
  }

  async expectPromoCodeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CampaignBookingPage.L.promoCode), substring, timeoutMs);
  }

  async expectPromoCodeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CampaignBookingPage.L.promoCode), value, timeoutMs);
  }

  async expectPromoCodeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CampaignBookingPage.L.promoCode), timeoutMs);
  }

  async expectPromoCodeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CampaignBookingPage.L.promoCode), timeoutMs);
  }

  async expectPromoCodeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CampaignBookingPage.L.promoCode), timeoutMs);
  }

  async expectPromoCodeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CampaignBookingPage.L.promoCode), timeoutMs);
  }

  async expectPromoCodeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CampaignBookingPage.L.promoCode), timeoutMs);
  }

  async expectPromoCodeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CampaignBookingPage.L.promoCode), count, timeoutMs);
  }

  async scrollPromoCodeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CampaignBookingPage.L.promoCode));
  }

  async clickConfirmYourBooking(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CampaignBookingPage.L.confirmYourBooking));
  }

  async doubleClickConfirmYourBooking(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CampaignBookingPage.L.confirmYourBooking));
  }

  async longPressConfirmYourBooking(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CampaignBookingPage.L.confirmYourBooking));
  }

  async expectConfirmYourBookingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CampaignBookingPage.L.confirmYourBooking), timeoutMs);
  }

  async expectConfirmYourBookingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CampaignBookingPage.L.confirmYourBooking), expected, timeoutMs);
  }

  async expectConfirmYourBookingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CampaignBookingPage.L.confirmYourBooking), substring, timeoutMs);
  }

  async expectConfirmYourBookingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CampaignBookingPage.L.confirmYourBooking), value, timeoutMs);
  }

  async expectConfirmYourBookingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CampaignBookingPage.L.confirmYourBooking), timeoutMs);
  }

  async expectConfirmYourBookingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CampaignBookingPage.L.confirmYourBooking), timeoutMs);
  }

  async expectConfirmYourBookingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CampaignBookingPage.L.confirmYourBooking), timeoutMs);
  }

  async expectConfirmYourBookingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CampaignBookingPage.L.confirmYourBooking), timeoutMs);
  }

  async expectConfirmYourBookingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CampaignBookingPage.L.confirmYourBooking), timeoutMs);
  }

  async expectConfirmYourBookingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CampaignBookingPage.L.confirmYourBooking), count, timeoutMs);
  }

  async scrollConfirmYourBookingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CampaignBookingPage.L.confirmYourBooking));
  }

  async longPressCloseIcon(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CampaignBookingPage.L.closeIcon));
  }

  async expectCloseIconHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CampaignBookingPage.L.closeIcon), timeoutMs);
  }

  async expectCloseIconText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CampaignBookingPage.L.closeIcon), expected, timeoutMs);
  }

  async expectCloseIconContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CampaignBookingPage.L.closeIcon), substring, timeoutMs);
  }

  async expectCloseIconValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CampaignBookingPage.L.closeIcon), value, timeoutMs);
  }

  async expectCloseIconEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CampaignBookingPage.L.closeIcon), timeoutMs);
  }

  async expectCloseIconDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CampaignBookingPage.L.closeIcon), timeoutMs);
  }

  async expectCloseIconChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CampaignBookingPage.L.closeIcon), timeoutMs);
  }

  async expectCloseIconUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CampaignBookingPage.L.closeIcon), timeoutMs);
  }

  async expectCloseIconFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CampaignBookingPage.L.closeIcon), timeoutMs);
  }

  async expectCloseIconCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CampaignBookingPage.L.closeIcon), count, timeoutMs);
  }

  async scrollCloseIconIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CampaignBookingPage.L.closeIcon));
  }

  async clickCampaignSummary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CampaignBookingPage.L.campaignSummary));
  }

  async doubleClickCampaignSummary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CampaignBookingPage.L.campaignSummary));
  }

  async longPressCampaignSummary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CampaignBookingPage.L.campaignSummary));
  }

  async expectCampaignSummaryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CampaignBookingPage.L.campaignSummary), timeoutMs);
  }

  async expectCampaignSummaryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CampaignBookingPage.L.campaignSummary), expected, timeoutMs);
  }

  async expectCampaignSummaryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CampaignBookingPage.L.campaignSummary), substring, timeoutMs);
  }

  async expectCampaignSummaryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CampaignBookingPage.L.campaignSummary), value, timeoutMs);
  }

  async expectCampaignSummaryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CampaignBookingPage.L.campaignSummary), timeoutMs);
  }

  async expectCampaignSummaryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CampaignBookingPage.L.campaignSummary), timeoutMs);
  }

  async expectCampaignSummaryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CampaignBookingPage.L.campaignSummary), timeoutMs);
  }

  async expectCampaignSummaryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CampaignBookingPage.L.campaignSummary), timeoutMs);
  }

  async expectCampaignSummaryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CampaignBookingPage.L.campaignSummary), timeoutMs);
  }

  async expectCampaignSummaryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CampaignBookingPage.L.campaignSummary), count, timeoutMs);
  }

  async scrollCampaignSummaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CampaignBookingPage.L.campaignSummary));
  }

  async longPressAPurchaseOrderPo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CampaignBookingPage.L.aPurchaseOrderPo));
  }

  async expectAPurchaseOrderPoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CampaignBookingPage.L.aPurchaseOrderPo), timeoutMs);
  }

  async expectAPurchaseOrderPoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CampaignBookingPage.L.aPurchaseOrderPo), expected, timeoutMs);
  }

  async expectAPurchaseOrderPoContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CampaignBookingPage.L.aPurchaseOrderPo), substring, timeoutMs);
  }

  async expectAPurchaseOrderPoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CampaignBookingPage.L.aPurchaseOrderPo), value, timeoutMs);
  }

  async expectAPurchaseOrderPoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CampaignBookingPage.L.aPurchaseOrderPo), timeoutMs);
  }

  async expectAPurchaseOrderPoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CampaignBookingPage.L.aPurchaseOrderPo), timeoutMs);
  }

  async expectAPurchaseOrderPoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CampaignBookingPage.L.aPurchaseOrderPo), timeoutMs);
  }

  async expectAPurchaseOrderPoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CampaignBookingPage.L.aPurchaseOrderPo), timeoutMs);
  }

  async expectAPurchaseOrderPoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CampaignBookingPage.L.aPurchaseOrderPo), timeoutMs);
  }

  async expectAPurchaseOrderPoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CampaignBookingPage.L.aPurchaseOrderPo), count, timeoutMs);
  }

  async scrollAPurchaseOrderPoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CampaignBookingPage.L.aPurchaseOrderPo));
  }

  async typeTextPoNumber(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, CampaignBookingPage.L.poNumber), value);
  }

  async expectPoNumberHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CampaignBookingPage.L.poNumber), timeoutMs);
  }

  async expectPoNumberText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CampaignBookingPage.L.poNumber), expected, timeoutMs);
  }

  async expectPoNumberContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CampaignBookingPage.L.poNumber), substring, timeoutMs);
  }

  async expectPoNumberValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CampaignBookingPage.L.poNumber), value, timeoutMs);
  }

  async expectPoNumberEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CampaignBookingPage.L.poNumber), timeoutMs);
  }

  async expectPoNumberDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CampaignBookingPage.L.poNumber), timeoutMs);
  }

  async expectPoNumberChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CampaignBookingPage.L.poNumber), timeoutMs);
  }

  async expectPoNumberUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CampaignBookingPage.L.poNumber), timeoutMs);
  }

  async expectPoNumberFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CampaignBookingPage.L.poNumber), timeoutMs);
  }

  async expectPoNumberCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CampaignBookingPage.L.poNumber), count, timeoutMs);
  }

  async scrollPoNumberIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CampaignBookingPage.L.poNumber));
  }

  async clickPaymentMethod(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CampaignBookingPage.L.paymentMethod));
  }

  async doubleClickPaymentMethod(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CampaignBookingPage.L.paymentMethod));
  }

  async longPressPaymentMethod(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CampaignBookingPage.L.paymentMethod));
  }

  async expectPaymentMethodHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CampaignBookingPage.L.paymentMethod), timeoutMs);
  }

  async expectPaymentMethodText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CampaignBookingPage.L.paymentMethod), expected, timeoutMs);
  }

  async expectPaymentMethodContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CampaignBookingPage.L.paymentMethod), substring, timeoutMs);
  }

  async expectPaymentMethodValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CampaignBookingPage.L.paymentMethod), value, timeoutMs);
  }

  async expectPaymentMethodEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CampaignBookingPage.L.paymentMethod), timeoutMs);
  }

  async expectPaymentMethodDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CampaignBookingPage.L.paymentMethod), timeoutMs);
  }

  async expectPaymentMethodChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CampaignBookingPage.L.paymentMethod), timeoutMs);
  }

  async expectPaymentMethodUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CampaignBookingPage.L.paymentMethod), timeoutMs);
  }

  async expectPaymentMethodFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CampaignBookingPage.L.paymentMethod), timeoutMs);
  }

  async expectPaymentMethodCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CampaignBookingPage.L.paymentMethod), count, timeoutMs);
  }

  async scrollPaymentMethodIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CampaignBookingPage.L.paymentMethod));
  }

  async longPressCancel(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CampaignBookingPage.L.cancel));
  }

  async expectCancelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CampaignBookingPage.L.cancel), timeoutMs);
  }

  async expectCancelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CampaignBookingPage.L.cancel), expected, timeoutMs);
  }

  async expectCancelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CampaignBookingPage.L.cancel), substring, timeoutMs);
  }

  async expectCancelValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CampaignBookingPage.L.cancel), value, timeoutMs);
  }

  async expectCancelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CampaignBookingPage.L.cancel), timeoutMs);
  }

  async expectCancelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CampaignBookingPage.L.cancel), timeoutMs);
  }

  async expectCancelChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CampaignBookingPage.L.cancel), timeoutMs);
  }

  async expectCancelUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CampaignBookingPage.L.cancel), timeoutMs);
  }

  async expectCancelFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CampaignBookingPage.L.cancel), timeoutMs);
  }

  async expectCancelCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CampaignBookingPage.L.cancel), count, timeoutMs);
  }

  async scrollCancelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CampaignBookingPage.L.cancel));
  }

  async longPressConfirmPayment(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CampaignBookingPage.L.confirmPayment));
  }

  async expectConfirmPaymentHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CampaignBookingPage.L.confirmPayment), timeoutMs);
  }

  async expectConfirmPaymentText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CampaignBookingPage.L.confirmPayment), expected, timeoutMs);
  }

  async expectConfirmPaymentContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CampaignBookingPage.L.confirmPayment), substring, timeoutMs);
  }

  async expectConfirmPaymentValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CampaignBookingPage.L.confirmPayment), value, timeoutMs);
  }

  async expectConfirmPaymentEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CampaignBookingPage.L.confirmPayment), timeoutMs);
  }

  async expectConfirmPaymentDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CampaignBookingPage.L.confirmPayment), timeoutMs);
  }

  async expectConfirmPaymentChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CampaignBookingPage.L.confirmPayment), timeoutMs);
  }

  async expectConfirmPaymentUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CampaignBookingPage.L.confirmPayment), timeoutMs);
  }

  async expectConfirmPaymentFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CampaignBookingPage.L.confirmPayment), timeoutMs);
  }

  async expectConfirmPaymentCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CampaignBookingPage.L.confirmPayment), count, timeoutMs);
  }

  async scrollConfirmPaymentIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CampaignBookingPage.L.confirmPayment));
  }

  async longPressClose(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CampaignBookingPage.L.close));
  }

  async expectCloseHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CampaignBookingPage.L.close), timeoutMs);
  }

  async expectCloseText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CampaignBookingPage.L.close), expected, timeoutMs);
  }

  async expectCloseContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CampaignBookingPage.L.close), substring, timeoutMs);
  }

  async expectCloseValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CampaignBookingPage.L.close), value, timeoutMs);
  }

  async expectCloseEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CampaignBookingPage.L.close), timeoutMs);
  }

  async expectCloseDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CampaignBookingPage.L.close), timeoutMs);
  }

  async expectCloseChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CampaignBookingPage.L.close), timeoutMs);
  }

  async expectCloseUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CampaignBookingPage.L.close), timeoutMs);
  }

  async expectCloseFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CampaignBookingPage.L.close), timeoutMs);
  }

  async expectCloseCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CampaignBookingPage.L.close), count, timeoutMs);
  }

  async scrollCloseIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CampaignBookingPage.L.close));
  }

  async clickPaymentSuccessful(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CampaignBookingPage.L.paymentSuccessful));
  }

  async doubleClickPaymentSuccessful(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CampaignBookingPage.L.paymentSuccessful));
  }

  async longPressPaymentSuccessful(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CampaignBookingPage.L.paymentSuccessful));
  }

  async expectPaymentSuccessfulHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CampaignBookingPage.L.paymentSuccessful), timeoutMs);
  }

  async expectPaymentSuccessfulText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CampaignBookingPage.L.paymentSuccessful), expected, timeoutMs);
  }

  async expectPaymentSuccessfulContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CampaignBookingPage.L.paymentSuccessful), substring, timeoutMs);
  }

  async expectPaymentSuccessfulValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CampaignBookingPage.L.paymentSuccessful), value, timeoutMs);
  }

  async expectPaymentSuccessfulEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CampaignBookingPage.L.paymentSuccessful), timeoutMs);
  }

  async expectPaymentSuccessfulDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CampaignBookingPage.L.paymentSuccessful), timeoutMs);
  }

  async expectPaymentSuccessfulChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CampaignBookingPage.L.paymentSuccessful), timeoutMs);
  }

  async expectPaymentSuccessfulUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CampaignBookingPage.L.paymentSuccessful), timeoutMs);
  }

  async expectPaymentSuccessfulFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CampaignBookingPage.L.paymentSuccessful), timeoutMs);
  }

  async expectPaymentSuccessfulCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CampaignBookingPage.L.paymentSuccessful), count, timeoutMs);
  }

  async scrollPaymentSuccessfulIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CampaignBookingPage.L.paymentSuccessful));
  }

  async longPressContinueToDashboard(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CampaignBookingPage.L.continueToDashboard));
  }

  async expectContinueToDashboardHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CampaignBookingPage.L.continueToDashboard), timeoutMs);
  }

  async expectContinueToDashboardText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CampaignBookingPage.L.continueToDashboard), expected, timeoutMs);
  }

  async expectContinueToDashboardContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CampaignBookingPage.L.continueToDashboard), substring, timeoutMs);
  }

  async expectContinueToDashboardValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CampaignBookingPage.L.continueToDashboard), value, timeoutMs);
  }

  async expectContinueToDashboardEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CampaignBookingPage.L.continueToDashboard), timeoutMs);
  }

  async expectContinueToDashboardDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CampaignBookingPage.L.continueToDashboard), timeoutMs);
  }

  async expectContinueToDashboardChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CampaignBookingPage.L.continueToDashboard), timeoutMs);
  }

  async expectContinueToDashboardUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CampaignBookingPage.L.continueToDashboard), timeoutMs);
  }

  async expectContinueToDashboardFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CampaignBookingPage.L.continueToDashboard), timeoutMs);
  }

  async expectContinueToDashboardCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CampaignBookingPage.L.continueToDashboard), count, timeoutMs);
  }

  async scrollContinueToDashboardIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CampaignBookingPage.L.continueToDashboard));
  }

}
