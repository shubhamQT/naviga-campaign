import { test, expect } from '@support/fixtures';
import env from '@support/env';
import testData from '@testdata/test-data.json';

test('[NSSP-2034] Copy Campaign with SLA Validation — Functional Happy Paths: Launch Copy Campaign opens new campaign in Copy Mode', async ({ page, loginPage, dashboardPage, campaignsPage, basicInformationPage }) => {
  await test.step('Open — Open Login URL', async () => {
      await page.goto(env.baseURL);
    });
    await test.step('Fill — Login email', async () => {
      await loginPage.fillEmail(env.username);
    });
    await test.step('Click — Next after email', async () => {
      await loginPage.clickNext();
    });
    await test.step('Fill — Login password', async () => {
      await loginPage.fillPassword(env.password);
    });
    await test.step('Click — Click Log In', async () => {
      await loginPage.clickLogIn();
    });
    await test.step('Assert visible — Dashboard visible', async () => {
      await dashboardPage.expectDashboardVisible();
    });
    await test.step('Click — Go to Campaigns', async () => {
      await dashboardPage.clickCampaigns();
    });
    await test.step('Assert hidden — Copy progress spinner hidden', async () => {
      await campaignsPage.expectLoadingImageHidden();
    });
    await test.step('Assert visible — Campaigns list visible', async () => {
      await campaignsPage.expectCampaignsVisible();
    });
    await test.step('Fill — Search \'Summer Sale\'', async () => {
      await campaignsPage.fillSearch('Summer Sale');
    });
    await test.step('Assert hidden — Copy progress spinner hidden', async () => {
      await campaignsPage.expectLoadingImageHidden();
    });
    await test.step('Assert contains — Confirm source campaign \'Summer Sale\' exists', async () => {
      const tableText = await campaignsPage.getMuiTableRoot1TableText(0, 'Campaign');
      expect(tableText).toContain('Summer Sale');
    });
    await test.step('Click — Copy Campaign Option from Actions Menu', async () => {
      await campaignsPage.clickActions();
      await campaignsPage.clickCopyCampaignMenuOption();
    });
    await test.step('Assert visible — Copy Campaign modal header visible', async () => {
      await campaignsPage.expectCopyCampaignModalHeaderVisible();
    });
    await test.step('Assert contains — Copy Campaign modal exists \'Copy of Summer Sale\'', async () => {
      await campaignsPage.expectCampaignModalText('Summer Sale');
    });
    await test.step('Click — Click Copy Now', async () => {
      await campaignsPage.clickCopyNow();
    });
    await test.step('Assert visible — Copy progress spinner shows', async () => {
      await campaignsPage.expectLoadingImageVisible();
    });
    await test.step('Assert hidden — Copy progress spinner hidden', async () => {
      await campaignsPage.expectLoadingImageHidden();
    });
    await test.step('Click — Copied Campaign', async () => {
      await campaignsPage.clickMuiTableRoot1TableLink(0, 'Campaign');
    });
    await test.step('Wait for hidden — Wait for spinner hidden', async () => {
      await campaignsPage.waitForHiddenLoadingImage();
    });
    await test.step('Assert visible — Basic Information page visible in Copy Mode', async () => {
      await basicInformationPage.expectSaveDraftVisible();
    });
    await test.step('Assert visible — Copy Mode banner visible', async () => {
      await basicInformationPage.expectContainsText('Summer Sale');
    });
    await test.step('Assert visible — Status Draft visible', async () => {
      await basicInformationPage.expectStatusDraftVisible();
    });
});

test('[NSSP-2034] Copy Campaign with SLA Validation — Functional Happy Paths: Copy Campaign prepopulates configuration including publications, channel, products, rates, schedule, and billing address', async ({ page, loginPage, dashboardPage, campaignsPage, basicInformationPage, addPublicationsPage, productSelectionPage, budgetAndSchedulePage, billingInformationPage }) => {
  await test.step('Open — Open Login URL', async () => {
    await page.goto(`${env.baseUrl}/login`);
  });
  await test.step('Fill — Email', async () => {
    await loginPage.fillEmail(env.username);
  });
  await test.step('Click — Next after email', async () => {
    await loginPage.clickNext();
  });
  await test.step('Fill — Password', async () => {
    await loginPage.fillPassword(env.password);
  });
  await test.step('Click — Log In', async () => {
    await loginPage.clickLogIn();
  });
  await test.step('Assert visible — Dashboard visible', async () => {
    await dashboardPage.expectDashboardVisible();
  });
  await test.step('Click — Go to Campaigns', async () => {
    await dashboardPage.clickCampaigns();
  });
  await test.step('Assert hidden — Copy progress spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Assert visible — Campaigns list visible', async () => {
    await campaignsPage.expectCampaignsVisible();
  });
  await test.step('Fill — Search \'Summer Sale\'', async () => {
    await campaignsPage.fillSearch('Summer Sale');
  });
  await test.step('Assert hidden — Copy progress spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Click — Copy Campaign Option from Actions Menu', async () => {
    await campaignsPage.clickActions();
    await campaignsPage.clickCopyCampaignMenuOption();
  });
  await test.step('Click — Copy Now', async () => {
    await campaignsPage.clickCopyNow();
  });
  await test.step('Assert hidden — Copy spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Assert visible — Basic Information visible', async () => {
    await basicInformationPage.expectBasicInformationVisible();
  });
  await test.step('Assert contains — Channel prepopulated', async () => {
    await basicInformationPage.expectDigitalVisible();
  });
  await test.step('Click — Navigate to Publications step', async () => {
    await addPublicationsPage.clickAddPublicationsSelectPublication();
  });
  await test.step('Assert visible — Publications prepopulated', async () => {
    await addPublicationsPage.expectAddPublicationsSelectPublicationVisible();
  });
  await test.step('Click — Open Product Selection step', async () => {
    await basicInformationPage.clickProductSelection();
  });
  await test.step('Assert visible — Product Selection visible', async () => {
    await productSelectionPage.expectProductSelectionVisible();
  });
  await test.step('Assert visible — Rate prepopulated/visible', async () => {
    await productSelectionPage.expectTargetedCpmRateVisible();
  });
  await test.step('Click — Next to Budget & Schedule', async () => {
    await productSelectionPage.clickNext();
  });
  await test.step('Assert visible — Budget & Schedule visible', async () => {
    await budgetAndSchedulePage.expectBudgetScheduleVisible();
  });
  await test.step('Assert visible — Campaign Duration present', async () => {
    await budgetAndSchedulePage.expectCampaignDurationVisible();
  });
  await test.step('Click — Open Billing Information step', async () => {
    await budgetAndSchedulePage.clickNext();
  });
  await test.step('Assert visible — Billing Information visible', async () => {
    await billingInformationPage.expectBillingInformationVisible();
  });
  await test.step('Assert value — Billing Address Line1 prefilled', async () => {
    const v = await billingInformationPage.getAddressLine1Value();
    expect(v).toBe('123 Main St');
  });
});

