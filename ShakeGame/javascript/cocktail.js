var tmp;
tmp=Data.shake;
var test;
special=Data.special;
// for(test=0;test<100;test++){shake([Math.floor((Math.random() * 56)+6),Math.floor((Math.random() * 56)+6),Math.floor((Math.random() * 56)+6)],Math.floor((Math.random() * 6)))}

//for(test=0;test<100;test++){shake([Math.floor((Math.random() * 60)+5),Math.floor((Math.random() * 60)+5),Math.floor(Math.random() * 5)])}

function shake(a){
  var str="";
  try{
    str=specialName(a);
    if(str.length!=0){
      if(!chechStr(str)){
        str=str.replace("@","");
      }else if(str.indexOf("$")>=0){
        str=str.replace("$","");
        str+=ran(tmp[a[2]].noun);
      }else{
        str+="的"+ran(tmp[a[2]].noun);
      }
    }

    if(str.length==0 || Math.floor((Math.random() * 10)<4)){
      str=ran(tmp[a[0]].adj)+"的";
      name = ran(tmp[a[1]].noun);
      if(chechStr(name)){
        str+= name;
        str+=ran(tmp[a[2]].noun);
      }else{
        str=name.replace("@","");
      }      
    }

    return str;
    console.log(str+" , "+tmp[a[0]].name+" , "+tmp[a[1]].name+" , "+tmp[a[2]].name);
  }catch(err){
    console.log(err.message+","+a+","+b);
  }
}


function ran(a){
  var b;
  b=a.split(",");
  return b[Math.floor((Math.random() * b.length))];
}

function chechStr(str){
  if(str.indexOf("@")<0){
    return true;
  }else{
    return false;
  }
}

function specialName(a){
  // console.log(special[a[0]].drinkname);
  for(c=0;c<special.length;c++){
    var b=special[c].array.split(",");
    for(f=0;f<2;f++){
      for(e=0;e<2;e++){
        if(a[f]==b[e]){
          b.splice(e,1);
          break;
        }
      }
    }
    if(b.length==0){

      var drinkname = ran(special[c].drinkname);
      // console.log(special[c].name+" , "+special[c].drinkname+" , "+drinkname);
      return drinkname;
    }
  }

  return "";
}
