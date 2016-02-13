$('#content').find('.mermaid').find('span').contents().unwrap();
$('#content').find('.mermaid').text(function () {
    return $(this).text().replace(/–/g, "--"); 
});
setTimeout(mermaid.initialize({startOnLoad:true}), 15000);
