
function run(){

    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let outPut = document.getElementById("output");

    let documentContent = `
    <html>
        <head>
            <style>${cssCode}</style>
        </head>
        <body>
            ${htmlCode}
            <script>${jsCode}</script>
        </body>
    </html>
`;

outPut.srcdoc = documentContent;

}


function light(){
    const bodyLight =  document.getElementById(".body");
    const html =  document.getElementById("html-code");
    const css =  document.getElementById("css-code");
    const js =  document.getElementById("js-code");
    const outputLight =  document.getElementById("output");
    

    bodyLight.style.background="#C0C0C0";

    html.style.backgroundColor="white";
    html.style.color="black";

    css.style.backgroundColor="white";
    css.style.color="black";

    js.style.backgroundColor="white";
    js.style.color="black";

    outputLight.style.backgroundColor="#B6B6B4";
}


function dark(){
    const bodyDark =  document.getElementById(".body");
    const html =  document.getElementById("html-code");
    const css =  document.getElementById("css-code");
    const js =  document.getElementById("js-code");
    const outputDark =  document.getElementById("output");
    

    bodyDark.style.backgroundColor="#212122";
    
    html.style.backgroundColor="black";
    html.style.color="white";

    css.style.backgroundColor="black";
    css.style.color="white";

    js.style.backgroundColor="black";
    js.style.color="white";

    outputDark.style.backgroundColor="#737070";
}