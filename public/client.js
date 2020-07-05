// Hard-coded, replace with your public key

// const publicVapidKey = 'public key from .env';
const publicVapidKey = '';

let navigatorString;
for(obj in navigator.serviceWorker){
// navigatorString+=obj+':'+JSON.stringify(navigator.serviceWorker[obj])+'\n';
console.log(obj);
}


let logs = [];

console.log(navigator.serviceWorker);
console.log(typeof navigator.serviceWorker);
logs.push(JSON.stringify(typeof navigator.serviceWorker));
document.getElementById("logs").innerHTML = JSON.stringify(logs);

if ('serviceWorker' in navigator) {
  console.log('Registering service worker');
  logs.push('Registering service worker');
  document.getElementById("logs").innerHTML = JSON.stringify(logs);
  run().catch(error => { logs.push(error);
  document.getElementById("logs").innerHTML = JSON.stringify(logs); console.error(error) });
}

function urlBase64ToUint8Array(base64String) {
    var padding = '='.repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);

    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

async function run() {
  console.log('Registering service worker');
  const registration = await navigator.serviceWorker.
    register('/worker.js', {scope: '/'});
  console.log('Registered service worker');

  console.log('Registering push');
  logs.push('Registering push');
  document.getElementById("logs").innerHTML = JSON.stringify(logs);
  const subscription = await registration.pushManager.
    subscribe({
      userVisibleOnly: true,
      // The `urlBase64ToUint8Array()` function is the same as in
      // https://www.npmjs.com/package/web-push#using-vapid-key-for-applicationserverkey
      applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
    });
  console.log('Registered push');
  console.log(subscription);
  console.log(JSON.stringify(subscription));
  document.getElementById("thing").innerHTML = JSON.stringify(subscription);
//   console.log('Sending push');
//   await fetch('/subscribe', {
//     method: 'POST',
//     body: JSON.stringify(subscription),
//     headers: {
//       'content-type': 'application/json'
//     }
//   });
//   console.log('Sent push');
}