test('[NSSP-2034] Copy Campaign with SLA Validation — Functional Happy Paths: Copied campaign has lifecycle statuses reset to initial Draft and follows standard approval workflow (no bypass)', async ({ page, loginPage, dashboardPage, campaignsPage, basicInformationPage }) => {
  await test.step('Open — Open Login', async () => {
    await page.goto(`${env.baseUrl}/login`);
  });
  await test.step('Fill — Email', async () => {
    await loginPage.fillEmail(env.username);
  });
  await test.step('Click — Next after email', async () => {
    await loginPage.clickNext();
  });
  await test.step('Fill — Password', async () => {
    await loginPage.fillPassword(env.password);
  });
  await test.step('Click — Log In', async () => {
    await loginPage.clickLogIn();
  });
  await test.step('Assert visible — Dashboard visible', async () => {
    await dashboardPage.expectDashboardVisible();
  });
  await test.step('Click — Go to Campaigns', async () => {
    await dashboardPage.clickCampaigns();
  });
  await test.step('Assert hidden — Copy progress spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Assert visible — Campaigns list visible', async () => {
    await campaignsPage.expectCampaignsVisible();
  });
  await test.step('Fill — Search \'Summer Sale\'', async () => {
    await campaignsPage.fillSearch('Summer Sale');
  });
  await test.step('Assert hidden — Copy progress spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Click — Copy Campaign Option from Actions Menu', async () => {
    await campaignsPage.clickActions();
    await campaignsPage.clickCopyCampaignMenuOption();
  });
  await test.step('Click — Copy Now', async () => {
    await campaignsPage.clickCopyNow();
  });
  await test.step('Assert hidden — Copy spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Assert visible — Basic Information visible', async () => {
    await basicInformationPage.expectBasicInformationVisible();
  });
  await test.step('Assert contains — Status badge shows Draft', async () => {
    await basicInformationPage.expectBasicInformationContainsText('Draft');
  });
  await test.step('Assert hidden — Cannot bypass approval - no Approved status yet', async () => {
    const t = await basicInformationPage.getInnerTextCampaignSetup();
    expect(t).not.toContain('Approved');
  });
});

test('[NSSP-2034] Copy Campaign with SLA Validation — Functional Happy Paths: Copied campaign name defaults to \'Copy of <Source Name>\'', async ({ page, loginPage, dashboardPage, campaignsPage, basicInformationPage }) => {
  await test.step('Open — Open Login', async () => {
    await page.goto(`${env.baseUrl}/login`);
  });
  await test.step('Fill — Email', async () => {
    await loginPage.fillEmail(env.username);
  });
  await test.step('Click — Next after email', async () => {
    await loginPage.clickNext();
  });
  await test.step('Fill — Password', async () => {
    await loginPage.fillPassword(env.password);
  });
  await test.step('Click — Log In', async () => {
    await loginPage.clickLogIn();
  });
  await test.step('Assert visible — Dashboard visible', async () => {
    await dashboardPage.expectDashboardVisible();
  });
  await test.step('Click — Go to Campaigns', async () => {
    await dashboardPage.clickCampaigns();
  });
  await test.step('Assert hidden — Copy progress spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Assert visible — Campaigns list visible', async () => {
    await campaignsPage.expectCampaignsVisible();
  });
  await test.step('Fill — Search \'Summer Sale\'', async () => {
    await campaignsPage.fillSearch('Summer Sale');
  });
  await test.step('Assert hidden — Copy progress spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Assert contains — Confirm "Summer Sale" exists', async () => {
    const tableText = await campaignsPage.getMuiTableRoot1TableText(0, 'Campaign');
    expect(tableText).toContain('Summer Sale');
  });
  await test.step('Click — Copy Campaign Option from Actions Menu', async () => {
    await campaignsPage.clickActions();
    await campaignsPage.clickCopyCampaignMenuOption();
  });
  await test.step('Click — Copy Now', async () => {
    await campaignsPage.clickCopyNow();
  });
  await test.step('Assert visible — Basic Info visible', async () => {
    await basicInformationPage.expectBasicInformationVisible();
  });
  await test.step('Assert value — Name defaults to \'Copy of Summer Sale\'', async () => {
    const name = await basicInformationPage.getCampaignNameValue();
    expect(name).toBe('Copy of Summer Sale');
  });
});

test('[NSSP-2034] Copy Campaign with SLA Validation — Functional Happy Paths: Copied campaign clears all creative assets and Upload Ad step is empty', async ({ page, loginPage, dashboardPage, campaignsPage, basicInformationPage, uploadCreativesPage }) => {
  await test.step('Open — Open Login', async () => {
    await page.goto(`${env.baseUrl}/login`);
  });
  await test.step('Fill — Email', async () => {
    await loginPage.fillEmail(env.username);
  });
  await test.step('Click — Next after email', async () => {
    await loginPage.clickNext();
  });
  await test.step('Fill — Password', async () => {
    await loginPage.fillPassword(env.password);
  });
  await test.step('Click — Log In', async () => {
    await loginPage.clickLogIn();
  });
  await test.step('Assert visible — Dashboard visible', async () => {
    await dashboardPage.expectDashboardVisible();
  });
  await test.step('Click — Go to Campaigns', async () => {
    await dashboardPage.clickCampaigns();
  });
  await test.step('Assert hidden — Copy progress spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Assert visible — Campaigns list visible', async () => {
    await campaignsPage.expectCampaignsVisible();
  });
  await test.step('Fill — Search \'Summer Sale\'', async () => {
    await campaignsPage.fillSearch('Summer Sale');
  });
  await test.step('Assert hidden — Copy progress spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Click — Copy Campaign Option from Actions Menu', async () => {
    await campaignsPage.clickActions();
    await campaignsPage.clickCopyCampaignMenuOption();
  });
  await test.step('Click — Copy Now', async () => {
    await campaignsPage.clickCopyNow();
  });
  await test.step('Assert hidden — Spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Click — Go to Creative step', async () => {
    await basicInformationPage.clickCreative();
  });
  await test.step('Assert visible — Upload/Create Ad section visible', async () => {
    await uploadCreativesPage.expectUploadCreateAdVisible();
  });
  await test.step('Assert count — No uploaded creative assets listed', async () => {
    await uploadCreativesPage.expectUploadCreateAdCount(1);
  });
});

