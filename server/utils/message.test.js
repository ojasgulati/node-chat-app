var expect = require('expect');
var generateMessage = require('./message').generateMessage;

describe('messages', () => {
    it('should generate correct message object', () => {
        var from = 'ojas';
        var text = 'This is a test';
        var message = generateMessage(from, text);
        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({
            from,
            text
        });
    });
});