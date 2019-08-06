url = "https://api.sheety.co/8f53e7c5-555f-43ca-9e4b-cdaff3570ae0";



$.getJSON(url, function(data) {
   var obj = data;
   $(obj).each(function(){
     var name = this.name;
     var link = this.url;
     var tagline = this.tagline;
     var image = this.image;

     var html = '<div class="startup"><div class="startup-left"><img src="'+image+'" alt="'+tagline+'"></div><div class="startup-right"><h2>'+name+'</h2><p>'+tagline+'</p></div></div>'

     $('.list').append(html);


  });

 });
