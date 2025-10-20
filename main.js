
window.addEventListener('DOMContentLoaded', () => {

    console.log('WINDOWS OPENER', window.opener)

    if(window.opener){
        window.opener.location = 'https://google.com'
    }
    
})


