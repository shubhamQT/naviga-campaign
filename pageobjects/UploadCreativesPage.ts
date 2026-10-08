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

export class UploadCreativesPage {
  private static readonly L = {
    uploadCreateAd: { strategy: 'role' as const, value: 'Upload / Create Ad Design', role: 'button', actionKind: 'button' as const },
    uploadCreativeLater: { strategy: 'css' as const, value: '#Later[name="uploadCreateAdChannel"]', role: 'group', actionKind: 'generic' as const },
    upload: { strategy: 'altText' as const, value: 'Upload', role: 'img', actionKind: 'generic' as const },
    uploadYourCreative: { strategy: 'css' as const, value: '#Upload[name="uploadCreateAdChannel"]', role: 'group', actionKind: 'generic' as const },
    buildAdWithAi: { strategy: 'css' as const, value: '#Build[name="uploadCreateAdChannel"]', role: 'group', actionKind: 'generic' as const },
    build: { strategy: 'altText' as const, value: 'Build', role: 'img', actionKind: 'generic' as const },
    chooseFromLibrary: { strategy: 'css' as const, value: '#Library[name="uploadCreateAdChannel"]', role: 'group', actionKind: 'generic' as const },
    library: { strategy: 'altText' as const, value: 'Library', role: 'img', actionKind: 'generic' as const },
    thirdPartyAdTags: { strategy: 'css' as const, value: '#thirdParty[name="thirdPartyAdTags"]', role: 'group', actionKind: 'generic' as const },
    rdPartyAdTags: { strategy: 'altText' as const, value: '3rd Party Ad Tags', role: 'img', actionKind: 'generic' as const },
    next: { strategy: 'role' as const, value: 'Next', role: 'button', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickUploadCreateAd(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UploadCreativesPage.L.uploadCreateAd));
  }

