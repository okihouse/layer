const SMS_API_URL = 'https://soullaw.duckdns.org/send-sms';

export const SmsService = {
    send: async (receiver: string, msg: string) => {
        const res = await fetch(SMS_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ receiver, msg }),
        });
        return res.json();
    },
};