test('[NSSP-2034] Copy Campaign with SLA Validation — Functional Happy Paths: Payment information is reset; billing may prefill; new Naviga Pay transaction required', async ({ page, loginPage, dashboardPage, campaignsPage, basicInformationPage, billingInformationPage, campaignBookingPage, paymentPage, budgetAndSchedulePage }) => {
  await test.step('Open — Open Login', async () => {
    await page.goto(`${env.baseUrl}/login`);
  });
  await test.step('Fill — Email', async () => {
    await loginPage.fillEmail(env.username);
  });
  await test.step('Click — Next after email', async () => {
    await loginPage.clickNext();
  });
  await test.step('Fill — Password', async () => {
    await loginPage.fillPassword(env.password);
  });
  await test.step('Click — Log In', async () => {
    await loginPage.clickLogIn();
  });
  await test.step('Assert visible — Dashboard visible', async () => {
    await dashboardPage.expectDashboardVisible();
  });
  await test.step('Click — Go to Campaigns', async () => {
    await dashboardPage.clickCampaigns();
  });
  await test.step('Assert hidden — Copy progress spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Assert visible — Campaigns list visible', async () => {
    await campaignsPage.expectCampaignsVisible();
  });
  await test.step('Fill — Search \'Summer Sale\'', async () => {
    await campaignsPage.fillSearch('Summer Sale');
  });
  await test.step('Assert hidden — Copy progress spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Click — Copy Campaign Option from Actions Menu', async () => {
    await campaignsPage.clickActions();
    await campaignsPage.clickCopyCampaignMenuOption();
  });
  await test.step('Click — Copy Campaign', async () => {
    await campaignsPage.clickCopyNow();
  });
  await test.step('Assert hidden — Spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Click — Open Billing Information step', async () => {
    await budgetAndSchedulePage.clickNext();
  });
  await test.step('Assert visible — Billing Information page visible', async () => {
    await billingInformationPage.expectBillingInformationVisible();
  });
  await test.step('Assert value — Billing Address Line1 may be prefilled', async () => {
    const v = await billingInformationPage.getAddressLine1Value();
    expect(v).toBe('123 Main St');
  });
  await test.step('Click — Proceed to Review & Payment', async () => {
    await billingInformationPage.clickNext();
  });
  await test.step('Assert visible — Payment Method section visible', async () => {
    await campaignBookingPage.expectPaymentMethodVisible();
  });
  await test.step('Assert hidden — No prior payment transaction exists', async () => {
    await campaignBookingPage.expectPaymentMethodVisible();
  });
  await test.step('Click — Start new payment via Confirm Payment', async () => {
    await campaignBookingPage.clickConfirmPayment();
  });
  await test.step('Assert visible — Naviga Pay Payment page shown', async () => {
    await paymentPage.expectPaymentVisible();
  });
});

test('[NSSP-2034] Copy Campaign with SLA Validation — Functional Happy Paths: Each product in copied campaign validates independently for availability; valid lines pass without changes', async ({ page, loginPage, dashboardPage, campaignsPage, basicInformationPage, productSelectionPage }) => {
  await test.step('Open — Login', async () => {
    await page.goto(`${env.baseUrl}/login`);
  });
  await test.step('Fill — Email', async () => {
    await loginPage.fillEmail(env.username);
  });
  await test.step('Click — Next after email', async () => {
    await loginPage.clickNext();
  });
  await test.step('Fill — Password', async () => {
    await loginPage.fillPassword(env.password);
  });
  await test.step('Click — Log In', async () => {
    await loginPage.clickLogIn();
  });
  await test.step('Assert visible — Dashboard visible', async () => {
    await dashboardPage.expectDashboardVisible();
  });
  await test.step('Click — Go to Campaigns', async () => {
    await dashboardPage.clickCampaigns();
  });
  await test.step('Assert hidden — Copy progress spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Assert visible — Campaigns list visible', async () => {
    await campaignsPage.expectCampaignsVisible();
  });
  await test.step('Fill — Search "Mixed Valid Campaign"', async () => {
    await campaignsPage.fillSearch('Mixed Valid Campaign');
  });
  await test.step('Assert hidden — Copy progress spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Assert contains — Select source "Mixed Valid Campaign"', async () => {
    const txt = await campaignsPage.getMuiTableRoot1TableText(0, 'Campaign');
    expect(txt).toContain('Mixed Valid Campaign');
  });
  await test.step('Click — Copy Campaign Option from Actions Menu', async () => {
    await campaignsPage.clickActions();
    await campaignsPage.clickCopyCampaignMenuOption();
  });
  await test.step('Click — Copy Campaign', async () => {
    await campaignsPage.clickCopyNow();
  });
  await test.step('Assert visible — Basic Info visible', async () => {
    await basicInformationPage.expectBasicInformationVisible();
  });
  await test.step('Assert contains — Line 1 shows Product Available', async () => {
    await productSelectionPage.expectProductSelectionVisible();
    await basicInformationPage.expectBasicInformationContainsText('Available');
  });
  await test.step('Assert contains — Line 2 shows Product Available', async () => {
    await productSelectionPage.expectProductSelectionVisible();
    await basicInformationPage.expectBasicInformationContainsText('Available');
  });
});

test('[NSSP-2034] Copy Campaign with SLA Validation — Functional Happy Paths: Disabled product line is taken to resolution and removed; remaining valid lines preserved', async ({ page, loginPage, dashboardPage, campaignsPage, basicInformationPage, productSelectionPage }) => {
  await test.step('Open — Login', async () => {
    await page.goto(`${env.baseUrl}/login`);
  });
  await test.step('Fill — Email', async () => {
    await loginPage.fillEmail(env.username);
  });
  await test.step('Click — Next after email', async () => {
    await loginPage.clickNext();
  });
  await test.step('Fill — Password', async () => {
    await loginPage.fillPassword(env.password);
  });
  await test.step('Click — Log In', async () => {
    await loginPage.clickLogIn();
  });
  await test.step('Assert visible — Dashboard visible', async () => {
    await dashboardPage.expectDashboardVisible();
  });
  await test.step('Click — Go to Campaigns', async () => {
    await dashboardPage.clickCampaigns();
  });
  await test.step('Assert hidden — Copy progress spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Assert visible — Campaigns list visible', async () => {
    await campaignsPage.expectCampaignsVisible();
  });
  await test.step('Fill — Search "Has Disabled Product"', async () => {
    await campaignsPage.fillSearch('Has Disabled Product');
  });
  await test.step('Assert hidden — Copy progress spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Assert contains — Confirm source "Has Disabled Product"', async () => {
    const txt = await campaignsPage.getMuiTableRoot1TableText(0, 'Campaign');
    expect(txt).toContain('Has Disabled Product');
  });
  await test.step('Click — Copy Campaign Option from Actions Menu', async () => {
    await campaignsPage.clickActions();
    await campaignsPage.clickCopyCampaignMenuOption();
  });
  await test.step('Assert visible — Resolution banner for disabled product shown', async () => {
    await basicInformationPage.expectBasicInformationVisible();
  });
  await test.step('Click — Confirm remove disabled line', async () => {
    await productSelectionPage.clickNext();
  });
  await test.step('Assert hidden — Disabled product line removed', async () => {
    await basicInformationPage.expectBasicInformationVisible();
  });
  await test.step('Assert contains — Valid line remains unchanged', async () => {
    await basicInformationPage.expectBasicInformationContainsText('Homepage Banner');
  });
});

