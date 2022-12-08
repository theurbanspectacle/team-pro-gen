const Intern = require("../lib/Intern");

describe('Intern', () => {
    const validIntern = new Intern('1', 'Test User', 'test@test.com', 'Cal State');

    test('Should have valid ID', () => {
        expect(validIntern.getId()).toBe('1');
    });

    test('Should have valid email', () => {
        expect(validIntern.getEmail()).toBe('test@test.com');
    });

    test('Should have valid email', () => {
        expect(validIntern.getName()).toBe('Test User');
    });

    test('Should have valid school', () => {
        expect(validIntern.getSchool()).toBe('Cal State');
    });

    test('Should have proper role', () => {
        expect(validIntern.getRole()).toBe('Intern');
    });

    test('Should fail if missing employee data', () => {
        const testFail = () => {
            new Intern();
        };

        expect(testFail).toThrow();
    });

    test('Should fail if missing extend data', () => {
        const testFail = () => {
            new Intern('1', 'Test User', 'test@test.com');
        };

        expect(testFail).toThrow();
    });
});