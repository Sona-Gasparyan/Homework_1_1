function sort(sentence) {
    string="";
    ss="";
    sentString=sentence.split("");

    for(j=0;j<sentString.length;j++) {
        for(i=j;i<sentString.length;i++) {
            if(string.includes(sentString[i]) === false || sentString[i] === " ")
               string+=sentString[i];
            else 
                 break;
         }
         if(ss.length<=string.length)
             ss=string;
         string="";
    }
    return ss;
}