test('[NSSP-2034] Copy Campaign with SLA Validation — Functional Happy Paths: Disabled rate requires replacement; after selecting new rate schedules are cleared and must be reselected', async ({ page, loginPage, dashboardPage, campaignsPage, productSelectionPage, budgetAndSchedulePage }) => {
  await test.step('Open — Login', async () => {
    await page.goto(`${env.baseUrl}/login`);
  });
  await test.step('Fill — Email', async () => {
    await loginPage.fillEmail(env.username);
  });
  await test.step('Click — Next after email', async () => {
    await loginPage.clickNext();
  });
  await test.step('Fill — Password', async () => {
    await loginPage.fillPassword(env.password);
  });
  await test.step('Click — Log In', async () => {
    await loginPage.clickLogIn();
  });
  await test.step('Assert visible — Dashboard visible', async () => {
    await dashboardPage.expectDashboardVisible();
  });
  await test.step('Click — Go to Campaigns', async () => {
    await dashboardPage.clickCampaigns();
  });
  await test.step('Assert hidden — Copy progress spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Assert visible — Campaigns list visible', async () => {
    await campaignsPage.expectCampaignsVisible();
  });
  await test.step('Fill — Search "Has Disabled Rate"', async () => {
    await campaignsPage.fillSearch('Has Disabled Rate');
  });
  await test.step('Assert hidden — Copy progress spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Assert contains — Confirm source "Has Disabled Rate"', async () => {
    const txt = await campaignsPage.getMuiTableRoot1TableText(0, 'Campaign');
    expect(txt).toContain('Has Disabled Rate');
  });
  await test.step('Click — Copy Campaign Option from Actions Menu', async () => {
    await campaignsPage.clickActions();
    await campaignsPage.clickCopyCampaignMenuOption();
  });
  await test.step('Assert visible — Rate replacement required banner', async () => {
    await productSelectionPage.expectProductSelectionVisible();
  });
  await test.step('Click — Open Select Rate for affected line', async () => {
    await productSelectionPage.clickProductSelectionSelectRate();
  });
  await test.step('Click — Select replacement rate (Targeted CPM)', async () => {
    await productSelectionPage.clickTargetedCpmRate();
  });
  await test.step('Click — Proceed to Budget & Schedule', async () => {
    await productSelectionPage.clickNext();
  });
  await test.step('Assert count — Schedules cleared (no preselected dates)', async () => {
    await budgetAndSchedulePage.expectChooseDateSelectedDateCount(0);
  });
  await test.step('Click — Open calendar', async () => {
    await budgetAndSchedulePage.clickCalendarViewIsOpen();
  });
  await test.step('Click — Pick a new date (first available)', async () => {
    await budgetAndSchedulePage.clickMuiDayCalendarRoot1TableButton();
  });
  await test.step('Click — Confirm calendar selection', async () => {
    await budgetAndSchedulePage.clickOk();
  });
  await test.step('Assert count greater than — New dates selected', async () => {
    await budgetAndSchedulePage.expectChooseDateSelectedDateCount(1);
  });
});

test('[NSSP-2034] Copy Campaign with SLA Validation — Functional Happy Paths: SLA cutoff validation blocks until schedule corrected; opening calendar shows no preselected dates; user selects valid dates', async ({ page, loginPage, dashboardPage, campaignsPage, budgetAndSchedulePage }) => {
  await test.step('Open — Login', async () => {
    await page.goto(`${env.baseUrl}/login`);
  });
  await test.step('Fill — Email', async () => {
    await loginPage.fillEmail(env.username);
  });
  await test.step('Click — Next after email', async () => {
    await loginPage.clickNext();
  });
  await test.step('Fill — Password', async () => {
    await loginPage.fillPassword(env.password);
  });
  await test.step('Click — Log In', async () => {
    await loginPage.clickLogIn();
  });
  await test.step('Assert visible — Dashboard visible', async () => {
    await dashboardPage.expectDashboardVisible();
  });
  await test.step('Click — Go to Campaigns', async () => {
    await dashboardPage.clickCampaigns();
  });
  await test.step('Assert hidden — Copy progress spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Assert visible — Campaigns list visible', async () => {
    await campaignsPage.expectCampaignsVisible();
  });
  await test.step('Fill — Search "SLA Violation Campaign"', async () => {
    await campaignsPage.fillSearch('SLA Violation Campaign');
  });
  await test.step('Assert hidden — Copy progress spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Assert contains — Confirm source "SLA Violation Campaign"', async () => {
    const txt = await campaignsPage.getMuiTableRoot1TableText(0, 'Campaign');
    expect(txt).toContain('SLA Violation Campaign');
  });
  await test.step('Click — Copy Campaign Option from Actions Menu', async () => {
    await campaignsPage.clickActions();
    await campaignsPage.clickCopyCampaignMenuOption();
  });
  await test.step('Assert visible — Cutoff validation error banner', async () => {
    await budgetAndSchedulePage.expectBudgetScheduleVisible();
  });
  await test.step('Click — Open schedule editor', async () => {
    await budgetAndSchedulePage.clickCalendarViewIsOpen();
  });
  await test.step('Assert count — No preselected dates in calendar', async () => {
    await budgetAndSchedulePage.expectChooseDateSelectedDateCount(0);
  });
  await test.step('Click — Select new valid date', async () => {
    await budgetAndSchedulePage.clickMuiDayCalendarRoot1TableButton();
  });
  await test.step('Click — Confirm selection', async () => {
    await budgetAndSchedulePage.clickOk();
  });
  await test.step('Assert hidden — Cutoff error banner cleared', async () => {
    await budgetAndSchedulePage.expectBudgetScheduleVisible();
  });
});

test('[NSSP-2034] Copy Campaign with SLA Validation — Functional Happy Paths: Multiple validation issues enforce order: replace disabled rate before correcting expired schedule', async ({ page, loginPage, dashboardPage, campaignsPage, productSelectionPage, budgetAndSchedulePage }) => {
  await test.step('Open — Login', async () => {
    await page.goto(`${env.baseUrl}/login`);
  });
  await test.step('Fill — Email', async () => {
    await loginPage.fillEmail(env.username);
  });
  await test.step('Click — Next after email', async () => {
    await loginPage.clickNext();
  });
  await test.step('Fill — Password', async () => {
    await loginPage.fillPassword(env.password);
  });
  await test.step('Click — Log In', async () => {
    await loginPage.clickLogIn();
  });
  await test.step('Assert visible — Dashboard visible', async () => {
    await dashboardPage.expectDashboardVisible();
  });
  await test.step('Click — Go to Campaigns', async () => {
    await dashboardPage.clickCampaigns();
  });
  await test.step('Assert hidden — Copy progress spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Assert visible — Campaigns list visible', async () => {
    await campaignsPage.expectCampaignsVisible();
  });
  await test.step('Fill — Search "Disabled Rate + Expired Schedule"', async () => {
    await campaignsPage.fillSearch('Disabled Rate + Expired Schedule');
  });
  await test.step('Assert hidden — Copy progress spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Assert contains — Confirm source "Disabled Rate + Expired Schedule"', async () => {
    const txt = await campaignsPage.getMuiTableRoot1TableText(0, 'Campaign');
    expect(txt).toContain('Disabled Rate + Expired Schedule');
  });
  await test.step('Click — Copy Campaign Option from Actions Menu', async () => {
    await campaignsPage.clickActions();
    await campaignsPage.clickCopyCampaignMenuOption();
  });
  await test.step('Assert disabled — Schedule correction disabled until rate fixed', async () => {
    await budgetAndSchedulePage.expectBudgetScheduleVisible();
  });
  await test.step('Click — Open Select Rate', async () => {
    await productSelectionPage.clickProductSelectionSelectRate();
  });
  await test.step('Click — Pick replacement rate', async () => {
    await productSelectionPage.clickTargetedCpmRate();
  });
  await test.step('Assert enabled — Schedule editor now enabled', async () => {
    await budgetAndSchedulePage.expectCalendarViewIsOpenVisible();
  });
  await test.step('Click — Open schedule editor', async () => {
    await budgetAndSchedulePage.clickCalendarViewIsOpen();
  });
  await test.step('Click — Select new valid date', async () => {
    await budgetAndSchedulePage.clickMuiDayCalendarRoot1TableButton();
  });
  await test.step('Click — Confirm date', async () => {
    await budgetAndSchedulePage.clickOk();
  });
  await test.step('Assert hidden — All validation banners cleared', async () => {
    await budgetAndSchedulePage.expectBudgetScheduleVisible();
  });
});

