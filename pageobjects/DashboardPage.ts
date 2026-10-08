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

export class DashboardPage {
  private static readonly L = {
    logo: { strategy: 'css' as const, value: '#navbar-logo-expanded', role: 'img', actionKind: 'generic' as const },
    collapseNavbar: { strategy: 'role' as const, value: 'Collapse navbar', role: 'button', actionKind: 'button' as const },
    dashboard: { strategy: 'role' as const, value: 'Dashboard', role: 'button', actionKind: 'button' as const },
    campaigns: { strategy: 'role' as const, value: 'Campaigns', role: 'button', actionKind: 'button' as const },
    gallery: { strategy: 'role' as const, value: 'Gallery', role: 'button', actionKind: 'button' as const },
    showMenu: { strategy: 'role' as const, value: 'Show Menu', role: 'button', actionKind: 'button' as const },
    bookNewCampaign: { strategy: 'role' as const, value: 'Book New Campaign', role: 'button', actionKind: 'button' as const },
    totalCampaigns: { strategy: 'role' as const, value: 'Total Campaigns', role: 'heading', level: 6, actionKind: 'text' as const },
    totalBudget: { strategy: 'role' as const, value: 'Total Budget', role: 'heading', level: 6, actionKind: 'text' as const },
    element: { strategy: 'role' as const, value: '$11,546.05', role: 'heading', level: 4, actionKind: 'text' as const },
    completedCampaigns: { strategy: 'role' as const, value: 'Completed Campaigns', role: 'heading', level: 6, actionKind: 'text' as const },
    avgBudget: { strategy: 'role' as const, value: 'Avg. Budget', role: 'heading', level: 6, actionKind: 'text' as const },
    element2: { strategy: 'role' as const, value: '$444.08', role: 'heading', level: 4, actionKind: 'text' as const },
    campaigns2: { strategy: 'css' as const, value: '#campaign-selection', role: 'combobox', actionKind: 'generic' as const },
    chooseDateSelectedDate: { strategy: 'role' as const, value: 'Choose date, selected date is Sep 6, 2026', role: 'button', actionKind: 'button' as const },
    from: { strategy: 'css' as const, value: '#from-date[name="from-date"]', role: 'textbox', actionKind: 'textbox' as const },
    chooseDateSelectedDateButton: { strategy: 'role' as const, value: 'Choose date, selected date is Oct 6, 2026', role: 'button', actionKind: 'button' as const },
    to: { strategy: 'css' as const, value: '#to-date[name="to-date"]', role: 'textbox', actionKind: 'textbox' as const },
    drillDown: { strategy: 'role' as const, value: 'Drill Down', role: 'button', actionKind: 'button' as const },
    openIntercomMessenger: { strategy: 'role' as const, value: 'Open Intercom Messenger', role: 'button', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickLogo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.logo));
  }

  async expectLogoVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.logo), timeoutMs, soft);
  }

  async clickCollapseNavbar(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.collapseNavbar));
  }

  async doubleClickCollapseNavbar(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.collapseNavbar));
  }

  async expectCollapseNavbarVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.collapseNavbar), timeoutMs, soft);
  }

  async clickDashboard(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.dashboard));
  }

  async doubleClickDashboard(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.dashboard));
  }

  async expectDashboardVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.dashboard), timeoutMs, soft);
  }

  async clickCampaigns(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.campaigns));
  }

  async doubleClickCampaigns(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.campaigns));
  }

  async expectCampaignsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.campaigns), timeoutMs, soft);
  }

  async clickGallery(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.gallery));
  }

  async doubleClickGallery(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.gallery));
  }

  async expectGalleryVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.gallery), timeoutMs, soft);
  }

  async clickShowMenu(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.showMenu));
  }

  async doubleClickShowMenu(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.showMenu));
  }

  async expectShowMenuVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.showMenu), timeoutMs, soft);
  }

  async clickBookNewCampaign(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.bookNewCampaign));
  }

  async doubleClickBookNewCampaign(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.bookNewCampaign));
  }

  async expectBookNewCampaignVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.bookNewCampaign), timeoutMs, soft);
  }

  async getInnerTextTotalCampaigns(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.totalCampaigns));
  }

  async expectTotalCampaignsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.totalCampaigns), timeoutMs, soft);
  }

  async getInnerTextTotalBudget(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.totalBudget));
  }

  async expectTotalBudgetVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.totalBudget), timeoutMs, soft);
  }

  async getInnerTextElement(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.element));
  }

  async expectElementVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.element), timeoutMs, soft);
  }

  async getInnerTextCompletedCampaigns(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.completedCampaigns));
  }

  async expectCompletedCampaignsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.completedCampaigns), timeoutMs, soft);
  }

  async getInnerTextAvgBudget(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.avgBudget));
  }

  async expectAvgBudgetVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.avgBudget), timeoutMs, soft);
  }

  async getInnerTextElement2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.element2));
  }

  async expectElement2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.element2), timeoutMs, soft);
  }

  async clickCampaigns2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.campaigns2));
  }

  async expectCampaigns2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.campaigns2), timeoutMs, soft);
  }

  async clickChooseDateSelectedDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.chooseDateSelectedDate));
  }

  async doubleClickChooseDateSelectedDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.chooseDateSelectedDate));
  }

  async expectChooseDateSelectedDateVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.chooseDateSelectedDate), timeoutMs, soft);
  }

  async fillFrom(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, DashboardPage.L.from), value);
  }

  async clearFrom(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, DashboardPage.L.from));
  }

  async getFromValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.from));
  }

  async expectFromVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.from), timeoutMs, soft);
  }

  async clickChooseDateSelectedDateButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.chooseDateSelectedDateButton));
  }

  async doubleClickChooseDateSelectedDateButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.chooseDateSelectedDateButton));
  }

  async expectChooseDateSelectedDateButtonVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.chooseDateSelectedDateButton), timeoutMs, soft);
  }

  async fillTo(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, DashboardPage.L.to), value);
  }

  async clearTo(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, DashboardPage.L.to));
  }

  async getToValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.to));
  }

  async expectToVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.to), timeoutMs, soft);
  }

  async clickDrillDown(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.drillDown));
  }

  async doubleClickDrillDown(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.drillDown));
  }

  async expectDrillDownVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.drillDown), timeoutMs, soft);
  }

  async clickOpenIntercomMessenger(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.openIntercomMessenger));
  }

  async doubleClickOpenIntercomMessenger(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.openIntercomMessenger));
  }

  async expectOpenIntercomMessengerVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.openIntercomMessenger), timeoutMs, soft);
  }


  async doubleClickLogo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.logo));
  }

  async longPressLogo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.logo));
  }

  async expectLogoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.logo), timeoutMs);
  }

  async expectLogoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.logo), expected, timeoutMs);
  }

  async expectLogoContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.logo), substring, timeoutMs);
  }

  async expectLogoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.logo), value, timeoutMs);
  }

  async expectLogoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.logo), timeoutMs);
  }

  async expectLogoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.logo), timeoutMs);
  }

  async expectLogoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.logo), timeoutMs);
  }

  async expectLogoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.logo), timeoutMs);
  }

  async expectLogoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.logo), timeoutMs);
  }

  async expectLogoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.logo), count, timeoutMs);
  }

  async scrollLogoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.logo));
  }

  async longPressCollapseNavbar(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.collapseNavbar));
  }

  async expectCollapseNavbarHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.collapseNavbar), timeoutMs);
  }

  async expectCollapseNavbarText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.collapseNavbar), expected, timeoutMs);
  }

  async expectCollapseNavbarContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.collapseNavbar), substring, timeoutMs);
  }

  async expectCollapseNavbarValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.collapseNavbar), value, timeoutMs);
  }

  async expectCollapseNavbarEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.collapseNavbar), timeoutMs);
  }

  async expectCollapseNavbarDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.collapseNavbar), timeoutMs);
  }

  async expectCollapseNavbarChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.collapseNavbar), timeoutMs);
  }

  async expectCollapseNavbarUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.collapseNavbar), timeoutMs);
  }

  async expectCollapseNavbarFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.collapseNavbar), timeoutMs);
  }

  async expectCollapseNavbarCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.collapseNavbar), count, timeoutMs);
  }

  async scrollCollapseNavbarIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.collapseNavbar));
  }

  async longPressDashboard(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.dashboard));
  }

  async expectDashboardHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.dashboard), timeoutMs);
  }

  async expectDashboardText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.dashboard), expected, timeoutMs);
  }

  async expectDashboardContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.dashboard), substring, timeoutMs);
  }

  async expectDashboardValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.dashboard), value, timeoutMs);
  }

  async expectDashboardEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.dashboard), timeoutMs);
  }

  async expectDashboardDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.dashboard), timeoutMs);
  }

  async expectDashboardChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.dashboard), timeoutMs);
  }

  async expectDashboardUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.dashboard), timeoutMs);
  }

  async expectDashboardFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.dashboard), timeoutMs);
  }

  async expectDashboardCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.dashboard), count, timeoutMs);
  }

  async scrollDashboardIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.dashboard));
  }

  async longPressCampaigns(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.campaigns));
  }

  async expectCampaignsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.campaigns), timeoutMs);
  }

  async expectCampaignsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.campaigns), expected, timeoutMs);
  }

  async expectCampaignsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.campaigns), substring, timeoutMs);
  }

  async expectCampaignsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.campaigns), value, timeoutMs);
  }

  async expectCampaignsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.campaigns), timeoutMs);
  }

  async expectCampaignsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.campaigns), timeoutMs);
  }

  async expectCampaignsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.campaigns), timeoutMs);
  }

  async expectCampaignsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.campaigns), timeoutMs);
  }

  async expectCampaignsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.campaigns), timeoutMs);
  }

  async expectCampaignsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.campaigns), count, timeoutMs);
  }

  async scrollCampaignsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.campaigns));
  }

  async longPressGallery(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.gallery));
  }

  async expectGalleryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.gallery), timeoutMs);
  }

  async expectGalleryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.gallery), expected, timeoutMs);
  }

  async expectGalleryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.gallery), substring, timeoutMs);
  }

  async expectGalleryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.gallery), value, timeoutMs);
  }

  async expectGalleryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.gallery), timeoutMs);
  }

  async expectGalleryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.gallery), timeoutMs);
  }

  async expectGalleryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.gallery), timeoutMs);
  }

  async expectGalleryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.gallery), timeoutMs);
  }

  async expectGalleryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.gallery), timeoutMs);
  }

  async expectGalleryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.gallery), count, timeoutMs);
  }

  async scrollGalleryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.gallery));
  }

  async longPressShowMenu(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.showMenu));
  }

  async expectShowMenuHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.showMenu), timeoutMs);
  }

  async expectShowMenuText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.showMenu), expected, timeoutMs);
  }

  async expectShowMenuContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.showMenu), substring, timeoutMs);
  }

  async expectShowMenuValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.showMenu), value, timeoutMs);
  }

  async expectShowMenuEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.showMenu), timeoutMs);
  }

  async expectShowMenuDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.showMenu), timeoutMs);
  }

  async expectShowMenuChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.showMenu), timeoutMs);
  }

  async expectShowMenuUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.showMenu), timeoutMs);
  }

  async expectShowMenuFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.showMenu), timeoutMs);
  }

  async expectShowMenuCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.showMenu), count, timeoutMs);
  }

  async scrollShowMenuIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.showMenu));
  }

  async longPressBookNewCampaign(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.bookNewCampaign));
  }

  async expectBookNewCampaignHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.bookNewCampaign), timeoutMs);
  }

  async expectBookNewCampaignText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.bookNewCampaign), expected, timeoutMs);
  }

  async expectBookNewCampaignContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.bookNewCampaign), substring, timeoutMs);
  }

  async expectBookNewCampaignValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.bookNewCampaign), value, timeoutMs);
  }

  async expectBookNewCampaignEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.bookNewCampaign), timeoutMs);
  }

  async expectBookNewCampaignDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.bookNewCampaign), timeoutMs);
  }

  async expectBookNewCampaignChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.bookNewCampaign), timeoutMs);
  }

  async expectBookNewCampaignUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.bookNewCampaign), timeoutMs);
  }

  async expectBookNewCampaignFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.bookNewCampaign), timeoutMs);
  }

  async expectBookNewCampaignCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.bookNewCampaign), count, timeoutMs);
  }

  async scrollBookNewCampaignIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.bookNewCampaign));
  }

  async clickTotalCampaigns(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.totalCampaigns));
  }

  async doubleClickTotalCampaigns(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.totalCampaigns));
  }

  async longPressTotalCampaigns(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.totalCampaigns));
  }

  async expectTotalCampaignsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.totalCampaigns), timeoutMs);
  }

  async expectTotalCampaignsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.totalCampaigns), expected, timeoutMs);
  }

  async expectTotalCampaignsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.totalCampaigns), substring, timeoutMs);
  }

  async expectTotalCampaignsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.totalCampaigns), value, timeoutMs);
  }

  async expectTotalCampaignsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.totalCampaigns), timeoutMs);
  }

  async expectTotalCampaignsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.totalCampaigns), timeoutMs);
  }

  async expectTotalCampaignsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.totalCampaigns), timeoutMs);
  }

  async expectTotalCampaignsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.totalCampaigns), timeoutMs);
  }

  async expectTotalCampaignsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.totalCampaigns), timeoutMs);
  }

  async expectTotalCampaignsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.totalCampaigns), count, timeoutMs);
  }

  async scrollTotalCampaignsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.totalCampaigns));
  }

  async clickTotalBudget(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.totalBudget));
  }

  async doubleClickTotalBudget(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.totalBudget));
  }

  async longPressTotalBudget(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.totalBudget));
  }

  async expectTotalBudgetHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.totalBudget), timeoutMs);
  }

  async expectTotalBudgetText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.totalBudget), expected, timeoutMs);
  }

  async expectTotalBudgetContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.totalBudget), substring, timeoutMs);
  }

  async expectTotalBudgetValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.totalBudget), value, timeoutMs);
  }

  async expectTotalBudgetEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.totalBudget), timeoutMs);
  }

  async expectTotalBudgetDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.totalBudget), timeoutMs);
  }

  async expectTotalBudgetChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.totalBudget), timeoutMs);
  }

  async expectTotalBudgetUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.totalBudget), timeoutMs);
  }

  async expectTotalBudgetFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.totalBudget), timeoutMs);
  }

  async expectTotalBudgetCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.totalBudget), count, timeoutMs);
  }

  async scrollTotalBudgetIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.totalBudget));
  }

  async clickElement(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.element));
  }

  async doubleClickElement(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.element));
  }

  async longPressElement(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.element));
  }

  async expectElementHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.element), timeoutMs);
  }

  async expectElementText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.element), expected, timeoutMs);
  }

  async expectElementContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.element), substring, timeoutMs);
  }

  async expectElementValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.element), value, timeoutMs);
  }

  async expectElementEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.element), timeoutMs);
  }

  async expectElementDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.element), timeoutMs);
  }

  async expectElementChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.element), timeoutMs);
  }

  async expectElementUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.element), timeoutMs);
  }

  async expectElementFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.element), timeoutMs);
  }

  async expectElementCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.element), count, timeoutMs);
  }

  async scrollElementIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.element));
  }

  async clickCompletedCampaigns(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.completedCampaigns));
  }

  async doubleClickCompletedCampaigns(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.completedCampaigns));
  }

  async longPressCompletedCampaigns(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.completedCampaigns));
  }

  async expectCompletedCampaignsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.completedCampaigns), timeoutMs);
  }

  async expectCompletedCampaignsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.completedCampaigns), expected, timeoutMs);
  }

  async expectCompletedCampaignsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.completedCampaigns), substring, timeoutMs);
  }

  async expectCompletedCampaignsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.completedCampaigns), value, timeoutMs);
  }

  async expectCompletedCampaignsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.completedCampaigns), timeoutMs);
  }

  async expectCompletedCampaignsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.completedCampaigns), timeoutMs);
  }

  async expectCompletedCampaignsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.completedCampaigns), timeoutMs);
  }

  async expectCompletedCampaignsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.completedCampaigns), timeoutMs);
  }

  async expectCompletedCampaignsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.completedCampaigns), timeoutMs);
  }

  async expectCompletedCampaignsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.completedCampaigns), count, timeoutMs);
  }

  async scrollCompletedCampaignsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.completedCampaigns));
  }

  async clickAvgBudget(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.avgBudget));
  }

  async doubleClickAvgBudget(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.avgBudget));
  }

  async longPressAvgBudget(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.avgBudget));
  }

  async expectAvgBudgetHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.avgBudget), timeoutMs);
  }

  async expectAvgBudgetText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.avgBudget), expected, timeoutMs);
  }

  async expectAvgBudgetContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.avgBudget), substring, timeoutMs);
  }

  async expectAvgBudgetValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.avgBudget), value, timeoutMs);
  }

  async expectAvgBudgetEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.avgBudget), timeoutMs);
  }

  async expectAvgBudgetDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.avgBudget), timeoutMs);
  }

  async expectAvgBudgetChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.avgBudget), timeoutMs);
  }

  async expectAvgBudgetUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.avgBudget), timeoutMs);
  }

  async expectAvgBudgetFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.avgBudget), timeoutMs);
  }

  async expectAvgBudgetCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.avgBudget), count, timeoutMs);
  }

  async scrollAvgBudgetIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.avgBudget));
  }

  async clickElement2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.element2));
  }

  async doubleClickElement2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.element2));
  }

  async longPressElement2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.element2));
  }

  async expectElement2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.element2), timeoutMs);
  }

  async expectElement2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.element2), expected, timeoutMs);
  }

  async expectElement2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.element2), substring, timeoutMs);
  }

  async expectElement2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.element2), value, timeoutMs);
  }

  async expectElement2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.element2), timeoutMs);
  }

  async expectElement2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.element2), timeoutMs);
  }

  async expectElement2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.element2), timeoutMs);
  }

  async expectElement2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.element2), timeoutMs);
  }

  async expectElement2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.element2), timeoutMs);
  }

  async expectElement2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.element2), count, timeoutMs);
  }

  async scrollElement2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.element2));
  }

  async doubleClickCampaigns2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.campaigns2));
  }

  async longPressCampaigns2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.campaigns2));
  }

  async expectCampaigns2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.campaigns2), timeoutMs);
  }

  async expectCampaigns2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.campaigns2), expected, timeoutMs);
  }

  async expectCampaigns2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.campaigns2), substring, timeoutMs);
  }

  async expectCampaigns2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.campaigns2), value, timeoutMs);
  }

  async expectCampaigns2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.campaigns2), timeoutMs);
  }

  async expectCampaigns2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.campaigns2), timeoutMs);
  }

  async expectCampaigns2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.campaigns2), timeoutMs);
  }

  async expectCampaigns2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.campaigns2), timeoutMs);
  }

  async expectCampaigns2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.campaigns2), timeoutMs);
  }

  async expectCampaigns2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.campaigns2), count, timeoutMs);
  }

  async scrollCampaigns2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.campaigns2));
  }

  async longPressChooseDateSelectedDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.chooseDateSelectedDate));
  }

  async expectChooseDateSelectedDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.chooseDateSelectedDate), timeoutMs);
  }

  async expectChooseDateSelectedDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.chooseDateSelectedDate), expected, timeoutMs);
  }

  async expectChooseDateSelectedDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.chooseDateSelectedDate), substring, timeoutMs);
  }

  async expectChooseDateSelectedDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.chooseDateSelectedDate), value, timeoutMs);
  }

  async expectChooseDateSelectedDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.chooseDateSelectedDate), timeoutMs);
  }

  async expectChooseDateSelectedDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.chooseDateSelectedDate), timeoutMs);
  }

  async expectChooseDateSelectedDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.chooseDateSelectedDate), timeoutMs);
  }

  async expectChooseDateSelectedDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.chooseDateSelectedDate), timeoutMs);
  }

  async expectChooseDateSelectedDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.chooseDateSelectedDate), timeoutMs);
  }

  async expectChooseDateSelectedDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.chooseDateSelectedDate), count, timeoutMs);
  }

  async scrollChooseDateSelectedDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.chooseDateSelectedDate));
  }

  async typeTextFrom(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, DashboardPage.L.from), value);
  }

  async expectFromHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.from), timeoutMs);
  }

  async expectFromText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.from), expected, timeoutMs);
  }

  async expectFromContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.from), substring, timeoutMs);
  }

  async expectFromValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.from), value, timeoutMs);
  }

  async expectFromEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.from), timeoutMs);
  }

  async expectFromDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.from), timeoutMs);
  }

  async expectFromChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.from), timeoutMs);
  }

  async expectFromUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.from), timeoutMs);
  }

  async expectFromFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.from), timeoutMs);
  }

  async expectFromCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.from), count, timeoutMs);
  }

  async scrollFromIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.from));
  }

  async longPressChooseDateSelectedDateButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.chooseDateSelectedDateButton));
  }

  async expectChooseDateSelectedDateButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.chooseDateSelectedDateButton), timeoutMs);
  }

  async expectChooseDateSelectedDateButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.chooseDateSelectedDateButton), expected, timeoutMs);
  }

  async expectChooseDateSelectedDateButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.chooseDateSelectedDateButton), substring, timeoutMs);
  }

  async expectChooseDateSelectedDateButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.chooseDateSelectedDateButton), value, timeoutMs);
  }

  async expectChooseDateSelectedDateButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.chooseDateSelectedDateButton), timeoutMs);
  }

  async expectChooseDateSelectedDateButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.chooseDateSelectedDateButton), timeoutMs);
  }

  async expectChooseDateSelectedDateButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.chooseDateSelectedDateButton), timeoutMs);
  }

  async expectChooseDateSelectedDateButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.chooseDateSelectedDateButton), timeoutMs);
  }

  async expectChooseDateSelectedDateButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.chooseDateSelectedDateButton), timeoutMs);
  }

  async expectChooseDateSelectedDateButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.chooseDateSelectedDateButton), count, timeoutMs);
  }

  async scrollChooseDateSelectedDateButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.chooseDateSelectedDateButton));
  }

  async typeTextTo(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, DashboardPage.L.to), value);
  }

  async expectToHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.to), timeoutMs);
  }

  async expectToText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.to), expected, timeoutMs);
  }

  async expectToContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.to), substring, timeoutMs);
  }

  async expectToValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.to), value, timeoutMs);
  }

  async expectToEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.to), timeoutMs);
  }

  async expectToDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.to), timeoutMs);
  }

  async expectToChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.to), timeoutMs);
  }

  async expectToUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.to), timeoutMs);
  }

  async expectToFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.to), timeoutMs);
  }

  async expectToCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.to), count, timeoutMs);
  }

  async scrollToIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.to));
  }

  async longPressDrillDown(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.drillDown));
  }

  async expectDrillDownHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.drillDown), timeoutMs);
  }

  async expectDrillDownText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.drillDown), expected, timeoutMs);
  }

  async expectDrillDownContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.drillDown), substring, timeoutMs);
  }

  async expectDrillDownValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.drillDown), value, timeoutMs);
  }

  async expectDrillDownEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.drillDown), timeoutMs);
  }

  async expectDrillDownDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.drillDown), timeoutMs);
  }

  async expectDrillDownChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.drillDown), timeoutMs);
  }

  async expectDrillDownUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.drillDown), timeoutMs);
  }

  async expectDrillDownFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.drillDown), timeoutMs);
  }

  async expectDrillDownCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.drillDown), count, timeoutMs);
  }

  async scrollDrillDownIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.drillDown));
  }

  async longPressOpenIntercomMessenger(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.openIntercomMessenger));
  }

  async expectOpenIntercomMessengerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.openIntercomMessenger), timeoutMs);
  }

  async expectOpenIntercomMessengerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.openIntercomMessenger), expected, timeoutMs);
  }

  async expectOpenIntercomMessengerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.openIntercomMessenger), substring, timeoutMs);
  }

  async expectOpenIntercomMessengerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.openIntercomMessenger), value, timeoutMs);
  }

  async expectOpenIntercomMessengerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.openIntercomMessenger), timeoutMs);
  }

  async expectOpenIntercomMessengerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.openIntercomMessenger), timeoutMs);
  }

  async expectOpenIntercomMessengerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.openIntercomMessenger), timeoutMs);
  }

  async expectOpenIntercomMessengerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.openIntercomMessenger), timeoutMs);
  }

  async expectOpenIntercomMessengerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.openIntercomMessenger), timeoutMs);
  }

  async expectOpenIntercomMessengerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.openIntercomMessenger), count, timeoutMs);
  }

  async scrollOpenIntercomMessengerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.openIntercomMessenger));
  }

}
