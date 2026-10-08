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

export class AddPublicationsPage {
  private static readonly L = {
    collapsedLogo: { strategy: 'css' as const, value: '#navbar-logo-collapsed', role: 'img', actionKind: 'generic' as const },
    addPublication: { strategy: 'role' as const, value: '[[Add Publication]]', role: 'button', actionKind: 'button' as const },
    addPublicationsSelectPublication: { strategy: 'role' as const, value: 'Add Publications Select publication ​ ​', role: 'button', actionKind: 'button' as const },
    search: { strategy: 'css' as const, value: '#publications-search-field[name="search"]', role: 'textbox', actionKind: 'textbox' as const },
    bikingMagLogo: { strategy: 'altText' as const, value: 'Biking Mag logo', role: 'img', actionKind: 'generic' as const },
    theNavigatorWebsiteLogo: { strategy: 'altText' as const, value: 'The Navigator Website logo', role: 'img', actionKind: 'generic' as const },
    trailMagWebsiteLogo: { strategy: 'altText' as const, value: 'Trail Mag Website logo', role: 'img', actionKind: 'generic' as const },
    nextButton: { strategy: 'role' as const, value: 'Next', role: 'button', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickCollapsedLogo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AddPublicationsPage.L.collapsedLogo));
  }

  async expectCollapsedLogoVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AddPublicationsPage.L.collapsedLogo), timeoutMs, soft);
  }

  async clickAddPublication(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AddPublicationsPage.L.addPublication));
  }

  async doubleClickAddPublication(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AddPublicationsPage.L.addPublication));
  }

  async expectAddPublicationVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AddPublicationsPage.L.addPublication), timeoutMs, soft);
  }

  async clickAddPublicationsSelectPublication(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AddPublicationsPage.L.addPublicationsSelectPublication));
  }

  async doubleClickAddPublicationsSelectPublication(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AddPublicationsPage.L.addPublicationsSelectPublication));
  }

  async expectAddPublicationsSelectPublicationVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AddPublicationsPage.L.addPublicationsSelectPublication), timeoutMs, soft);
  }

  async fillSearch(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, AddPublicationsPage.L.search), value);
  }

  async clearSearch(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, AddPublicationsPage.L.search));
  }

  async getSearchValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AddPublicationsPage.L.search));
  }

  async expectSearchVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AddPublicationsPage.L.search), timeoutMs, soft);
  }

  async clickBikingMagLogo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AddPublicationsPage.L.bikingMagLogo));
  }

  async expectBikingMagLogoVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AddPublicationsPage.L.bikingMagLogo), timeoutMs, soft);
  }

  async clickTheNavigatorWebsiteLogo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AddPublicationsPage.L.theNavigatorWebsiteLogo));
  }

  async expectTheNavigatorWebsiteLogoVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AddPublicationsPage.L.theNavigatorWebsiteLogo), timeoutMs, soft);
  }

  async clickTrailMagWebsiteLogo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AddPublicationsPage.L.trailMagWebsiteLogo));
  }

  async expectTrailMagWebsiteLogoVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AddPublicationsPage.L.trailMagWebsiteLogo), timeoutMs, soft);
  }

  async clickNextButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AddPublicationsPage.L.nextButton));
  }

  async doubleClickNextButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AddPublicationsPage.L.nextButton));
  }

  async expectNextButtonVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AddPublicationsPage.L.nextButton), timeoutMs, soft);
  }


  async doubleClickCollapsedLogo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AddPublicationsPage.L.collapsedLogo));
  }

  async longPressCollapsedLogo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AddPublicationsPage.L.collapsedLogo));
  }

  async expectCollapsedLogoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AddPublicationsPage.L.collapsedLogo), timeoutMs);
  }

  async expectCollapsedLogoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AddPublicationsPage.L.collapsedLogo), expected, timeoutMs);
  }

  async expectCollapsedLogoContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AddPublicationsPage.L.collapsedLogo), substring, timeoutMs);
  }

  async expectCollapsedLogoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AddPublicationsPage.L.collapsedLogo), value, timeoutMs);
  }

  async expectCollapsedLogoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AddPublicationsPage.L.collapsedLogo), timeoutMs);
  }

  async expectCollapsedLogoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AddPublicationsPage.L.collapsedLogo), timeoutMs);
  }

  async expectCollapsedLogoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AddPublicationsPage.L.collapsedLogo), timeoutMs);
  }

  async expectCollapsedLogoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AddPublicationsPage.L.collapsedLogo), timeoutMs);
  }

  async expectCollapsedLogoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AddPublicationsPage.L.collapsedLogo), timeoutMs);
  }

  async expectCollapsedLogoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AddPublicationsPage.L.collapsedLogo), count, timeoutMs);
  }

  async scrollCollapsedLogoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AddPublicationsPage.L.collapsedLogo));
  }

  async longPressAddPublication(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AddPublicationsPage.L.addPublication));
  }

  async expectAddPublicationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AddPublicationsPage.L.addPublication), timeoutMs);
  }

  async expectAddPublicationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AddPublicationsPage.L.addPublication), expected, timeoutMs);
  }

  async expectAddPublicationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AddPublicationsPage.L.addPublication), substring, timeoutMs);
  }

  async expectAddPublicationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AddPublicationsPage.L.addPublication), value, timeoutMs);
  }

  async expectAddPublicationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AddPublicationsPage.L.addPublication), timeoutMs);
  }

  async expectAddPublicationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AddPublicationsPage.L.addPublication), timeoutMs);
  }

  async expectAddPublicationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AddPublicationsPage.L.addPublication), timeoutMs);
  }

  async expectAddPublicationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AddPublicationsPage.L.addPublication), timeoutMs);
  }

  async expectAddPublicationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AddPublicationsPage.L.addPublication), timeoutMs);
  }

  async expectAddPublicationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AddPublicationsPage.L.addPublication), count, timeoutMs);
  }

  async scrollAddPublicationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AddPublicationsPage.L.addPublication));
  }

  async longPressAddPublicationsSelectPublication(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AddPublicationsPage.L.addPublicationsSelectPublication));
  }

  async expectAddPublicationsSelectPublicationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AddPublicationsPage.L.addPublicationsSelectPublication), timeoutMs);
  }

  async expectAddPublicationsSelectPublicationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AddPublicationsPage.L.addPublicationsSelectPublication), expected, timeoutMs);
  }

  async expectAddPublicationsSelectPublicationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AddPublicationsPage.L.addPublicationsSelectPublication), substring, timeoutMs);
  }

  async expectAddPublicationsSelectPublicationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AddPublicationsPage.L.addPublicationsSelectPublication), value, timeoutMs);
  }

  async expectAddPublicationsSelectPublicationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AddPublicationsPage.L.addPublicationsSelectPublication), timeoutMs);
  }

  async expectAddPublicationsSelectPublicationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AddPublicationsPage.L.addPublicationsSelectPublication), timeoutMs);
  }

  async expectAddPublicationsSelectPublicationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AddPublicationsPage.L.addPublicationsSelectPublication), timeoutMs);
  }

  async expectAddPublicationsSelectPublicationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AddPublicationsPage.L.addPublicationsSelectPublication), timeoutMs);
  }

  async expectAddPublicationsSelectPublicationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AddPublicationsPage.L.addPublicationsSelectPublication), timeoutMs);
  }

  async expectAddPublicationsSelectPublicationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AddPublicationsPage.L.addPublicationsSelectPublication), count, timeoutMs);
  }

  async scrollAddPublicationsSelectPublicationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AddPublicationsPage.L.addPublicationsSelectPublication));
  }

  async typeTextSearch(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, AddPublicationsPage.L.search), value);
  }

  async expectSearchHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AddPublicationsPage.L.search), timeoutMs);
  }

  async expectSearchText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AddPublicationsPage.L.search), expected, timeoutMs);
  }

  async expectSearchContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AddPublicationsPage.L.search), substring, timeoutMs);
  }

  async expectSearchValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AddPublicationsPage.L.search), value, timeoutMs);
  }

  async expectSearchEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AddPublicationsPage.L.search), timeoutMs);
  }

  async expectSearchDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AddPublicationsPage.L.search), timeoutMs);
  }

  async expectSearchChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AddPublicationsPage.L.search), timeoutMs);
  }

  async expectSearchUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AddPublicationsPage.L.search), timeoutMs);
  }

  async expectSearchFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AddPublicationsPage.L.search), timeoutMs);
  }

  async expectSearchCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AddPublicationsPage.L.search), count, timeoutMs);
  }

  async scrollSearchIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AddPublicationsPage.L.search));
  }

  async doubleClickBikingMagLogo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AddPublicationsPage.L.bikingMagLogo));
  }

  async longPressBikingMagLogo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AddPublicationsPage.L.bikingMagLogo));
  }

  async expectBikingMagLogoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AddPublicationsPage.L.bikingMagLogo), timeoutMs);
  }

  async expectBikingMagLogoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AddPublicationsPage.L.bikingMagLogo), expected, timeoutMs);
  }

  async expectBikingMagLogoContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AddPublicationsPage.L.bikingMagLogo), substring, timeoutMs);
  }

  async expectBikingMagLogoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AddPublicationsPage.L.bikingMagLogo), value, timeoutMs);
  }

  async expectBikingMagLogoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AddPublicationsPage.L.bikingMagLogo), timeoutMs);
  }

  async expectBikingMagLogoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AddPublicationsPage.L.bikingMagLogo), timeoutMs);
  }

  async expectBikingMagLogoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AddPublicationsPage.L.bikingMagLogo), timeoutMs);
  }

  async expectBikingMagLogoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AddPublicationsPage.L.bikingMagLogo), timeoutMs);
  }

  async expectBikingMagLogoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AddPublicationsPage.L.bikingMagLogo), timeoutMs);
  }

  async expectBikingMagLogoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AddPublicationsPage.L.bikingMagLogo), count, timeoutMs);
  }

  async scrollBikingMagLogoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AddPublicationsPage.L.bikingMagLogo));
  }

  async doubleClickTheNavigatorWebsiteLogo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AddPublicationsPage.L.theNavigatorWebsiteLogo));
  }

  async longPressTheNavigatorWebsiteLogo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AddPublicationsPage.L.theNavigatorWebsiteLogo));
  }

  async expectTheNavigatorWebsiteLogoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AddPublicationsPage.L.theNavigatorWebsiteLogo), timeoutMs);
  }

  async expectTheNavigatorWebsiteLogoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AddPublicationsPage.L.theNavigatorWebsiteLogo), expected, timeoutMs);
  }

  async expectTheNavigatorWebsiteLogoContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AddPublicationsPage.L.theNavigatorWebsiteLogo), substring, timeoutMs);
  }

  async expectTheNavigatorWebsiteLogoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AddPublicationsPage.L.theNavigatorWebsiteLogo), value, timeoutMs);
  }

  async expectTheNavigatorWebsiteLogoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AddPublicationsPage.L.theNavigatorWebsiteLogo), timeoutMs);
  }

  async expectTheNavigatorWebsiteLogoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AddPublicationsPage.L.theNavigatorWebsiteLogo), timeoutMs);
  }

  async expectTheNavigatorWebsiteLogoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AddPublicationsPage.L.theNavigatorWebsiteLogo), timeoutMs);
  }

  async expectTheNavigatorWebsiteLogoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AddPublicationsPage.L.theNavigatorWebsiteLogo), timeoutMs);
  }

  async expectTheNavigatorWebsiteLogoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AddPublicationsPage.L.theNavigatorWebsiteLogo), timeoutMs);
  }

  async expectTheNavigatorWebsiteLogoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AddPublicationsPage.L.theNavigatorWebsiteLogo), count, timeoutMs);
  }

  async scrollTheNavigatorWebsiteLogoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AddPublicationsPage.L.theNavigatorWebsiteLogo));
  }

  async doubleClickTrailMagWebsiteLogo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AddPublicationsPage.L.trailMagWebsiteLogo));
  }

  async longPressTrailMagWebsiteLogo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AddPublicationsPage.L.trailMagWebsiteLogo));
  }

  async expectTrailMagWebsiteLogoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AddPublicationsPage.L.trailMagWebsiteLogo), timeoutMs);
  }

  async expectTrailMagWebsiteLogoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AddPublicationsPage.L.trailMagWebsiteLogo), expected, timeoutMs);
  }

  async expectTrailMagWebsiteLogoContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AddPublicationsPage.L.trailMagWebsiteLogo), substring, timeoutMs);
  }

  async expectTrailMagWebsiteLogoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AddPublicationsPage.L.trailMagWebsiteLogo), value, timeoutMs);
  }

  async expectTrailMagWebsiteLogoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AddPublicationsPage.L.trailMagWebsiteLogo), timeoutMs);
  }

  async expectTrailMagWebsiteLogoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AddPublicationsPage.L.trailMagWebsiteLogo), timeoutMs);
  }

  async expectTrailMagWebsiteLogoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AddPublicationsPage.L.trailMagWebsiteLogo), timeoutMs);
  }

  async expectTrailMagWebsiteLogoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AddPublicationsPage.L.trailMagWebsiteLogo), timeoutMs);
  }

  async expectTrailMagWebsiteLogoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AddPublicationsPage.L.trailMagWebsiteLogo), timeoutMs);
  }

  async expectTrailMagWebsiteLogoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AddPublicationsPage.L.trailMagWebsiteLogo), count, timeoutMs);
  }

  async scrollTrailMagWebsiteLogoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AddPublicationsPage.L.trailMagWebsiteLogo));
  }

  async longPressNextButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AddPublicationsPage.L.nextButton));
  }

  async expectNextButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AddPublicationsPage.L.nextButton), timeoutMs);
  }

  async expectNextButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AddPublicationsPage.L.nextButton), expected, timeoutMs);
  }

  async expectNextButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AddPublicationsPage.L.nextButton), substring, timeoutMs);
  }

  async expectNextButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AddPublicationsPage.L.nextButton), value, timeoutMs);
  }

  async expectNextButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AddPublicationsPage.L.nextButton), timeoutMs);
  }

  async expectNextButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AddPublicationsPage.L.nextButton), timeoutMs);
  }

  async expectNextButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AddPublicationsPage.L.nextButton), timeoutMs);
  }

  async expectNextButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AddPublicationsPage.L.nextButton), timeoutMs);
  }

  async expectNextButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AddPublicationsPage.L.nextButton), timeoutMs);
  }

  async expectNextButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AddPublicationsPage.L.nextButton), count, timeoutMs);
  }

  async scrollNextButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AddPublicationsPage.L.nextButton));
  }

}
