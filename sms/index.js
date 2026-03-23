const express = require('express');
const https = require('https');
const querystring = require('querystring');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    if (req.method === 'OPTIONS') return res.sendStatus(200);
    next();
});

app.post('/send-sms', async (req, res) => {
    const { receiver, msg } = req.body;

    if (!receiver || !msg) {
        return res.status(400).json({ error: 'receiver, msg 는 필수입니다.' });
    }

    const params = querystring.stringify({
        key: 'slk2iaoby5f9zl5xz5hkj31u7cuwlsgv',
        user_id: 'soullaw',
        sender: '010-9049-1492',
        receiver,
        msg,
    });
    console.log(params);

    try {
        const result = await callAligo(params);
        console.log(result);
        return res.json(result);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

function callAligo(params) {
    return new Promise((resolve, reject) => {
        const req = https.request(
            {
                hostname: 'apis.aligo.in',
                path: '/send/',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': Buffer.byteLength(params),
                },
            },
            (res) => {
                let data = '';
                res.on('data', (chunk) => (data += chunk));
                res.on('end', () => resolve(JSON.parse(data)));
            }
        );
        req.on('error', reject);
        req.write(params);
        req.end();
    });
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`SMS server running on port ${PORT}`);
});
