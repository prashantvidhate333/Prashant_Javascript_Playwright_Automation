import { test, expect } from "@playwright/test";
import xlsx from "xlsx";
// import tests from "../../testData/usersData.json";

const workbook = xlsx.readFile("./testData/orangeHRM.xlsx");
const sheet = workbook.Sheets["Sheet1"];
const testData1 = xlsx.utils.sheet_to_json(sheet);

for (const user1 of testData1) {
  test(`Excel Sheet Pro ${user1.username}`, async ({ page }) => {
    console.log(`Username : ${user1.username}`);
    console.log(`Password : ${user1.password}`);
    console.log(`Condition : ${user1.isValid}`);
    console.log("--------------");
    console.log(`------------Row Data----------------`);
    console.log(testData1[0]);
    console.log(testData1[1]);

    console.log(`------------Coulmn Data----------------`);
    const usernameColumnData = testData1.map((user1) => user1.username);
    console.log(usernameColumnData);
    console.log("--------------");
    const passwordColumnData = testData1.map((user1) => user1.password);
    console.log(passwordColumnData);
  });
}
