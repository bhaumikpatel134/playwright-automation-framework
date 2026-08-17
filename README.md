# Playwright Automation Framework

A UI Automation Testing Framework built using Playwright and JavaScript following the Page Object Model (POM) design pattern.

## Features

- Page Object Model (POM)
- End-to-End Purchase Flow Automation
- Modular and Reusable Page Classes
- GitHub Actions Integration
- Structured Test Organization
- Playwright Assertions
- UI Automation Testing

## Project Structure

```text
playwright-automation-framework
│
├── pages
│   ├── LoginPage.js
│   ├── DashboardPage.js
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   └── OrdersPage.js
│
├── tests
│   ├── E2E.spec.js
│   ├── loginPOM.spec.js
│   ├── dashboardPOM.spec.js
│   ├── cartPOM.spec.js
│   ├── checkoutPOM.spec.js
│   └── ordersPOM.spec.js
│
├── playwright.config.js
├── package.json
├── package-lock.json
│
└── .github
    └── workflows
        └── playwright.yml
```

## Test Flow

```text
Login
↓
Dashboard
↓
Add Product To Cart
↓
Cart
↓
Checkout
↓
Place Order
↓
Orders
```

## Page Objects

### LoginPage

Handles:

- Application navigation
- User authentication

### DashboardPage

Handles:

- Product listing
- Product selection
- Add to cart functionality

### CartPage

Handles:

- Cart navigation
- Checkout initiation

### CheckoutPage

Handles:

- Country selection
- Payment details
- Order placement

### OrdersPage

Handles:

- Orders page navigation

## Installation

Clone the repository:

```bash
git clone https://github.com/bhaumikpatel134/playwright-automation-framework.git
```

Install dependencies:

```bash
npm install
```

## Execute Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test:

```bash
npx playwright test tests/ordersPOM.spec.js --headed
```

Run Chromium:

```bash
npx playwright test --project=chromium
```

## Technologies Used

- Playwright
- JavaScript
- Node.js
- Git
- GitHub
- GitHub Actions

## Learning Outcomes

This project demonstrates:

- Page Object Model (POM)
- End-to-End UI Automation Testing
- Reusable Automation Framework Design
- Playwright Test Runner
- Git Version Control
- CI/CD using GitHub Actions

## Author

**Bhaumik Patel**
