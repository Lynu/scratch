App.Events = (function(lng, app, undefined) {

  lng.dom("#submitButton").tap(function(event) {
    var search_this = lng.dom("#search").val();
    lng.dom("#search-name").html("Your search was :"+search_this+"!");
    lng.Router.section("result");
  });
  
    
   lng.dom("#showlistButton").tap(function(event) {
    var list =  [
        {id: '1'  , name: 'Tim', twitter: 'Tester'},
        {id: '2'  , name: 'bla', twitter: 'koe'},
        {id: '3'  , name: 'drLOVE', twitter: 'koe'}    ] ;
    
    // console.log(list);
    // window.list = list;
     
      for (i=0;i<list.length;i++){
        //console.log(list[i].name);
        lng.dom("#list").append(" Result: id= "+list[i].id+ " name= "+list[i].name+"");
      }

      //lng.dom("#list").html("result:"+list+"!");
     lng.Router.section("test");

   });


 lng.dom('#showTemplate').tap(function(event){

    var contents = '<li id="{{id}}">\
              <a href="#">\
                  <span class="icon check"></span>\
                  <strong>{{name}}</strong>\
                  <small>{{description}}</small>\
              </a>\
            </li>';

      lng.View.Template.create('test-tmp' , contents);
      makeTemplatepage()
      lng.Router.section("showTemplate")
   });


    var makeTemplatepage = function()
    {
    var content_data = [
    {id:1,name:'@timmakken', description:'bla'},
    {id:1,name:'@Jelle a', description:'otherinput'}];

      //$('.ul').css('color', '#fff');
      lng.View.Template.render('#details-content' ,'test-tmp' , content_data);
      
    };

    


    return {

      makeTemplatepage: makeTemplatepage,

    }

})(LUNGO, App);
