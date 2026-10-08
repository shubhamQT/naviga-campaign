import { test as base, expect } from "@playwright/test";
import { AddPublicationsPage } from "../pageobjects/AddPublicationsPage";
import { BasicInformationPage } from "../pageobjects/BasicInformationPage";
import { BillingInformationPage } from "../pageobjects/BillingInformationPage";
import { BudgetAndSchedulePage } from "../pageobjects/BudgetAndSchedulePage";
import { CampaignBookingPage } from "../pageobjects/CampaignBookingPage";
import { CampaignsPage } from "../pageobjects/CampaignsPage";
import { DashboardPage } from "../pageobjects/DashboardPage";
import { GalleryPage } from "../pageobjects/GalleryPage";
import { HomePage } from "../pageobjects/HomePage";
import { LoginPage } from "../pageobjects/LoginPage";
import { PaymentPage } from "../pageobjects/PaymentPage";
import { ProductSelectionPage } from "../pageobjects/ProductSelectionPage";
import { ReviewPage } from "../pageobjects/ReviewPage";
import { TargetingOptionsPage } from "../pageobjects/TargetingOptionsPage";
import { UploadCreativesPage } from "../pageobjects/UploadCreativesPage";

type AppFixtures = {
  addPublicationsPage: AddPublicationsPage;
  basicInformationPage: BasicInformationPage;
  billingInformationPage: BillingInformationPage;
  budgetAndSchedulePage: BudgetAndSchedulePage;
  campaignBookingPage: CampaignBookingPage;
  campaignsPage: CampaignsPage;
  dashboardPage: DashboardPage;
  galleryPage: GalleryPage;
  homePage: HomePage;
  loginPage: LoginPage;
  paymentPage: PaymentPage;
  productSelectionPage: ProductSelectionPage;
  reviewPage: ReviewPage;
  targetingOptionsPage: TargetingOptionsPage;
  uploadCreativesPage: UploadCreativesPage;
};

export const test = base.extend<AppFixtures>({
  addPublicationsPage: async ({ page }, use) => {
    await use(new AddPublicationsPage(page));
  },
  basicInformationPage: async ({ page }, use) => {
    await use(new BasicInformationPage(page));
  },
  billingInformationPage: async ({ page }, use) => {
    await use(new BillingInformationPage(page));
  },
  budgetAndSchedulePage: async ({ page }, use) => {
    await use(new BudgetAndSchedulePage(page));
  },
  campaignBookingPage: async ({ page }, use) => {
    await use(new CampaignBookingPage(page));
  },
  campaignsPage: async ({ page }, use) => {
    await use(new CampaignsPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
  galleryPage: async ({ page }, use) => {
    await use(new GalleryPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  paymentPage: async ({ page }, use) => {
    await use(new PaymentPage(page));
  },
  productSelectionPage: async ({ page }, use) => {
    await use(new ProductSelectionPage(page));
  },
  reviewPage: async ({ page }, use) => {
    await use(new ReviewPage(page));
  },
  targetingOptionsPage: async ({ page }, use) => {
    await use(new TargetingOptionsPage(page));
  },
  uploadCreativesPage: async ({ page }, use) => {
    await use(new UploadCreativesPage(page));
  },
});

export { expect };
