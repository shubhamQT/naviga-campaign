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

export class BillingInformationPage {
  private static readonly L = {
    billingInformation: { strategy: 'role' as const, value: '[[Billing Information]]', role: 'button', actionKind: 'button' as const },
    addressLine1: { strategy: 'css' as const, value: '#addressLine1[name="addressLine1"]', role: 'textbox', actionKind: 'textbox' as const },
    addressLine2: { strategy: 'css' as const, value: '#addressLine2[name="addressLine2"]', role: 'textbox', actionKind: 'textbox' as const },
    countryUnitedStates: { strategy: 'css' as const, value: '#mui-component-select-countryID', role: 'combobox', actionKind: 'generic' as const },
    stateProvinceNewYork: { strategy: 'css' as const, value: '#mui-component-select-state', role: 'combobox', actionKind: 'generic' as const },
    zipPostalCode: { strategy: 'css' as const, value: '#postCode[name="postCode"]', role: 'textbox', actionKind: 'textbox' as const },
    city: { strategy: 'css' as const, value: '#city[name="city"]', role: 'textbox', actionKind: 'textbox' as const },
    phone: { strategy: 'css' as const, value: '#telephoneNumber[name="telephoneNumber"]', role: 'textbox', actionKind: 'textbox' as const },
    next: { strategy: 'role' as const, value: 'Next', role: 'button', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickBillingInformation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingInformationPage.L.billingInformation));
  }

  async doubleClickBillingInformation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingInformationPage.L.billingInformation));
  }

  async expectBillingInformationVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BillingInformationPage.L.billingInformation), timeoutMs, soft);
  }

  async fillAddressLine1(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, BillingInformationPage.L.addressLine1), value);
  }

  async clearAddressLine1(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, BillingInformationPage.L.addressLine1));
  }

  async getAddressLine1Value(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingInformationPage.L.addressLine1));
  }

  async expectAddressLine1Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BillingInformationPage.L.addressLine1), timeoutMs, soft);
  }

  async fillAddressLine2(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, BillingInformationPage.L.addressLine2), value);
  }

  async clearAddressLine2(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, BillingInformationPage.L.addressLine2));
  }

  async getAddressLine2Value(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingInformationPage.L.addressLine2));
  }

  async expectAddressLine2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BillingInformationPage.L.addressLine2), timeoutMs, soft);
  }

  async clickCountryUnitedStates(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingInformationPage.L.countryUnitedStates));
  }

  async expectCountryUnitedStatesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BillingInformationPage.L.countryUnitedStates), timeoutMs, soft);
  }

  async clickStateProvinceNewYork(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingInformationPage.L.stateProvinceNewYork));
  }

  async expectStateProvinceNewYorkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BillingInformationPage.L.stateProvinceNewYork), timeoutMs, soft);
  }

  async fillZipPostalCode(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, BillingInformationPage.L.zipPostalCode), value);
  }

  async clearZipPostalCode(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, BillingInformationPage.L.zipPostalCode));
  }

  async getZipPostalCodeValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingInformationPage.L.zipPostalCode));
  }

  async expectZipPostalCodeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BillingInformationPage.L.zipPostalCode), timeoutMs, soft);
  }

  async fillCity(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, BillingInformationPage.L.city), value);
  }

  async clearCity(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, BillingInformationPage.L.city));
  }

  async getCityValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingInformationPage.L.city));
  }

  async expectCityVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BillingInformationPage.L.city), timeoutMs, soft);
  }

  async fillPhone(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, BillingInformationPage.L.phone), value);
  }

  async clearPhone(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, BillingInformationPage.L.phone));
  }

  async getPhoneValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BillingInformationPage.L.phone));
  }

  async expectPhoneVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BillingInformationPage.L.phone), timeoutMs, soft);
  }

  async clickNext(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BillingInformationPage.L.next));
  }

  async doubleClickNext(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingInformationPage.L.next));
  }

  async expectNextVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, BillingInformationPage.L.next), timeoutMs, soft);
  }


  async longPressBillingInformation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingInformationPage.L.billingInformation));
  }

  async expectBillingInformationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingInformationPage.L.billingInformation), timeoutMs);
  }

  async expectBillingInformationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingInformationPage.L.billingInformation), expected, timeoutMs);
  }

  async expectBillingInformationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingInformationPage.L.billingInformation), substring, timeoutMs);
  }

  async expectBillingInformationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingInformationPage.L.billingInformation), value, timeoutMs);
  }

  async expectBillingInformationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingInformationPage.L.billingInformation), timeoutMs);
  }

  async expectBillingInformationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingInformationPage.L.billingInformation), timeoutMs);
  }

  async expectBillingInformationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingInformationPage.L.billingInformation), timeoutMs);
  }

  async expectBillingInformationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingInformationPage.L.billingInformation), timeoutMs);
  }

  async expectBillingInformationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingInformationPage.L.billingInformation), timeoutMs);
  }

  async expectBillingInformationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingInformationPage.L.billingInformation), count, timeoutMs);
  }

  async scrollBillingInformationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingInformationPage.L.billingInformation));
  }

  async typeTextAddressLine1(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, BillingInformationPage.L.addressLine1), value);
  }

  async expectAddressLine1Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingInformationPage.L.addressLine1), timeoutMs);
  }

  async expectAddressLine1Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingInformationPage.L.addressLine1), expected, timeoutMs);
  }

  async expectAddressLine1ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingInformationPage.L.addressLine1), substring, timeoutMs);
  }

  async expectAddressLine1Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingInformationPage.L.addressLine1), value, timeoutMs);
  }

  async expectAddressLine1Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingInformationPage.L.addressLine1), timeoutMs);
  }

  async expectAddressLine1Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingInformationPage.L.addressLine1), timeoutMs);
  }

  async expectAddressLine1Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingInformationPage.L.addressLine1), timeoutMs);
  }

  async expectAddressLine1Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingInformationPage.L.addressLine1), timeoutMs);
  }

  async expectAddressLine1Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingInformationPage.L.addressLine1), timeoutMs);
  }

  async expectAddressLine1Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingInformationPage.L.addressLine1), count, timeoutMs);
  }

  async scrollAddressLine1IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingInformationPage.L.addressLine1));
  }

  async typeTextAddressLine2(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, BillingInformationPage.L.addressLine2), value);
  }

  async expectAddressLine2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingInformationPage.L.addressLine2), timeoutMs);
  }

  async expectAddressLine2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingInformationPage.L.addressLine2), expected, timeoutMs);
  }

  async expectAddressLine2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingInformationPage.L.addressLine2), substring, timeoutMs);
  }

  async expectAddressLine2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingInformationPage.L.addressLine2), value, timeoutMs);
  }

  async expectAddressLine2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingInformationPage.L.addressLine2), timeoutMs);
  }

  async expectAddressLine2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingInformationPage.L.addressLine2), timeoutMs);
  }

  async expectAddressLine2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingInformationPage.L.addressLine2), timeoutMs);
  }

  async expectAddressLine2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingInformationPage.L.addressLine2), timeoutMs);
  }

  async expectAddressLine2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingInformationPage.L.addressLine2), timeoutMs);
  }

  async expectAddressLine2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingInformationPage.L.addressLine2), count, timeoutMs);
  }

  async scrollAddressLine2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingInformationPage.L.addressLine2));
  }

  async doubleClickCountryUnitedStates(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingInformationPage.L.countryUnitedStates));
  }

  async longPressCountryUnitedStates(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingInformationPage.L.countryUnitedStates));
  }

  async expectCountryUnitedStatesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingInformationPage.L.countryUnitedStates), timeoutMs);
  }

  async expectCountryUnitedStatesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingInformationPage.L.countryUnitedStates), expected, timeoutMs);
  }

  async expectCountryUnitedStatesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingInformationPage.L.countryUnitedStates), substring, timeoutMs);
  }

  async expectCountryUnitedStatesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingInformationPage.L.countryUnitedStates), value, timeoutMs);
  }

  async expectCountryUnitedStatesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingInformationPage.L.countryUnitedStates), timeoutMs);
  }

  async expectCountryUnitedStatesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingInformationPage.L.countryUnitedStates), timeoutMs);
  }

  async expectCountryUnitedStatesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingInformationPage.L.countryUnitedStates), timeoutMs);
  }

  async expectCountryUnitedStatesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingInformationPage.L.countryUnitedStates), timeoutMs);
  }

  async expectCountryUnitedStatesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingInformationPage.L.countryUnitedStates), timeoutMs);
  }

  async expectCountryUnitedStatesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingInformationPage.L.countryUnitedStates), count, timeoutMs);
  }

  async scrollCountryUnitedStatesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingInformationPage.L.countryUnitedStates));
  }

  async doubleClickStateProvinceNewYork(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BillingInformationPage.L.stateProvinceNewYork));
  }

  async longPressStateProvinceNewYork(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingInformationPage.L.stateProvinceNewYork));
  }

  async expectStateProvinceNewYorkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingInformationPage.L.stateProvinceNewYork), timeoutMs);
  }

  async expectStateProvinceNewYorkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingInformationPage.L.stateProvinceNewYork), expected, timeoutMs);
  }

  async expectStateProvinceNewYorkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingInformationPage.L.stateProvinceNewYork), substring, timeoutMs);
  }

  async expectStateProvinceNewYorkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingInformationPage.L.stateProvinceNewYork), value, timeoutMs);
  }

  async expectStateProvinceNewYorkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingInformationPage.L.stateProvinceNewYork), timeoutMs);
  }

  async expectStateProvinceNewYorkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingInformationPage.L.stateProvinceNewYork), timeoutMs);
  }

  async expectStateProvinceNewYorkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingInformationPage.L.stateProvinceNewYork), timeoutMs);
  }

  async expectStateProvinceNewYorkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingInformationPage.L.stateProvinceNewYork), timeoutMs);
  }

  async expectStateProvinceNewYorkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingInformationPage.L.stateProvinceNewYork), timeoutMs);
  }

  async expectStateProvinceNewYorkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingInformationPage.L.stateProvinceNewYork), count, timeoutMs);
  }

  async scrollStateProvinceNewYorkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingInformationPage.L.stateProvinceNewYork));
  }

  async typeTextZipPostalCode(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, BillingInformationPage.L.zipPostalCode), value);
  }

  async expectZipPostalCodeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingInformationPage.L.zipPostalCode), timeoutMs);
  }

  async expectZipPostalCodeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingInformationPage.L.zipPostalCode), expected, timeoutMs);
  }

  async expectZipPostalCodeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingInformationPage.L.zipPostalCode), substring, timeoutMs);
  }

  async expectZipPostalCodeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingInformationPage.L.zipPostalCode), value, timeoutMs);
  }

  async expectZipPostalCodeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingInformationPage.L.zipPostalCode), timeoutMs);
  }

  async expectZipPostalCodeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingInformationPage.L.zipPostalCode), timeoutMs);
  }

  async expectZipPostalCodeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingInformationPage.L.zipPostalCode), timeoutMs);
  }

  async expectZipPostalCodeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingInformationPage.L.zipPostalCode), timeoutMs);
  }

  async expectZipPostalCodeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingInformationPage.L.zipPostalCode), timeoutMs);
  }

  async expectZipPostalCodeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingInformationPage.L.zipPostalCode), count, timeoutMs);
  }

  async scrollZipPostalCodeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingInformationPage.L.zipPostalCode));
  }

  async typeTextCity(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, BillingInformationPage.L.city), value);
  }

  async expectCityHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingInformationPage.L.city), timeoutMs);
  }

  async expectCityText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingInformationPage.L.city), expected, timeoutMs);
  }

  async expectCityContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingInformationPage.L.city), substring, timeoutMs);
  }

  async expectCityValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingInformationPage.L.city), value, timeoutMs);
  }

  async expectCityEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingInformationPage.L.city), timeoutMs);
  }

  async expectCityDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingInformationPage.L.city), timeoutMs);
  }

  async expectCityChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingInformationPage.L.city), timeoutMs);
  }

  async expectCityUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingInformationPage.L.city), timeoutMs);
  }

  async expectCityFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingInformationPage.L.city), timeoutMs);
  }

  async expectCityCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingInformationPage.L.city), count, timeoutMs);
  }

  async scrollCityIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingInformationPage.L.city));
  }

  async typeTextPhone(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, BillingInformationPage.L.phone), value);
  }

  async expectPhoneHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingInformationPage.L.phone), timeoutMs);
  }

  async expectPhoneText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingInformationPage.L.phone), expected, timeoutMs);
  }

  async expectPhoneContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingInformationPage.L.phone), substring, timeoutMs);
  }

  async expectPhoneValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingInformationPage.L.phone), value, timeoutMs);
  }

  async expectPhoneEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingInformationPage.L.phone), timeoutMs);
  }

  async expectPhoneDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingInformationPage.L.phone), timeoutMs);
  }

  async expectPhoneChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingInformationPage.L.phone), timeoutMs);
  }

  async expectPhoneUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingInformationPage.L.phone), timeoutMs);
  }

  async expectPhoneFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingInformationPage.L.phone), timeoutMs);
  }

  async expectPhoneCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingInformationPage.L.phone), count, timeoutMs);
  }

  async scrollPhoneIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingInformationPage.L.phone));
  }

  async longPressNext(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BillingInformationPage.L.next));
  }

  async expectNextHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BillingInformationPage.L.next), timeoutMs);
  }

  async expectNextText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BillingInformationPage.L.next), expected, timeoutMs);
  }

  async expectNextContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BillingInformationPage.L.next), substring, timeoutMs);
  }

  async expectNextValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BillingInformationPage.L.next), value, timeoutMs);
  }

  async expectNextEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BillingInformationPage.L.next), timeoutMs);
  }

  async expectNextDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BillingInformationPage.L.next), timeoutMs);
  }

  async expectNextChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BillingInformationPage.L.next), timeoutMs);
  }

  async expectNextUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BillingInformationPage.L.next), timeoutMs);
  }

  async expectNextFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BillingInformationPage.L.next), timeoutMs);
  }

  async expectNextCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BillingInformationPage.L.next), count, timeoutMs);
  }

  async scrollNextIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BillingInformationPage.L.next));
  }

}
