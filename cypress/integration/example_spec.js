describe('my first test', () => {
    it('Tests for Homepage Content', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('Find a Job')
        cy.contains('Find a Job')
        cy.contains('Quick Filter')
        cy.contains('Learning Resources')
        cy.contains('Post a Job')
        cy.contains('Post a Job')
        cy.contains('Find your next')
        cy.contains('Find a Job')
        cy.contains('Latest Opportunities')
        cy.get('input[type="text"]').type('fake@gmail.com')
        cy.get('input[type="hidden"]')
        cy.get('button[type="submit"]')
        // cy.get('form').children()
    })
})

// cy.visit('')
// cy.contains('')
// cy.url().should('include')

// cy.get('css-class').type('string').should('do something')