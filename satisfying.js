var blob = {};
blob.loadAll = function(w){
	blob.load(document.body, "body", w)
	var childs = document.body.children;
	for(e in childs){
		blob.load(childs[e], childs[e].tagName.toLowerCase(), w)
	}
}
blob.load = function(e, c, w){
		e.classList.remove(...e.classList);
		e.classList.add(c + "-" +  w)
}