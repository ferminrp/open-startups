url = "https://api.sheety.co/8f53e7c5-555f-43ca-9e4b-cdaff3570ae0";
$.getJSON(url, function(data) {
   var obj = data;
   $(obj).each(function(){
     var name = this.name;
     var link = this.url;
     var tagline = this.tagline;
     var image = this.image;
     var html = "<div onclick=\"openWebsite('"+link+"','"+name+"');\" class=\"startup\"><div class=\"startup-left\" style='background-image: url(\""+image+"\");'></div><div class=\"startup-right\"><h2>"+name+"</h2><p>"+tagline+"</p></div></div>"
     /*var html = '<div class="startup"><div class="startup-left" style="background-image:url("'+image+'");"></div><div class="startup-right"><h2>'+name+'</h2><p>'+tagline+'</p></div></div>'*/
     $('.list').append(html);
  });
 });


function openWebsite(a,b) {
  window.open(a);
  gtag('event', 'click', {
  'event_category': 'link-click',
  'event_label': b,
  'value': a
});
};
