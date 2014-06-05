/*
Tikslus notyrious version 1.0.0 by Puspendra Singh Chouhan (www.tikslus.com)
jquery notification plugin

*/

(function($){
$.fn.tikslusnotyrious = function(options){
 
	    var skins=new Array();
		
var timers=[];
var prog=[];
var stayinterval=0;
var msgids=[];

		skins['default_left']="<div class='tikslus_wrapper'><div class='tikslus_content'><span class='title'>@title</span><span class='close'><a href='#' class='close'>x</a></span><p>@content</p></div><div class='tikslus_picture'>@picture</div><div class='progress'></div><div class='btns'><ul class='user_buttons'>@buttons</ul></div></div>";
	  skins['default_center']="<div class='tikslus_wrapper'><div class='tikslus_picture'>@picture</div><div class='tikslus_content'><span class='title'>@title</span><span class='close'><a href='#' class='close'>x</a></span><p>@content</p></div><div class='progress'></div><div class='btns'><ul class='user_buttons'>@buttons</ul></div></div>";
	  skins['default_right']="<div class='tikslus_wrapper'><div class='tikslus_picture'>@picture</div><div class='tikslus_content'><span class='title'>@title</span><span class='close'><a href='#' class='close'>x</a></span><p>@content</p></div><div class='progress'></div><div class='btns'><ul class='user_buttons'>@buttons</ul></div></div>";
	  
	  	skins['apollo_left']="<div class='tikslus_wrapper'><div class='tikslus_content'><span class='title'>@title</span><span class='close'><a href='#' class='close'>x</a></span><p>@content</p></div><div class='tikslus_picture'>@picture</div><div class='progress'></div><div class='btns'><ul class='user_buttons'>@buttons</ul></div></div>";
		skins['apollo_center']="<div class='tikslus_wrapper'><div class='tikslus_content'><span class='title'>@title</span><span class='close'><a href='#' class='close'>x</a></span><p>@content</p></div><div class='tikslus_picture'>@picture</div><div class='progress'></div><div class='btns'><ul class='user_buttons'>@buttons</ul></div></div>";
	  skins['apollo_right']="<div class='tikslus_wrapper'><div class='tikslus_picture'>@picture</div><div class='tikslus_content'><span class='title'>@title</span><span class='close'><a href='#' class='close'>x</a></span><p>@content</p></div><div class='progress'></div><div class='btns'><ul class='user_buttons'>@buttons</ul></div></div>";
	  
   	skins['titan_left']="<div class='tikslus_wrapper'><div class='tikslus_content'><span class='title'>@title</span><span class='close'><a href='#' class='close'>x</a></span><p>@content</p></div><div class='tikslus_picture'>@picture</div><div class='progress'></div></div>";
	skins['titan_center']="<div class='tikslus_wrapper'><div class='tikslus_content'><span class='title'>@title</span><span class='close'><a href='#' class='close'>x</a></span><p>@content</p></div><div class='tikslus_picture'>@picture</div><div class='progress'></div></div>";
  skins['titan_right']="<div class='tikslus_wrapper'><div class='tikslus_picture'>@picture</div><div class='tikslus_content'><span class='title'>@title</span><span class='close'><a href='#' class='close'>x</a></span><p>@content</p></div><div class='progress'></div></div>";
	  

	  	skins['demeter_left']="<div class='tikslus_wrapper'><div class='tikslus_content'><div class='title'>@title</div><span class='close'><a href='#' class='close'>x</a></span><p>@content</p></div><div class='tikslus_picture'>@picture</div><div class='btns'><ul class='user_buttons'>@buttons</ul></div><div class='progress'></div></div>";
		skins['demeter_center']="<div class='tikslus_wrapper'><div class='tikslus_content'><div class='title'>@title</div><span class='close'><a href='#' class='close'>x</a></span><p>@content</p></div><div class='tikslus_picture'>@picture</div><div class='btns'><ul class='user_buttons'>@buttons</ul></div><div class='progress'></div></div>";
	  skins['demeter_right']="<div class='tikslus_wrapper'><div class='tikslus_picture'>@picture</div><div class='tikslus_content'><div class='title'>@title</div><span class='close'><a href='#' class='close'>x</a></span><p>@content</p></div><div class='btns'><ul class='user_buttons'>@buttons</ul></div><div class='progress'></div></div>";
	  

	 skins['hades_left']="<div class='tikslus_wrapper'><div class='tikslus_content'><div class='title'>@title</div><span class='close'><a href='#' class='close'>x</a></span><p>@content</p></div><div class='tikslus_picture'>@picture</div><div class='progress'></div><div class='btns'><ul class='user_buttons'>@buttons</ul></div></div>";
	skins['hades_center']="<div class='tikslus_wrapper'><div class='tikslus_content'><div class='title'>@title</div><span class='close'><a href='#' class='close'>x</a></span><p>@content</p></div><div class='tikslus_picture'>@picture</div><div class='progress'></div><div class='btns'><ul class='user_buttons'>@buttons</ul></div></div>";
	 skins['hades_right']="<div class='tikslus_wrapper'><div class='tikslus_picture'>@picture</div><div class='tikslus_content'><div class='title'>@title</div><span class='close'><a href='#' class='close'>x</a></span><p>@content</p></div><div class='progress'></div><div class='btns'><ul class='user_buttons'>@buttons</ul></div></div>";
	  
	  
	  
	   skins['zeus_left']="<div class='tikslus_wrapper'><div class='tikslus_content'><span class='title'>@title</span><span class='close'><a href='#' class='close'>x</a></span><p>@content</p></div><div class='tikslus_picture'>@picture</div><div class='progress'></div></div>";
	skins['zeus_center']="<div class='tikslus_wrapper'><div class='tikslus_content'><span class='title'>@title</span><span class='close'><a href='#' class='close'>x</a></span><p>@content</p></div><div class='tikslus_picture'>@picture</div><div class='progress'></div></div>";
	 skins['zeus_right']="<div class='tikslus_wrapper'><div class='tikslus_picture'>@picture</div><div class='tikslus_content'><span class='title'>@title</span><span class='close'><a href='#' class='close'>x</a></span><p>@content</p></div><div class='progress'></div></div>"
	  
skins['hera_left']="<div class='tikslus_wrapper'><div class='tikslus_content'><div class='title'>@title</div><p>@content </p></div><div class='tikslus_picture'>@picture</div><div class='progress'></div><div class='btns'><ul class='user_buttons'>@buttons</ul><ul><li class='closenotification'><a href='#' class='close'>Close</a></li></ul></div></div>";
	skins['hera_center']="<div class='tikslus_wrapper'><div class='tikslus_picture'>@picture</div><div class='tikslus_content'><div class='title'>@title</div><p>@content </p></div><div class='progress'></div><div class='btns'><ul class='user_buttons'>@buttons</ul><ul><li class='closenotification'><a href='#' class='close'>Close</a></li></ul></div></div>";
	 skins['hera_right']="<div class='tikslus_wrapper'><div class='tikslus_picture'>@picture</div><div class='tikslus_content'><div class='title'>@title</div><p>@content </p></div><div class='progress'></div><div class='btns'><ul class='user_buttons'>@buttons</ul><ul><li class='closenotification'><a href='#' class='close'>Close</a></li></ul></div></div>";
	 	 

	 
	   var defaults=
					{
					skin:'default',
					skinPath:'',//include a trailing /
					position:'right',
					message:null,
					animationDuration:500,
					sticky:true,
					buttons:new Object(),
					stayInterval:10000,
					picture:null
						};
					 options = $.extend(defaults, options);
					 var skin; 
					 
					 if(options.skinPath==""){
					 $("head").append("<link rel='stylesheet' href='"+options.skin+".css' />");
					 }else{
					 $("head").append("<link rel='stylesheet' href='"+options.skinPath+options.skin+".css' />");
					 }
					 
					 
					 function init_messages(){
					 switch(options.position){
					 case "left":
					 $(".tikslus_notify").find("li.open").css({left:"-120%"});
					 break;
					 case "right":
					 $(".tikslus_notify").find("li.open").css({right:"-120%"});
					 break;
					 case 'center':
					 $(".tikslus_notify").find("li.open").css({width:0});
					 break;
					 default:
					 $(".tikslus_notify").find("li.open").css({left:"-120%"});
					 break;
					 }
					 }
					 
					 //create buttons  
function CreateButtons()
  {
		var buttonHTML = '';
	
		if(options.buttons)
		{
		$.each(options.buttons,function(name,obj){

			// Generatr markup for the buttons:
	
			buttonHTML += '<li><a href="#" name="'+name+'" class="button '+obj['button_class']+'">'+name+'<span></span></a></li>';
			if(!obj['action']){
				obj['action'] = function(){};
			}
			
			
		});  
		
		}
		
		
		if(buttonHTML=="" || buttonHTML==undefined || buttonHTML==null)
	return(false);
		else
		
		return(buttonHTML);
  };
					 
				 
		

					 function animate_progress(id,ind)
					{
				//	var items=$(".tikslus_notify >li");
					var li=$(".tikslus_notify").find("#"+id);
				//	var num=items.index(li);
					
if(li.length>0){
var li_width=li.width();

var li_timer=options.stayInterval*(ind+1);

var progress=li.find(".progress");
var current_progress=progress.width();

var sec=li_timer/100;
var p=li_width/sec;

if(current_progress<li_width){
progress.css({width:(current_progress+p)+"px"});
}else{
window.clearInterval(prog[id]);
li.addClass("rotate-out").fadeOut("slow",function(){
li.remove();
msgids.pop(li.attr("id"));
});
}

}
					
					};


		
					 
					 function close_message(id){
var li=$(".tikslus_notify").find("#"+id);
var listItem = document.getElementById( id );
var ind=$( "li" ).index( listItem );

var progress=li.find(".progress");
var li_width=li.width();
var progress_width=progress.width();
if(progress_width<li_width){
progress.css({width:li_width + "px"});
}
window.clearInterval(timers[id]);

};

function animate_message(obj,duration){
switch(options.position){
case 'left':
obj.stop().animate({left:10},duration);
break;
case 'right':
obj.stop().animate({right:10},duration);
break;
case 'center':
obj.stop().animate({width:356},duration);
break;
default:
obj.stop().animate({left:10},duration);

}
};

function isImgValid(url,HTML){
HTML = HTML || false;
if(url==null || url==undefined){
if(HTML==true) return "";
if(HTML==false) return false;
}

   var arr = [ "jpeg", "jpg", "gif", "png" ];
   var rtn=false;
   var ext = url.substring(url.lastIndexOf(".")+1);
   if($.inArray(ext,arr)){
     rtn=true;
  }
 
  if(HTML==true && rtn==true){
  return "<img src='"+url+"' class='responsive_img' />";
  }
  if(HTML && rtn==false){return "";};
 
if(HTML==false && rtn){return true;};
if(HTML==false && rtn==false) {return false;}
 
};


$.fn.closenotification=function(obj){
var li=obj.closest("li.closed");
li.addClass("rotate-out").fadeOut("slow",function(){
li.remove();
msgids.pop(li.attr("id"));
});

};

function append_message(messagePosition,skinName,skinHTML){
switch(messagePosition){
case 'left':
 $(".tikslus_notify_vertical_vleft").append("<li class='open "+skinName+"' >"+skinHTML+"</li>");
break;
case 'right':
$(".tikslus_notify_vertical_vright").append("<li class='open "+skinName+"' >"+skinHTML+"</li>");
break;
case 'center':
$(".tikslus_notify_vertical_vcenter").append("<li class='open "+skinName+"' >"+skinHTML+"</li>");
break;
default:
$(".tikslus_notify_vertical_vright").append("<li class='open "+skinName+"' >"+skinHTML+"</li>");

}

					 };
					 
					 if(options.position=="left"){
					 if($("body").find(".tikslus_notify_vertical_vleft").length==0){
					 $("body").append('<ul class="tikslus_notify_vertical_vleft tikslus_notify"></ul>');
					 }
					 skin=skins[options.skin +"_"+"left"];
					 
					 }else if(options.position=="right"){
					 if($("body").find(".tikslus_notify_vertical_vright").length==0){
					 $("body").append('<ul class="tikslus_notify tikslus_notify_vertical_vright"></ul>');
					 }
					 skin=skins[options.skin +"_"+"right"];
					 }else if(options.position=="center"){
					 if($("body").find(".tikslus_notify_vertical_vcenter").length==0){
					 $("body").append('<ul class="tikslus_notify tikslus_notify_vertical_vcenter"></ul>');
					 }
					 skin=skins[options.skin +"_"+"center"];
					
					 }
					 else if(options.position=="top"){
					 if($("body").find(".tikslus_notify_horizontal").length==0){
					 $("body").append('<ul class="tikslus_notify tikslus_notify_horizontal notify_htop"></ul>');
					 }
					 skin=skins[options.skin +"_"+"top"];
					 }
					 	 else if(options.position=="bottom"){
					 if($("body").find(".tikslus_notify_horizontal").length==0){
					 $("body").append('<ul class="tikslus_notify tikslus_notify_horizontal notify_hbottom"></ul>');
					 }
					 skin=skins[options.skin +"_"+"top"];
					 }
					 else{
					  if($("body").find(".tikslus_notify_vertical_vright").length==0){
					 $("body").append('<ul class="tikslus_notify tikslus_notify_vertical_vright"></ul>');
					 }
					 skin=skins[options.skin +"_"+"left"];
					 }
					 
					 
					 
					 
					 
					 if(options.message instanceof Array){
					 for(var i=0; i<options.message.length;i++)
					 {
					 var tempskin=skin;
					 var m=options.message[i];
					 
					 if(m instanceof Object){
					 tempskin=tempskin.replace("@content",m.message);
					 if(m.hasOwnProperty("title")){
					 tempskin=tempskin.replace("@title",m['title']);
					 }else{
					 tempskin=tempskin.replace("@title","");
					 }
					 
					 if(m.hasOwnProperty("picture")){

					 tempskin=tempskin.replace("@picture","<img src='"+m['picture']+"' class='responsive_img' />");
					 }else{
					 tempskin=tempskin.replace("@picture","");
					 }
					 
					 if(options.stayInterval>0){
					 stayinterval=options.stayInterval;
					 }
				
					append_message(options.position,options.skin,tempskin);
					 
					 
					 }
					 }
					 }else if(options.message instanceof Object){
					 skin=skin.replace("@content",m['message']);

					 skin=skin.replace("@title",m['title']);
					 skin=skin.replace("@picture","<img src='"+m['picture']+"' class='responsive_img' />");
				
					 append_message(options.position,options.skin,skin);
					 }else{
					
					 skin=skin.replace("@content",options.message);
					 skin=skin.replace("@title",'');
					 
					 
					 
					  skin=skin.replace("@picture",isImgValid(options.picture,true));
					 
					 if(options.buttons){
					 
					 var user_buttons=CreateButtons();
					
					 skin=skin.replace("@buttons",user_buttons);
					 }
					
					append_message(options.position,options.skin,skin);
					 
					 
					 }
					 
					 $(".tikslus_notify li").each(function(){
					 var imga=$(this).find(".tikslus_picture img");
					 var contenta=$(this).find(".tikslus_content");
					 var usr_buttons=$(this).find(".user_buttons");
					 var title=$(this).find(".title");
					 if(imga.length==0){
					 imga.remove();
					 contenta.css({maxWidth:"100%",width:'100%'});
					 }
					 if(usr_buttons.children().length<=0){
					 usr_buttons.remove();
					 }
					 
					 if(title.text()==""){
					 title.css({padding:0});
					 }
					 
					 });
					 
					 //create user defined buttons
					 
					
					 
					 init_messages();
					 var total=$(".tikslus_notify").find("li.open").length;
					 var items=$(".tikslus_notify >li.open");
					
					 $($(".tikslus_notify").find("li.open").get().reverse()).each(function(i){
				
							var rnd=Math.random(1);
							var rndid="message"+Math.ceil(rnd*100000);
							msgids.push(rndid);
								$(this).attr("id",rndid);
								
									var ind=items.index($(this))
								animate_message($(this),options.animationDuration/(total-i+1)*total);
						
								$(this).removeClass('open').addClass("closed");
							
				
						if(options.sticky==false){
						timers[rndid]=window.setInterval(function(){close_message(rndid);},options.stayInterval*(ind+1));
					prog[rndid]=window.setInterval(function(){animate_progress(rndid,ind);},100);
					}


							});
							
							
							
									//event handling for user created buttons
		//try to execute callback if any and close the dialog
	
		
		$.each(options.buttons,function(name,obj){
	
	for(var i=0;i<msgids.length;i++)
	{
	
	var btnobj=$("#"+msgids[i]);
	
	btnobj.find(".user_buttons a").click(function(){
	var nn=$(this).attr("name");
					// Calling the action attribute when a
				// click occurs, and hiding the confirm.
				
			
			if(nn==name){
			//	obj.action();
			obj.action(undefined != arguments[0] ? arguments[0] : '');
				return false;
				}
			});
			}
			
			
		});
							

$(".closenotification, .btn a.close,.tikslus_wrapper a.close").click(function(e){
e.preventDefault();
$.fn.closenotification($(this));
var id=$(this).closest("li").attr("id");
if(id in prog){window.clearInterval(prog[id]);}
if(id in timers){window.clearInterval(timers[id]);}
});							

					
					 
				
					
};
})(jQuery);
					