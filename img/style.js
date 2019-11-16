var sg="ЭТО ГЛАВНАЯ СТРАНИЦА";
var lft;
var hght;
var lpoint;
var tpoint;
var ob=null;
var flak=false;
var esse=new Image;var holiday=new Image;var internet=new Image;var style=new Image;
var masmedia=new Image; var reclama=new Image;var connection=new Image;
var reclama=new Array(130);
var ir=reclama.length;
for(var i=0;i<ir;i++)reclama[i]=new Image;
var project=new Array(19);
var ip=project.length;
for(var i=0;i<ip;i++)project[i]=new Image;
var design=new Array(29);
var id=design.length;
for(var i=0;i<id;i++)design[i]=new Image;
var portfolio=new Array(18)
var il=portfolio.length;
for(var i=0;i<il;i++)portfolio[i]=new Image;
var internet=new Array(8)
var ii=internet.length;
for(var i=0;i<ii;i++)internet[i]=new Image;
function setall()
{
if(ob)ob.style.visibility="hidden";
flak=false;
lft=document.body.clientWidth-740;
lft=(lft>0)?Math.round(lft*0.5):0;

hght=document.body.clientHeight-565;
hght=(hght>0)?Math.round(hght*0.37):0;

ob=document.getElementById("main");
ob.style.top=hght+"px";
ob.style.left=lft+"px";

ob=document.images["sign"]; 
ob.style.left=lft+10+"px";
ob.style.top=hght+149+"px";
ob.style.visibility="visible";
surprise();

h=hght+107+"px";
ob=document.images["t1"]; 
ob.style.left=lft+9+"px";
ob.style.top=h;

ob=document.images["t2"]; 
ob.style.left=lft+155+"px";
ob.style.top=h;

ob=document.images["t3"]; 
ob.style.left=lft+301+"px";
ob.style.top=h;

ob=document.images["t4"]; 
ob.style.left=lft+446+"px";
ob.style.top=h;

ob=document.images["t5"]; 
ob.style.left=lft+592+"px";
ob.style.top=h;

h=hght+496+"px";
ob=document.images["t6"]; 
ob.style.left=lft+29+"px";
ob.style.top=h;

ob=document.images["t7"]; 
ob.style.left=lft+202+"px";
ob.style.top=h;

ob=document.images["t8"]; 
ob.style.left=lft+378+"px";
ob.style.top=h;

ob=document.images["t9"]; 
ob.style.left=lft+554+"px";
ob.style.top=h;

h=hght+76+"px";
ob=document.images["tv"]; 
ob.style.left=lft+654+"px";
ob.style.top=h;

ob=document.images["tf"]; 
ob.style.left=lft+677+"px";
ob.style.top=h;

ob=document.images["tt"]; 
ob.style.left=lft+702+"px";
ob.style.top=h;

ob=document.images["tg"]; 
ob.style.left=lft+9+"px";
ob.style.top=hght+9+"px";

h=hght+103+"px";
ob=document.images["b1"]; 
ob.style.left=lft+7+"px";
ob.style.top=h;

ob=document.images["b2"]; 
ob.style.left=lft+151+"px";
ob.style.top=h;

ob=document.images["b3"]; 
ob.style.left=lft+296+"px";
ob.style.top=h;

ob=document.images["b4"]; 
ob.style.left=lft+442+"px";
ob.style.top=h;

ob=document.images["b5"]; 
ob.style.left=lft+588+"px";
ob.style.top=h;


h=hght+492+"px";
ob=document.images["b6"]; 
ob.style.left=lft+23+"px";
ob.style.top=h;

ob=document.images["b7"]; 
ob.style.left=lft+200+"px";
ob.style.top=h;

var lb8=lft+376+"px";
ob=document.images["b8"]; 
ob.style.left=lft+376+"px";
ob.style.top=h;

ob=document.images["b9"]; 
ob.style.left=lft+554+"px";
ob.style.top=h;

h=hght+73+"px";
ob=document.images["v"]; 
ob.style.left=lft+645+"px";
ob.style.top=h;

ob=document.images["f"]; 
ob.style.left=lft+670+"px";
ob.style.top=h;

ob=document.images["t"]; 
ob.style.left=lft+696+"px";
ob.style.top=h;

ob=document.images["g"]; 
ob.style.left=lft+5+"px";
ob.style.top=hght+7+"px";

ob=document.images["point"];
ob.style.visibility="hidden";

ob=document.images["filtr"];
ob.style.height=document.body.clientHeight;
ob.style.width=document.body.clientWidth;

ob=document.getElementById("txt");
ob.style.top=hght+150+"px";
ob.style.visibility="hidden";

ob=document.getElementById("wait");
ob.style.top=hght+230+"px";
ob.style.left=lft+270+"px";

document.body.style.visibility="visible";
ob=null;
esse.src='img/esse.jpg';
holiday.src='img/holiday.jpg';
internet.src='img/internet.jpg';
masmedia.src='img/masmedia.jpg';
reclama.src='img/reclama.jpg';
style.src='img/style.jpg';
connection.src='img/connection.jpg';
for(var i=0;i<ii;i++)internet[i].src='internet/'+i+'.jpg';
for(var i=0;i<il;i++)portfolio[i].src='portfolio/'+i+'.jpg';
for(var i=0;i<ip;i++)project[i].src='project/'+i+'.jpg';
for(var i=0;i<id;i++)design[i].src='design/'+i+'.jpg';
for(var i=0;i<ir;i++)reclama[i].src='reclama/'+i+'.jpg';
}
function krash()
{
document.images['light'].style.visibility='hidden';
document.images['light'].src=filtr.png;
document.images['filtr'].style.visibility='hidden';
}
function setik()
{
var o=document.images["mainik"].style;
o.top="10px";

o=document.images["internetik"];
o.style.top="50px";

var o=document.images["holidik"];
o.style.top="87px";

o=document.images["reclamik"];
o.style.top="124px";

o=document.images["masmedik"];
o.style.top="161px";

o=document.images["stylik"];
o.style.top="198px";

o=document.images["node1"];
o.style.top="53px";

o=document.images["node2"];
o.style.top="90px";

o=document.images["node3"];
o.style.top="127px";

o=document.images["node4"];
o.style.top="164px";

o=document.images["node5"];
o.style.top="201px";

o=document.images["essik"];
o.style.top="238px";

o=document.images["lv1"];
o.style.top="35px";

o=document.images["lv2"];
o.style.top="72px";

o=document.images["lv3"];
o.style.top="109px";

o=document.images["lv4"];
o.style.top="146px";

o=document.images["lv5"];
o.style.top="183px";

o=document.images["lv6"];
o.style.top="220px";

o=document.images["lh1"];
o.style.top="61px";

o=document.images["lh2"];
o.style.top="99px";

o=document.images["lh3"];
o.style.top="136px";

o=document.images["lh4"];
o.style.top="173px";

o=document.images["lh5"];
o.style.top="210px";

o=document.getElementById("mn");
o.style.top=10+"px";

o=document.getElementById("ntrnt");
o.style.top="50px";

o=document.getElementById("hld");
o.style.top="87px";

o=document.getElementById("rclm");
o.style.top="124px";

o=document.getElementById("msmd");
o.style.top="161px";

o=document.getElementById("stl");
o.style.top="198px";

o=document.getElementById("ss");
o.style.top="238px";
}
function surprise()
{
var o=document.images["kow"]; 
o.style.left=lft+205+"px";
o.style.top=hght+143+"px";
o.style.visibility="visible";
o=document.images["sign"];
expireDate=new Date;
expireDate.setMinutes(expireDate.getMinutes()+30);
if(document.cookie !="")
  {
o.src="img/cray1.jpg";
o=document.images["sold"]; 
o.style.left=lft+614+"px";
o.style.top=hght+263+"px";
o.style.visibility="visible";
  }
else
  { 
document.cookie="test=true;expires="+expireDate.toGMTString();
o.src="img/cray2.jpg";
o.style.visibility="visible";
o=document.images["sold"];
o.style.visibility="hidden";
  }
}
var sname="";
function pon(name)
{
if(name)
    {
sname=name;
poff();
kot();
    }
if(!ob)
document.images[sname].style.visibility="visible";
else setTimeout("pon()",13);
}
function poff(name)
{
if(name)document.images[name].style.visibility="hidden"; 
else 
   {
var a;
a=["b1","b2","b3","b4","b5","b6","b7","b8","b9","v","f","t","g"];
for(var i=0;i<13;i++)poff(a[i]);
   } 
}
var tp;
var clipt=0;
var clipb=0;
function mon(name)
{if(sname!=name)
  {
sname=name;
var lp;
switch(name)
      {
case 'tab1':clipt=102;clipb=102;tp=hght+40;lp=lft+7;break;
case 'tab2':clipt=174;clipb=174;tp=hght-32;lp=lft+152;break;
case 'tab3':clipt=258;clipb=258;tp=hght-118;lp=lft+297;break;
case 'tab4':clipt=78;clipb=78;tp=hght+64;lp=lft+441;break;
case 'tab5':clipt=192;clipb=192;tp=hght-53;lp=lft+588;break;
      } 
ob=document.getElementById(name);
ob.style.top=tp+"px";
ob.style.left=lp+"px";
ob.style.visibility="visible";
kit();
   }
} 
function kit()
{
if(clipt>0) 
    {
tp+=6;
clipt-=6;
ob.style.top=tp+"px";
ob.style.clip="rect("+clipt+"px 145px "+clipb+"px 0px)";
setTimeout("kit()",13);     
    }
else flak=true;
}
function kot()
{
if(ob)
 { 
if(flak)
  {
if(clipt<clipb)
    {
tp-=12;
clipt+=12;
ob.style.top=tp+"px";
ob.style.clip="rect("+clipt+"px 145px "+clipb+"px 0px)";
setTimeout("kot()",13);     
    }
else 
     {
     ob.style.visibility="hidden";
     ob=null;
     flak=false;
     poff();
     }
  }
else setTimeout("kot()",13);
 } 
}
function home()
{
if(document.getElementById('txt').style.visibility=='hidden')alert(sg);
setall();
}
var k;
var h;
var l=0;
var w;
function change(name,pos)
{
with(document)
 {
kot();
tpoint=pos;
var o=images["point"];
var nam=((name=='project')||(name=='news')||(name=='design')||(name=='portfolio'))?'esse':name;
if(nam!="treview")
    {
o.style.visibility="visible";
o.style.top=tpoint+hght+"px"; 
lpoint=lft+694;
o.style.left=lpoint+"px";
images["kow"].style.visibility="hidden";
images["sold"].style.visibility="hidden";
o=images["sign"];
o.src=eval(nam+'.src');
o.style.visibility="visible";
    }
else
    {
lpoint=lft+184;
o.style.left=lpoint;
surprise();
o=images["sign"];
o.style.visibility="hidden";
    }
switch(nam)
   {
case "style":    w=410;              
                 l=lft+270;             	
                 break;
case "esse":     w=340;	
                 l=lft+347;	      	             
                 break;
case "internet": w=390;
                 l=lft+295;
                 break;
case "connection": w=362;
                 l=lft+332;
                 break;
case "holiday":  w=240;
                 l=lft+452;
                 break; 
case "reclama":  w=347;
                 l=lft+342;
                 break;  
case "masmedia": w=288;
                 l=lft+403;
                 break;
case "treview":  w=175;
                 l=lft+6;
                 break;    
   }
o=getElementById("txt");
o.style.width=w+"px";
o.style.left=l+"px";
o.src=name+".html";
o.style.visibility="visible";
  }
}
function order(name)
{
lft=parent.document.body.clientWidth-740;
lft=(lft>0)?lft/2:0;
hght=parent.document.body.clientHeight-565;
hght=(hght>0)?hght*0.37:0;
ob=document.getElementById(name);
var o;
switch(name)
   {
case "style":    h=(navigator.appName=="Netscape")?1935:1680; break; 
case "esse":     h=(navigator.appName=="Netscape")?1430:1340;break;
case "news":     h=(navigator.appName=="Netscape")?850:770;break;
case "treview":
case "connection":
case "answer":   h=333;break;
case "masmedia": h=(navigator.appName=="Netscape")?1840:1625;break;
case "holiday":  h=(navigator.appName=="Netscape")?1530:1372;break;
case "internet": h=(navigator.appName=="Netscape")?850:780;
                 bhvset('i',name);	      	             
                 break; 
case "project":  h=975;
		 bhvset('p',name);
                 break;
case "reclama":  h=(navigator.appName=="Netscape")?6840:6770;
		 bhvset('r',name);
                 break;
case "design":   h=1520;
		 bhvset('d',name);
                 break;
case "portfolio": h=900;
		 bhvset('l',name,i);
                 break;
   }
k=(h-333)/304;
ob.style.height=h+"px";
document.body.style.visibility="visible";
if(h<334)
parent.document.images["point"].style.visibility="hidden";
if(name!="treview") scan();
else {maping();scanik()}
}
function scan()
{
if(parent.document.images["point"].style.top)
   {
tpoint=parseInt(parent.document.images["point"].style.top.split("p")[0]);
ob.style.marginTop=(156+hght-tpoint)*k+"px";
   } 
setTimeout("scan()",21);
}
var topik;
function scanik()
{
if(parent.document.images["point"].style.top)
    {
tpoint=parseInt(parent.document.images["point"].style.top.split("p")[0]);
topik=(156+hght-tpoint)*k;
for(var i=0; i<document.all.length;i++)
if(document.all(i).style.top)document.all(i).style.top=mapik[i]+topik+"px";
    }
setTimeout("scanik()",21);
}
var y;
flag=false;
function hook(evt)
{
var e=(window.event)?window.event:evt;
var o=document.images["point"];
o.style.cursor="crosshair";
y=e.clientY-parseInt(o.style.top.split("p")[0]);
flag=true;
}
function unhook()
{
flag=false;
document.images["point"].style.cursor="pointer";
}
function scroll(evt)
{
var e=(window.event)?window.event:evt;
var o=document.images["point"];
if(flag)
   {
tpoint=e.clientY-y-hght;
if(tpoint<156)tpoint=156;
if(tpoint>460)tpoint=460;
o.style.top=tpoint+hght+"px";
   } 
else if(o)o.style.cursor="pointer";
if((Math.abs(lpoint-e.clientX)>20)||(Math.abs(tpoint-e.clientY+y)>5+hght)) flag=false; 
return false;     
}
document.onmousemove=scroll;
function wheel(evt)
{
var e;
var delta;
var o;
var t;
if(window.event)
  {
e=window.event;
delta=-e.wheelDelta/40;
  }
else 
  {
e=evt;
delta=e.detail
  }
o=(parent.document)?parent.document.images["point"]:document.images["point"]; 
t=parseInt(o.style.top.split("p")[0])-hght;
t+=delta;
if(t<156)t=156;
if(t>460)t=460;
o.style.top=(t+hght)+"px";
return false;
}
var mapik=new Array();
var fnode,nodname,picname,dvname,tabname,lvname,lhname,deltik;
fnode=[false,false,false,false,false,false,false,false,false,false];
nodname=["node1","node2","node3","node4","node5","node6","node7","node8","node9","node10"];
picname=["internetik","holidik","reclamik","masmedik","stylik","essik","list1","list2","list3",
"list4","list5"];
dvname=["ntrnt","hld","rclm","msmd","stl","ss"];
tabname=["tabik1","tabik2","tabik3","tabik4","tabik5"];
lvname=["lv2","lv3","lv4","lv5","lv6","lv7","lv8","lv9","lv10","lv11"];
lhname=["lh1","lh2","lh3","lh4","lh5","lh6","lh7","lh8","lh9","lh10","lv1"];
deltik=[78,138,271,65,190];
function noder(number)
{
var o=document.images[nodname[number]];
var ob=document.images[lvname[number]];
fnode[number]=!fnode[number];
if(fnode[number])
  { 
    o.src="img/minusik.bmp";    
    ob.style.height=(number<5)?18+deltik[number]+"px":ob.style.height;
    for(var i=number+1; i<6; i++)
      {
       o=document.images[picname[i]];
       o.style.top=deltik[number]+parseInt(o.style.top.split("p")[0])+"px";
       o=document.getElementById(dvname[i]);
       o.style.top=deltik[number]+parseInt(o.style.top.split("p")[0])+"px";
       if(i<5)
              {
       o=document.images[lhname[i]];
       o.style.top=deltik[number]+parseInt(o.style.top.split("p")[0])+"px";
       o=document.images[nodname[i]];
       o.style.top=deltik[number]+parseInt(o.style.top.split("p")[0])+"px";
       o=document.images[lvname[i]];
       o.style.top=deltik[number]+parseInt(o.style.top.split("p")[0])+"px";
              }
      } 
   }
else
   {
    o.src="img/plusik.bmp";
    ob.style.height=(number<5)?"18px":ob.style.height;
    for(var i=number+1; i<6; i++)
      {
       o=document.images[picname[i]];
       o.style.top=parseInt(o.style.top.split("p")[0])-deltik[number]+"px";
       o=document.getElementById(dvname[i]);
       o.style.top=parseInt(o.style.top.split("p")[0])-deltik[number]+"px";
       if(i<5)
              {
       o=document.images[nodname[i]];
       o.style.top=parseInt(o.style.top.split("p")[0])-deltik[number]+"px";
       o=document.images[lhname[i]];
       o.style.top=parseInt(o.style.top.split("p")[0])-deltik[number]+"px";   
       o=document.images[lvname[i]];
       o.style.top=parseInt(o.style.top.split("p")[0])-deltik[number]+"px";
              } 	
      } 
   }
for(var i=0; i<10; i++)
   { 
    if(fnode[i])
        {
         o=document.images[nodname[i]];
         var t=parseInt(o.style.top.split("p")[0]);
         if(i<5)
              { 
               o=document.images[picname[i+6]];
               o.style.top=t+27+"px";
               o.style.visibility="visible";
               o=document.images[lvname[i+5]];
               o.style.top=t+22+"px";
               o.style.visibility="visible"; 
               o=document.images[lhname[i+5]];
               o.style.top=t+49+"px";
               o.style.visibility="visible";
               o=document.images[nodname[i+5]];
               o.style.top=t+40+"px";
               o.style.visibility="visible";
              }
         else
              {
               o=document.getElementById(tabname[i-5]);
               o.style.top=t-20+"px";
               o.style.visibility="visible"; 
              }
         } 
     else  
         if(i<5)   
              {
               fnode[i+5]=false;
               o=document.getElementById(tabname[i]);
               o.style.visibility="hidden";
               o=document.images[picname[i+6]];
               o.style.visibility="hidden";
               o=document.images[lvname[i+5]];
               o.style.visibility="hidden"; 
               o=document.images[lhname[i+5]];
               o.style.visibility="hidden";
               o=document.images[nodname[i+5]];
               
o.src="img/plusik.bmp";
               o.style.visibility="hidden";
                
              }
          else
              {
               o=document.getElementById(tabname[i-5]);
               o.style.visibility="hidden";
              }  
    }
maping();
var h=parseInt(document.images["essik"].style.top.split("p")[0])+17;
document.getElementById("treview").style.height=(h<333)?333+"px":h+"px";
k=(h<333)?0:(h-333)/304;
o=parent.document.images["point"];
if(k!=0)
   {
tpoint=156+hght-topik/k;
o.style.top=tpoint+"px";
o.style.visibility="visible";
   }
else 
   { 
o.style.visibility="hidden"; 

   } 
}
function maping()
{
if(parent.document.images["point"].style.top)
   {  
tpoint=parseInt(parent.document.images["point"].style.top.split("p")[0]);
topik=(156+hght-tpoint)*k;
   }
else topik=0; 
for(var i=0; i<document.all.length;i++)
if(document.all(i).style.top)mapik[i]=parseInt(document.all(i).style.top.split("p")[0])-topik;
}
function changecol(col)
{
document.body.style.backgroundColor=col;
}
var fcol=true;
function choice(name1,pos1,name2,pos2)
{
if(!name2||fcol)
parent.change(name1,pos1)
else
parent.change(name2,pos2)
}
document.onmousewheel=wheel;
window.mousewheel=wheel;  
if(navigator.appName=="Netscape")
{
document.addEventListener('DOMMouseScroll',wheel, false);  
document.addEventListener('onmousewheel',wheel, false);    
}
function wrpic(name,n,m,w,t)
{
with(document)
   {
write('<TABLE width='+w+'><TBODY>');
for(var i=n;i<m;)
                { 
var s='<TD align=center><img id="'+name;
var r='" title="'
var f='" class=t border=2></TD>';
if(!t)
write('<TR height=90>'+s+(i++)+f+((i<m)?s+(i++)+f:'<TD></TD>')+'</TR>');   
else write('<TR height=90>'+s+i+r+t[i++]+f+((i<m)?s+i+r+t[i++]+f:'<TD></TD>')+'</TR>'); 
               }
write('</TBODY></TABLE>');
   }
}
function test(n,name,t)
{
var obv=parent.document.images['filtr'];
var obw=parent.document.getElementById('wait');
var obl=parent.document.images['light'];
var j=eval(name).length;
for (var i=0;i<j;i++)
   {
var obn=eval('parent.'+name+'['+i+']');
var H=obn.height;
var W=obn.width;
if(!(W&&H))
           {
obv.style.visibility='visible';
obw.style.visibility='visible';
return true;
           }
    } 
if(t)clearInterval(t);
obv.style.visibility='hidden';
obw.style.visibility='hidden';
for (var i=0;i<j;i++)
   {            
o=document.images[n+i];
o.src=eval('parent.'+name+'['+i+'].src');
H=o.height;
W=o.width;
o.W=W;
var k=W/H;
var w=80*k;w=(w<108)?w:107;
var h=w/k;
o.height=h;
o.width=w;
o.onmouseover=function(){this.border=4};
o.onmouseout=function(){this.border=2};
o.onclick=function()
     {
obv.style.visibility='visible';
obl.src=this.src;
obl.style.left=lft+370-Math.round(this.W/2);
obl.style.visibility='visible';
obl.title=this.title;
     }
   }
return false;
}
function bhvset(n,name)
{
var tst=function(){test(n,name,tim)}
if(test(n,name)){var tim=window.setInterval(tst,100)}
}