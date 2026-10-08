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

export class BasicInformationPage {
  private static readonly L = {
    basicInformation: { strategy: 'role' as const, value: '[[Basic information]]', role: 'button', actionKind: 'button' as const },
    basicInformationLetSGet: { strategy: 'role' as const, value: 'Basic information Let’s get started with your', role: 'button', actionKind: 'button' as const },
    campaignName: { strategy: 'css' as const, value: '#campaignName[name="description"]', role: 'textbox', actionKind: 'textbox' as const },
    saveDraft: { strategy: 'role' as const, value: 'Save Draft', role: 'button', actionKind: 'button' as const },
    campaignNameHeader: { strategy: 'css' as const, value: '.newcampaign-review-summary-desktop [aria-label*="Copy of "]', actionKind: 'generic' as const },
    statusDraft: { strategy: 'text' as const, value: 'Draft', actionKind: 'generic' as const },
    campaignSetup: { strategy: 'role' as const, value: 'Campaign Setup', role: 'heading', level: 6, actionKind: 'text' as const },
    placementAndFormat: { strategy: 'role' as const, value: 'Placement and format', role: 'heading', level: 6, actionKind: 'text' as const },
    schedule: { strategy: 'role' as const, value: 'Schedule', role: 'heading', level: 6, actionKind: 'text' as const },
    creative: { strategy: 'role' as const, value: 'Creative', role: 'heading', level: 6, actionKind: 'text' as const },
    reviewAndPayment: { strategy: 'role' as const, value: 'Review and Payment', role: 'heading', level: 6, actionKind: 'text' as const },
    promoCode: { strategy: 'css' as const, value: '#promo-code-input-desktop[name="promoCode"]', role: 'textbox', actionKind: 'textbox' as const },
    chooseYourCampaignChannel: { strategy: 'role' as const, value: 'Choose your Campaign Channel', role: 'heading', level: 6, actionKind: 'text' as const },
    digital: { strategy: 'css' as const, value: '#cardComponentDigital[name="campaignChannel"]', role: 'group', actionKind: 'generic' as const },
    digital2: { strategy: 'altText' as const, value: 'Digital', role: 'img', actionKind: 'generic' as const },
    print: { strategy: 'css' as const, value: '#cardComponentAdvertising[name="campaignChannel"]', role: 'group', actionKind: 'generic' as const },
    print2: { strategy: 'altText' as const, value: 'Print', role: 'img', actionKind: 'generic' as const },
    emailBlast: { strategy: 'css' as const, value: '#cardComponentEmail[name="campaignChannel"]', role: 'group', actionKind: 'generic' as const },
    emailBlast2: { strategy: 'altText' as const, value: 'Email Blast', role: 'img', actionKind: 'generic' as const },
    productionNotesOptional: { strategy: 'css' as const, value: '#newProductionNote[name="newProductionNote"]', role: 'textbox', actionKind: 'textbox' as const },
    autonix: { strategy: 'role' as const, value: 'Autonix', role: 'heading', level: 6, actionKind: 'text' as const },
    targetingOptions: { strategy: 'role' as const, value: 'Targeting Options', role: 'heading', level: 6, actionKind: 'text' as const },
    productSelection: { strategy: 'role' as const, value: 'Product Selection', role: 'heading', level: 6, actionKind: 'text' as const },
    budgetSchedule: { strategy: 'role' as const, value: 'Budget & Schedule', role: 'heading', level: 6, actionKind: 'text' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickBasicInformation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BasicInformationPage.L.basicInformation));
  }

  async doubleClickBasicInformation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BasicInformationPage.L.basicInformation));
  }

  async expectBasicInformationVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BasicInformationPage.L.basicInformation), timeoutMs, soft);
  }

  async clickBasicInformationLetSGet(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BasicInformationPage.L.basicInformationLetSGet));
  }

  async doubleClickBasicInformationLetSGet(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BasicInformationPage.L.basicInformationLetSGet));
  }

  async expectBasicInformationLetSGetVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BasicInformationPage.L.basicInformationLetSGet), timeoutMs, soft);
  }

  async fillCampaignName(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, BasicInformationPage.L.campaignName), value);
  }

  async clearCampaignName(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, BasicInformationPage.L.campaignName));
  }

  async getCampaignNameValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BasicInformationPage.L.campaignName));
  }

  async expectCampaignNameVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BasicInformationPage.L.campaignName), timeoutMs, soft);
  }

  async clickSaveDraft(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BasicInformationPage.L.saveDraft));
  }

  async expectSaveDraftVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BasicInformationPage.L.saveDraft), timeoutMs, soft);
  }

  async getInnerTextCampaignNameHeader(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BasicInformationPage.L.campaignNameHeader));
  }

  async expectCampaignNameHeaderVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BasicInformationPage.L.campaignNameHeader), timeoutMs, soft);
  }

  async expectCampaignNameHeaderContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BasicInformationPage.L.campaignNameHeader), substring, timeoutMs);
  }

  async expectStatusDraftVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BasicInformationPage.L.statusDraft), timeoutMs, soft);
  }

  async getInnerTextStatusDraft(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BasicInformationPage.L.statusDraft));
  }
  
  async getInnerTextCampaignSetup(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BasicInformationPage.L.campaignSetup));
  }

  async expectCampaignSetupVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BasicInformationPage.L.campaignSetup), timeoutMs, soft);
  }

  async getInnerTextPlacementAndFormat(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BasicInformationPage.L.placementAndFormat));
  }

  async expectPlacementAndFormatVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BasicInformationPage.L.placementAndFormat), timeoutMs, soft);
  }

  async getInnerTextSchedule(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BasicInformationPage.L.schedule));
  }

  async expectScheduleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BasicInformationPage.L.schedule), timeoutMs, soft);
  }

  async getInnerTextCreative(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BasicInformationPage.L.creative));
  }

  async expectCreativeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BasicInformationPage.L.creative), timeoutMs, soft);
  }

  async getInnerTextReviewAndPayment(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BasicInformationPage.L.reviewAndPayment));
  }

  async expectReviewAndPaymentVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BasicInformationPage.L.reviewAndPayment), timeoutMs, soft);
  }

  async fillPromoCode(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, BasicInformationPage.L.promoCode), value);
  }

  async clearPromoCode(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, BasicInformationPage.L.promoCode));
  }

  async getPromoCodeValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BasicInformationPage.L.promoCode));
  }

  async expectPromoCodeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BasicInformationPage.L.promoCode), timeoutMs, soft);
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  /** Assert page title matches an expected string or regex. */
  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expectPageTitle(this.page, expected, timeoutMs);
  }

  /** Verify we are on the correct page using the title captured at record time. */
  async verifyOnPage(timeoutMs = 30_000): Promise<void> {
    await expectPageTitle(this.page, 'McClatchy Ad Manager', timeoutMs);
  }

  async getInnerTextChooseYourCampaignChannel(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BasicInformationPage.L.chooseYourCampaignChannel));
  }

  async expectChooseYourCampaignChannelVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BasicInformationPage.L.chooseYourCampaignChannel), timeoutMs, soft);
  }

  async clickDigital(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BasicInformationPage.L.digital));
  }

  async expectDigitalVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BasicInformationPage.L.digital), timeoutMs, soft);
  }

  async clickDigital2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BasicInformationPage.L.digital2));
  }

  async expectDigital2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BasicInformationPage.L.digital2), timeoutMs, soft);
  }

  async clickPrint(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BasicInformationPage.L.print));
  }

  async expectPrintVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BasicInformationPage.L.print), timeoutMs, soft);
  }

  async clickPrint2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BasicInformationPage.L.print2));
  }

  async expectPrint2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BasicInformationPage.L.print2), timeoutMs, soft);
  }

  async clickEmailBlast(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BasicInformationPage.L.emailBlast));
  }

  async expectEmailBlastVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BasicInformationPage.L.emailBlast), timeoutMs, soft);
  }

  async clickEmailBlast2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BasicInformationPage.L.emailBlast2));
  }

  async expectEmailBlast2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BasicInformationPage.L.emailBlast2), timeoutMs, soft);
  }

  async fillProductionNotesOptional(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, BasicInformationPage.L.productionNotesOptional), value);
  }

  async clearProductionNotesOptional(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, BasicInformationPage.L.productionNotesOptional));
  }

  async getProductionNotesOptionalValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BasicInformationPage.L.productionNotesOptional));
  }

  async expectProductionNotesOptionalVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BasicInformationPage.L.productionNotesOptional), timeoutMs, soft);
  }

  async getInnerTextAutonix(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BasicInformationPage.L.autonix));
  }

  async expectAutonixVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BasicInformationPage.L.autonix), timeoutMs, soft);
  }

  async getInnerTextTargetingOptions(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BasicInformationPage.L.targetingOptions));
  }

  async expectTargetingOptionsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BasicInformationPage.L.targetingOptions), timeoutMs, soft);
  }

  async getInnerTextProductSelection(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BasicInformationPage.L.productSelection));
  }

  async expectProductSelectionVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BasicInformationPage.L.productSelection), timeoutMs, soft);
  }

  async getInnerTextBudgetSchedule(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BasicInformationPage.L.budgetSchedule));
  }

  async expectBudgetScheduleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BasicInformationPage.L.budgetSchedule), timeoutMs, soft);
  }


  async longPressBasicInformation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BasicInformationPage.L.basicInformation));
  }

  async expectBasicInformationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BasicInformationPage.L.basicInformation), timeoutMs);
  }

  async expectBasicInformationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BasicInformationPage.L.basicInformation), expected, timeoutMs);
  }

  async expectBasicInformationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BasicInformationPage.L.basicInformation), substring, timeoutMs);
  }

  async expectBasicInformationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BasicInformationPage.L.basicInformation), value, timeoutMs);
  }

  async expectBasicInformationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BasicInformationPage.L.basicInformation), timeoutMs);
  }

  async expectBasicInformationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BasicInformationPage.L.basicInformation), timeoutMs);
  }

  async expectBasicInformationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BasicInformationPage.L.basicInformation), timeoutMs);
  }

  async expectBasicInformationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BasicInformationPage.L.basicInformation), timeoutMs);
  }

  async expectBasicInformationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BasicInformationPage.L.basicInformation), timeoutMs);
  }

  async expectBasicInformationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BasicInformationPage.L.basicInformation), count, timeoutMs);
  }

  async scrollBasicInformationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BasicInformationPage.L.basicInformation));
  }

  async longPressBasicInformationLetSGet(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BasicInformationPage.L.basicInformationLetSGet));
  }

  async expectBasicInformationLetSGetHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BasicInformationPage.L.basicInformationLetSGet), timeoutMs);
  }

  async expectBasicInformationLetSGetText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BasicInformationPage.L.basicInformationLetSGet), expected, timeoutMs);
  }

  async expectBasicInformationLetSGetContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BasicInformationPage.L.basicInformationLetSGet), substring, timeoutMs);
  }

  async expectBasicInformationLetSGetValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BasicInformationPage.L.basicInformationLetSGet), value, timeoutMs);
  }

  async expectBasicInformationLetSGetEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BasicInformationPage.L.basicInformationLetSGet), timeoutMs);
  }

  async expectBasicInformationLetSGetDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BasicInformationPage.L.basicInformationLetSGet), timeoutMs);
  }

  async expectBasicInformationLetSGetChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BasicInformationPage.L.basicInformationLetSGet), timeoutMs);
  }

  async expectBasicInformationLetSGetUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BasicInformationPage.L.basicInformationLetSGet), timeoutMs);
  }

  async expectBasicInformationLetSGetFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BasicInformationPage.L.basicInformationLetSGet), timeoutMs);
  }

  async expectBasicInformationLetSGetCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BasicInformationPage.L.basicInformationLetSGet), count, timeoutMs);
  }

  async scrollBasicInformationLetSGetIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BasicInformationPage.L.basicInformationLetSGet));
  }

  async typeTextCampaignName(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, BasicInformationPage.L.campaignName), value);
  }

  async expectCampaignNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BasicInformationPage.L.campaignName), timeoutMs);
  }

  async expectCampaignNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BasicInformationPage.L.campaignName), expected, timeoutMs);
  }

  async expectCampaignNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BasicInformationPage.L.campaignName), substring, timeoutMs);
  }

  async expectCampaignNameValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BasicInformationPage.L.campaignName), value, timeoutMs);
  }

  async expectCampaignNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BasicInformationPage.L.campaignName), timeoutMs);
  }

  async expectCampaignNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BasicInformationPage.L.campaignName), timeoutMs);
  }

  async expectCampaignNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BasicInformationPage.L.campaignName), timeoutMs);
  }

  async expectCampaignNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BasicInformationPage.L.campaignName), timeoutMs);
  }

  async expectCampaignNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BasicInformationPage.L.campaignName), timeoutMs);
  }

  async expectCampaignNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BasicInformationPage.L.campaignName), count, timeoutMs);
  }

  async scrollCampaignNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BasicInformationPage.L.campaignName));
  }

  async clickCampaignSetup(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BasicInformationPage.L.campaignSetup));
  }

  async doubleClickCampaignSetup(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BasicInformationPage.L.campaignSetup));
  }

  async longPressCampaignSetup(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BasicInformationPage.L.campaignSetup));
  }

  async expectCampaignSetupHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BasicInformationPage.L.campaignSetup), timeoutMs);
  }

  async expectCampaignSetupText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BasicInformationPage.L.campaignSetup), expected, timeoutMs);
  }

  async expectCampaignSetupContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BasicInformationPage.L.campaignSetup), substring, timeoutMs);
  }

  async expectCampaignSetupValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BasicInformationPage.L.campaignSetup), value, timeoutMs);
  }

  async expectCampaignSetupEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BasicInformationPage.L.campaignSetup), timeoutMs);
  }

  async expectCampaignSetupDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BasicInformationPage.L.campaignSetup), timeoutMs);
  }

  async expectCampaignSetupChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BasicInformationPage.L.campaignSetup), timeoutMs);
  }

  async expectCampaignSetupUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BasicInformationPage.L.campaignSetup), timeoutMs);
  }

  async expectCampaignSetupFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BasicInformationPage.L.campaignSetup), timeoutMs);
  }

  async expectCampaignSetupCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BasicInformationPage.L.campaignSetup), count, timeoutMs);
  }

  async scrollCampaignSetupIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BasicInformationPage.L.campaignSetup));
  }

  async clickPlacementAndFormat(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BasicInformationPage.L.placementAndFormat));
  }

  async doubleClickPlacementAndFormat(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BasicInformationPage.L.placementAndFormat));
  }

  async longPressPlacementAndFormat(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BasicInformationPage.L.placementAndFormat));
  }

  async expectPlacementAndFormatHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BasicInformationPage.L.placementAndFormat), timeoutMs);
  }

  async expectPlacementAndFormatText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BasicInformationPage.L.placementAndFormat), expected, timeoutMs);
  }

  async expectPlacementAndFormatContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BasicInformationPage.L.placementAndFormat), substring, timeoutMs);
  }

  async expectPlacementAndFormatValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BasicInformationPage.L.placementAndFormat), value, timeoutMs);
  }

  async expectPlacementAndFormatEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BasicInformationPage.L.placementAndFormat), timeoutMs);
  }

  async expectPlacementAndFormatDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BasicInformationPage.L.placementAndFormat), timeoutMs);
  }

  async expectPlacementAndFormatChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BasicInformationPage.L.placementAndFormat), timeoutMs);
  }

  async expectPlacementAndFormatUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BasicInformationPage.L.placementAndFormat), timeoutMs);
  }

  async expectPlacementAndFormatFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BasicInformationPage.L.placementAndFormat), timeoutMs);
  }

  async expectPlacementAndFormatCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BasicInformationPage.L.placementAndFormat), count, timeoutMs);
  }

  async scrollPlacementAndFormatIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BasicInformationPage.L.placementAndFormat));
  }

  async clickSchedule(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BasicInformationPage.L.schedule));
  }

  async doubleClickSchedule(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BasicInformationPage.L.schedule));
  }

  async longPressSchedule(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BasicInformationPage.L.schedule));
  }

  async expectScheduleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BasicInformationPage.L.schedule), timeoutMs);
  }

  async expectScheduleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BasicInformationPage.L.schedule), expected, timeoutMs);
  }

  async expectScheduleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BasicInformationPage.L.schedule), substring, timeoutMs);
  }

  async expectScheduleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BasicInformationPage.L.schedule), value, timeoutMs);
  }

  async expectScheduleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BasicInformationPage.L.schedule), timeoutMs);
  }

  async expectScheduleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BasicInformationPage.L.schedule), timeoutMs);
  }

  async expectScheduleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BasicInformationPage.L.schedule), timeoutMs);
  }

  async expectScheduleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BasicInformationPage.L.schedule), timeoutMs);
  }

  async expectScheduleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BasicInformationPage.L.schedule), timeoutMs);
  }

  async expectScheduleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BasicInformationPage.L.schedule), count, timeoutMs);
  }

  async scrollScheduleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BasicInformationPage.L.schedule));
  }

  async clickCreative(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BasicInformationPage.L.creative));
  }

  async doubleClickCreative(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BasicInformationPage.L.creative));
  }

  async longPressCreative(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BasicInformationPage.L.creative));
  }

  async expectCreativeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BasicInformationPage.L.creative), timeoutMs);
  }

  async expectCreativeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BasicInformationPage.L.creative), expected, timeoutMs);
  }

  async expectCreativeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BasicInformationPage.L.creative), substring, timeoutMs);
  }

  async expectCreativeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BasicInformationPage.L.creative), value, timeoutMs);
  }

  async expectCreativeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BasicInformationPage.L.creative), timeoutMs);
  }

  async expectCreativeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BasicInformationPage.L.creative), timeoutMs);
  }

  async expectCreativeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BasicInformationPage.L.creative), timeoutMs);
  }

  async expectCreativeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BasicInformationPage.L.creative), timeoutMs);
  }

  async expectCreativeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BasicInformationPage.L.creative), timeoutMs);
  }

  async expectCreativeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BasicInformationPage.L.creative), count, timeoutMs);
  }

  async scrollCreativeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BasicInformationPage.L.creative));
  }

  async clickReviewAndPayment(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BasicInformationPage.L.reviewAndPayment));
  }

  async doubleClickReviewAndPayment(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BasicInformationPage.L.reviewAndPayment));
  }

  async longPressReviewAndPayment(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BasicInformationPage.L.reviewAndPayment));
  }

  async expectReviewAndPaymentHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BasicInformationPage.L.reviewAndPayment), timeoutMs);
  }

  async expectReviewAndPaymentText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BasicInformationPage.L.reviewAndPayment), expected, timeoutMs);
  }

  async expectReviewAndPaymentContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BasicInformationPage.L.reviewAndPayment), substring, timeoutMs);
  }

  async expectReviewAndPaymentValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BasicInformationPage.L.reviewAndPayment), value, timeoutMs);
  }

  async expectReviewAndPaymentEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BasicInformationPage.L.reviewAndPayment), timeoutMs);
  }

  async expectReviewAndPaymentDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BasicInformationPage.L.reviewAndPayment), timeoutMs);
  }

  async expectReviewAndPaymentChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BasicInformationPage.L.reviewAndPayment), timeoutMs);
  }

  async expectReviewAndPaymentUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BasicInformationPage.L.reviewAndPayment), timeoutMs);
  }

  async expectReviewAndPaymentFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BasicInformationPage.L.reviewAndPayment), timeoutMs);
  }

  async expectReviewAndPaymentCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BasicInformationPage.L.reviewAndPayment), count, timeoutMs);
  }

  async scrollReviewAndPaymentIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BasicInformationPage.L.reviewAndPayment));
  }

  async typeTextPromoCode(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, BasicInformationPage.L.promoCode), value);
  }

  async expectPromoCodeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BasicInformationPage.L.promoCode), timeoutMs);
  }

  async expectPromoCodeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BasicInformationPage.L.promoCode), expected, timeoutMs);
  }

  async expectPromoCodeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BasicInformationPage.L.promoCode), substring, timeoutMs);
  }

  async expectPromoCodeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BasicInformationPage.L.promoCode), value, timeoutMs);
  }

  async expectPromoCodeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BasicInformationPage.L.promoCode), timeoutMs);
  }

  async expectPromoCodeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BasicInformationPage.L.promoCode), timeoutMs);
  }

  async expectPromoCodeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BasicInformationPage.L.promoCode), timeoutMs);
  }

  async expectPromoCodeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BasicInformationPage.L.promoCode), timeoutMs);
  }

  async expectPromoCodeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BasicInformationPage.L.promoCode), timeoutMs);
  }

  async expectPromoCodeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BasicInformationPage.L.promoCode), count, timeoutMs);
  }

  async scrollPromoCodeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BasicInformationPage.L.promoCode));
  }

  async clickChooseYourCampaignChannel(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BasicInformationPage.L.chooseYourCampaignChannel));
  }

  async doubleClickChooseYourCampaignChannel(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BasicInformationPage.L.chooseYourCampaignChannel));
  }

  async longPressChooseYourCampaignChannel(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BasicInformationPage.L.chooseYourCampaignChannel));
  }

  async expectChooseYourCampaignChannelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BasicInformationPage.L.chooseYourCampaignChannel), timeoutMs);
  }

  async expectChooseYourCampaignChannelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BasicInformationPage.L.chooseYourCampaignChannel), expected, timeoutMs);
  }

  async expectChooseYourCampaignChannelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BasicInformationPage.L.chooseYourCampaignChannel), substring, timeoutMs);
  }

  async expectChooseYourCampaignChannelValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BasicInformationPage.L.chooseYourCampaignChannel), value, timeoutMs);
  }

  async expectChooseYourCampaignChannelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BasicInformationPage.L.chooseYourCampaignChannel), timeoutMs);
  }

  async expectChooseYourCampaignChannelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BasicInformationPage.L.chooseYourCampaignChannel), timeoutMs);
  }

  async expectChooseYourCampaignChannelChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BasicInformationPage.L.chooseYourCampaignChannel), timeoutMs);
  }

  async expectChooseYourCampaignChannelUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BasicInformationPage.L.chooseYourCampaignChannel), timeoutMs);
  }

  async expectChooseYourCampaignChannelFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BasicInformationPage.L.chooseYourCampaignChannel), timeoutMs);
  }

  async expectChooseYourCampaignChannelCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BasicInformationPage.L.chooseYourCampaignChannel), count, timeoutMs);
  }

  async scrollChooseYourCampaignChannelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BasicInformationPage.L.chooseYourCampaignChannel));
  }

  async doubleClickDigital(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BasicInformationPage.L.digital));
  }

  async longPressDigital(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BasicInformationPage.L.digital));
  }

  async expectDigitalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BasicInformationPage.L.digital), timeoutMs);
  }

  async expectDigitalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BasicInformationPage.L.digital), expected, timeoutMs);
  }

  async expectDigitalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BasicInformationPage.L.digital), substring, timeoutMs);
  }

  async expectDigitalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BasicInformationPage.L.digital), value, timeoutMs);
  }

  async expectDigitalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BasicInformationPage.L.digital), timeoutMs);
  }

  async expectDigitalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BasicInformationPage.L.digital), timeoutMs);
  }

  async expectDigitalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BasicInformationPage.L.digital), timeoutMs);
  }

  async expectDigitalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BasicInformationPage.L.digital), timeoutMs);
  }

  async expectDigitalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BasicInformationPage.L.digital), timeoutMs);
  }

  async expectDigitalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BasicInformationPage.L.digital), count, timeoutMs);
  }

  async scrollDigitalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BasicInformationPage.L.digital));
  }

  async doubleClickDigital2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BasicInformationPage.L.digital2));
  }

  async longPressDigital2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BasicInformationPage.L.digital2));
  }

  async expectDigital2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BasicInformationPage.L.digital2), timeoutMs);
  }

  async expectDigital2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BasicInformationPage.L.digital2), expected, timeoutMs);
  }

  async expectDigital2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BasicInformationPage.L.digital2), substring, timeoutMs);
  }

  async expectDigital2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BasicInformationPage.L.digital2), value, timeoutMs);
  }

  async expectDigital2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BasicInformationPage.L.digital2), timeoutMs);
  }

  async expectDigital2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BasicInformationPage.L.digital2), timeoutMs);
  }

  async expectDigital2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BasicInformationPage.L.digital2), timeoutMs);
  }

  async expectDigital2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BasicInformationPage.L.digital2), timeoutMs);
  }

  async expectDigital2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BasicInformationPage.L.digital2), timeoutMs);
  }

  async expectDigital2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BasicInformationPage.L.digital2), count, timeoutMs);
  }

  async scrollDigital2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BasicInformationPage.L.digital2));
  }

  async doubleClickPrint(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BasicInformationPage.L.print));
  }

  async longPressPrint(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BasicInformationPage.L.print));
  }

  async expectPrintHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BasicInformationPage.L.print), timeoutMs);
  }

  async expectPrintText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BasicInformationPage.L.print), expected, timeoutMs);
  }

  async expectPrintContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BasicInformationPage.L.print), substring, timeoutMs);
  }

  async expectPrintValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BasicInformationPage.L.print), value, timeoutMs);
  }

  async expectPrintEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BasicInformationPage.L.print), timeoutMs);
  }

  async expectPrintDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BasicInformationPage.L.print), timeoutMs);
  }

  async expectPrintChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BasicInformationPage.L.print), timeoutMs);
  }

  async expectPrintUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BasicInformationPage.L.print), timeoutMs);
  }

  async expectPrintFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BasicInformationPage.L.print), timeoutMs);
  }

  async expectPrintCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BasicInformationPage.L.print), count, timeoutMs);
  }

  async scrollPrintIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BasicInformationPage.L.print));
  }

  async doubleClickPrint2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BasicInformationPage.L.print2));
  }

  async longPressPrint2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BasicInformationPage.L.print2));
  }

  async expectPrint2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BasicInformationPage.L.print2), timeoutMs);
  }

  async expectPrint2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BasicInformationPage.L.print2), expected, timeoutMs);
  }

  async expectPrint2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BasicInformationPage.L.print2), substring, timeoutMs);
  }

  async expectPrint2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BasicInformationPage.L.print2), value, timeoutMs);
  }

  async expectPrint2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BasicInformationPage.L.print2), timeoutMs);
  }

  async expectPrint2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BasicInformationPage.L.print2), timeoutMs);
  }

  async expectPrint2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BasicInformationPage.L.print2), timeoutMs);
  }

  async expectPrint2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BasicInformationPage.L.print2), timeoutMs);
  }

  async expectPrint2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BasicInformationPage.L.print2), timeoutMs);
  }

  async expectPrint2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BasicInformationPage.L.print2), count, timeoutMs);
  }

  async scrollPrint2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BasicInformationPage.L.print2));
  }

  async doubleClickEmailBlast(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BasicInformationPage.L.emailBlast));
  }

  async longPressEmailBlast(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BasicInformationPage.L.emailBlast));
  }

  async expectEmailBlastHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BasicInformationPage.L.emailBlast), timeoutMs);
  }

  async expectEmailBlastText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BasicInformationPage.L.emailBlast), expected, timeoutMs);
  }

  async expectEmailBlastContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BasicInformationPage.L.emailBlast), substring, timeoutMs);
  }

  async expectEmailBlastValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BasicInformationPage.L.emailBlast), value, timeoutMs);
  }

  async expectEmailBlastEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BasicInformationPage.L.emailBlast), timeoutMs);
  }

  async expectEmailBlastDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BasicInformationPage.L.emailBlast), timeoutMs);
  }

  async expectEmailBlastChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BasicInformationPage.L.emailBlast), timeoutMs);
  }

  async expectEmailBlastUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BasicInformationPage.L.emailBlast), timeoutMs);
  }

  async expectEmailBlastFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BasicInformationPage.L.emailBlast), timeoutMs);
  }

  async expectEmailBlastCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BasicInformationPage.L.emailBlast), count, timeoutMs);
  }

  async scrollEmailBlastIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BasicInformationPage.L.emailBlast));
  }

  async doubleClickEmailBlast2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BasicInformationPage.L.emailBlast2));
  }

  async longPressEmailBlast2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BasicInformationPage.L.emailBlast2));
  }

  async expectEmailBlast2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BasicInformationPage.L.emailBlast2), timeoutMs);
  }

  async expectEmailBlast2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BasicInformationPage.L.emailBlast2), expected, timeoutMs);
  }

  async expectEmailBlast2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BasicInformationPage.L.emailBlast2), substring, timeoutMs);
  }

  async expectEmailBlast2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BasicInformationPage.L.emailBlast2), value, timeoutMs);
  }

  async expectEmailBlast2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BasicInformationPage.L.emailBlast2), timeoutMs);
  }

  async expectEmailBlast2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BasicInformationPage.L.emailBlast2), timeoutMs);
  }

  async expectEmailBlast2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BasicInformationPage.L.emailBlast2), timeoutMs);
  }

  async expectEmailBlast2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BasicInformationPage.L.emailBlast2), timeoutMs);
  }

  async expectEmailBlast2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BasicInformationPage.L.emailBlast2), timeoutMs);
  }

  async expectEmailBlast2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BasicInformationPage.L.emailBlast2), count, timeoutMs);
  }

  async scrollEmailBlast2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BasicInformationPage.L.emailBlast2));
  }

  async typeTextProductionNotesOptional(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, BasicInformationPage.L.productionNotesOptional), value);
  }

  async expectProductionNotesOptionalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BasicInformationPage.L.productionNotesOptional), timeoutMs);
  }

  async expectProductionNotesOptionalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BasicInformationPage.L.productionNotesOptional), expected, timeoutMs);
  }

  async expectProductionNotesOptionalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BasicInformationPage.L.productionNotesOptional), substring, timeoutMs);
  }

  async expectProductionNotesOptionalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BasicInformationPage.L.productionNotesOptional), value, timeoutMs);
  }

  async expectProductionNotesOptionalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BasicInformationPage.L.productionNotesOptional), timeoutMs);
  }

  async expectProductionNotesOptionalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BasicInformationPage.L.productionNotesOptional), timeoutMs);
  }

  async expectProductionNotesOptionalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BasicInformationPage.L.productionNotesOptional), timeoutMs);
  }

  async expectProductionNotesOptionalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BasicInformationPage.L.productionNotesOptional), timeoutMs);
  }

  async expectProductionNotesOptionalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BasicInformationPage.L.productionNotesOptional), timeoutMs);
  }

  async expectProductionNotesOptionalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BasicInformationPage.L.productionNotesOptional), count, timeoutMs);
  }

  async scrollProductionNotesOptionalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BasicInformationPage.L.productionNotesOptional));
  }

  async clickAutonix(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BasicInformationPage.L.autonix));
  }

  async doubleClickAutonix(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BasicInformationPage.L.autonix));
  }

  async longPressAutonix(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BasicInformationPage.L.autonix));
  }

  async expectAutonixHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BasicInformationPage.L.autonix), timeoutMs);
  }

  async expectAutonixText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BasicInformationPage.L.autonix), expected, timeoutMs);
  }

  async expectAutonixContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BasicInformationPage.L.autonix), substring, timeoutMs);
  }

  async expectAutonixValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BasicInformationPage.L.autonix), value, timeoutMs);
  }

  async expectAutonixEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BasicInformationPage.L.autonix), timeoutMs);
  }

  async expectAutonixDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BasicInformationPage.L.autonix), timeoutMs);
  }

  async expectAutonixChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BasicInformationPage.L.autonix), timeoutMs);
  }

  async expectAutonixUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BasicInformationPage.L.autonix), timeoutMs);
  }

  async expectAutonixFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BasicInformationPage.L.autonix), timeoutMs);
  }

  async expectAutonixCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BasicInformationPage.L.autonix), count, timeoutMs);
  }

  async scrollAutonixIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BasicInformationPage.L.autonix));
  }

  async clickTargetingOptions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BasicInformationPage.L.targetingOptions));
  }

  async doubleClickTargetingOptions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BasicInformationPage.L.targetingOptions));
  }

  async longPressTargetingOptions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BasicInformationPage.L.targetingOptions));
  }

  async expectTargetingOptionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BasicInformationPage.L.targetingOptions), timeoutMs);
  }

  async expectTargetingOptionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BasicInformationPage.L.targetingOptions), expected, timeoutMs);
  }

  async expectTargetingOptionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BasicInformationPage.L.targetingOptions), substring, timeoutMs);
  }

  async expectTargetingOptionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BasicInformationPage.L.targetingOptions), value, timeoutMs);
  }

  async expectTargetingOptionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BasicInformationPage.L.targetingOptions), timeoutMs);
  }

  async expectTargetingOptionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BasicInformationPage.L.targetingOptions), timeoutMs);
  }

  async expectTargetingOptionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BasicInformationPage.L.targetingOptions), timeoutMs);
  }

  async expectTargetingOptionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BasicInformationPage.L.targetingOptions), timeoutMs);
  }

  async expectTargetingOptionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BasicInformationPage.L.targetingOptions), timeoutMs);
  }

  async expectTargetingOptionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BasicInformationPage.L.targetingOptions), count, timeoutMs);
  }

  async scrollTargetingOptionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BasicInformationPage.L.targetingOptions));
  }

  async clickProductSelection(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BasicInformationPage.L.productSelection));
  }

  async doubleClickProductSelection(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BasicInformationPage.L.productSelection));
  }

  async longPressProductSelection(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BasicInformationPage.L.productSelection));
  }

  async expectProductSelectionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BasicInformationPage.L.productSelection), timeoutMs);
  }

  async expectProductSelectionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BasicInformationPage.L.productSelection), expected, timeoutMs);
  }

  async expectProductSelectionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BasicInformationPage.L.productSelection), substring, timeoutMs);
  }

  async expectProductSelectionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BasicInformationPage.L.productSelection), value, timeoutMs);
  }

  async expectProductSelectionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BasicInformationPage.L.productSelection), timeoutMs);
  }

  async expectProductSelectionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BasicInformationPage.L.productSelection), timeoutMs);
  }

  async expectProductSelectionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BasicInformationPage.L.productSelection), timeoutMs);
  }

  async expectProductSelectionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BasicInformationPage.L.productSelection), timeoutMs);
  }

  async expectProductSelectionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BasicInformationPage.L.productSelection), timeoutMs);
  }

  async expectProductSelectionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BasicInformationPage.L.productSelection), count, timeoutMs);
  }

  async scrollProductSelectionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BasicInformationPage.L.productSelection));
  }

  async clickBudgetSchedule(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BasicInformationPage.L.budgetSchedule));
  }

  async doubleClickBudgetSchedule(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BasicInformationPage.L.budgetSchedule));
  }

  async longPressBudgetSchedule(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BasicInformationPage.L.budgetSchedule));
  }

  async expectBudgetScheduleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BasicInformationPage.L.budgetSchedule), timeoutMs);
  }

  async expectBudgetScheduleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BasicInformationPage.L.budgetSchedule), expected, timeoutMs);
  }

  async expectBudgetScheduleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BasicInformationPage.L.budgetSchedule), substring, timeoutMs);
  }

  async expectBudgetScheduleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BasicInformationPage.L.budgetSchedule), value, timeoutMs);
  }

  async expectBudgetScheduleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BasicInformationPage.L.budgetSchedule), timeoutMs);
  }

  async expectBudgetScheduleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BasicInformationPage.L.budgetSchedule), timeoutMs);
  }

  async expectBudgetScheduleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BasicInformationPage.L.budgetSchedule), timeoutMs);
  }

  async expectBudgetScheduleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BasicInformationPage.L.budgetSchedule), timeoutMs);
  }

  async expectBudgetScheduleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BasicInformationPage.L.budgetSchedule), timeoutMs);
  }

  async expectBudgetScheduleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BasicInformationPage.L.budgetSchedule), count, timeoutMs);
  }

  async scrollBudgetScheduleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BasicInformationPage.L.budgetSchedule));
  }

}
