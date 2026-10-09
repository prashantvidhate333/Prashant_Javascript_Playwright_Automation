import { expect } from "@playwright/test";
import { BasePage } from "./basePage";

export class PimPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
    this.pimHeader = page.locator("//span[text()='PIM']");
    this.addEmpHeader = page.locator("//a[text()='Add Employee']");
    this.fName = page.locator('[name="firstName"]');
    this.mName = page.locator('[name="middleName"]');
    this.lName = page.locator('[name="lastName"]');
    this.empId = page.locator(
      "//label[text()='Employee Id']//..//following-sibling::div//input",
    );
    this.submitBtn = page.locator('[type="submit"]');
    this.personalDetails = page.locator(
      '//div[@class="orangehrm-edit-employee-name"]//h6',
    );
  }

  async openPim() {
    await this.click(this.pimHeader);
  }

  async openAddEmp() {
    await this.click(this.addEmpHeader);
  }

  async addEmpDetails(firstName, middleName, lastName, employeeId) {
    await this.fName.fill(firstName);
    await this.mName.fill(middleName);
    await this.lName.fill(lastName);
    await this.empId.fill(employeeId);
    await this.page.waitForTimeout(2000);
    await this.click(this.submitBtn);
  }

  async getEmpAddedText() {
    return await this.getText(this.personalDetails);
  }
}