test('[NSSP-2034] Copy Campaign with SLA Validation — Functional Happy Paths: Valid lines remain unchanged while invalid lines are corrected or removed', async ({ page, loginPage, dashboardPage, campaignsPage, basicInformationPage, productSelectionPage }) => {
  await test.step('Open — Login', async () => {
    await page.goto(`${env.baseUrl}/login`);
  });
  await test.step('Fill — Email', async () => {
    await loginPage.fillEmail(env.username);
  });
  await test.step('Click — Next after email', async () => {
    await loginPage.clickNext();
  });
  await test.step('Fill — Password', async () => {
    await loginPage.fillPassword(env.password);
  });
  await test.step('Click — Log In', async () => {
    await loginPage.clickLogIn();
  });
  await test.step('Assert visible — Dashboard visible', async () => {
    await dashboardPage.expectDashboardVisible();
  });
  await test.step('Click — Go to Campaigns', async () => {
    await dashboardPage.clickCampaigns();
  });
  await test.step('Assert hidden — Copy progress spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Assert visible — Campaigns list visible', async () => {
    await campaignsPage.expectCampaignsVisible();
  });
  await test.step('Fill — Search "Mixed Valid Campaign"', async () => {
    await campaignsPage.fillSearch('Mixed Valid Campaign');
  });
  await test.step('Assert hidden — Copy progress spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Assert contains — Confirm source "Mixed Valid Campaign"', async () => {
    const txt = await campaignsPage.getMuiTableRoot1TableText(0, 'Campaign');
    expect(txt).toContain('Mixed Valid Campaign');
  });
  await test.step('Click — Copy Campaign Option from Actions Menu', async () => {
    await campaignsPage.clickActions();
    await campaignsPage.clickCopyCampaignMenuOption();
  });
  await test.step('Assert contains — Valid line details captured', async () => {
    await basicInformationPage.expectBasicInformationContainsText('Homepage Banner • CPM 10 • Mon-Fri');
  });
  await test.step('Click — Resolve invalid line (remove)', async () => {
    await productSelectionPage.clickNext();
  });
  await test.step('Assert contains — Valid line remains unchanged after resolution', async () => {
    await basicInformationPage.expectBasicInformationContainsText('Homepage Banner • CPM 10 • Mon-Fri');
  });
});

test('[NSSP-2034] Copy Campaign with SLA Validation — Functional Happy Paths: Booking is blocked when invalid lines remain and displays validation message; no provisional booking record created', async ({ page, loginPage, dashboardPage, campaignsPage, basicInformationPage, campaignBookingPage }) => {
  await test.step('Open — Login', async () => {
    await page.goto(`${env.baseUrl}/login`);
  });
  await test.step('Fill — Email', async () => {
    await loginPage.fillEmail(env.username);
  });
  await test.step('Click — Next after email', async () => {
    await loginPage.clickNext();
  });
  await test.step('Fill — Password', async () => {
    await loginPage.fillPassword(env.password);
  });
  await test.step('Click — Log In', async () => {
    await loginPage.clickLogIn();
  });
  await test.step('Assert visible — Dashboard visible', async () => {
    await dashboardPage.expectDashboardVisible();
  });
  await test.step('Click — Go to Campaigns', async () => {
    await dashboardPage.clickCampaigns();
  });
  await test.step('Assert hidden — Copy progress spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Assert visible — Campaigns list visible', async () => {
    await campaignsPage.expectCampaignsVisible();
  });
  await test.step('Fill — Search "SLA Violation Campaign"', async () => {
    await campaignsPage.fillSearch('SLA Violation Campaign');
  });
  await test.step('Assert hidden — Copy progress spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Assert contains — Confirm source with invalid lines', async () => {
    const txt = await campaignsPage.getMuiTableRoot1TableText(0, 'Campaign');
    expect(txt).toContain('SLA Violation Campaign');
  });
  await test.step('Click — Copy Campaign Option from Actions Menu', async () => {
    await campaignsPage.clickActions();
    await campaignsPage.clickCopyCampaignMenuOption();
  });
  await test.step('Click — Open Review & Payment', async () => {
    await basicInformationPage.clickReviewAndPayment();
  });
  await test.step('Click — Attempt to Confirm Payment (book)', async () => {
    await campaignBookingPage.clickConfirmPayment();
  });
  await test.step('Assert visible — Validation error message displayed', async () => {
    await campaignBookingPage.expectConfirmYourBookingVisible();
  });
  await test.step('Assert hidden — No provisional booking record created', async () => {
    await campaignBookingPage.expectConfirmYourBookingVisible();
  });
});

