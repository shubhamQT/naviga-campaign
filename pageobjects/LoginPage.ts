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

export class LoginPage {
  private static readonly L = {
    switchToDarkTheme: { strategy: 'role' as const, value: 'Switch to dark theme', role: 'button', actionKind: 'button' as const },
    languageToggler: { strategy: 'role' as const, value: 'language-toggler', role: 'button', actionKind: 'button' as const },
    reachYourAudience: { strategy: 'role' as const, value: 'Reach your audience.👋', role: 'heading', level: 5, actionKind: 'text' as const },
    email: { strategy: 'css' as const, value: '#email[name="email"]', role: 'textbox', actionKind: 'textbox' as const },
    next: { strategy: 'role' as const, value: 'Next', role: 'button', actionKind: 'button' as const },
    continueWithGoogle: { strategy: 'role' as const, value: 'Continue with Google', role: 'button', actionKind: 'button' as const },
    password: { strategy: 'css' as const, value: '#password[name="password"]', role: 'textbox', actionKind: 'textbox' as const },
    togglePasswordVisibility: { strategy: 'role' as const, value: 'Toggle password visibility', role: 'button', actionKind: 'button' as const },
    forgotPassword: { strategy: 'role' as const, value: 'Forgot password?', role: 'button', actionKind: 'button' as const },
    logIn: { strategy: 'role' as const, value: 'Log in', role: 'button', actionKind: 'button' as const },
    termsConditions: { strategy: 'role' as const, value: 'Terms & Conditions', role: 'link', actionKind: 'link' as const },
    privacyPolicy: { strategy: 'role' as const, value: 'Privacy Policy', role: 'link', actionKind: 'link' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickSwitchToDarkTheme(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.switchToDarkTheme));
  }

