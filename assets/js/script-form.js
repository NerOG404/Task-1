function submitData() {
    const userName = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const role = document.getElementById('role').value;
    const feature = document.getElementById('feature').value;
    const area = document.getElementById('area').value;
    const radio = document.querySelector('input[name="radio"]:checked').value;

    const getChecked = function () {
        const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
            const values = [];
            for (let i = 0; i < checkboxes.length; i++) {
            values.push(checkboxes[i].value);
        }

    return values;
};

const data = {
    fullName : userName,
    email : email,
    age : age,
    yourRole : role,
    share : radio,
    favoriteFeature : feature,
    improeved : getChecked(),
    message : area,
}

if (userName !== '' && email !== '' && age !== '' && role !== '' && feature !== '' && area !== '' && radio !== '') {
    let a = document.createElement('a');
    a.href = `mailto:${email}?subject=${feature}&body=${area}`
    a.click(submitData)
    for(const key in data){
        console.log(`${key}: ${data[key]}`)};

    return alert(`Nama : ${userName}\nEmail : ${email}\nAge : ${age}\nYour current role : ${role}\nWould you recommend MyWeb to a friend : ${radio}\nWhat is your favorite feature : ${feature}\nWhat would you like to see improved : ${getChecked()}\nAny comments : ${area}`);
    
} else if (userName === '' || email === '' || age === '' || role === '' || feature === '' || area === '' || radio === '') {
    return alert('All input fields must be not empty');
}}

