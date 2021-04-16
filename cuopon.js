
var gen = [] 
var poss = val(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z);

    for (gen = 0; gen < codeLength; gen++) {
    poss = Math.random() * 10;
    gen.append(poss);
}

System.out.println(gen);
return gen ;