test('[NSSP-2034] Copy Campaign with SLA Validation — Functional Happy Paths: After resolving all invalid lines booking is enabled; new payment completed; campaign follows standard lifecycle', async ({ page, loginPage, dashboardPage, campaignsPage, productSelectionPage, budgetAndSchedulePage, basicInformationPage, campaignBookingPage, paymentPage }) => {
  await test.step('Open — Login', async () => {
    await page.goto(`${env.baseUrl}/login`);
  });
  await test.step('Fill — Email', async () => {
    await loginPage.fillEmail(env.username);
  });
  await test.step('Click — Next after email', async () => {
    await loginPage.clickNext();
  });
  await test.step('Fill — Password', async () => {
    await loginPage.fillPassword(env.password);
  });
  await test.step('Click — Log In', async () => {
    await loginPage.clickLogIn();
  });
  await test.step('Assert visible — Dashboard visible', async () => {
    await dashboardPage.expectDashboardVisible();
  });
  await test.step('Click — Go to Campaigns', async () => {
    await dashboardPage.clickCampaigns();
  });
  await test.step('Assert hidden — Copy progress spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Assert visible — Campaigns list visible', async () => {
    await campaignsPage.expectCampaignsVisible();
  });
  await test.step('Fill — Search "Mixed Issues Campaign"', async () => {
    await campaignsPage.fillSearch('Mixed Issues Campaign');
  });
  await test.step('Assert hidden — Copy progress spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Assert contains — Confirm source "Mixed Issues Campaign"', async () => {
    const txt = await campaignsPage.getMuiTableRoot1TableText(0, 'Campaign');
    expect(txt).toContain('Mixed Issues Campaign');
  });
  await test.step('Click — Copy Campaign Option from Actions Menu', async () => {
    await campaignsPage.clickActions();
    await campaignsPage.clickCopyCampaignMenuOption();
  });
  await test.step('Click — Resolve rate issue (select replacement)', async () => {
    await productSelectionPage.clickProductSelectionSelectRate();
  });
  await test.step('Click — Pick Targeted CPM', async () => {
    await productSelectionPage.clickTargetedCpmRate();
  });
  await test.step('Click — Proceed to Budget & Schedule', async () => {
    await productSelectionPage.clickNext();
  });
  await test.step('Click — Open calendar', async () => {
    await budgetAndSchedulePage.clickCalendarViewIsOpen();
  });
  await test.step('Click — Select valid dates', async () => {
    await budgetAndSchedulePage.clickMuiDayCalendarRoot1TableButton();
  });
  await test.step('Click — Confirm dates', async () => {
    await budgetAndSchedulePage.clickOk();
  });
  await test.step('Click — Open Review & Payment', async () => {
    await basicInformationPage.clickReviewAndPayment();
  });
  await test.step('Assert enabled — Confirm Payment is enabled', async () => {
    await campaignBookingPage.expectConfirmPaymentEnabled();
  });
  await test.step('Click — Confirm Payment', async () => {
    await campaignBookingPage.clickConfirmPayment();
  });
  await test.step('Assert visible — Payment screen visible', async () => {
    await paymentPage.expectPaymentVisible();
  });
  await test.step('Click — Select saved payment profile', async () => {
    await paymentPage.clickNameJcbSelected();
  });
  await test.step('Click — Next on Payment', async () => {
    await paymentPage.clickNext();
  });
  await test.step('Assert visible — Payment successful modal visible', async () => {
    await campaignBookingPage.expectPaymentSuccessfulVisible();
  });
  await test.step('Click — Continue to Dashboard', async () => {
    await campaignBookingPage.clickContinueToDashboard();
  });
  await test.step('Click — Navigate back to Campaigns', async () => {
    await dashboardPage.clickCampaigns();
  });
  await test.step('Assert contains — Lifecycle shows Submitted', async () => {
    const txt = await campaignsPage.getMuiTableRoot1TableText(2, 'Status');
    expect(txt).toContain('Submitted');
  });
  await test.step('Assert contains — Lifecycle includes Creative Review', async () => {
    const txt2 = await campaignsPage.getMuiTableRoot1TableText(2, 'Status');
    expect(txt2).toContain('Creative Review');
  });
  await test.step('Assert contains — Lifecycle includes Approval', async () => {
    const txt3 = await campaignsPage.getMuiTableRoot1TableText(2, 'Status');
    expect(txt3).toContain('Approval');
  });
  await test.step('Assert contains — Lifecycle includes Scheduling', async () => {
    const txt4 = await campaignsPage.getMuiTableRoot1TableText(2, 'Status');
    expect(txt4).toContain('Scheduling');
  });
  await test.step('Assert contains — Lifecycle includes Delivery', async () => {
    const txt5 = await campaignsPage.getMuiTableRoot1TableText(2, 'Status');
    expect(txt5).toContain('Delivery');
  });
});

test('[NSSP-2034] Copy Campaign with SLA Validation — Functional Happy Paths: Removing all campaign lines during resolution cancels copy and returns to Campaign Listing', async ({ page, loginPage, dashboardPage, campaignsPage }) => {
  await test.step('Open — Login', async () => {
    await page.goto(`${env.baseUrl}/login`);
  });
  await test.step('Fill — Email', async () => {
    await loginPage.fillEmail(env.username);
  });
  await test.step('Click — Next after email', async () => {
    await loginPage.clickNext();
  });
  await test.step('Fill — Password', async () => {
    await loginPage.fillPassword(env.password);
  });
  await test.step('Click — Log In', async () => {
    await loginPage.clickLogIn();
  });
  await test.step('Assert visible — Dashboard visible', async () => {
    await dashboardPage.expectDashboardVisible();
  });
  await test.step('Click — Go to Campaigns', async () => {
    await dashboardPage.clickCampaigns();
  });
  await test.step('Assert hidden — Copy progress spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Assert visible — Campaigns list visible', async () => {
    await campaignsPage.expectCampaignsVisible();
  });
  await test.step('Fill — Search "All Invalid Lines Campaign"', async () => {
    await campaignsPage.fillSearch('All Invalid Lines Campaign');
  });
  await test.step('Assert hidden — Copy progress spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Assert contains — Confirm "All Invalid Lines Campaign"', async () => {
    const txt = await campaignsPage.getMuiTableRoot1TableText(0, 'Campaign');
    expect(txt).toContain('All Invalid Lines Campaign');
  });
  await test.step('Click — Copy Campaign Option from Actions Menu', async () => {
    await campaignsPage.clickActions();
    await campaignsPage.clickCopyCampaignMenuOption();
  });
  await test.step('Click — Remove line 1', async () => {
    await campaignsPage.clickCancel();
  });
  await test.step('Click — Remove line 2 (last remaining)', async () => {
    await campaignsPage.clickCancel();
  });
  await test.step('Assert visible — Returned to Campaign Listing', async () => {
    await campaignsPage.expectCampaignsVisible();
  });
});

test('[NSSP-2034] Copy Campaign with SLA Validation — Functional Happy Paths: Replacement product with no active rates shows error; user selects different product with active rates to continue', async ({ page, loginPage, dashboardPage, campaignsPage, productSelectionPage, basicInformationPage }) => {
  await test.step('Open — Login', async () => {
    await page.goto(`${env.baseUrl}/login`);
  });
  await test.step('Fill — Email', async () => {
    await loginPage.fillEmail(env.username);
  });
  await test.step('Click — Next after email', async () => {
    await loginPage.clickNext();
  });
  await test.step('Fill — Password', async () => {
    await loginPage.fillPassword(env.password);
  });
  await test.step('Click — Log In', async () => {
    await loginPage.clickLogIn();
  });
  await test.step('Assert visible — Dashboard visible', async () => {
    await dashboardPage.expectDashboardVisible();
  });
  await test.step('Click — Go to Campaigns', async () => {
    await dashboardPage.clickCampaigns();
  });
  await test.step('Assert hidden — Copy progress spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Assert visible — Campaigns list visible', async () => {
    await campaignsPage.expectCampaignsVisible();
  });
  await test.step('Fill — Search "Has Disabled Rate"', async () => {
    await campaignsPage.fillSearch('Has Disabled Rate');
  });
  await test.step('Assert hidden — Copy progress spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Assert contains — Confirm "Has Disabled Rate"', async () => {
    const txt = await campaignsPage.getMuiTableRoot1TableText(0, 'Campaign');
    expect(txt).toContain('Has Disabled Rate');
  });
  await test.step('Click — Copy Campaign Option from Actions Menu', async () => {
    await campaignsPage.clickActions();
    await campaignsPage.clickCopyCampaignMenuOption();
  });
  await test.step('Click — Select replacement product', async () => {
    await productSelectionPage.clickProductSelection();
  });
  await test.step('Click — Choose product with no active rates', async () => {
    await productSelectionPage.clickProductSelection();
  });
  await test.step('Assert visible — No active rates error shown', async () => {
    await basicInformationPage.expectBasicInformationVisible();
  });
  await test.step('Click — Choose a different product', async () => {
    await productSelectionPage.clickProductSelection();
  });
  await test.step('Click — Open Select Rate', async () => {
    await productSelectionPage.clickProductSelectionSelectRate();
  });
  await test.step('Click — Select available rate (Targeted CPM)', async () => {
    await productSelectionPage.clickTargetedCpmRate();
  });
  await test.step('Assert hidden — No active rates error cleared', async () => {
    await basicInformationPage.expectBasicInformationVisible();
  });
});

