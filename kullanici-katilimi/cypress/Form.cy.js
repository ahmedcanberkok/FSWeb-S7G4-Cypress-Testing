describe('Form testleri', () => {
    it('Firstname boş mu?', () =>{
        cy.visit("http://localhost:3000");
        cy.get('input[name="firstName"]').type("test");
        cy.get('input[name="firstName"]').clear();
        cy.get('.invalid-feedback').should('be.visible');
    })
    it('form firstname minimum 2 karakter testi', () => {
        cy.visit("http://localhost:3000/");
        cy.get('input[name="firstName"]').type("dene");
        cy.get('.invalid-feedback').should('be.visible');
    })
    it('form firstname doğru girilme testi', () => {
        cy.visit("http://localhost:3000/");
        cy.get('input[name="firstName"]').type("canberk");
        cy.get('.invalid-feedback').should('not.to.be.visible');
    })
    it('lastName boş mu?', () =>{
        cy.visit("http://localhost:3000");
        cy.get('input[name="lastName"]').type("test");
        cy.get('input[name="lastName"]').clear();
        cy.get('.invalid-feedback').should('be.visible');
    })
    it('form lastName minimum 2 karakter testi', () => {
        cy.visit("http://localhost:3000/");
        cy.get('input[name="lastName"]').type("dene");
        cy.get('.invalid-feedback').should('be.visible');
    })
    it('form lastName doğru girilme testi', () => {
        cy.visit("http://localhost:3000/");
        cy.get('input[name="lastName"]').type("ok");
        cy.get('.invalid-feedback').should('not.to.be.visible');
    })
    it('email girildi mi?', () =>{
        cy.visit("http://localhost:3000/");
        cy.get('input[name="email"]').type("test");
        cy.get('input[name="email"]').clear();
        cy.get('.invalid-feedback').should('be.visible');
    })
    it('email geçerli değil 1', () =>{
        cy.visit("http://localhost:3000/");
        cy.get('input[name="email"]').type("test@");
        cy.get('.invalid-feedback').should('be.visible');
    })
    it('email geçerli değil 2', () =>{
        cy.visit("http://localhost:3000/");
        cy.get('input[name="email"]').type("test");
        cy.get('.invalid-feedback').should('be.visible');
    })
    it('email geçerli', () =>{
        cy.visit("http://localhost:3000/");
        cy.get('input[name="email"]').type("test@test.com");
        cy.get('.invalid-feedback').should('not.visible');
    })
    it('şifre 6 karakter değil hatası', () =>{
        cy.visit("http://localhost:3000/");
        cy.get('input[name="password"]').type("test");
        cy.get('.invalid-feedback').should('be.visible');
    })
    it('şifre geçerli girildi', () =>{
        cy.visit("http://localhost:3000/");
        cy.get('input[name="password"]').type("testtestest");
        cy.get('.invalid-feedback').should('not.visible');
    })
    it('tüm form dolduruldu', () =>{
        cy.visit("http://localhost:3000/");
        cy.get('input[name="firstName"]').type("Canberk");
        cy.get('input[name="lastName"]').type("Ok");
        cy.get('input[name="email"]').type("tugba@ok.com");
        cy.get('input[name="password"]').type("12345678");
        cy.get('input[name="tos"]').check();
      
    })

});


