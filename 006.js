var element ;

document.getElementById('xyz').addEventListener('click' , () => {
    //document.getElementById('xyz').classList.add('active','anotherClass');
    document.getElementById('xyz').classList.remove('active');
    // toggle use hota hy agr baar click kro gy to class add ho jy gi agr phly sy hy to remove ho jy gi
    //document.getElementById('xyz').classList.toggle('active');
    element = document.getElementById('xyz').className;
    console.log(element);
})
// class list k total 6 methods hain , add , remove , toggle , contains , item , replace or length property bhi hy