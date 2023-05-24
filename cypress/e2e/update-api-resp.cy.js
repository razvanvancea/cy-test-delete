describe("ceva", () => {
    
 it.only("wait api call and mock response", () => {
    cy.intercept(
      {
        method: "GET",
        url: "**/api/?results=10",
      },
      {
        body: {
          results: [
            {
              gender: "male",
              name: {
                title: "Mr",
                first: "Razvan",
                last: "Vancea",
              },
              location: {
                street: {
                  number: 7703,
                  name: "Stanyukovicha",
                },
                city: "Skadovsk",
                state: "Donecka",
                country: "Ukraine",
                postcode: 67633,
                coordinates: {
                  latitude: "75.3766",
                  longitude: "-177.4171",
                },
                timezone: {
                  offset: "-4:00",
                  description: "Atlantic Time (Canada), Caracas, La Paz",
                },
              },
              email: "polyan.chernishenko@example.com",
              login: {
                uuid: "ae4cdc3a-8f0d-4a12-8fe6-741a0f14dae3",
                username: "whitekoala534",
                password: "zebra",
                salt: "H8aZOhiW",
                md5: "5d2042bf4edb879c7e17134cf183a73c",
                sha1: "4a473f3f670ac0358eeee6ca787e86b3c05e2884",
                sha256:
                  "b583653b844fe98333d134f2fa9115d9fe03aa010641647c27d2d32c5db80d8e",
              },
              dob: {
                date: "1960-06-02T22:51:38.182Z",
                age: 62,
              },
              registered: {
                date: "2003-08-14T09:53:53.105Z",
                age: 19,
              },
              phone: "(066) Y13-8682",
              cell: "(099) A26-4936",
              id: {
                name: "",
                value: null,
              },
              picture: {
                large: "https://randomuser.me/api/portraits/men/65.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/65.jpg",
                thumbnail:
                  "https://randomuser.me/api/portraits/thumb/men/65.jpg",
              },
              nat: "UA",
            },
          ],
        },
      }
    ).as("getUsersAPI");
    cy.visit("https://qa-practice.netlify.app/fetch-api.html");

    cy.wait("@getUsersAPI").its("response.statusCode").should("eq", 200);
  });
  });
  