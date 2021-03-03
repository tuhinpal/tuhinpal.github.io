const BOT_TOKEN = ""; // Bot Token (Make sure you started the bot)
const MY_TELEGRAM_ID = ""; // Telegram UserID
const RC_SECRET = ""; // Recaptcha Secret

async function handleRequest(request) {

    const headers = {
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST,OPTIONS",
        "Access-Control-Max-Age": "86400",
        "Content-Type": "application/json",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Made-By": atob('VHVoaW4gS2FudGkgUGFsLCBodHRwczovL2dpdGh1Yi5jb20vY2FjaGVjbGVhbmVyamVldA==')
    }

    if (request.method == "OPTIONS") { // Handle Preflight Requests
        return new Response(null, {
            status: 200,
            headers
        })

    } else if (request.method == "POST") { // Handle Post Requests
        var Loc = new URL(request.url).pathname;
        if (Loc == '/contact') { // Handle Contact System
            var GetmsgData = await request.json();
            var Getname = GetmsgData.name;
            var Getreason = GetmsgData.reason;
            var Getemail = GetmsgData.email;
            var Getmessage = GetmsgData.message;
            var Getrctoken = GetmsgData.recaptcha_token;

            if (Getname == undefined && Getreason == undefined && Getemail == undefined && Getmessage == undefined && Getrctoken == undefined) {
                return new Response(JSON.stringify({
                    status: false,
                    msg: "Error, Required all Fields"
                }), {
                    status: 500,
                    headers
                })
            } else {
                var formdata = new FormData();
                formdata.append("secret", RC_SECRET);
                formdata.append("response", Getrctoken);
                var CheckRCToken = await fetch('https://www.google.com/recaptcha/api/siteverify', {
                    method: 'POST',
                    body: formdata
                })
                var CheckRCToken = await CheckRCToken.json()
                if (CheckRCToken.success == false) {
                    return new Response(JSON.stringify({
                        status: false,
                        msg: "Recaptcha Error",
                    }), {
                        status: 200,
                        headers
                    })
                } else {
                    var sendmessage = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                        body: JSON.stringify({
                            chat_id: MY_TELEGRAM_ID,
                            text: `<b>New Contact Request Recieved</b>\n\n<b>IP: </b><code>${request.headers.get("cf-connecting-ip")}</code>\n<b>Name: </b><code>${Getname}</code>\n<b>Reason: </b>${Getreason}\n<b>Email: </b>${Getemail}\n<b>Message: </b><code>${Getmessage}</code>\n<b>Total Message: </b><code>${GetmsgData.totalmessage}</code>`,
                            parse_mode: 'HTML'
                        }),
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                        },
                    })
                    var sendmessage = await sendmessage.json()
                    if (sendmessage.ok == true) {
                        var status = {
                            status: true,
                            msg: "Message sent successfully"
                        };
                    } else {
                        var status = {
                            status: false,
                            msg: "Error while sending the message"
                        };
                    }
                    return new Response(JSON.stringify(status), {
                        status: 200,
                        headers
                    })
                }
            }
        } else {
            return new Response(JSON.stringify({
                status: false,
                msg: "Not Found"
            }), {
                status: 404,
                headers
            })
        }
    } else {
        return new Response(JSON.stringify({
            status: false,
            message: "Only supports POST, OPTIONS"
        }), {
            status: 500,
            headers
        })
    }
}

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})