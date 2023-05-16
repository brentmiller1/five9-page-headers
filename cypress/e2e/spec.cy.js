describe('Navigate to Pages', () => {
  it('passes', () => {
    // Recursive function to navigate to each page and run tests
function navigateAndTestPages(pages) {
  if (pages.length === 0) {
    // All pages have been tested
    return;
  }

  const currentPage = pages.shift();
  const pageUrl = `https://test-five9.pantheonsite.io${currentPage}`;

  it(`Should navigate to ${currentPage} and perform tests`, () => {
    cy.visit(pageUrl);
    // Perform your tests on the current page
    // ...
  });

  // Continue to the next page
  navigateAndTestPages(pages);
}

// Define an array of pages to test
const pagesToTest = [
  '/about',
  '/trust',
  // Add more pages as needed
];

// Start the test by calling the recursive function
navigateAndTestPages(pagesToTest);
  })
})















/* Pages to navigate to (All Headers and Sub-Headers)

PRODUCTS

/products-solutions
/solutions/why-five9
/cloudmigration
/products/capabilities/contact-center-software
/products/pricing
/products/capabilities/how-it-works
/trust
/products/agent-eq
/products/capabilities/global-voice
/products/capabilities/agent-desktop
/products/capabilities/supervisor-desktop
/products/capabilities/engagement-workflow
/products/capabilities/crm
/products/capabilities/ucaas-unified-communications
/products/capabilities/call-center-apis-and-sdks
/digitalworkforce
/products/capabilities/conversational-artificial-intelligence-ai
/products/capabilities/intelligent-virtual-agent
/products/capabilities/agent-assist
/products/capabilities/workflow-automation
/products/capabilities/call-center-reporting-analytics-software
/products/business-eq
/products/capabilities/workforce-optimization
/products/capabilities/call-center-quality-management-monitoring-tools
/products/capabilities/contact-center-workforce-management
/products/capabilities/interaction-analytics
/products/capabilities/performance-management-dashboard
/products/gamification
/products/customer-eq
/products/inbound-contact-center
/products/capabilities/outbound-contact-center
/products/blended-inbound-outbound-call-center
/products/capabilities/digital-engagement
/products/capabilities/global-voice
/products/capabilities/omnichannel/email
/products/capabilities/omnichannel/mobile
/products/capabilities/omnichannel/chat
/products/capabilities/omnichannel/social
/products/capabilities/omnichannel/sms
/products/capabilities/omnichannel/video



SOLUTIONS

/solutions/healthcare
/solutions/financial-services
/solutions/retail
/solutions/education
/solutions/marketing
/solutions/customer-service
/solutions/outsourcing
/solutions/debt-collections
/solutions/covid-19
/solutions/enterprise-contact-centers
/solutions/small-medium-business (small business tab, same as mid-market)
/solutions/small-medium-business (mid-market tab, same as small business)
/products/business-eq
/products/customer-eq
/agent-eq
/products/capabilities/workforce-optimization
/products/capabilities/performance-management-dashboard
/products/capabilities/supervisor-desktop
/cloudmigration
/products/capabilities/digital-engagement
/products/capabilities/omnichannel/visual-interactive-voice-response
/products/capabilities/intelligent-virtual-agent
/products/capabilities/conversational-artificial-intelligence-ai
/products/capabilities/agent-assist
/products/capabilities/workflow-automation
/products/capabilities/engagement-workflow
/products/capabilities/call-center-reporting-analytics-software



SERVICES

/contact-center-services
/contact-center-services/professional-services
/contact-center-services/training
/contact-center-services/support



PARTNERS

/partners



RESOURCES

/resources
/resources?type=All&role=All&format=Case%20Study&langcode=All
/resources?type=All&role=All&format=Data%20Sheet
/resources?type=All&role=All&format=eBook
/resources?type=All&role=All&format=White%20Paper
/dare-to-reimagine



ABOUT US

/about
/solutions/why-five9
/news
/about/executives
/about/awards
/about/careers
/trust









***SKIPPED***
cxmarketplace
Customers
marketplace partners
https://www.five9.com/about/events/webinars?_gl=1*1crcmsv*_ga*ODkwNDY2NDM5LjE2ODExNTEyMjY.*_ga_1D09LYXQEM*MTY4NDI1OTE2NC4xLjEuMTY4NDI1OTkwNC40MC4wLjA.*_ga_4WQ0JDWT86*MTY4NDI1OTE2NS4xLjEuMTY4NDI1OTkwNC40MC4wLjA.
https://events.five9.com/five9?_gl=1*1crcmsv*_ga*ODkwNDY2NDM5LjE2ODExNTEyMjY.*_ga_1D09LYXQEM*MTY4NDI1OTE2NC4xLjEuMTY4NDI1OTkwNC40MC4wLjA.*_ga_4WQ0JDWT86*MTY4NDI1OTE2NS4xLjEuMTY4NDI1OTkwNC40MC4wLjA.
https://www.five9.com/blog?_gl=1*1fd5wg3*_ga*ODkwNDY2NDM5LjE2ODExNTEyMjY.*_ga_1D09LYXQEM*MTY4NDI1OTE2NC4xLjEuMTY4NDI2MDA4MC4zMi4wLjA.*_ga_4WQ0JDWT86*MTY4NDI1OTE2NS4xLjEuMTY4NDI2MDA4MC4zMi4wLjA.
https://investors.five9.com/?_gl=1*1r1dv9c*_ga*ODkwNDY2NDM5LjE2ODExNTEyMjY.*_ga_1D09LYXQEM*MTY4NDI1OTE2NC4xLjEuMTY4NDI2MDIzMi41OS4wLjA.*_ga_4WQ0JDWT86*MTY4NDI1OTE2NS4xLjEuMTY4NDI2MDIzMi41OS4wLjA.
https://events.five9.com/five9?_gl=1*1r1dv9c*_ga*ODkwNDY2NDM5LjE2ODExNTEyMjY.*_ga_1D09LYXQEM*MTY4NDI1OTE2NC4xLjEuMTY4NDI2MDIzMi41OS4wLjA.*_ga_4WQ0JDWT86*MTY4NDI1OTE2NS4xLjEuMTY4NDI2MDIzMi41OS4wLjA.

*/














/*

// Recursive function to navigate to each page and run tests
function navigateAndTestPages(pages) {
  if (pages.length === 0) {
    // All pages have been tested
    return;
  }

  const currentPage = pages.shift();
  const pageUrl = `https://test-five9.pantheonsite.io${currentPage}`;

  // Visit the current page
  cy.visit(pageUrl);

  // Perform your tests on the current page ...
  

  // Continue to the next page
  navigateAndTestPages(pages);
}

// Define an array of pages to test
const pagesToTest = [
  '/about',
  '/trust',
  // Add more pages as needed
];

// Start the test by calling the recursive function
navigateAndTestPages(pagesToTest);

*/