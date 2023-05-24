describe("ceva", () => {
  it.only("wait api call and mock response", () => {
    cy.intercept({
      method: "GET",
      url: "**/api/*", //**/api/?results=10
    }).as("getUsersAPI");

    cy.visit("https://qa-practice.netlify.app/fetch-api.html");

    cy.wait("@getUsersAPI").its("response.statusCode").should("eq", 200);
  });
});
