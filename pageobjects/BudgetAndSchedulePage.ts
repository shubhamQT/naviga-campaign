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

export class BudgetAndSchedulePage {
  private static readonly L = {
    budgetSchedule: { strategy: 'role' as const, value: '[[Budget & Schedule]]', role: 'button', actionKind: 'button' as const },
    campaignDuration: { strategy: 'css' as const, value: '#campaign-duration-field[name="campaign-duration-field"]', role: 'textbox', actionKind: 'textbox' as const },
    totalBudget: { strategy: 'css' as const, value: '#budget-field[name="budget-field"]', role: 'textbox', actionKind: 'textbox' as const },
    swaphorizicon: { strategy: 'testId' as const, value: 'SwapHorizIcon', role: 'button', actionKind: 'button' as const },
    impressions: { strategy: 'css' as const, value: '#impressions-field[name="impressions-field"]', role: 'textbox', actionKind: 'textbox' as const },
    estBudgetPerDay: { strategy: 'css' as const, value: '#budget-perday-field[name="budget-perday-field"]', role: 'textbox', actionKind: 'textbox' as const },
    next: { strategy: 'role' as const, value: 'Next', role: 'button', actionKind: 'button' as const },
    calendarViewIsOpen: { strategy: 'role' as const, value: 'calendar view is open, switch to year view', role: 'button', actionKind: 'button' as const },
    nextMonth: { strategy: 'role' as const, value: 'Next month', role: 'button', actionKind: 'button' as const },
    am: { strategy: 'role' as const, value: 'AM', role: 'button', actionKind: 'button' as const },
    pm: { strategy: 'role' as const, value: 'PM', role: 'button', actionKind: 'button' as const },
    openNextView: { strategy: 'role' as const, value: 'Open next view', role: 'button', actionKind: 'button' as const },
    ok: { strategy: 'role' as const, value: 'OK', role: 'button', actionKind: 'button' as const },
    chooseDateSelectedDate: { strategy: 'role' as const, value: 'Choose date, selected date is Oct 8, 2026', role: 'button', actionKind: 'button' as const },
    chooseDateSelectedDateButton: { strategy: 'role' as const, value: 'Choose date, selected date is Oct 10, 2026', role: 'button', actionKind: 'button' as const },
    previousMonth: { strategy: 'role' as const, value: 'Previous month', role: 'button', actionKind: 'button' as const },
  } as const;

