const Employee = require("../lib/Employee");

describe('Employee', () => {
    const validEmployee = new Employee('1', 'Test User', 'test@test.com');

    test('Should have valid ID', () => {
        expect(validEmployee.getId()).toBe('1');
    });

    test('Should have valid email', () => {
        expect(validEmployee.getEmail()).toBe('test@test.com');
    });

    test('Should have valid email', () => {
        expect(validEmployee.getName()).toBe('Test User');
    });

    test('Should have proper role', () => {
        expect(validEmployee.getRole()).toBe('Employee');
    });

    test('Should fail if missing data', () => {
        const testFail = () => {
            new Employee();
        };

        expect(testFail).toThrow();
    });

    test('Should fail if invalid email', () => {
        const testFail = () => {
            new Employee('1', 'Test User', 'bad');
        };

        expect(testFail).toThrow();
    });
});