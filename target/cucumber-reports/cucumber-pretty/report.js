$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("bankcustomer/bankCustomerLogin.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# new feature"
    },
    {
      "line": 2,
      "value": "# Tags: optional"
    }
  ],
  "line": 4,
  "name": "Bank customer login",
  "description": "",
  "id": "bank-customer-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Bank customer login successfully",
  "description": "",
  "id": "bank-customer-login;bank-customer-login-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I click username as \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click customer login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify that customer login successfully with name as \u003cusername\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "bank-customer-login;bank-customer-login-successfully;",
  "rows": [
    {
      "cells": [
        "username"
      ],
      "line": 15,
      "id": "bank-customer-login;bank-customer-login-successfully;;1"
    },
    {
      "cells": [
        "Harry Potter"
      ],
      "line": 16,
      "id": "bank-customer-login;bank-customer-login-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Website http://www.way2automation.com/angularjs-protractor/banking/#/customer",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/customer",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 8388957700,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Bank customer login successfully",
  "description": "",
  "id": "bank-customer-login;bank-customer-login-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I click username as Harry Potter",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click customer login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify that customer login successfully with name as Harry Potter",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 20
    }
  ],
  "location": "BankCustomerLoginTest.clickUsername(String)"
});
formatter.result({
  "duration": 2144456200,
  "status": "passed"
});
formatter.match({
  "location": "BankCustomerLoginTest.clickCustomerLoginButton()"
});
formatter.result({
  "duration": 7162863000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 55
    }
  ],
  "location": "BankCustomerLoginTest.verifyCustomerLoginSuccessfully(String)"
});
formatter.result({
  "duration": 5088237300,
  "status": "passed"
});
formatter.uri("bankcustomer/customerDeposit.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# new feature"
    },
    {
      "line": 2,
      "value": "# Tags: optional"
    }
  ],
  "line": 4,
  "name": "Customer deposit",
  "description": "",
  "id": "customer-deposit",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Deposit successfully",
  "description": "",
  "id": "customer-deposit;deposit-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login successfully with as \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click deposit tab",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I type deposit amount as \u003camount\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click deposit button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify add deposit successfully with amount as \u003camount\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "customer-deposit;deposit-successfully;",
  "rows": [
    {
      "cells": [
        "username",
        "amount"
      ],
      "line": 17,
      "id": "customer-deposit;deposit-successfully;;1"
    },
    {
      "cells": [
        "Harry Potter",
        "2000"
      ],
      "line": 18,
      "id": "customer-deposit;deposit-successfully;;2"
    },
    {
      "cells": [
        "Harry Potter",
        "2000"
      ],
      "line": 19,
      "id": "customer-deposit;deposit-successfully;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Website http://www.way2automation.com/angularjs-protractor/banking/#/customer",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/customer",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 7548315500,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Deposit successfully",
  "description": "",
  "id": "customer-deposit;deposit-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login successfully with as Harry Potter",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click deposit tab",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I type deposit amount as 2000",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click deposit button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify add deposit successfully with amount as 2000",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 29
    }
  ],
  "location": "CommonTest.loginSuccessfully(String)"
});
formatter.result({
  "duration": 15337338800,
  "status": "passed"
});
formatter.match({
  "location": "CustomerDepositTest.clickDepositTab()"
});
formatter.result({
  "duration": 11211291200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 25
    }
  ],
  "location": "CustomerDepositTest.setAmount(String)"
});
formatter.result({
  "duration": 7249116600,
  "status": "passed"
});
formatter.match({
  "location": "CustomerDepositTest.clickDepositButton()"
});
formatter.result({
  "duration": 9205727800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 49
    }
  ],
  "location": "CustomerDepositTest.verifyAddDepositSuccessfully(String)"
});
formatter.result({
  "duration": 26603904200,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Website http://www.way2automation.com/angularjs-protractor/banking/#/customer",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/customer",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 1289268400,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Deposit successfully",
  "description": "",
  "id": "customer-deposit;deposit-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login successfully with as Harry Potter",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click deposit tab",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I type deposit amount as 2000",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click deposit button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify add deposit successfully with amount as 2000",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 29
    }
  ],
  "location": "CommonTest.loginSuccessfully(String)"
});
formatter.result({
  "duration": 10302246200,
  "status": "passed"
});
formatter.match({
  "location": "CustomerDepositTest.clickDepositTab()"
});
formatter.result({
  "duration": 6160524100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 25
    }
  ],
  "location": "CustomerDepositTest.setAmount(String)"
});
formatter.result({
  "duration": 7262421600,
  "status": "passed"
});
formatter.match({
  "location": "CustomerDepositTest.clickDepositButton()"
});
formatter.result({
  "duration": 4146457700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 49
    }
  ],
  "location": "CustomerDepositTest.verifyAddDepositSuccessfully(String)"
});
formatter.result({
  "duration": 16828394200,
  "status": "passed"
});
formatter.uri("bankcustomer/customerWithdrawl.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# new feature"
    },
    {
      "line": 2,
      "value": "# Tags: optional"
    }
  ],
  "line": 4,
  "name": "Customer withdrawal",
  "description": "",
  "id": "customer-withdrawal",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Customer withdrawal successfully",
  "description": "",
  "id": "customer-withdrawal;customer-withdrawal-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login successfully with as \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I deposit successfully with amount as \u003cdepositamount\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click withdrawal tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I type withdrawal amount as \u003camount\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click withdraw button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify withdrawal successfully with amount as \u003camount\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "customer-withdrawal;customer-withdrawal-successfully;",
  "rows": [
    {
      "cells": [
        "username",
        "amount",
        "depositamount"
      ],
      "line": 18,
      "id": "customer-withdrawal;customer-withdrawal-successfully;;1"
    },
    {
      "cells": [
        "Harry Potter",
        "2000",
        "4000"
      ],
      "line": 19,
      "id": "customer-withdrawal;customer-withdrawal-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Website http://www.way2automation.com/angularjs-protractor/banking/#/customer",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/customer",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 8368835500,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Customer withdrawal successfully",
  "description": "",
  "id": "customer-withdrawal;customer-withdrawal-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login successfully with as Harry Potter",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I deposit successfully with amount as 4000",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click withdrawal tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I type withdrawal amount as 2000",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click withdraw button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify withdrawal successfully with amount as 2000",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 29
    }
  ],
  "location": "CommonTest.loginSuccessfully(String)"
});
formatter.result({
  "duration": 15263910100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4000",
      "offset": 38
    }
  ],
  "location": "CommonTest.depositSuccessfully(String)"
});
formatter.result({
  "duration": 21548961100,
  "status": "passed"
});
formatter.match({
  "location": "CustomerWithdrawalTest.clickWithdrawTab()"
});
formatter.result({
  "duration": 11235284400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 28
    }
  ],
  "location": "CustomerWithdrawalTest.setWithdrawalAmount(String)"
});
formatter.result({
  "duration": 7250696300,
  "status": "passed"
});
formatter.match({
  "location": "CustomerWithdrawalTest.clickDepositButton()"
});
formatter.result({
  "duration": 9125530800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 48
    }
  ],
  "location": "CustomerWithdrawalTest.verifyAddWithdrawalSuccessfully(String)"
});
formatter.result({
  "duration": 26598497800,
  "status": "passed"
});
formatter.uri("bankcustomer/resetTransaction.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# new feature"
    },
    {
      "line": 2,
      "value": "# Tags: optional"
    }
  ],
  "line": 4,
  "name": "Reset transaction",
  "description": "",
  "id": "reset-transaction",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Reset transaction successfully",
  "description": "",
  "id": "reset-transaction;reset-transaction-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login successfully with as \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I deposit successfully with amount as \u003cdepositamount\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I withdrawal successfully with amount as \u003cwithdrawalamount\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click transactions tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click reset button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify reset transactions successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "reset-transaction;reset-transaction-successfully;",
  "rows": [
    {
      "cells": [
        "username",
        "depositamount",
        "withdrawalamount"
      ],
      "line": 18,
      "id": "reset-transaction;reset-transaction-successfully;;1"
    },
    {
      "cells": [
        "Harry Potter",
        "4000",
        "2000"
      ],
      "line": 19,
      "id": "reset-transaction;reset-transaction-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Website http://www.way2automation.com/angularjs-protractor/banking/#/customer",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/customer",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 8323223200,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Reset transaction successfully",
  "description": "",
  "id": "reset-transaction;reset-transaction-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login successfully with as Harry Potter",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I deposit successfully with amount as 4000",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I withdrawal successfully with amount as 2000",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click transactions tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click reset button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify reset transactions successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 29
    }
  ],
  "location": "CommonTest.loginSuccessfully(String)"
});
formatter.result({
  "duration": 10351610000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4000",
      "offset": 38
    }
  ],
  "location": "CommonTest.depositSuccessfully(String)"
});
formatter.result({
  "duration": 11490896400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 41
    }
  ],
  "location": "CommonTest.withdrawalSucessfully(String)"
});
formatter.result({
  "duration": 15427387700,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickTransactionTab()"
});
formatter.result({
  "duration": 4085797100,
  "status": "passed"
});
formatter.match({
  "location": "ResetTransactionTest.clickResetButton()"
});
formatter.result({
  "duration": 4129625000,
  "status": "passed"
});
formatter.match({
  "location": "ResetTransactionTest.verifyResetTransactionSuccessfully()"
});
formatter.result({
  "duration": 4060392700,
  "status": "passed"
});
formatter.uri("bankcustomer/sortTransaction.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# new feature"
    },
    {
      "line": 2,
      "value": "# Tags: optional"
    }
  ],
  "line": 4,
  "name": "Sort transaction",
  "description": "",
  "id": "sort-transaction",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Sort transaction successfully",
  "description": "",
  "id": "sort-transaction;sort-transaction-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login successfully with as \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I deposit successfully with amount as \u003cdepositamount\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I withdrawal successfully with amount as \u003cwithdrawalamount\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click transactions tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click date time sort",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify sort transactions successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "sort-transaction;sort-transaction-successfully;",
  "rows": [
    {
      "cells": [
        "username",
        "depositamount",
        "withdrawalamount"
      ],
      "line": 18,
      "id": "sort-transaction;sort-transaction-successfully;;1"
    },
    {
      "cells": [
        "Harry Potter",
        "4000",
        "2000"
      ],
      "line": 19,
      "id": "sort-transaction;sort-transaction-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Website http://www.way2automation.com/angularjs-protractor/banking/#/customer",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/customer",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 7188581600,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Sort transaction successfully",
  "description": "",
  "id": "sort-transaction;sort-transaction-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login successfully with as Harry Potter",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I deposit successfully with amount as 4000",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I withdrawal successfully with amount as 2000",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click transactions tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click date time sort",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify sort transactions successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 29
    }
  ],
  "location": "CommonTest.loginSuccessfully(String)"
});
formatter.result({
  "duration": 10315279800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4000",
      "offset": 38
    }
  ],
  "location": "CommonTest.depositSuccessfully(String)"
});
formatter.result({
  "duration": 11459576900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 41
    }
  ],
  "location": "CommonTest.withdrawalSucessfully(String)"
});
formatter.result({
  "duration": 15497748900,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickTransactionTab()"
});
formatter.result({
  "duration": 4101815500,
  "status": "passed"
});
formatter.match({
  "location": "TransactionSortTest.clickDateTimeSort()"
});
formatter.result({
  "duration": 3331223600,
  "status": "passed"
});
formatter.match({
  "location": "TransactionSortTest.verifySortTransactionSuccessfully()"
});
formatter.result({
  "duration": 2111616600,
  "status": "passed"
});
formatter.uri("bankcustomer/transaction.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# new feature"
    },
    {
      "line": 2,
      "value": "# Tags: optional"
    }
  ],
  "line": 4,
  "name": "Customer transaction",
  "description": "",
  "id": "customer-transaction",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Customer transaction successfully",
  "description": "",
  "id": "customer-transaction;customer-transaction-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login successfully with as \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I deposit successfully with amount as \u003cdepositamount\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I withdrawal successfully with amount as \u003cwithdrawalamount\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click transactions tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify transactions successfully with deposit amount as \u003cdepositamount\u003e and withdrawal amount as \u003cwithdrawalamount\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "customer-transaction;customer-transaction-successfully;",
  "rows": [
    {
      "cells": [
        "username",
        "depositamount",
        "withdrawalamount"
      ],
      "line": 17,
      "id": "customer-transaction;customer-transaction-successfully;;1"
    },
    {
      "cells": [
        "Harry Potter",
        "4000",
        "2000"
      ],
      "line": 18,
      "id": "customer-transaction;customer-transaction-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Website http://www.way2automation.com/angularjs-protractor/banking/#/customer",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/customer",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 8198564000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Customer transaction successfully",
  "description": "",
  "id": "customer-transaction;customer-transaction-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login successfully with as Harry Potter",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I deposit successfully with amount as 4000",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I withdrawal successfully with amount as 2000",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click transactions tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify transactions successfully with deposit amount as 4000 and withdrawal amount as 2000",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 29
    }
  ],
  "location": "CommonTest.loginSuccessfully(String)"
});
formatter.result({
  "duration": 10255093800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4000",
      "offset": 38
    }
  ],
  "location": "CommonTest.depositSuccessfully(String)"
});
formatter.result({
  "duration": 11441802200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 41
    }
  ],
  "location": "CommonTest.withdrawalSucessfully(String)"
});
formatter.result({
  "duration": 15472606700,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickTransactionTab()"
});
formatter.result({
  "duration": 4129903600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4000",
      "offset": 58
    },
    {
      "val": "2000",
      "offset": 88
    }
  ],
  "location": "TransactionTest.verifyTransactionsSuccessfully(String,String)"
});
formatter.result({
  "duration": 2300194500,
  "status": "passed"
});
formatter.uri("bankmanager/addCustomer.feature");
formatter.feature({
  "line": 1,
  "name": "Add customer",
  "description": "",
  "id": "add-customer",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Add customer successfully",
  "description": "",
  "id": "add-customer;add-customer-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click add customer tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I input first name as \u003cfirstname\u003e, last name as \u003clastname\u003e and post code as \u003cpostcode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify that system is already added customer as \u003cfullname\u003e successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "add-customer;add-customer-successfully;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "postcode",
        "fullname"
      ],
      "line": 14,
      "id": "add-customer;add-customer-successfully;;1"
    },
    {
      "cells": [
        "thao",
        "ngo",
        "550000",
        "thao ngo"
      ],
      "line": 15,
      "id": "add-customer;add-customer-successfully;;2"
    },
    {
      "cells": [
        "\u003chtml\u003ethao\u003c/html\u003e",
        "\u003cscript\u003engo\u003c/scrip\u003e",
        "550000",
        "\u003chtml\u003ethao\u003c/html\u003e \u003cscript\u003engo\u003c/scrip\u003e"
      ],
      "line": 16,
      "id": "add-customer;add-customer-successfully;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open Website https://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 9578962100,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Add customer successfully",
  "description": "",
  "id": "add-customer;add-customer-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click add customer tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I input first name as thao, last name as ngo and post code as 550000",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify that system is already added customer as thao ngo successfully",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonTest.loginBankManagerSuccessfully()"
});
formatter.result({
  "duration": 11121027500,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerTest.clickAddCustomerTab()"
});
formatter.result({
  "duration": 6155380100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thao",
      "offset": 22
    },
    {
      "val": "ngo",
      "offset": 41
    },
    {
      "val": "550000",
      "offset": 62
    }
  ],
  "location": "AddCustomerTest.setUserInformation(String,String,String)"
});
formatter.result({
  "duration": 3586977600,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerTest.clickSubmit()"
});
formatter.result({
  "duration": 10120930700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thao ngo",
      "offset": 50
    }
  ],
  "location": "AddCustomerTest.verifyAddCustomerSuccessfully(String)"
});
formatter.result({
  "duration": 23394981400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open Website https://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 1272439300,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Add customer successfully",
  "description": "",
  "id": "add-customer;add-customer-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click add customer tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I input first name as \u003chtml\u003ethao\u003c/html\u003e, last name as \u003cscript\u003engo\u003c/scrip\u003e and post code as 550000",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify that system is already added customer as \u003chtml\u003ethao\u003c/html\u003e \u003cscript\u003engo\u003c/scrip\u003e successfully",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonTest.loginBankManagerSuccessfully()"
});
formatter.result({
  "duration": 6121809700,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerTest.clickAddCustomerTab()"
});
formatter.result({
  "duration": 1124008400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003chtml\u003ethao\u003c/html\u003e",
      "offset": 22
    },
    {
      "val": "\u003cscript\u003engo\u003c/scrip\u003e",
      "offset": 54
    },
    {
      "val": "550000",
      "offset": 91
    }
  ],
  "location": "AddCustomerTest.setUserInformation(String,String,String)"
});
formatter.result({
  "duration": 3946916400,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerTest.clickSubmit()"
});
formatter.result({
  "duration": 5089989600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003chtml\u003ethao\u003c/html\u003e \u003cscript\u003engo\u003c/scrip\u003e",
      "offset": 50
    }
  ],
  "location": "AddCustomerTest.verifyAddCustomerSuccessfully(String)"
});
formatter.result({
  "duration": 18394309200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Add customer unsuccessfully without first name, last name or post code",
  "description": "",
  "id": "add-customer;add-customer-unsuccessfully-without-first-name,-last-name-or-post-code",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I click add customer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I input first name as \u003cfirstname\u003e, last name as \u003clastname\u003e and post code as \u003cpostcode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I verify that system added customer unsuccessfully with full name as \u003cfullname\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "add-customer;add-customer-unsuccessfully-without-first-name,-last-name-or-post-code;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "postcode",
        "fullname"
      ],
      "line": 26,
      "id": "add-customer;add-customer-unsuccessfully-without-first-name,-last-name-or-post-code;;1"
    },
    {
      "cells": [
        "thao",
        "",
        "550000",
        "thao"
      ],
      "line": 27,
      "id": "add-customer;add-customer-unsuccessfully-without-first-name,-last-name-or-post-code;;2"
    },
    {
      "cells": [
        "",
        "hoang",
        "550000",
        "hoang"
      ],
      "line": 28,
      "id": "add-customer;add-customer-unsuccessfully-without-first-name,-last-name-or-post-code;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open Website https://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 1059479300,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Add customer unsuccessfully without first name, last name or post code",
  "description": "",
  "id": "add-customer;add-customer-unsuccessfully-without-first-name,-last-name-or-post-code;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I click add customer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I input first name as thao, last name as  and post code as 550000",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I verify that system added customer unsuccessfully with full name as thao",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonTest.loginBankManagerSuccessfully()"
});
formatter.result({
  "duration": 6136978300,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerTest.clickAddCustomerTab()"
});
formatter.result({
  "duration": 1183077500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thao",
      "offset": 22
    },
    {
      "val": "",
      "offset": 41
    },
    {
      "val": "550000",
      "offset": 59
    }
  ],
  "location": "AddCustomerTest.setUserInformation(String,String,String)"
});
formatter.result({
  "duration": 3533866600,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerTest.clickSubmit()"
});
formatter.result({
  "duration": 5238843600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thao",
      "offset": 69
    }
  ],
  "location": "AddCustomerTest.verifyAddCustomerUnsuccessfully(String)"
});
formatter.result({
  "duration": 9352594300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open Website https://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 1057260100,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Add customer unsuccessfully without first name, last name or post code",
  "description": "",
  "id": "add-customer;add-customer-unsuccessfully-without-first-name,-last-name-or-post-code;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I click add customer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I input first name as , last name as hoang and post code as 550000",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I verify that system added customer unsuccessfully with full name as hoang",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonTest.loginBankManagerSuccessfully()"
});
formatter.result({
  "duration": 6150725600,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerTest.clickAddCustomerTab()"
});
formatter.result({
  "duration": 1096062200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 22
    },
    {
      "val": "hoang",
      "offset": 37
    },
    {
      "val": "550000",
      "offset": 60
    }
  ],
  "location": "AddCustomerTest.setUserInformation(String,String,String)"
});
formatter.result({
  "duration": 3609200100,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerTest.clickSubmit()"
});
formatter.result({
  "duration": 5095289100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hoang",
      "offset": 69
    }
  ],
  "location": "AddCustomerTest.verifyAddCustomerUnsuccessfully(String)"
});
formatter.result({
  "duration": 9393593300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "Add customer unsuccessfully with existed customer",
  "description": "",
  "id": "add-customer;add-customer-unsuccessfully-with-existed-customer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I click add customer tab",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I input first name as \u003cfirstname\u003e, last name as \u003clastname\u003e and post code as \u003cpostcode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I verify that system can not add with customer is existed with first name as \u003cfirstname\u003e, last name as \u003clastname\u003e and post code as \u003cpostcode\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "add-customer;add-customer-unsuccessfully-with-existed-customer;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "postcode"
      ],
      "line": 38,
      "id": "add-customer;add-customer-unsuccessfully-with-existed-customer;;1"
    },
    {
      "cells": [
        "Harry",
        "Potter",
        "E725JB"
      ],
      "line": 39,
      "id": "add-customer;add-customer-unsuccessfully-with-existed-customer;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open Website https://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 1062585200,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Add customer unsuccessfully with existed customer",
  "description": "",
  "id": "add-customer;add-customer-unsuccessfully-with-existed-customer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I click add customer tab",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I input first name as Harry, last name as Potter and post code as E725JB",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I verify that system can not add with customer is existed with first name as Harry, last name as Potter and post code as E725JB",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonTest.loginBankManagerSuccessfully()"
});
formatter.result({
  "duration": 6111982900,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerTest.clickAddCustomerTab()"
});
formatter.result({
  "duration": 1126832100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry",
      "offset": 22
    },
    {
      "val": "Potter",
      "offset": 42
    },
    {
      "val": "E725JB",
      "offset": 66
    }
  ],
  "location": "AddCustomerTest.setUserInformation(String,String,String)"
});
formatter.result({
  "duration": 3661289400,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerTest.clickSubmit()"
});
formatter.result({
  "duration": 5115035800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry",
      "offset": 77
    },
    {
      "val": "Potter",
      "offset": 97
    },
    {
      "val": "E725JB",
      "offset": 121
    }
  ],
  "location": "AddCustomerTest.verifyAddCustomerUnsuccessfullyWithCustomerExisted(String,String,String)"
});
formatter.result({
  "duration": 18333464500,
  "status": "passed"
});
formatter.uri("bankmanager/bankManagerLogin.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# new feature"
    },
    {
      "line": 2,
      "value": "# Tags: optional"
    }
  ],
  "line": 4,
  "name": "Login into bank management",
  "description": "",
  "id": "login-into-bank-management",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Login into bank management successfully",
  "description": "",
  "id": "login-into-bank-management;login-into-bank-management-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Open Website https://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click bank manager login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I verify login into bank management successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 8580386400,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerLoginTest.clickBankManagerLoginButtton()"
});
formatter.result({
  "duration": 7167969200,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerLoginTest.verifyLoginSuccessfully()"
});
formatter.result({
  "duration": 1999856500,
  "status": "passed"
});
formatter.uri("bankmanager/customer.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# new feature"
    },
    {
      "line": 2,
      "value": "# Tags: optional"
    }
  ],
  "line": 4,
  "name": "Manage customer",
  "description": "",
  "id": "manage-customer",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Manage customer successfully",
  "description": "",
  "id": "manage-customer;manage-customer-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click customer tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click delete button with first name as \u003cfirstname\u003e, last name as \u003clastname\u003e, post code as \u003cpostcode\u003e and account number as \u003caccountnumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify customer delete successfully with first name as \u003cfirstname\u003e, last name as \u003clastname\u003e, post code as \u003cpostcode\u003e and account number as \u003caccountnumber\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "manage-customer;manage-customer-successfully;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "postcode",
        "accountnumber"
      ],
      "line": 16,
      "id": "manage-customer;manage-customer-successfully;;1"
    },
    {
      "cells": [
        "Harry",
        "Potter",
        "E725JB",
        "1004"
      ],
      "line": 17,
      "id": "manage-customer;manage-customer-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Website https://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 8649884600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Manage customer successfully",
  "description": "",
  "id": "manage-customer;manage-customer-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click customer tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click delete button with first name as Harry, last name as Potter, post code as E725JB and account number as 1004",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify customer delete successfully with first name as Harry, last name as Potter, post code as E725JB and account number as 1004",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonTest.loginBankManagerSuccessfully()"
});
formatter.result({
  "duration": 11188172400,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickCustomerTab()"
});
formatter.result({
  "duration": 8090748000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry",
      "offset": 41
    },
    {
      "val": "Potter",
      "offset": 61
    },
    {
      "val": "E725JB",
      "offset": 82
    },
    {
      "val": "1004",
      "offset": 111
    }
  ],
  "location": "CustomerTest.clickButtonDelete(String,String,String,String)"
});
formatter.result({
  "duration": 7552467700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry",
      "offset": 57
    },
    {
      "val": "Potter",
      "offset": 77
    },
    {
      "val": "E725JB",
      "offset": 98
    },
    {
      "val": "1004",
      "offset": 127
    }
  ],
  "location": "CustomerTest.verifyDeleteCustomerSuccessfully(String,String,String,String)"
});
formatter.result({
  "duration": 2164072800,
  "status": "passed"
});
formatter.uri("bankmanager/openAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Open Account",
  "description": "In order to open account, I want to have the adding customer feature so that I can add customer easily",
  "id": "open-account",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Open account successfully",
  "description": "",
  "id": "open-account;open-account-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click open account tab",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I choose account as \u003cfullname\u003e and currency as \u003ccurrency\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click process button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I close popup",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify that user is already open with first name as \u003cfirstname\u003e and last name as \u003clastname\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "open-account;open-account-successfully;",
  "rows": [
    {
      "cells": [
        "fullname",
        "currency",
        "firstname",
        "lastname"
      ],
      "line": 16,
      "id": "open-account;open-account-successfully;;1"
    },
    {
      "cells": [
        "Harry Potter",
        "Pound",
        "Harry",
        "Potter"
      ],
      "line": 17,
      "id": "open-account;open-account-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open Website https://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 7590101600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Open account successfully",
  "description": "",
  "id": "open-account;open-account-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click open account tab",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I choose account as Harry Potter and currency as Pound",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click process button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I close popup",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify that user is already open with first name as Harry and last name as Potter",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonTest.loginBankManagerSuccessfully()"
});
formatter.result({
  "duration": 11106687300,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountTest.clickOpenAccountTab()"
});
formatter.result({
  "duration": 9105613500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 20
    },
    {
      "val": "Pound",
      "offset": 49
    }
  ],
  "location": "OpenAccountTest.setAccount(String,String)"
});
formatter.result({
  "duration": 6492341800,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountTest.clickProcessButton()"
});
formatter.result({
  "duration": 9136850500,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountTest.closePopup()"
});
formatter.result({
  "duration": 6013034600,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickCustomerTab()"
});
formatter.result({
  "duration": 8128834200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry",
      "offset": 54
    },
    {
      "val": "Potter",
      "offset": 77
    }
  ],
  "location": "OpenAccountTest.verifyOpenCustomerSuccessfully(String,String)"
});
formatter.result({
  "duration": 3264842800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Open account unsuccessfully",
  "description": "",
  "id": "open-account;open-account-unsuccessfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click open account tab",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I choose account as \u003cfullname\u003e and currency as \u003ccurrency\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click process button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I verify that user is not open without currency or full name",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "open-account;open-account-unsuccessfully;",
  "rows": [
    {
      "cells": [
        "fullname",
        "currency"
      ],
      "line": 27,
      "id": "open-account;open-account-unsuccessfully;;1"
    },
    {
      "cells": [
        "Harry Potter",
        "null"
      ],
      "line": 28,
      "id": "open-account;open-account-unsuccessfully;;2"
    },
    {
      "cells": [
        "null",
        "Pound"
      ],
      "line": 29,
      "id": "open-account;open-account-unsuccessfully;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open Website https://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 1307714600,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Open account unsuccessfully",
  "description": "",
  "id": "open-account;open-account-unsuccessfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click open account tab",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I choose account as Harry Potter and currency as null",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click process button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I verify that user is not open without currency or full name",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonTest.loginBankManagerSuccessfully()"
});
formatter.result({
  "duration": 6217103900,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountTest.clickOpenAccountTab()"
});
formatter.result({
  "duration": 4090341700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 20
    },
    {
      "val": "null",
      "offset": 49
    }
  ],
  "location": "OpenAccountTest.setAccount(String,String)"
});
formatter.result({
  "duration": 6311789500,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountTest.clickProcessButton()"
});
formatter.result({
  "duration": 4231656800,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickCustomerTab()"
});
formatter.result({
  "duration": 3182277600,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountTest.verifyOpenAccountUnsuccessfullyWithoutCurrency()"
});
formatter.result({
  "duration": 2001408300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open Website https://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 1061022900,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Open account unsuccessfully",
  "description": "",
  "id": "open-account;open-account-unsuccessfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click open account tab",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I choose account as null and currency as Pound",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click process button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I verify that user is not open without currency or full name",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonTest.loginBankManagerSuccessfully()"
});
formatter.result({
  "duration": 6120393100,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountTest.clickOpenAccountTab()"
});
formatter.result({
  "duration": 4116670200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "null",
      "offset": 20
    },
    {
      "val": "Pound",
      "offset": 41
    }
  ],
  "location": "OpenAccountTest.setAccount(String,String)"
});
formatter.result({
  "duration": 6264218400,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountTest.clickProcessButton()"
});
formatter.result({
  "duration": 4120365700,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickCustomerTab()"
});
formatter.result({
  "duration": 3436680400,
  "status": "passed"
});
formatter.match({
  "location": "OpenAccountTest.verifyOpenAccountUnsuccessfullyWithoutCurrency()"
});
formatter.result({
  "duration": 2000302800,
  "status": "passed"
});
formatter.uri("bankmanager/searchCustomer.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# new feature"
    },
    {
      "line": 2,
      "value": "# Tags: optional"
    }
  ],
  "line": 4,
  "name": "Search customer",
  "description": "",
  "id": "search-customer",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Search customer successfully",
  "description": "",
  "id": "search-customer;search-customer-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click customer tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I input key search as \u003ckeysearch\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify that system is already showed customer has \u003ckeysearch\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "search-customer;search-customer-successfully;",
  "rows": [
    {
      "cells": [
        "keysearch"
      ],
      "line": 16,
      "id": "search-customer;search-customer-successfully;;1"
    },
    {
      "cells": [
        "P"
      ],
      "line": 17,
      "id": "search-customer;search-customer-successfully;;2"
    },
    {
      "cells": [
        "v"
      ],
      "line": 18,
      "id": "search-customer;search-customer-successfully;;3"
    },
    {
      "cells": [
        "%"
      ],
      "line": 19,
      "id": "search-customer;search-customer-successfully;;4"
    },
    {
      "cells": [
        "*"
      ],
      "line": 20,
      "id": "search-customer;search-customer-successfully;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Website https://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 6357590100,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Search customer successfully",
  "description": "",
  "id": "search-customer;search-customer-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click customer tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I input key search as P",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify that system is already showed customer has P",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonTest.loginBankManagerSuccessfully()"
});
formatter.result({
  "duration": 6150231200,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickCustomerTab()"
});
formatter.result({
  "duration": 3167868900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "P",
      "offset": 22
    }
  ],
  "location": "SearchCustomerTest.setKeySearch(String)"
});
formatter.result({
  "duration": 3290300500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "P",
      "offset": 52
    }
  ],
  "location": "SearchCustomerTest.verifySearchCustomerSuccessfully(String)"
});
formatter.result({
  "duration": 2298329000,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Website https://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 1051912600,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search customer successfully",
  "description": "",
  "id": "search-customer;search-customer-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click customer tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I input key search as v",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify that system is already showed customer has v",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonTest.loginBankManagerSuccessfully()"
});
formatter.result({
  "duration": 6088239200,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickCustomerTab()"
});
formatter.result({
  "duration": 3189283900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "v",
      "offset": 22
    }
  ],
  "location": "SearchCustomerTest.setKeySearch(String)"
});
formatter.result({
  "duration": 3242298100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "v",
      "offset": 52
    }
  ],
  "location": "SearchCustomerTest.verifySearchCustomerSuccessfully(String)"
});
formatter.result({
  "duration": 2183411400,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Website https://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 1058257100,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search customer successfully",
  "description": "",
  "id": "search-customer;search-customer-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click customer tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I input key search as %",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify that system is already showed customer has %",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonTest.loginBankManagerSuccessfully()"
});
formatter.result({
  "duration": 6138214700,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickCustomerTab()"
});
formatter.result({
  "duration": 3146113900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "%",
      "offset": 22
    }
  ],
  "location": "SearchCustomerTest.setKeySearch(String)"
});
formatter.result({
  "duration": 3215107700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "%",
      "offset": 52
    }
  ],
  "location": "SearchCustomerTest.verifySearchCustomerSuccessfully(String)"
});
formatter.result({
  "duration": 2174308700,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Website https://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 1084232800,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search customer successfully",
  "description": "",
  "id": "search-customer;search-customer-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I login bank manager successfully",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click customer tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I input key search as *",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify that system is already showed customer has *",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonTest.loginBankManagerSuccessfully()"
});
formatter.result({
  "duration": 6147176200,
  "status": "passed"
});
formatter.match({
  "location": "CommonTest.clickCustomerTab()"
});
formatter.result({
  "duration": 3098176500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "*",
      "offset": 22
    }
  ],
  "location": "SearchCustomerTest.setKeySearch(String)"
});
formatter.result({
  "duration": 3298916300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "*",
      "offset": 52
    }
  ],
  "location": "SearchCustomerTest.verifySearchCustomerSuccessfully(String)"
});
formatter.result({
  "duration": 2141231900,
  "status": "passed"
});
});