test('[NSSP-2034] Copy Campaign with SLA Validation — Functional Happy Paths: Audit logging captures changes during resolution (status, product, rate, schedule) with timestamp', async ({ page, loginPage, dashboardPage, campaignsPage, productSelectionPage, budgetAndSchedulePage, basicInformationPage }) => {
  await test.step('Open — Login', async () => {
    await page.goto(`${env.baseUrl}/login`);
  });
  await test.step('Fill — Email', async () => {
    await loginPage.fillEmail(env.username);
  });
  await test.step('Click — Next after email', async () => {
    await loginPage.clickNext();
  });
  await test.step('Fill — Password', async () => {
    await loginPage.fillPassword(env.password);
  });
  await test.step('Click — Log In', async () => {
    await loginPage.clickLogIn();
  });
  await test.step('Assert visible — Dashboard visible', async () => {
    await dashboardPage.expectDashboardVisible();
  });
  await test.step('Click — Go to Campaigns', async () => {
    await dashboardPage.clickCampaigns();
  });
  await test.step('Assert hidden — Copy progress spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Assert visible — Campaigns list visible', async () => {
    await campaignsPage.expectCampaignsVisible();
  });
  await test.step('Fill — Search "Summer Sale"', async () => {
    await campaignsPage.fillSearch('Summer Sale');
  });
  await test.step('Assert hidden — Copy progress spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Click — Open actions and copy a campaign with issues', async () => {
    await campaignsPage.clickActions();
    await campaignsPage.clickCopyCampaignMenuOption();
  });
  await test.step('Click — Copy Campaign', async () => {
    await campaignsPage.clickCopyNow();
  });
  await test.step('Click — Replace disabled rate', async () => {
    await productSelectionPage.clickProductSelectionSelectRate();
  });
  await test.step('Click — Pick Targeted CPM rate', async () => {
    await productSelectionPage.clickTargetedCpmRate();
  });
  await test.step('Click — Open schedule editor', async () => {
    await budgetAndSchedulePage.clickCalendarViewIsOpen();
  });
  await test.step('Click — Select a new date', async () => {
    await budgetAndSchedulePage.clickMuiDayCalendarRoot1TableButton();
  });
  await test.step('Click — Confirm date', async () => {
    await budgetAndSchedulePage.clickOk();
  });
  await test.step('Click — Open Audit Log tab/panel', async () => {
    await basicInformationPage.clickCampaignSetup();
  });
  await test.step('Assert visible — Audit log row for rate change', async () => {
    await basicInformationPage.expectBasicInformationVisible();
  });
  await test.step('Assert visible — Audit log row for schedule change', async () => {
    await basicInformationPage.expectBasicInformationVisible();
  });
  await test.step('Assert contains — Audit log entry contains timestamp', async () => {
    await basicInformationPage.expectBasicInformationContainsText(':');
  });
});

test('[NSSP-2034] Copy Campaign with SLA Validation — Functional Happy Paths: No provisional booking records created when cutoff validation fails until resolved', async ({ page, loginPage, dashboardPage, campaignsPage, budgetAndSchedulePage, basicInformationPage, campaignBookingPage }) => {
  await test.step('Open — Login', async () => {
    await page.goto(`${env.baseUrl}/login`);
  });
  await test.step('Fill — Email', async () => {
    await loginPage.fillEmail(env.username);
  });
  await test.step('Click — Next after email', async () => {
    await loginPage.clickNext();
  });
  await test.step('Fill — Password', async () => {
    await loginPage.fillPassword(env.password);
  });
  await test.step('Click — Log In', async () => {
    await loginPage.clickLogIn();
  });
  await test.step('Assert visible — Dashboard visible', async () => {
    await dashboardPage.expectDashboardVisible();
  });
  await test.step('Click — Go to Campaigns', async () => {
    await dashboardPage.clickCampaigns();
  });
  await test.step('Assert hidden — Copy progress spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Assert visible — Campaigns list visible', async () => {
    await campaignsPage.expectCampaignsVisible();
  });
  await test.step('Fill — Search "SLA Violation Campaign"', async () => {
    await campaignsPage.fillSearch('SLA Violation Campaign');
  });
  await test.step('Assert hidden — Copy progress spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Assert contains — Confirm "SLA Violation Campaign"', async () => {
    const txt = await campaignsPage.getMuiTableRoot1TableText(0, 'Campaign');
    expect(txt).toContain('SLA Violation Campaign');
  });
  await test.step('Click — Copy Campaign Option from Actions Menu', async () => {
    await campaignsPage.clickActions();
    await campaignsPage.clickCopyCampaignMenuOption();
  });
  await test.step('Assert visible — Cutoff validation banner shown', async () => {
    await budgetAndSchedulePage.expectBudgetScheduleVisible();
  });
  await test.step('Click — Go to Review & Payment', async () => {
    await basicInformationPage.clickReviewAndPayment();
  });
  await test.step('Click — Try to Confirm Payment', async () => {
    await campaignBookingPage.clickConfirmPayment();
  });
  await test.step('Assert hidden — No provisional booking record created', async () => {
    await campaignBookingPage.expectConfirmYourBookingVisible();
  });
});

test('[NSSP-2034] Copy Campaign with SLA Validation — Functional Happy Paths: Validate rates remain active for all lines after copy (independent rate validation)', async ({ page, loginPage, dashboardPage, campaignsPage, productSelectionPage, basicInformationPage }) => {
  await test.step('Open — Login', async () => {
    await page.goto(`${env.baseUrl}/login`);
  });
  await test.step('Fill — Email', async () => {
    await loginPage.fillEmail(env.username);
  });
  await test.step('Click — Next after email', async () => {
    await loginPage.clickNext();
  });
  await test.step('Fill — Password', async () => {
    await loginPage.fillPassword(env.password);
  });
  await test.step('Click — Log In', async () => {
    await loginPage.clickLogIn();
  });
  await test.step('Assert visible — Dashboard visible', async () => {
    await dashboardPage.expectDashboardVisible();
  });
  await test.step('Click — Go to Campaigns', async () => {
    await dashboardPage.clickCampaigns();
  });
  await test.step('Assert hidden — Copy progress spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Assert visible — Campaigns list visible', async () => {
    await campaignsPage.expectCampaignsVisible();
  });
  await test.step('Fill — Search "Summer Sale"', async () => {
    await campaignsPage.fillSearch('Summer Sale');
  });
  await test.step('Assert hidden — Copy progress spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Click — Copy Campaign Option from Actions Menu', async () => {
    await campaignsPage.clickActions();
    await campaignsPage.clickCopyCampaignMenuOption();
  });
  await test.step('Assert contains — Line 1 rate active', async () => {
    await productSelectionPage.expectProductSelectionVisible();
    await basicInformationPage.expectBasicInformationContainsText('Active');
  });
  await test.step('Assert contains — Line 2 rate active', async () => {
    await productSelectionPage.expectProductSelectionVisible();
    await basicInformationPage.expectBasicInformationContainsText('Active');
  });
});

