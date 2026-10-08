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

export class HomePage {
  private static readonly L = {
    email: { strategy: 'css' as const, value: '[name="email"]', role: 'textbox', actionKind: 'textbox' as const },
    next: { strategy: 'role' as const, value: 'Next', role: 'button', actionKind: 'button' as const },
    password: { strategy: 'css' as const, value: '[name="password"]', role: 'textbox', actionKind: 'textbox' as const },
    logIn: { strategy: 'role' as const, value: 'Log in', actionKind: 'button' as const },
    logIn2: { strategy: 'role' as const, value: 'Log in', role: 'button', actionKind: 'button' as const },
    campaigns: { strategy: 'role' as const, value: 'Campaigns', role: 'button', actionKind: 'button' as const },
    campaignOverview: { strategy: 'text' as const, value: 'Campaign Overview', actionKind: 'generic' as const },
    actions: { strategy: 'label' as const, value: 'Actions', role: 'button', actionKind: 'button' as const },
    copyCampaign: { strategy: 'role' as const, value: 'Copy Campaign', role: 'menuitem', actionKind: 'textbox' as const },
    copyCampaign2: { strategy: 'text' as const, value: 'Copy Campaign?', actionKind: 'generic' as const },
    copyNow: { strategy: 'role' as const, value: 'Copy Now', role: 'button', actionKind: 'button' as const },
    loadingImage: { strategy: 'altText' as const, value: 'Loading image', actionKind: 'generic' as const },
    copyOfCopyOf: { strategy: 'css' as const, value: 'div > div:nth-of-type(1) > table > tbody > tr:nth-of-type(1) > td:nth-of-type(1)', actionKind: 'generic' as const },
    deleteDraft: { strategy: 'role' as const, value: 'Delete Draft', role: 'menuitem', actionKind: 'textbox' as const },
    deleteDraftCampaign: { strategy: 'text' as const, value: 'Delete Draft Campaign', actionKind: 'generic' as const },
    deleteDraft2: { strategy: 'role' as const, value: 'Delete Draft', role: 'button', actionKind: 'button' as const },
    campaignDraftHasBeen: { strategy: 'text' as const, value: 'Campaign draft has been deleted successfully.', actionKind: 'generic' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getPageUrl(): Promise<string> {
    return this.page.url();
  }

  /** Assert current URL matches an expected string, regex, or path. */
  async expectPageUrl(expected: string | RegExp, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectPageUrl(this.page, expected, timeoutMs, soft);
  }

  /** Verify we navigated to this page's URL (captured at record time). */
  async verifyOnPageUrl(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectPageUrl(this.page, /\/(?:[?#]|$)/, timeoutMs, soft);
  }

  async fillEmail(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, HomePage.L.email), value);
  }

  async clearEmail(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, HomePage.L.email));
  }

  async getEmailValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.email));
  }

  async typeTextEmail(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, HomePage.L.email), value);
  }

  async clickEmail(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.email));
  }

  async expectEmailVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.email), timeoutMs, soft);
  }

  async expectEmailHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.email), timeoutMs, soft);
  }

  async waitForEmailVisible(timeoutMs = 30_000): Promise<void> {
    await waitForVisible(webLocator(this.page, HomePage.L.email), timeoutMs);
  }

  async waitForEmailHidden(timeoutMs = 30_000): Promise<void> {
    await waitForHidden(webLocator(this.page, HomePage.L.email), timeoutMs);
  }

  async expectEmailEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.email), timeoutMs, soft);
  }

  async expectEmailDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.email), timeoutMs, soft);
  }

  async expectEmailValue(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.email), expected, timeoutMs, soft);
  }

  async expectEmailFocused(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.email), timeoutMs, soft);
  }

  async scrollEmailIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.email));
  }

  async clickNext(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.next));
  }

  async doubleClickNext(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.next));
  }

  async hoverNext(): Promise<void> {
    await hoverWhenVisible(webLocator(this.page, HomePage.L.next));
  }

  async expectNextVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.next), timeoutMs, soft);
  }

  async expectNextHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.next), timeoutMs, soft);
  }

  async waitForNextVisible(timeoutMs = 30_000): Promise<void> {
    await waitForVisible(webLocator(this.page, HomePage.L.next), timeoutMs);
  }

  async waitForNextHidden(timeoutMs = 30_000): Promise<void> {
    await waitForHidden(webLocator(this.page, HomePage.L.next), timeoutMs);
  }

  async expectNextEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.next), timeoutMs, soft);
  }

  async expectNextDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.next), timeoutMs, soft);
  }

  async expectNextText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.next), expected, timeoutMs, soft);
  }

  async expectNextContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.next), substring, timeoutMs, soft);
  }

  async scrollNextIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.next));
  }

  async fillPassword(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, HomePage.L.password), value);
  }

  async clearPassword(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, HomePage.L.password));
  }

  async getPasswordValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.password));
  }

  async typeTextPassword(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, HomePage.L.password), value);
  }

  async clickPassword(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.password));
  }

  async expectPasswordVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.password), timeoutMs, soft);
  }

  async expectPasswordHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.password), timeoutMs, soft);
  }

  async waitForPasswordVisible(timeoutMs = 30_000): Promise<void> {
    await waitForVisible(webLocator(this.page, HomePage.L.password), timeoutMs);
  }

  async waitForPasswordHidden(timeoutMs = 30_000): Promise<void> {
    await waitForHidden(webLocator(this.page, HomePage.L.password), timeoutMs);
  }

  async expectPasswordEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.password), timeoutMs, soft);
  }

  async expectPasswordDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.password), timeoutMs, soft);
  }

  async expectPasswordValue(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.password), expected, timeoutMs, soft);
  }

  async expectPasswordFocused(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.password), timeoutMs, soft);
  }

  async scrollPasswordIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.password));
  }

  async clickLogIn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.logIn));
  }

  async doubleClickLogIn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.logIn));
  }

  async hoverLogIn(): Promise<void> {
    await hoverWhenVisible(webLocator(this.page, HomePage.L.logIn));
  }

  async expectLogInVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.logIn), timeoutMs, soft);
  }

  async expectLogInHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.logIn), timeoutMs, soft);
  }

  async waitForLogInVisible(timeoutMs = 30_000): Promise<void> {
    await waitForVisible(webLocator(this.page, HomePage.L.logIn), timeoutMs);
  }

  async waitForLogInHidden(timeoutMs = 30_000): Promise<void> {
    await waitForHidden(webLocator(this.page, HomePage.L.logIn), timeoutMs);
  }

  async expectLogInEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.logIn), timeoutMs, soft);
  }

  async expectLogInDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.logIn), timeoutMs, soft);
  }

  async expectLogInText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.logIn), expected, timeoutMs, soft);
  }

  async expectLogInContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.logIn), substring, timeoutMs, soft);
  }

  async scrollLogInIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.logIn));
  }

  async clickLogIn2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.logIn2));
  }

  async doubleClickLogIn2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.logIn2));
  }

  async hoverLogIn2(): Promise<void> {
    await hoverWhenVisible(webLocator(this.page, HomePage.L.logIn2));
  }

  async expectLogIn2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.logIn2), timeoutMs, soft);
  }

  async expectLogIn2Hidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.logIn2), timeoutMs, soft);
  }

  async waitForLogIn2Visible(timeoutMs = 30_000): Promise<void> {
    await waitForVisible(webLocator(this.page, HomePage.L.logIn2), timeoutMs);
  }

  async waitForLogIn2Hidden(timeoutMs = 30_000): Promise<void> {
    await waitForHidden(webLocator(this.page, HomePage.L.logIn2), timeoutMs);
  }

  async expectLogIn2Enabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.logIn2), timeoutMs, soft);
  }

  async expectLogIn2Disabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.logIn2), timeoutMs, soft);
  }

  async expectLogIn2Text(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.logIn2), expected, timeoutMs, soft);
  }

  async expectLogIn2ContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.logIn2), substring, timeoutMs, soft);
  }

  async scrollLogIn2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.logIn2));
  }

  async clickCampaigns(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.campaigns));
  }

  async doubleClickCampaigns(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.campaigns));
  }

  async hoverCampaigns(): Promise<void> {
    await hoverWhenVisible(webLocator(this.page, HomePage.L.campaigns));
  }

  async expectCampaignsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.campaigns), timeoutMs, soft);
  }

  async expectCampaignsHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.campaigns), timeoutMs, soft);
  }

  async waitForCampaignsVisible(timeoutMs = 30_000): Promise<void> {
    await waitForVisible(webLocator(this.page, HomePage.L.campaigns), timeoutMs);
  }

  async waitForCampaignsHidden(timeoutMs = 30_000): Promise<void> {
    await waitForHidden(webLocator(this.page, HomePage.L.campaigns), timeoutMs);
  }

  async expectCampaignsEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.campaigns), timeoutMs, soft);
  }

  async expectCampaignsDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.campaigns), timeoutMs, soft);
  }

  async expectCampaignsText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.campaigns), expected, timeoutMs, soft);
  }

  async expectCampaignsContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.campaigns), substring, timeoutMs, soft);
  }

  async scrollCampaignsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.campaigns));
  }

  async clickCampaignOverview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.campaignOverview));
  }

  async expectCampaignOverviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.campaignOverview), timeoutMs, soft);
  }

  async expectCampaignOverviewHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.campaignOverview), timeoutMs, soft);
  }

  async waitForCampaignOverviewVisible(timeoutMs = 30_000): Promise<void> {
    await waitForVisible(webLocator(this.page, HomePage.L.campaignOverview), timeoutMs);
  }

  async waitForCampaignOverviewHidden(timeoutMs = 30_000): Promise<void> {
    await waitForHidden(webLocator(this.page, HomePage.L.campaignOverview), timeoutMs);
  }

  async expectCampaignOverviewEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.campaignOverview), timeoutMs, soft);
  }

  async expectCampaignOverviewDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.campaignOverview), timeoutMs, soft);
  }

  async expectCampaignOverviewText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.campaignOverview), expected, timeoutMs, soft);
  }

  async expectCampaignOverviewContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.campaignOverview), substring, timeoutMs, soft);
  }

  async scrollCampaignOverviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.campaignOverview));
  }

  async clickActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.actions));
  }

  async doubleClickActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.actions));
  }

  async hoverActions(): Promise<void> {
    await hoverWhenVisible(webLocator(this.page, HomePage.L.actions));
  }

  async expectActionsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.actions), timeoutMs, soft);
  }

  async expectActionsHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.actions), timeoutMs, soft);
  }

  async waitForActionsVisible(timeoutMs = 30_000): Promise<void> {
    await waitForVisible(webLocator(this.page, HomePage.L.actions), timeoutMs);
  }

  async waitForActionsHidden(timeoutMs = 30_000): Promise<void> {
    await waitForHidden(webLocator(this.page, HomePage.L.actions), timeoutMs);
  }

  async expectActionsEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.actions), timeoutMs, soft);
  }

  async expectActionsDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.actions), timeoutMs, soft);
  }

  async expectActionsText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.actions), expected, timeoutMs, soft);
  }

  async expectActionsContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.actions), substring, timeoutMs, soft);
  }

  async scrollActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.actions));
  }

  async fillCopyCampaign(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, HomePage.L.copyCampaign), value);
  }

  async clearCopyCampaign(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, HomePage.L.copyCampaign));
  }

  async getCopyCampaignValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.copyCampaign));
  }

  async typeTextCopyCampaign(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, HomePage.L.copyCampaign), value);
  }

  async clickCopyCampaign(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.copyCampaign));
  }

  async expectCopyCampaignVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.copyCampaign), timeoutMs, soft);
  }

  async expectCopyCampaignHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.copyCampaign), timeoutMs, soft);
  }

  async waitForCopyCampaignVisible(timeoutMs = 30_000): Promise<void> {
    await waitForVisible(webLocator(this.page, HomePage.L.copyCampaign), timeoutMs);
  }

  async waitForCopyCampaignHidden(timeoutMs = 30_000): Promise<void> {
    await waitForHidden(webLocator(this.page, HomePage.L.copyCampaign), timeoutMs);
  }

  async expectCopyCampaignEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.copyCampaign), timeoutMs, soft);
  }

  async expectCopyCampaignDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.copyCampaign), timeoutMs, soft);
  }

  async expectCopyCampaignValue(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.copyCampaign), expected, timeoutMs, soft);
  }

  async expectCopyCampaignFocused(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.copyCampaign), timeoutMs, soft);
  }

  async scrollCopyCampaignIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.copyCampaign));
  }

  async clickCopyCampaign2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.copyCampaign2));
  }

  async expectCopyCampaign2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.copyCampaign2), timeoutMs, soft);
  }

  async expectCopyCampaign2Hidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.copyCampaign2), timeoutMs, soft);
  }

  async waitForCopyCampaign2Visible(timeoutMs = 30_000): Promise<void> {
    await waitForVisible(webLocator(this.page, HomePage.L.copyCampaign2), timeoutMs);
  }

  async waitForCopyCampaign2Hidden(timeoutMs = 30_000): Promise<void> {
    await waitForHidden(webLocator(this.page, HomePage.L.copyCampaign2), timeoutMs);
  }

  async expectCopyCampaign2Enabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.copyCampaign2), timeoutMs, soft);
  }

  async expectCopyCampaign2Disabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.copyCampaign2), timeoutMs, soft);
  }

  async expectCopyCampaign2Text(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.copyCampaign2), expected, timeoutMs, soft);
  }

  async expectCopyCampaign2ContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.copyCampaign2), substring, timeoutMs, soft);
  }

  async scrollCopyCampaign2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.copyCampaign2));
  }

  async clickCopyNow(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.copyNow));
  }

  async doubleClickCopyNow(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.copyNow));
  }

  async hoverCopyNow(): Promise<void> {
    await hoverWhenVisible(webLocator(this.page, HomePage.L.copyNow));
  }

  async expectCopyNowVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.copyNow), timeoutMs, soft);
  }

  async expectCopyNowHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.copyNow), timeoutMs, soft);
  }

  async waitForCopyNowVisible(timeoutMs = 30_000): Promise<void> {
    await waitForVisible(webLocator(this.page, HomePage.L.copyNow), timeoutMs);
  }

  async waitForCopyNowHidden(timeoutMs = 30_000): Promise<void> {
    await waitForHidden(webLocator(this.page, HomePage.L.copyNow), timeoutMs);
  }

  async expectCopyNowEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.copyNow), timeoutMs, soft);
  }

  async expectCopyNowDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.copyNow), timeoutMs, soft);
  }

  async expectCopyNowText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.copyNow), expected, timeoutMs, soft);
  }

  async expectCopyNowContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.copyNow), substring, timeoutMs, soft);
  }

  async scrollCopyNowIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.copyNow));
  }

  async clickLoadingImage(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.loadingImage));
  }

  async expectLoadingImageVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.loadingImage), timeoutMs, soft);
  }

  async expectLoadingImageHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.loadingImage), timeoutMs, soft);
  }

  async waitForLoadingImageVisible(timeoutMs = 30_000): Promise<void> {
    await waitForVisible(webLocator(this.page, HomePage.L.loadingImage), timeoutMs);
  }

  async waitForLoadingImageHidden(timeoutMs = 30_000): Promise<void> {
    await waitForHidden(webLocator(this.page, HomePage.L.loadingImage), timeoutMs);
  }

  async expectLoadingImageEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.loadingImage), timeoutMs, soft);
  }

  async expectLoadingImageDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.loadingImage), timeoutMs, soft);
  }

  async expectLoadingImageText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.loadingImage), expected, timeoutMs, soft);
  }

  async expectLoadingImageContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.loadingImage), substring, timeoutMs, soft);
  }

  async scrollLoadingImageIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.loadingImage));
  }

  async clickCopyOfCopyOf(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.copyOfCopyOf));
  }

  async expectCopyOfCopyOfVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.copyOfCopyOf), timeoutMs, soft);
  }

  async expectCopyOfCopyOfHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.copyOfCopyOf), timeoutMs, soft);
  }

  async waitForCopyOfCopyOfVisible(timeoutMs = 30_000): Promise<void> {
    await waitForVisible(webLocator(this.page, HomePage.L.copyOfCopyOf), timeoutMs);
  }

  async waitForCopyOfCopyOfHidden(timeoutMs = 30_000): Promise<void> {
    await waitForHidden(webLocator(this.page, HomePage.L.copyOfCopyOf), timeoutMs);
  }

  async expectCopyOfCopyOfEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.copyOfCopyOf), timeoutMs, soft);
  }

  async expectCopyOfCopyOfDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.copyOfCopyOf), timeoutMs, soft);
  }

  async expectCopyOfCopyOfText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.copyOfCopyOf), expected, timeoutMs, soft);
  }

  async expectCopyOfCopyOfContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.copyOfCopyOf), substring, timeoutMs, soft);
  }

  async scrollCopyOfCopyOfIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.copyOfCopyOf));
  }

  async fillDeleteDraft(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, HomePage.L.deleteDraft), value);
  }

  async clearDeleteDraft(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, HomePage.L.deleteDraft));
  }

  async getDeleteDraftValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.deleteDraft));
  }

  async typeTextDeleteDraft(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, HomePage.L.deleteDraft), value);
  }

  async clickDeleteDraft(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.deleteDraft));
  }

  async expectDeleteDraftVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.deleteDraft), timeoutMs, soft);
  }

  async expectDeleteDraftHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.deleteDraft), timeoutMs, soft);
  }

  async waitForDeleteDraftVisible(timeoutMs = 30_000): Promise<void> {
    await waitForVisible(webLocator(this.page, HomePage.L.deleteDraft), timeoutMs);
  }

  async waitForDeleteDraftHidden(timeoutMs = 30_000): Promise<void> {
    await waitForHidden(webLocator(this.page, HomePage.L.deleteDraft), timeoutMs);
  }

  async expectDeleteDraftEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.deleteDraft), timeoutMs, soft);
  }

  async expectDeleteDraftDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.deleteDraft), timeoutMs, soft);
  }

  async expectDeleteDraftValue(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.deleteDraft), expected, timeoutMs, soft);
  }

  async expectDeleteDraftFocused(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.deleteDraft), timeoutMs, soft);
  }

  async scrollDeleteDraftIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.deleteDraft));
  }

  async clickDeleteDraftCampaign(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.deleteDraftCampaign));
  }

  async expectDeleteDraftCampaignVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.deleteDraftCampaign), timeoutMs, soft);
  }

  async expectDeleteDraftCampaignHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.deleteDraftCampaign), timeoutMs, soft);
  }

  async waitForDeleteDraftCampaignVisible(timeoutMs = 30_000): Promise<void> {
    await waitForVisible(webLocator(this.page, HomePage.L.deleteDraftCampaign), timeoutMs);
  }

  async waitForDeleteDraftCampaignHidden(timeoutMs = 30_000): Promise<void> {
    await waitForHidden(webLocator(this.page, HomePage.L.deleteDraftCampaign), timeoutMs);
  }

  async expectDeleteDraftCampaignEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.deleteDraftCampaign), timeoutMs, soft);
  }

  async expectDeleteDraftCampaignDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.deleteDraftCampaign), timeoutMs, soft);
  }

  async expectDeleteDraftCampaignText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.deleteDraftCampaign), expected, timeoutMs, soft);
  }

  async expectDeleteDraftCampaignContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.deleteDraftCampaign), substring, timeoutMs, soft);
  }

  async scrollDeleteDraftCampaignIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.deleteDraftCampaign));
  }

  async clickDeleteDraft2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.deleteDraft2));
  }

  async doubleClickDeleteDraft2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.deleteDraft2));
  }

  async hoverDeleteDraft2(): Promise<void> {
    await hoverWhenVisible(webLocator(this.page, HomePage.L.deleteDraft2));
  }

  async expectDeleteDraft2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.deleteDraft2), timeoutMs, soft);
  }

  async expectDeleteDraft2Hidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.deleteDraft2), timeoutMs, soft);
  }

  async waitForDeleteDraft2Visible(timeoutMs = 30_000): Promise<void> {
    await waitForVisible(webLocator(this.page, HomePage.L.deleteDraft2), timeoutMs);
  }

  async waitForDeleteDraft2Hidden(timeoutMs = 30_000): Promise<void> {
    await waitForHidden(webLocator(this.page, HomePage.L.deleteDraft2), timeoutMs);
  }

  async expectDeleteDraft2Enabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.deleteDraft2), timeoutMs, soft);
  }

  async expectDeleteDraft2Disabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.deleteDraft2), timeoutMs, soft);
  }

  async expectDeleteDraft2Text(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.deleteDraft2), expected, timeoutMs, soft);
  }

  async expectDeleteDraft2ContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.deleteDraft2), substring, timeoutMs, soft);
  }

  async scrollDeleteDraft2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.deleteDraft2));
  }

  async clickCampaignDraftHasBeen(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.campaignDraftHasBeen));
  }

  async expectCampaignDraftHasBeenVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.campaignDraftHasBeen), timeoutMs, soft);
  }

  async expectCampaignDraftHasBeenHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.campaignDraftHasBeen), timeoutMs, soft);
  }

  async waitForCampaignDraftHasBeenVisible(timeoutMs = 30_000): Promise<void> {
    await waitForVisible(webLocator(this.page, HomePage.L.campaignDraftHasBeen), timeoutMs);
  }

  async waitForCampaignDraftHasBeenHidden(timeoutMs = 30_000): Promise<void> {
    await waitForHidden(webLocator(this.page, HomePage.L.campaignDraftHasBeen), timeoutMs);
  }

  async expectCampaignDraftHasBeenEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.campaignDraftHasBeen), timeoutMs, soft);
  }

  async expectCampaignDraftHasBeenDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.campaignDraftHasBeen), timeoutMs, soft);
  }

  async expectCampaignDraftHasBeenText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.campaignDraftHasBeen), expected, timeoutMs, soft);
  }

  async expectCampaignDraftHasBeenContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.campaignDraftHasBeen), substring, timeoutMs, soft);
  }

  async scrollCampaignDraftHasBeenIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.campaignDraftHasBeen));
  }


  async expectEmailText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.email), expected, timeoutMs);
  }

  async expectEmailContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.email), substring, timeoutMs);
  }

  async expectEmailChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.email), timeoutMs);
  }

  async expectEmailUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.email), timeoutMs);
  }

  async expectEmailCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.email), count, timeoutMs);
  }

  async longPressNext(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.next));
  }

  async expectNextValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.next), value, timeoutMs);
  }

  async expectNextChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.next), timeoutMs);
  }

  async expectNextUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.next), timeoutMs);
  }

  async expectNextFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.next), timeoutMs);
  }

  async expectNextCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.next), count, timeoutMs);
  }

  async expectPasswordText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.password), expected, timeoutMs);
  }

  async expectPasswordContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.password), substring, timeoutMs);
  }

  async expectPasswordChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.password), timeoutMs);
  }

  async expectPasswordUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.password), timeoutMs);
  }

  async expectPasswordCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.password), count, timeoutMs);
  }

  async longPressLogIn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.logIn));
  }

  async expectLogInValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.logIn), value, timeoutMs);
  }

  async expectLogInChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.logIn), timeoutMs);
  }

  async expectLogInUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.logIn), timeoutMs);
  }

  async expectLogInFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.logIn), timeoutMs);
  }

  async expectLogInCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.logIn), count, timeoutMs);
  }

  async longPressLogIn2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.logIn2));
  }

  async expectLogIn2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.logIn2), value, timeoutMs);
  }

  async expectLogIn2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.logIn2), timeoutMs);
  }

  async expectLogIn2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.logIn2), timeoutMs);
  }

  async expectLogIn2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.logIn2), timeoutMs);
  }

  async expectLogIn2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.logIn2), count, timeoutMs);
  }

  async longPressCampaigns(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.campaigns));
  }

  async expectCampaignsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.campaigns), value, timeoutMs);
  }

  async expectCampaignsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.campaigns), timeoutMs);
  }

  async expectCampaignsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.campaigns), timeoutMs);
  }

  async expectCampaignsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.campaigns), timeoutMs);
  }

  async expectCampaignsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.campaigns), count, timeoutMs);
  }

  async doubleClickCampaignOverview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.campaignOverview));
  }

  async longPressCampaignOverview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.campaignOverview));
  }

  async expectCampaignOverviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.campaignOverview), value, timeoutMs);
  }

  async expectCampaignOverviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.campaignOverview), timeoutMs);
  }

  async expectCampaignOverviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.campaignOverview), timeoutMs);
  }

  async expectCampaignOverviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.campaignOverview), timeoutMs);
  }

  async expectCampaignOverviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.campaignOverview), count, timeoutMs);
  }

  async longPressActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.actions));
  }

  async expectActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.actions), value, timeoutMs);
  }

  async expectActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.actions), timeoutMs);
  }

  async expectActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.actions), timeoutMs);
  }

  async expectActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.actions), timeoutMs);
  }

  async expectActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.actions), count, timeoutMs);
  }

  async expectCopyCampaignText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.copyCampaign), expected, timeoutMs);
  }

  async expectCopyCampaignContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.copyCampaign), substring, timeoutMs);
  }

  async expectCopyCampaignChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.copyCampaign), timeoutMs);
  }

  async expectCopyCampaignUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.copyCampaign), timeoutMs);
  }

  async expectCopyCampaignCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.copyCampaign), count, timeoutMs);
  }

  async doubleClickCopyCampaign2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.copyCampaign2));
  }

  async longPressCopyCampaign2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.copyCampaign2));
  }

  async expectCopyCampaign2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.copyCampaign2), value, timeoutMs);
  }

  async expectCopyCampaign2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.copyCampaign2), timeoutMs);
  }

  async expectCopyCampaign2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.copyCampaign2), timeoutMs);
  }

  async expectCopyCampaign2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.copyCampaign2), timeoutMs);
  }

  async expectCopyCampaign2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.copyCampaign2), count, timeoutMs);
  }

  async longPressCopyNow(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.copyNow));
  }

  async expectCopyNowValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.copyNow), value, timeoutMs);
  }

  async expectCopyNowChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.copyNow), timeoutMs);
  }

  async expectCopyNowUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.copyNow), timeoutMs);
  }

  async expectCopyNowFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.copyNow), timeoutMs);
  }

  async expectCopyNowCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.copyNow), count, timeoutMs);
  }

  async doubleClickLoadingImage(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.loadingImage));
  }

  async longPressLoadingImage(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.loadingImage));
  }

  async expectLoadingImageValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.loadingImage), value, timeoutMs);
  }

  async expectLoadingImageChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.loadingImage), timeoutMs);
  }

  async expectLoadingImageUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.loadingImage), timeoutMs);
  }

  async expectLoadingImageFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.loadingImage), timeoutMs);
  }

  async expectLoadingImageCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.loadingImage), count, timeoutMs);
  }

  async doubleClickCopyOfCopyOf(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.copyOfCopyOf));
  }

  async longPressCopyOfCopyOf(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.copyOfCopyOf));
  }

  async expectCopyOfCopyOfValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.copyOfCopyOf), value, timeoutMs);
  }

  async expectCopyOfCopyOfChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.copyOfCopyOf), timeoutMs);
  }

  async expectCopyOfCopyOfUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.copyOfCopyOf), timeoutMs);
  }

  async expectCopyOfCopyOfFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.copyOfCopyOf), timeoutMs);
  }

  async expectCopyOfCopyOfCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.copyOfCopyOf), count, timeoutMs);
  }

  async expectDeleteDraftText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.deleteDraft), expected, timeoutMs);
  }

  async expectDeleteDraftContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.deleteDraft), substring, timeoutMs);
  }

  async expectDeleteDraftChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.deleteDraft), timeoutMs);
  }

  async expectDeleteDraftUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.deleteDraft), timeoutMs);
  }

  async expectDeleteDraftCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.deleteDraft), count, timeoutMs);
  }

  async doubleClickDeleteDraftCampaign(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.deleteDraftCampaign));
  }

  async longPressDeleteDraftCampaign(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.deleteDraftCampaign));
  }

  async expectDeleteDraftCampaignValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.deleteDraftCampaign), value, timeoutMs);
  }

  async expectDeleteDraftCampaignChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.deleteDraftCampaign), timeoutMs);
  }

  async expectDeleteDraftCampaignUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.deleteDraftCampaign), timeoutMs);
  }

  async expectDeleteDraftCampaignFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.deleteDraftCampaign), timeoutMs);
  }

  async expectDeleteDraftCampaignCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.deleteDraftCampaign), count, timeoutMs);
  }

  async longPressDeleteDraft2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.deleteDraft2));
  }

  async expectDeleteDraft2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.deleteDraft2), value, timeoutMs);
  }

  async expectDeleteDraft2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.deleteDraft2), timeoutMs);
  }

  async expectDeleteDraft2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.deleteDraft2), timeoutMs);
  }

  async expectDeleteDraft2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.deleteDraft2), timeoutMs);
  }

  async expectDeleteDraft2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.deleteDraft2), count, timeoutMs);
  }

  async doubleClickCampaignDraftHasBeen(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.campaignDraftHasBeen));
  }

  async longPressCampaignDraftHasBeen(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.campaignDraftHasBeen));
  }

  async expectCampaignDraftHasBeenValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.campaignDraftHasBeen), value, timeoutMs);
  }

  async expectCampaignDraftHasBeenChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.campaignDraftHasBeen), timeoutMs);
  }

  async expectCampaignDraftHasBeenUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.campaignDraftHasBeen), timeoutMs);
  }

  async expectCampaignDraftHasBeenFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.campaignDraftHasBeen), timeoutMs);
  }

  async expectCampaignDraftHasBeenCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.campaignDraftHasBeen), count, timeoutMs);
  }

}
