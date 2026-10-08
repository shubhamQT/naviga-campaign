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

export class TargetingOptionsPage {
  private static readonly L = {
    targetingOptions: { strategy: 'role' as const, value: '[[Targeting Options]]', role: 'button', actionKind: 'button' as const },
    geographicTarget: { strategy: 'css' as const, value: '#GEOGRAPHIC_TARGET[name="Geographic Target"]', role: 'group', actionKind: 'generic' as const },
    geographicTarget2: { strategy: 'altText' as const, value: 'Geographic Target', role: 'img', actionKind: 'generic' as const },
    audienceTarget: { strategy: 'css' as const, value: '#CONTEXTUAL_TARGET[name="Audience Target"]', role: 'group', actionKind: 'generic' as const },
    audienceTarget2: { strategy: 'altText' as const, value: 'Audience Target', role: 'img', actionKind: 'generic' as const },
    locationSearch: { strategy: 'css' as const, value: '#location-search-field[name="locationSearch"]', role: 'textbox', actionKind: 'textbox' as const },
    search: { strategy: 'text' as const, value: '​ ​ Search', actionKind: 'generic' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickTargetingOptions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TargetingOptionsPage.L.targetingOptions));
  }

  async doubleClickTargetingOptions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TargetingOptionsPage.L.targetingOptions));
  }

  async expectTargetingOptionsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TargetingOptionsPage.L.targetingOptions), timeoutMs, soft);
  }

  async clickGeographicTarget(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TargetingOptionsPage.L.geographicTarget));
  }

  async expectGeographicTargetVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TargetingOptionsPage.L.geographicTarget), timeoutMs, soft);
  }

  async clickGeographicTarget2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TargetingOptionsPage.L.geographicTarget2));
  }

  async expectGeographicTarget2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TargetingOptionsPage.L.geographicTarget2), timeoutMs, soft);
  }

  async clickAudienceTarget(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TargetingOptionsPage.L.audienceTarget));
  }

  async expectAudienceTargetVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TargetingOptionsPage.L.audienceTarget), timeoutMs, soft);
  }

  async clickAudienceTarget2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TargetingOptionsPage.L.audienceTarget2));
  }

  async expectAudienceTarget2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TargetingOptionsPage.L.audienceTarget2), timeoutMs, soft);
  }

  async fillLocationSearch(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, TargetingOptionsPage.L.locationSearch), value);
  }

  async clearLocationSearch(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, TargetingOptionsPage.L.locationSearch));
  }

  async getLocationSearchValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TargetingOptionsPage.L.locationSearch));
  }

  async expectLocationSearchVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TargetingOptionsPage.L.locationSearch), timeoutMs, soft);
  }

  async clickSearch(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TargetingOptionsPage.L.search));
  }

  async expectSearchVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TargetingOptionsPage.L.search), timeoutMs, soft);
  }


  async longPressTargetingOptions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TargetingOptionsPage.L.targetingOptions));
  }

  async expectTargetingOptionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TargetingOptionsPage.L.targetingOptions), timeoutMs);
  }

  async expectTargetingOptionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TargetingOptionsPage.L.targetingOptions), expected, timeoutMs);
  }

  async expectTargetingOptionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TargetingOptionsPage.L.targetingOptions), substring, timeoutMs);
  }

  async expectTargetingOptionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TargetingOptionsPage.L.targetingOptions), value, timeoutMs);
  }

  async expectTargetingOptionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TargetingOptionsPage.L.targetingOptions), timeoutMs);
  }

  async expectTargetingOptionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TargetingOptionsPage.L.targetingOptions), timeoutMs);
  }

  async expectTargetingOptionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TargetingOptionsPage.L.targetingOptions), timeoutMs);
  }

  async expectTargetingOptionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TargetingOptionsPage.L.targetingOptions), timeoutMs);
  }

  async expectTargetingOptionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TargetingOptionsPage.L.targetingOptions), timeoutMs);
  }

  async expectTargetingOptionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TargetingOptionsPage.L.targetingOptions), count, timeoutMs);
  }

  async scrollTargetingOptionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TargetingOptionsPage.L.targetingOptions));
  }

  async doubleClickGeographicTarget(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TargetingOptionsPage.L.geographicTarget));
  }

  async longPressGeographicTarget(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TargetingOptionsPage.L.geographicTarget));
  }

  async expectGeographicTargetHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TargetingOptionsPage.L.geographicTarget), timeoutMs);
  }

  async expectGeographicTargetText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TargetingOptionsPage.L.geographicTarget), expected, timeoutMs);
  }

  async expectGeographicTargetContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TargetingOptionsPage.L.geographicTarget), substring, timeoutMs);
  }

  async expectGeographicTargetValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TargetingOptionsPage.L.geographicTarget), value, timeoutMs);
  }

  async expectGeographicTargetEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TargetingOptionsPage.L.geographicTarget), timeoutMs);
  }

  async expectGeographicTargetDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TargetingOptionsPage.L.geographicTarget), timeoutMs);
  }

  async expectGeographicTargetChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TargetingOptionsPage.L.geographicTarget), timeoutMs);
  }

  async expectGeographicTargetUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TargetingOptionsPage.L.geographicTarget), timeoutMs);
  }

  async expectGeographicTargetFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TargetingOptionsPage.L.geographicTarget), timeoutMs);
  }

  async expectGeographicTargetCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TargetingOptionsPage.L.geographicTarget), count, timeoutMs);
  }

  async scrollGeographicTargetIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TargetingOptionsPage.L.geographicTarget));
  }

  async doubleClickGeographicTarget2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TargetingOptionsPage.L.geographicTarget2));
  }

  async longPressGeographicTarget2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TargetingOptionsPage.L.geographicTarget2));
  }

  async expectGeographicTarget2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TargetingOptionsPage.L.geographicTarget2), timeoutMs);
  }

  async expectGeographicTarget2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TargetingOptionsPage.L.geographicTarget2), expected, timeoutMs);
  }

  async expectGeographicTarget2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TargetingOptionsPage.L.geographicTarget2), substring, timeoutMs);
  }

  async expectGeographicTarget2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TargetingOptionsPage.L.geographicTarget2), value, timeoutMs);
  }

  async expectGeographicTarget2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TargetingOptionsPage.L.geographicTarget2), timeoutMs);
  }

  async expectGeographicTarget2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TargetingOptionsPage.L.geographicTarget2), timeoutMs);
  }

  async expectGeographicTarget2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TargetingOptionsPage.L.geographicTarget2), timeoutMs);
  }

  async expectGeographicTarget2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TargetingOptionsPage.L.geographicTarget2), timeoutMs);
  }

  async expectGeographicTarget2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TargetingOptionsPage.L.geographicTarget2), timeoutMs);
  }

  async expectGeographicTarget2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TargetingOptionsPage.L.geographicTarget2), count, timeoutMs);
  }

  async scrollGeographicTarget2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TargetingOptionsPage.L.geographicTarget2));
  }

  async doubleClickAudienceTarget(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TargetingOptionsPage.L.audienceTarget));
  }

  async longPressAudienceTarget(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TargetingOptionsPage.L.audienceTarget));
  }

  async expectAudienceTargetHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TargetingOptionsPage.L.audienceTarget), timeoutMs);
  }

  async expectAudienceTargetText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TargetingOptionsPage.L.audienceTarget), expected, timeoutMs);
  }

  async expectAudienceTargetContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TargetingOptionsPage.L.audienceTarget), substring, timeoutMs);
  }

  async expectAudienceTargetValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TargetingOptionsPage.L.audienceTarget), value, timeoutMs);
  }

  async expectAudienceTargetEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TargetingOptionsPage.L.audienceTarget), timeoutMs);
  }

  async expectAudienceTargetDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TargetingOptionsPage.L.audienceTarget), timeoutMs);
  }

  async expectAudienceTargetChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TargetingOptionsPage.L.audienceTarget), timeoutMs);
  }

  async expectAudienceTargetUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TargetingOptionsPage.L.audienceTarget), timeoutMs);
  }

  async expectAudienceTargetFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TargetingOptionsPage.L.audienceTarget), timeoutMs);
  }

  async expectAudienceTargetCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TargetingOptionsPage.L.audienceTarget), count, timeoutMs);
  }

  async scrollAudienceTargetIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TargetingOptionsPage.L.audienceTarget));
  }

  async doubleClickAudienceTarget2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TargetingOptionsPage.L.audienceTarget2));
  }

  async longPressAudienceTarget2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TargetingOptionsPage.L.audienceTarget2));
  }

  async expectAudienceTarget2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TargetingOptionsPage.L.audienceTarget2), timeoutMs);
  }

  async expectAudienceTarget2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TargetingOptionsPage.L.audienceTarget2), expected, timeoutMs);
  }

  async expectAudienceTarget2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TargetingOptionsPage.L.audienceTarget2), substring, timeoutMs);
  }

  async expectAudienceTarget2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TargetingOptionsPage.L.audienceTarget2), value, timeoutMs);
  }

  async expectAudienceTarget2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TargetingOptionsPage.L.audienceTarget2), timeoutMs);
  }

  async expectAudienceTarget2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TargetingOptionsPage.L.audienceTarget2), timeoutMs);
  }

  async expectAudienceTarget2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TargetingOptionsPage.L.audienceTarget2), timeoutMs);
  }

  async expectAudienceTarget2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TargetingOptionsPage.L.audienceTarget2), timeoutMs);
  }

  async expectAudienceTarget2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TargetingOptionsPage.L.audienceTarget2), timeoutMs);
  }

  async expectAudienceTarget2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TargetingOptionsPage.L.audienceTarget2), count, timeoutMs);
  }

  async scrollAudienceTarget2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TargetingOptionsPage.L.audienceTarget2));
  }

  async typeTextLocationSearch(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, TargetingOptionsPage.L.locationSearch), value);
  }

  async expectLocationSearchHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TargetingOptionsPage.L.locationSearch), timeoutMs);
  }

  async expectLocationSearchText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TargetingOptionsPage.L.locationSearch), expected, timeoutMs);
  }

  async expectLocationSearchContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TargetingOptionsPage.L.locationSearch), substring, timeoutMs);
  }

  async expectLocationSearchValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TargetingOptionsPage.L.locationSearch), value, timeoutMs);
  }

  async expectLocationSearchEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TargetingOptionsPage.L.locationSearch), timeoutMs);
  }

  async expectLocationSearchDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TargetingOptionsPage.L.locationSearch), timeoutMs);
  }

  async expectLocationSearchChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TargetingOptionsPage.L.locationSearch), timeoutMs);
  }

  async expectLocationSearchUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TargetingOptionsPage.L.locationSearch), timeoutMs);
  }

  async expectLocationSearchFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TargetingOptionsPage.L.locationSearch), timeoutMs);
  }

  async expectLocationSearchCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TargetingOptionsPage.L.locationSearch), count, timeoutMs);
  }

  async scrollLocationSearchIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TargetingOptionsPage.L.locationSearch));
  }

  async doubleClickSearch(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TargetingOptionsPage.L.search));
  }

  async longPressSearch(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TargetingOptionsPage.L.search));
  }

  async expectSearchHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TargetingOptionsPage.L.search), timeoutMs);
  }

  async expectSearchText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TargetingOptionsPage.L.search), expected, timeoutMs);
  }

  async expectSearchContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TargetingOptionsPage.L.search), substring, timeoutMs);
  }

  async expectSearchValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TargetingOptionsPage.L.search), value, timeoutMs);
  }

  async expectSearchEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TargetingOptionsPage.L.search), timeoutMs);
  }

  async expectSearchDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TargetingOptionsPage.L.search), timeoutMs);
  }

  async expectSearchChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TargetingOptionsPage.L.search), timeoutMs);
  }

  async expectSearchUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TargetingOptionsPage.L.search), timeoutMs);
  }

  async expectSearchFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TargetingOptionsPage.L.search), timeoutMs);
  }

  async expectSearchCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TargetingOptionsPage.L.search), count, timeoutMs);
  }

  async scrollSearchIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TargetingOptionsPage.L.search));
  }

}