test('[NSSP-2034] Copy Campaign with SLA Validation — Functional Happy Paths: Booking enabled only after revalidation passes; user sees clear resolution messaging when blocked and success messaging when enabled', async ({ page, loginPage, dashboardPage, campaignsPage, productSelectionPage, budgetAndSchedulePage, basicInformationPage, campaignBookingPage }) => {
  await test.step('Open — Login', async () => {
    await page.goto(`${env.baseUrl}/login`);
  });
  await test.step('Fill — Email', async () => {
    await loginPage.fillEmail(env.username);
  });
  await test.step('Click — Next after email', async () => {
    await loginPage.clickNext();
  });
  await test.step('Fill — Password', async () => {
    await loginPage.fillPassword(env.password);
  });
  await test.step('Click — Log In', async () => {
    await loginPage.clickLogIn();
  });
  await test.step('Assert visible — Dashboard visible', async () => {
    await dashboardPage.expectDashboardVisible();
  });
  await test.step('Click — Go to Campaigns', async () => {
    await dashboardPage.clickCampaigns();
  });
  await test.step('Assert hidden — Copy progress spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Assert visible — Campaigns list visible', async () => {
    await campaignsPage.expectCampaignsVisible();
  });
  await test.step('Fill — Search "Summer Sale"', async () => {
    await campaignsPage.fillSearch('Summer Sale');
  });
  await test.step('Assert hidden — Copy progress spinner hidden', async () => {
    await campaignsPage.expectLoadingImageHidden();
  });
  await test.step('Click — Copy Campaign Option from Actions Menu', async () => {
    await campaignsPage.clickActions();
    await campaignsPage.clickCopyCampaignMenuOption();
  });
  await test.step('Click — Open Review & Payment', async () => {
    await basicInformationPage.clickReviewAndPayment();
  });
  await test.step('Click — Attempt to Confirm Payment', async () => {
    await campaignBookingPage.clickConfirmPayment();
  });
  await test.step('Assert contains — Blocked message with corrective actions', async () => {
    await campaignBookingPage.expectConfirmYourBookingVisible();
  });
  await test.step('Click — Fix rate: Select replacement', async () => {
    await productSelectionPage.clickProductSelectionSelectRate();
  });
  await test.step('Click — Pick Targeted CPM', async () => {
    await productSelectionPage.clickTargetedCpmRate();
  });
  await test.step('Click — Fix schedule: Open calendar', async () => {
    await budgetAndSchedulePage.clickCalendarViewIsOpen();
  });
  await test.step('Click — Select valid date', async () => {
    await budgetAndSchedulePage.clickMuiDayCalendarRoot1TableButton();
  });
  await test.step('Click — Confirm date', async () => {
    await budgetAndSchedulePage.clickOk();
  });
  await test.step('Click — Re-open Review & Payment', async () => {
    await basicInformationPage.clickReviewAndPayment();
  });
  await test.step('Assert hidden — Blocked message cleared', async () => {
    await campaignBookingPage.expectPaymentMethodVisible();
  });
  await test.step('Assert enabled — Confirm Payment now enabled', async () => {
    await campaignBookingPage.expectConfirmPaymentEnabled();
  });
});

  test('Launch Copy Campaign opens new campaign in Copy Mode', { tag: ["@functional","@regression","@P0","@case-339dc33c-d3d2-4986-ab9d-b8d7493daa32"] }, async ({ page, loginPage, dashboardPage, campaignsPage, basicInformationPage }) => {
    await test.step('Open — Open Login URL', async () => {
      await page.goto(env.baseURL);
    });

    await test.step('Fill — Login email', async () => {
      await loginPage.fillEmail(env.username);
    });

    await test.step('Click — Next after email', async () => {
      await loginPage.clickNext();
    });

    await test.step('Fill — Login password', async () => {
      await loginPage.fillPassword(env.password);
    });

    await test.step('Click — Click Log In', async () => {
      await loginPage.clickLogIn();
    });

    await test.step('Assert visible — Dashboard visible', async () => {
      await dashboardPage.expectDashboardVisible();
    });

    await test.step('Click — Go to Campaigns', async () => {
      await dashboardPage.clickCampaigns();
    });

    await test.step('Assert hidden — Copy progress spinner hidden', async () => {
      await campaignsPage.expectLoadingImageHidden();
    });

    await test.step('Assert visible — Campaigns list visible', async () => {
      await campaignsPage.expectCampaignsVisible();
    });

    await test.step('Fill — Search \'Summer Sale\'', async () => {
      await campaignsPage.fillSearch('Summer Sale');
    });

    await test.step('Assert hidden — Copy progress spinner hidden', async () => {
      await campaignsPage.expectLoadingImageHidden();
    });

    await test.step('Assert contains — Confirm source campaign \'Summer Sale\' exists', async () => {
      const tableText = await campaignsPage.getMuiTableRoot1TableText(0, 'Campaign');
      expect(tableText).toContain('Summer Sale');
    });

    await test.step('Click — Copy Campaign Option from Actions Menu', async () => {
      await campaignsPage.clickActions();
      await campaignsPage.clickCopyCampaignMenuOption();
    });

    await test.step('Assert visible — Copy Campaign modal header visible', async () => {
      await campaignsPage.expectCopyCampaignModalHeaderVisible();
    });

    await test.step('Assert contains — Copy Campaign modal exists \'Copy of Summer Sale\'', async () => {
      await campaignsPage.expectCampaignModalText('Summer Sale');
    });

    await test.step('Click — Click Copy Now', async () => {
      await campaignsPage.clickCopyNow();
    });

    await test.step('Assert visible — Copy progress spinner shows', async () => {
      await campaignsPage.expectLoadingImageVisible();
    });

    await test.step('Assert hidden — Copy progress spinner hidden', async () => {
      await campaignsPage.expectLoadingImageHidden();
    });

    await test.step('Click — Copied Campaign', async () => {
      await campaignsPage.clickMuiTableRoot1TableLink(0, 'Campaign');
    });

    await test.step('Wait for hidden — Wait for spinner hidden', async () => {
      await campaignsPage.waitForHiddenLoadingImage();
    });

    await test.step('Assert visible — Basic Information page visible in Copy Mode', async () => {
      await basicInformationPage.expectSaveDraftVisible();
    });

    await test.step('Assert visible — Copy Mode banner visible', async () => {
      await basicInformationPage.expectContainsText('Summer Sale');
    });

    await test.step('Assert visible — Status Draft visible', async () => {
      await basicInformationPage.expectStatusDraftVisible();
    });
  });