  async doubleClickSwitchToDarkTheme(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.switchToDarkTheme));
  }

  async expectSwitchToDarkThemeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.switchToDarkTheme), timeoutMs, soft);
  }

  async clickLanguageToggler(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.languageToggler));
  }

  async doubleClickLanguageToggler(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.languageToggler));
  }

  async expectLanguageTogglerVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.languageToggler), timeoutMs, soft);
  }

  async getInnerTextReachYourAudience(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.reachYourAudience));
  }

  async expectReachYourAudienceVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.reachYourAudience), timeoutMs, soft);
  }

  async fillEmail(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LoginPage.L.email), value);
  }

  async clearEmail(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LoginPage.L.email));
  }

  async getEmailValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.email));
  }

  async expectEmailVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.email), timeoutMs, soft);
  }

  async clickNext(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.next));
  }

  async doubleClickNext(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.next));
  }

  async expectNextVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.next), timeoutMs, soft);
  }

  async clickContinueWithGoogle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.continueWithGoogle));
  }

  async doubleClickContinueWithGoogle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.continueWithGoogle));
  }

  async expectContinueWithGoogleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.continueWithGoogle), timeoutMs, soft);
  }

  async fillPassword(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LoginPage.L.password), value);
  }

  async clearPassword(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LoginPage.L.password));
  }

  async getPasswordValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.password));
  }

  async expectPasswordVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.password), timeoutMs, soft);
  }

  async clickTogglePasswordVisibility(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.togglePasswordVisibility));
  }

  async doubleClickTogglePasswordVisibility(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.togglePasswordVisibility));
  }

  async expectTogglePasswordVisibilityVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.togglePasswordVisibility), timeoutMs, soft);
  }

  async clickForgotPassword(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.forgotPassword));
  }

  async doubleClickForgotPassword(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.forgotPassword));
  }

  async expectForgotPasswordVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.forgotPassword), timeoutMs, soft);
  }

  async clickLogIn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.logIn));
  }

  async doubleClickLogIn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.logIn));
  }

  async expectLogInVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.logIn), timeoutMs, soft);
  }

  async clickTermsConditions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.termsConditions));
  }

  async expectTermsConditionsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.termsConditions), timeoutMs, soft);
  }

  async clickPrivacyPolicy(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.privacyPolicy));
  }

  async expectPrivacyPolicyVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.privacyPolicy), timeoutMs, soft);
  }


  async longPressSwitchToDarkTheme(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.switchToDarkTheme));
  }

  async expectSwitchToDarkThemeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.switchToDarkTheme), timeoutMs);
  }

  async expectSwitchToDarkThemeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.switchToDarkTheme), expected, timeoutMs);
  }

  async expectSwitchToDarkThemeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.switchToDarkTheme), substring, timeoutMs);
  }

  async expectSwitchToDarkThemeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.switchToDarkTheme), value, timeoutMs);
  }

  async expectSwitchToDarkThemeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.switchToDarkTheme), timeoutMs);
  }

  async expectSwitchToDarkThemeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.switchToDarkTheme), timeoutMs);
  }

  async expectSwitchToDarkThemeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.switchToDarkTheme), timeoutMs);
  }

  async expectSwitchToDarkThemeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.switchToDarkTheme), timeoutMs);
  }

  async expectSwitchToDarkThemeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.switchToDarkTheme), timeoutMs);
  }

  async expectSwitchToDarkThemeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.switchToDarkTheme), count, timeoutMs);
  }

  async scrollSwitchToDarkThemeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.switchToDarkTheme));
  }

  async longPressLanguageToggler(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.languageToggler));
  }

  async expectLanguageTogglerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.languageToggler), timeoutMs);
  }

  async expectLanguageTogglerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.languageToggler), expected, timeoutMs);
  }

  async expectLanguageTogglerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.languageToggler), substring, timeoutMs);
  }

  async expectLanguageTogglerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.languageToggler), value, timeoutMs);
  }

  async expectLanguageTogglerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.languageToggler), timeoutMs);
  }

  async expectLanguageTogglerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.languageToggler), timeoutMs);
  }

  async expectLanguageTogglerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.languageToggler), timeoutMs);
  }

  async expectLanguageTogglerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.languageToggler), timeoutMs);
  }

  async expectLanguageTogglerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.languageToggler), timeoutMs);
  }

  async expectLanguageTogglerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.languageToggler), count, timeoutMs);
  }

  async scrollLanguageTogglerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.languageToggler));
  }

  async clickReachYourAudience(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.reachYourAudience));
  }

  async doubleClickReachYourAudience(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.reachYourAudience));
  }

  async longPressReachYourAudience(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.reachYourAudience));
  }

  async expectReachYourAudienceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.reachYourAudience), timeoutMs);
  }

  async expectReachYourAudienceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.reachYourAudience), expected, timeoutMs);
  }

  async expectReachYourAudienceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.reachYourAudience), substring, timeoutMs);
  }

  async expectReachYourAudienceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.reachYourAudience), value, timeoutMs);
  }

  async expectReachYourAudienceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.reachYourAudience), timeoutMs);
  }

  async expectReachYourAudienceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.reachYourAudience), timeoutMs);
  }

  async expectReachYourAudienceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.reachYourAudience), timeoutMs);
  }

  async expectReachYourAudienceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.reachYourAudience), timeoutMs);
  }

  async expectReachYourAudienceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.reachYourAudience), timeoutMs);
  }

  async expectReachYourAudienceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.reachYourAudience), count, timeoutMs);
  }

  async scrollReachYourAudienceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.reachYourAudience));
  }

  async typeTextEmail(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LoginPage.L.email), value);
  }

  async expectEmailHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.email), timeoutMs);
  }

  async expectEmailText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.email), expected, timeoutMs);
  }

  async expectEmailContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.email), substring, timeoutMs);
  }

  async expectEmailValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.email), value, timeoutMs);
  }

  async expectEmailEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.email), timeoutMs);
  }

  async expectEmailDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.email), timeoutMs);
  }

  async expectEmailChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.email), timeoutMs);
  }

  async expectEmailUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.email), timeoutMs);
  }

  async expectEmailFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.email), timeoutMs);
  }

  async expectEmailCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.email), count, timeoutMs);
  }

  async scrollEmailIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.email));
  }

  async longPressNext(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.next));
  }

  async expectNextHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.next), timeoutMs);
  }

  async expectNextText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.next), expected, timeoutMs);
  }

  async expectNextContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.next), substring, timeoutMs);
  }

  async expectNextValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.next), value, timeoutMs);
  }

  async expectNextEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.next), timeoutMs);
  }

  async expectNextDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.next), timeoutMs);
  }

  async expectNextChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.next), timeoutMs);
  }

  async expectNextUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.next), timeoutMs);
  }

  async expectNextFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.next), timeoutMs);
  }

  async expectNextCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.next), count, timeoutMs);
  }

  async scrollNextIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.next));
  }

  async longPressContinueWithGoogle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.continueWithGoogle));
  }

  async expectContinueWithGoogleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.continueWithGoogle), timeoutMs);
  }

  async expectContinueWithGoogleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.continueWithGoogle), expected, timeoutMs);
  }

  async expectContinueWithGoogleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.continueWithGoogle), substring, timeoutMs);
  }

  async expectContinueWithGoogleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.continueWithGoogle), value, timeoutMs);
  }

  async expectContinueWithGoogleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.continueWithGoogle), timeoutMs);
  }

  async expectContinueWithGoogleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.continueWithGoogle), timeoutMs);
  }

  async expectContinueWithGoogleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.continueWithGoogle), timeoutMs);
  }

  async expectContinueWithGoogleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.continueWithGoogle), timeoutMs);
  }

  async expectContinueWithGoogleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.continueWithGoogle), timeoutMs);
  }

  async expectContinueWithGoogleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.continueWithGoogle), count, timeoutMs);
  }

  async scrollContinueWithGoogleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.continueWithGoogle));
  }

  async typeTextPassword(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LoginPage.L.password), value);
  }

  async expectPasswordHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.password), timeoutMs);
  }

  async expectPasswordText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.password), expected, timeoutMs);
  }

  async expectPasswordContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.password), substring, timeoutMs);
  }

  async expectPasswordValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.password), value, timeoutMs);
  }

  async expectPasswordEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.password), timeoutMs);
  }

  async expectPasswordDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.password), timeoutMs);
  }

  async expectPasswordChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.password), timeoutMs);
  }

  async expectPasswordUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.password), timeoutMs);
  }

  async expectPasswordFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.password), timeoutMs);
  }

  async expectPasswordCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.password), count, timeoutMs);
  }

  async scrollPasswordIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.password));
  }

  async longPressTogglePasswordVisibility(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.togglePasswordVisibility));
  }

  async expectTogglePasswordVisibilityHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.togglePasswordVisibility), timeoutMs);
  }

  async expectTogglePasswordVisibilityText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.togglePasswordVisibility), expected, timeoutMs);
  }

  async expectTogglePasswordVisibilityContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.togglePasswordVisibility), substring, timeoutMs);
  }

  async expectTogglePasswordVisibilityValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.togglePasswordVisibility), value, timeoutMs);
  }

  async expectTogglePasswordVisibilityEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.togglePasswordVisibility), timeoutMs);
  }

  async expectTogglePasswordVisibilityDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.togglePasswordVisibility), timeoutMs);
  }

  async expectTogglePasswordVisibilityChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.togglePasswordVisibility), timeoutMs);
  }

  async expectTogglePasswordVisibilityUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.togglePasswordVisibility), timeoutMs);
  }

  async expectTogglePasswordVisibilityFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.togglePasswordVisibility), timeoutMs);
  }

  async expectTogglePasswordVisibilityCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.togglePasswordVisibility), count, timeoutMs);
  }

  async scrollTogglePasswordVisibilityIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.togglePasswordVisibility));
  }

  async longPressForgotPassword(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.forgotPassword));
  }

  async expectForgotPasswordHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.forgotPassword), timeoutMs);
  }

  async expectForgotPasswordText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.forgotPassword), expected, timeoutMs);
  }

  async expectForgotPasswordContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.forgotPassword), substring, timeoutMs);
  }

  async expectForgotPasswordValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.forgotPassword), value, timeoutMs);
  }

  async expectForgotPasswordEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.forgotPassword), timeoutMs);
  }

  async expectForgotPasswordDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.forgotPassword), timeoutMs);
  }

  async expectForgotPasswordChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.forgotPassword), timeoutMs);
  }

  async expectForgotPasswordUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.forgotPassword), timeoutMs);
  }

  async expectForgotPasswordFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.forgotPassword), timeoutMs);
  }

  async expectForgotPasswordCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.forgotPassword), count, timeoutMs);
  }

  async scrollForgotPasswordIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.forgotPassword));
  }

  async longPressLogIn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.logIn));
  }

  async expectLogInHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.logIn), timeoutMs);
  }

  async expectLogInText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.logIn), expected, timeoutMs);
  }

  async expectLogInContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.logIn), substring, timeoutMs);
  }

  async expectLogInValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.logIn), value, timeoutMs);
  }

  async expectLogInEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.logIn), timeoutMs);
  }

  async expectLogInDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.logIn), timeoutMs);
  }

  async expectLogInChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.logIn), timeoutMs);
  }

  async expectLogInUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.logIn), timeoutMs);
  }

  async expectLogInFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.logIn), timeoutMs);
  }

  async expectLogInCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.logIn), count, timeoutMs);
  }

  async scrollLogInIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.logIn));
  }

  async doubleClickTermsConditions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.termsConditions));
  }

  async longPressTermsConditions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.termsConditions));
  }

  async expectTermsConditionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.termsConditions), timeoutMs);
  }

  async expectTermsConditionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.termsConditions), expected, timeoutMs);
  }

  async expectTermsConditionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.termsConditions), substring, timeoutMs);
  }

  async expectTermsConditionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.termsConditions), value, timeoutMs);
  }

  async expectTermsConditionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.termsConditions), timeoutMs);
  }

  async expectTermsConditionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.termsConditions), timeoutMs);
  }

  async expectTermsConditionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.termsConditions), timeoutMs);
  }

  async expectTermsConditionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.termsConditions), timeoutMs);
  }

  async expectTermsConditionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.termsConditions), timeoutMs);
  }

  async expectTermsConditionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.termsConditions), count, timeoutMs);
  }

  async scrollTermsConditionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.termsConditions));
  }

  async doubleClickPrivacyPolicy(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.privacyPolicy));
  }

  async longPressPrivacyPolicy(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.privacyPolicy));
  }

  async expectPrivacyPolicyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.privacyPolicy), timeoutMs);
  }

  async expectPrivacyPolicyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.privacyPolicy), expected, timeoutMs);
  }

  async expectPrivacyPolicyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.privacyPolicy), substring, timeoutMs);
  }

  async expectPrivacyPolicyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.privacyPolicy), value, timeoutMs);
  }

  async expectPrivacyPolicyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.privacyPolicy), timeoutMs);
  }

  async expectPrivacyPolicyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.privacyPolicy), timeoutMs);
  }

  async expectPrivacyPolicyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.privacyPolicy), timeoutMs);
  }

  async expectPrivacyPolicyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.privacyPolicy), timeoutMs);
  }

  async expectPrivacyPolicyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.privacyPolicy), timeoutMs);
  }

  async expectPrivacyPolicyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.privacyPolicy), count, timeoutMs);
  }

  async scrollPrivacyPolicyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.privacyPolicy));
  }

}
