const key = document.getElementById('key');
const dropdown = document.getElementById('dropdown');
let handleChange = (event) => {
    // console.log('in handle change event :: ', event.target.value);
    // return event.target.value
    let value = event.target.value
    // console.log(date)
    window.parent.postMessage(JSON.stringify({
        event_code: 'ym-client-event', data: JSON.stringify({
            event: {
                code: "DropdownValue",
                data: {
                    selectedValue: value
                }
            }
        })
    }), '*');
}

dropdown.addEventListener('change', handleChange)

const getQueryParams = (params, url) => {

    let href = url;
    //this expression is to get the query strings
    let reg = new RegExp('[?&]' + params + '=([^&#]*)', 'i');
    let queryString = reg.exec(href);
    return queryString ? queryString[1] : null;
};


let dataString = getQueryParams('data', window.location);
let str = decodeURIComponent(dataString)
//str = str.slice(1, length - 1)
let data = JSON.parse(str)
key.innerHTML = Object.keys(data)[0];
const values = Object.values(data)[0];

values.forEach(item => {
    const option = document.createElement('option');
    option.value = item;
    option.innerHTML = item
    dropdown.appendChild(option);
})