  readonly muiDayCalendarRoot1: WebTable; // columns: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  constructor(private readonly page: Page) {
    this.muiDayCalendarRoot1 = webTable(this.page, '[role="grid"]', 'grid');
  }

  async clickBudgetSchedule(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.budgetSchedule));
  }

  async doubleClickBudgetSchedule(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.budgetSchedule));
  }

  async expectBudgetScheduleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BudgetAndSchedulePage.L.budgetSchedule), timeoutMs, soft);
  }

  async fillCampaignDuration(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.campaignDuration), value);
  }

  async clearCampaignDuration(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.campaignDuration));
  }

  async getCampaignDurationValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.campaignDuration));
  }

  async expectCampaignDurationVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BudgetAndSchedulePage.L.campaignDuration), timeoutMs, soft);
  }

  async fillTotalBudget(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.totalBudget), value);
  }

  async clearTotalBudget(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.totalBudget));
  }

  async getTotalBudgetValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.totalBudget));
  }

  async expectTotalBudgetVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BudgetAndSchedulePage.L.totalBudget), timeoutMs, soft);
  }

  async clickSwaphorizicon(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.swaphorizicon));
  }

  async doubleClickSwaphorizicon(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.swaphorizicon));
  }

  async expectSwaphoriziconVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BudgetAndSchedulePage.L.swaphorizicon), timeoutMs, soft);
  }

  async fillImpressions(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.impressions), value);
  }

  async clearImpressions(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.impressions));
  }

  async getImpressionsValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.impressions));
  }

  async expectImpressionsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BudgetAndSchedulePage.L.impressions), timeoutMs, soft);
  }

  async fillEstBudgetPerDay(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.estBudgetPerDay), value);
  }

  async clearEstBudgetPerDay(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.estBudgetPerDay));
  }

  async getEstBudgetPerDayValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.estBudgetPerDay));
  }

  async expectEstBudgetPerDayVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BudgetAndSchedulePage.L.estBudgetPerDay), timeoutMs, soft);
  }

  async clickNext(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.next));
  }

  async doubleClickNext(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.next));
  }

  async expectNextVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BudgetAndSchedulePage.L.next), timeoutMs, soft);
  }

  async clickCalendarViewIsOpen(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.calendarViewIsOpen));
  }

  async doubleClickCalendarViewIsOpen(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.calendarViewIsOpen));
  }

  async expectCalendarViewIsOpenVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BudgetAndSchedulePage.L.calendarViewIsOpen), timeoutMs, soft);
  }

  async clickNextMonth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.nextMonth));
  }

  async doubleClickNextMonth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.nextMonth));
  }

  async expectNextMonthVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BudgetAndSchedulePage.L.nextMonth), timeoutMs, soft);
  }

  async clickAm(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.am));
  }

  async doubleClickAm(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.am));
  }

  async expectAmVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BudgetAndSchedulePage.L.am), timeoutMs, soft);
  }

  async clickPm(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.pm));
  }

  async doubleClickPm(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.pm));
  }

  async expectPmVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BudgetAndSchedulePage.L.pm), timeoutMs, soft);
  }

  async clickOpenNextView(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.openNextView));
  }

  async doubleClickOpenNextView(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.openNextView));
  }

  async expectOpenNextViewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BudgetAndSchedulePage.L.openNextView), timeoutMs, soft);
  }

  async clickOk(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.ok));
  }

  async doubleClickOk(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.ok));
  }

  async expectOkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BudgetAndSchedulePage.L.ok), timeoutMs, soft);
  }

  async clickChooseDateSelectedDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.chooseDateSelectedDate));
  }

  async doubleClickChooseDateSelectedDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.chooseDateSelectedDate));
  }

  async expectChooseDateSelectedDateVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BudgetAndSchedulePage.L.chooseDateSelectedDate), timeoutMs, soft);
  }

  async clickChooseDateSelectedDateButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.chooseDateSelectedDateButton));
  }

  async doubleClickChooseDateSelectedDateButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.chooseDateSelectedDateButton));
  }

  async expectChooseDateSelectedDateButtonVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BudgetAndSchedulePage.L.chooseDateSelectedDateButton), timeoutMs, soft);
  }

  async clickPreviousMonth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.previousMonth));
  }

  async doubleClickPreviousMonth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.previousMonth));
  }

  async expectPreviousMonthVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BudgetAndSchedulePage.L.previousMonth), timeoutMs, soft);
  }

  // ── [role="grid"] ──────────────────────────────────────────────

  /** Text of any cell. row is 0-based; col is column name or 0-based index. */
  async getMuiDayCalendarRoot1TableText(row: number, col: number | string): Promise<string> {
    return this.muiDayCalendarRoot1.getText(row, col);
  }

  /** All text values for a column across every row. */
  async getMuiDayCalendarRoot1TableColumn(col: number | string): Promise<string[]> {
    return this.muiDayCalendarRoot1.getColumn(col);
  }

  /** All cell values for a row as { "Column Name": "value" }. */
  async getMuiDayCalendarRoot1TableRowData(row: number): Promise<Record<string, string>> {
    return this.muiDayCalendarRoot1.getRowData(row);
  }

  /** First row where col equals value (exact). Pass exact=false for contains match. */
  async findMuiDayCalendarRoot1TableRow(col: number | string, value: string, exact = true): Promise<number> {
    return this.muiDayCalendarRoot1.findRow(col, value, exact);
  }

  /** First row where any cell contains text (case-insensitive). */
  async findMuiDayCalendarRoot1TableRowByText(text: string): Promise<number> {
    return this.muiDayCalendarRoot1.findRowByText(text);
  }

  /** Total number of body rows. */
  async getMuiDayCalendarRoot1TableRowCount(): Promise<number> {
    return this.muiDayCalendarRoot1.rowCount();
  }

  /** Click the <a> link inside a cell. */
  async clickMuiDayCalendarRoot1TableLink(row: number, col: number | string): Promise<void> {
    return this.muiDayCalendarRoot1.clickLink(row, col);
  }

  /** href of the link inside a cell, or null if there is no link. */
  async getMuiDayCalendarRoot1TableLinkHref(row: number, col: number | string): Promise<string | null> {
    const cell = await this.muiDayCalendarRoot1.cell(row, col);
    const link = cell.locator('a');
    return (await link.count()) > 0 ? link.getAttribute('href') : null;
  }

  /** Check the row selection checkbox (idempotent). */
  async checkMuiDayCalendarRoot1TableRow(row: number): Promise<void> {
    const cb = this.muiDayCalendarRoot1.row(row).locator('input[type="checkbox"]').first();
    if (await cb.isChecked()) return;
    await cb.check({ force: true });
  }

  /** Uncheck the row selection checkbox (idempotent). */
  async uncheckMuiDayCalendarRoot1TableRow(row: number): Promise<void> {
    const cb = this.muiDayCalendarRoot1.row(row).locator('input[type="checkbox"]').first();
    if (!(await cb.isChecked())) return;
    await cb.uncheck({ force: true });
  }

  /** Whether the row selection checkbox is currently checked. */
  async isMuiDayCalendarRoot1TableRowChecked(row: number): Promise<boolean> {
    return this.muiDayCalendarRoot1.row(row).locator('input[type="checkbox"]').first().isChecked();
  }

  /** Current state of the toggle switch (role="switch") in the row — true = on/active. */
  async getMuiDayCalendarRoot1TableSwitchState(row: number): Promise<boolean> {
    return this.muiDayCalendarRoot1.getSwitchState(row);
  }

  /** Toggle the switch in a row. Pass targetState=true/false to set explicitly. */
  async toggleMuiDayCalendarRoot1TableSwitch(row: number, targetState?: boolean): Promise<void> {
    return this.muiDayCalendarRoot1.toggleSwitch(row, targetState);
  }

  /** Click a button in a row by optional label; omit label to click the last button (action menu). */
  async clickMuiDayCalendarRoot1TableButton(row: number, label?: string): Promise<void> {
    return this.muiDayCalendarRoot1.clickButton(row, label);
  }

  /** Click a named option inside an already-open row action dropdown. */
  async clickMuiDayCalendarRoot1TableMenuOption(label: string): Promise<void> {
    return this.muiDayCalendarRoot1.clickMenuOption(label);
  }

  /** Click a column header to sort. Call twice to reverse direction. */
  async sortMuiDayCalendarRoot1TableBy(col: string): Promise<void> {
    return this.muiDayCalendarRoot1.sortBy(col);
  }

  /** Locator for any element inside a row — toggles, buttons, custom controls. */
  getMuiDayCalendarRoot1TableInRow(row: number, selector: string): Locator {
    return this.muiDayCalendarRoot1.getInRow(row, selector);
  }


  async longPressBudgetSchedule(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.budgetSchedule));
  }

  async expectBudgetScheduleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BudgetAndSchedulePage.L.budgetSchedule), timeoutMs);
  }

  async expectBudgetScheduleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BudgetAndSchedulePage.L.budgetSchedule), expected, timeoutMs);
  }

  async expectBudgetScheduleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BudgetAndSchedulePage.L.budgetSchedule), substring, timeoutMs);
  }

  async expectBudgetScheduleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BudgetAndSchedulePage.L.budgetSchedule), value, timeoutMs);
  }

  async expectBudgetScheduleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BudgetAndSchedulePage.L.budgetSchedule), timeoutMs);
  }

  async expectBudgetScheduleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BudgetAndSchedulePage.L.budgetSchedule), timeoutMs);
  }

  async expectBudgetScheduleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BudgetAndSchedulePage.L.budgetSchedule), timeoutMs);
  }

  async expectBudgetScheduleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BudgetAndSchedulePage.L.budgetSchedule), timeoutMs);
  }

  async expectBudgetScheduleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BudgetAndSchedulePage.L.budgetSchedule), timeoutMs);
  }

  async expectBudgetScheduleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BudgetAndSchedulePage.L.budgetSchedule), count, timeoutMs);
  }

  async scrollBudgetScheduleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.budgetSchedule));
  }

  async typeTextCampaignDuration(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.campaignDuration), value);
  }

  async expectCampaignDurationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BudgetAndSchedulePage.L.campaignDuration), timeoutMs);
  }

  async expectCampaignDurationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BudgetAndSchedulePage.L.campaignDuration), expected, timeoutMs);
  }

  async expectCampaignDurationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BudgetAndSchedulePage.L.campaignDuration), substring, timeoutMs);
  }

  async expectCampaignDurationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BudgetAndSchedulePage.L.campaignDuration), value, timeoutMs);
  }

  async expectCampaignDurationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BudgetAndSchedulePage.L.campaignDuration), timeoutMs);
  }

  async expectCampaignDurationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BudgetAndSchedulePage.L.campaignDuration), timeoutMs);
  }

  async expectCampaignDurationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BudgetAndSchedulePage.L.campaignDuration), timeoutMs);
  }

  async expectCampaignDurationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BudgetAndSchedulePage.L.campaignDuration), timeoutMs);
  }

  async expectCampaignDurationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BudgetAndSchedulePage.L.campaignDuration), timeoutMs);
  }

  async expectCampaignDurationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BudgetAndSchedulePage.L.campaignDuration), count, timeoutMs);
  }

  async scrollCampaignDurationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.campaignDuration));
  }

  async typeTextTotalBudget(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.totalBudget), value);
  }

  async expectTotalBudgetHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BudgetAndSchedulePage.L.totalBudget), timeoutMs);
  }

  async expectTotalBudgetText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BudgetAndSchedulePage.L.totalBudget), expected, timeoutMs);
  }

  async expectTotalBudgetContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BudgetAndSchedulePage.L.totalBudget), substring, timeoutMs);
  }

  async expectTotalBudgetValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BudgetAndSchedulePage.L.totalBudget), value, timeoutMs);
  }

  async expectTotalBudgetEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BudgetAndSchedulePage.L.totalBudget), timeoutMs);
  }

  async expectTotalBudgetDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BudgetAndSchedulePage.L.totalBudget), timeoutMs);
  }

  async expectTotalBudgetChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BudgetAndSchedulePage.L.totalBudget), timeoutMs);
  }

  async expectTotalBudgetUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BudgetAndSchedulePage.L.totalBudget), timeoutMs);
  }

  async expectTotalBudgetFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BudgetAndSchedulePage.L.totalBudget), timeoutMs);
  }

  async expectTotalBudgetCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BudgetAndSchedulePage.L.totalBudget), count, timeoutMs);
  }

  async scrollTotalBudgetIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.totalBudget));
  }

  async longPressSwaphorizicon(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.swaphorizicon));
  }

  async expectSwaphoriziconHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BudgetAndSchedulePage.L.swaphorizicon), timeoutMs);
  }

  async expectSwaphoriziconText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BudgetAndSchedulePage.L.swaphorizicon), expected, timeoutMs);
  }

  async expectSwaphoriziconContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BudgetAndSchedulePage.L.swaphorizicon), substring, timeoutMs);
  }

  async expectSwaphoriziconValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BudgetAndSchedulePage.L.swaphorizicon), value, timeoutMs);
  }

  async expectSwaphoriziconEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BudgetAndSchedulePage.L.swaphorizicon), timeoutMs);
  }

  async expectSwaphoriziconDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BudgetAndSchedulePage.L.swaphorizicon), timeoutMs);
  }

  async expectSwaphoriziconChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BudgetAndSchedulePage.L.swaphorizicon), timeoutMs);
  }

  async expectSwaphoriziconUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BudgetAndSchedulePage.L.swaphorizicon), timeoutMs);
  }

  async expectSwaphoriziconFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BudgetAndSchedulePage.L.swaphorizicon), timeoutMs);
  }

  async expectSwaphoriziconCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BudgetAndSchedulePage.L.swaphorizicon), count, timeoutMs);
  }

  async scrollSwaphoriziconIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.swaphorizicon));
  }

  async typeTextImpressions(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.impressions), value);
  }

  async expectImpressionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BudgetAndSchedulePage.L.impressions), timeoutMs);
  }

  async expectImpressionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BudgetAndSchedulePage.L.impressions), expected, timeoutMs);
  }

  async expectImpressionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BudgetAndSchedulePage.L.impressions), substring, timeoutMs);
  }

  async expectImpressionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BudgetAndSchedulePage.L.impressions), value, timeoutMs);
  }

  async expectImpressionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BudgetAndSchedulePage.L.impressions), timeoutMs);
  }

  async expectImpressionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BudgetAndSchedulePage.L.impressions), timeoutMs);
  }

  async expectImpressionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BudgetAndSchedulePage.L.impressions), timeoutMs);
  }

  async expectImpressionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BudgetAndSchedulePage.L.impressions), timeoutMs);
  }

  async expectImpressionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BudgetAndSchedulePage.L.impressions), timeoutMs);
  }

  async expectImpressionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BudgetAndSchedulePage.L.impressions), count, timeoutMs);
  }

  async scrollImpressionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.impressions));
  }

  async typeTextEstBudgetPerDay(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.estBudgetPerDay), value);
  }

  async expectEstBudgetPerDayHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BudgetAndSchedulePage.L.estBudgetPerDay), timeoutMs);
  }

  async expectEstBudgetPerDayText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BudgetAndSchedulePage.L.estBudgetPerDay), expected, timeoutMs);
  }

  async expectEstBudgetPerDayContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BudgetAndSchedulePage.L.estBudgetPerDay), substring, timeoutMs);
  }

  async expectEstBudgetPerDayValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BudgetAndSchedulePage.L.estBudgetPerDay), value, timeoutMs);
  }

  async expectEstBudgetPerDayEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BudgetAndSchedulePage.L.estBudgetPerDay), timeoutMs);
  }

  async expectEstBudgetPerDayDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BudgetAndSchedulePage.L.estBudgetPerDay), timeoutMs);
  }

  async expectEstBudgetPerDayChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BudgetAndSchedulePage.L.estBudgetPerDay), timeoutMs);
  }

  async expectEstBudgetPerDayUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BudgetAndSchedulePage.L.estBudgetPerDay), timeoutMs);
  }

  async expectEstBudgetPerDayFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BudgetAndSchedulePage.L.estBudgetPerDay), timeoutMs);
  }

  async expectEstBudgetPerDayCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BudgetAndSchedulePage.L.estBudgetPerDay), count, timeoutMs);
  }

  async scrollEstBudgetPerDayIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.estBudgetPerDay));
  }

  async longPressNext(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.next));
  }

  async expectNextHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BudgetAndSchedulePage.L.next), timeoutMs);
  }

  async expectNextText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BudgetAndSchedulePage.L.next), expected, timeoutMs);
  }

  async expectNextContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BudgetAndSchedulePage.L.next), substring, timeoutMs);
  }

  async expectNextValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BudgetAndSchedulePage.L.next), value, timeoutMs);
  }

  async expectNextEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BudgetAndSchedulePage.L.next), timeoutMs);
  }

  async expectNextDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BudgetAndSchedulePage.L.next), timeoutMs);
  }

  async expectNextChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BudgetAndSchedulePage.L.next), timeoutMs);
  }

  async expectNextUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BudgetAndSchedulePage.L.next), timeoutMs);
  }

  async expectNextFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BudgetAndSchedulePage.L.next), timeoutMs);
  }

  async expectNextCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BudgetAndSchedulePage.L.next), count, timeoutMs);
  }

  async scrollNextIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.next));
  }

  async longPressCalendarViewIsOpen(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.calendarViewIsOpen));
  }

  async expectCalendarViewIsOpenHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BudgetAndSchedulePage.L.calendarViewIsOpen), timeoutMs);
  }

  async expectCalendarViewIsOpenText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BudgetAndSchedulePage.L.calendarViewIsOpen), expected, timeoutMs);
  }

  async expectCalendarViewIsOpenContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BudgetAndSchedulePage.L.calendarViewIsOpen), substring, timeoutMs);
  }

  async expectCalendarViewIsOpenValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BudgetAndSchedulePage.L.calendarViewIsOpen), value, timeoutMs);
  }

  async expectCalendarViewIsOpenEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BudgetAndSchedulePage.L.calendarViewIsOpen), timeoutMs);
  }

  async expectCalendarViewIsOpenDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BudgetAndSchedulePage.L.calendarViewIsOpen), timeoutMs);
  }

  async expectCalendarViewIsOpenChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BudgetAndSchedulePage.L.calendarViewIsOpen), timeoutMs);
  }

  async expectCalendarViewIsOpenUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BudgetAndSchedulePage.L.calendarViewIsOpen), timeoutMs);
  }

  async expectCalendarViewIsOpenFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BudgetAndSchedulePage.L.calendarViewIsOpen), timeoutMs);
  }

  async expectCalendarViewIsOpenCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BudgetAndSchedulePage.L.calendarViewIsOpen), count, timeoutMs);
  }

  async scrollCalendarViewIsOpenIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.calendarViewIsOpen));
  }

  async longPressNextMonth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.nextMonth));
  }

  async expectNextMonthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BudgetAndSchedulePage.L.nextMonth), timeoutMs);
  }

  async expectNextMonthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BudgetAndSchedulePage.L.nextMonth), expected, timeoutMs);
  }

  async expectNextMonthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BudgetAndSchedulePage.L.nextMonth), substring, timeoutMs);
  }

  async expectNextMonthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BudgetAndSchedulePage.L.nextMonth), value, timeoutMs);
  }

  async expectNextMonthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BudgetAndSchedulePage.L.nextMonth), timeoutMs);
  }

  async expectNextMonthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BudgetAndSchedulePage.L.nextMonth), timeoutMs);
  }

  async expectNextMonthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BudgetAndSchedulePage.L.nextMonth), timeoutMs);
  }

  async expectNextMonthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BudgetAndSchedulePage.L.nextMonth), timeoutMs);
  }

  async expectNextMonthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BudgetAndSchedulePage.L.nextMonth), timeoutMs);
  }

  async expectNextMonthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BudgetAndSchedulePage.L.nextMonth), count, timeoutMs);
  }

  async scrollNextMonthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.nextMonth));
  }

  async longPressAm(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.am));
  }

  async expectAmHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BudgetAndSchedulePage.L.am), timeoutMs);
  }

  async expectAmText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BudgetAndSchedulePage.L.am), expected, timeoutMs);
  }

  async expectAmContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BudgetAndSchedulePage.L.am), substring, timeoutMs);
  }

  async expectAmValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BudgetAndSchedulePage.L.am), value, timeoutMs);
  }

  async expectAmEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BudgetAndSchedulePage.L.am), timeoutMs);
  }

  async expectAmDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BudgetAndSchedulePage.L.am), timeoutMs);
  }

  async expectAmChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BudgetAndSchedulePage.L.am), timeoutMs);
  }

  async expectAmUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BudgetAndSchedulePage.L.am), timeoutMs);
  }

  async expectAmFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BudgetAndSchedulePage.L.am), timeoutMs);
  }

  async expectAmCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BudgetAndSchedulePage.L.am), count, timeoutMs);
  }

  async scrollAmIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.am));
  }

  async longPressPm(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.pm));
  }

  async expectPmHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BudgetAndSchedulePage.L.pm), timeoutMs);
  }

  async expectPmText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BudgetAndSchedulePage.L.pm), expected, timeoutMs);
  }

  async expectPmContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BudgetAndSchedulePage.L.pm), substring, timeoutMs);
  }

  async expectPmValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BudgetAndSchedulePage.L.pm), value, timeoutMs);
  }

  async expectPmEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BudgetAndSchedulePage.L.pm), timeoutMs);
  }

  async expectPmDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BudgetAndSchedulePage.L.pm), timeoutMs);
  }

  async expectPmChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BudgetAndSchedulePage.L.pm), timeoutMs);
  }

  async expectPmUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BudgetAndSchedulePage.L.pm), timeoutMs);
  }

  async expectPmFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BudgetAndSchedulePage.L.pm), timeoutMs);
  }

  async expectPmCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BudgetAndSchedulePage.L.pm), count, timeoutMs);
  }

  async scrollPmIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.pm));
  }

  async longPressOpenNextView(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.openNextView));
  }

  async expectOpenNextViewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BudgetAndSchedulePage.L.openNextView), timeoutMs);
  }

  async expectOpenNextViewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BudgetAndSchedulePage.L.openNextView), expected, timeoutMs);
  }

  async expectOpenNextViewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BudgetAndSchedulePage.L.openNextView), substring, timeoutMs);
  }

  async expectOpenNextViewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BudgetAndSchedulePage.L.openNextView), value, timeoutMs);
  }

  async expectOpenNextViewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BudgetAndSchedulePage.L.openNextView), timeoutMs);
  }

  async expectOpenNextViewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BudgetAndSchedulePage.L.openNextView), timeoutMs);
  }

  async expectOpenNextViewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BudgetAndSchedulePage.L.openNextView), timeoutMs);
  }

  async expectOpenNextViewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BudgetAndSchedulePage.L.openNextView), timeoutMs);
  }

  async expectOpenNextViewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BudgetAndSchedulePage.L.openNextView), timeoutMs);
  }

  async expectOpenNextViewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BudgetAndSchedulePage.L.openNextView), count, timeoutMs);
  }

  async scrollOpenNextViewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.openNextView));
  }

  async longPressOk(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.ok));
  }

  async expectOkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BudgetAndSchedulePage.L.ok), timeoutMs);
  }

  async expectOkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BudgetAndSchedulePage.L.ok), expected, timeoutMs);
  }

  async expectOkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BudgetAndSchedulePage.L.ok), substring, timeoutMs);
  }

  async expectOkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BudgetAndSchedulePage.L.ok), value, timeoutMs);
  }

  async expectOkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BudgetAndSchedulePage.L.ok), timeoutMs);
  }

  async expectOkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BudgetAndSchedulePage.L.ok), timeoutMs);
  }

  async expectOkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BudgetAndSchedulePage.L.ok), timeoutMs);
  }

  async expectOkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BudgetAndSchedulePage.L.ok), timeoutMs);
  }

  async expectOkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BudgetAndSchedulePage.L.ok), timeoutMs);
  }

  async expectOkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BudgetAndSchedulePage.L.ok), count, timeoutMs);
  }

  async scrollOkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.ok));
  }

  async longPressChooseDateSelectedDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.chooseDateSelectedDate));
  }

  async expectChooseDateSelectedDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BudgetAndSchedulePage.L.chooseDateSelectedDate), timeoutMs);
  }

  async expectChooseDateSelectedDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BudgetAndSchedulePage.L.chooseDateSelectedDate), expected, timeoutMs);
  }

  async expectChooseDateSelectedDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BudgetAndSchedulePage.L.chooseDateSelectedDate), substring, timeoutMs);
  }

  async expectChooseDateSelectedDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BudgetAndSchedulePage.L.chooseDateSelectedDate), value, timeoutMs);
  }

  async expectChooseDateSelectedDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BudgetAndSchedulePage.L.chooseDateSelectedDate), timeoutMs);
  }

  async expectChooseDateSelectedDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BudgetAndSchedulePage.L.chooseDateSelectedDate), timeoutMs);
  }

  async expectChooseDateSelectedDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BudgetAndSchedulePage.L.chooseDateSelectedDate), timeoutMs);
  }

  async expectChooseDateSelectedDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BudgetAndSchedulePage.L.chooseDateSelectedDate), timeoutMs);
  }

  async expectChooseDateSelectedDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BudgetAndSchedulePage.L.chooseDateSelectedDate), timeoutMs);
  }

  async expectChooseDateSelectedDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BudgetAndSchedulePage.L.chooseDateSelectedDate), count, timeoutMs);
  }

  async scrollChooseDateSelectedDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.chooseDateSelectedDate));
  }

  async longPressChooseDateSelectedDateButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.chooseDateSelectedDateButton));
  }

  async expectChooseDateSelectedDateButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BudgetAndSchedulePage.L.chooseDateSelectedDateButton), timeoutMs);
  }

  async expectChooseDateSelectedDateButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BudgetAndSchedulePage.L.chooseDateSelectedDateButton), expected, timeoutMs);
  }

  async expectChooseDateSelectedDateButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BudgetAndSchedulePage.L.chooseDateSelectedDateButton), substring, timeoutMs);
  }

  async expectChooseDateSelectedDateButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BudgetAndSchedulePage.L.chooseDateSelectedDateButton), value, timeoutMs);
  }

  async expectChooseDateSelectedDateButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BudgetAndSchedulePage.L.chooseDateSelectedDateButton), timeoutMs);
  }

  async expectChooseDateSelectedDateButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BudgetAndSchedulePage.L.chooseDateSelectedDateButton), timeoutMs);
  }

  async expectChooseDateSelectedDateButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BudgetAndSchedulePage.L.chooseDateSelectedDateButton), timeoutMs);
  }

  async expectChooseDateSelectedDateButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BudgetAndSchedulePage.L.chooseDateSelectedDateButton), timeoutMs);
  }

  async expectChooseDateSelectedDateButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BudgetAndSchedulePage.L.chooseDateSelectedDateButton), timeoutMs);
  }

  async expectChooseDateSelectedDateButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BudgetAndSchedulePage.L.chooseDateSelectedDateButton), count, timeoutMs);
  }

  async scrollChooseDateSelectedDateButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.chooseDateSelectedDateButton));
  }

  async longPressPreviousMonth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.previousMonth));
  }

  async expectPreviousMonthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BudgetAndSchedulePage.L.previousMonth), timeoutMs);
  }

  async expectPreviousMonthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BudgetAndSchedulePage.L.previousMonth), expected, timeoutMs);
  }

  async expectPreviousMonthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BudgetAndSchedulePage.L.previousMonth), substring, timeoutMs);
  }

  async expectPreviousMonthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BudgetAndSchedulePage.L.previousMonth), value, timeoutMs);
  }

  async expectPreviousMonthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BudgetAndSchedulePage.L.previousMonth), timeoutMs);
  }

  async expectPreviousMonthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BudgetAndSchedulePage.L.previousMonth), timeoutMs);
  }

  async expectPreviousMonthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BudgetAndSchedulePage.L.previousMonth), timeoutMs);
  }

  async expectPreviousMonthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BudgetAndSchedulePage.L.previousMonth), timeoutMs);
  }

  async expectPreviousMonthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BudgetAndSchedulePage.L.previousMonth), timeoutMs);
  }

  async expectPreviousMonthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BudgetAndSchedulePage.L.previousMonth), count, timeoutMs);
  }

  async scrollPreviousMonthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BudgetAndSchedulePage.L.previousMonth));
  }

}
