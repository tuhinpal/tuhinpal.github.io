/*
 Author: Tuhin Kanti Pal
 Author's Github: https://github.com/cachecleanerjeet
 Author's Email: me@thetuhin.com
 LICENSE: Apache-2.0 
 Note for Kangers: Changing author's name will not make you a developer
 Contact: https://telegram.dog/t_projects
 Channel: https://telegram.dog/tprojects
*/

// KV Binding Variable name is "TUHIN"

const KEY = ""; // Key for POST Request of update
const BOT_TOKEN = ""; // TelegramBot Token
const MY_TELEGRAM_ID = ""; // Telegram UserID (Make sure the bot was started using /start sommand)

async function handleRequest(request) {

    const headers = {
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
        "Access-Control-Max-Age": "86400",
        "Content-Type": "application/json",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Made-By": atob('VHVoaW4gS2FudGkgUGFsLCBodHRwczovL2dpdGh1Yi5jb20vY2FjaGVjbGVhbmVyamVldA==')
    }

    if (request.method == "OPTIONS") { // Handel Preflight Requests
        return new Response(null, {
            status: 200,
            headers
        })

    } else if (request.method == "POST") { //Update or Create DB && Contact Form
        var Loc = new URL(request.url).pathname;
        var GetKey = new URL(request.url).searchParams.get('key');
        if (Loc == '/works' && GetKey == KEY) { // Endpoint /works
            await TUHIN.put('works', JSON.stringify(await request.json()))
            return new Response(JSON.stringify({
                status: true,
                query: `https://${request.headers.get("host")}/works`,
            }), {
                status: 200,
                headers
            })
        } else if (Loc == '/blogs' && GetKey == KEY) { // Endpoint /blogs
            await TUHIN.put('blogs', JSON.stringify(await request.json()))
            return new Response(JSON.stringify({
                status: true,
                query: `https://${request.headers.get("host")}/blogs`,
            }), {
                status: 200,
                headers
            })
        } else if (Loc == '/contact') { // Endpoint /contact
            var GetmsgData = await request.json();
            var Getname = GetmsgData.name;
            var Getreason = GetmsgData.reason;
            var Getemail = GetmsgData.email;
            var Getmessage = GetmsgData.message;
            if (Getname == undefined && Getreason == undefined && Getemail == undefined && Getmessage == undefined) {
                return new Response(JSON.stringify({
                    status: false,
                    msg: "Error, Required all Fields"
                }), {
                    status: 500,
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
        } else {
            return new Response(JSON.stringify({
                status: false,
                msg: "Not Found"
            }), {
                status: 404,
                headers
            })
        }
    } else if (request.method == "GET") { // Get a JSON Data
        var path = new URL(request.url).pathname
        if (path == "/") {
            return new Response(JSON.stringify({
                status: "Running"
            }), {
                status: 200,
                headers
            })
        } else {
            var keyid = path.replace('/', '')
            var getpayload = await TUHIN.get(keyid)
            if (getpayload == null) {
                return new Response(JSON.stringify({
                    status: false,
                    message: "Not Found"
                }), {
                    status: 200,
                    headers
                })
            } else {
                return new Response(JSON.stringify({
                    status: true,
                    _id: keyid,
                    data: JSON.parse(getpayload)
                }), {
                    status: 200,
                    headers
                })
            }
        }
    } else {
        return new Response(JSON.stringify({
            status: false,
            message: "Only supports GET, POST, OPTIONS"
        }), {
            status: 500,
            headers
        })
    }
}

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})


// Referance
// https://github.com/cachecleanerjeet/Contact-Form/blob/main/cf-worker.js
// https://github.com/cachecleanerjeet/CloudflareDB/blob/main/worker.js

/*
 Author: Tuhin Kanti Pal
 Author's Github: https://github.com/cachecleanerjeet
 Author's Email: me@thetuhin.com
 LICENSE: Apache-2.0 
 Note for Kangers: Changing author's name will not make you a developer
 Contact: https://telegram.dog/t_projects
 Channel: https://telegram.dog/tprojects
*/