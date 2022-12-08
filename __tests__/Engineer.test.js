const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
    const validEngineer = new Engineer('1', 'Test User', 'test@test.com', 'test');

    test('Should have valid ID', () => {
        expect(validEngineer.getId()).toBe('1');
    });

    test('Should have valid email', () => {
        expect(validEngineer.getEmail()).toBe('test@test.com');
    });

    test('Should have valid email', () => {
        expect(validEngineer.getName()).toBe('Test User');
    });

    test('Should have valid github', () => {
        expect(validEngineer.getGithub()).toBe('test');
    });

    test('Should have proper role', () => {
        expect(validEngineer.getRole()).toBe('Engineer');
    });

    test('Should fail if missing employee data', () => {
        const testFail = () => {
            new Engineer();
        };

        expect(testFail).toThrow();
    });

    test('Should fail if missing extend data', () => {
        const testFail = () => {
            new Engineer('1', 'Test User', 'test@test.com');
        };

        expect(testFail).toThrow();
    });
});