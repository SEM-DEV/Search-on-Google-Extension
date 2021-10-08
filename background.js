
 

chrome.contextMenus.create({
    title: "Search the selection Text on Google",
    contexts:["selection"],
    id: "acasearch",
	onclick: sea1
});

function sea1(info,tab) {   
    const url22 = "https://www.google.com/search?q=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}


















