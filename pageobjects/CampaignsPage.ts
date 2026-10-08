import type { Locator, Page } from "@playwright/test";
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
import { webTable, type WebTable } from "../support/web-table";

export class CampaignsPage {
  private static readonly L = {
    campaigns: { strategy: 'role' as const, value: 'Campaigns', role: 'button', actionKind: 'button' as const },
    search: { strategy: 'css' as const, value: '#campaign-search-field[name="search"]', role: 'textbox', actionKind: 'textbox' as const },
    allTypes: { strategy: 'css' as const, value: '#mui-component-select-campaignTypeFilter', role: 'combobox', actionKind: 'generic' as const },
    campaignOverview: { strategy: 'role' as const, value: 'Campaign Overview', role: 'heading', level: 5, actionKind: 'text' as const },
    campaign: { strategy: 'role' as const, value: 'Campaign', role: 'button', actionKind: 'button' as const },
    duration: { strategy: 'role' as const, value: 'Duration', role: 'button', actionKind: 'button' as const },
    page10Div: { strategy: 'css' as const, value: '#mui-component-select-rowsDropDown', role: 'combobox', actionKind: 'generic' as const },
    page1: { strategy: 'role' as const, value: 'page 1', role: 'button', actionKind: 'button' as const },
    goToPage2: { strategy: 'role' as const, value: 'Go to page 2', role: 'button', actionKind: 'button' as const },
    goToPage3: { strategy: 'role' as const, value: 'Go to page 3', role: 'button', actionKind: 'button' as const },
    goToNextPage: { strategy: 'role' as const, value: 'Go to next page', role: 'button', actionKind: 'button' as const },
    completeBooking: { strategy: 'role' as const, value: 'Complete Booking', role: 'menuitem', actionKind: 'generic' as const },
    deleteDraft: { strategy: 'role' as const, value: 'Delete Draft', role: 'menuitem', actionKind: 'generic' as const },
    copyCampaignModalHeader: { strategy: 'role' as const, value: 'Copy Campaign', role: 'menuitem', actionKind: 'generic' as const },
    cancel: { strategy: 'role' as const, value: 'Cancel', role: 'button', actionKind: 'button' as const },
    copyNow: { strategy: 'role' as const, value: 'Copy Now', role: 'button', actionKind: 'button' as const },
    loadingImage: { strategy: 'altText' as const, value: 'Loading image', actionKind: 'generic' as const },
    campaignCopiedSuccessfully: { strategy: 'text' as const, value: 'Campaign copied successfully.', actionKind: 'generic' as const },
    copyCampaignModalText: { strategy: 'css' as const, value: '[role="dialog"] p', actionKind: 'generic' as const },
    deleteDraftCampaignModalHeader: { strategy: 'role' as const, value: 'Delete Draft Campaign', role: 'heading', level: 6, actionKind: 'text' as const },
    campaignDeletedSuccessfully: { strategy: 'text' as const, value: 'Campaign draft has been deleted successfully.', actionKind: 'generic' as const },
  } as const;

  readonly muiTableRoot1: WebTable; // columns: ["Campaign", "Type", "Status", "Duration", "Campaign ID", "Budget", "Actions"]

  constructor(private readonly page: Page) {
    this.muiTableRoot1 = webTable(this.page, '#root table');
  }

