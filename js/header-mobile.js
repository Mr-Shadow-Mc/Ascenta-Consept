const html = document.getElementsByTagName("html");
const mobile_header = document.getElementById("mobile_header");
const btn_mobile_header = document.getElementById("btn_mobile_header");
const btn_close_mobile_header = document.getElementById("btn_close_mobile_header");


btn_mobile_header.addEventListener('click', function()
{
    html[0].style.overflow = 'hidden';
    mobile_header.style.display = 'block';
    btn_mobile_header.style.display = 'none';
});

btn_close_mobile_header.addEventListener('click', function()
{
    html[0].style.overflow = 'auto';
    mobile_header.style.display = 'none';
    btn_mobile_header.style.display = 'contents';
});