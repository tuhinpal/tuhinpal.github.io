# Making of CloudflareDB
##  ⌚ 21/02/2021 🧔 Tuhin Kanti Pal 

![CloudflareDB](https://telegra.ph/file/b5b9e57be66e2a3ade262.png "CloudflareDB")


### In this blog let's talk about CloudflareDB. It is the low latancy database using Cloudflare Workers and KV.

Cloudflare workers are based on Google's [V8 Engine](https://v8.dev/ "V8 Engine"). These are same like native vanilla javascript. (except <code>eval</code>, <code>new Function</code>, <code>Date.now()</code>). For something request on internet there are fetch API same as browser fetch. For database and storage there are Cloudflare worker KV.

### So, let's code an API which is using Cloudflare's KV, it will store data and serve the stored data. [Source Code available here](https://github.com/cachecleanerjeet/CloudflareDB "Source Code").

#### Firstly let's Handel an incoming request:

```javascript
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})
```

As you can see here we give a reference of a function named handleRequest and passed the request.

#### handleRequest function will be an async function. 

```javascript
async function handleRequest(request) {
// Will be coded here
}
```

We are using POST for save a data. If browser send a POST request, it sends a preflight request (OPTIONS). We have to handle the request. He we create a if, else if, if function. If request method (request.method) is "OPTIONS" then will send a 200 status code along with some headers. We need to send the headers all time that's why we declare the headers, for each response the header will be sent. 

```javascript
const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "GET,POST,DELETE,OPTIONS",
        "Access-Control-Max-Age": "86400",
        "Content-Type": "application/json",
        "Cache-Control": "no-cache, no-store, must-revalidate"
    }
```

#### Okay! now Let's handle that "OPTION" Request

```javascript
if (request.method == "OPTIONS") {
        return new Response(null, {
            status: 200,
            headers
        })
    }
```

Now, have to create a KV storage and bind the variable. Let's give "TUHIN" to variable name.

### Let's handle the "POST" request

```javascript
else if (request.method == "POST") {
        // Handle POST 
    }
```

Here we have to receive the Payload DATA, Set an Unique ID and save the data into KV. If data received with "_id" object we will set the Unique ID insted of generate one. To generate an ID we fetch the GMT and add some random string with it.

```javascript
else if (request.method == "POST") {
     var setpayload = await request.json()
     if (setpayload._id == undefined) {
         var keyid = (await (await fetch('https://time.akamai.com/')).text()) + Math.random().toString(36).substring(9)
     } else {
         var keyid = setpayload._id
     }
     await TUHIN.put(keyid, JSON.stringify(setpayload))
     return new Response(JSON.stringify({
         status: true,
         _id: keyid,
         query: `https://${request.headers.get("host")}/${keyid}`,
         data: setpayload
     }), {
         status: 200,
         headers
     })
} 
```

### Let's handle the "GET" request

```javascript
else if (request.method == "GET") {
        // Handle GET 
    }
```
Here we have to receive the path of the url, we will get the Unique ID from URL. After that we will GET the Data of that Unique ID (Key).

```javascript
else if (request.method == "GET") {
    var path = new URL(request.url).pathname
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
```

#### Everything looks good, Now let's impliment a "DELETE" feature and complete the Database.

```javascript
else if (request.method == "DELETE") {
    await TUHIN.delete(path.replace('/', ''))
    return new Response(JSON.stringify({
        status: true,
        msg: "Deleted Successfully"
    }), {
        status: 200,
        headers
    })
}
```

### I implimented some extra features and the Final Output looks like [this](https://github.com/cachecleanerjeet/CloudflareDB "this").


<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v9.0&appId=719870305435506&autoLogAppEvents=1" nonce="yns5dLOD"></script>
<div class="fb-comments" data-href="https://thetuhin.com/#/blog/cloudflare-db" data-width="" data-numposts="5"></div>