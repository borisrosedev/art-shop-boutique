
window.addEventListener('message', (ev) => {

    if(ev.origin !== 'https://art-shop-f.onrender.com') return;
    console.log('child receiving', ev.data)

    if(ev.data.msg = 'do it now') {
        if(window.opener) {
            window.opener.postMessage({ from: 'child', msg: 'https://google.com'}, 'https://art-shop-f.onrender.com')
        }
    }
})