  async clickCampaigns(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CampaignsPage.L.campaigns));
  }

  async doubleClickCampaigns(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CampaignsPage.L.campaigns));
  }

  async expectCampaignsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CampaignsPage.L.campaigns), timeoutMs, soft);
  }

  async fillSearch(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, CampaignsPage.L.search), value);
  }

  async clearSearch(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, CampaignsPage.L.search));
  }

  async getSearchValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CampaignsPage.L.search));
  }

  async expectSearchVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CampaignsPage.L.search), timeoutMs, soft);
  }

  async clickAllTypes(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CampaignsPage.L.allTypes));
  }

  async expectAllTypesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CampaignsPage.L.allTypes), timeoutMs, soft);
  }

  async getInnerTextCampaignOverview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CampaignsPage.L.campaignOverview));
  }

  async expectCampaignOverviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CampaignsPage.L.campaignOverview), timeoutMs, soft);
  }

  async clickCampaign(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CampaignsPage.L.campaign));
  }

  async doubleClickCampaign(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CampaignsPage.L.campaign));
  }

  async expectCampaignVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CampaignsPage.L.campaign), timeoutMs, soft);
  }

  async clickDuration(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CampaignsPage.L.duration));
  }

  async doubleClickDuration(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CampaignsPage.L.duration));
  }

  async expectDurationVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CampaignsPage.L.duration), timeoutMs, soft);
  }

  async clickPage10Div(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CampaignsPage.L.page10Div));
  }

  async expectPage10DivVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CampaignsPage.L.page10Div), timeoutMs, soft);
  }

  async clickPage1(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CampaignsPage.L.page1));
  }

  async doubleClickPage1(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CampaignsPage.L.page1));
  }

  async expectPage1Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CampaignsPage.L.page1), timeoutMs, soft);
  }

  async clickGoToPage2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CampaignsPage.L.goToPage2));
  }

  async doubleClickGoToPage2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CampaignsPage.L.goToPage2));
  }

  async expectGoToPage2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CampaignsPage.L.goToPage2), timeoutMs, soft);
  }

  async clickGoToPage3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CampaignsPage.L.goToPage3));
  }

  async doubleClickGoToPage3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CampaignsPage.L.goToPage3));
  }

  async expectGoToPage3Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CampaignsPage.L.goToPage3), timeoutMs, soft);
  }

  async clickGoToNextPage(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CampaignsPage.L.goToNextPage));
  }

  async doubleClickGoToNextPage(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CampaignsPage.L.goToNextPage));
  }

  async expectGoToNextPageVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CampaignsPage.L.goToNextPage), timeoutMs, soft);
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

  async clickCompleteBooking(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CampaignsPage.L.completeBooking));
  }

  async expectCompleteBookingVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CampaignsPage.L.completeBooking), timeoutMs, soft);
  }

  async clickDeleteDraft(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CampaignsPage.L.deleteDraft));
  }

  async expectDeleteDraftVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CampaignsPage.L.deleteDraft), timeoutMs, soft);
  }

  async clickCopyCampaignModalHeader(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CampaignsPage.L.copyCampaignModalHeader));
  }

  async expectCopyCampaignModalHeaderVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CampaignsPage.L.copyCampaignModalHeader), timeoutMs, soft);
  }

  async clickCancel(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CampaignsPage.L.cancel));
  }

  async doubleClickCancel(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CampaignsPage.L.cancel));
  }

  async expectCancelVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CampaignsPage.L.cancel), timeoutMs, soft);
  }

  async clickCopyNow(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CampaignsPage.L.copyNow));
  }

  async doubleClickCopyNow(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CampaignsPage.L.copyNow));
  }

  async expectCopyNowVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CampaignsPage.L.copyNow), timeoutMs, soft);
  }

  async clickLoadingImage(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CampaignsPage.L.loadingImage));
  }

  async expectLoadingImageVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CampaignsPage.L.loadingImage), timeoutMs, soft);
  }

  async expectCampaignCopiedSuccessfullyVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CampaignsPage.L.campaignCopiedSuccessfully), timeoutMs, soft);
  }

  async expectCopyCampaignModalTextVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CampaignsPage.L.copyCampaignModalText), timeoutMs, soft);
  }

  async getInnerTextDeleteDraftCampaignModalHeader(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CampaignsPage.L.deleteDraftCampaignModalHeader));
  }

  async expectDeleteDraftCampaignModalHeaderVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CampaignsPage.L.deleteDraftCampaignModalHeader), timeoutMs, soft);
  }

  async expectCampaignDeletedSuccessfullyVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CampaignsPage.L.campaignDeletedSuccessfully), timeoutMs, soft);
  }

  // ── #root table ──────────────────────────────────────────────

  /** Text of any cell. row is 0-based; col is column name or 0-based index. */
  async getMuiTableRoot1TableText(row: number, col: number | string): Promise<string> {
    return this.muiTableRoot1.getText(row, col);
  }

  /** All text values for a column across every row. */
  async getMuiTableRoot1TableColumn(col: number | string): Promise<string[]> {
    return this.muiTableRoot1.getColumn(col);
  }

  /** All cell values for a row as { "Column Name": "value" }. */
  async getMuiTableRoot1TableRowData(row: number): Promise<Record<string, string>> {
    return this.muiTableRoot1.getRowData(row);
  }

  /** First row where col equals value (exact). Pass exact=false for contains match. */
  async findMuiTableRoot1TableRow(col: number | string, value: string, exact = true): Promise<number> {
    return this.muiTableRoot1.findRow(col, value, exact);
  }

  /** First row where any cell contains text (case-insensitive). */
  async findMuiTableRoot1TableRowByText(text: string): Promise<number> {
    return this.muiTableRoot1.findRowByText(text);
  }

  /** Total number of body rows. */
  async getMuiTableRoot1TableRowCount(): Promise<number> {
    return this.muiTableRoot1.rowCount();
  }

  /** Click the <a> link inside a cell. */
  async clickMuiTableRoot1TableLink(row: number, col: number | string): Promise<void> {
    return this.muiTableRoot1.clickLink(row, col);
  }

  /** href of the link inside a cell, or null if there is no link. */
  async getMuiTableRoot1TableLinkHref(row: number, col: number | string): Promise<string | null> {
    const cell = await this.muiTableRoot1.cell(row, col);
    const link = cell.locator('a');
    return (await link.count()) > 0 ? link.getAttribute('href') : null;
  }

  /** Check the row selection checkbox (idempotent). */
  async checkMuiTableRoot1TableRow(row: number): Promise<void> {
    const cb = this.muiTableRoot1.row(row).locator('input[type="checkbox"]').first();
    if (await cb.isChecked()) return;
    await cb.check({ force: true });
  }

  /** Uncheck the row selection checkbox (idempotent). */
  async uncheckMuiTableRoot1TableRow(row: number): Promise<void> {
    const cb = this.muiTableRoot1.row(row).locator('input[type="checkbox"]').first();
    if (!(await cb.isChecked())) return;
    await cb.uncheck({ force: true });
  }

  /** Whether the row selection checkbox is currently checked. */
  async isMuiTableRoot1TableRowChecked(row: number): Promise<boolean> {
    return this.muiTableRoot1.row(row).locator('input[type="checkbox"]').first().isChecked();
  }

  /** Current state of the toggle switch (role="switch") in the row — true = on/active. */
  async getMuiTableRoot1TableSwitchState(row: number): Promise<boolean> {
    return this.muiTableRoot1.getSwitchState(row);
  }

  /** Toggle the switch in a row. Pass targetState=true/false to set explicitly. */
  async toggleMuiTableRoot1TableSwitch(row: number, targetState?: boolean): Promise<void> {
    return this.muiTableRoot1.toggleSwitch(row, targetState);
  }

  /** Click a button in a row by optional label; omit label to click the last button (action menu). */
  async clickMuiTableRoot1TableButton(row: number, label?: string): Promise<void> {
    return this.muiTableRoot1.clickButton(row, label);
  }

  /** Click a named option inside an already-open row action dropdown. */
  async clickMuiTableRoot1TableMenuOption(label: string): Promise<void> {
    return this.muiTableRoot1.clickMenuOption(label);
  }

  /** Click a column header to sort. Call twice to reverse direction. */
  async sortMuiTableRoot1TableBy(col: string): Promise<void> {
    return this.muiTableRoot1.sortBy(col);
  }

  /** Locator for any element inside a row — toggles, buttons, custom controls. */
  getMuiTableRoot1TableInRow(row: number, selector: string): Locator {
    return this.muiTableRoot1.getInRow(row, selector);
  }


  async longPressCampaigns(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CampaignsPage.L.campaigns));
  }

  async expectCampaignsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CampaignsPage.L.campaigns), timeoutMs);
  }

  async expectCampaignsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CampaignsPage.L.campaigns), expected, timeoutMs);
  }

  async expectCampaignsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CampaignsPage.L.campaigns), substring, timeoutMs);
  }

  async expectCampaignsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CampaignsPage.L.campaigns), value, timeoutMs);
  }

  async expectCampaignsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CampaignsPage.L.campaigns), timeoutMs);
  }

  async expectCampaignsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CampaignsPage.L.campaigns), timeoutMs);
  }

  async expectCampaignsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CampaignsPage.L.campaigns), timeoutMs);
  }

  async expectCampaignsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CampaignsPage.L.campaigns), timeoutMs);
  }

  async expectCampaignsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CampaignsPage.L.campaigns), timeoutMs);
  }

  async expectCampaignsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CampaignsPage.L.campaigns), count, timeoutMs);
  }

  async scrollCampaignsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CampaignsPage.L.campaigns));
  }

  async typeTextSearch(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, CampaignsPage.L.search), value);
  }

  async expectSearchHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CampaignsPage.L.search), timeoutMs);
  }

  async expectSearchText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CampaignsPage.L.search), expected, timeoutMs);
  }

  async expectSearchContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CampaignsPage.L.search), substring, timeoutMs);
  }

  async expectSearchValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CampaignsPage.L.search), value, timeoutMs);
  }

  async expectSearchEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CampaignsPage.L.search), timeoutMs);
  }

  async expectSearchDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CampaignsPage.L.search), timeoutMs);
  }

  async expectSearchChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CampaignsPage.L.search), timeoutMs);
  }

  async expectSearchUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CampaignsPage.L.search), timeoutMs);
  }

  async expectSearchFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CampaignsPage.L.search), timeoutMs);
  }

  async expectSearchCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CampaignsPage.L.search), count, timeoutMs);
  }

  async scrollSearchIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CampaignsPage.L.search));
  }

  async doubleClickAllTypes(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CampaignsPage.L.allTypes));
  }

  async longPressAllTypes(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CampaignsPage.L.allTypes));
  }

  async expectAllTypesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CampaignsPage.L.allTypes), timeoutMs);
  }

  async expectAllTypesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CampaignsPage.L.allTypes), expected, timeoutMs);
  }

  async expectAllTypesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CampaignsPage.L.allTypes), substring, timeoutMs);
  }

  async expectAllTypesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CampaignsPage.L.allTypes), value, timeoutMs);
  }

  async expectAllTypesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CampaignsPage.L.allTypes), timeoutMs);
  }

  async expectAllTypesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CampaignsPage.L.allTypes), timeoutMs);
  }

  async expectAllTypesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CampaignsPage.L.allTypes), timeoutMs);
  }

  async expectAllTypesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CampaignsPage.L.allTypes), timeoutMs);
  }

  async expectAllTypesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CampaignsPage.L.allTypes), timeoutMs);
  }

  async expectAllTypesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CampaignsPage.L.allTypes), count, timeoutMs);
  }

  async scrollAllTypesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CampaignsPage.L.allTypes));
  }

  async clickCampaignOverview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CampaignsPage.L.campaignOverview));
  }

  async doubleClickCampaignOverview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CampaignsPage.L.campaignOverview));
  }

  async longPressCampaignOverview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CampaignsPage.L.campaignOverview));
  }

  async expectCampaignOverviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CampaignsPage.L.campaignOverview), timeoutMs);
  }

  async expectCampaignOverviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CampaignsPage.L.campaignOverview), expected, timeoutMs);
  }

  async expectCampaignOverviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CampaignsPage.L.campaignOverview), substring, timeoutMs);
  }

  async expectCampaignOverviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CampaignsPage.L.campaignOverview), value, timeoutMs);
  }

  async expectCampaignOverviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CampaignsPage.L.campaignOverview), timeoutMs);
  }

  async expectCampaignOverviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CampaignsPage.L.campaignOverview), timeoutMs);
  }

  async expectCampaignOverviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CampaignsPage.L.campaignOverview), timeoutMs);
  }

  async expectCampaignOverviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CampaignsPage.L.campaignOverview), timeoutMs);
  }

  async expectCampaignOverviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CampaignsPage.L.campaignOverview), timeoutMs);
  }

  async expectCampaignOverviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CampaignsPage.L.campaignOverview), count, timeoutMs);
  }

  async scrollCampaignOverviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CampaignsPage.L.campaignOverview));
  }

  async longPressCampaign(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CampaignsPage.L.campaign));
  }

  async expectCampaignHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CampaignsPage.L.campaign), timeoutMs);
  }

  async expectCampaignText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CampaignsPage.L.campaign), expected, timeoutMs);
  }

  async expectCampaignContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CampaignsPage.L.campaign), substring, timeoutMs);
  }

  async expectCampaignValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CampaignsPage.L.campaign), value, timeoutMs);
  }

  async expectCampaignEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CampaignsPage.L.campaign), timeoutMs);
  }

  async expectCampaignDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CampaignsPage.L.campaign), timeoutMs);
  }

  async expectCampaignChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CampaignsPage.L.campaign), timeoutMs);
  }

  async expectCampaignUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CampaignsPage.L.campaign), timeoutMs);
  }

  async expectCampaignFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CampaignsPage.L.campaign), timeoutMs);
  }

  async expectCampaignCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CampaignsPage.L.campaign), count, timeoutMs);
  }

  async scrollCampaignIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CampaignsPage.L.campaign));
  }

  async longPressDuration(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CampaignsPage.L.duration));
  }

  async expectDurationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CampaignsPage.L.duration), timeoutMs);
  }

  async expectDurationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CampaignsPage.L.duration), expected, timeoutMs);
  }

  async expectDurationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CampaignsPage.L.duration), substring, timeoutMs);
  }

  async expectDurationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CampaignsPage.L.duration), value, timeoutMs);
  }

  async expectDurationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CampaignsPage.L.duration), timeoutMs);
  }

  async expectDurationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CampaignsPage.L.duration), timeoutMs);
  }

  async expectDurationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CampaignsPage.L.duration), timeoutMs);
  }

  async expectDurationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CampaignsPage.L.duration), timeoutMs);
  }

  async expectDurationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CampaignsPage.L.duration), timeoutMs);
  }

  async expectDurationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CampaignsPage.L.duration), count, timeoutMs);
  }

  async scrollDurationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CampaignsPage.L.duration));
  }

  async doubleClickPage10Div(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CampaignsPage.L.page10Div));
  }

  async longPressPage10Div(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CampaignsPage.L.page10Div));
  }

  async expectPage10DivHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CampaignsPage.L.page10Div), timeoutMs);
  }

  async expectPage10DivText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CampaignsPage.L.page10Div), expected, timeoutMs);
  }

  async expectPage10DivContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CampaignsPage.L.page10Div), substring, timeoutMs);
  }

  async expectPage10DivValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CampaignsPage.L.page10Div), value, timeoutMs);
  }

  async expectPage10DivEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CampaignsPage.L.page10Div), timeoutMs);
  }

  async expectPage10DivDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CampaignsPage.L.page10Div), timeoutMs);
  }

  async expectPage10DivChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CampaignsPage.L.page10Div), timeoutMs);
  }

  async expectPage10DivUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CampaignsPage.L.page10Div), timeoutMs);
  }

  async expectPage10DivFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CampaignsPage.L.page10Div), timeoutMs);
  }

  async expectPage10DivCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CampaignsPage.L.page10Div), count, timeoutMs);
  }

  async scrollPage10DivIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CampaignsPage.L.page10Div));
  }

  async longPressPage1(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CampaignsPage.L.page1));
  }

  async expectPage1Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CampaignsPage.L.page1), timeoutMs);
  }

  async expectPage1Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CampaignsPage.L.page1), expected, timeoutMs);
  }

  async expectPage1ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CampaignsPage.L.page1), substring, timeoutMs);
  }

  async expectPage1Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CampaignsPage.L.page1), value, timeoutMs);
  }

  async expectPage1Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CampaignsPage.L.page1), timeoutMs);
  }

  async expectPage1Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CampaignsPage.L.page1), timeoutMs);
  }

  async expectPage1Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CampaignsPage.L.page1), timeoutMs);
  }

  async expectPage1Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CampaignsPage.L.page1), timeoutMs);
  }

  async expectPage1Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CampaignsPage.L.page1), timeoutMs);
  }

  async expectPage1Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CampaignsPage.L.page1), count, timeoutMs);
  }

  async scrollPage1IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CampaignsPage.L.page1));
  }

  async longPressGoToPage2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CampaignsPage.L.goToPage2));
  }

  async expectGoToPage2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CampaignsPage.L.goToPage2), timeoutMs);
  }

  async expectGoToPage2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CampaignsPage.L.goToPage2), expected, timeoutMs);
  }

  async expectGoToPage2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CampaignsPage.L.goToPage2), substring, timeoutMs);
  }

  async expectGoToPage2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CampaignsPage.L.goToPage2), value, timeoutMs);
  }

  async expectGoToPage2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CampaignsPage.L.goToPage2), timeoutMs);
  }

  async expectGoToPage2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CampaignsPage.L.goToPage2), timeoutMs);
  }

  async expectGoToPage2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CampaignsPage.L.goToPage2), timeoutMs);
  }

  async expectGoToPage2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CampaignsPage.L.goToPage2), timeoutMs);
  }

  async expectGoToPage2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CampaignsPage.L.goToPage2), timeoutMs);
  }

  async expectGoToPage2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CampaignsPage.L.goToPage2), count, timeoutMs);
  }

  async scrollGoToPage2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CampaignsPage.L.goToPage2));
  }

  async longPressGoToPage3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CampaignsPage.L.goToPage3));
  }

  async expectGoToPage3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CampaignsPage.L.goToPage3), timeoutMs);
  }

  async expectGoToPage3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CampaignsPage.L.goToPage3), expected, timeoutMs);
  }

  async expectGoToPage3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CampaignsPage.L.goToPage3), substring, timeoutMs);
  }

  async expectGoToPage3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CampaignsPage.L.goToPage3), value, timeoutMs);
  }

  async expectGoToPage3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CampaignsPage.L.goToPage3), timeoutMs);
  }

  async expectGoToPage3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CampaignsPage.L.goToPage3), timeoutMs);
  }

  async expectGoToPage3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CampaignsPage.L.goToPage3), timeoutMs);
  }

  async expectGoToPage3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CampaignsPage.L.goToPage3), timeoutMs);
  }

  async expectGoToPage3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CampaignsPage.L.goToPage3), timeoutMs);
  }

  async expectGoToPage3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CampaignsPage.L.goToPage3), count, timeoutMs);
  }

  async scrollGoToPage3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CampaignsPage.L.goToPage3));
  }

  async longPressGoToNextPage(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CampaignsPage.L.goToNextPage));
  }

  async expectGoToNextPageHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CampaignsPage.L.goToNextPage), timeoutMs);
  }

  async expectGoToNextPageText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CampaignsPage.L.goToNextPage), expected, timeoutMs);
  }

  async expectGoToNextPageContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CampaignsPage.L.goToNextPage), substring, timeoutMs);
  }

  async expectGoToNextPageValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CampaignsPage.L.goToNextPage), value, timeoutMs);
  }

  async expectGoToNextPageEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CampaignsPage.L.goToNextPage), timeoutMs);
  }

  async expectGoToNextPageDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CampaignsPage.L.goToNextPage), timeoutMs);
  }

  async expectGoToNextPageChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CampaignsPage.L.goToNextPage), timeoutMs);
  }

  async expectGoToNextPageUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CampaignsPage.L.goToNextPage), timeoutMs);
  }

  async expectGoToNextPageFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CampaignsPage.L.goToNextPage), timeoutMs);
  }

  async expectGoToNextPageCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CampaignsPage.L.goToNextPage), count, timeoutMs);
  }

  async scrollGoToNextPageIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CampaignsPage.L.goToNextPage));
  }

  async doubleClickCompleteBooking(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CampaignsPage.L.completeBooking));
  }

  async longPressCompleteBooking(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CampaignsPage.L.completeBooking));
  }

  async expectCompleteBookingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CampaignsPage.L.completeBooking), timeoutMs);
  }

  async expectCompleteBookingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CampaignsPage.L.completeBooking), expected, timeoutMs);
  }

  async expectCompleteBookingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CampaignsPage.L.completeBooking), substring, timeoutMs);
  }

  async expectCompleteBookingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CampaignsPage.L.completeBooking), value, timeoutMs);
  }

  async expectCompleteBookingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CampaignsPage.L.completeBooking), timeoutMs);
  }

  async expectCompleteBookingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CampaignsPage.L.completeBooking), timeoutMs);
  }

  async expectCompleteBookingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CampaignsPage.L.completeBooking), timeoutMs);
  }

  async expectCompleteBookingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CampaignsPage.L.completeBooking), timeoutMs);
  }

  async expectCompleteBookingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CampaignsPage.L.completeBooking), timeoutMs);
  }

  async expectCompleteBookingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CampaignsPage.L.completeBooking), count, timeoutMs);
  }

  async scrollCompleteBookingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CampaignsPage.L.completeBooking));
  }

  async doubleClickDeleteDraft(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CampaignsPage.L.deleteDraft));
  }

  async longPressDeleteDraft(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CampaignsPage.L.deleteDraft));
  }

  async expectDeleteDraftHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CampaignsPage.L.deleteDraft), timeoutMs);
  }

  async expectDeleteDraftText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CampaignsPage.L.deleteDraft), expected, timeoutMs);
  }

  async expectDeleteDraftContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CampaignsPage.L.deleteDraft), substring, timeoutMs);
  }

  async expectDeleteDraftValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CampaignsPage.L.deleteDraft), value, timeoutMs);
  }

  async expectDeleteDraftEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CampaignsPage.L.deleteDraft), timeoutMs);
  }

  async expectDeleteDraftDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CampaignsPage.L.deleteDraft), timeoutMs);
  }

  async expectDeleteDraftChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CampaignsPage.L.deleteDraft), timeoutMs);
  }

  async expectDeleteDraftUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CampaignsPage.L.deleteDraft), timeoutMs);
  }

  async expectDeleteDraftFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CampaignsPage.L.deleteDraft), timeoutMs);
  }

  async expectDeleteDraftCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CampaignsPage.L.deleteDraft), count, timeoutMs);
  }

  async scrollDeleteDraftIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CampaignsPage.L.deleteDraft));
  }

  async doubleClickCopyCampaignModalHeader(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CampaignsPage.L.copyCampaignModalHeader));
  }

  async longPressCopyCampaignModalHeader(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CampaignsPage.L.copyCampaignModalHeader));
  }

  async expectCopyCampaignModalHeaderHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CampaignsPage.L.copyCampaignModalHeader), timeoutMs);
  }

  async expectCopyCampaignModalHeaderText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CampaignsPage.L.copyCampaignModalHeader), expected, timeoutMs);
  }

  async expectCopyCampaignModalHeaderContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CampaignsPage.L.copyCampaignModalHeader), substring, timeoutMs);
  }

  async expectCopyCampaignModalHeaderValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CampaignsPage.L.copyCampaignModalHeader), value, timeoutMs);
  }

  async expectCopyCampaignModalHeaderEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CampaignsPage.L.copyCampaignModalHeader), timeoutMs);
  }

  async expectCopyCampaignModalHeaderDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CampaignsPage.L.copyCampaignModalHeader), timeoutMs);
  }

  async expectCopyCampaignModalHeaderChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CampaignsPage.L.copyCampaignModalHeader), timeoutMs);
  }

  async expectCopyCampaignModalHeaderUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CampaignsPage.L.copyCampaignModalHeader), timeoutMs);
  }

  async expectCopyCampaignModalHeaderFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CampaignsPage.L.copyCampaignModalHeader), timeoutMs);
  }

  async expectCopyCampaignModalHeaderCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CampaignsPage.L.copyCampaignModalHeader), count, timeoutMs);
  }

  async scrollCopyCampaignModalHeaderIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CampaignsPage.L.copyCampaignModalHeader));
  }

  async longPressCancel(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CampaignsPage.L.cancel));
  }

  async expectCancelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CampaignsPage.L.cancel), timeoutMs);
  }

  async expectCancelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CampaignsPage.L.cancel), expected, timeoutMs);
  }

  async expectCancelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CampaignsPage.L.cancel), substring, timeoutMs);
  }

  async expectCancelValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CampaignsPage.L.cancel), value, timeoutMs);
  }

  async expectCancelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CampaignsPage.L.cancel), timeoutMs);
  }

  async expectCancelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CampaignsPage.L.cancel), timeoutMs);
  }

  async expectCancelChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CampaignsPage.L.cancel), timeoutMs);
  }

  async expectCancelUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CampaignsPage.L.cancel), timeoutMs);
  }

  async expectCancelFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CampaignsPage.L.cancel), timeoutMs);
  }

  async expectCancelCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CampaignsPage.L.cancel), count, timeoutMs);
  }

  async scrollCancelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CampaignsPage.L.cancel));
  }

  async longPressCopyNow(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CampaignsPage.L.copyNow));
  }

  async expectCopyNowHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CampaignsPage.L.copyNow), timeoutMs);
  }

  async expectCopyNowText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CampaignsPage.L.copyNow), expected, timeoutMs);
  }

  async expectCopyNowContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CampaignsPage.L.copyNow), substring, timeoutMs);
  }

  async expectCopyNowValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CampaignsPage.L.copyNow), value, timeoutMs);
  }

  async expectCopyNowEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CampaignsPage.L.copyNow), timeoutMs);
  }

  async expectCopyNowDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CampaignsPage.L.copyNow), timeoutMs);
  }

  async expectCopyNowChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CampaignsPage.L.copyNow), timeoutMs);
  }

  async expectCopyNowUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CampaignsPage.L.copyNow), timeoutMs);
  }

  async expectCopyNowFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CampaignsPage.L.copyNow), timeoutMs);
  }

  async expectCopyNowCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CampaignsPage.L.copyNow), count, timeoutMs);
  }

  async scrollCopyNowIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CampaignsPage.L.copyNow));
  }

  async doubleClickLoadingImage(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CampaignsPage.L.loadingImage));
  }

  async longPressLoadingImage(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CampaignsPage.L.loadingImage));
  }

  async expectLoadingImageHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CampaignsPage.L.loadingImage), timeoutMs);
  }

  async expectLoadingImageText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CampaignsPage.L.loadingImage), expected, timeoutMs);
  }

  async expectLoadingImageContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CampaignsPage.L.loadingImage), substring, timeoutMs);
  }

  async expectLoadingImageValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CampaignsPage.L.loadingImage), value, timeoutMs);
  }

  async expectLoadingImageEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CampaignsPage.L.loadingImage), timeoutMs);
  }

  async expectLoadingImageDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CampaignsPage.L.loadingImage), timeoutMs);
  }

  async expectLoadingImageChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CampaignsPage.L.loadingImage), timeoutMs);
  }

  async expectLoadingImageUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CampaignsPage.L.loadingImage), timeoutMs);
  }

  async expectLoadingImageFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CampaignsPage.L.loadingImage), timeoutMs);
  }

  async expectLoadingImageCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CampaignsPage.L.loadingImage), count, timeoutMs);
  }

  async scrollLoadingImageIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CampaignsPage.L.loadingImage));
  }

  async clickCampaignCopiedSuccessfully(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CampaignsPage.L.campaignCopiedSuccessfully));
  }

  async doubleClickCampaignCopiedSuccessfully(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CampaignsPage.L.campaignCopiedSuccessfully));
  }

  async longPressCampaignCopiedSuccessfully(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CampaignsPage.L.campaignCopiedSuccessfully));
  }

  async expectCampaignCopiedSuccessfullyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CampaignsPage.L.campaignCopiedSuccessfully), timeoutMs);
  }

  async expectCampaignCopiedSuccessfullyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CampaignsPage.L.campaignCopiedSuccessfully), expected, timeoutMs);
  }

  async expectCampaignCopiedSuccessfullyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CampaignsPage.L.campaignCopiedSuccessfully), substring, timeoutMs);
  }

  async expectCampaignCopiedSuccessfullyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CampaignsPage.L.campaignCopiedSuccessfully), value, timeoutMs);
  }

  async expectCampaignCopiedSuccessfullyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CampaignsPage.L.campaignCopiedSuccessfully), timeoutMs);
  }

  async expectCampaignCopiedSuccessfullyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CampaignsPage.L.campaignCopiedSuccessfully), timeoutMs);
  }

  async expectCampaignCopiedSuccessfullyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CampaignsPage.L.campaignCopiedSuccessfully), timeoutMs);
  }

  async expectCampaignCopiedSuccessfullyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CampaignsPage.L.campaignCopiedSuccessfully), timeoutMs);
  }

  async expectCampaignCopiedSuccessfullyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CampaignsPage.L.campaignCopiedSuccessfully), timeoutMs);
  }

  async expectCampaignCopiedSuccessfullyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CampaignsPage.L.campaignCopiedSuccessfully), count, timeoutMs);
  }

  async scrollCampaignCopiedSuccessfullyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CampaignsPage.L.campaignCopiedSuccessfully));
  }

  async clickCopyCampaignModalText(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CampaignsPage.L.copyCampaignModalText));
  }

  async doubleClickCopyCampaignModalText(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CampaignsPage.L.copyCampaignModalText));
  }

  async longPressCopyCampaignModalText(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CampaignsPage.L.copyCampaignModalText));
  }

  async expectCopyCampaignModalTextHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CampaignsPage.L.copyCampaignModalText), timeoutMs);
  }

  async expectCopyCampaignModalTextText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CampaignsPage.L.copyCampaignModalText), expected, timeoutMs);
  }

  async expectCopyCampaignModalTextContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CampaignsPage.L.copyCampaignModalText), substring, timeoutMs);
  }

  async expectCopyCampaignModalTextValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CampaignsPage.L.copyCampaignModalText), value, timeoutMs);
  }

  async expectCopyCampaignModalTextEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CampaignsPage.L.copyCampaignModalText), timeoutMs);
  }

  async expectCopyCampaignModalTextDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CampaignsPage.L.copyCampaignModalText), timeoutMs);
  }

  async expectCopyCampaignModalTextChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CampaignsPage.L.copyCampaignModalText), timeoutMs);
  }

  async expectCopyCampaignModalTextUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CampaignsPage.L.copyCampaignModalText), timeoutMs);
  }

  async expectCopyCampaignModalTextFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CampaignsPage.L.copyCampaignModalText), timeoutMs);
  }

  async expectCopyCampaignModalTextCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CampaignsPage.L.copyCampaignModalText), count, timeoutMs);
  }

  async scrollCopyCampaignModalTextIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CampaignsPage.L.copyCampaignModalText));
  }

  async clickDeleteDraftCampaignModalHeader(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CampaignsPage.L.deleteDraftCampaignModalHeader));
  }

  async doubleClickDeleteDraftCampaignModalHeader(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CampaignsPage.L.deleteDraftCampaignModalHeader));
  }

  async longPressDeleteDraftCampaignModalHeader(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CampaignsPage.L.deleteDraftCampaignModalHeader));
  }

  async expectDeleteDraftCampaignModalHeaderHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CampaignsPage.L.deleteDraftCampaignModalHeader), timeoutMs);
  }

  async expectDeleteDraftCampaignModalHeaderText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CampaignsPage.L.deleteDraftCampaignModalHeader), expected, timeoutMs);
  }

  async expectDeleteDraftCampaignModalHeaderContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CampaignsPage.L.deleteDraftCampaignModalHeader), substring, timeoutMs);
  }

  async expectDeleteDraftCampaignModalHeaderValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CampaignsPage.L.deleteDraftCampaignModalHeader), value, timeoutMs);
  }

  async expectDeleteDraftCampaignModalHeaderEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CampaignsPage.L.deleteDraftCampaignModalHeader), timeoutMs);
  }

  async expectDeleteDraftCampaignModalHeaderDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CampaignsPage.L.deleteDraftCampaignModalHeader), timeoutMs);
  }

  async expectDeleteDraftCampaignModalHeaderChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CampaignsPage.L.deleteDraftCampaignModalHeader), timeoutMs);
  }

  async expectDeleteDraftCampaignModalHeaderUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CampaignsPage.L.deleteDraftCampaignModalHeader), timeoutMs);
  }

  async expectDeleteDraftCampaignModalHeaderFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CampaignsPage.L.deleteDraftCampaignModalHeader), timeoutMs);
  }

  async expectDeleteDraftCampaignModalHeaderCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CampaignsPage.L.deleteDraftCampaignModalHeader), count, timeoutMs);
  }

  async scrollDeleteDraftCampaignModalHeaderIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CampaignsPage.L.deleteDraftCampaignModalHeader));
  }

  async clickCampaignDeletedSuccessfully(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CampaignsPage.L.campaignDeletedSuccessfully));
  }

  async doubleClickCampaignDeletedSuccessfully(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CampaignsPage.L.campaignDeletedSuccessfully));
  }

  async longPressCampaignDeletedSuccessfully(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CampaignsPage.L.campaignDeletedSuccessfully));
  }

  async expectCampaignDeletedSuccessfullyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CampaignsPage.L.campaignDeletedSuccessfully), timeoutMs);
  }

  async expectCampaignDeletedSuccessfullyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CampaignsPage.L.campaignDeletedSuccessfully), expected, timeoutMs);
  }

  async expectCampaignDeletedSuccessfullyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CampaignsPage.L.campaignDeletedSuccessfully), substring, timeoutMs);
  }

  async expectCampaignDeletedSuccessfullyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CampaignsPage.L.campaignDeletedSuccessfully), value, timeoutMs);
  }

  async expectCampaignDeletedSuccessfullyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CampaignsPage.L.campaignDeletedSuccessfully), timeoutMs);
  }

  async expectCampaignDeletedSuccessfullyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CampaignsPage.L.campaignDeletedSuccessfully), timeoutMs);
  }

  async expectCampaignDeletedSuccessfullyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CampaignsPage.L.campaignDeletedSuccessfully), timeoutMs);
  }

  async expectCampaignDeletedSuccessfullyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CampaignsPage.L.campaignDeletedSuccessfully), timeoutMs);
  }

  async expectCampaignDeletedSuccessfullyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CampaignsPage.L.campaignDeletedSuccessfully), timeoutMs);
  }

  async expectCampaignDeletedSuccessfullyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CampaignsPage.L.campaignDeletedSuccessfully), count, timeoutMs);
  }

  async scrollCampaignDeletedSuccessfullyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CampaignsPage.L.campaignDeletedSuccessfully));
  }

}
