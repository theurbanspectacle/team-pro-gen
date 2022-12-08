const Manager = require("../lib/Manager");

describe('Manager', () => {
    const validManager = new Manager('1', 'Test User', 'test@test.com', '123');

    test('Should have valid ID', () => {
        expect(validManager.getId()).toBe('1');
    });

    test('Should have valid email', () => {
        expect(validManager.getEmail()).toBe('test@test.com');
    });

    test('Should have valid email', () => {
        expect(validManager.getName()).toBe('Test User');
    });

    test('Should have valid office number', () => {
        expect(validManager.getOfficeNumber()).toBe('123');
    });

    test('Should have proper role', () => {
        expect(validManager.getRole()).toBe('Manager');
    });

    test('Should fail if missing employee data', () => {
        const testFail = () => {
            new Manager();
        };

        expect(testFail).toThrow();
    });

    test('Should fail if missing extend data', () => {
        const testFail = () => {
            new Manager('1', 'Test User', 'test@test.com');
        };

        expect(testFail).toThrow();
    });
});