  async doubleClickUploadCreateAd(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UploadCreativesPage.L.uploadCreateAd));
  }

  async expectUploadCreateAdVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UploadCreativesPage.L.uploadCreateAd), timeoutMs, soft);
  }

  async clickUploadCreativeLater(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UploadCreativesPage.L.uploadCreativeLater));
  }

  async expectUploadCreativeLaterVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UploadCreativesPage.L.uploadCreativeLater), timeoutMs, soft);
  }

  /** "Upload" matches 2 elements with the exact same locator (e.g. a repeated list/feed item) — pass index (0-based) to pick a specific occurrence; omit it to use whichever match is currently visible (click helpers pick the in-viewport one, assertions check the first). No distinguishing context was found between occurrences — check the page manually to know which is which. */
  async clickUpload(index?: number): Promise<void> {
    await clickWhenVisible(webLocator(this.page, { ...UploadCreativesPage.L.upload, index }), undefined, index !== undefined);
  }

  async expectUploadVisible(timeoutMs = 30_000, soft = true, index?: number): Promise<void> {
    await expectVisible(webLocator(this.page, { ...UploadCreativesPage.L.upload, index }), timeoutMs, soft, index !== undefined);
  }

  async clickUploadYourCreative(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UploadCreativesPage.L.uploadYourCreative));
  }

  async expectUploadYourCreativeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UploadCreativesPage.L.uploadYourCreative), timeoutMs, soft);
  }

  async clickBuildAdWithAi(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UploadCreativesPage.L.buildAdWithAi));
  }

  async expectBuildAdWithAiVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UploadCreativesPage.L.buildAdWithAi), timeoutMs, soft);
  }

  async clickBuild(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UploadCreativesPage.L.build));
  }

  async expectBuildVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UploadCreativesPage.L.build), timeoutMs, soft);
  }

  async clickChooseFromLibrary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UploadCreativesPage.L.chooseFromLibrary));
  }

  async expectChooseFromLibraryVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UploadCreativesPage.L.chooseFromLibrary), timeoutMs, soft);
  }

  async clickLibrary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UploadCreativesPage.L.library));
  }

  async expectLibraryVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UploadCreativesPage.L.library), timeoutMs, soft);
  }

  async clickThirdPartyAdTags(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UploadCreativesPage.L.thirdPartyAdTags));
  }

  async expectThirdPartyAdTagsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UploadCreativesPage.L.thirdPartyAdTags), timeoutMs, soft);
  }

  async clickRdPartyAdTags(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UploadCreativesPage.L.rdPartyAdTags));
  }

  async expectRdPartyAdTagsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UploadCreativesPage.L.rdPartyAdTags), timeoutMs, soft);
  }

  async clickNext(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UploadCreativesPage.L.next));
  }

  async doubleClickNext(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UploadCreativesPage.L.next));
  }

  async expectNextVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UploadCreativesPage.L.next), timeoutMs, soft);
  }


  async longPressUploadCreateAd(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UploadCreativesPage.L.uploadCreateAd));
  }

  async expectUploadCreateAdHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UploadCreativesPage.L.uploadCreateAd), timeoutMs);
  }

  async expectUploadCreateAdText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UploadCreativesPage.L.uploadCreateAd), expected, timeoutMs);
  }

  async expectUploadCreateAdContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UploadCreativesPage.L.uploadCreateAd), substring, timeoutMs);
  }

  async expectUploadCreateAdValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UploadCreativesPage.L.uploadCreateAd), value, timeoutMs);
  }

  async expectUploadCreateAdEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UploadCreativesPage.L.uploadCreateAd), timeoutMs);
  }

  async expectUploadCreateAdDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UploadCreativesPage.L.uploadCreateAd), timeoutMs);
  }

  async expectUploadCreateAdChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UploadCreativesPage.L.uploadCreateAd), timeoutMs);
  }

  async expectUploadCreateAdUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UploadCreativesPage.L.uploadCreateAd), timeoutMs);
  }

  async expectUploadCreateAdFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UploadCreativesPage.L.uploadCreateAd), timeoutMs);
  }

  async expectUploadCreateAdCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UploadCreativesPage.L.uploadCreateAd), count, timeoutMs);
  }

  async scrollUploadCreateAdIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UploadCreativesPage.L.uploadCreateAd));
  }

  async doubleClickUploadCreativeLater(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UploadCreativesPage.L.uploadCreativeLater));
  }

  async longPressUploadCreativeLater(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UploadCreativesPage.L.uploadCreativeLater));
  }

  async expectUploadCreativeLaterHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UploadCreativesPage.L.uploadCreativeLater), timeoutMs);
  }

  async expectUploadCreativeLaterText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UploadCreativesPage.L.uploadCreativeLater), expected, timeoutMs);
  }

  async expectUploadCreativeLaterContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UploadCreativesPage.L.uploadCreativeLater), substring, timeoutMs);
  }

  async expectUploadCreativeLaterValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UploadCreativesPage.L.uploadCreativeLater), value, timeoutMs);
  }

  async expectUploadCreativeLaterEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UploadCreativesPage.L.uploadCreativeLater), timeoutMs);
  }

  async expectUploadCreativeLaterDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UploadCreativesPage.L.uploadCreativeLater), timeoutMs);
  }

  async expectUploadCreativeLaterChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UploadCreativesPage.L.uploadCreativeLater), timeoutMs);
  }

  async expectUploadCreativeLaterUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UploadCreativesPage.L.uploadCreativeLater), timeoutMs);
  }

  async expectUploadCreativeLaterFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UploadCreativesPage.L.uploadCreativeLater), timeoutMs);
  }

  async expectUploadCreativeLaterCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UploadCreativesPage.L.uploadCreativeLater), count, timeoutMs);
  }

  async scrollUploadCreativeLaterIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UploadCreativesPage.L.uploadCreativeLater));
  }

  async doubleClickUpload(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UploadCreativesPage.L.upload));
  }

  async longPressUpload(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UploadCreativesPage.L.upload));
  }

  async expectUploadHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UploadCreativesPage.L.upload), timeoutMs);
  }

  async expectUploadText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UploadCreativesPage.L.upload), expected, timeoutMs);
  }

  async expectUploadContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UploadCreativesPage.L.upload), substring, timeoutMs);
  }

  async expectUploadValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UploadCreativesPage.L.upload), value, timeoutMs);
  }

  async expectUploadEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UploadCreativesPage.L.upload), timeoutMs);
  }

  async expectUploadDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UploadCreativesPage.L.upload), timeoutMs);
  }

  async expectUploadChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UploadCreativesPage.L.upload), timeoutMs);
  }

  async expectUploadUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UploadCreativesPage.L.upload), timeoutMs);
  }

  async expectUploadFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UploadCreativesPage.L.upload), timeoutMs);
  }

  async expectUploadCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UploadCreativesPage.L.upload), count, timeoutMs);
  }

  async scrollUploadIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UploadCreativesPage.L.upload));
  }

  async doubleClickUploadYourCreative(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UploadCreativesPage.L.uploadYourCreative));
  }

  async longPressUploadYourCreative(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UploadCreativesPage.L.uploadYourCreative));
  }

  async expectUploadYourCreativeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UploadCreativesPage.L.uploadYourCreative), timeoutMs);
  }

  async expectUploadYourCreativeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UploadCreativesPage.L.uploadYourCreative), expected, timeoutMs);
  }

  async expectUploadYourCreativeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UploadCreativesPage.L.uploadYourCreative), substring, timeoutMs);
  }

  async expectUploadYourCreativeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UploadCreativesPage.L.uploadYourCreative), value, timeoutMs);
  }

  async expectUploadYourCreativeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UploadCreativesPage.L.uploadYourCreative), timeoutMs);
  }

  async expectUploadYourCreativeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UploadCreativesPage.L.uploadYourCreative), timeoutMs);
  }

  async expectUploadYourCreativeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UploadCreativesPage.L.uploadYourCreative), timeoutMs);
  }

  async expectUploadYourCreativeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UploadCreativesPage.L.uploadYourCreative), timeoutMs);
  }

  async expectUploadYourCreativeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UploadCreativesPage.L.uploadYourCreative), timeoutMs);
  }

  async expectUploadYourCreativeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UploadCreativesPage.L.uploadYourCreative), count, timeoutMs);
  }

  async scrollUploadYourCreativeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UploadCreativesPage.L.uploadYourCreative));
  }

  async doubleClickBuildAdWithAi(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UploadCreativesPage.L.buildAdWithAi));
  }

  async longPressBuildAdWithAi(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UploadCreativesPage.L.buildAdWithAi));
  }

  async expectBuildAdWithAiHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UploadCreativesPage.L.buildAdWithAi), timeoutMs);
  }

  async expectBuildAdWithAiText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UploadCreativesPage.L.buildAdWithAi), expected, timeoutMs);
  }

  async expectBuildAdWithAiContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UploadCreativesPage.L.buildAdWithAi), substring, timeoutMs);
  }

  async expectBuildAdWithAiValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UploadCreativesPage.L.buildAdWithAi), value, timeoutMs);
  }

  async expectBuildAdWithAiEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UploadCreativesPage.L.buildAdWithAi), timeoutMs);
  }

  async expectBuildAdWithAiDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UploadCreativesPage.L.buildAdWithAi), timeoutMs);
  }

  async expectBuildAdWithAiChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UploadCreativesPage.L.buildAdWithAi), timeoutMs);
  }

  async expectBuildAdWithAiUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UploadCreativesPage.L.buildAdWithAi), timeoutMs);
  }

  async expectBuildAdWithAiFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UploadCreativesPage.L.buildAdWithAi), timeoutMs);
  }

  async expectBuildAdWithAiCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UploadCreativesPage.L.buildAdWithAi), count, timeoutMs);
  }

  async scrollBuildAdWithAiIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UploadCreativesPage.L.buildAdWithAi));
  }

  async doubleClickBuild(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UploadCreativesPage.L.build));
  }

  async longPressBuild(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UploadCreativesPage.L.build));
  }

  async expectBuildHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UploadCreativesPage.L.build), timeoutMs);
  }

  async expectBuildText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UploadCreativesPage.L.build), expected, timeoutMs);
  }

  async expectBuildContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UploadCreativesPage.L.build), substring, timeoutMs);
  }

  async expectBuildValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UploadCreativesPage.L.build), value, timeoutMs);
  }

  async expectBuildEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UploadCreativesPage.L.build), timeoutMs);
  }

  async expectBuildDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UploadCreativesPage.L.build), timeoutMs);
  }

  async expectBuildChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UploadCreativesPage.L.build), timeoutMs);
  }

  async expectBuildUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UploadCreativesPage.L.build), timeoutMs);
  }

  async expectBuildFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UploadCreativesPage.L.build), timeoutMs);
  }

  async expectBuildCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UploadCreativesPage.L.build), count, timeoutMs);
  }

  async scrollBuildIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UploadCreativesPage.L.build));
  }

  async doubleClickChooseFromLibrary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UploadCreativesPage.L.chooseFromLibrary));
  }

  async longPressChooseFromLibrary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UploadCreativesPage.L.chooseFromLibrary));
  }

  async expectChooseFromLibraryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UploadCreativesPage.L.chooseFromLibrary), timeoutMs);
  }

  async expectChooseFromLibraryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UploadCreativesPage.L.chooseFromLibrary), expected, timeoutMs);
  }

  async expectChooseFromLibraryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UploadCreativesPage.L.chooseFromLibrary), substring, timeoutMs);
  }

  async expectChooseFromLibraryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UploadCreativesPage.L.chooseFromLibrary), value, timeoutMs);
  }

  async expectChooseFromLibraryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UploadCreativesPage.L.chooseFromLibrary), timeoutMs);
  }

  async expectChooseFromLibraryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UploadCreativesPage.L.chooseFromLibrary), timeoutMs);
  }

  async expectChooseFromLibraryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UploadCreativesPage.L.chooseFromLibrary), timeoutMs);
  }

  async expectChooseFromLibraryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UploadCreativesPage.L.chooseFromLibrary), timeoutMs);
  }

  async expectChooseFromLibraryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UploadCreativesPage.L.chooseFromLibrary), timeoutMs);
  }

  async expectChooseFromLibraryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UploadCreativesPage.L.chooseFromLibrary), count, timeoutMs);
  }

  async scrollChooseFromLibraryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UploadCreativesPage.L.chooseFromLibrary));
  }

  async doubleClickLibrary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UploadCreativesPage.L.library));
  }

  async longPressLibrary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UploadCreativesPage.L.library));
  }

  async expectLibraryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UploadCreativesPage.L.library), timeoutMs);
  }

  async expectLibraryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UploadCreativesPage.L.library), expected, timeoutMs);
  }

  async expectLibraryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UploadCreativesPage.L.library), substring, timeoutMs);
  }

  async expectLibraryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UploadCreativesPage.L.library), value, timeoutMs);
  }

  async expectLibraryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UploadCreativesPage.L.library), timeoutMs);
  }

  async expectLibraryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UploadCreativesPage.L.library), timeoutMs);
  }

  async expectLibraryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UploadCreativesPage.L.library), timeoutMs);
  }

  async expectLibraryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UploadCreativesPage.L.library), timeoutMs);
  }

  async expectLibraryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UploadCreativesPage.L.library), timeoutMs);
  }

  async expectLibraryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UploadCreativesPage.L.library), count, timeoutMs);
  }

  async scrollLibraryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UploadCreativesPage.L.library));
  }

  async doubleClickThirdPartyAdTags(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UploadCreativesPage.L.thirdPartyAdTags));
  }

  async longPressThirdPartyAdTags(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UploadCreativesPage.L.thirdPartyAdTags));
  }

  async expectThirdPartyAdTagsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UploadCreativesPage.L.thirdPartyAdTags), timeoutMs);
  }

  async expectThirdPartyAdTagsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UploadCreativesPage.L.thirdPartyAdTags), expected, timeoutMs);
  }

  async expectThirdPartyAdTagsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UploadCreativesPage.L.thirdPartyAdTags), substring, timeoutMs);
  }

  async expectThirdPartyAdTagsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UploadCreativesPage.L.thirdPartyAdTags), value, timeoutMs);
  }

  async expectThirdPartyAdTagsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UploadCreativesPage.L.thirdPartyAdTags), timeoutMs);
  }

  async expectThirdPartyAdTagsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UploadCreativesPage.L.thirdPartyAdTags), timeoutMs);
  }

  async expectThirdPartyAdTagsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UploadCreativesPage.L.thirdPartyAdTags), timeoutMs);
  }

  async expectThirdPartyAdTagsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UploadCreativesPage.L.thirdPartyAdTags), timeoutMs);
  }

  async expectThirdPartyAdTagsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UploadCreativesPage.L.thirdPartyAdTags), timeoutMs);
  }

  async expectThirdPartyAdTagsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UploadCreativesPage.L.thirdPartyAdTags), count, timeoutMs);
  }

  async scrollThirdPartyAdTagsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UploadCreativesPage.L.thirdPartyAdTags));
  }

  async doubleClickRdPartyAdTags(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UploadCreativesPage.L.rdPartyAdTags));
  }

  async longPressRdPartyAdTags(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UploadCreativesPage.L.rdPartyAdTags));
  }

  async expectRdPartyAdTagsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UploadCreativesPage.L.rdPartyAdTags), timeoutMs);
  }

  async expectRdPartyAdTagsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UploadCreativesPage.L.rdPartyAdTags), expected, timeoutMs);
  }

  async expectRdPartyAdTagsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UploadCreativesPage.L.rdPartyAdTags), substring, timeoutMs);
  }

  async expectRdPartyAdTagsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UploadCreativesPage.L.rdPartyAdTags), value, timeoutMs);
  }

  async expectRdPartyAdTagsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UploadCreativesPage.L.rdPartyAdTags), timeoutMs);
  }

  async expectRdPartyAdTagsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UploadCreativesPage.L.rdPartyAdTags), timeoutMs);
  }

  async expectRdPartyAdTagsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UploadCreativesPage.L.rdPartyAdTags), timeoutMs);
  }

  async expectRdPartyAdTagsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UploadCreativesPage.L.rdPartyAdTags), timeoutMs);
  }

  async expectRdPartyAdTagsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UploadCreativesPage.L.rdPartyAdTags), timeoutMs);
  }

  async expectRdPartyAdTagsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UploadCreativesPage.L.rdPartyAdTags), count, timeoutMs);
  }

  async scrollRdPartyAdTagsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UploadCreativesPage.L.rdPartyAdTags));
  }

  async longPressNext(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UploadCreativesPage.L.next));
  }

  async expectNextHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UploadCreativesPage.L.next), timeoutMs);
  }

  async expectNextText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UploadCreativesPage.L.next), expected, timeoutMs);
  }

  async expectNextContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UploadCreativesPage.L.next), substring, timeoutMs);
  }

  async expectNextValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UploadCreativesPage.L.next), value, timeoutMs);
  }

  async expectNextEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UploadCreativesPage.L.next), timeoutMs);
  }

  async expectNextDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UploadCreativesPage.L.next), timeoutMs);
  }

  async expectNextChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UploadCreativesPage.L.next), timeoutMs);
  }

  async expectNextUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UploadCreativesPage.L.next), timeoutMs);
  }

  async expectNextFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UploadCreativesPage.L.next), timeoutMs);
  }

  async expectNextCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UploadCreativesPage.L.next), count, timeoutMs);
  }

  async scrollNextIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UploadCreativesPage.L.next));
  }

}
