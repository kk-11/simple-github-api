/// <reference types="cypress" />

describe("Simple Systems Github repo App", () => {
    beforeEach("Should visit your application", () => {
        cy.visit("http://localhost:3000");
    });
    it("Displays default screen", () => {
        cy.get("main").should("have.length", 1);
        cy.get("input")
            .should("have.length", 1)
            .should("have.attr", "placeholder", "Search for a github user...");
        cy.get("section").should("have.length", 1);
    });

    it("can search for users and show repos", () => {
        cy.intercept("GET", "/api/users*", {
            delay: 1000,
            fixture: "users.json",
        }).as("userGetRequest");

        cy.intercept("GET", "/api/repos*", {
            delay: 1000,
            fixture: "repos.json",
        }).as("reposGetRequest");

        cy.get("input").type("a");
        cy.get("[data-cy=loader]").should("be.visible");
        cy.get("section").children().should("have.length", 5);
        cy.get("summary").first().click();
        cy.get("[data-cy=loader]").should("be.visible");
        cy.get("[data-cy=repolist]").should("have.length", 1);
    });
    it("shows user error state", () => {
        cy.intercept("GET", "/api/users*", {
            delay: 1000,
        }).as("userGetRequest");

        cy.get("input").type("a");
        cy.get("[data-cy=loader]").should("be.visible");
        cy.get("section").children().should("have.length", 1);
        cy.get("[data-cy=error]").should("be.visible");
        cy.get("[data-cy=errorText]").should(
            "have.text",
            "Unexpected end of JSON input"
        );
        cy.get("[data-cy=errorAction]").should("have.text", "Refresh").click();
        cy.get("input")
            .should("have.length", 1)
            .should("have.attr", "placeholder", "Search for a github user...");
    });

    it("shows repo error state", () => {
        cy.intercept("GET", "/api/users*", {
            delay: 1000,
            fixture: "users.json",
        }).as("userGetRequest");
        cy.intercept("GET", "/api/repos*", {
            statusCode: 200,
            body: [],
        }).as("reposGetRequest");

        cy.get("input").type("a");
        cy.get("[data-cy=loader]").should("be.visible");
        cy.get("section").children().should("have.length", 5);

        cy.get("summary").first().click();

        cy.get("[data-cy=error]").should("be.visible");
        cy.get("[data-cy=errorText]").should(
            "have.text",
            "No public repos found for this user"
        );
    });
});
