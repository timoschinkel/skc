const { __: translator } = require('../src/i18n');

describe('__()', () => {
    const __ = translator('nl-NL');

    it('should return translation if available', () => {
        expect(__('Steven Kruijswijk Coefficient')).toBe('Steven Kruijswijk Coëfficiënt');
    });

    it('should return translation string if no translation is available', () => {
        const translation_string = 'non-existent';

        expect(__(translation_string)).toBe(translation_string);
    });
});