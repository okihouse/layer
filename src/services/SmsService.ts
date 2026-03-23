const SMS_API_URL = 'http://13.124.195.233:3001/send-sms';

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
