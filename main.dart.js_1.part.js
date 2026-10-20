((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,D,A={
RZ(d){var x=new A.aib()
x.a9l(d)
return x},
aib:function aib(){this.a=$
this.b=0
this.c=2147483647},
ax_:function ax_(){},
aHp:function aHp(){},
ax0:function ax0(){},
aHq:function aHq(){},
b1R(d,e,f,g){var x=A.aNh(),w=A.aNh(),v=A.aNh(),u=new Uint16Array(16),t=new Uint32Array(573),s=new Uint8Array(573)
x=new A.adW(d,f,x,w,v,u,t,s)
x.aj6(e,g)
x.ad1(B.i0)
return x},
aQp(d,e,f,g){var x=d[e*2],w=d[f*2]
if(x>=w)x=x===w&&g[e]<=g[f]
else x=!0
return x},
aNh(){return new A.aBj()},
b9d(d,e,f){var x,w,v,u,t,s,r,q=new Uint16Array(16)
for(x=0,w=1;w<=15;++w){x=x+f[w-1]<<1>>>0
q[w]=x}for(v=d.$flags|0,u=0;u<=e;++u){t=u*2
s=d[t+1]
if(s===0)continue
r=q[s]
q[s]=r+1
r=A.b9e(r,s)
v&2&&C.f(d)
d[t]=r}},
b9e(d,e){var x,w=0
do{x=A.iB(d,1)
w=(w|d&1)<<1>>>0
if(--e,e>0){d=x
continue}else break}while(!0)
return A.iB(w,1)},
aUT(d){return d<256?B.u1[d]:B.u1[256+A.iB(d,7)]},
aNr(d,e,f,g,h){return new A.aFl(d,e,f,g,h)},
iB(d,e){if(d>=0)return D.b.jD(d,e)
else return D.b.jD(d,e)+D.b.c_(2,(~e>>>0)+65536&65535)},
z9:function z9(d,e){this.a=d
this.b=e},
adW:function adW(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=null
_.e=_.d=0
_.x=_.w=_.r=_.f=$
_.y=2
_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.Q=$
_.k1=0
_.p3=_.p2=_.p1=_.ok=_.k4=_.k3=_.k2=$
_.p4=f
_.R8=g
_.RG=h
_.rx=i
_.ry=j
_.x1=_.to=$
_.x2=k
_.a2=_.ae=_.a1=_.a3=_.B=_.b6=_.b2=_.y2=_.y1=_.xr=$},
jV:function jV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aBj:function aBj(){this.c=this.b=this.a=$},
aFl:function aFl(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aiA:function aiA(d,e){var _=this
_.a=d
_.b=null
_.c=e
_.e=_.d=0},
awZ:function awZ(){},
a0q:function a0q(){},
NO:function NO(d,e){this.a=d
this.b=e},
aiH(d,e,f,g){var x,w,v=new A.aiG(e)
if(g==null)g=0
if(f==null)f=d.length-g
x=d.length
if(g+f>x)f=x-g
w=y.D.b(d)?d:new Uint8Array(C.bn(d))
x=J.d5(D.k.gaj(w),w.byteOffset+g,f)
v.b=x
v.d=x.length
return v},
aiG:function aiG(d){var _=this
_.b=null
_.c=0
_.d=$
_.a=d},
aiI:function aiI(){},
aSB(d,e){var x=e==null?32768:e
return new A.Vp(new Uint8Array(x),d)},
Vp:function Vp(d,e){this.b=0
this.c=d
this.a=e},
anB:function anB(){},
bbm(d){var x,w,v,u,t="0123456789abcdef",s=d.length,r=new Uint8Array(s*2)
for(x=0,w=0;x<s;++x){v=d[x]
u=w+1
r[w]=t.charCodeAt(v>>>4&15)
w=u+1
r[u]=t.charCodeAt(v&15)}return C.fY(r,0,null)},
rg:function rg(d){this.a=d},
ae2:function ae2(){this.a=null},
RO:function RO(){},
ahV:function ahV(){},
b9K(d){var x=new Uint32Array(C.bn(C.b([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],y.t))),w=new Uint32Array(64),v=new Uint8Array(64)
return new A.a7d(x,w,d,v,new Uint32Array(16))},
a7c:function a7c(){},
aFe:function aFe(){},
a7d:function a7d(d,e,f,g,h){var _=this
_.y=d
_.z=e
_.a=f
_.c=null
_.d=g
_.e=0
_.f=h
_.r=0
_.w=!1},
acy:function acy(d,e){this.a=d
this.b=e},
dv:function dv(d){this.a=-1
this.b=d},
vQ:function vQ(d){this.a=d},
vR:function vR(d){this.a=d},
vS:function vS(d){this.a=d},
vT:function vT(d){this.a=d},
vU:function vU(d){this.a=d},
vV:function vV(d){this.a=d},
vW:function vW(d,e){this.a=d
this.b=e},
vX:function vX(d){this.a=d},
vY:function vY(d,e){this.a=d
this.b=e},
vZ:function vZ(d){this.a=d},
w_:function w_(d,e){this.a=d
this.b=e},
aQ1(d,e,f,g){var x=new A.r0(new Uint8Array(4))
x.a9c(d,e,f,g)
return x},
ka:function ka(d){this.a=d},
Oc:function Oc(d){this.a=d},
r0:function r0(d){this.a=d},
aaG(d,e,f){var x
if(e===f)return d
switch(e.a){case 0:if(d===0)x=0
else{x=B.E2.h(0,f)
x.toString}return x
case 1:switch(f.a){case 0:return d===0?0:1
case 1:return d
case 2:return d*5
case 3:return d*75
case 4:return d*21845
case 5:return d*1431655765
case 6:return d*42
case 7:return d*10922
case 8:return d*715827882
case 9:case 10:case 11:return d/3}break
case 2:switch(f.a){case 0:return d===0?0:1
case 1:return D.b.I(C.bc(d),1)
case 2:return d
case 3:return d*17
case 4:return d*4369
case 5:return d*286331153
case 6:return d*8
case 7:return d*2184
case 8:return d*143165576
case 9:case 10:case 11:return d/3}break
case 3:switch(f.a){case 0:return d===0?0:1
case 1:return D.b.I(C.bc(d),6)
case 2:return D.b.I(C.bc(d),4)
case 3:return d
case 4:return d*257
case 5:return d*16843009
case 6:return D.b.I(C.bc(d),1)
case 7:return d*128
case 8:return d*8421504
case 9:case 10:case 11:return d/255}break
case 4:switch(f.a){case 0:return d===0?0:1
case 1:return D.b.I(C.bc(d),14)
case 2:return D.b.I(C.bc(d),12)
case 3:return D.b.I(C.bc(d),8)
case 4:return d
case 5:return C.bc(d)<<8>>>0
case 6:return D.b.I(C.bc(d),9)
case 7:return D.b.I(C.bc(d),1)
case 8:return d*524296
case 9:case 10:case 11:return d/65535}break
case 5:switch(f.a){case 0:return d===0?0:1
case 1:return D.b.I(C.bc(d),30)
case 2:return D.b.I(C.bc(d),28)
case 3:return D.b.I(C.bc(d),24)
case 4:return D.b.I(C.bc(d),16)
case 5:return d
case 6:return D.b.I(C.bc(d),25)
case 7:return D.b.I(C.bc(d),17)
case 8:return D.b.I(C.bc(d),1)
case 9:case 10:case 11:return d/4294967295}break
case 6:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.b.I(C.bc(d),5)
case 2:return d<=0?0:D.b.I(C.bc(d),3)
case 3:return d<=0?0:C.bc(d)<<1>>>0
case 4:return d<=0?0:C.bc(d)*516
case 5:return d<=0?0:C.bc(d)*33818640
case 6:return d
case 7:return d*258
case 8:return d*16909320
case 9:case 10:case 11:return d/127}break
case 7:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.b.I(C.bc(d),15)
case 2:return d<=0?0:D.b.I(C.bc(d),11)
case 3:return d<=0?0:D.b.I(C.bc(d),7)
case 4:return d<=0?0:C.bc(d)<<1>>>0
case 5:return d<=0?0:C.bc(d)*131076
case 6:return D.b.I(C.bc(d),8)
case 7:return d
case 8:return C.bc(d)*65538
case 9:case 10:case 11:return d/32767}break
case 8:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.b.I(C.bc(d),29)
case 2:return d<=0?0:D.b.I(C.bc(d),27)
case 3:return d<=0?0:D.b.I(C.bc(d),23)
case 4:return d<=0?0:D.b.I(C.bc(d),16)
case 5:return d<=0?0:C.bc(d)<<1>>>0
case 6:return D.b.I(C.bc(d),24)
case 7:return D.b.I(C.bc(d),16)
case 8:return d
case 9:case 10:case 11:return d/2147483647}break
case 9:case 10:case 11:switch(f.a){case 0:return d===0?0:1
case 1:return D.c.C(D.c.b5(d,0,1)*3)
case 2:return D.c.C(D.c.b5(d,0,1)*15)
case 3:return D.c.C(D.c.b5(d,0,1)*255)
case 4:return D.c.C(D.c.b5(d,0,1)*65535)
case 5:return D.c.C(D.c.b5(d,0,1)*4294967295)
case 6:return D.c.C(d<0?D.c.b5(d,-1,1)*128:D.c.b5(d,-1,1)*127)
case 7:return D.c.C(d<0?D.c.b5(d,-1,1)*32768:D.c.b5(d,-1,1)*32767)
case 8:return D.c.C(d<0?D.c.b5(d,-1,1)*2147483648:D.c.b5(d,-1,1)*2147483647)
case 9:case 10:case 11:return d}break}},
hy:function hy(d,e){this.a=d
this.b=e},
Nw:function Nw(d,e){this.a=d
this.b=e},
Cm(d){var x,w=new A.rm(C.t(y.N,y.P))
w.a9m(d)
x=d.b
if(x!=null)w.b=new Uint8Array(C.bn(x))
return w},
agc(d){var x=new A.rm(C.t(y.N,y.P))
x.fz(0,d)
return x},
rm:function rm(d){this.b=null
this.a=d},
a2P:function a2P(d,e){this.a=d
this.b=e},
X(d,e,f){return new A.R3(d,e)},
R3:function R3(d,e){this.a=d
this.b=e},
oB:function oB(d){this.a=d},
aio:function aio(d){this.a=d},
aRk(d){var x=new A.lo(C.t(y.p,y.r),new A.oB(C.t(y.N,y.P)))
x.ast(d)
return x},
lo:function lo(d,e){this.a=d
this.b=e},
aip:function aip(d){this.a=d},
aiq:function aiq(d){this.a=d},
aRr(d,e){var x=new A.rW(new Uint16Array(e))
x.a9r(d,e)
return x},
b3B(d){var x=new Uint32Array(1)
x[0]=d
return new A.oC(x)},
aRm(d,e){var x=new A.oC(new Uint32Array(e))
x.a9o(d,e)
return x},
aRn(d,e){var x,w=J.mQ(e,y.i)
for(x=0;x<e;++x)w[x]=new A.xM(d.J(),d.J())
return new A.rS(w)},
aRq(d,e){var x=new A.rV(new Int16Array(e))
x.a9q(d,e)
return x},
aRo(d,e){var x=new A.rT(new Int32Array(e))
x.a9p(d,e)
return x},
aRp(d,e){var x,w,v,u,t=J.mQ(e,y.i)
for(x=0;x<e;++x){w=d.J()
v=$.d4()
v.$flags&2&&C.f(v)
v[0]=w
w=$.eE()
u=w[0]
v[0]=d.J()
t[x]=new A.xM(u,w[0])}return new A.rU(t)},
aRs(d,e){var x=new A.wH(new Float32Array(e))
x.a9s(d,e)
return x},
aRl(d,e){var x=new A.wF(new Float64Array(e))
x.a9n(d,e)
return x},
fM:function fM(d,e){this.a=d
this.b=e},
el:function el(){},
mL:function mL(d){this.a=d},
rR:function rR(d){this.a=d},
rW:function rW(d){this.a=d},
oC:function oC(d){this.a=d},
rS:function rS(d){this.a=d},
oD:function oD(d){this.a=d},
rV:function rV(d){this.a=d},
rT:function rT(d){this.a=d},
rU:function rU(d){this.a=d},
wH:function wH(d){this.a=d},
wF:function wF(d){this.a=d},
wI:function wI(d){this.a=d},
wG:function wG(d){this.a=d},
aPG(d){var x,w,v=new A.ac1()
if(!A.aPH(d))C.aa(A.aI("Not a bitmap file."))
d.d+=2
x=d.J()
w=$.d4()
w.$flags&2&&C.f(w)
w[0]=x
x=$.eE()
d.d+=4
w[0]=d.J()
v.b=x[0]
return v},
aPH(d){if(d.c-d.d<2)return!1
return A.aO(d,null,0).O()===19778},
b0y(d,e){var x,w,v,u,t=e==null?A.aPG(d):e,s=d.d,r=d.J(),q=d.J(),p=$.d4()
p.$flags&2&&C.f(p)
p[0]=q
q=$.eE()
x=q[0]
p[0]=d.J()
q=q[0]
w=d.O()
v=d.O()
u=d.J()
if(u>=14)C.aa(A.aI("Unsupported BMP compression type: "+u))
u=B.xL[u]
d.J()
p[0]=d.J()
p[0]=d.J()
p=d.J()
d.J()
s=new A.qQ(t,x,q,r,w,v,u,p,s)
s.Pu(d,e)
return s},
fB:function fB(d,e){this.a=d
this.b=e},
ac1:function ac1(){this.b=$},
qQ:function qQ(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k
_.ay=_.ax=_.at=_.as=$
_.ch=null
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=$
_.fy=l},
Nz:function Nz(d){this.a=$
this.b=null
this.c=d},
ac0:function ac0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ae1:function ae1(d){this.a=$
this.b=null
this.c=d},
adK:function adK(){},
adL:function adL(){},
R5:function R5(d){this.c=d},
Sp:function Sp(d,e,f,g){var _=this
_.r=d
_.w=e
_.x=f
_.b=_.a=0
_.c=g},
wp:function wp(d,e){this.a=d
this.b=e},
rp:function rp(d,e){this.a=d
this.b=e},
R6:function R6(){var _=this
_.w=_.r=_.f=_.d=_.c=_.b=_.a=$},
aQR(d,e,f,g){var x,w
switch(d.a){case 1:return new A.aiN(f,e)
case 2:return new A.Sr(f,g==null?1:g,e)
case 3:return new A.Sr(f,g==null?16:g,e)
case 4:x=g==null?32:g
w=new A.aiL(f,x,e)
w.a9v(e,f,x)
return w
case 5:return new A.aiM(f,g==null?16:g,e)
case 6:return new A.Sp(f,g==null?32:g,!1,e)
case 7:return new A.Sp(f,g==null?32:g,!0,e)
default:throw C.e(A.aI("Invalid compression type: "+d.j(0)))}},
kl:function kl(d,e){this.a=d
this.b=e},
agd:function agd(){},
aiK:function aiK(){},
b2K(d,e,f,g){var x,w,v,u,t,s,r,q
if(e===0){if(g!==0)throw C.e(A.aI("Incomplete huffman data"))
return}x=d.d
w=d.J()
v=d.J()
d.d+=4
u=d.J()
t=!0
if(w<65537)t=v>=65537
if(t)throw C.e(A.aI("Invalid huffman table size"))
d.d+=4
s=C.aZ(65537,0,!1,y.p)
r=J.f7(16384,y._)
for(q=0;q<16384;++q)r[q]=new A.R7()
A.b2L(d,e-20,w,v,s)
if(u>8*(e-(d.d-x)))throw C.e(A.aI("Error in header for Huffman-encoded data (invalid number of bits)."))
A.b2H(s,w,v,r)
A.b2J(s,r,d,u,v,g,f)},
b2J(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p="Error in Huffman-encoded data (invalid code).",o=C.b([0,0],y.t),n=f.d+D.b.bV(g+7,8)
for(x=0;f.d<n;){A.aLp(o,f)
for(;w=o[1],w>=14;){v=e[D.b.jD(o[0],w-14)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=A.aLq(v.b,h,o,f,j,x,i)}else{if(v.c==null)throw C.e(A.aI(p))
for(t=0;t<v.b;++t){s=d[v.c[t]]&63
while(!0){w=o[1]
if(!(w<s&&f.d<n))break
A.aLp(o,f)}if(w>=s){u=v.c
w-=s
if(d[u[t]]>>>6===(D.b.jD(o[0],w)&D.b.c_(1,s)-1)>>>0){o[1]=w
r=A.aLq(u[t],h,o,f,j,x,i)
x=r
break}}}if(t===v.b)throw C.e(A.aI(p))}}}q=8-g&7
o[0]=D.b.I(o[0],q)
o[1]=o[1]-q
for(;w=o[1],w>0;){v=e[D.b.cA(o[0],14-w)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=A.aLq(v.b,h,o,f,j,x,i)}else throw C.e(A.aI(p))}if(x!==i)throw C.e(A.aI("Error in Huffman-encoded data (decoded data are shorter than expected)."))},
aLq(d,e,f,g,h,i,j){var x,w,v,u,t,s="Error in Huffman-encoded data (decoded data are longer than expected)."
if(d===e){if(f[1]<8)A.aLp(f,g)
x=f[1]-8
f[1]=x
w=D.b.jD(f[0],x)&255
if(i+w>j)throw C.e(A.aI(s))
v=h[i-1]
for(x=h.$flags|0;u=w-1,w>0;w=u,i=t){t=i+1
x&2&&C.f(h)
h[i]=v}}else{if(i<j){h.toString
t=i+1
h.$flags&2&&C.f(h)
h[i]=d}else throw C.e(A.aI(s))
i=t}return i},
b2H(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n="Error in Huffman-encoded data (invalid code table entry)."
for(x=y.t,w=y.p;e<=f;++e){v=d[e]
u=v>>>6
t=v&63
if(D.b.dv(u,t)!==0)throw C.e(A.aI(n))
if(t>14){s=g[D.b.d5(u,t-14)]
if(s.a!==0)throw C.e(A.aI(n))
v=++s.b
r=s.c
if(r!=null){v=C.aZ(v,0,!1,w)
s.c=v
for(q=s.b-1,p=0;p<q;++p)v[p]=r[p]}else s.c=C.b([0],x)
s.c[s.b-1]=e}else if(t!==0){v=14-t
o=D.b.cA(u,v)
for(p=D.b.cA(1,v);p>0;--p,++o){s=g[o]
if(s.a!==0||s.c!=null)throw C.e(A.aI(n))
s.a=t
s.b=e}}}},
b2L(d,e,f,g,h){var x,w,v,u,t,s="Error in Huffman-encoded data (unexpected end of code table data).",r="Error in Huffman-encoded data (code table is longer than expected).",q=d.d,p=C.b([0,0],y.t)
for(x=g+1;f<=g;++f){if(d.d-q>e)throw C.e(A.aI(s))
w=A.aQS(6,p,d)
h[f]=w
if(w===63){if(d.d-q>e)throw C.e(A.aI(s))
v=A.aQS(8,p,d)+6
if(f+v>x)throw C.e(A.aI(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}else if(w>=59){v=w-59+2
if(f+v>x)throw C.e(A.aI(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}}A.b2I(h)},
b2I(d){var x,w,v,u,t,s=C.aZ(59,0,!1,y.p)
for(x=0;x<65537;++x){w=d[x]
s[w]=s[w]+1}for(v=0,x=58;x>0;--x,v=u){u=v+s[x]>>>1
s[x]=v}for(x=0;x<65537;++x){t=d[x]
if(t>0){w=s[t]
s[t]=w+1
d[x]=(t|w<<6)>>>0}}},
aLp(d,e){d[0]=((d[0]<<8|e.bj())&-1)>>>0
d[1]=(d[1]+8&-1)>>>0},
aQS(d,e,f){var x
for(;x=e[1],x<d;){e[0]=((e[0]<<8|J.k(f.a,f.d++))&-1)>>>0
e[1]=(e[1]+8&-1)>>>0}x-=d
e[1]=x
return(D.b.jD(e[0],x)&D.b.c_(1,d)-1)>>>0},
R7:function R7(){this.b=this.a=0
this.c=null},
b2M(d){var x=new A.R8(C.b([],y.m))
x.Pw(d)
return x},
b2N(d){var x=A.ba(d,!1,null,0)
if(x.J()!==20000630)return!1
if(x.bj()!==2)return!1
if((x.l4()&4294967289)>>>0!==0)return!1
return!0},
R8:function R8(d){var _=this
_.b=_.a=0
_.c=d
_.d=null
_.e=$},
aRH(d,e,f){var x=new A.Sq(d,C.b([],y.Q),C.t(y.N,y.x),B.r2,e)
x.a9h(d,e,f)
return x},
Cq:function Cq(){},
agf:function agf(d,e){this.a=d
this.b=e},
Sq:function Sq(d,e,f,g,h){var _=this
_.a=d
_.b=null
_.c=e
_.d=0
_.e=f
_.r=$
_.x=_.w=0
_.at=$
_.ax=g
_.ay=null
_.ch=$
_.CW=null
_.cx=0
_.cy=null
_.db=h
_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=null
_.k2=$
_.k3=null},
aiL:function aiL(d,e,f){var _=this
_.r=null
_.w=d
_.x=e
_.y=$
_.z=null
_.b=_.a=0
_.c=f},
a51:function a51(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
aiM:function aiM(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
aiN:function aiN(d,e){var _=this
_.r=null
_.w=d
_.b=_.a=0
_.c=e},
Sr:function Sr(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
age:function age(){this.a=null},
aR8(d){var x=new Uint8Array(d*3)
return new A.CM(A.b3n(d),d,null,new A.lB(x,d,3))},
b3m(d){return new A.CM(d.a,d.b,d.c,A.aSG(d.d))},
b3n(d){var x
for(x=1;x<=8;++x)if(D.b.c_(1,x)>=d)return x
return 0},
CM:function CM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
CN:function CN(){},
Ss:function Ss(){var _=this
_.e=_.d=_.c=_.b=_.a=$
_.f=null
_.r=80
_.w=0
_.x=-1
_.y=$},
RC:function RC(d){var _=this
_.b=_.a=0
_.e=_.c=null
_.r=d},
ahE:function ahE(){var _=this
_.a=null
_.e=_.d=_.c=_.b=0
_.f=null
_.r=0
_.w=null
_.y=_.x=$
_.z=null
_.Q=0
_.as=null
_.ay=_.ax=_.at=0
_.ch=null
_.dy=_.dx=_.db=_.cy=_.cx=_.CW=0},
aRh(d){var x,w,v,u
if(d.O()!==0)return null
x=d.O()
if(x>=3)return null
if(B.Ri[x]===B.rq)return null
w=d.O()
v=J.mQ(w,y.gx)
for(u=0;u<w;++u){J.k(d.a,d.d++)
J.k(d.a,d.d++)
J.k(d.a,d.d++);++d.d
d.O()
d.O()
v[u]=new A.Sf(d.J(),d.J())}return new A.ail(w,v)},
wD:function wD(d,e){this.a=d
this.b=e},
ail:function ail(d,e){this.d=d
this.e=e},
Sf:function Sf(d,e){this.d=d
this.e=e},
aij:function aij(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k
_.ay=_.ax=_.at=_.as=$
_.ch=null
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=$
_.fy=l},
aik:function aik(){this.b=this.a=null},
Od:function Od(d,e,f){this.e=d
this.f=e
this.r=f},
rL:function rL(){},
rM:function rM(d){this.a=d},
CZ:function CZ(d){this.a=d},
beh(b1,b2,b3,b4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
if($.aNB==null){x=new Uint8Array(768)
for(w=0;w<256;++w)x[256+w]=w
for(w=256;w<512;++w)x[256+w]=255
$.aNB=x}for(v=b4.$flags|0,w=0;w<64;++w){u=b2[w]
t=b1[w]
v&2&&C.f(b4)
b4[w]=u*t}for(s=0,w=0;w<8;++w,s+=8){u=1+s
t=b4[u]
if(t===0&&b4[2+s]===0&&b4[3+s]===0&&b4[4+s]===0&&b4[5+s]===0&&b4[6+s]===0&&b4[7+s]===0){u=D.b.I(5793*b4[s]+512,10)
r=(u&2147483647)-((u&2147483648)>>>0)
v&2&&C.f(b4)
b4[s]=r
b4[s+1]=r
b4[s+2]=r
b4[s+3]=r
b4[s+4]=r
b4[s+5]=r
b4[s+6]=r
b4[s+7]=r
continue}q=D.b.I(5793*b4[s]+128,8)
p=(q&2147483647)-((q&2147483648)>>>0)
q=4+s
o=D.b.I(5793*b4[q]+128,8)
n=(o&2147483647)-((o&2147483648)>>>0)
o=2+s
m=b4[o]
l=6+s
k=b4[l]
j=7+s
i=b4[j]
h=D.b.I(2896*(t-i)+128,8)
g=(h&2147483647)-((h&2147483648)>>>0)
i=D.b.I(2896*(t+i)+128,8)
f=(i&2147483647)-((i&2147483648)>>>0)
i=3+s
t=b4[i]<<4
e=(t&2147483647)-((t&2147483648)>>>0)
t=5+s
h=b4[t]<<4
d=(h&2147483647)-((h&2147483648)>>>0)
h=D.b.I(p-n+1,1)
r=(h&2147483647)-((h&2147483648)>>>0)
h=D.b.I(p+n+1,1)
p=(h&2147483647)-((h&2147483648)>>>0)
h=D.b.I(m*3784+k*1567+128,8)
h=(h&2147483647)-((h&2147483648)>>>0)
a0=D.b.I(m*1567-k*3784+128,8)
m=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.b.I(g-d+1,1)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
a1=D.b.I(g+d+1,1)
g=(a1&2147483647)-((a1&2147483648)>>>0)
a1=D.b.I(f+e+1,1)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
a2=D.b.I(f-e+1,1)
e=(a2&2147483647)-((a2&2147483648)>>>0)
a2=D.b.I(p-h+1,1)
a2=(a2&2147483647)-((a2&2147483648)>>>0)
h=D.b.I(p+h+1,1)
p=(h&2147483647)-((h&2147483648)>>>0)
h=D.b.I(r-m+1,1)
h=(h&2147483647)-((h&2147483648)>>>0)
a3=D.b.I(r+m+1,1)
n=(a3&2147483647)-((a3&2147483648)>>>0)
a3=D.b.I(g*2276+a1*3406+2048,12)
r=(a3&2147483647)-((a3&2147483648)>>>0)
a1=D.b.I(g*3406-a1*2276+2048,12)
g=(a1&2147483647)-((a1&2147483648)>>>0)
a1=D.b.I(e*799+a0*4017+2048,12)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
a0=D.b.I(e*4017-a0*799+2048,12)
e=(a0&2147483647)-((a0&2147483648)>>>0)
v&2&&C.f(b4)
b4[s]=p+r
b4[j]=p-r
b4[u]=n+a1
b4[l]=n-a1
b4[o]=h+e
b4[t]=h-e
b4[i]=a2+g
b4[q]=a2-g}for(w=0;w<8;++w){a4=8+w
a5=16+w
a6=24+w
a7=32+w
a8=40+w
a9=48+w
b0=56+w
u=b4[a4]
if(u===0&&b4[a5]===0&&b4[a6]===0&&b4[a7]===0&&b4[a8]===0&&b4[a9]===0&&b4[b0]===0){u=D.b.I(5793*b4[w]+8192,14)
r=(u&2147483647)-((u&2147483648)>>>0)
v&2&&C.f(b4)
b4[w]=r
b4[a4]=r
b4[a5]=r
b4[a6]=r
b4[a7]=r
b4[a8]=r
b4[a9]=r
b4[b0]=r
continue}t=D.b.I(5793*b4[w]+2048,12)
p=(t&2147483647)-((t&2147483648)>>>0)
t=D.b.I(5793*b4[a7]+2048,12)
n=(t&2147483647)-((t&2147483648)>>>0)
m=b4[a5]
k=b4[a9]
t=b4[b0]
q=D.b.I(2896*(u-t)+2048,12)
g=(q&2147483647)-((q&2147483648)>>>0)
t=D.b.I(2896*(u+t)+2048,12)
f=(t&2147483647)-((t&2147483648)>>>0)
e=b4[a6]
d=b4[a8]
t=D.b.I(p-n+1,1)
r=(t&2147483647)-((t&2147483648)>>>0)
t=D.b.I(p+n+1,1)
p=(t&2147483647)-((t&2147483648)>>>0)
t=D.b.I(m*3784+k*1567+2048,12)
u=(t&2147483647)-((t&2147483648)>>>0)
t=D.b.I(m*1567-k*3784+2048,12)
m=(t&2147483647)-((t&2147483648)>>>0)
t=D.b.I(g-d+1,1)
t=(t&2147483647)-((t&2147483648)>>>0)
q=D.b.I(g+d+1,1)
g=(q&2147483647)-((q&2147483648)>>>0)
q=D.b.I(f+e+1,1)
q=(q&2147483647)-((q&2147483648)>>>0)
o=D.b.I(f-e+1,1)
e=(o&2147483647)-((o&2147483648)>>>0)
o=D.b.I(p-u+1,1)
o=(o&2147483647)-((o&2147483648)>>>0)
u=D.b.I(p+u+1,1)
p=(u&2147483647)-((u&2147483648)>>>0)
u=D.b.I(r-m+1,1)
u=(u&2147483647)-((u&2147483648)>>>0)
l=D.b.I(r+m+1,1)
n=(l&2147483647)-((l&2147483648)>>>0)
l=D.b.I(g*2276+q*3406+2048,12)
r=(l&2147483647)-((l&2147483648)>>>0)
q=D.b.I(g*3406-q*2276+2048,12)
g=(q&2147483647)-((q&2147483648)>>>0)
q=D.b.I(e*799+t*4017+2048,12)
q=(q&2147483647)-((q&2147483648)>>>0)
t=D.b.I(e*4017-t*799+2048,12)
e=(t&2147483647)-((t&2147483648)>>>0)
v&2&&C.f(b4)
b4[w]=p+r
b4[b0]=p-r
b4[a4]=n+q
b4[a9]=n-q
b4[a5]=u+e
b4[a8]=u-e
b4[a6]=o+g
b4[a7]=o-g}for(v=$.aNB,u=b3.$flags|0,w=0;w<64;++w){v.toString
t=D.b.I(b4[w]+8,4)
t=v[384+((t&2147483647)-((t&2147483648)>>>0))]
u&2&&C.f(b3)
b3[w]=t}},
bdB(d9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6=null,d7="ifd0",d8=d9.w
if(d8.h(0,d7).a.aq(0,274)){x=d8.h(0,d7).geO(0)
x.toString
w=x}else w=0
x=d9.d
v=x.e
v.toString
x=x.d
x.toString
u=w>=5&&w<=8
if(u)t=x
else t=v
if(u)s=v
else s=x
r=A.dx(d6,d6,B.y,0,B.aa,s,d6,0,3,d6,B.y,t,!1)
r.e=A.Cm(d8)
r.goT().h(0,d7).seO(0,d6)
r.c=d9.r
q=x-1
p=v-1
switch(w){case 2:o=new A.aJ6(r,p)
break
case 3:o=new A.aJ7(r,p,q)
break
case 4:o=new A.aJ8(r,q)
break
case 5:o=new A.aJ9(r)
break
case 6:o=new A.aJa(r,q)
break
case 7:o=new A.aJb(r,q,p)
break
case 8:o=new A.aJc(r,p)
break
default:o=r.ga4g()
break}d8=d9.as
switch(d8.length){case 1:n=d8[0]
m=n.e
l=n.f
k=n.r
for(j=0;j<x;++j){i=m[D.b.dv(j,k)]
for(h=0;h<v;++h){g=i[D.b.dv(h,l)]
o.$5(h,j,g,g,g)}}break
case 3:f=d9.c
e=f==null||f.d===1
n=d8[0]
d=d8[1]
a0=d8[2]
a1=n.e
a2=d.e
a3=a0.e
l=n.f
k=n.r
a4=d.f
a5=d.r
a6=a0.f
a7=a0.r
for(j=0;j<x;++j){a8=D.b.dv(j,k)
a9=D.b.dv(j,a5)
b0=D.b.dv(j,a7)
i=a1[a8]
b1=a2[a9]
b2=a3[b0]
for(h=0;h<v;++h){b3=D.b.dv(h,l)
b4=D.b.dv(h,a4)
b5=D.b.dv(h,a6)
b6=i[b3]
b7=b1[b4]
b8=b2[b5]
if(e){g=b6<<8>>>0
b9=b7-128
c0=b8-128
d8=D.b.I(g+359*c0,8)
b6=D.b.b5((d8&2147483647)-((d8&2147483648)>>>0),0,255)
d8=D.b.I(g-88*b9-183*c0,8)
b7=D.b.b5((d8&2147483647)-((d8&2147483648)>>>0),0,255)
d8=D.b.I(g+454*b9,8)
b8=D.b.b5((d8&2147483647)-((d8&2147483648)>>>0),0,255)}o.$5(h,j,b6,b7,b8)}}break
case 4:f=d9.c
if(f==null)throw C.e(A.aI("Unsupported color mode (4 components)"))
f=f.d===0
n=d8[0]
d=d8[1]
a0=d8[2]
c1=d8[3]
a1=n.e
a2=d.e
a3=a0.e
c2=c1.e
l=n.f
k=n.r
a4=d.f
a5=d.r
a6=a0.f
a7=a0.r
c3=c1.f
c4=c1.r
for(j=0;j<x;++j){a8=D.b.dv(j,k)
a9=D.b.dv(j,a5)
b0=D.b.dv(j,a7)
c5=D.b.dv(j,c4)
i=a1[a8]
b1=a2[a9]
b2=a3[b0]
c6=c2[c5]
for(h=0;h<v;++h){b3=D.b.dv(h,l)
b4=D.b.dv(h,a4)
b5=D.b.dv(h,a6)
c7=D.b.dv(h,c3)
if(f){c8=i[b3]
c9=b1[b4]
g=b2[b5]
d0=c6[c7]}else{g=i[b3]
b9=b1[b4]
c0=b2[b5]
d0=c6[c7]
d1=c0-128
d2=b9-128
d3=g<<8>>>0
d8=D.b.I(d3+359*d1,8)
c8=255-D.b.b5((d8&2147483647)-((d8&2147483648)>>>0),0,255)
d8=D.b.I(d3-88*d2-183*d1,8)
c9=255-D.b.b5((d8&2147483647)-((d8&2147483648)>>>0),0,255)
d8=D.b.I(d3+454*d2,8)
g=255-D.b.b5((d8&2147483647)-((d8&2147483648)>>>0),0,255)}d8=D.b.I(c8*d0,8)
d4=D.b.I(c9*d0,8)
d5=D.b.I(g*d0,8)
o.$5(h,j,(d8&2147483647)-((d8&2147483648)>>>0),(d4&2147483647)-((d4&2147483648)>>>0),(d5&2147483647)-((d5&2147483648)>>>0))}}break
default:throw C.e(A.aI("Unsupported color mode"))}return r},
aJ6:function aJ6(d,e){this.a=d
this.b=e},
aJ7:function aJ7(d,e,f){this.a=d
this.b=e
this.c=f},
aJ8:function aJ8(d,e){this.a=d
this.b=e},
aJ9:function aJ9(d){this.a=d},
aJa:function aJa(d,e){this.a=d
this.b=e},
aJb:function aJb(d,e,f){this.a=d
this.b=e
this.c=f},
aJc:function aJc(d,e){this.a=d
this.b=e},
aiW:function aiW(){this.d=null},
t0:function t0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.y=_.x=_.w=_.r=_.f=_.e=$},
aLS(){var x=C.aZ(4,null,!1,y.bC),w=C.b([],y.f8),v=y.ez,u=J.oN(0,v)
v=J.oN(0,v)
return new A.aiX(new A.rm(C.t(y.N,y.P)),x,w,u,v,C.b([],y.E))},
aiX:function aiX(d,e,f,g,h,i){var _=this
_.b=_.a=$
_.r=_.e=_.d=_.c=null
_.w=d
_.x=e
_.y=f
_.z=g
_.Q=h
_.as=i},
zs:function zs(d){this.a=d
this.b=0},
SA:function SA(d,e){var _=this
_.e=_.d=_.c=_.b=null
_.r=_.f=0
_.x=_.w=$
_.y=d
_.z=e},
aiY:function aiY(){this.b=this.a=0},
aiZ:function aiZ(){this.r=this.f=$},
SB:function SB(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.f=$
_.r=null
_.y=f
_.z=g
_.Q=h
_.as=i
_.at=j
_.ax=k
_.cx=_.CW=_.ch=_.ay=0
_.cy=$},
x2:function x2(){},
xz:function xz(d,e){this.a=d
this.b=e},
ES:function ES(d,e){this.a=d
this.b=e},
ET:function ET(){},
St:function St(d,e,f,g,h,i,j,k,l){var _=this
_.y=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aRI(){var x=y.N
return new A.aiO(C.t(x,x),C.b([],y.dm),C.b([],y.t))},
pd:function pd(d,e){this.a=d
this.b=e},
aoA:function aoA(){},
aiO:function aiO(d,e,f){var _=this
_.c=_.b=_.a=0
_.d=-1
_.r=_.f=0
_.z=_.x=_.w=null
_.Q=""
_.at=null
_.ax=d
_.CW=1
_.cy=e
_.db=f},
W0:function W0(d){var _=this
_.a=d
_.c=_.b=0
_.d=$
_.e=0},
pe:function pe(d,e){this.a=d
this.b=e},
tH:function tH(d){this.b=this.a=0
this.e=d},
aoB:function aoB(d){this.b=this.a=null
this.c=d},
aoC:function aoC(){},
Wf:function Wf(){this.a=null},
Wg:function Wg(){this.a=null},
lE:function lE(){},
Wi:function Wi(){this.a=null},
Wj:function Wj(){this.a=null},
Wm:function Wm(){this.a=null},
Wn:function Wn(){this.a=null},
F1:function F1(d){this.b=d},
Wl:function Wl(){this.c=null},
apl:function apl(){var _=this
_.w=_.r=_.f=_.e=$},
xG:function xG(d){this.a=d
this.c=null},
aMr(d){var x=new A.apn(C.b([],y.l),C.t(y.p,y.fh))
x.a9C(d)
return x},
aMv(d,e,f,g){var x=d/255,w=e/255,v=f/255,u=g/255,t=w*(1-v),s=x*(1-u)
return D.c.C(D.c.b5((2*x<v?2*w*x+t+s:u*v-2*(v-x)*(u-w)+t+s)*255,0,255))},
apo(d,e){if(e===0)return 0
return D.b.C(D.b.b5(D.c.C(255*(1-(1-d/255)/(e/255))),0,255))},
apq(d,e){return D.b.C(D.b.b5(d+e-255,0,255))},
aMx(d,e){return D.b.C(D.b.b5(255-(255-e)*(255-d),0,255))},
app(d,e){if(e===255)return 255
return D.c.C(D.c.b5(d/255/(1-e/255)*255,0,255))},
aMy(d,e){var x=d/255,w=e/255,v=1-w
return D.c.aS(255*(v*w*x+w*(1-v*(1-x))))},
aMt(d,e){var x=e/255,w=d/255
if(w<0.5)return D.c.aS(510*x*w)
else return D.c.aS(255*(1-2*(1-x)*(1-w)))},
aMz(d,e){if(e<128)return A.apo(d,2*e)
else return A.app(d,2*(e-128))},
aMu(d,e){var x
if(e<128)return A.apq(d,2*e)
else{x=2*(e-128)
return x+d>255?255:d+x}},
aMw(d,e){return e<128?Math.min(d,2*e):Math.max(d,2*(e-128))},
aMs(d,e){return D.c.aS(e+d-2*e*d/255)},
il(d,e,f){var x
if(d==null)x=0
else x=f===1?d[e]:(d[e]<<8|d[e+1])>>>8
return x},
aT3(b5,b6,b7,b8,b9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4=C.t(y.p,y.fW)
for(x=b9.length,w=0;v=b9.length,w<v;b9.length===x||(0,C.z)(b9),++w){u=b9[w]
b4.l(0,u.a,u)}if(b6===8)t=1
else t=b6===16?2:-1
s=A.dx(b3,b3,B.y,0,B.aa,b8,b3,0,v,b3,B.y,b7,!1)
if(t===-1)throw C.e(A.aI("PSD: unsupported bit depth: "+C.q(b6)))
r=b4.h(0,0)
q=b4.h(0,1)
p=b4.h(0,2)
o=b4.h(0,-1)
n=C.b([0,0,0],y.t)
m=-t
for(x=s.a,x=x.gU(x),l=v>=5,k=v===4,j=v>=2,v=v>=4;x.q();){i=x.gM(x)
m+=t
switch(b5){case B.HX:i.sX(0,A.il(r.c,m,t))
i.sa5(A.il(q.c,m,t))
i.sa6(0,A.il(p.c,m,t))
i.sa4(0,v?A.il(o.c,m,t):255)
if(i.ga4(i)!==0){i.sX(0,(i.gX(i)+i.ga4(i)-255)*255/i.ga4(i))
i.sa5((i.ga5()+i.ga4(i)-255)*255/i.ga4(i))
i.sa6(0,(i.ga6(i)+i.ga4(i)-255)*255/i.ga4(i))}break
case B.HZ:h=A.il(r.c,m,t)
g=A.il(q.c,m,t)
f=A.il(p.c,m,t)
e=v?A.il(o.c,m,t):255
d=((h*100>>>8)+16)/116
a0=(g-128)/500+d
a1=d-(f-128)/200
a2=Math.pow(d,3)
d=a2>0.008856?a2:(d-0.13793103448275862)/7.787
a3=Math.pow(a0,3)
a0=a3>0.008856?a3:(a0-0.13793103448275862)/7.787
a4=Math.pow(a1,3)
a1=a4>0.008856?a4:(a1-0.13793103448275862)/7.787
a0=a0*95.047/100
d=d*100/100
a1=a1*108.883/100
a5=a0*3.240454836+d*-1.53713885+a1*-0.498531547
a6=a0*-0.96926639+d*1.87601093+a1*0.041556082
a7=a0*0.05564342+d*-0.20402585+a1*1.05722516
a5=a5>0.0031308?1.055*Math.pow(a5,0.4166666666666667)-0.055:12.92*a5
a6=a6>0.0031308?1.055*Math.pow(a6,0.4166666666666667)-0.055:12.92*a6
a7=a7>0.0031308?1.055*Math.pow(a7,0.4166666666666667)-0.055:12.92*a7
a8=[D.c.aS(D.c.b5(a5*255,0,255)),D.c.aS(D.c.b5(a6*255,0,255)),D.c.aS(D.c.b5(a7*255,0,255))]
i.sX(0,a8[0])
i.sa5(a8[1])
i.sa6(0,a8[2])
i.sa4(0,e)
break
case B.HW:a9=A.il(r.c,m,t)
e=j?A.il(o.c,m,t):255
i.sX(0,a9)
i.sa5(a9)
i.sa6(0,a9)
i.sa4(0,e)
break
case B.HY:b0=A.il(r.c,m,t)
b1=A.il(q.c,m,t)
d=A.il(p.c,m,t)
b2=A.il(b4.h(0,k?-1:3).c,m,t)
e=l?A.il(o.c,m,t):255
A.aWA(255-b0,255-b1,255-d,255-b2,n)
i.sX(0,n[0])
i.sa5(n[1])
i.sa6(0,n[2])
i.sa4(0,e)
break
default:throw C.e(A.aI("Unhandled color mode: "+C.q(b5)))}}return s},
kz:function kz(d,e){this.a=d
this.b=e},
apn:function apn(d,e){var _=this
_.b=_.a=0
_.d=_.c=null
_.e=$
_.r=_.f=null
_.w=d
_.x=$
_.y=null
_.z=e
_.as=$
_.ay=_.ax=_.at=null},
Wh:function Wh(){},
Wk:function Wk(d,e,f){var _=this
_.b=_.a=null
_.f=_.e=_.d=_.c=$
_.r=null
_.as=_.y=_.w=$
_.ay=d
_.ch=e
_.cx=null
_.cy=f},
b5I(d,e){var x,w
switch(d){case"lsct":x=new A.Wl()
w=e.c-e.d
e.J()
if(w>=12){if(e.ep(4)!=="8BIM")C.aa(A.aI("Invalid key in layer additional data"))
x.c=e.ep(4)}if(w>=16)e.J()
return x
default:return new A.F1(e)}},
xH:function xH(){},
apm:function apm(){this.a=null},
Wp:function Wp(){},
nd:function nd(d,e,f){this.a=d
this.b=e
this.c=f},
fS:function fS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
F2:function F2(){var _=this
_.Q=_.z=_.y=_.f=_.d=_.b=_.a=0},
xI:function xI(d){var _=this
_.b=0
_.c=d
_.Q=_.r=_.f=0},
Wo:function Wo(){this.y=this.b=this.a=0},
ne(d,e){return(B.jE[d>>>8]<<17|B.jE[e>>>8]<<16|B.jE[d&255]<<1|B.jE[e&255])>>>0},
jH:function jH(d){var _=this
_.a=d
_.b=0
_.c=!1
_.d=0
_.e=!1
_.f=0
_.r=!1},
apr:function apr(){this.b=this.a=null},
YW:function YW(d){var _=this
_.b=_.a=0
_.c=d
_.Q=_.z=_.y=_.x=_.f=_.e=0
_.as=null
_.ax=0},
hS:function hS(d,e){this.a=d
this.b=e},
avE:function avE(){this.a=null
this.b=$},
avM:function avM(d){this.a=d
this.c=this.b=0},
YZ:function YZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=null
_.f=h},
aMV(d,e,f){var x=new A.avO(e,d),w=y.u
x.e=C.aZ(e,null,!1,w)
x.f=C.aZ(e,null,!1,w)
return x},
avO:function avO(d,e){var _=this
_.a=d
_.c=e
_.d=0
_.f=_.e=null
_.r=$
_.x=_.w=null
_.y=0
_.z=2
_.as=0
_.at=null},
Z_:function Z_(d,e,f,g){var _=this
_.a=d
_.c=_.b=0
_.d=e
_.w=_.r=_.f=_.e=1
_.x=f
_.y=g
_.z=!1
_.Q=1
_.at=_.as=$
_.ch=_.ay=0
_.cx=_.CW=null
_.db=_.cy=$
_.dy=1
_.fx=_.fr=0
_.id=null
_.k3=_.k2=_.k1=$},
ux:function ux(d,e){this.a=d
this.b=e},
eT:function eT(d,e){this.a=d
this.b=e},
jQ:function jQ(d,e){this.a=d
this.b=e},
avP:function avP(d){var _=this
_.b=_.a=0
_.d=null
_.f=d},
aS6(){return new A.ajN(new Uint8Array(4096))},
ajN:function ajN(d){var _=this
_.a=9
_.d=_.c=_.b=0
_.w=_.r=_.f=_.e=$
_.x=d
_.z=_.y=$
_.Q=null
_.as=$},
avN:function avN(){this.b=this.a=null
this.c=$},
aN0(d,e){var x=new Int32Array(4),w=new Int32Array(4),v=new Int8Array(4),u=new Int8Array(4),t=C.aZ(8,null,!1,y.eW),s=C.aZ(4,null,!1,y.dP)
return new A.awp(d,e,new A.awv(),new A.awy(),new A.awr(x,w),new A.awA(v,u),t,s,new Uint8Array(4))},
aUw(d,e,f){if(f===0)if(d===0)return e===0?6:5
else return e===0?4:0
return f},
awp:function awp(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=$
_.d=null
_.e=$
_.f=f
_.r=g
_.w=h
_.x=i
_.as=_.Q=_.z=_.y=0
_.ax=_.at=null
_.ch=_.ay=$
_.cx=_.CW=null
_.cy=$
_.db=j
_.dy=k
_.fr=null
_.fy=_.fx=$
_.go=null
_.id=l
_.p3=_.p2=_.p1=_.ok=_.k4=_.k3=_.k2=_.k1=$
_.R8=_.p4=null
_.x2=_.x1=_.to=_.ry=_.rx=_.RG=$
_.xr=null
_.y2=_.y1=0
_.b2=$
_.b6=null
_.B=$
_.a1=_.a3=null
_.ae=$},
awB:function awB(){},
aUu(d){var x=new A.Hl(d)
x.b=254
x.c=0
x.d=-8
return x},
Hl:function Hl(d){var _=this
_.a=d
_.d=_.c=_.b=$
_.e=!1},
cf(d,e,f){return D.b.fC(D.b.I(d+2*e+f+2,2),32)},
b89(d){var x,w=C.b([A.cf(J.k(d.a,d.d+-33),J.k(d.a,d.d+-32),J.k(d.a,d.d+-31)),A.cf(J.k(d.a,d.d+-32),J.k(d.a,d.d+-31),J.k(d.a,d.d+-30)),A.cf(J.k(d.a,d.d+-31),J.k(d.a,d.d+-30),J.k(d.a,d.d+-29)),A.cf(J.k(d.a,d.d+-30),J.k(d.a,d.d+-29),J.k(d.a,d.d+-28))],y.t)
for(x=0;x<4;++x)d.pa(x*32,4,w)},
b81(d){var x=J.k(d.a,d.d+-33),w=J.k(d.a,d.d+-1),v=J.k(d.a,d.d+31),u=J.k(d.a,d.d+63),t=J.k(d.a,d.d+95),s=A.aO(d,null,0),r=s.yV(),q=A.cf(x,w,v)
r.$flags&2&&C.f(r)
r[0]=16843009*q
s.d+=32
q=s.yV()
r=A.cf(w,v,u)
q.$flags&2&&C.f(q)
q[0]=16843009*r
s.d+=32
r=s.yV()
q=A.cf(v,u,t)
r.$flags&2&&C.f(r)
r[0]=16843009*q
s.d+=32
q=s.yV()
r=A.cf(u,t,t)
q.$flags&2&&C.f(q)
q[0]=16843009*r},
b8_(d){var x,w,v,u
for(x=4,w=0;w<4;++w)x+=J.k(d.a,d.d+(w-32))+J.k(d.a,d.d+(-1+w*32))
x=D.b.I(x,3)
for(w=0;w<4;++w){v=d.a
u=d.d+w*32
J.kZ(v,u,u+4,x)}},
aN1(d,e){var x,w,v,u,t,s=255-J.k(d.a,d.d+-33)
for(x=0,w=0;w<e;++w){v=s+J.k(d.a,d.d+(x-1))
for(u=0;u<e;++u){t=$.iE()[v+J.k(d.a,d.d+(-32+u))]
J.b7(d.a,d.d+(x+u),t)}x+=32}},
b87(d){A.aN1(d,4)},
b88(d){A.aN1(d,8)},
b86(d){A.aN1(d,16)},
b85(d){var x,w=J.k(d.a,d.d+-1),v=J.k(d.a,d.d+31),u=J.k(d.a,d.d+63),t=J.k(d.a,d.d+95),s=J.k(d.a,d.d+-33),r=J.k(d.a,d.d+-32),q=J.k(d.a,d.d+-31),p=J.k(d.a,d.d+-30),o=J.k(d.a,d.d+-29)
d.l(0,96,A.cf(v,u,t))
x=A.cf(w,v,u)
d.l(0,97,x)
d.l(0,64,x)
x=A.cf(s,w,v)
d.l(0,98,x)
d.l(0,65,x)
d.l(0,32,x)
x=A.cf(r,s,w)
d.l(0,99,x)
d.l(0,66,x)
d.l(0,33,x)
d.l(0,0,x)
x=A.cf(q,r,s)
d.l(0,67,x)
d.l(0,34,x)
d.l(0,1,x)
x=A.cf(p,q,r)
d.l(0,35,x)
d.l(0,2,x)
d.l(0,3,A.cf(o,p,q))},
b84(d){var x,w=J.k(d.a,d.d+-32),v=J.k(d.a,d.d+-31),u=J.k(d.a,d.d+-30),t=J.k(d.a,d.d+-29),s=J.k(d.a,d.d+-28),r=J.k(d.a,d.d+-27),q=J.k(d.a,d.d+-26),p=J.k(d.a,d.d+-25)
d.l(0,0,A.cf(w,v,u))
x=A.cf(v,u,t)
d.l(0,32,x)
d.l(0,1,x)
x=A.cf(u,t,s)
d.l(0,64,x)
d.l(0,33,x)
d.l(0,2,x)
x=A.cf(t,s,r)
d.l(0,96,x)
d.l(0,65,x)
d.l(0,34,x)
d.l(0,3,x)
x=A.cf(s,r,q)
d.l(0,97,x)
d.l(0,66,x)
d.l(0,35,x)
x=A.cf(r,q,p)
d.l(0,98,x)
d.l(0,67,x)
d.l(0,99,A.cf(q,p,p))},
b8b(d){var x=J.k(d.a,d.d+-1),w=J.k(d.a,d.d+31),v=J.k(d.a,d.d+63),u=J.k(d.a,d.d+-33),t=J.k(d.a,d.d+-32),s=J.k(d.a,d.d+-31),r=J.k(d.a,d.d+-30),q=J.k(d.a,d.d+-29),p=D.b.fC(D.b.I(u+t+1,1),32)
d.l(0,65,p)
d.l(0,0,p)
p=D.b.fC(D.b.I(t+s+1,1),32)
d.l(0,66,p)
d.l(0,1,p)
p=D.b.fC(D.b.I(s+r+1,1),32)
d.l(0,67,p)
d.l(0,2,p)
d.l(0,3,D.b.fC(D.b.I(r+q+1,1),32))
d.l(0,96,A.cf(v,w,x))
d.l(0,64,A.cf(w,x,u))
p=A.cf(x,u,t)
d.l(0,97,p)
d.l(0,32,p)
p=A.cf(u,t,s)
d.l(0,98,p)
d.l(0,33,p)
p=A.cf(t,s,r)
d.l(0,99,p)
d.l(0,34,p)
d.l(0,35,A.cf(s,r,q))},
b8a(d){var x,w=J.k(d.a,d.d+-32),v=J.k(d.a,d.d+-31),u=J.k(d.a,d.d+-30),t=J.k(d.a,d.d+-29),s=J.k(d.a,d.d+-28),r=J.k(d.a,d.d+-27),q=J.k(d.a,d.d+-26),p=J.k(d.a,d.d+-25)
d.l(0,0,D.b.fC(D.b.I(w+v+1,1),32))
x=D.b.fC(D.b.I(v+u+1,1),32)
d.l(0,64,x)
d.l(0,1,x)
x=D.b.fC(D.b.I(u+t+1,1),32)
d.l(0,65,x)
d.l(0,2,x)
x=D.b.fC(D.b.I(t+s+1,1),32)
d.l(0,66,x)
d.l(0,3,x)
d.l(0,32,A.cf(w,v,u))
x=A.cf(v,u,t)
d.l(0,96,x)
d.l(0,33,x)
x=A.cf(u,t,s)
d.l(0,97,x)
d.l(0,34,x)
x=A.cf(t,s,r)
d.l(0,98,x)
d.l(0,35,x)
d.l(0,67,A.cf(s,r,q))
d.l(0,99,A.cf(r,q,p))},
b82(d){var x,w=J.k(d.a,d.d+-1),v=J.k(d.a,d.d+31),u=J.k(d.a,d.d+63),t=J.k(d.a,d.d+95)
d.l(0,0,D.b.fC(D.b.I(w+v+1,1),32))
x=D.b.fC(D.b.I(v+u+1,1),32)
d.l(0,32,x)
d.l(0,2,x)
x=D.b.fC(D.b.I(u+t+1,1),32)
d.l(0,64,x)
d.l(0,34,x)
d.l(0,1,A.cf(w,v,u))
x=A.cf(v,u,t)
d.l(0,33,x)
d.l(0,3,x)
x=A.cf(u,t,t)
d.l(0,65,x)
d.l(0,35,x)
d.l(0,99,t)
d.l(0,98,t)
d.l(0,97,t)
d.l(0,96,t)
d.l(0,66,t)
d.l(0,67,t)},
b80(d){var x=J.k(d.a,d.d+-1),w=J.k(d.a,d.d+31),v=J.k(d.a,d.d+63),u=J.k(d.a,d.d+95),t=J.k(d.a,d.d+-33),s=J.k(d.a,d.d+-32),r=J.k(d.a,d.d+-31),q=J.k(d.a,d.d+-30),p=D.b.fC(D.b.I(x+t+1,1),32)
d.l(0,34,p)
d.l(0,0,p)
p=D.b.fC(D.b.I(w+x+1,1),32)
d.l(0,66,p)
d.l(0,32,p)
p=D.b.fC(D.b.I(v+w+1,1),32)
d.l(0,98,p)
d.l(0,64,p)
d.l(0,96,D.b.fC(D.b.I(u+v+1,1),32))
d.l(0,3,A.cf(s,r,q))
d.l(0,2,A.cf(t,s,r))
p=A.cf(x,t,s)
d.l(0,35,p)
d.l(0,1,p)
p=A.cf(w,x,t)
d.l(0,67,p)
d.l(0,33,p)
p=A.cf(v,w,x)
d.l(0,99,p)
d.l(0,65,p)
d.l(0,97,A.cf(u,v,w))},
b8m(d){var x
for(x=0;x<16;++x)d.kY(x*32,16,d,-32)},
b8k(d){var x,w,v,u,t
for(x=0,w=16;w>0;--w){v=J.k(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.kZ(u,t,t+16,v)
x+=32}},
awt(d,e){var x,w,v
for(x=0;x<16;++x){w=e.a
v=e.d+x*32
J.kZ(w,v,v+16,d)}},
b8c(d){var x,w
for(x=16,w=0;w<16;++w)x+=J.k(d.a,d.d+(-1+w*32))+J.k(d.a,d.d+(w-32))
A.awt(D.b.I(x,5),d)},
b8e(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.k(d.a,d.d+(-1+w*32))
A.awt(D.b.I(x,4),d)},
b8d(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.k(d.a,d.d+(w-32))
A.awt(D.b.I(x,4),d)},
b8f(d){A.awt(128,d)},
b8n(d){var x
for(x=0;x<8;++x)d.kY(x*32,8,d,-32)},
b8l(d){var x,w,v,u,t
for(x=0,w=0;w<8;++w){v=J.k(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.kZ(u,t,t+8,v)
x+=32}},
awu(d,e){var x,w,v
for(x=0;x<8;++x){w=e.a
v=e.d+x*32
J.kZ(w,v,v+8,d)}},
b8g(d){var x,w
for(x=8,w=0;w<8;++w)x+=J.k(d.a,d.d+(w-32))+J.k(d.a,d.d+(-1+w*32))
A.awu(D.b.I(x,4),d)},
b8h(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.k(d.a,d.d+(w-32))
A.awu(D.b.I(x,3),d)},
b8i(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.k(d.a,d.d+(-1+w*32))
A.awu(D.b.I(x,3),d)},
b8j(d){A.awu(128,d)},
pS(d,e,f,g,h){var x=e+f+g*32,w=J.k(d.a,d.d+x)+D.b.I(h,3)
if(!((w&-256)>>>0===0))w=w<0?0:255
d.l(0,x,w)},
aws(d,e,f,g,h){A.pS(d,0,0,e,f+g)
A.pS(d,0,1,e,f+h)
A.pS(d,0,2,e,f-h)
A.pS(d,0,3,e,f-g)},
b83(){var x,w,v,u
if(!$.aUv){for(x=-255;x<=255;++x){w=$.ab1()
v=255+x
u=x<0?-x:x
w.$flags&2&&C.f(w)
w[v]=u
u=$.aKo()
w=D.b.I(w[v],1)
u.$flags&2&&C.f(u)
u[v]=w}for(x=-1020;x<=1020;++x){w=$.aKp()
if(x<-128)v=-128
else v=x>127?127:x
w.$flags&2&&C.f(w)
w[1020+x]=v}for(x=-112;x<=112;++x){w=$.aKq()
if(x<-16)v=-16
else v=x>15?15:x
w.$flags&2&&C.f(w)
w[112+x]=v}for(x=-255;x<=510;++x){w=$.iE()
if(x<0)v=0
else v=x>255?255:x
w.$flags&2&&C.f(w)
w[255+x]=v}$.aUv=!0}},
awq:function awq(){},
b7Z(){var x,w=J.f7(3,y.D)
for(x=0;x<3;++x)w[x]=new Uint8Array(11)
return new A.Hk(w)},
b8D(){var x,w,v,u,t=new Uint8Array(3),s=J.f7(4,y.c7)
for(x=y.dd,w=0;w<4;++w){v=J.f7(8,x)
for(u=0;u<8;++u)v[u]=A.b7Z()
s[w]=v}D.k.eW(t,0,3,255)
return new A.awz(t,s)},
awv:function awv(){this.d=$},
awy:function awy(){},
awA:function awA(d,e){var _=this
_.b=_.a=!1
_.c=!0
_.d=d
_.e=e},
Hk:function Hk(d){this.a=d},
awz:function awz(d,e){this.a=d
this.b=e},
awr:function awr(d,e){var _=this
_.a=$
_.b=null
_.d=_.c=$
_.e=d
_.f=e},
uC:function uC(){var _=this
_.b=_.a=0
_.c=!1
_.d=0},
Zo:function Zo(){this.b=this.a=0},
Zq:function Zq(d,e,f){this.a=d
this.b=e
this.c=f},
Zp:function Zp(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=null
_.f=$},
Zr:function Zr(d,e,f){this.a=d
this.b=e
this.c=f},
aN2(d,e){var x,w=C.b([],y.F),v=C.b([],y.H),u=new Uint32Array(2),t=new A.Zm(d,u)
u=t.e=J.d5(D.aJ.gaj(u),0,null)
x=d.bj()
u.$flags&2&&C.f(u)
u[0]=x
x=d.bj()
u.$flags&2&&C.f(u)
u[1]=x
x=d.bj()
u.$flags&2&&C.f(u)
u[2]=x
x=d.bj()
u.$flags&2&&C.f(u)
u[3]=x
x=d.bj()
u.$flags&2&&C.f(u)
u[4]=x
x=d.bj()
u.$flags&2&&C.f(u)
u[5]=x
x=d.bj()
u.$flags&2&&C.f(u)
u[6]=x
x=d.bj()
u.$flags&2&&C.f(u)
u[7]=x
t.b=!1
return new A.Hm(t,e,w,v)},
pT(d,e){return D.b.I(d+D.b.c_(1,e)-1,e)},
Hm:function Hm(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=null
_.w=_.r=_.f=0
_.x=null
_.Q=_.z=_.y=0
_.as=null
_.at=0
_.ax=f
_.ay=null
_.ch=g
_.CW=0
_.cx=null
_.cy=$
_.db=0
_.dx=null
_.fr=_.dy=0},
Su:function Su(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=null
_.w=_.r=_.f=0
_.x=null
_.Q=_.z=_.y=0
_.as=null
_.at=0
_.ax=f
_.ay=null
_.ch=g
_.CW=0
_.cx=null
_.cy=$
_.db=0
_.dx=null
_.fr=_.dy=0},
Zm:function Zm(d,e){var _=this
_.a=0
_.b=!0
_.c=d
_.d=e
_.e=$},
aww:function aww(d,e){this.a=d
this.b=e},
nC(d,e){return((d^e)>>>1&2139062143)+((d&e)>>>0)},
uE(d){if(d<0)return 0
if(d>255)return 255
return d},
awx(d,e,f){return Math.abs(e-f)-Math.abs(d-f)},
b8o(d,e,f){return 4278190080},
b8p(d,e,f){return d},
b8u(d,e,f){return e[f]},
b8v(d,e,f){return e[f+1]},
b8w(d,e,f){return e[f-1]},
b8x(d,e,f){var x=e[f]
return A.nC(A.nC(d,e[f+1]),x)},
b8y(d,e,f){return A.nC(d,e[f-1])},
b8z(d,e,f){return A.nC(d,e[f])},
b8A(d,e,f){return A.nC(e[f-1],e[f])},
b8B(d,e,f){return A.nC(e[f],e[f+1])},
b8q(d,e,f){var x=e[f-1],w=e[f],v=e[f+1]
return A.nC(A.nC(d,x),A.nC(w,v))},
b8r(d,e,f){var x=e[f],w=e[f-1]
return A.awx(x>>>24,d>>>24,w>>>24)+A.awx(x>>>16&255,d>>>16&255,w>>>16&255)+A.awx(x>>>8&255,d>>>8&255,w>>>8&255)+A.awx(x&255,d&255,w&255)<=0?x:d},
b8s(d,e,f){var x=e[f],w=e[f-1]
return(A.uE((d>>>24)+(x>>>24)-(w>>>24))<<24|A.uE((d>>>16&255)+(x>>>16&255)-(w>>>16&255))<<16|A.uE((d>>>8&255)+(x>>>8&255)-(w>>>8&255))<<8|A.uE((d&255)+(x&255)-(w&255)))>>>0},
b8t(d,e,f){var x,w,v,u=e[f],t=e[f-1],s=A.nC(d,u)
u=s>>>24
x=s>>>16&255
w=s>>>8&255
v=s>>>0&255
return(A.uE(u+D.b.bV(u-(t>>>24),2))<<24|A.uE(x+D.b.bV(x-(t>>>16&255),2))<<16|A.uE(w+D.b.bV(w-(t>>>8&255),2))<<8|A.uE(v+D.b.bV(v-(t&255),2)))>>>0},
uD:function uD(d,e){this.a=d
this.b=e},
Zn:function Zn(d){var _=this
_.a=d
_.c=_.b=0
_.d=null
_.e=0},
awO:function awO(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=0
_.r=1
_.w=!1
_.x=$
_.y=!1},
Hs:function Hs(){},
Sv:function Sv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=_.f=$
_.w=1
_.y=_.x=$},
aLI(d){var x,w=J.mQ(d,y.h)
for(x=0;x<d;++x)w[x]=new A.RX()
return new A.CX(w,0)},
b3q(){var x,w,v=J.f7(5,y.fa)
for(x=0;x<5;++x)v[x]=A.aLI(0)
w=J.f7(64,y.j)
for(x=0;x<64;++x)w[x]=new A.RY()
return new A.CU(v,w)},
RX:function RX(){this.b=this.a=0},
RY:function RY(){this.b=this.a=0},
CX:function CX(d,e){this.a=d
this.b=e},
CU:function CU(d,e){var _=this
_.a=d
_.b=!1
_.c=0
_.e=_.d=!1
_.f=e},
CY:function CY(){var _=this
_.c=_.b=_.a=null
_.e=_.d=0},
S_:function S_(d){this.a=d
this.b=null},
yS:function yS(d,e){this.a=d
this.b=e},
Zz:function Zz(d,e){var _=this
_.b=_.a=0
_.c=null
_.e=_.d=!1
_.f=d
_.r=null
_.w=""
_.y=0
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
Sw:function Sw(d,e){var _=this
_.b=_.a=0
_.c=null
_.e=_.d=!1
_.f=d
_.r=null
_.w=""
_.y=0
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
awP:function awP(){this.b=this.a=null},
aRg(d){return new A.mJ(d.a,d.b,D.k.i3(d.c,0))},
Se:function Se(d,e){this.a=d
this.b=e},
mJ:function mJ(d,e,f){this.a=d
this.b=e
this.c=f},
dx(d,e,f,g,h,i,j,k,l,m,n,o,p){var x,w=new A.mN(null,null,null,d,k,h,g,0)
w.ge5().push(w)
w.c=j
if(e!=null)w.e=A.Cm(e)
x=!1
if(m==null)if(p)x=w.gbF()===B.ch||w.gbF()===B.cG||w.gbF()===B.cH||w.gbF()===B.y||w.gbF()===B.b_
w.Ra(o,i,f,l,x?w.acm(f,n,l):m)
return w},
Sh(d,e,f,g){var x,w,v,u,t=null,s=d.e
s=s==null?t:A.Cm(s)
x=d.c
x=x==null?t:A.aRg(x)
w=d.w
v=d.r
u=d.f
u=u==null?t:new A.ka(new Uint8Array(C.bn(u.a)))
w=new A.mN(t,x,s,u,v,w,d.y,d.z)
w.a9u(d,e,f,g)
return w},
oE(d,e,f){var x,w,v,u,t,s=null,r=d.a
r=r==null?s:r.kE(0,f)
x=d.e
x=x==null?s:A.Cm(x)
w=d.c
w=w==null?s:A.aRg(w)
v=d.w
u=d.r
t=d.f
t=t==null?s:new A.ka(new Uint8Array(C.bn(t.a)))
v=new A.mN(r,w,x,t,u,v,d.y,d.z)
v.a9t(d,e,f)
return v},
Rr:function Rr(d,e){this.a=d
this.b=e},
mN:function mN(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=null
_.c=e
_.d=null
_.e=f
_.f=g
_.r=h
_.w=i
_.x=$
_.y=j
_.z=k},
aiu:function aiu(d,e){this.a=d
this.b=e},
ait:function ait(){},
fN:function fN(){},
b3D(d,e,f){return new A.wL(new Uint16Array(d*e*f),d,e,f)},
wL:function wL(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
b3E(d,e,f){return new A.wM(new Float32Array(d*e*f),d,e,f)},
wM:function wM(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
D6:function D6(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
D7:function D7(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
D8:function D8(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
D9:function D9(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
wN:function wN(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
wO:function wO(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.a=f
_.b=g
_.c=h},
wP:function wP(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
b3F(d,e,f){return new A.wQ(new Uint32Array(d*e*f),d,e,f)},
wQ:function wQ(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
wR:function wR(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
aRu(d,e,f){return new A.wS(new Uint8Array(d*e*f),null,d,e,f)},
wS:function wS(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.a=f
_.b=g
_.c=h},
Sx:function Sx(d,e){this.a=d
this.b=e},
anS:function anS(){},
Vz:function Vz(d,e,f){this.c=d
this.a=e
this.b=f},
VA:function VA(d,e,f){this.c=d
this.a=e
this.b=f},
VB:function VB(d,e,f){this.c=d
this.a=e
this.b=f},
VC:function VC(d,e,f){this.c=d
this.a=e
this.b=f},
VD:function VD(d,e,f){this.c=d
this.a=e
this.b=f},
VE:function VE(d,e,f){this.c=d
this.a=e
this.b=f},
VF:function VF(d,e,f){this.c=d
this.a=e
this.b=f},
VG:function VG(d,e,f){this.c=d
this.a=e
this.b=f},
aSG(d){return new A.lB(new Uint8Array(C.bn(d.c)),d.a,d.b)},
lB:function lB(d,e,f){this.c=d
this.a=e
this.b=f},
aMe(d){return new A.tv(-1,0,-d.c,d)},
tv:function tv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aMf(d){return new A.tw(-1,0,-d.c,d)},
tw:function tw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aMg(d){return new A.tx(-1,0,-d.c,d)},
tx:function tx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aMh(d){return new A.ty(-1,0,-d.c,d)},
ty:function ty(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aMi(d){return new A.tz(-1,0,-d.c,d)},
tz:function tz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aMj(d){return new A.tA(-1,0,-d.c,d)},
tA:function tA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
kw(d,e,f,g,h){d.dg(0,e-1,f)
return new A.aop(d,e,e+g-1,f+h-1)},
aop:function aop(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.e=g},
EO(d){return new A.tB(-1,0,0,-1,0,d)},
tB:function tB(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aMk(d){return new A.tC(-1,0,-d.c,d)},
tC:function tC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
EP(d){return new A.tD(-1,0,0,-2,0,d)},
tD:function tD(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aMl(d){return new A.tE(-1,0,-d.c,d)},
tE:function tE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
EQ(d){return new A.tF(-1,0,0,-(d.c<<2>>>0),d)},
tF:function tF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aoq(d){return new A.tG(-1,0,-d.c,d)},
tG:function tG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cE:function cE(){},
bdl(d,e){switch(e.a){case 0:A.aaM(d)
break
case 1:A.bdp(d)
break
case 2:A.bdn(d)
break}return d},
bdp(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=d.ge5().length
for(x=y.g,w=0;w<h;++w){v=d.x
u=(v===$?d.x=C.b([],x):v)[w]
t=u.a
s=t==null
r=s?i:t.a
if(r==null)r=0
q=s?i:t.b
if(q==null)q=0
p=D.b.bV(q,2)
t=d.a
if((t==null?i:t.gcn())!=null)for(o=q-1,n=0;n<p;++n,--o)for(m=0;m<r;++m){t=u.a
l=t==null?i:t.bY(m,n,i)
if(l==null)l=new A.cE()
t=u.a
k=t==null?i:t.bY(m,o,i)
if(k==null)k=new A.cE()
j=l.gbT(l)
l.sbT(0,k.gbT(k))
k.sbT(0,j)}else for(o=q-1,n=0;n<p;++n,--o)for(m=0;m<r;++m){t=u.a
l=t==null?i:t.bY(m,n,i)
if(l==null)l=new A.cE()
t=u.a
k=t==null?i:t.bY(m,o,i)
if(k==null)k=new A.cE()
j=l.gX(l)
l.sX(0,k.gX(k))
k.sX(0,j)
j=l.ga5()
l.sa5(k.ga5())
k.sa5(j)
j=l.ga6(l)
l.sa6(0,k.ga6(k))
k.sa6(0,j)
j=l.ga4(l)
l.sa4(0,k.ga4(k))
k.sa4(0,j)}}return d},
aaM(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=d.ge5().length
for(x=y.g,w=0;w<g;++w){v=d.x
u=(v===$?d.x=C.b([],x):v)[w]
t=u.a
s=t==null
r=s?h:t.a
if(r==null)r=0
q=s?h:t.b
if(q==null)q=0
p=D.b.bV(r,2)
t=d.a
if((t==null?h:t.gcn())!=null)for(o=r-1,n=0;n<q;++n)for(m=o,l=0;l<p;++l,--m){t=u.a
k=t==null?h:t.bY(l,n,h)
if(k==null)k=new A.cE()
t=u.a
j=t==null?h:t.bY(m,n,h)
if(j==null)j=new A.cE()
i=k.gbT(k)
k.sbT(0,j.gbT(j))
j.sbT(0,i)}else for(o=r-1,n=0;n<q;++n)for(m=o,l=0;l<p;++l,--m){t=u.a
k=t==null?h:t.bY(l,n,h)
if(k==null)k=new A.cE()
t=u.a
j=t==null?h:t.bY(m,n,h)
if(j==null)j=new A.cE()
i=k.gX(k)
k.sX(0,j.gX(j))
j.sX(0,i)
i=k.ga5()
k.sa5(j.ga5())
j.sa5(i)
i=k.ga6(k)
k.sa6(0,j.ga6(j))
j.sa6(0,i)
i=k.ga4(k)
k.sa4(0,j.ga4(j))
j.sa4(0,i)}}return d},
bdn(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=d.ge5().length
for(x=y.g,w=0;w<f;++w){v=d.x
u=(v===$?d.x=C.b([],x):v)[w]
t=u.a
s=t==null
r=s?g:t.a
if(r==null)r=0
q=s?g:t.b
if(q==null)q=0
p=D.b.bV(q,2)
if((s?g:t.gcn())!=null)for(o=q-1,n=r-1,m=0;m<p;++m,--o)for(l=n,k=0;k<r;++k,--l){t=u.a
j=t==null?g:t.bY(k,m,g)
if(j==null)j=new A.cE()
t=u.a
i=t==null?g:t.bY(l,o,g)
if(i==null)i=new A.cE()
h=j.gbT(j)
j.sbT(0,i.gbT(i))
i.sbT(0,h)}else for(o=q-1,n=r-1,m=0;m<p;++m,--o)for(l=n,k=0;k<r;++k,--l){t=u.a
j=t==null?g:t.bY(k,m,g)
if(j==null)j=new A.cE()
t=u.a
i=t==null?g:t.bY(l,o,g)
if(i==null)i=new A.cE()
h=j.gX(j)
j.sX(0,i.gX(i))
i.sX(0,h)
h=j.ga5()
j.sa5(i.ga5())
i.sa5(h)
h=j.ga6(j)
j.sa6(0,i.ga6(i))
i.sa6(0,h)
h=j.ga4(j)
j.sa4(0,i.ga4(i))
i.sa4(0,h)}}return d},
agn:function agn(d,e){this.a=d
this.b=e},
aI(d){return new A.Si(d)},
Si:function Si(d){this.a=d},
ba(d,e,f,g){var x=J.at(d),w=x.gp(d)
x=f==null?x.gp(d):g+f
return new A.fj(d,g,Math.min(w,x),g,e)},
aO(d,e,f){var x=d.a,w=d.d,v=J.cd(x),u=e==null?d.c:d.d+f+e
return new A.fj(x,d.b,Math.min(v,u),w+f,d.e)},
fj:function fj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
anA(d){return new A.anz(new Uint8Array(d))},
anz:function anz(d){this.a=0
this.b=!1
this.c=d},
xM:function xM(d,e){this.a=d
this.b=e},
VL:function VL(){},
b50(d,e,f,g,h){var x=new A.ao1(C.aP(y.O),C.aP(y.v))
x.a9y(!0,e,f,!1,h)
return x},
ao8:function ao8(d,e){this.a=d
this.b=e},
ao1:function ao1(d,e){var _=this
_.b=1
_.c=d
_.e=_.d=$
_.y=null
_.Q=e
_.as=null},
ao3:function ao3(d){this.a=d},
ao2:function ao2(){},
ao4:function ao4(d,e){this.a=d
this.b=e},
aSN(d){var x,w,v,u,t,s,r,q=null,p=J.vk(D.k.gaj(d),d.byteOffset,d.byteLength)
for(x=q,w=0;v=q,u=q,t=q,w<p.byteLength;){for(;p.getUint8(w)===255;)++w
s=p.getUint8(w);++w
if(s===216)continue
if(s===217)break
if(208<=s&&s<=215)continue
if(s===1)continue
r=p.getUint16(w,!1)
w+=2
if(s>=192&&s<=194){u=p.getUint16(w+1,!1)
v=p.getUint16(w+3,!1)
t=p.getUint8(w+5)
break}if(s===238&&r>=14)if(p.getUint8(w)===65&&p.getUint8(w+1)===100&&p.getUint8(w+2)===111&&p.getUint8(w+3)===98&&p.getUint8(w+4)===101)x=p.getUint8(w+11)
w+=r-2}if(u==null)throw C.e("Unable to find a Jpeg image in the file")
return new A.ao7(v,u,t,x,A.b55(p))},
b55(d){var x,w
if(d.getUint8(0)!==255||d.getUint8(1)!==216)return C.t(y.z,y.A)
x=d.byteLength
for(w=2;w<x;){if(d.getUint8(w)!==255)return C.t(y.z,y.A)
if(d.getUint8(w+1)===225)return A.b56(d,w+4)
else w+=2+d.getUint16(w+2,!1)}return C.t(y.z,y.A)},
aSP(d,e,f,g){var x,w,v,u=D.aC===g,t=d.getUint16(f,u),s=C.t(y.z,y.A)
for(x=0;x<t;++x){w=f+x*12+2
v=B.a78.h(0,d.getUint16(w,u))
if(v!=null)s.l(0,v,A.b57(d,w,e,f,g))}return s},
b57(d,e,f,g,h){var x,w,v,u,t=D.aC===h,s=d.getUint16(e+2,t),r=d.getUint32(e+4,t),q=e+8,p=d.getUint32(q,t)+f
switch(s){case 1:case 7:if(r===1)return d.getUint8(q)
if(r>4)q=p
x=new Uint8Array(r)
for(w=0;w<r;++w)x[w]=d.getUint8(q+w)
return x
case 2:if(r>4)q=p
return A.aSO(d,q,r-1)
case 3:if(r===1)return d.getUint16(q,t)
if(r>2)q=p
x=new Uint16Array(r)
for(w=0;w<r;++w)x[w]=d.getUint16(q+w*2,t)
return x
case 4:if(r===1)return d.getUint32(q,t)
x=new Uint32Array(r)
for(w=0;w<r;++w)x[w]=d.getUint32(p+w*4,t)
return x
case 5:if(r===1)return C.b([d.getUint32(p,t),d.getUint32(p+4,t)],y.t)
x=C.b([],y.S)
for(v=y.t,w=0;w<r;++w){u=p+w*8
x.push(C.b([d.getUint32(u,t),d.getUint32(u+4,t)],v))}return x
case 9:if(r===1)return d.getInt32(q,t)
x=new Int32Array(r)
for(w=0;w<r;++w)x[w]=d.getInt32(p+w*4,t)
return x
case 10:if(r===1)return C.b([d.getInt32(p,t),d.getInt32(p+4,t)],y.t)
x=C.b([],y.S)
for(v=y.t,w=0;w<r;++w){u=p+w*8
x.push(C.b([d.getInt32(u,t),d.getInt32(u+4,t)],v))}return x
case 11:if(r===1)return d.getFloat32(q,t)
x=new Float32Array(r)
for(w=0;w<r;++w)x[w]=d.getFloat32(p+w*4,t)
return x
case 12:if(r===1)return d.getFloat64(q,t)
x=new Float64Array(r)
for(w=0;w<r;++w)x[w]=d.getFloat64(p+w*8,t)
return x}},
aSO(d,e,f){var x,w=J.mQ(f,y.p)
for(x=0;x<f;++x)w[x]=d.getUint8(e+x)
return D.a9.Ks(0,w,!0)},
b56(d,e){var x,w,v,u,t,s=null
if(A.aSO(d,e,4)!=="Exif")return s
x=e+6
if(d.getUint16(x,!1)===18761)w=D.aC
else{if(d.getUint16(x,!1)!==19789)return s
w=D.lF}v=D.aC===w
if(d.getUint16(x+2,v)!==42)return s
u=d.getUint32(x+4,v)
if(u<8)return s
t=A.aSP(d,x,x+u,w)
if(t.aq(0,B.nU))t.V(0,A.aSP(d,x,C.bc(x+t.h(0,B.nU)),w))
return t},
ao7:function ao7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aG:function aG(d,e){this.a=d
this.b=e},
VJ(d,e){var x=C.b([],e.i("u<0>"))
if(d!=null)D.d.V(x,d)
return new A.j0(x,e.i("j0<0>"))},
aSK(d){var x=C.a0(d).i("a9<1,dS>")
x=C.M(new C.a9(d,new A.anX(),x),x.i("aM.E"))
return A.VJ(x,y.C)},
anV(d){var x=C.a0(d).i("a9<1,ey>")
x=C.M(new C.a9(d,new A.anW(),x),x.i("aM.E"))
return A.VJ(x,y.eq)},
j0:function j0(d,e){this.a=d
this.$ti=e},
anX:function anX(){},
anW:function anW(){},
N8:function N8(){},
bR:function bR(){},
tt:function tt(d){this.a=d},
VN:function VN(){},
EG(d,e){var x=C.t(y.N,e)
if(d!=null)x.V(0,d)
return new A.ce(x,e.i("ce<0>"))},
tu(d,e){return new A.ce(d,e.i("ce<0>"))},
anY(d){var x=y.C
return A.tu(d.uu(d,new A.anZ(),y.N,x),x)},
ce:function ce(d,e){this.a=d
this.$ti=e},
anZ:function anZ(){},
ao_:function ao_(){},
ao0:function ao0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aSL(d,e,f,g,h){var x,w
if(e==null)x=new Uint8Array(0)
else x=e
w=h==null?C.t(y.N,y.K):h
return new A.EH(x,g,f,d,w)},
EH:function EH(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dS:function dS(d,e){this.a=d
this.b=e},
cY:function cY(d){this.a=d},
ey:function ey(d){this.a=d},
ik:function ik(d){this.a=d},
aod:function aod(d,e){this.a=d
this.b=e},
VR:function VR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dT:function dT(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.qx$=h
_.qy$=i
_.qz$=j
_.qA$=k
_.$ti=l},
a4Z:function a4Z(){},
xw:function xw(d){this.a=d
this.b=0},
aob:function aob(d,e){this.a=d
this.b=e},
pb:function pb(d,e,f){this.a=d
this.b=e
this.c=f},
VM:function VM(d,e){this.a=d
this.b=e},
jF:function jF(d,e,f,g){var _=this
_.c=d
_.e=e
_.a=f
_.b=g},
aoh:function aoh(d,e){this.a=d
this.b=e},
VS:function VS(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.qx$=g
_.qy$=h
_.qz$=i
_.qA$=j},
aog:function aog(){},
aoe:function aoe(){},
aof:function aof(){},
a5_:function a5_(){},
VO:function VO(d,e,f,g,h,i,j,k,l,m){var _=this
_.cx=d
_.x=e
_.y=!0
_.a=f
_.b=g
_.c=h
_.d=i
_.qx$=j
_.qy$=k
_.qz$=l
_.qA$=m},
aoc:function aoc(d,e){this.a=d
this.b=e},
zF:function zF(d){this.a=d},
VP:function VP(d,e,f){var _=this
_.b=$
_.c=d
_.d=e
_.e=f},
VK:function VK(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.db=null
_.fr=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.qx$=k
_.qy$=l
_.qz$=m
_.qA$=n},
ao5:function ao5(){},
b52(d,e,f,g,h,i){var x,w,v,u,t=A.aMc(d,i,f,h),s=t.c.a
s.l(0,"/BitsPerComponent",B.nX)
s.l(0,"/Name",new A.cY("/I"+t.a))
s.l(0,"/ColorSpace",B.nW)
s.l(0,"/SMask",new A.dS(A.b53(d,g,i,f,h).a,0))
x=i*f
w=new Uint8Array(x*3)
for(v=0;v<x;++v){s=v*3
u=v*4
w[s]=g[u]
w[s+1]=g[u+1]
w[s+2]=g[u+2]}t.cx.d9(w)
return t},
aSM(d,e,f){var x=e.YZ(B.y,!0,4).da(),w=e.gbO(0)
return A.b52(d,!0,e.gbz(0),x,f,w)},
b54(d,e){var x,w,v,u,t,s="/ColorSpace"
if(new A.x2().kW(e)){x=A.aSN(e)
w=x.a
w.toString
v=x.geO(0)
u=A.aMc(d,w,x.b,v)
w=u.c.a
w.l(0,"/BitsPerComponent",B.nX)
w.l(0,"/Name",new A.cY("/I"+u.a))
w.l(0,"/Intent",B.abL)
w.l(0,"/Filter",B.abO)
v=x.c
if(v===4){w.l(0,s,B.abQ)
if(x.d!==0)w.l(0,"/Decode",A.anV(C.b([1,0,1,0,1,0,1,0],y.t)))}else if(v===3)w.l(0,s,B.nW)
else w.l(0,s,B.Ec)
u.cx.d9(e)
return u}t=A.aWK(e)
if(t==null)throw C.e("Unable to decode image")
return A.aSM(d,t,B.e7)},
b53(d,e,f,g,h){var x,w,v,u=A.aMc(d,f,g,h),t=u.c.a
t.l(0,"/BitsPerComponent",B.nX)
t.l(0,"/Name",new A.cY("/I"+u.a))
t.l(0,"/ColorSpace",B.Ec)
x=f*g
w=new Uint8Array(x)
for(v=0;v<x;++v)w[v]=e[v*4+3]
u.cx.d9(w)
return u},
aMc(d,e,f,g){var x,w=new Uint8Array(65536),v=y.K,u=C.t(y.N,v)
u.l(0,"/Type",new A.cY("/XObject"))
v=A.tu(u,v)
u=d.b++
x=d.e
x===$&&C.a()
x=new A.EI(e,f,g,new A.xw(w),!0,d,u,0,v,x,C.b([],y.s),null,null,0)
d.c.H(0,x)
x.a9z(d,"/Image",!0)
v=v.a
v.l(0,"/Width",new A.ey(e))
v.l(0,"/Height",new A.ey(f))
return x},
kv:function kv(d,e){this.a=d
this.b=e},
EI:function EI(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.x1=d
_.x2=e
_.xr=f
_.cx=g
_.cy=h
_.x=i
_.y=!0
_.a=j
_.b=k
_.c=l
_.d=m
_.qx$=n
_.qy$=o
_.qz$=p
_.qA$=q},
ao6:function ao6(){},
eN:function eN(){},
b58(d,e,f){var x,w=new Uint8Array(65536),v=y.K,u=C.t(y.N,v)
if(f!=null)u.l(0,"/Type",new A.cY(f))
v=A.tu(u,v)
u=d.b++
x=d.e
x===$&&C.a()
x=new A.EJ(new A.xw(w),e,d,u,0,v,x,C.b([],y.s),null,null,0)
d.c.H(0,x)
return x},
EJ:function EJ(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.qx$=k
_.qy$=l
_.qz$=m
_.qA$=n},
b59(d,e,f){var x,w,v=C.b([],y.Y),u=C.b([],y.R),t=y.N,s=y.K
s=A.tu(C.aJ(["/Type",B.abI],t,s),s)
x=d.b++
w=d.e
w===$&&C.a()
w=new A.EK(f,v,u,C.t(y.O,y.d5),!1,!1,C.t(t,y.v),C.t(t,y.ew),C.t(t,y.aY),C.t(t,y.bE),!1,d,x,0,s,w,C.b([],y.s),null,null,0)
d.c.H(0,w)
v=d.d
v===$&&C.a()
v.cx.cx.push(w)
return w},
ao9:function ao9(d,e){this.a=d
this.b=e},
EK:function EK(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){var _=this
_.cx=d
_.db=e
_.dx=f
_.dy=g
_.aBO$=h
_.aBP$=i
_.auX$=j
_.auY$=k
_.auZ$=l
_.a_b$=m
_.L2$=n
_.x=o
_.y=!0
_.a=p
_.b=q
_.c=r
_.d=s
_.qx$=t
_.qy$=u
_.qz$=v
_.qA$=w},
aoa:function aoa(){},
JB:function JB(){},
VQ:function VQ(d,e,f,g,h,i,j,k,l,m){var _=this
_.cx=d
_.x=e
_.y=!0
_.a=f
_.b=g
_.c=h
_.d=i
_.qx$=j
_.qy$=k
_.qz$=l
_.qA$=m},
xx:function xx(){},
eO:function eO(d,e){this.a=d
this.b=e},
aMd:function aMd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
EM:function EM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
NF:function NF(d,e){this.a=d
this.b=e},
b28(){var x=C.b([],y.aG),w=A.b50(!0,null,B.abZ,!1,B.Ee)
return new A.aep(w,x)},
aep:function aep(d,e){this.a=d
this.c=e
this.d=!1},
h3:function h3(d,e){this.a=d
this.b=e},
rz:function rz(d){this.a=d},
b0n(d,e){var x,w,v=d===-1
if(v&&e===-1)return"Alignment.topLeft"
x=d===0
if(x&&e===-1)return"Alignment.topCenter"
w=d===1
if(w&&e===-1)return"Alignment.topRight"
if(v&&e===0)return"Alignment.centerLeft"
if(x&&e===0)return"Alignment.center"
if(w&&e===0)return"Alignment.centerRight"
if(v&&e===1)return"Alignment.bottomLeft"
if(x&&e===1)return"Alignment.bottomCenter"
if(w&&e===1)return"Alignment.bottomRight"
return"Alignment("+D.b.av(d,1)+", "+D.b.av(e,1)+")"},
aWw(d,e,f){var x,w,v,u,t,s,r=e.b
if(r<=0||e.a<=0||f.b<=0||f.a<=0)return B.Q0
switch(d.a){case 0:x=f
w=e
break
case 1:v=f.a
u=f.b
t=e.a
x=v/u>t/r?new A.eO(t*u/r,u):new A.eO(v,r*v/t)
w=e
break
case 2:v=f.a
u=f.b
t=e.a
w=v/u>t/r?new A.eO(t,t*u/v):new A.eO(r*v/u,r)
x=f
break
case 3:r=e.a
v=f.a
u=r*f.b/v
w=new A.eO(r,u)
x=new A.eO(v,u*v/r)
break
case 4:v=f.b
u=r*f.a/v
w=new A.eO(u,r)
x=new A.eO(u*v/r,v)
break
case 5:w=new A.eO(Math.min(e.a,f.a),Math.min(r,f.b))
x=w
break
case 6:s=e.a/r
v=f.b
x=r>v?new A.eO(v*s,v):e
r=f.a
if(x.a>r)x=new A.eO(r,r/s)
w=e
break
default:w=null
x=null}return new A.Rb(w,x)},
NE:function NE(d,e){this.b=d
this.d=e},
aeM:function aeM(){},
Cc:function Cc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abv:function abv(){},
abu:function abu(){},
Rb:function Rb(d,e){this.a=d
this.b=e},
b3C(d,e){return new A.D3(d,e)},
D3:function D3(d,e){this.b=d
this.c=e
this.a=null},
b4l(d){var x,w,v,u=A.aWP(d)
if(u==null)throw C.e(C.f2("Unable to guess the image type "+d.length+" bytes"))
if(u instanceof A.x2){x=A.aSN(d)
w=x.geO(0)
return new A.UY(d,null,x.a,x.b,w,C.t(y.p,y.V))}x=u.fF(d)
if(x==null)throw C.e(C.f2("Unable decode the image"))
w=x.gbO(x)
v=x.gbz(x)
return new A.UY(d,null,w,v,B.e7,C.t(y.p,y.V))},
ais:function ais(){},
UY:function UY(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
b4W(d,e,f){var x=new A.anL(f,B.aac,e,null,!1,null)
return new A.Vs(x,d)},
EB:function EB(d,e){this.a=d
this.b=e},
Vs:function Vs(d,e){this.a=d
this.b=e
this.c=null},
anL:function anL(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.f=g
_.r=h
_.w=i},
aU5(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4){var x,w,v,u,t=null
if(o==null)x=q!==B.eL&&r!==B.eM?j:t
else x=o
if(k==null)w=q!==B.eL&&r===B.eM?j:t
else w=k
if(n==null)v=q===B.eL&&r!==B.eM?j:t
else v=n
if(l==null)u=q===B.eL&&r===B.eM?j:t
else u=l
return new A.avB(!1,e,x,w,v,u,m,p,r,q,a1,a2,a4,s,d,f,g,h,i,a3)},
Rn:function Rn(d,e){this.a=d
this.b=e},
Rm:function Rm(d,e){this.a=d
this.b=e},
av3:function av3(d,e){this.a=d
this.b=e},
YG:function YG(d){this.a=d},
avB:function avB(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o
_.as=p
_.at=q
_.ax=r
_.ay=s
_.ch=t
_.CW=u
_.cx=v
_.cy=w},
YX:function YX(){},
w6:function w6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
wU:function wU(){},
ZA:function ZA(){},
aSm(d){return new Int8Array(d)},
b4F(d){return new Uint16Array(d)},
b7S(d){throw C.e(C.am("Uint64List not supported on the web."))},
b3K(d,e,f){return J.aKD(d,e,f)},
aUm(d,e){return J.i2(d,e,null)},
b2U(d){return J.aKA(d,0,null)},
b2V(d){return d.JO(0,0,null)},
bdy(d){var x,w,v,u,t=d.gp(0)
for(x=1,w=0;t>0;){v=3800>t?t:3800
t-=v
for(;--v,v>=0;){u=d.b
u.toString
x+=u[d.c++]
w+=x}x=D.b.b3(x,65521)
w=D.b.b3(w,65521)}return(w<<16|x)>>>0},
qA(d,e){var x,w,v=J.at(d),u=v.gp(d)
e^=4294967295
for(x=0;u>=8;){w=x+1
e=B.cL[(e^v.h(d,x))&255]^e>>>8
x=w+1
e=B.cL[(e^v.h(d,w))&255]^e>>>8
w=x+1
e=B.cL[(e^v.h(d,x))&255]^e>>>8
x=w+1
e=B.cL[(e^v.h(d,w))&255]^e>>>8
w=x+1
e=B.cL[(e^v.h(d,x))&255]^e>>>8
x=w+1
e=B.cL[(e^v.h(d,w))&255]^e>>>8
w=x+1
e=B.cL[(e^v.h(d,x))&255]^e>>>8
x=w+1
e=B.cL[(e^v.h(d,w))&255]^e>>>8
u-=8}if(u>0)do{w=x+1
e=B.cL[(e^v.h(d,x))&255]^e>>>8
if(--u,u>0){x=w
continue}else break}while(!0)
return(e^4294967295)>>>0},
aNU(d,e,f,g,h,i,j,k,l,m,n){var x,w,v,u,t,s,r,q
if(m==null)m=0
if(n==null)n=0
if(l==null)l=e.gbO(0)
if(k==null)k=e.gbz(0)
if(h==null)h=d.gbO(0)<e.gbO(0)?d.gbO(0):e.gbO(0)
if(g==null)g=d.gbz(0)<e.gbz(0)?d.gbz(0):e.gbz(0)
x=f===B.i8
if(!x&&d.gxL())d=d.YY(d.guy())
w=k/g
v=l/h
u=y.p
t=J.f7(g,u)
for(s=0;s<g;++s)t[s]=n+D.c.C(s*w)
r=J.f7(h,u)
for(q=0;q<h;++q)r[q]=m+D.c.C(q*v)
if(x)A.baV(e,d,i,j,h,g,r,t,null,B.pW)
else A.baG(e,d,i,j,h,g,r,t,f,!1,null,B.pW)
return d},
baV(d,e,f,g,h,i,j,k,l,m){var x,w,v,u,t,s,r,q,p,o=e.gbO(0),n=e.gbz(0)
for(x=null,w=0;w<i;++w)for(v=g+w,u=v>=n,t=0;t<h;++t){s=f+t
if(s>=o||u)continue
r=j[t]
q=k[w]
p=d.a
x=p==null?null:p.bY(r,q,x)
if(x==null)x=new A.cE()
e.pw(s,v,x)}},
baG(d,e,f,g,h,i,j,k,l,m,n,o){var x,w,v,u,t,s,r
for(x=null,w=0;w<i;++w)for(v=g+w,u=0;u<h;++u){t=j[u]
s=k[w]
r=d.a
x=r==null?null:r.bY(t,s,x)
if(x==null)x=new A.cE()
A.bde(e,f+u,v,x,l,!1,n,o)}},
bde(a6,a7,a8,a9,b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
if(!a6.a0j(a7,a8))return a6
if(b0===B.i8||a6.gxL())if(a6.a0j(a7,a8)){a6.iC(a7,a8).em(0,a9)
return a6}x=a9.ge6()
w=a9.gdX()
v=a9.ge4()
u=a9.gp(a9)<4?1:a9.ge9()
if(u===0)return a6
t=a6.iC(a7,a8)
s=t.ge6()
r=t.gdX()
q=t.ge4()
p=t.ge9()
switch(b0.a){case 0:return a6
case 1:break
case 2:x=Math.max(s,x)
w=Math.max(r,w)
v=Math.max(q,v)
break
case 3:x=1-(1-x)*(1-s)
w=1-(1-w)*(1-r)
v=1-(1-v)*(1-q)
break
case 4:o=u*p
n=1-p
m=1-u
l=x*n+s*m
k=w*n+r*m
j=v*n+q*m
m=D.c.b5(u,0.01,1)
n=u<0
i=n?0:1
h=D.c.b5(x/m*i,0,0.99)
i=D.c.b5(u,0.01,1)
m=n?0:1
g=D.c.b5(w/i*m,0,0.99)
m=D.c.b5(u,0.01,1)
n=n?0:1
f=D.c.b5(v/m*n,0,0.99)
n=s*u
m=r*u
i=q*u
e=o<x*p+n?0:1
d=o<w*p+m?0:1
a0=o<v*p+i?0:1
x=(o+l)*(1-e)+(n/(1-h)+l)*e
w=(o+k)*(1-d)+(m/(1-g)+k)*d
v=(o+j)*(1-a0)+(i/(1-f)+j)*a0
break
case 5:x=s+x
w=r+w
v=q+v
break
case 6:x=Math.min(s,x)
w=Math.min(r,w)
v=Math.min(q,v)
break
case 7:x=s*x
w=r*w
v=q*v
break
case 8:x=x!==0?1-(1-s)/x:0
w=w!==0?1-(1-r)/w:0
v=v!==0?1-(1-q)/v:0
break
case 9:n=1-p
m=1-u
i=x*n
a1=s*m
x=2*s<p?2*x*s+i+a1:u*p-2*(p-s)*(u-x)+i+a1
i=w*n
a1=r*m
w=2*r<p?2*w*r+i+a1:u*p-2*(p-r)*(u-w)+i+a1
n=v*n
m=q*m
v=2*q<p?2*v*q+n+m:u*p-2*(p-q)*(u-v)+n+m
break
case 10:n=p===0
if(n)x=0
else{m=s/p
x=s*(u*m+2*x*(1-m))+x*(1-p)+s*(1-u)}if(n)w=0
else{m=r/p
w=r*(u*m+2*w*(1-m))+w*(1-p)+r*(1-u)}if(n)v=0
else{n=q/p
v=q*(u*n+2*v*(1-n))+v*(1-p)+q*(1-u)}break
case 11:n=2*x
m=1-p
i=1-u
a1=x*m
a2=s*i
x=n<u?n*s+a1+a2:u*p-2*(p-s)*(u-x)+a1+a2
n=2*w
a1=w*m
a2=r*i
w=n<u?n*r+a1+a2:u*p-2*(p-r)*(u-w)+a1+a2
n=2*v
m=v*m
i=q*i
v=n<u?n*q+m+i:u*p-2*(p-q)*(u-v)+m+i
break
case 12:x=Math.abs(x-s)
w=Math.abs(w-r)
v=Math.abs(v-q)
break
case 13:x=s-x
w=r-w
v=q-v
break
case 14:x=x!==0?s/x:0
w=w!==0?r/w:0
v=v!==0?q/v:0
break}a3=1-u
a4=u+p*a3
a5=a4>0?1/a4:0
t.se6((x*u+s*p*a3)*a5)
t.sdX((w*u+r*p*a3)*a5)
t.se4((v*u+q*p*a3)*a5)
t.se9(a4)
return a6},
aWO(d,e,f,g,h,i,j){var x,w=D.c.b5(Math.min(g,h),0,d.gbO(0)-1),v=D.c.b5(Math.min(i,j),0,d.gbz(0)-1),u=D.c.b5(Math.max(g,h),0,d.gbO(0)-1),t=D.c.b5(Math.max(i,j),0,d.gbz(0)-1),s=d.a.kf(0,w,v,u-w+1,t-v+1)
for(x=s.a;s.q();)x.em(0,f)
return d},
b2O(a4,a5,a6,a7,a8,a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=b0<16384,a3=a6>a8?a8:a6
for(x=1;x<=a3;)x=x<<1>>>0
x=x>>>1
w=x>>>1
v=C.b([0,0],y.t)
for(u=a4.$flags|0,t=x,x=w;x>=1;t=x,x=w){s=a5+a9*(a8-t)
r=a9*x
q=a9*t
p=a7*x
o=a7*t
for(n=(a6&x)>>>0!==0,m=a7*(a6-t),l=a5;l<=s;l+=q){k=l+m
for(j=l;j<=k;j+=o){i=j+p
h=j+r
g=h+p
if(a2){A.Cr(a4[j],a4[h],v)
f=v[0]
e=v[1]
A.Cr(a4[i],a4[g],v)
d=v[0]
a0=v[1]
A.Cr(f,d,v)
a1=v[0]
u&2&&C.f(a4)
a4[j]=a1
a4[i]=v[1]
A.Cr(e,a0,v)
a4[h]=v[0]
a4[g]=v[1]}else{A.Cs(a4[j],a4[h],v)
f=v[0]
e=v[1]
A.Cs(a4[i],a4[g],v)
d=v[0]
a0=v[1]
A.Cs(f,d,v)
a1=v[0]
u&2&&C.f(a4)
a4[j]=a1
a4[i]=v[1]
A.Cs(e,a0,v)
a4[h]=v[0]
a4[g]=v[1]}}if(n){h=j+r
if(a2){A.Cr(a4[j],a4[h],v)
f=v[0]
a1=v[1]
u&2&&C.f(a4)
a4[h]=a1}else{A.Cs(a4[j],a4[h],v)
f=v[0]
a1=v[1]
u&2&&C.f(a4)
a4[h]=a1}u&2&&C.f(a4)
a4[j]=f}}if((a8&x)>>>0!==0){k=l+m
for(j=l;j<=k;j+=o){i=j+p
if(a2){A.Cr(a4[j],a4[i],v)
f=v[0]
n=v[1]
u&2&&C.f(a4)
a4[i]=n}else{A.Cs(a4[j],a4[i],v)
f=v[0]
n=v[1]
u&2&&C.f(a4)
a4[i]=n}u&2&&C.f(a4)
a4[j]=f}}w=x>>>1}},
Cr(d,e,f){var x,w,v,u,t=$.hp()
t.$flags&2&&C.f(t)
t[0]=d
x=$.i0()
w=x[0]
t[0]=e
v=x[0]
u=w+(v&1)+D.b.I(v,1)
f[0]=u
f[1]=u-v},
Cs(d,e,f){var x=d-D.b.I(e,1)&65535
f[1]=x
f[0]=e+x-32768&65535},
aWP(d){var x,w,v,u,t,s,r,q,p,o,n,m=null,l=new A.x2()
if(l.kW(d))return l
x=new A.W0(A.aRI())
if(x.kW(d))return x
w=new A.ahE()
w.f=A.ba(d,!1,m,0)
w.a=new A.RC(C.b([],y.b))
if(w.Sk())return w
v=new A.awP()
if(v.kW(d))return v
u=new A.avN()
if(u.It(A.ba(d,!1,m,0))!=null)return u
if(A.aMr(d).c===943870035)return new A.apm()
if(A.b2N(d))return new A.age()
t=new A.Nz(!1)
if(t.kW(d))return t
s=new A.aoB(C.b([],y.s))
if(s.kW(d))return s
r=new A.avE()
q=A.ba(d,!1,m,0)
p=r.a=new A.YW(B.kW)
p.fz(0,q)
if(p.a0D())return r
o=new A.aik()
p=A.ba(d,!1,m,0)
o.a=p
p=A.aRh(p)
o.b=p
if(p!=null)return o
n=new A.apr()
if(n.fF(d)!=null)return n
return m},
aWK(d){var x=A.aWP(d)
return x==null?null:x.je(0,d,null)},
Mn(d,e){return(d&65535)*e+((d>>>16)*e&65535)*65536>>>0},
b8M(d,e,f,g,h,i){A.b8J(i,d,e,f,g,h,!0,i)},
b8N(d,e,f,g,h,i){A.b8K(i,d,e,f,g,h,!0,i)},
b8L(d,e,f,g,h,i){A.b8I(i,d,e,f,g,h,!0,i)},
yR(d,e,f,g,h){var x,w,v
for(x=0;x<g;++x){w=J.k(d.a,d.d+x)
v=J.k(e.a,e.d+x)
J.b7(f.a,f.d+x,w+v)}},
b8J(d,e,f,g,h,i,j,k){var x,w,v=null,u=h*g,t=h+i,s=A.ba(d,!1,v,u),r=A.ba(k,!1,v,u),q=A.aO(r,v,0)
if(h===0){r.l(0,0,J.k(s.a,s.d))
A.yR(A.aO(s,v,1),q,A.aO(r,v,1),e-1,!0)
q.d+=g
s.d+=g
r.d+=g
h=1}for(x=-g,w=e-1;h<t;){A.yR(s,A.aO(q,v,x),r,1,!0)
A.yR(A.aO(s,v,1),q,A.aO(r,v,1),w,!0);++h
q.d+=g
s.d+=g
r.d+=g}},
b8K(d,e,f,g,h,i,j,k){var x=null,w=h*g,v=h+i,u=A.ba(d,!1,x,w),t=A.ba(k,!1,x,w),s=A.aO(t,x,0)
if(h===0){t.l(0,0,J.k(u.a,u.d))
A.yR(A.aO(u,x,1),s,A.aO(t,x,1),e-1,!0)
u.d+=g
t.d+=g
h=1}else s.d-=g
for(;h<v;){A.yR(u,s,t,e,!0);++h
s.d+=g
u.d+=g
t.d+=g}},
b8I(d,e,f,g,h,i,j,k){var x,w,v,u,t,s=null,r=h*g,q=h+i,p=A.ba(d,!1,s,r),o=A.ba(k,!1,s,r),n=A.aO(o,s,0)
if(h===0){o.l(0,0,J.k(p.a,p.d))
A.yR(A.aO(p,s,1),n,A.aO(o,s,1),e-1,!0)
n.d+=g
p.d+=g
o.d+=g
h=1}for(x=-g;h<q;){A.yR(p,A.aO(n,s,x),o,1,!0)
for(w=1;w<e;++w){v=w-g
u=J.k(n.a,n.d+(w-1))+J.k(n.a,n.d+v)-J.k(n.a,n.d+(v-1))
if((u&4294967040)>>>0===0)t=u
else t=u<0?0:255
v=J.k(p.a,p.d+w)
J.b7(o.a,o.d+w,v+t)}++h
n.d+=g
p.d+=g
o.d+=g}},
bcy(d){var x="ifd0",w=A.oE(d,!1,!1)
if(!d.goT().h(0,x).a.aq(0,274)||d.goT().h(0,x).geO(0)===1)return w
w.e=A.Cm(d.goT())
w.goT().h(0,x).seO(0,null)
switch(d.goT().h(0,x).geO(0)){case 2:return A.aaM(w)
case 3:return A.bdl(w,B.Q2)
case 4:return A.aaM(A.aaH(w,180))
case 5:return A.aaM(A.aaH(w,90))
case 6:return A.aaH(w,90)
case 7:return A.aaM(A.aaH(w,-90))
case 8:return A.aaH(w,-90)}return w},
bcV(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null
a1.gxL()
if(a1.goT().h(0,"ifd0").a.aq(0,274)&&a1.goT().h(0,"ifd0").geO(0)!==1)a1=A.bcy(a1)
x=D.c.aS(a2*(a1.gbz(0)/a1.gbO(0)))
if(a2<=0)a2=D.c.aS(x*(a1.gbO(0)/a1.gbz(0)))
w=x
if(a2===a1.gbO(0)&&x===a1.gbz(0))return A.oE(a1,!1,!1)
v=new Int32Array(a2)
for(u=a1.a,t=u==null,s=0;s<a2;++s){r=t?a0:u.a
v[s]=D.b.e1(s*(r==null?0:r),a2)}q=new Int32Array(w)
for(p=0;p<w;++p){r=t?a0:u.b
q[p]=D.b.e1(p*(r==null?0:r),w)}o=a1.ge5().length
for(u=y.g,n=a0,m=0;m<o;++m){l=a1.x
k=(l===$?a1.x=C.b([],u):l)[m]
j=A.Sh(k,x,!0,a2)
t=n==null
if(!t)n.jQ(j)
if(t)n=j
t=k.a
if((t==null?a0:t.gcn())!=null)for(p=0;p<w;++p){i=q[p]
for(s=0;s<a2;++s){t=v[s]
r=k.a
if(r==null)t=a0
else{t=r.iC(t,i)
t=D.c.C(t.gbT(t))}if(t==null)t=0
r=j.a
if(r!=null)r.hF(s,p,t)}}else{h=k.f2(0,0)
for(p=0;p<w;++p){g=q[p]
for(s=0;s<a2;++s){t=v[s]
r=k.a
if(r!=null)r.bY(t,g,h)
t=h.gX(h)
r=h.ga5()
f=h.ga6(h)
e=h.ga4(h)
d=j.a
if(d!=null)d.f4(s,p,t,r,f,e)}}}}n.toString
return n},
aaH(a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=D.b.b3(b0,360)
a9.gxL()
if(D.b.b3(a8,90)===0)switch(D.b.bV(a8,90)){case 1:return A.bc3(a9)
case 2:return A.bc1(a9)
case 3:return A.bc2(a9)
default:return A.oE(a9,!1,!1)}x=a8*3.141592653589793/180
w=Math.cos(x)
v=Math.sin(x)
u=a9.gbO(0)
t=a9.gbO(0)
s=a9.gbz(0)
r=a9.gbz(0)
q=0.5*a9.gbO(0)
p=0.5*a9.gbz(0)
s=Math.abs(u*w)+Math.abs(s*v)
o=0.5*s
r=Math.abs(t*v)+Math.abs(r*w)
n=0.5*r
m=a9.ge5().length
for(u=y.g,l=a9.f,k=a7,j=0;j<m;++j){i=a9.x
h=(i===$?a9.x=C.b([],u):i)[j]
t=k==null
g=t?a7:k.BY()
if(g==null){f=D.c.C(s)
g=A.Sh(a9,D.c.C(r),!0,f)}if(t)k=g
e=h.f
if(e==null)e=l
if(e!=null){t=g.a
if(t!=null)t.iH(0,e)}for(t=g.a,t=t.gU(t);t.q();){d=t.gM(t)
a0=d.ghZ(d)
a1=d.giA(d)
f=a0-o
a2=a1-n
a3=q+f*w+a2*v
a4=p-f*v+a2*w
f=!1
if(a3>=0)if(a4>=0){a2=h.a
a5=a2==null
a6=a5?a7:a2.a
if(a3<(a6==null?0:a6)){f=a5?a7:a2.b
f=a4<(f==null?0:f)}}if(f)g.pw(a0,a1,h.a3s(a3,a4,B.QQ))}}k.toString
return k},
bc3(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.ge5(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,C.z)(x),++u){t=x[u]
s=v==null
r=s?k:v.BY()
if(r==null){q=t.a
p=q==null
o=p?k:q.b
if(o==null)o=0
q=p?k:q.a
r=A.Sh(t,q==null?0:q,!0,o)}if(s)v=r
s=t.a
s=s==null?k:s.b
n=(s==null?0:s)-1
m=0
while(!0){s=r.a
s=s==null?k:s.b
if(!(m<(s==null?0:s)))break
l=0
while(!0){s=r.a
s=s==null?k:s.a
if(!(l<(s==null?0:s)))break
s=t.a
s=s==null?k:s.bY(m,n-l,k)
r.pw(l,m,s==null?new A.cE():s);++l}++m}}v.toString
return v},
bc1(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.ge5(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,C.z)(x),++u){t=x[u]
s=t.a
r=s==null
q=r?k:s.a
p=(q==null?0:q)-1
s=r?k:s.b
o=(s==null?0:s)-1
s=v==null
n=s?k:v.BY()
if(n==null)n=A.oE(t,!0,!0)
if(s)v=n
m=0
while(!0){s=n.a
s=s==null?k:s.b
if(!(m<(s==null?0:s)))break
s=o-m
l=0
while(!0){r=n.a
r=r==null?k:r.a
if(!(l<(r==null?0:r)))break
r=t.a
r=r==null?k:r.bY(p-l,s,k)
n.pw(l,m,r==null?new A.cE():r);++l}++m}}v.toString
return v},
bc2(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null
for(x=d.ge5(),w=x.length,v=k,u=0;u<x.length;x.length===w||(0,C.z)(x),++u){t=x[u]
s=d.a
s=s==null?k:s.a
r=(s==null?0:s)-1
s=v==null
q=s?k:v.BY()
if(q==null){p=t.a
o=p==null
n=o?k:p.b
if(n==null)n=0
p=o?k:p.a
q=A.Sh(t,p==null?0:p,!0,n)}if(s)v=q
m=0
while(!0){s=q.a
s=s==null?k:s.b
if(!(m<(s==null?0:s)))break
s=r-m
l=0
while(!0){p=q.a
p=p==null?k:p.a
if(!(l<(p==null?0:p)))break
p=t.a
p=p==null?k:p.bY(s,l,k)
q.pw(l,m,p==null?new A.cE():p);++l}++m}}v.toString
return v},
aIT(d){var x
d=(d&-d)>>>0
x=d!==0?31:32
if((d&65535)!==0)x-=16
if((d&16711935)!==0)x-=8
if((d&252645135)!==0)x-=4
if((d&858993459)!==0)x-=2
return(d&1431655765)!==0?x-1:x},
beV(d){$.aOK().l(0,0,d)
return $.aZx()[0]},
aXk(d,e,f,g){return(D.b.b5(d,0,255)|D.b.b5(e,0,255)<<8|D.b.b5(f,0,255)<<16|D.b.b5(g,0,255)<<24)>>>0},
kV(d,e,f){var x,w,v,u,t=e.gp(e),s=e.gbF(),r=d.gcn(),q=r==null?null:r.gbF()
if(q==null)q=d.gbF()
x=d.gp(d)
if(t===1)e.l(0,0,A.aaG(D.c.fZ(d.gp(d)>2?d.geM():d.h(0,0)),q,s))
else if(t<=x)for(w=0;w<t;++w)e.l(0,w,A.aaG(d.h(0,w),q,s))
else if(x===2){v=A.aaG(d.h(0,0),q,s)
if(t===3){e.l(0,0,v)
e.l(0,1,v)
e.l(0,2,v)}else{f=A.aaG(d.h(0,1),q,s)
e.l(0,0,v)
e.l(0,1,v)
e.l(0,2,v)
e.l(0,3,f)}}else{for(w=0;w<x;++w)e.l(0,w,A.aaG(d.h(0,w),q,s))
u=x===1?e.h(0,0):0
for(w=x;w<t;++w)e.l(0,w,w===3?f:u)}return e},
aNW(d,e,f,g,h){var x,w,v=d.gcn(),u=v==null?null:v.gbF()
if(u==null)u=d.gbF()
v=h==null
x=v?null:h.gbF()
f=x==null?f:x
if(f==null)f=d.gbF()
x=v?null:h.gp(h)
g=x==null?g:x
if(g==null)g=d.gp(d)
if(e==null)e=0
if(f===u&&g===d.gp(d)){if(v)return d.c7(0)
h.em(0,d)
return h}switch(f.a){case 3:if(v)w=new A.ka(new Uint8Array(g))
else w=h
return A.kV(d,w,e)
case 0:return A.kV(d,v?new A.vW(g,0):h,e)
case 1:return A.kV(d,v?new A.vY(g,0):h,e)
case 2:if(v){v=g<3?1:2
w=new A.w_(g,new Uint8Array(v))}else w=h
return A.kV(d,w,e)
case 4:if(v)w=new A.vX(new Uint16Array(g))
else w=h
return A.kV(d,w,e)
case 5:if(v)w=new A.vZ(new Uint32Array(g))
else w=h
return A.kV(d,w,e)
case 6:if(v)w=new A.vV(new Int8Array(g))
else w=h
return A.kV(d,w,e)
case 7:if(v)w=new A.vT(new Int16Array(g))
else w=h
return A.kV(d,w,e)
case 8:if(v)w=new A.vU(new Int32Array(g))
else w=h
return A.kV(d,w,e)
case 9:if(v)w=new A.vQ(new Uint16Array(g))
else w=h
return A.kV(d,w,e)
case 10:if(v)w=new A.vR(new Float32Array(g))
else w=h
return A.kV(d,w,e)
case 11:if(v)w=new A.vS(new Float64Array(g))
else w=h
return A.kV(d,w,e)}},
ee(d){return 0.299*d.gX(d)+0.587*d.ga5()+0.114*d.ga6(d)},
aWA(d,e,f,g,h){var x=1-g/255
h[0]=D.c.aS(255*(1-d/255)*x)
h[1]=D.c.aS(255*(1-e/255)*x)
h[2]=D.c.aS(255*(1-f/255)*x)},
cV(d){var x,w,v,u=$.aOI()
u.$flags&2&&C.f(u)
u[0]=d
x=$.aZv()[0]
if(d===0)return x>>>16
if($.dn==null)A.dN()
w=$.aQV.cd()[x>>>23&511]
if(w!==0){v=x&8388607
return w+(v+4095+(v>>>13&1)>>>13)}return A.b2S(x)},
b2S(d){var x,w,v=d>>>16&32768,u=(d>>>23&255)-112,t=d&8388607
if(u<=0){if(u<-10)return v
t|=8388608
x=14-u
return(v|D.b.jD(t+(D.b.cA(1,x-1)-1)+(D.b.d5(t,x)&1),x))>>>0}else if(u===143)if(t===0)return v|31744
else{t=t>>>13
w=t===0?1:0
return v|t|w|31744}else{t=t+4095+(t>>>13&1)
if((t&8388608)!==0){++u
t=0}if(u>30)return v|31744
return(v|u<<10|t>>>13)>>>0}},
dN(){var x,w,v,u,t=$.dn
if(t!=null)return t
x=new Uint32Array(65536)
$.dn=J.aKA(D.aJ.gaj(x),0,null)
t=new Uint16Array(512)
$.aQV.b=t
for(w=0;w<256;++w){v=(w&255)-112
if(v<=0||v>=30){t[w]=0
t[(w|256)>>>0]=0}else{u=v<<10>>>0
t[w]=u
t[(w|256)>>>0]=(u|32768)>>>0}}for(w=0;w<65536;++w)x[w]=A.b2T(w)
t=$.dn
t.toString
return t},
b2T(d){var x,w=d>>>15&1,v=d>>>10&31,u=d&1023
if(v===0)if(u===0)return w<<31>>>0
else{for(;(u&1024)===0;){u=u<<1;--v}++v
u&=4294966271}else if(v===31){x=w<<31
if(u===0)return(x|2139095040)>>>0
else return(x|u<<13|2139095040)>>>0}return(w<<31|v+112<<23|u<<13)>>>0},
aJF(d,e){return A.bed(d,e,e)},
bed(d,e,f){var x=0,w=C.U(f),v,u
var $async$aJF=C.V(function(g,h){if(g===1)return C.R(h,w)
while(true)switch(x){case 0:u=C.nL(null,y.fL)
x=3
return C.N(u,$async$aJF)
case 3:v=d.$0()
x=1
break
case 1:return C.S(v,w)}})
return C.T($async$aJF,w)}},B,E
J=c[1]
C=c[0]
D=c[2]
A=a.updateHolder(c[3],A)
B=c[4]
E=c[6]
A.aib.prototype={
a9l(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=d.length
for(x=0;x<k;++x){w=d[x]
if(w>l.b)l.b=w
if(w<l.c)l.c=w}w=l.b
v=D.b.cA(1,w)
u=new Uint32Array(v)
l.a=u
for(t=1,s=0,r=2;t<=w;){for(q=t<<16,x=0;x<k;++x)if(d[x]===t){for(p=s,o=0,n=0;n<t;++n){o=(o<<1|p&1)>>>0
p=p>>>1}for(m=(q|x)>>>0,n=o;n<v;n+=r)u[n]=m;++s}++t
s=s<<1>>>0
r=r<<1>>>0}}}
A.ax_.prototype={}
A.aHp.prototype={
atS(d,e,f,g){var x,w,v,u,t,s=null
while(!0){x=d.c
w=d.d
w===$&&C.a()
if(!(x<w))break
w=d.b
w.toString
v=d.c=x+1
u=w[x]
d.c=v+1
t=w[v]
if((u&8)!==8)return!1
if(D.b.b3(u*256+t,31)!==0)return!1
if((t>>>5&1)!==0){d.J()
return!1}if(s!=null)e.z6(s)
x=new A.Vp(new Uint8Array(32768),B.ic)
new A.aiA(d,x).aj5()
s=J.d5(D.k.gaj(x.c),x.c.byteOffset,x.b)
d.J()}if(s!=null)e.z6(s)
return!0}}
A.ax0.prototype={}
A.aHq.prototype={
auy(d,e,f,g,h){var x,w,v,u,t,s,r,q,p
e.a=B.fD
x=(D.b.b5(15,0,15)-8<<4|8)>>>0
e.d3(x)
w=x*256
for(v=0;u=(v|0)>>>0,D.b.b3(w+u,31)!==0;)++v
e.d3(u)
t=d.c
s=A.bdy(d)
d.c=t
A.b1R(d,6,e,15)
u=s&255
r=s>>>24&255
q=s>>>16&255
p=s>>>8&255
if(e.a===B.fD){e.d3(r)
e.d3(q)
e.d3(p)
e.d3(u)}else{e.d3(u)
e.d3(p)
e.d3(q)
e.d3(r)}}}
A.z9.prototype={
N(){return"_DeflateFlushMode."+this.b}}
A.adW.prototype={
aj6(d,e){var x,w,v,u,t=this,s=!0
if(e>=9)if(e<=15)s=d>9
if(s)return!1
x=t.aeP(d)
if(x==null)return!1
$.le.b=x
s=new Uint16Array(1146)
t.p1=s
w=new Uint16Array(122)
t.p2=w
v=new Uint16Array(78)
t.p3=v
t.as=e
u=t.Q=D.b.c_(1,e)
t.at=u-1
t.db=15
t.cy=32768
t.dx=32767
t.dy=5
t.ax=new Uint8Array(u*2)
t.ch=new Uint16Array(u)
t.CW=new Uint16Array(32768)
t.y1=16384
t.f=new Uint8Array(65536)
t.r=65536
t.b2=16384
t.xr=49152
t.k4=d
t.w=t.x=t.ok=0
t.c=113
t.d=0
u=t.p4
u.a=s
u.c=$.aZf()
u=t.R8
u.a=w
u.c=$.aZe()
u=t.RG
u.a=v
u.c=$.aZd()
t.a2=t.ae=0
t.a1=8
t.Ty()
t.ay=2*t.Q
D.bu.eW(t.CW,0,t.cy,0)
t.k2=t.fr=t.id=0
t.fx=t.k3=2
t.cx=t.go=0
return!0},
ad1(d){var x,w,v,u,t=this,s=t.x
s===$&&C.a()
if(s!==0)t.Hh()
s=t.a
x=s.c
s=s.d
s===$&&C.a()
w=!0
if(x>=s){s=t.k2
s===$&&C.a()
if(s===0)s=d!==B.l5&&t.c!==666
else s=w}else s=w
if(s){switch($.le.cd().e){case 0:v=t.ad4(d)
break
case 1:v=t.ad2(d)
break
case 2:v=t.ad3(d)
break
default:v=-1
break}s=v===2
if(s||v===3)t.c=666
if(v===0||s)return 0
if(v===1){if(d===B.apC){t.fR(2,3)
t.t5(256,B.js)
t.Yl()
s=t.a1
s===$&&C.a()
x=t.a2
x===$&&C.a()
if(1+s+10-x<9){t.fR(2,3)
t.t5(256,B.js)
t.Yl()}t.a1=7}else{t.WA(0,0,!1)
if(d===B.apD){s=t.cy
s===$&&C.a()
x=t.CW
u=0
for(;u<s;++u){x===$&&C.a()
x.$flags&2&&C.f(x)
x[u]=0}}}t.Hh()}}if(d!==B.i0)return 0
return 1},
Ty(){var x=this,w=x.p1
w===$&&C.a()
D.bu.eW(w,0,572,0)
w=x.p2
w===$&&C.a()
D.bu.eW(w,0,60,0)
w=x.p3
w===$&&C.a()
D.bu.eW(w,0,38,0)
w=x.p1
w.$flags&2&&C.f(w)
w[512]=1
x.y2=x.a3=x.b6=x.B=0},
Ip(d,e){var x,w,v=this.ry,u=v[e],t=e<<1>>>0,s=v.$flags|0,r=this.x2
while(!0){x=this.to
x===$&&C.a()
if(!(t<=x))break
if(t<x&&A.aQp(d,v[t+1],v[t],r))++t
if(A.aQp(d,u,v[t],r))break
x=v[t]
s&2&&C.f(v)
v[e]=x
w=t<<1>>>0
e=t
t=w}s&2&&C.f(v)
v[e]=u},
Vj(d,e){var x,w,v,u,t,s,r,q,p,o,n=d[1]
if(n===0){x=138
w=3}else{x=7
w=4}d.$flags&2&&C.f(d)
d[(e+1)*2+1]=65535
for(v=this.p3,u=0,t=-1,s=0;u<=e;n=r){++u
r=d[u*2+1];++s
if(s<x&&n===r)continue
else{q=3
if(s<w){v===$&&C.a()
p=n*2
o=v[p]
v.$flags&2&&C.f(v)
v[p]=o+s}else if(n!==0){if(n!==t){v===$&&C.a()
p=n*2
o=v[p]
v.$flags&2&&C.f(v)
v[p]=o+1}v===$&&C.a()
p=v[32]
v.$flags&2&&C.f(v)
v[32]=p+1}else if(s<=10){v===$&&C.a()
p=v[34]
v.$flags&2&&C.f(v)
v[34]=p+1}else{v===$&&C.a()
p=v[36]
v.$flags&2&&C.f(v)
v[36]=p+1}}if(r===0){w=q
x=138}else if(n===r){w=q
x=6}else{x=7
w=4}t=n
s=0}},
aaE(){var x,w,v=this,u=v.p1
u===$&&C.a()
x=v.p4.b
x===$&&C.a()
v.Vj(u,x)
x=v.p2
x===$&&C.a()
u=v.R8.b
u===$&&C.a()
v.Vj(x,u)
v.RG.Gl(v)
for(u=v.p3,w=18;w>=3;--w){u===$&&C.a()
if(u[B.ni[w]*2+1]!==0)break}u=v.b6
u===$&&C.a()
v.b6=u+(3*(w+1)+5+5+4)
return w},
aox(d,e,f){var x,w,v,u=this
u.fR(d-257,5)
x=e-1
u.fR(x,5)
u.fR(f-4,4)
for(w=0;w<f;++w){v=u.p3
v===$&&C.a()
u.fR(v[B.ni[w]*2+1],3)}v=u.p1
v===$&&C.a()
u.VJ(v,d-1)
v=u.p2
v===$&&C.a()
u.VJ(v,x)},
VJ(d,e){var x,w,v,u,t,s,r,q,p,o,n=this,m=d[1]
if(m===0){x=138
w=3}else{x=7
w=4}for(v=0,u=-1,t=0;v<=e;m=s){++v
s=d[v*2+1];++t
if(t<x&&m===s)continue
else{r=3
if(t<w){q=m*2
p=q+1
do{o=n.p3
o===$&&C.a()
n.fR(o[q]&65535,o[p]&65535)}while(--t,t!==0)}else if(m!==0){if(m!==u){q=n.p3
q===$&&C.a()
p=m*2
n.fR(q[p]&65535,q[p+1]&65535);--t}q=n.p3
q===$&&C.a()
n.fR(q[32]&65535,q[33]&65535)
n.fR(t-3,2)}else{q=n.p3
if(t<=10){q===$&&C.a()
n.fR(q[34]&65535,q[35]&65535)
n.fR(t-3,3)}else{q===$&&C.a()
n.fR(q[36]&65535,q[37]&65535)
n.fR(t-11,7)}}}if(s===0){w=r
x=138}else if(m===s){w=r
x=6}else{x=7
w=4}u=m
t=0}},
amO(d,e,f){var x,w,v=this
if(f===0)return
x=v.f
x===$&&C.a()
w=v.x
w===$&&C.a()
D.k.c4(x,w,w+f,d,e)
v.x=v.x+f},
kr(d){var x,w=this.f
w===$&&C.a()
x=this.x
x===$&&C.a()
this.x=x+1
w.$flags&2&&C.f(w)
w[x]=d},
t5(d,e){var x=d*2
this.fR(e[x]&65535,e[x+1]&65535)},
fR(d,e){var x,w=this,v=w.a2
v===$&&C.a()
x=w.ae
if(v>16-e){x===$&&C.a()
v=w.ae=(x|D.b.cA(d,v)&65535)>>>0
w.kr(v)
w.kr(A.iB(v,8))
w.ae=A.iB(d,16-w.a2)
w.a2=w.a2+(e-16)}else{x===$&&C.a()
w.ae=(x|D.b.cA(d,v)&65535)>>>0
w.a2=v+e}},
wq(d,e){var x,w,v,u,t,s=this,r=s.f
r===$&&C.a()
x=s.b2
x===$&&C.a()
w=s.y2
w===$&&C.a()
v=A.iB(d,8)
r.$flags&2&&C.f(r)
r[x+w*2]=v
v=s.f
w=s.b2
x=s.y2
v.$flags&2&&C.f(v)
v[w+x*2+1]=d
w=s.xr
w===$&&C.a()
v[w+x]=e
s.y2=x+1
if(d===0){r=s.p1
r===$&&C.a()
x=e*2
w=r[x]
r.$flags&2&&C.f(r)
r[x]=w+1}else{r=s.a3
r===$&&C.a()
s.a3=r+1
r=s.p1
r===$&&C.a()
x=(B.ut[e]+256+1)*2
w=r[x]
r.$flags&2&&C.f(r)
r[x]=w+1
w=s.p2
w===$&&C.a()
x=A.aUT(d-1)*2
r=w[x]
w.$flags&2&&C.f(w)
w[x]=r+1}r=s.y2
if((r&8191)===0){x=s.k4
x===$&&C.a()
x=x>2}else x=!1
if(x){u=r*8
r=s.id
r===$&&C.a()
x=s.fr
x===$&&C.a()
for(w=s.p2,t=0;t<30;++t){w===$&&C.a()
u+=w[t*2]*(5+B.jn[t])}u=A.iB(u,3)
w=s.a3
w===$&&C.a()
v=s.y2
if(w<v/2&&u<(r-x)/2)return!0
r=v}x=s.y1
x===$&&C.a()
return r===x-1},
QV(d,e){var x,w,v,u,t,s,r=this,q=r.y2
q===$&&C.a()
if(q!==0){x=0
do{q=r.f
q===$&&C.a()
w=r.b2
w===$&&C.a()
w+=x*2
v=q[w]<<8&65280|q[w+1]&255
w=r.xr
w===$&&C.a()
u=q[w+x]&255;++x
if(v===0)r.t5(u,d)
else{t=B.ut[u]
r.t5(t+256+1,d)
s=B.rS[t]
if(s!==0)r.fR(u-B.RO[t],s);--v
t=A.aUT(v)
r.t5(t,e)
s=B.jn[t]
if(s!==0)r.fR(v-B.Ui[t],s)}}while(x<r.y2)}r.t5(256,d)
r.a1=d[513]},
a41(){var x,w,v,u
for(x=this.p1,w=0,v=0;w<7;){x===$&&C.a()
v+=x[w*2];++w}for(u=0;w<128;){x===$&&C.a()
u+=x[w*2];++w}for(;w<256;){x===$&&C.a()
v+=x[w*2];++w}this.y=v>A.iB(u,2)?0:1},
Yl(){var x=this,w=x.a2
w===$&&C.a()
if(w===16){w=x.ae
w===$&&C.a()
x.kr(w)
x.kr(A.iB(w,8))
x.a2=x.ae=0}else if(w>=8){w=x.ae
w===$&&C.a()
x.kr(w)
x.ae=A.iB(x.ae,8)
x.a2=x.a2-8}},
Q9(){var x=this,w=x.a2
w===$&&C.a()
if(w>8){w=x.ae
w===$&&C.a()
x.kr(w)
x.kr(A.iB(w,8))}else if(w>0){w=x.ae
w===$&&C.a()
x.kr(w)}x.a2=x.ae=0},
on(d){var x,w,v,u,t,s=this,r=s.fr
r===$&&C.a()
if(r>=0)x=r
else x=-1
w=s.id
w===$&&C.a()
r=w-r
w=s.k4
w===$&&C.a()
if(w>0){if(s.y===2)s.a41()
s.p4.Gl(s)
s.R8.Gl(s)
v=s.aaE()
w=s.b6
w===$&&C.a()
u=A.iB(w+3+7,3)
w=s.B
w===$&&C.a()
t=A.iB(w+3+7,3)
if(t<=u)u=t}else{t=r+5
u=t
v=0}if(r+4<=u&&x!==-1)s.WA(x,r,d)
else if(t===u){s.fR(2+(d?1:0),3)
s.QV(B.js,B.uT)}else{s.fR(4+(d?1:0),3)
r=s.p4.b
r===$&&C.a()
x=s.R8.b
x===$&&C.a()
s.aox(r+1,x+1,v+1)
x=s.p1
x===$&&C.a()
r=s.p2
r===$&&C.a()
s.QV(x,r)}s.Ty()
if(d)s.Q9()
s.fr=s.id
s.Hh()},
ad4(d){var x,w,v,u,t,s=this,r=s.r
r===$&&C.a()
x=r-5
x=65535>x?x:65535
for(r=d===B.l5;!0;){w=s.k2
w===$&&C.a()
if(w<=1){s.H8()
w=s.k2
v=w===0
if(v&&r)return 0
if(v)break}v=s.id
v===$&&C.a()
w=s.id=v+w
s.k2=0
v=s.fr
v===$&&C.a()
u=v+x
if(w>=u){s.k2=w-u
s.id=u
s.on(!1)}w=s.id
v=s.fr
t=s.Q
t===$&&C.a()
if(w-v>=t-262)s.on(!1)}r=d===B.i0
s.on(r)
return r?3:1},
WA(d,e,f){var x,w=this
w.fR(f?1:0,3)
w.Q9()
w.a1=8
w.kr(e)
w.kr(A.iB(e,8))
x=(~e>>>0)+65536&65535
w.kr(x)
w.kr(A.iB(x,8))
x=w.ax
x===$&&C.a()
w.amO(x,d,e)},
H8(){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.a
do{x=n.ay
x===$&&C.a()
w=n.k2
w===$&&C.a()
v=n.id
v===$&&C.a()
u=x-w-v
if(u===0&&v===0&&w===0){x=n.Q
x===$&&C.a()
u=x}else{x=n.Q
x===$&&C.a()
if(v>=x+x-262){w=n.ax
w===$&&C.a()
D.k.c4(w,0,x,w,x)
x=n.k1
t=n.Q
n.k1=x-t
n.id=n.id-t
x=n.fr
x===$&&C.a()
n.fr=x-t
x=n.cy
x===$&&C.a()
w=n.CW
w===$&&C.a()
v=w.$flags|0
s=x
r=s
do{--s
q=w[s]&65535
x=q>=t?q-t:0
v&2&&C.f(w)
w[s]=x}while(--r,r!==0)
x=n.ch
x===$&&C.a()
w=x.$flags|0
s=t
r=s
do{--s
q=x[s]&65535
v=q>=t?q-t:0
w&2&&C.f(x)
x[s]=v}while(--r,r!==0)
u+=t}}x=m.c
w=m.d
w===$&&C.a()
if(x>=w)return
x=n.ax
x===$&&C.a()
r=n.amV(x,n.id+n.k2,u)
x=n.k2=n.k2+r
if(x>=3){w=n.ax
v=n.id
p=w[v]&255
n.cx=p
o=n.dy
o===$&&C.a()
o=D.b.cA(p,o)
v=w[v+1]
w=n.dx
w===$&&C.a()
n.cx=((o^v&255)&w)>>>0}}while(x<262&&!(m.c>=m.d))},
ad2(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
for(x=d===B.l5,w=$.le.a,v=0;!0;){u=m.k2
u===$&&C.a()
if(u<262){m.H8()
u=m.k2
if(u<262&&x)return 0
if(u===0)break}if(u>=3){u=m.cx
u===$&&C.a()
t=m.dy
t===$&&C.a()
t=D.b.cA(u,t)
u=m.ax
u===$&&C.a()
s=m.id
s===$&&C.a()
u=u[s+2]
r=m.dx
r===$&&C.a()
r=m.cx=((t^u&255)&r)>>>0
u=m.CW
u===$&&C.a()
t=u[r]
v=t&65535
q=m.ch
q===$&&C.a()
p=m.at
p===$&&C.a()
q.$flags&2&&C.f(q)
q[(s&p)>>>0]=t
u.$flags&2&&C.f(u)
u[r]=s}if(v!==0){u=m.id
u===$&&C.a()
t=m.Q
t===$&&C.a()
t=(u-v&65535)<=t-262
u=t}else u=!1
if(u){u=m.ok
u===$&&C.a()
if(u!==2)m.fx=m.TX(v)}u=m.fx
u===$&&C.a()
t=m.id
if(u>=3){t===$&&C.a()
o=m.wq(t-m.k1,u-3)
u=m.k2
t=m.fx
u-=t
m.k2=u
s=$.le.b
if(s===$.le)C.aa(C.SL(w))
if(t<=s.b&&u>=3){u=m.fx=t-1
do{t=m.id=m.id+1
s=m.cx
s===$&&C.a()
r=m.dy
r===$&&C.a()
r=D.b.cA(s,r)
s=m.ax
s===$&&C.a()
s=s[t+2]
q=m.dx
q===$&&C.a()
q=m.cx=((r^s&255)&q)>>>0
s=m.CW
s===$&&C.a()
r=s[q]
v=r&65535
p=m.ch
p===$&&C.a()
n=m.at
n===$&&C.a()
p.$flags&2&&C.f(p)
p[(t&n)>>>0]=r
s.$flags&2&&C.f(s)
s[q]=t}while(u=m.fx=u-1,u!==0)
m.id=t+1}else{u=m.id=m.id+t
m.fx=0
t=m.ax
t===$&&C.a()
s=t[u]&255
m.cx=s
r=m.dy
r===$&&C.a()
r=D.b.cA(s,r)
u=t[u+1]
t=m.dx
t===$&&C.a()
m.cx=((r^u&255)&t)>>>0}}else{u=m.ax
u===$&&C.a()
t===$&&C.a()
o=m.wq(0,u[t]&255)
m.k2=m.k2-1
m.id=m.id+1}if(o)m.on(!1)}x=d===B.i0
m.on(x)
return x?3:1},
ad3(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
for(x=d===B.l5,w=$.le.a,v=0;!0;){u=l.k2
u===$&&C.a()
if(u<262){l.H8()
u=l.k2
if(u<262&&x)return 0
if(u===0)break}if(u>=3){u=l.cx
u===$&&C.a()
t=l.dy
t===$&&C.a()
t=D.b.cA(u,t)
u=l.ax
u===$&&C.a()
s=l.id
s===$&&C.a()
u=u[s+2]
r=l.dx
r===$&&C.a()
r=l.cx=((t^u&255)&r)>>>0
u=l.CW
u===$&&C.a()
t=u[r]
v=t&65535
q=l.ch
q===$&&C.a()
p=l.at
p===$&&C.a()
q.$flags&2&&C.f(q)
q[(s&p)>>>0]=t
u.$flags&2&&C.f(u)
u[r]=s}u=l.fx
u===$&&C.a()
l.k3=u
l.fy=l.k1
l.fx=2
t=!1
if(v!==0){s=$.le.b
if(s===$.le)C.aa(C.SL(w))
if(u<s.b){u=l.id
u===$&&C.a()
t=l.Q
t===$&&C.a()
t=(u-v&65535)<=t-262
u=t}else u=t}else u=t
t=2
if(u){u=l.ok
u===$&&C.a()
if(u!==2){u=l.TX(v)
l.fx=u}else u=t
s=!1
if(u<=5)if(l.ok!==1){if(u===3){s=l.id
s===$&&C.a()
s=s-l.k1>4096}}else s=!0
if(s){l.fx=2
u=t}}else u=t
t=l.k3
if(t>=3&&u<=t){u=l.id
u===$&&C.a()
o=u+l.k2-3
n=l.wq(u-1-l.fy,t-3)
t=l.k2
u=l.k3
l.k2=t-(u-1)
u=l.k3=u-2
do{t=l.id=l.id+1
if(t<=o){s=l.cx
s===$&&C.a()
r=l.dy
r===$&&C.a()
r=D.b.cA(s,r)
s=l.ax
s===$&&C.a()
s=s[t+2]
q=l.dx
q===$&&C.a()
q=l.cx=((r^s&255)&q)>>>0
s=l.CW
s===$&&C.a()
r=s[q]
v=r&65535
p=l.ch
p===$&&C.a()
m=l.at
m===$&&C.a()
p.$flags&2&&C.f(p)
p[(t&m)>>>0]=r
s.$flags&2&&C.f(s)
s[q]=t}}while(u=l.k3=u-1,u!==0)
l.go=0
l.fx=2
l.id=t+1
if(n)l.on(!1)}else{u=l.go
u===$&&C.a()
if(u!==0){u=l.ax
u===$&&C.a()
t=l.id
t===$&&C.a()
if(l.wq(0,u[t-1]&255))l.on(!1)
l.id=l.id+1
l.k2=l.k2-1}else{l.go=1
u=l.id
u===$&&C.a()
l.id=u+1
l.k2=l.k2-1}}}x=l.go
x===$&&C.a()
if(x!==0){x=l.ax
x===$&&C.a()
w=l.id
w===$&&C.a()
l.wq(0,x[w-1]&255)
l.go=0}x=d===B.i0
l.on(x)
return x?3:1},
TX(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=$.le.cd().d,h=j.id
h===$&&C.a()
x=j.k3
x===$&&C.a()
w=j.Q
w===$&&C.a()
w-=262
v=h>w?h-w:0
u=$.le.cd().c
w=j.at
w===$&&C.a()
t=j.id+258
s=j.ax
s===$&&C.a()
r=h+x
q=s[r-1]
p=s[r]
if(j.k3>=$.le.cd().a)i=i>>>2
s=j.k2
s===$&&C.a()
if(u>s)u=s
o=t-258
n=x
m=h
do{c$0:{h=j.ax
x=d+n
s=!0
if(h[x]===p)if(h[x-1]===q)if(h[d]===h[m]){l=d+1
x=h[l]!==h[m+1]}else{x=s
l=d}else{x=s
l=d}else{x=s
l=d}if(x)break c$0
m+=2;++l
do{++m;++l
x=!1
if(h[m]===h[l]){++m;++l
if(h[m]===h[l]){++m;++l
if(h[m]===h[l]){++m;++l
if(h[m]===h[l]){++m;++l
if(h[m]===h[l]){++m;++l
if(h[m]===h[l]){++m;++l
if(h[m]===h[l]){++m;++l
x=h[m]===h[l]&&m<t}}}}}}}}while(x)
k=258-(t-m)
if(k>n){j.k1=d
if(k>=u){n=k
break}h=j.ax
x=o+k
q=h[x-1]
p=h[x]
n=k}m=o}h=j.ch
h===$&&C.a()
d=h[d&w]&65535
if(d>v){--i
h=i!==0}else h=!1}while(h)
h=j.k2
if(n<=h)return n
return h},
amV(d,e,f){var x,w,v,u,t,s,r=this
if(f!==0){x=r.a
w=x.c
x=x.d
x===$&&C.a()
x=w>=x}else x=!0
if(x)return 0
v=r.a.ei(f)
u=v.gp(0)
if(u===0)return 0
t=v.da()
s=t.length
if(u>s)u=s
D.k.fg(d,e,e+u,t)
r.e+=u
r.d=A.qA(t,r.d)
return u},
Hh(){var x,w=this,v=w.x
v===$&&C.a()
x=w.f
x===$&&C.a()
w.b.a2W(x,v)
x=w.w
x===$&&C.a()
w.w=x+v
v=w.x-v
w.x=v
if(v===0)w.w=0},
aeP(d){switch(d){case 0:return new A.jV(0,0,0,0,0)
case 1:return new A.jV(4,4,8,4,1)
case 2:return new A.jV(4,5,16,8,1)
case 3:return new A.jV(4,6,32,32,1)
case 4:return new A.jV(4,4,16,16,2)
case 5:return new A.jV(8,16,32,32,2)
case 6:return new A.jV(8,16,128,128,2)
case 7:return new A.jV(8,32,128,256,2)
case 8:return new A.jV(32,128,258,1024,2)
case 9:return new A.jV(32,258,258,4096,2)}return null}}
A.jV.prototype={}
A.aBj.prototype={
aeF(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a
d===$&&C.a()
x=e.c
x===$&&C.a()
w=x.a
v=x.b
u=x.c
t=x.e
for(x=a0.rx,s=x.$flags|0,r=0;r<=15;++r){s&2&&C.f(x)
x[r]=0}q=a0.ry
p=a0.x1
p===$&&C.a()
o=q[p]
d.$flags&2&&C.f(d)
d[o*2+1]=0
for(n=p+1,p=w!=null,m=0;n<573;++n){l=q[n]
o=l*2
k=o+1
r=d[d[k]*2+1]+1
if(r>t){++m
r=t}d[k]=r
j=e.b
j===$&&C.a()
if(l>j)continue
j=x[r]
s&2&&C.f(x)
x[r]=j+1
i=l>=u?v[l-u]:0
h=d[o]
o=a0.b6
o===$&&C.a()
a0.b6=o+h*(r+i)
if(p){o=a0.B
o===$&&C.a()
a0.B=o+h*(w[k]+i)}}if(m===0)return
r=t-1
do{for(g=r;p=x[g],p===0;)--g
s&2&&C.f(x)
x[g]=p-1
p=g+1
x[p]=x[p]+2
x[t]=x[t]-1
m-=2}while(m>0)
for(r=t;r!==0;--r){l=x[r]
for(;l!==0;){--n
f=q[n]
s=e.b
s===$&&C.a()
if(f>s)continue
s=f*2
p=s+1
o=d[p]
if(o!==r){k=a0.b6
k===$&&C.a()
a0.b6=k+(r-o)*d[s]
d[p]=r}--l}}},
Gl(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.a
g===$&&C.a()
x=h.c
x===$&&C.a()
w=x.a
v=x.d
d.to=0
d.x1=573
for(x=g.$flags|0,u=d.ry,t=u.$flags|0,s=d.x2,r=s.$flags|0,q=0,p=-1;q<v;++q){o=q*2
if(g[o]!==0){o=++d.to
t&2&&C.f(u)
u[o]=q
r&2&&C.f(s)
s[q]=0
p=q}else{x&2&&C.f(g)
g[o+1]=0}}for(o=w!=null;n=d.to,n<2;){++n
d.to=n
if(p<2){++p
m=p}else m=0
t&2&&C.f(u)
u[n]=m
n=m*2
x&2&&C.f(g)
g[n]=1
r&2&&C.f(s)
s[m]=0
l=d.b6
l===$&&C.a()
d.b6=l-1
if(o){l=d.B
l===$&&C.a()
d.B=l-w[n+1]}}h.b=p
for(q=D.b.bV(n,2);q>=1;--q)d.Ip(g,q)
m=v
do{q=u[1]
o=u[d.to--]
t&2&&C.f(u)
u[1]=o
d.Ip(g,1)
k=u[1]
o=--d.x1
u[o]=q;--o
d.x1=o
u[o]=k
o=q*2
n=g[o]
l=k*2
j=g[l]
x&2&&C.f(g)
g[m*2]=n+j
j=s[q]
n=s[k]
if(j>n)n=j
r&2&&C.f(s)
s[m]=n+1
g[l+1]=m
g[o+1]=m
i=m+1
u[1]=m
d.Ip(g,1)
if(d.to>=2){m=i
continue}else break}while(!0)
u[--d.x1]=u[1]
h.aeF(d)
A.b9d(g,p,d.rx)}}
A.aFl.prototype={}
A.aiA.prototype={
gmd(){var x=this.a
if(x==null)return x
x.d===$&&C.a()
return x},
aj5(){var x,w,v=this
v.e=v.d=0
if(v.gmd()==null)return
while(!0){x=v.gmd()
w=x.c
x=x.d
x===$&&C.a()
if(!(w<x))break
if(!v.alR())return}},
alR(){var x,w,v,u=this,t=u.gmd()
if(t!=null){x=t.c
w=t.d
w===$&&C.a()
w=x>=w
x=w}else x=!0
if(x)return!1
v=u.ks(3)
switch(D.b.I(v,1)){case 0:if(u.am1()===-1)return!1
break
case 1:if(u.Rj($.aXP(),$.aXO())===-1)return!1
break
case 2:if(u.alS()===-1)return!1
break
default:return!1}return(v&1)===0},
ks(d){var x,w,v,u,t=this
if(d===0)return 0
for(;x=t.e,x<d;){x=t.gmd()
w=x.c
x=x.d
x===$&&C.a()
if(w>=x)return-1
x=t.gmd()
w=x.b
w.toString
v=w[x.c++]
x=t.d
w=t.e
t.d=(x|D.b.cA(v,w))>>>0
t.e=w+8}w=t.d
u=D.b.c_(1,d)
t.d=D.b.dv(w,d)
t.e=x-d
return(w&u-1)>>>0},
Is(d){var x,w,v,u,t,s,r=this,q=d.a
q===$&&C.a()
x=d.b
for(;w=r.e,w<x;){w=r.gmd()
v=w.c
w=w.d
w===$&&C.a()
if(v>=w)return-1
w=r.gmd()
v=w.b
v.toString
u=v[w.c++]
w=r.d
v=r.e
r.d=(w|D.b.cA(u,v))>>>0
r.e=v+8}v=r.d
t=q[(v&D.b.cA(1,x)-1)>>>0]
s=t>>>16
r.d=D.b.dv(v,s)
r.e=w-s
return t&65535},
am1(){var x,w,v=this
v.e=v.d=0
x=v.ks(16)
w=v.ks(16)
if(x!==0&&x!==(w^65535)>>>0)return-1
if(x>v.gmd().gp(0))return-1
v.c.aBc(v.gmd().ei(x))
return 0},
alS(){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.ks(5)
if(m===-1)return-1
m+=257
if(m>288)return-1
x=n.ks(5)
if(x===-1)return-1;++x
if(x>32)return-1
w=n.ks(4)
if(w===-1)return-1
w+=4
if(w>19)return-1
v=new Uint8Array(19)
for(u=0;u<w;++u){t=n.ks(3)
if(t===-1)return-1
v[B.ni[u]]=t}s=A.RZ(v)
r=m+x
q=new Uint8Array(r)
p=J.d5(D.k.gaj(q),0,m)
o=J.d5(D.k.gaj(q),m,x)
if(n.acw(r,s,q)===-1)return-1
return n.Rj(A.RZ(p),A.RZ(o))},
Rj(d,e){var x,w,v,u,t,s,r,q,p=this
for(x=p.c;!0;){w=p.Is(d)
if(w<0||w>285)return-1
if(w===256)break
if(w<256){x.d3(w&255)
continue}v=w-257
u=B.a3u[v]+p.ks(B.a5f[v])
t=p.Is(e)
if(t<0||t>29)return-1
s=B.a3F[t]+p.ks(B.jn[t])
for(r=-s;u>s;){x.z6(x.en(r))
u-=s}if(u===s)x.z6(x.en(r))
else x.z6(x.OC(r,u-s))}for(;x=p.e,x>=8;){p.e=x-8
x=p.gmd()
r=--x.c
q=x.d
q===$&&C.a()
x.c=D.b.b5(r,0,q)}return 0},
acw(d,e,f){var x,w,v,u,t,s,r,q,p=this
for(x=f.$flags|0,w=0,v=0;v<d;){u=p.Is(e)
if(u===-1)return-1
t=0
switch(u){case 16:s=p.ks(2)
if(s===-1)return-1
s+=3
for(;r=s-1,s>0;s=r,v=q){q=v+1
x&2&&C.f(f)
f[v]=w}break
case 17:s=p.ks(3)
if(s===-1)return-1
s+=3
for(;r=s-1,s>0;s=r,v=q){q=v+1
x&2&&C.f(f)
f[v]=0}w=t
break
case 18:s=p.ks(7)
if(s===-1)return-1
s+=11
for(;r=s-1,s>0;s=r,v=q){q=v+1
x&2&&C.f(f)
f[v]=0}w=t
break
default:if(u<0||u>15)return-1
q=v+1
x&2&&C.f(f)
f[v]=u
v=q
w=u
break}}return 0}}
A.awZ.prototype={
ql(d){var x=A.aSB(B.ic,32768)
B.MM.atS(A.aiH(d,B.fD,null,null),x,!1,!1)
return x.NA()}}
A.a0q.prototype={
a__(d,e,f){var x=A.aSB(B.fD,32768)
B.MN.auy(A.aiH(d,B.ic,null,null),x,e,!1,null)
return x.NA()},
tU(d){return this.a__(d,null,15)}}
A.NO.prototype={
N(){return"ByteOrder."+this.b}}
A.aiG.prototype={
gp(d){var x=this.b
return x==null?0:x.length-this.c},
h(d,e){return this.b[this.c+e]},
a52(d,e){var x=this.b
if(x==null)return A.aiH(C.b([],y.t),B.ic,null,null)
return A.aiH(x,this.a,d,e)},
bj(){var x=this.b
x.toString
return x[this.c++]},
da(){var x,w,v,u=this,t=u.b
if(t==null)return new Uint8Array(0)
x=u.gp(0)
w=u.c
v=t.length
if(w+x>v)x=v-w
return J.d5(D.k.gaj(t),u.b.byteOffset+u.c,x)}}
A.aiI.prototype={
J(){var x=this,w=x.bj(),v=x.bj(),u=x.bj(),t=x.bj()
if(x.a===B.fD)return(w<<24|v<<16|u<<8|t)>>>0
return(t<<24|u<<16|v<<8|w)>>>0},
ei(d){var x=this,w=x.a52(d,x.c)
x.c=x.c+w.gp(0)
return w}}
A.Vp.prototype={
NA(){return J.d5(D.k.gaj(this.c),this.c.byteOffset,this.b)},
d3(d){var x,w,v=this
if(v.b===v.c.length)v.aly()
x=v.c
w=v.b++
x.$flags&2&&C.f(x)
x[w]=d},
a2W(d,e){var x,w,v,u,t=this
if(e==null)e=d.length
for(;x=t.b,w=x+e,v=t.c,u=v.length,w>u;)t.Ig(w-u)
D.k.fg(v,x,w,d)
t.b+=e},
z6(d){return this.a2W(d,null)},
aBc(d){var x,w,v,u,t,s,r=this
while(!0){x=r.b
w=d.b
v=w==null
u=v?0:w.length-d.c
t=r.c
s=t.length
if(!(x+u>s))break
r.Ig(x+(v?0:w.length-d.c)-s)}if(!v)D.k.c4(t,x,x+d.gp(0),w,d.c)
r.b=r.b+d.gp(0)},
OC(d,e){var x=this
if(d<0)d=x.b+d
if(e==null)e=x.b
else if(e<0)e=x.b+e
return J.d5(D.k.gaj(x.c),x.c.byteOffset+d,e-d)},
en(d){return this.OC(d,null)},
Ig(d){var x=d!=null?d>32768?d:32768:32768,w=this.c,v=w.length,u=new Uint8Array((v+x)*2)
D.k.fg(u,0,v,w)
this.c=u},
aly(){return this.Ig(null)},
gp(d){return this.b}}
A.anB.prototype={}
A.rg.prototype={
k(d,e){var x,w,v,u,t
if(e==null)return!1
if(e instanceof A.rg){x=this.a
w=e.a
v=x.length
if(v!==w.length)return!1
for(u=0,t=0;t<v;++t)u|=x[t]^w[t]
return u===0}return!1},
gu(d){return C.a2(this.a)},
j(d){return A.bbm(this.a)}}
A.ae2.prototype={
H(d,e){if(this.a!=null)throw C.e(C.ak("add may only be called once."))
this.a=e},
bH(d){if(this.a==null)throw C.e(C.ak("add must be called once."))}}
A.RO.prototype={
eb(d){var x=new A.ae2(),w=A.b9K(x)
w.H(0,d)
w.bH(0)
w=x.a
w.toString
return w}}
A.ahV.prototype={
H(d,e){var x=this
if(x.w)throw C.e(C.ak("Hash.add() called after close()."))
x.r=x.r+J.cd(e)
x.PE(e)},
PE(d){var x,w,v,u,t,s,r,q,p=this,o=p.e,n=p.d,m=n.length
if(p.c==null)p.c=J.vj(D.k.gaj(n))
for(x=p.f,w=x.$flags|0,v=x.length,u=J.at(d),t=0;!0;o=0){s=o+u.gp(d)-t
if(s<m){D.k.c4(n,o,s,d,t)
p.e=s
return}D.k.c4(n,o,m,d,t)
t+=m-o
r=0
do{q=p.c.getUint32(r*4,!1)
w&2&&C.f(x)
x[r]=q;++r}while(r<v)
p.aAT(x)}},
bH(d){var x,w,v,u,t,s,r,q=this
if(q.w)return
q.w=!0
x=q.r
if(x>1125899906842623)C.aa(C.am("Hashing is unsupported for messages with more than 2^53 bits."))
w=q.d.byteLength
w=((x+1+8+w-1&-w)>>>0)-x
v=new Uint8Array(w)
v[0]=128
u=x*8
t=w-8
s=J.vj(D.k.gaj(v))
r=D.b.bV(u,4294967296)
s.$flags&2&&C.f(s,11)
s.setUint32(t,r,!1)
s.setUint32(t+4,u>>>0,!1)
q.PE(v)
x=q.a
x.H(0,new A.rg(q.abd()))
x.bH(0)},
abd(){var x,w,v,u,t,s,r
if(D.lF===$.es())return J.e3(D.aJ.gaj(this.y))
x=this.y
w=x.byteLength
v=new Uint8Array(w)
u=J.vj(D.k.gaj(v))
for(w=x.length,t=u.$flags|0,s=0;s<w;++s){r=x[s]
t&2&&C.f(u,11)
u.setUint32(s*4,r,!1)}return v}}
A.a7c.prototype={
ki(d){var x=new Uint32Array(C.bn(C.b([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],y.t))),w=new Uint32Array(64),v=new Uint8Array(64)
return new C.HV(new A.a7d(x,w,d,v,new Uint32Array(16)))}}
A.aFe.prototype={
aAT(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
for(x=this.z,w=x.$flags|0,v=0;v<16;++v){u=d[v]
w&2&&C.f(x)
x[v]=u}for(v=16;v<64;++v){u=x[v-2]
t=x[v-7]
s=x[v-15]
r=x[v-16]
w&2&&C.f(x)
x[v]=((((u>>>17|u<<15)^(u>>>19|u<<13)^u>>>10)>>>0)+t>>>0)+((((s>>>7|s<<25)^(s>>>18|s<<14)^s>>>3)>>>0)+r>>>0)>>>0}w=this.y
q=w[0]
p=w[1]
o=w[2]
n=w[3]
m=w[4]
l=w[5]
k=w[6]
j=w[7]
for(i=q,v=0;v<64;++v,j=k,k=l,l=m,m=g,n=o,o=p,p=i,i=f){h=(j+(((m>>>6|m<<26)^(m>>>11|m<<21)^(m>>>25|m<<7))>>>0)>>>0)+(((m&l^~m&k)>>>0)+(B.Wi[v]+x[v]>>>0)>>>0)>>>0
g=n+h>>>0
f=h+((((i>>>2|i<<30)^(i>>>13|i<<19)^(i>>>22|i<<10))>>>0)+((i&p^i&o^p&o)>>>0)>>>0)>>>0}w.$flags&2&&C.f(w)
w[0]=i+q>>>0
w[1]=p+w[1]>>>0
w[2]=o+w[2]>>>0
w[3]=n+w[3]>>>0
w[4]=m+w[4]>>>0
w[5]=l+w[5]>>>0
w[6]=k+w[6]>>>0
w[7]=j+w[7]>>>0}}
A.a7d.prototype={}
A.acy.prototype={
N(){return"Channel."+this.b}}
A.dv.prototype={
q(){var x=this.b
return++this.a<x.gp(x)},
gM(d){return this.b.h(0,this.a)}}
A.vQ.prototype={
c7(d){return new A.vQ(new Uint16Array(C.bn(this.a)))},
gbF(){return B.db},
gp(d){return this.a.length},
gcn(){return null},
h(d,e){var x,w=this.a
if(e<w.length){w=w[e]
x=$.dn
w=(x!=null?x:A.dN())[w]}else w=0
return w},
l(d,e,f){var x,w=this.a
if(e<w.length){x=A.cV(f)
w.$flags&2&&C.f(w)
w[e]=x}},
gbT(d){return this.gX(0)},
gX(d){var x,w=this.a
if(!D.bu.gaa(w)){w=w[0]
x=$.dn
w=(x!=null?x:A.dN())[w]}else w=0
return w},
ga5(){var x,w=this.a
if(w.length>1){w=w[1]
x=$.dn
w=(x!=null?x:A.dN())[w]}else w=0
return w},
ga6(d){var x,w=this.a
if(w.length>2){w=w[2]
x=$.dn
w=(x!=null?x:A.dN())[w]}else w=0
return w},
ga4(d){var x,w=this.a
if(w.length>3){w=w[3]
x=$.dn
w=(x!=null?x:A.dN())[w]}else w=0
return w},
geM(){return A.ee(this)},
em(d,e){var x,w=e.gX(e),v=this.a
if(!D.bu.gaa(v)){w=A.cV(w)
v.$flags&2&&C.f(v)
v[0]=w}w=e.ga5()
x=v.length
if(x>1){w=A.cV(w)
v.$flags&2&&C.f(v)
v[1]=w}w=e.ga6(e)
if(x>2){w=A.cV(w)
v.$flags&2&&C.f(v)
v[2]=w}w=e.ga4(e)
if(x>3){w=A.cV(w)
v.$flags&2&&C.f(v)
v[3]=w}},
gU(d){return new A.dv(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gp(e)===this.a.length){x=e.gu(e)
w=C.M(this,C.n(this).i("j.E"))
x=x===C.a2(w)}return x},
gu(d){var x=C.M(this,C.n(this).i("j.E"))
return C.a2(x)},
$ibP:1}
A.vR.prototype={
c7(d){return new A.vR(new Float32Array(C.bn(this.a)))},
gbF(){return B.dS},
gp(d){return this.a.length},
gcn(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
l(d,e,f){var x=this.a
if(e<x.length){x.$flags&2&&C.f(x)
x[e]=f}},
gbT(d){var x=this.a
return!D.e5.gaa(x)?x[0]:0},
gX(d){var x=this.a
return!D.e5.gaa(x)?x[0]:0},
ga5(){var x=this.a
return x.length>1?x[1]:0},
ga6(d){var x=this.a
return x.length>2?x[2]:0},
ga4(d){var x=this.a
return x.length>3?x[3]:1},
geM(){return A.ee(this)},
em(d,e){var x,w=e.gX(e),v=this.a
if(!D.e5.gaa(v)){v.$flags&2&&C.f(v)
v[0]=w}w=e.ga5()
x=v.length
if(x>1){v.$flags&2&&C.f(v)
v[1]=w}w=e.ga6(e)
if(x>2){v.$flags&2&&C.f(v)
v[2]=w}w=e.ga4(e)
if(x>3){v.$flags&2&&C.f(v)
v[3]=w}},
gU(d){return new A.dv(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gp(e)===this.a.length){x=e.gu(e)
w=C.M(this,C.n(this).i("j.E"))
x=x===C.a2(w)}return x},
gu(d){var x=C.M(this,C.n(this).i("j.E"))
return C.a2(x)},
$ibP:1}
A.vS.prototype={
c7(d){return new A.vS(new Float64Array(C.bn(this.a)))},
gbF(){return B.eN},
gp(d){return this.a.length},
gcn(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
l(d,e,f){var x=this.a
if(e<x.length){x.$flags&2&&C.f(x)
x[e]=f}},
gbT(d){var x=this.a
return!D.e6.gaa(x)?x[0]:0},
gX(d){var x=this.a
return!D.e6.gaa(x)?x[0]:0},
ga5(){var x=this.a
return x.length>1?x[1]:0},
ga6(d){var x=this.a
return x.length>2?x[2]:0},
ga4(d){var x=this.a
return x.length>3?x[3]:1},
geM(){return A.ee(this)},
em(d,e){var x,w=e.gX(e),v=this.a
if(!D.e6.gaa(v)){v.$flags&2&&C.f(v)
v[0]=w}w=e.ga5()
x=v.length
if(x>1){v.$flags&2&&C.f(v)
v[1]=w}w=e.ga6(e)
if(x>2){v.$flags&2&&C.f(v)
v[2]=w}w=e.ga4(e)
if(x>3){v.$flags&2&&C.f(v)
v[3]=w}},
gU(d){return new A.dv(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gp(e)===this.a.length){x=e.gu(e)
w=C.M(this,C.n(this).i("j.E"))
x=x===C.a2(w)}return x},
gu(d){var x=C.M(this,C.n(this).i("j.E"))
return C.a2(x)},
$ibP:1}
A.vT.prototype={
c7(d){return new A.vT(new Int16Array(C.bn(this.a)))},
gbF(){return B.eP},
gp(d){return this.a.length},
gcn(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
l(d,e,f){var x,w=this.a
if(e<w.length){x=D.c.C(f)
w.$flags&2&&C.f(w)
w[e]=x}},
gbT(d){var x=this.a
return!D.hq.gaa(x)?x[0]:0},
gX(d){var x=this.a
return!D.hq.gaa(x)?x[0]:0},
ga5(){var x=this.a
return x.length>1?x[1]:0},
ga6(d){var x=this.a
return x.length>2?x[2]:0},
ga4(d){var x=this.a
return x.length>3?x[3]:0},
geM(){return A.ee(this)},
em(d,e){var x,w=e.gX(e),v=this.a
if(!D.hq.gaa(v)){w=D.c.C(w)
v.$flags&2&&C.f(v)
v[0]=w}w=e.ga5()
x=v.length
if(x>1){w=D.c.C(w)
v.$flags&2&&C.f(v)
v[1]=w}w=e.ga6(e)
if(x>2){w=D.c.C(w)
v.$flags&2&&C.f(v)
v[2]=w}w=e.ga4(e)
if(x>3){w=D.c.C(w)
v.$flags&2&&C.f(v)
v[3]=w}},
gU(d){return new A.dv(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gp(e)===this.a.length){x=e.gu(e)
w=C.M(this,C.n(this).i("j.E"))
x=x===C.a2(w)}return x},
gu(d){var x=C.M(this,C.n(this).i("j.E"))
return C.a2(x)},
$ibP:1}
A.vU.prototype={
c7(d){return new A.vU(new Int32Array(C.bn(this.a)))},
gbF(){return B.eQ},
gp(d){return this.a.length},
gcn(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
l(d,e,f){var x,w=this.a
if(e<w.length){x=D.c.C(f)
w.$flags&2&&C.f(w)
w[e]=x}},
gbT(d){var x=this.a
return!D.aV.gaa(x)?x[0]:0},
gX(d){var x=this.a
return!D.aV.gaa(x)?x[0]:0},
ga5(){var x=this.a
return x.length>1?x[1]:0},
ga6(d){var x=this.a
return x.length>2?x[2]:0},
ga4(d){var x=this.a
return x.length>3?x[3]:0},
geM(){return A.ee(this)},
em(d,e){var x,w=e.gX(e),v=this.a
if(!D.aV.gaa(v)){C.bc(w)
v.$flags&2&&C.f(v)
v[0]=w}w=e.ga5()
x=v.length
if(x>1){w=D.c.C(w)
v.$flags&2&&C.f(v)
v[1]=w}w=e.ga6(e)
if(x>2){w=D.c.C(w)
v.$flags&2&&C.f(v)
v[2]=w}w=e.ga4(e)
if(x>3){w=D.c.C(w)
v.$flags&2&&C.f(v)
v[3]=w}},
gU(d){return new A.dv(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gp(e)===this.a.length){x=e.gu(e)
w=C.M(this,C.n(this).i("j.E"))
x=x===C.a2(w)}return x},
gu(d){var x=C.M(this,C.n(this).i("j.E"))
return C.a2(x)},
$ibP:1}
A.vV.prototype={
c7(d){return new A.vV(new Int8Array(C.bn(this.a)))},
gbF(){return B.eO},
gp(d){return this.a.length},
gcn(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
l(d,e,f){var x,w=this.a
if(e<w.length){x=D.c.C(f)
w.$flags&2&&C.f(w)
w[e]=x}},
gbT(d){var x=this.a
return!D.hr.gaa(x)?x[0]:0},
gX(d){var x=this.a
return!D.hr.gaa(x)?x[0]:0},
ga5(){var x=this.a
return x.length>1?x[1]:0},
ga6(d){var x=this.a
return x.length>2?x[2]:0},
ga4(d){var x=this.a
return x.length>3?x[3]:0},
geM(){return A.ee(this)},
em(d,e){var x,w=e.gX(e),v=this.a
if(!D.hr.gaa(v)){w=D.c.C(w)
v.$flags&2&&C.f(v)
v[0]=w}w=e.ga5()
x=v.length
if(x>1){w=D.c.C(w)
v.$flags&2&&C.f(v)
v[1]=w}w=e.ga6(e)
if(x>2){w=D.c.C(w)
v.$flags&2&&C.f(v)
v[2]=w}w=e.ga4(e)
if(x>3){w=D.c.C(w)
v.$flags&2&&C.f(v)
v[3]=w}},
gU(d){return new A.dv(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gp(e)===this.a.length){x=e.gu(e)
w=C.M(this,C.n(this).i("j.E"))
x=x===C.a2(w)}return x},
gu(d){var x=C.M(this,C.n(this).i("j.E"))
return C.a2(x)},
$ibP:1}
A.vW.prototype={
c7(d){var x=this.b
x===$&&C.a()
return new A.vW(this.a,x)},
gbF(){return B.ch},
gcn(){return null},
rD(d){var x
if(d<this.a){x=this.b
x===$&&C.a()
x=D.b.d5(x,7-d)&1}else x=0
return x},
vB(d,e){var x
if(d>=this.a)return
d=7-d
x=this.b
x===$&&C.a()
this.b=e!==0?(x|D.b.cA(1,d))>>>0:(x&~(D.b.cA(1,d)&255))>>>0},
h(d,e){return this.rD(e)},
l(d,e,f){return this.vB(e,f)},
gbT(d){return this.rD(0)},
gX(d){return this.rD(0)},
ga5(){return this.rD(1)},
ga6(d){return this.rD(2)},
ga4(d){return this.rD(3)},
geM(){return A.ee(this)},
em(d,e){this.dZ(e.gX(e),e.ga5(),e.ga6(e),e.ga4(e))},
dZ(d,e,f,g){var x=this
x.vB(0,d)
x.vB(1,e)
x.vB(2,f)
x.vB(3,g)},
gU(d){return new A.dv(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gp(e)===this.a){x=e.gu(e)
w=C.M(this,C.n(this).i("j.E"))
x=x===C.a2(w)}return x},
gu(d){var x=C.M(this,C.n(this).i("j.E"))
return C.a2(x)},
$ibP:1,
gp(d){return this.a}}
A.vX.prototype={
c7(d){return new A.vX(new Uint16Array(C.bn(this.a)))},
gbF(){return B.b_},
gp(d){return this.a.length},
gcn(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
l(d,e,f){var x,w=this.a
if(e<w.length){x=D.c.C(f)
w.$flags&2&&C.f(w)
w[e]=x}},
gbT(d){var x=this.a
return!D.bu.gaa(x)?x[0]:0},
gX(d){var x=this.a
return!D.bu.gaa(x)?x[0]:0},
ga5(){var x=this.a
return x.length>1?x[1]:0},
ga6(d){var x=this.a
return x.length>2?x[2]:0},
ga4(d){var x=this.a
return x.length>3?x[3]:0},
geM(){return A.ee(this)},
em(d,e){var x,w=e.gX(e),v=this.a
if(!D.bu.gaa(v)){w=D.c.C(w)
v.$flags&2&&C.f(v)
v[0]=w}w=e.ga5()
x=v.length
if(x>1){w=D.c.C(w)
v.$flags&2&&C.f(v)
v[1]=w}w=e.ga6(e)
if(x>2){w=D.c.C(w)
v.$flags&2&&C.f(v)
v[2]=w}w=e.ga4(e)
if(x>3){w=D.c.C(w)
v.$flags&2&&C.f(v)
v[3]=w}},
gU(d){return new A.dv(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gp(e)===this.a.length){x=e.gu(e)
w=C.M(this,C.n(this).i("j.E"))
x=x===C.a2(w)}return x},
gu(d){var x=C.M(this,C.n(this).i("j.E"))
return C.a2(x)},
$ibP:1}
A.vY.prototype={
c7(d){var x=this.b
x===$&&C.a()
return new A.vY(this.a,x)},
gbF(){return B.cG},
gcn(){return null},
rE(d){var x
if(d<this.a){x=this.b
x===$&&C.a()
x=D.b.d5(x,6-(d<<1>>>0))&3}else x=0
return x},
vC(d,e){var x,w,v
if(d>=this.a)return
x=B.Tx[d]
w=D.c.C(e)
v=this.b
v===$&&C.a()
this.b=(v&x|D.b.cA(w&3,6-(d<<1>>>0)))>>>0},
h(d,e){return this.rE(e)},
l(d,e,f){return this.vC(e,f)},
gbT(d){return this.rE(0)},
gX(d){return this.rE(0)},
ga5(){return this.rE(1)},
ga6(d){return this.rE(2)},
ga4(d){return this.rE(3)},
geM(){return A.ee(this)},
em(d,e){this.dZ(e.gX(e),e.ga5(),e.ga6(e),e.ga4(e))},
dZ(d,e,f,g){var x=this
x.vC(0,d)
x.vC(1,e)
x.vC(2,f)
x.vC(3,g)},
gU(d){return new A.dv(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gp(e)===this.a){x=e.gu(e)
w=C.M(this,C.n(this).i("j.E"))
x=x===C.a2(w)}return x},
gu(d){var x=C.M(this,C.n(this).i("j.E"))
return C.a2(x)},
$ibP:1,
gp(d){return this.a}}
A.vZ.prototype={
c7(d){return new A.vZ(new Uint32Array(C.bn(this.a)))},
gbF(){return B.dT},
gp(d){return this.a.length},
gcn(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
l(d,e,f){var x,w=this.a
if(e<w.length){x=D.c.C(f)
w.$flags&2&&C.f(w)
w[e]=x}},
gbT(d){var x=this.a
return!D.aJ.gaa(x)?x[0]:0},
gX(d){var x=this.a
return!D.aJ.gaa(x)?x[0]:0},
ga5(){var x=this.a
return x.length>1?x[1]:0},
ga6(d){var x=this.a
return x.length>2?x[2]:0},
ga4(d){var x=this.a
return x.length>3?x[3]:0},
geM(){return A.ee(this)},
em(d,e){var x,w=e.gX(e),v=this.a
if(!D.aJ.gaa(v)){w=D.c.C(w)
v.$flags&2&&C.f(v)
v[0]=w}w=e.ga5()
x=v.length
if(x>1){w=D.c.C(w)
v.$flags&2&&C.f(v)
v[1]=w}w=e.ga6(e)
if(x>2){w=D.c.C(w)
v.$flags&2&&C.f(v)
v[2]=w}w=e.ga4(e)
if(x>3){w=D.c.C(w)
v.$flags&2&&C.f(v)
v[3]=w}},
gU(d){return new A.dv(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gp(e)===this.a.length){x=e.gu(e)
w=C.M(this,C.n(this).i("j.E"))
x=x===C.a2(w)}return x},
gu(d){var x=C.M(this,C.n(this).i("j.E"))
return C.a2(x)},
$ibP:1}
A.w_.prototype={
c7(d){return new A.w_(this.a,new Uint8Array(C.bn(this.b)))},
gbF(){return B.cH},
gcn(){return null},
rO(d){var x
if(d<0||d>=this.a)x=0
else{x=this.b
x=d<2?D.b.d5(x[0],4-(d<<2>>>0))&15:D.b.d5(x[1],4-((d&1)<<2))&15}return x},
wj(d,e){var x,w,v,u
if(d>=this.a)return
x=D.b.b5(D.c.C(e),0,15)
if(d>1){d&=1
w=1}else w=0
if(d===0){v=this.b
u=v[w]
v.$flags&2&&C.f(v)
v[w]=(u&15|x<<4)>>>0}else if(d===1){v=this.b
u=v[w]
v.$flags&2&&C.f(v)
v[w]=(u&240|x)>>>0}},
h(d,e){return this.rO(e)},
l(d,e,f){return this.wj(e,f)},
gbT(d){return this.rO(0)},
gX(d){return this.rO(0)},
ga5(){return this.rO(1)},
ga6(d){return this.rO(2)},
ga4(d){return this.rO(3)},
geM(){return A.ee(this)},
em(d,e){this.dZ(e.gX(e),e.ga5(),e.ga6(e),e.ga4(e))},
dZ(d,e,f,g){var x=this
x.wj(0,d)
x.wj(1,e)
x.wj(2,f)
x.wj(3,g)},
gU(d){return new A.dv(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gp(e)===this.a){x=e.gu(e)
w=C.M(this,C.n(this).i("j.E"))
x=x===C.a2(w)}return x},
gu(d){var x=C.M(this,C.n(this).i("j.E"))
return C.a2(x)},
$ibP:1,
gp(d){return this.a}}
A.ka.prototype={
a9c(d,e,f,g){var x=this.a
x.$flags&2&&C.f(x)
x[0]=d
x[1]=e
x[2]=f
x[3]=g},
c7(d){return new A.ka(new Uint8Array(C.bn(this.a)))},
gbF(){return B.y},
gp(d){return this.a.length},
gcn(){return null},
h(d,e){var x=this.a
return e<x.length?x[e]:0},
l(d,e,f){var x,w=this.a
if(e<w.length){x=D.c.C(f)
w.$flags&2&&C.f(w)
w[e]=x}},
gbT(d){var x=this.a
return!D.k.gaa(x)?x[0]:0},
gX(d){var x=this.a
return!D.k.gaa(x)?x[0]:0},
ga5(){var x=this.a
return x.length>1?x[1]:0},
ga6(d){var x=this.a
return x.length>2?x[2]:0},
ga4(d){var x=this.a
return x.length>3?x[3]:255},
geM(){return A.ee(this)},
em(d,e){var x,w=e.gX(e),v=this.a
if(!D.k.gaa(v)){w=D.c.C(w)
v.$flags&2&&C.f(v)
v[0]=w}w=e.ga5()
x=v.length
if(x>1){w=D.c.C(w)
v.$flags&2&&C.f(v)
v[1]=w}w=e.ga6(e)
if(x>2){w=D.c.C(w)
v.$flags&2&&C.f(v)
v[2]=w}w=e.ga4(e)
if(x>3){w=D.c.C(w)
v.$flags&2&&C.f(v)
v[3]=w}},
gU(d){return new A.dv(this)},
k(d,e){var x,w
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gp(e)===this.a.length){x=e.gu(e)
w=C.M(this,C.n(this).i("j.E"))
x=x===C.a2(w)}return x},
gu(d){var x=C.M(this,C.n(this).i("j.E"))
return C.a2(x)},
$ibP:1}
A.Oc.prototype={}
A.r0.prototype={}
A.hy.prototype={
N(){return"Format."+this.b}}
A.Nw.prototype={
N(){return"BlendMode."+this.b}}
A.rm.prototype={
zk(d){var x=$.aKw()
if(!x.aq(0,d))return"<unknown>"
return x.h(0,d).a},
j(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(x=j.a,w=new C.dJ(x,x.r,x.e),v=y.p,u=y.r,t=y.N,s=y.P,r="";w.q();){q=w.d
r+=q+"\n"
p=x.h(0,q)
for(q=p.a,q=new C.dJ(q,q.r,q.e);q.q();){o=q.d
n=p.h(0,o)
r=n==null?r+("\t"+j.zk(o)+"\n"):r+("\t"+j.zk(o)+": "+n.j(0)+"\n")}for(q=p.b.a,o=new C.dJ(q,q.r,q.e);o.q();){m=o.d
r+=m+"\n"
if(!q.aq(0,m))q.l(0,m,new A.lo(C.t(v,u),new A.oB(C.t(t,s))))
l=q.h(0,m)
for(m=l.a,m=new C.dJ(m,m.r,m.e);m.q();){k=m.d
n=l.h(0,k)
r=n==null?r+("\t"+j.zk(k)+"\n"):r+("\t"+j.zk(k)+": "+n.j(0)+"\n")}}}return r.charCodeAt(0)==0?r:r},
fz(c4,c5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2="Length must be a non-negative integer: ",c3=c5.e
c5.e=!0
x=c5.d
a0=c5.O()
if(a0===18761){c5.e=!1
if(c5.O()!==42){c5.e=c3
return!1}}else if(a0===19789){c5.e=!0
if(c5.O()!==42){c5.e=c3
return!1}}else return!1
w=c5.J()
v=0
for(a1=c1.a,a2=y.gn,a3=c5.c,a4=y.p,a5=y.r,a6=y.N,a7=y.P;w>0;)try{a8=x+w
c5.d=a8
if(a3-a8<2)break
u=new A.lo(C.t(a4,a5),new A.oB(C.t(a6,a7)))
t=c5.O()
if(t*12>a3-c5.d)break
s=t
a8=s
if(a8<0)C.aa(C.cI(c2+C.q(a8),null))
r=C.b(new Array(a8),a2)
for(q=0;q<s;++q)J.b7(r,q,c1.UP(c5,x))
p=r
for(a8=p,a9=a8.length,b0=0;b0<a8.length;a8.length===a9||(0,C.z)(a8),++b0){o=a8[b0]
if(o.b!=null){b1=o.a
b2=o.b
b2.toString
J.b7(u,b1,b2)}}a1.l(0,"ifd"+C.q(v),u);++v
n=c5.J()
if(J.d(n,w))break
else w=n}catch(b3){break}for(a8=new C.dc(a1,a1.r,a1.e);a8.q();){m=a8.d
for(a9=J.aR(B.nE.gcT(B.nE));a9.q();){l=a9.gM(a9)
if(m.a.aq(0,l))try{k=J.k(m,l).C(0)
c5.d=x+k
j=new A.lo(C.t(a4,a5),new A.oB(C.t(a6,a7)))
i=c5.O()
h=i
b1=h
if(b1<0)C.aa(C.cI(c2+C.q(b1),null))
g=C.b(new Array(b1),a2)
for(f=0;f<h;++f)J.b7(g,f,c1.UP(c5,x))
e=g
for(b1=e,b2=b1.length,b0=0;b0<b1.length;b1.length===b2||(0,C.z)(b1),++b0){d=b1[b0]
if(d.b!=null){b4=d.a
b5=d.b
b5.toString
J.b7(j,b4,b5)}}b1=m.b
b2=B.nE.h(0,l)
b2.toString
b1.a.l(0,b2,j)}catch(b3){continue}}}c1.b=null
b6=a1.h(0,"ifd1")
if(b6!=null){a1=b6.a
a1=a1.aq(0,513)&&a1.aq(0,514)}else a1=!1
if(a1){b7=b6.h(0,513).C(0)
b8=b6.h(0,514).C(0)
b9=x+b7
if(b8>0&&b9>=x&&b9+b8<=a3){c0=c5.d
c5.d=b9
c1.b=c5.ei(b8).da()
c5.d=c0}}c5.e=c3
return!1},
UP(d,e){var x,w,v,u,t,s,r,q=d.O(),p=d.O(),o=d.J(),n=new A.a2P(q,null)
if(p>=14)return n
x=B.vx[p]
w=o*B.n4[p]
v=d.d
if((w>4?d.d=d.J()+e:v)+w>d.c)return n
u=d.ei(w)
switch(x.a){case 0:break
case 6:n.b=new A.oD(new Int8Array(C.bn(J.aKD(D.k.gaj(u.da()),0,o))))
break
case 1:n.b=new A.mL(new Uint8Array(C.bn(u.ei(o).da())))
break
case 7:n.b=new A.wI(new Uint8Array(C.bn(u.ei(o).da())))
break
case 2:n.b=new A.rR(o===0?"":u.ep(o-1))
break
case 3:n.b=A.aRr(u,o)
break
case 4:n.b=A.aRm(u,o)
break
case 5:n.b=A.aRn(u,o)
break
case 10:n.b=A.aRp(u,o)
break
case 8:n.b=A.aRq(u,o)
break
case 9:n.b=A.aRo(u,o)
break
case 11:n.b=A.aRs(u,o)
break
case 12:n.b=A.aRl(u,o)
break
case 13:if(o===1){t=new A.wG(0)
s=u.J()
r=$.d4()
r.$flags&2&&C.f(r)
r[0]=s
t.a=$.eE()[0]
n.b=t}break}d.d=v+4
return n}}
A.a2P.prototype={}
A.R3.prototype={}
A.oB.prototype={
a9m(d){d.a.aA(0,new A.aio(this))},
aq(d,e){return this.a.aq(0,e)},
h(d,e){var x=this.a
if(!x.aq(0,e))x.l(0,e,new A.lo(C.t(y.p,y.r),new A.oB(C.t(y.N,y.P))))
x=x.h(0,e)
x.toString
return x},
l(d,e,f){this.a.l(0,e,f)}}
A.lo.prototype={
ast(d){d.a.aA(0,new A.aip(this))
d.b.a.aA(0,new A.aiq(this))},
aq(d,e){return this.a.aq(0,e)},
h(d,e){if(typeof e=="string")e=B.DQ.h(0,e)
if(typeof e=="number")return this.a.h(0,e)
return null},
l(d,e,f){var x
if(typeof e=="string")e=B.DQ.h(0,e)
if(!C.o0(e))return
if(f instanceof A.el)this.a.l(0,e,f)
else{x=$.aKw().h(0,e)
if(x!=null)switch(x.b.a){case 1:break
case 2:break
case 3:break
case 4:break
case 5:break
case 6:break
case 7:break
case 8:break
case 9:break
case 10:break
case 11:break
case 12:break
case 13:break
case 0:break}}},
geO(d){var x=this.a.h(0,274)
return x==null?null:x.C(0)},
seO(d,e){this.a.L(0,274)}}
A.fM.prototype={
N(){return"IfdValueType."+this.b}}
A.el.prototype={
dV(d,e){return 0},
C(d){return this.dV(0,0)},
lR(d){return 0},
l8(){return new Uint8Array(0)},
j(d){return""},
k(d,e){var x=this
if(e==null)return!1
return e instanceof A.el&&x.gh2(x)===e.gh2(e)&&x.gp(x)===e.gp(e)&&x.gu(x)===e.gu(e)},
gu(d){return 0}}
A.mL.prototype={
c7(d){return new A.mL(new Uint8Array(C.bn(this.a)))},
gh2(d){return B.rv},
gp(d){return this.a.length},
k(d,e){var x,w
if(e==null)return!1
if(e instanceof A.mL){x=this.a
w=e.a
x=x.length===w.length&&C.a2(x)===C.a2(w)}else x=!1
return x},
gu(d){return C.a2(this.a)},
dV(d,e){return this.a[e]},
C(d){return this.dV(0,0)},
l8(){return this.a},
j(d){var x=this.a
return x.length===1?""+x[0]:C.q(x)}}
A.rR.prototype={
c7(d){return new A.rR(this.a)},
gh2(d){return B.ad},
gp(d){return this.a.length+1},
k(d,e){var x,w
if(e==null)return!1
if(e instanceof A.rR){x=this.a
w=e.a
x=x.length+1===w.length+1&&D.e.gu(x)===D.e.gu(w)}else x=!1
return x},
gu(d){return D.e.gu(this.a)},
l8(){return new Uint8Array(C.bn(new C.bW(this.a)))},
j(d){return this.a}}
A.rW.prototype={
a9r(d,e){var x,w,v,u
for(x=this.a,w=x.$flags|0,v=0;v<e;++v){u=d.O()
w&2&&C.f(x)
x[v]=u}},
c7(d){return new A.rW(new Uint16Array(C.bn(this.a)))},
gh2(d){return B.a7},
gp(d){return this.a.length},
k(d,e){var x,w
if(e==null)return!1
if(e instanceof A.rW){x=this.a
w=e.a
x=x.length===w.length&&C.a2(x)===C.a2(w)}else x=!1
return x},
gu(d){return C.a2(this.a)},
dV(d,e){return this.a[e]},
C(d){return this.dV(0,0)},
l8(){return J.e3(D.bu.gaj(this.a))},
j(d){var x=this.a
return x.length===1?""+x[0]:C.q(x)}}
A.oC.prototype={
a9o(d,e){var x,w,v,u
for(x=this.a,w=x.$flags|0,v=0;v<e;++v){u=d.J()
w&2&&C.f(x)
x[v]=u}},
c7(d){return new A.oC(new Uint32Array(C.bn(this.a)))},
gh2(d){return B.bh},
gp(d){return this.a.length},
k(d,e){var x,w
if(e==null)return!1
if(e instanceof A.oC){x=this.a
w=e.a
x=x.length===w.length&&C.a2(x)===C.a2(w)}else x=!1
return x},
gu(d){return C.a2(this.a)},
dV(d,e){return this.a[e]},
C(d){return this.dV(0,0)},
l8(){return J.e3(D.aJ.gaj(this.a))},
j(d){var x=this.a
return x.length===1?""+x[0]:C.q(x)}}
A.rS.prototype={
c7(d){return new A.rS(C.jA(this.a,!0,y.i))},
gh2(d){return B.bL},
gp(d){return this.a.length},
dV(d,e){return this.a[e].C(0)},
C(d){return this.dV(0,0)},
lR(d){return this.a[0].lR(0)},
k(d,e){var x,w,v
if(e==null)return!1
if(e instanceof A.rS){x=this.a
w=x.length
v=e.a
x=w===v.length&&C.a2(x)===C.a2(v)}else x=!1
return x},
gu(d){return C.a2(this.a)},
j(d){var x=this.a
return x.length===1?x[0].j(0):C.q(x)}}
A.oD.prototype={
c7(d){return new A.oD(new Int8Array(C.bn(this.a)))},
gh2(d){return B.rA},
gp(d){return this.a.length},
k(d,e){var x,w
if(e==null)return!1
if(e instanceof A.oD){x=this.a
w=e.a
x=x.length===w.length&&C.a2(x)===C.a2(w)}else x=!1
return x},
gu(d){return C.a2(this.a)},
dV(d,e){return this.a[e]},
C(d){return this.dV(0,0)},
l8(){return J.e3(D.hr.gaj(this.a))},
j(d){var x=this.a
return x.length===1?""+x[0]:C.q(x)}}
A.rV.prototype={
a9q(d,e){var x,w,v,u,t
for(x=this.a,w=x.$flags|0,v=0;v<e;++v){u=d.O()
t=$.hp()
t.$flags&2&&C.f(t)
t[0]=u
u=$.i0()[0]
w&2&&C.f(x)
x[v]=u}},
c7(d){return new A.rV(new Int16Array(C.bn(this.a)))},
gh2(d){return B.rB},
gp(d){return this.a.length},
k(d,e){var x,w
if(e==null)return!1
if(e instanceof A.rV){x=this.a
w=e.a
x=x.length===w.length&&C.a2(x)===C.a2(w)}else x=!1
return x},
gu(d){return C.a2(this.a)},
dV(d,e){return this.a[e]},
C(d){return this.dV(0,0)},
l8(){return J.e3(D.hq.gaj(this.a))},
j(d){var x=this.a
return x.length===1?""+x[0]:C.q(x)}}
A.rT.prototype={
a9p(d,e){var x,w,v,u,t
for(x=this.a,w=x.$flags|0,v=0;v<e;++v){u=d.J()
t=$.d4()
t.$flags&2&&C.f(t)
t[0]=u
u=$.eE()[0]
w&2&&C.f(x)
x[v]=u}},
c7(d){return new A.rT(new Int32Array(C.bn(this.a)))},
gh2(d){return B.rC},
gp(d){return this.a.length},
k(d,e){var x,w
if(e==null)return!1
if(e instanceof A.rT){x=this.a
w=e.a
x=x.length===w.length&&C.a2(x)===C.a2(w)}else x=!1
return x},
gu(d){return C.a2(this.a)},
dV(d,e){return this.a[e]},
C(d){return this.dV(0,0)},
l8(){return J.e3(D.aV.gaj(this.a))},
j(d){var x=this.a
return x.length===1?""+x[0]:C.q(x)}}
A.rU.prototype={
c7(d){return new A.rU(C.jA(this.a,!0,y.i))},
gh2(d){return B.rw},
gp(d){return this.a.length},
k(d,e){var x,w,v
if(e==null)return!1
if(e instanceof A.rU){x=this.a
w=x.length
v=e.a
x=w===v.length&&C.a2(x)===C.a2(v)}else x=!1
return x},
gu(d){return C.a2(this.a)},
dV(d,e){return this.a[e].C(0)},
C(d){return this.dV(0,0)},
lR(d){return this.a[0].lR(0)},
j(d){var x=this.a
return x.length===1?x[0].j(0):C.q(x)}}
A.wH.prototype={
a9s(d,e){var x,w,v,u,t
for(x=this.a,w=x.$flags|0,v=0;v<e;++v){u=d.J()
t=$.d4()
t.$flags&2&&C.f(t)
t[0]=u
u=$.qG()[0]
w&2&&C.f(x)
x[v]=u}},
c7(d){return new A.wH(new Float32Array(C.bn(this.a)))},
gh2(d){return B.rx},
gp(d){return this.a.length},
k(d,e){var x,w
if(e==null)return!1
if(e instanceof A.wH){x=this.a
w=e.a
x=x.length===w.length&&C.a2(x)===C.a2(w)}else x=!1
return x},
gu(d){return C.a2(this.a)},
l8(){return J.e3(D.e5.gaj(this.a))},
lR(d){return this.a[0]},
j(d){var x=this.a
return x.length===1?C.q(x[0]):C.q(x)}}
A.wF.prototype={
a9n(d,e){var x,w,v,u
for(x=this.a,w=x.$flags|0,v=0;v<e;++v){u=d.EI()
w&2&&C.f(x)
x[v]=u}},
c7(d){return new A.wF(new Float64Array(C.bn(this.a)))},
gh2(d){return B.ry},
gp(d){return this.a.length},
k(d,e){var x,w
if(e==null)return!1
if(e instanceof A.wF){x=this.a
w=e.a
x=x.length===w.length&&C.a2(x)===C.a2(w)}else x=!1
return x},
gu(d){return C.a2(this.a)},
lR(d){return this.a[0]},
l8(){return J.e3(D.e6.gaj(this.a))},
j(d){var x=this.a
return x.length===1?C.q(x[0]):C.q(x)}}
A.wI.prototype={
c7(d){return new A.wI(new Uint8Array(C.bn(this.a)))},
gh2(d){return B.eS},
gp(d){return this.a.length},
l8(){return this.a},
k(d,e){var x,w
if(e==null)return!1
if(e instanceof A.wI){x=this.a
w=e.a
x=x.length===w.length&&C.a2(x)===C.a2(w)}else x=!1
return x},
gu(d){return C.a2(this.a)},
j(d){return"<data>"}}
A.wG.prototype={
c7(d){return A.b3B(this.a)},
gh2(d){return B.rz},
gp(d){return 1},
k(d,e){var x
if(e==null)return!1
x=!1
if(e instanceof A.wG)x=this.a===e.a
return x},
gu(d){return this.a},
dV(d,e){if(e!==0)throw C.e(C.xL("Ifd tags must have exactly one entry (the offset)"))
return this.a},
C(d){return this.dV(0,0)},
l8(){var x=this.a
return new Uint8Array(C.bn(C.b([D.b.I(x,24),D.b.I(x,16),D.b.I(x,8),x],y.t)))},
j(d){return"Ifd@"+this.a}}
A.fB.prototype={
N(){return"BmpCompression."+this.b}}
A.ac1.prototype={}
A.qQ.prototype={
Pu(d,e){var x,w,v,u,t,s,r,q=this,p=q.d,o=p<=40
if(o){x=q.r
x=x===B.lA||x===B.lB}else x=!0
if(x){x=q.as=d.J()
w=A.aIT(x)
q.CW=w
v=D.b.d5(x,w)
x=v>0
q.cx=x?255/v:0
w=q.at=d.J()
u=A.aIT(w)
q.cy=u
t=D.b.d5(w,u)
q.db=x?255/t:0
w=q.ax=d.J()
u=A.aIT(w)
q.dx=u
s=D.b.d5(w,u)
q.dy=x?255/s:0
if(!o||q.r===B.lB){o=q.ay=d.J()
x=A.aIT(o)
q.fr=x
r=D.b.d5(o,x)
q.fx=r>0?255/r:0}else if(q.f===16){q.ay=4278190080
q.fr=24
q.fx=1}else{q.ay=4278190080
q.fr=24
q.fx=1}}else if(q.f===16){q.as=31744
q.CW=10
q.cx=8.225806451612904
q.at=992
q.cy=5
q.db=8.225806451612904
q.ax=31
q.dx=0
q.dy=8.225806451612904
q.fx=q.fr=q.ay=0}else{q.as=16711680
q.CW=16
q.cx=1
q.at=65280
q.cy=8
q.db=1
q.ax=255
q.dx=0
q.dy=1
q.ay=4278190080
q.fr=24
q.fx=1}o=d.d
d.d=o+(p-(o-q.fy))
if(q.f<=8)q.azF(d)},
gxT(){var x=this.d
if(x!==40)if(x===124){x=this.ay
x===$&&C.a()
x=x===0}else x=!1
else x=!0
return x},
gbz(d){return Math.abs(this.c)},
azF(d){var x,w,v,u,t,s=this,r=s.z
if(r===0)r=D.b.c_(1,s.f)
s.ch=new A.lB(new Uint8Array(r*3),r,3)
for(x=0;x<r;++x){w=J.k(d.a,d.d++)
v=J.k(d.a,d.d++)
u=J.k(d.a,d.d++)
t=J.k(d.a,d.d++)
s.ch.zC(x,u,v,w,t)}},
atR(d,e){var x,w,v,u,t,s,r,q,p,o=this
if(o.ch!=null){x=o.f
if(x===1){w=d.bj()
for(v=7;v>=0;--v)e.$4(D.b.jD(w,v)&1,0,0,0)
return}else if(x===2){w=d.bj()
for(v=6;v>=0;v-=2)e.$4(D.b.jD(w,v)&2,0,0,0)}else if(x===4){w=d.bj()
e.$4(D.b.I(w,4)&15,0,0,0)
e.$4(w&15,0,0,0)
return}else if(x===8){e.$4(d.bj(),0,0,0)
return}}x=o.r
if(x===B.lA&&o.f===32){u=d.J()
x=o.as
x===$&&C.a()
t=o.CW
t===$&&C.a()
t=D.b.d5((u&x)>>>0,t)
x=o.cx
x===$&&C.a()
s=D.c.C(t*x)
x=o.at
x===$&&C.a()
t=o.cy
t===$&&C.a()
t=D.b.d5((u&x)>>>0,t)
x=o.db
x===$&&C.a()
r=D.c.C(t*x)
x=o.ax
x===$&&C.a()
t=o.dx
t===$&&C.a()
t=D.b.d5((u&x)>>>0,t)
x=o.dy
x===$&&C.a()
q=D.c.C(t*x)
if(o.gxT())p=255
else{x=o.ay
x===$&&C.a()
t=o.fr
t===$&&C.a()
t=D.b.d5((u&x)>>>0,t)
x=o.fx
x===$&&C.a()
p=D.c.C(t*x)}return e.$4(s,r,q,p)}else{t=o.f
if(t===32&&x===B.pA){q=d.bj()
r=d.bj()
s=d.bj()
p=d.bj()
return e.$4(s,r,q,o.gxT()?255:p)}else if(t===24){q=d.bj()
r=d.bj()
return e.$4(d.bj(),r,q,255)}else if(t===16){u=d.O()
x=o.as
x===$&&C.a()
t=o.CW
t===$&&C.a()
t=D.b.d5((u&x)>>>0,t)
x=o.cx
x===$&&C.a()
s=D.c.C(t*x)
x=o.at
x===$&&C.a()
t=o.cy
t===$&&C.a()
t=D.b.d5((u&x)>>>0,t)
x=o.db
x===$&&C.a()
r=D.c.C(t*x)
x=o.ax
x===$&&C.a()
t=o.dx
t===$&&C.a()
t=D.b.d5((u&x)>>>0,t)
x=o.dy
x===$&&C.a()
q=D.c.C(t*x)
if(o.gxT())p=255
else{x=o.ay
x===$&&C.a()
t=o.fr
t===$&&C.a()
t=D.b.d5((u&x)>>>0,t)
x=o.fx
x===$&&C.a()
p=D.c.C(t*x)}return e.$4(s,r,q,p)}else throw C.e(A.aI("Unsupported bitsPerPixel ("+t+") or compression ("+x.j(0)+")."))}},
gbO(d){return this.b}}
A.Nz.prototype={
kW(d){var x,w
if(!A.aPH(A.ba(d,!1,null,0))||d.length<18)return!1
x=A.ba(d,!1,null,0)
x.d+=14
w=x.J()
return w>=12&&w<=124},
fF(d){var x
if(!this.kW(d))return null
x=A.ba(d,!1,null,0)
this.a=x
return this.b=A.b0y(x,null)},
eI(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.b
if(e==null)return new A.mN(f,f,f,f,0,B.aa,0,0)
x=g.a
x===$&&C.a()
w=e.a.b
w===$&&C.a()
x.d=w
v=e.f
w=e.b
u=D.b.bV(w*v+31,32)*4
x=g.c
if(x)t=4
else if(v===1||v===4||v===8)t=1
else{s=v===32?4:3
t=s}if(x)r=B.y
else if(v===1)r=B.ch
else{if(v===2)s=B.cG
else if(v===4)s=B.cH
else s=B.y
r=s}q=x?f:e.ch
p=A.dx(f,f,r,0,B.aa,e.gbz(e),f,0,t,q,B.y,w,!1)
for(o=p.gbz(0)-1,x=e.c,w=1/x<0,s=x<0,x=x===0;o>=0;--o){n={}
if(!(x?w:s))m=o
else{l=p.a
l=l==null?f:l.b
m=(l==null?0:l)-1-o}l=g.a
k=l.en(u)
l.d=l.d+(k.c-k.d)
l=p.a
j=l==null
i=j?f:l.a
if(i==null)i=0
n.a=0
h=j?f:l.bY(0,m,f)
if(h==null)h=new A.cE()
for(;n.a<i;)e.atR(k,new A.ac0(n,g,i,e,h))}return p},
je(d,e,f){if(this.fF(e)==null)return null
return this.eI(0)}}
A.ae1.prototype={}
A.adK.prototype={}
A.adL.prototype={}
A.R5.prototype={}
A.Sp.prototype={
yo(){return this.w},
l9(d,e,f,g,h){throw C.e(A.aI("B44 compression not yet supported."))},
uZ(d,e,f){return this.l9(d,e,f,null,null)},
j(d){return C.q(this.r)+" "+this.x}}
A.wp.prototype={
N(){return"ExrChannelType."+this.b}}
A.rp.prototype={
N(){return"ExrChannelName."+this.b}}
A.R6.prototype={
a9g(d){var x=this,w=d.yJ()
x.a=w
if(w.length===0)return
x.c=B.Wl[d.J()]
d.bj()
d.d+=3
x.f=d.J()
x.r=d.J()
w=x.a
if(w==="R"){x.w=!0
x.b=B.PL}else if(w==="G"){x.w=!0
x.b=B.PM}else if(w==="B"){x.w=!0
x.b=B.PN}else if(w==="A"){x.w=!0
x.b=B.PO}else{x.w=!1
x.b=B.PP}switch(x.c.a){case 0:x.d=4
break
case 1:x.d=2
break
case 2:x.d=4
break}}}
A.kl.prototype={
N(){return"ExrCompressorType."+this.b}}
A.agd.prototype={
l9(d,e,f,g,h){throw C.e(A.aI("Unsupported compression type"))},
uZ(d,e,f){return this.l9(d,e,f,null,null)}}
A.aiK.prototype={}
A.R7.prototype={}
A.R8.prototype={
Pw(d){var x,w,v,u,t=this,s=A.ba(d,!1,null,0)
if(s.J()!==20000630)throw C.e(A.aI("File is not an OpenEXR image file."))
x=t.d=s.bj()
if(x!==2)throw C.e(A.aI("Cannot read version "+x+" image files."))
x=t.e=s.l4()
if((x&4294967289)>>>0!==0)throw C.e(A.aI("The file format version number's flag field contains unrecognized flags."))
if((x&16)===0){w=t.c
v=A.aRH(w.length,(x&2)!==0,s)
if(v.w>0)w.push(v)}else for(x=t.c;!0;){v=A.aRH(x.length,(t.e&2)!==0,s)
if(v.w<=0)break
x.push(v)}x=t.c
w=x.length
if(w===0)throw C.e(A.aI("Error reading image header"))
for(u=0;u<x.length;x.length===w||(0,C.z)(x),++u)x[u].azE(s)
t.an3(s)},
an3(d){var x,w,v,u,t=this
for(x=t.c,w=x.length,v=0;v<x.length;x.length===w||(0,C.z)(x),++v){u=x[v]
t.a=Math.max(t.a,u.w)
t.b=Math.max(t.b,u.x)
if(u.db)t.anc(u,d)
else t.anb(u,d)}},
anc(b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3=this.e
b3===$&&C.a()
x=(b3&16)!==0
b3=b4.b
b3.toString
w=b4.CW
v=b4.ay
u=A.aO(b5,b2,0)
t=b4.c
s=b4.a
r=0
q=0
while(!0){p=b4.k1
p.toString
if(!(r<p))break
o=0
while(!0){p=b4.id
p.toString
if(!(o<p))break
for(p=q!==0,n=0,m=0;n<b4.go[r];++n)for(l=0;l<b4.fy[o];++l,++m){if(p)break
u.d=v[q][m]
if(x)if(u.J()!==s)throw C.e(A.aI("Invalid Image Data"))
k=u.J()
j=u.J()
u.J()
u.J()
i=u.en(u.J())
u.d=u.d+(i.c-i.d)
h=b4.dy
h.toString
g=j*h
f=b4.dx
f.toString
h=w.l9(i,k*f,g,f,h)
f=h.length
f=Math.min(f,f)
e=new A.fj(h,0,f,0,!1)
d=w.a
a0=w.b
a1=t.length
a2=0
a3=0
while(!0){if(!(a3<a0&&g<this.b))break
for(a4=0;a4<a1;++a4){if(a2>=f)break
a5=t[a4]
h=b4.dx
h.toString
a6=k*h
for(a7=0;a7<d;++a7,++a6){h=a5.c
h===$&&C.a()
switch(h.a){case 1:h=e.O()
a8=$.dn
a9=(a8!=null?a8:A.dN())[h]
break
case 2:a9=e.O()
break
case 0:a9=e.J()
break
default:a9=b2}h=a5.d
h===$&&C.a()
a2+=h
h=a5.w
h===$&&C.a()
if(h){h=b3.a
b0=h==null?b2:h.bY(a6,g,b2)
if(b0==null)b0=new A.cE()
h=a5.b
h===$&&C.a()
b0.l(0,h.a,a9)}else{h=a5.a
h===$&&C.a()
a8=b3.b
b1=a8!=null?a8.h(0,h):b2
if(b1!=null)b1.dK(a6,g,a9,0,0)}}}++a3;++g}}++o;++q}++r}},
anb(a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=this.e
a5===$&&C.a()
x=(a5&16)!==0
a5=a6.b
a5.toString
w=a6.CW
v=a6.ay[0]
u=a6.cx
t=A.aO(a7,a4,0)
for(s=v.length,r=a6.c,q=w!=null,p=0,o=0;o<s;++o){t.d=v[o]
if(x)if(t.J()!==3.141592653589793)throw C.e(A.aI("Invalid Image Data"))
n=t.J()
m=$.d4()
m.$flags&2&&C.f(m)
m[0]=n
n=$.eE()
m[0]=t.J()
l=t.en(n[0])
t.d=t.d+(l.c-l.d)
if(q){n=w.uZ(l,0,p)
m=n.length
k=new A.fj(n,0,Math.min(m,m),0,!1)}else k=l
j=k.c-k.d
i=r.length
h=0
while(!0){if(!(h<u&&p<this.b))break
g=a6.cy[p]
if(g>=j)break
for(f=0;f<i;++f){if(g>=j)break
e=r[f]
d=a6.w
for(a0=0;a0<d;++a0){n=e.c
n===$&&C.a()
switch(n.a){case 1:n=k.O()
m=$.dn
a1=(m!=null?m:A.dN())[n]
break
case 2:a1=k.O()
break
case 0:a1=k.J()
break
default:a1=a4}n=e.d
n===$&&C.a()
g+=n
n=e.w
n===$&&C.a()
if(n){n=a5.a
a2=n==null?a4:n.bY(a0,p,a4)
if(a2==null)a2=new A.cE()
n=e.b
n===$&&C.a()
a2.l(0,n.a,a1)}else{n=e.a
n===$&&C.a()
m=a5.b
a3=m!=null?m.h(0,n):a4
if(a3!=null)a3.dK(a0,p,a1,0,0)}}}++h;++p}}},
gbO(d){return this.a},
gbz(d){return this.b}}
A.Cq.prototype={
a9h(a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=C.t(y.N,y.I)
for(x=a1.e,w=y.t,v=a1.c,u=B.db;!0;){t=a6.yJ()
if(t.length===0)break
a6.yJ()
s=a6.J()
r=a6.en(s)
a6.d=a6.d+(r.c-r.d)
x.l(0,t,new A.R5(s))
switch(t){case"channels":for(;!0;){q=new A.R6()
q.a9g(r)
p=q.a
p===$&&C.a()
if(p.length===0)break
o=q.w
o===$&&C.a()
if(o){++a1.d
p=q.c
p===$&&C.a()
if(p===B.mP)u=B.db
else u=p===B.mQ?B.dS:B.dT}else{o=q.c
o===$&&C.a()
if(o===B.mP){o=a1.w
n=a1.x
a3.l(0,p,new A.wL(new Uint16Array(o*n),o,n,1))}else if(o===B.mQ){o=a1.w
n=a1.x
a3.l(0,p,new A.wM(new Float32Array(o*n),o,n,1))}else if(o===B.r1){o=a1.w
n=a1.x
a3.l(0,p,new A.wQ(new Uint32Array(o*n),o,n,1))}}v.push(q)}break
case"chromaticities":p=new Float32Array(8)
a1.at=p
o=r.J()
n=$.d4()
n.$flags&2&&C.f(n)
n[0]=o
o=$.qG()
p[0]=o[0]
p=a1.at
n[0]=r.J()
m=o[0]
p.$flags&2&&C.f(p)
p[1]=m
m=a1.at
n[0]=r.J()
p=o[0]
m.$flags&2&&C.f(m)
m[2]=p
p=a1.at
n[0]=r.J()
m=o[0]
p.$flags&2&&C.f(p)
p[3]=m
m=a1.at
n[0]=r.J()
p=o[0]
m.$flags&2&&C.f(m)
m[4]=p
p=a1.at
n[0]=r.J()
m=o[0]
p.$flags&2&&C.f(p)
p[5]=m
m=a1.at
n[0]=r.J()
p=o[0]
m.$flags&2&&C.f(m)
m[6]=p
p=a1.at
n[0]=r.J()
o=o[0]
p.$flags&2&&C.f(p)
p[7]=o
break
case"compression":a1.ax=B.Zk[J.k(r.a,r.d++)]
break
case"dataWindow":p=r.J()
o=$.d4()
o.$flags&2&&C.f(o)
o[0]=p
p=$.eE()
n=p[0]
o[0]=r.J()
m=p[0]
o[0]=r.J()
l=p[0]
o[0]=r.J()
p=a1.r=C.b([n,m,l,p[0]],w)
a1.w=p[2]-p[0]+1
a1.x=p[3]-p[1]+1
break
case"displayWindow":p=r.J()
o=$.d4()
o.$flags&2&&C.f(o)
o[0]=p
$.eE()
o[0]=r.J()
o[0]=r.J()
o[0]=r.J()
break
case"lineOrder":break
case"pixelAspectRatio":p=r.J()
o=$.d4()
o.$flags&2&&C.f(o)
o[0]=p
$.qG()
break
case"screenWindowCenter":p=r.J()
o=$.d4()
o.$flags&2&&C.f(o)
o[0]=p
$.qG()
o[0]=r.J()
break
case"screenWindowWidth":p=r.J()
o=$.d4()
o.$flags&2&&C.f(o)
o[0]=p
$.qG()
break
case"tiles":a1.dx=r.J()
a1.dy=r.J()
k=J.k(r.a,r.d++)
a1.fr=k&15
a1.fx=D.b.I(k,4)&15
break
case"type":j=r.yJ()
if(j!=="deepscanline")if(j!=="deeptile")throw C.e(A.aI("EXR Invalid type: "+j))
break
default:break}}x=a1.w
a1.b=A.dx(a2,a2,u,0,B.aa,a1.x,a2,0,a1.d,a2,B.y,x,!1)
for(x=new C.dJ(a3,a3.r,a3.e);x.q();){w=x.d
p=a1.b
p.toString
o=a3.h(0,w)
o.toString
p.a46(w,o)}if(a1.db){x={}
w=a1.r
w===$&&C.a()
a1.id=a1.abi(w[0],w[2],w[1],w[3])
w=a1.r
a1.k1=a1.abj(w[0],w[2],w[1],w[3])
if(a1.fr!==2)a1.k1=1
w=a1.id
w.toString
v=a1.r
a1.fy=a1.Qk(w,v[0],v[2],a1.dx,a1.fx)
v=a1.k1
v.toString
w=a1.r
a1.go=a1.Qk(v,w[1],w[3],a1.dy,a1.fx)
w=a1.abf()
a1.k2=w
v=a1.dx
v.toString
v=w*v
a1.k3=v
a1.CW=A.aQR(a1.ax,a1,v,a1.dy)
x.a=x.b=0
v=a1.id
v.toString
w=a1.k1
w.toString
a1.ay=C.SY(v*w,new A.agf(x,a1),!0,y.ak)}else{x=a1.x
w=a1.ch=new Uint32Array(x+1)
for(p=v.length,o=a1.r,n=a1.w,i=0;i<p;++i){h=v[i]
m=h.d
m===$&&C.a()
l=h.f
l===$&&C.a()
g=D.b.e1(m*n,l)
for(m=h.r,f=0;f<x;++f){o===$&&C.a()
l=o[1]
m===$&&C.a()
if(D.b.b3(f+l,m)===0)w[f]=w[f]+g}}for(e=0,f=0;f<x;++f)e=Math.max(e,w[f])
x=A.aQR(a1.ax,a1,e,a2)
a1.CW=x
x=a1.cx=x.yo()
w=a1.ch
v=w.length
p=new Uint32Array(v)
a1.cy=p
for(--v,d=0,a0=0;a0<=v;++a0){if(D.b.b3(a0,x)===0)d=0
p[a0]=d
d+=w[a0]}x=D.b.e1(a1.x+x,x)
a1.ay=C.b([new Uint32Array(x-1)],y.hh)}},
abi(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.Av(w):u.Ab(w))+1
break
case 2:v=e-d+1
x=(u.fx===0?u.Av(v):u.Ab(v))+1
break
default:throw C.e(A.aI("Unknown LevelMode format."))}return x},
abj(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.Av(w):u.Ab(w))+1
break
case 2:v=g-f+1
x=(u.fx===0?u.Av(v):u.Ab(v))+1
break
default:throw C.e(A.aI("Unknown LevelMode format."))}return x},
Av(d){var x
for(x=0;d>1;){++x
d=D.b.I(d,1)}return x},
Ab(d){var x,w
for(x=0,w=0;d>1;){if((d&1)!==0)w=1;++x
d=D.b.I(d,1)}return x+w},
abf(){var x,w,v,u,t
for(x=this.c,w=x.length,v=0,u=0;u<w;++u){t=x[u].d
t===$&&C.a()
v+=t}return v},
Qk(d,e,f,g,h){var x,w,v,u,t,s,r=J.f7(d,y.p)
for(x=h===1,w=f-e+1,v=0;v<d;++v){u=D.b.c_(1,v)
t=D.b.e1(w,u)
if(x&&t*u<w)++t
s=Math.max(t,1)
g.toString
r[v]=D.b.e1(s+g-1,g)}return r}}
A.Sq.prototype={
azE(d){var x,w,v,u,t,s=this
if(s.db)for(x=0;x<s.ay.length;++x)for(w=0;v=s.ay[x],w<v.length;++w){u=d.MD()
v.$flags&2&&C.f(v)
v[w]=u}else{t=s.ay[0].length
for(x=0;x<t;++x){v=s.ay[0]
u=d.MD()
v.$flags&2&&C.f(v)
v[x]=u}}}}
A.aiL.prototype={
a9v(d,e,f){var x,w,v,u=this,t=d.c.length,s=J.f7(t,y.aX)
for(x=0;x<t;++x)s[x]=new A.a51()
u.y=s
w=u.w
w.toString
v=D.b.bV(w*u.x,2)
u.z=new Uint16Array(v)},
yo(){return this.x},
l9(a4,a5,a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
if(a7==null)a7=a3.c.w
if(a8==null)a8=a3.c.cx
x=a5+a7-1
w=a6+a8-1
v=a3.c
u=v.w
if(x>u)x=u-1
u=v.x
if(w>u)w=u-1
a3.a=x-a5+1
a3.b=w-a6+1
t=v.c
s=t.length
for(r=0,q=0;q<s;++q){p=t[q]
v=a3.y
v===$&&C.a()
o=v[q]
o.b=o.a=r
v=p.f
v===$&&C.a()
n=D.b.e1(a5,v)
m=D.b.e1(x,v)
v=n*v<a5?0:1
v=m-n+v
o.c=v
u=p.r
u===$&&C.a()
n=D.b.e1(a6,u)
m=D.b.e1(w,u)
l=n*u<a6?0:1
l=m-n+l
o.d=l
o.e=u
u=p.d
u===$&&C.a()
u=u/2|0
o.f=u
r+=v*l*u}k=a4.O()
j=a4.O()
if(j>=8192)throw C.e(A.aI("Error in header for PIZ-compressed data (invalid bitmap size)."))
i=new Uint8Array(8192)
if(k<=j){h=a4.ei(j-k+1)
g=h.c-h.d
for(f=k,q=0;q<g;++q,f=e){e=f+1
i[f]=J.k(h.a,h.d+q)}}d=new Uint16Array(65536)
a0=a3.anN(i,d)
A.b2K(a4,a4.J(),a3.z,r)
for(q=0;q<s;++q){v=a3.y
v===$&&C.a()
o=v[q]
f=0
while(!0){v=o.f
v===$&&C.a()
if(!(f<v))break
u=a3.z
u.toString
l=o.a
l===$&&C.a()
a1=o.c
a1===$&&C.a()
a2=o.d
a2===$&&C.a()
A.b2O(u,l+f,a1,v,a2,a1*v,a0);++f}}v=a3.z
v.toString
a3.aar(d,v,r)
v=a3.r
if(v==null){v=a3.w
v.toString
v=a3.r=A.anA(v*a3.x+73728)}v.a=0
for(;a6<=w;++a6)for(q=0;q<s;++q){v=a3.y
v===$&&C.a()
o=v[q]
v=o.e
v===$&&C.a()
if(D.b.b3(a6,v)!==0)continue
v=o.c
v===$&&C.a()
u=o.f
u===$&&C.a()
a5=v*u
for(;a5>0;--a5){v=a3.r
v.toString
u=a3.z
u.toString
l=o.b
l===$&&C.a()
o.b=l+1
v.a32(u[l])}}v=a3.r
return J.d5(D.k.gaj(v.c),0,v.a)},
uZ(d,e,f){return this.l9(d,e,f,null,null)},
aar(d,e,f){var x,w,v
for(x=e.$flags|0,w=0;w<f;++w){v=d[e[w]]
x&2&&C.f(e)
e[w]=v}},
anN(d,e){var x,w,v,u,t
for(x=e.$flags|0,w=0,v=0;v<65536;++v)if(v===0||(d[v>>>3]&1<<(v&7))>>>0!==0){u=w+1
x&2&&C.f(e)
e[w]=v
w=u}for(u=w;u<65536;u=t){t=u+1
x&2&&C.f(e)
e[u]=0}return w-1}}
A.a51.prototype={}
A.aiM.prototype={
yo(){return this.x},
l9(a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=B.dI.ql(a0.da()),d=f.y
if(d==null){d=f.w
d.toString
d=f.y=A.anA(f.x*d)}d.a=0
x=C.b([0,0,0,0],y.t)
w=new Uint32Array(1)
v=J.d5(D.aJ.gaj(w),0,null)
if(a3==null)a3=f.c.w
if(a4==null)a4=f.c.cx
u=a1+a3-1
t=a2+a4-1
d=f.c
s=d.w
if(u>s)u=s-1
s=d.x
if(t>s)t=s-1
f.a=u-a1+1
f.b=t-a2+1
d=d.c
r=d.length
for(q=a2,p=0;q<=t;++q)for(o=0;o<r;++o){n=d[o]
s=n.r
s===$&&C.a()
if(D.b.b3(a2,s)!==0)continue
s=n.f
s===$&&C.a()
m=D.b.e1(a1,s)
l=D.b.e1(u,s)
s=m*s<a1?0:1
k=l-m+s
w[0]=0
s=n.c
s===$&&C.a()
switch(s.a){case 0:x[0]=p
s=p+k
x[1]=s
s+=k
x[2]=s
p=s+k
for(j=0;j<k;++j){s=x[0]
x[0]=s+1
s=e[s]
i=x[1]
x[1]=i+1
i=e[i]
h=x[2]
x[2]=h+1
h=e[h]
w[0]=w[0]+((s<<24|i<<16|h<<8)>>>0)
for(g=0;g<4;++g)f.y.d3(v[g])}break
case 1:x[0]=p
s=p+k
x[1]=s
p=s+k
for(j=0;j<k;++j){s=x[0]
x[0]=s+1
s=e[s]
i=x[1]
x[1]=i+1
i=e[i]
w[0]=w[0]+((s<<8|i)>>>0)
for(g=0;g<2;++g)f.y.d3(v[g])}break
case 2:x[0]=p
s=p+k
x[1]=s
s+=k
x[2]=s
p=s+k
for(j=0;j<k;++j){s=x[0]
x[0]=s+1
s=e[s]
i=x[1]
x[1]=i+1
i=e[i]
h=x[2]
x[2]=h+1
h=e[h]
w[0]=w[0]+((s<<24|i<<16|h<<8)>>>0)
for(g=0;g<4;++g)f.y.d3(v[g])}break}}d=f.y
return J.d5(D.k.gaj(d.c),0,d.a)},
uZ(d,e,f){return this.l9(d,e,f,null,null)}}
A.aiN.prototype={
yo(){return 1},
l9(d,e,f,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.c,g=A.anA((h-d.d)*2)
if(a0==null)a0=i.c.w
if(a1==null)a1=i.c.cx
x=e+a0-1
w=f+a1-1
v=i.c
u=v.w
if(x>u)x=u-1
v=v.x
if(w>v)w=v-1
i.a=x-e+1
i.b=w-f+1
for(;v=d.d,v<h;){u=d.a
d.d=v+1
v=J.k(u,v)
u=$.hq()
u.$flags&2&&C.f(u)
u[0]=v
t=$.i1()[0]
if(t<0){s=-t
for(;r=s-1,s>0;s=r)g.d3(J.k(d.a,d.d++))}else for(s=t;r=s-1,s>=0;s=r)g.d3(J.k(d.a,d.d++))}q=J.d5(D.k.gaj(g.c),0,g.a)
p=q.length
for(h=q.$flags|0,o=1;o<p;++o){v=q[o-1]
u=q[o]
h&2&&C.f(q)
q[o]=v+u-128}h=i.r
if(h==null||h.length!==p)h=i.r=new Uint8Array(p)
v=D.b.bV(p+1,2)
for(n=0,m=0;!0;v=j,n=k){if(m<p){l=m+1
k=n+1
u=q[n]
h.$flags&2&&C.f(h)
h[m]=u}else break
if(l<p){m=l+1
j=v+1
h[l]=q[v]}else break}return h},
uZ(d,e,f){return this.l9(d,e,f,null,null)},
j(d){return C.q(this.w)}}
A.Sr.prototype={
yo(){return this.x},
l9(d,e,f,g,h){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=B.dI.ql(d.da())
if(g==null)g=l.c.w
if(h==null)h=l.c.cx
x=e+g-1
w=f+h-1
v=l.c
u=v.w
if(x>u)x=u-1
v=v.x
if(w>v)w=v-1
l.a=x-e+1
l.b=w-f+1
t=k.length
for(v=k.$flags|0,s=1;s<t;++s){u=k[s-1]
r=k[s]
v&2&&C.f(k)
k[s]=u+r-128}v=l.y
if(v==null||v.length!==t)v=l.y=new Uint8Array(t)
u=D.b.bV(t+1,2)
for(q=0,p=0;!0;u=m,q=n){if(p<t){o=p+1
n=q+1
r=k[q]
v.$flags&2&&C.f(v)
v[p]=r}else break
if(o<t){p=o+1
m=u+1
v[o]=k[u]}else break}return v},
uZ(d,e,f){return this.l9(d,e,f,null,null)},
j(d){return C.q(this.w)}}
A.age.prototype={
fF(d){var x=new A.R8(C.b([],y.m))
x.Pw(d)
return this.a=x},
eI(d){var x=this.a
if(x==null)return null
return x.c[d].b},
je(d,e,f){this.a=A.b2M(e)
return this.eI(0)}}
A.CM.prototype={
av5(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(g===0&&j.c!=null){x=j.c
x.toString
return x}for(x=j.b,w=j.d,v=-1,u=-1,t=0;t<x;++t){s=w.j_(t)
r=w.iY(t)
q=w.iX(t)
p=w.jy(t)
if(s===d&&r===e&&q===f&&p===g)return t
o=d-s
n=e-r
m=f-q
l=g-p
k=o*o+n*n+m*m+l*l
if(u===-1){u=t
v=k}else if(k<v){u=t
v=k}}return u},
NQ(){var x,w,v,u,t,s,r,q=this
if(q.c==null)return q.d
x=q.d
w=x.a
v=new A.lB(new Uint8Array(w*4),w,4)
for(u=0;u<w;++u){t=x.j_(u)
s=x.iY(u)
r=x.iX(u)
v.zC(u,t,s,r,u===q.c?0:255)}return v}}
A.CN.prototype={
a9j(d){var x,w,v,u,t,s,r=this
r.a=d.O()
r.b=d.O()
r.c=d.O()
r.d=d.O()
x=d.bj()
r.e=(x&64)!==0
if((x&128)!==0){r.f=A.aR8(D.b.c_(1,(x&7)+1))
for(w=0;v=r.f,w<v.b;++w){u=J.k(d.a,d.d++)
t=J.k(d.a,d.d++)
s=J.k(d.a,d.d++)
v.d.kh(w,u,t,s)}}r.y=d.d-d.b}}
A.Ss.prototype={}
A.RC.prototype={
gbO(d){return this.a},
gbz(d){return this.b}}
A.ahE.prototype={
fF(d){var x,w,v,u,t,s,r,q,p,o,n=this
n.f=A.ba(d,!1,null,0)
n.a=new A.RC(C.b([],y.b))
if(!n.Sk())return null
try{for(;u=n.f,t=u.d,t<u.c;){s=u.a
u.d=t+1
x=J.k(s,t)
switch(x){case 44:w=n.W_()
if(w==null){u=n.a
return u}u=w
u.r=n.e
u.w=n.c
if(n.b!==0){if(w.f==null&&n.a.e!=null){u=n.a.e
t=u.a
s=u.b
r=u.c
u=u.d
w.f=new A.CM(t,s,r,new A.lB(new Uint8Array(C.bn(u.c)),u.a,u.b))}if(w.f!=null)w.f.c=n.d}n.a.r.push(w)
break
case 33:u=n.f
v=J.k(u.a,u.d++)
if(J.d(v,255)){u=n.f
if(u.ep(J.k(u.a,u.d++))==="NETSCAPE2.0"){q=J.k(u.a,u.d++)
p=J.k(u.a,u.d++)
if(q===3&&p===1)n.r=u.O()}else n.Bw()}else if(J.d(v,249)){u=n.f
u.toString
n.amZ(u)}else n.Bw()
break
case 59:u=n.a
return u
default:break}}}catch(o){}return n.a},
amZ(d){var x,w,v,u=this
d.bj()
x=d.bj()
u.e=d.O()
u.d=d.bj()
d.bj()
u.c=D.b.I(x,2)&7
u.b=x&1
w=d.zK(1,0)
if(J.k(w.a,w.d)===44){++d.d
v=u.W_()
if(v==null)return
v.r=u.e
v.w=u.c
w=u.b!==0
v.x=w?u.d:-1
if(w){w=v.f
if(w==null&&u.a.e!=null){w=u.a.e
w.toString
w=v.f=A.b3m(w)}if(w!=null)w.c=u.d}u.a.r.push(v)}},
eI(d){var x,w,v,u=this,t=u.f
if(t==null||u.a==null)return null
x=u.a.r
w=x.length
if(d>=w)return null
v=x[d]
x=v.y
x===$&&C.a()
t.d=x
return u.acM(v)},
je(a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null
if(a3.fF(a6)==null)return a4
x=a3.a.r.length
if(x===1)return a3.eI(0)
for(x=y.p,w=a4,v=w,u=0;t=a3.a.r,u<t.length;++u){a7=t[u]
s=a3.eI(u)
if(s==null)return a4
s.y=a7.r*10
if(v==null||w==null){s.r=a3.r
w=s
v=w
continue}t=s.a
r=t==null
q=r?a4:t.a
if(q==null)q=0
p=w.a
o=p==null
n=o?a4:p.a
m=!1
if(q===(n==null?0:n)){t=r?a4:t.b
if(t==null)t=0
r=o?a4:p.b
if(t===(r==null?0:r)){t=a7.a
t===$&&C.a()
if(t===0){t=a7.b
t===$&&C.a()
t=t===0&&a7.w===2}else t=m}else t=m}else t=m
if(t){v.jQ(s)
w=s
continue}l=a7.f
if(!(l!=null)){t=a3.a.e
t.toString
l=t}t=o?a4:p.a
if(t==null)t=0
r=o?a4:p.b
if(r==null)r=0
k=A.dx(a4,a4,B.y,0,B.aa,r,a4,0,1,l.NQ(),B.y,t,!1)
t=a7.w
if(t===2){t=k.a
j=t==null?a4:J.e3(t.gaj(t))
if(j==null){t=k.a
t=t==null?a4:t.gaj(t)
if(t==null)t=D.k.gaj(new Uint8Array(0))
j=J.e3(t)}t=a7.x
r=j.length-1
if(t!==-1)D.k.eW(j,0,r,t)
else{t=a3.a.c.a
D.k.eW(j,0,r,!D.k.gaa(t)?t[0]:0)}}else if(t!==3)if(a7.f!=null){t=w.a
i=t==null?a4:t.gcn()
h=C.t(x,x)
for(t=i.a,g=0;g<t;++g)h.l(0,g,l.av5(i.j_(g),i.iY(g),i.iX(g),i.jy(g)))
t=k.a
f=t==null?a4:J.e3(t.gaj(t))
if(f==null){t=k.a
t=t==null?a4:t.gaj(t)
if(t==null)t=D.k.gaj(new Uint8Array(0))
f=J.e3(t)}t=w.a
e=t==null?a4:J.e3(t.gaj(t))
if(e==null){t=w.a
t=t==null?a4:t.gaj(t)
if(t==null)t=D.k.gaj(new Uint8Array(0))
e=J.e3(t)}for(d=f.length,t=f.$flags|0,a0=0;a0<d;++a0){a1=h.h(0,e[a0])
if(a1!=null&&a1!==-1){t&2&&C.f(f)
f[a0]=a1}}}k.y=s.y
for(t=s.a,t=t.gU(t);t.q();){a2=t.gM(t)
if(a2.ga4(a2)!==0){r=a2.ghZ(a2)
q=a7.a
q===$&&C.a()
p=a2.giA(a2)
o=a7.b
o===$&&C.a()
k.pw(r+q,p+o,a2)}}v.jQ(k)
w=k}return v},
W_(){var x,w=this.f
if(w.d>=w.c)return null
x=new A.Ss()
x.a9j(w);++this.f.d
this.Bw()
return x},
acM(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.w==null){n.w=new Uint8Array(256)
n.x=new Uint8Array(4095)
n.y=new Uint8Array(4096)
n.z=new Uint32Array(4096)}x=n.Q=n.f.bj()
w=D.b.cA(1,x)
n.dy=w;++w
n.dx=w
n.db=w+1;++x
n.cy=x
n.cx=D.b.cA(1,x)
n.ay=0
n.CW=4098
n.at=n.ax=0
x=n.w
x.toString
x.$flags&2&&C.f(x)
x[0]=0
x=n.z
x.toString
D.aJ.eW(x,0,4096,4098)
x=d.c
x===$&&C.a()
w=d.d
w===$&&C.a()
v=d.a
v===$&&C.a()
u=n.a
if(v+x<=u.a){v=d.b
v===$&&C.a()
v=v+w>u.b}else v=!0
if(v)return m
t=d.f
if(!(t!=null)){v=u.e
v.toString
t=v}n.as=x*w
s=A.dx(m,m,B.y,0,B.aa,w,m,0,1,t.NQ(),B.y,x,!1)
r=new Uint8Array(x)
x=d.e
x===$&&C.a()
if(x){x=d.b
x===$&&C.a()
for(w=x+w,q=0,p=0;q<4;++q)for(o=x+B.Rg[q];o<w;o+=B.Ua[q],++p){if(!n.Sm(r))return s
n.X6(s,o,t,r)}}else for(o=0;o<w;++o){if(!n.Sm(r))return s
n.X6(s,o,t,r)}return s},
X6(d,e,f,g){var x,w,v,u=g.length
for(x=0;x<u;++x){w=g[x]
v=d.a
if(v!=null)v.dK(x,e,w,0,0)}},
Sk(){var x,w,v,u,t,s=this,r=s.f.ep(6)
if(r!=="GIF87a"&&r!=="GIF89a")return!1
x=s.a
x.toString
x.a=s.f.O()
x=s.a
x.toString
x.b=s.f.O()
w=s.f.bj()
x=s.a
x.toString
x.c=new A.ka(new Uint8Array(C.bn(C.b([s.f.bj()],y.t))));++s.f.d
if((w&128)!==0){x=s.a
x.toString
x.e=A.aR8(D.b.c_(1,(w&7)+1))
for(v=0;v<s.a.e.b;++v){x=s.f
u=J.k(x.a,x.d++)
x=s.f
t=J.k(x.a,x.d++)
x=s.f
w=J.k(x.a,x.d++)
s.a.e.d.kh(v,u,t,w)}}s.a.toString
return!0},
Sm(d){var x=this,w=x.as
w.toString
x.as=w-d.length
if(!x.acY(d))return!1
if(x.as===0)x.Bw()
return!0},
Bw(){var x,w,v,u=this.f
if(u.d>=u.c)return!0
x=u.bj()
while(!0){if(x!==0){u=this.f
u=u.d<u.c}else u=!1
if(!u)break
u=this.f
w=u.d+=x
if(w>=u.c)return!0
v=u.a
u.d=w+1
x=J.k(v,w)}return!0},
acY(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.ay
if(k>4095)return!1
x=d.length
w=0
if(k!==0){v=d.$flags|0
while(!0){if(!(k!==0&&w<x))break
u=w+1
t=l.x
t===$&&C.a()
k=l.ay=k-1
t=t[k]
v&2&&C.f(d)
d[w]=t
w=u}}for(k=d.$flags|0;w<x;){s=l.ch=l.acX()
if(s==null)return!1
v=l.dx
if(s===v)return!1
t=l.dy
if(s===t){for(t=l.z,r=0;r<=4095;++r){t.toString
t.$flags&2&&C.f(t)
t[r]=4098}l.db=v+1
v=l.Q+1
l.cy=v
l.cx=D.b.cA(1,v)
l.CW=4098}else{if(s<t){u=w+1
k&2&&C.f(d)
d[w]=s
w=u}else{v=l.z
if(v[s]===4098){q=l.db-2
if(s===q){s=l.CW
p=l.y
p===$&&C.a()
o=l.x
o===$&&C.a()
n=l.ay++
t=l.Hr(v,s,t)
o.$flags&2&&C.f(o)
o[n]=t
p.$flags&2&&C.f(p)
p[q]=t}else return!1}r=0
while(!0){m=r+1
if(!(r<=4095&&s>l.dy&&s<=4095))break
v=l.x
v===$&&C.a()
t=l.ay++
q=l.y
q===$&&C.a()
q=q[s]
v.$flags&2&&C.f(v)
v[t]=q
s=l.z[s]
r=m}if(m>=4095||s>4095)return!1
v=l.x
v===$&&C.a()
t=l.ay
q=l.ay=t+1
v.$flags&2&&C.f(v)
v[t]=s
t=q
while(!0){if(!(t!==0&&w<x))break
u=w+1
t=l.ay=t-1
q=v[t]
k&2&&C.f(d)
d[w]=q
w=u}}v=l.CW
if(v!==4098&&l.z[l.db-2]===4098){t=l.z
t.toString
q=l.db-2
t.$flags&2&&C.f(t)
t[q]=v
p=l.ch
o=l.y
n=l.dy
if(p===q){o===$&&C.a()
v=l.Hr(t,v,n)
o.$flags&2&&C.f(o)
o[q]=v}else{o===$&&C.a()
p.toString
v=l.Hr(t,p,n)
o.$flags&2&&C.f(o)
o[q]=v}}v=l.ch
v.toString
l.CW=v}}return!0},
acX(){var x,w,v,u,t=this
if(t.cy>12)return null
for(;x=t.ax,w=t.cy,x<w;){x=t.aaA()
x.toString
w=t.at
v=t.ax
t.at=(w|D.b.cA(x,v))>>>0
t.ax=v+8}v=t.at
u=B.UX[w]
t.at=D.b.d5(v,w)
t.ax=x-w
x=t.db
if(x<4097){++x
t.db=x
x=x>t.cx&&w<12}else x=!1
if(x){t.cx=t.cx<<1>>>0
t.cy=w+1}return v&u},
Hr(d,e,f){var x,w,v=0
while(!0){if(e>f){x=v+1
w=v<=4095
v=x}else w=!1
if(!w)break
if(e>4095)return 4098
e=d[e]}return e},
aaA(){var x,w,v=this,u=v.w,t=u[0],s=u.$flags|0
if(t===0){t=v.f.bj()
s&2&&C.f(u)
u[0]=t
u=v.w
t=u[0]
if(t===0)return null
D.k.fg(u,1,1+t,v.f.ei(t).da())
u=v.w
x=u[1]
u.$flags&2&&C.f(u)
u[1]=2
u[0]=u[0]-1}else{w=u[1]
s&2&&C.f(u)
u[1]=w+1
x=u[w]
u[0]=t-1}return x}}
A.wD.prototype={
N(){return"IcoType."+this.b}}
A.ail.prototype={
gbO(){return 0},
gbz(){return 0}}
A.Sf.prototype={}
A.aij.prototype={
gbz(d){return D.b.bV(A.qQ.prototype.gbz.call(this,0),2)},
gxT(){return!(this.d===40&&this.f===32)&&A.qQ.prototype.gxT.call(this)}}
A.aik.prototype={
fF(d){var x=A.ba(d,!1,null,0)
this.a=x
return this.b=A.aRh(x)},
je(d,e,f){var x,w,v,u=this
if(u.fF(e)==null)return null
x=u.b.e.length
if(x===1)return u.eI(0)
for(w=null,v=0;v<u.b.e.length;++v){f=u.eI(v)
if(f==null)continue
if(w==null){f.w=B.aa
w=f}else w.jQ(f)}return w},
eI(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=this.a
if(a7!=null){x=this.b
x=x==null||a8>=x.d}else x=!0
if(x)return a6
w=this.b.e[a8]
x=a7.a
a7=a7.b+w.e
v=w.d
u=J.aKF(x,a7,a7+v)
t=new A.W0(A.aRI())
y.D.a(u)
if(t.kW(u))return t.fa(0,u)
s=A.anA(14)
s.a32(19778)
s.Fc(v)
s.Fc(0)
s.Fc(0)
a7=A.ba(u,!1,a6,0)
x=A.aPG(A.ba(J.d5(D.k.gaj(s.c),0,s.a),!1,a6,0))
v=a7.d
r=a7.J()
q=a7.J()
p=$.d4()
p.$flags&2&&C.f(p)
p[0]=q
q=$.eE()
o=q[0]
p[0]=a7.J()
q=q[0]
n=a7.O()
m=a7.O()
l=a7.J()
if(l>=14)C.aa(A.aI("Unsupported BMP compression type: "+l))
l=B.xL[l]
a7.J()
p[0]=a7.J()
p[0]=a7.J()
p=a7.J()
a7.J()
k=new A.aij(x,o,q,r,n,m,l,p,v)
k.Pu(a7,x)
if(r!==40&&n!==1)return a6
j=p===0&&m<=8?40+4*D.b.c_(1,m):40+4*p
x.b=j
s.a-=4
s.Fc(j)
i=A.ba(u,!1,a6,0)
h=new A.ae1(!0)
h.a=i
h.b=k
g=h.eI(0)
if(m>=32)return g
f=32-D.b.b3(o,32)
e=D.b.bV(f===32?o:o+f,8)
for(a7=q<0,x=q===0,q=1/q<0,d=0;d<D.b.bV(A.qQ.prototype.gbz.call(k,0),2);++d){if(!(x?q:a7))a0=d
else{v=g.a
v=v==null?a6:v.b
a0=(v==null?0:v)-1-d}a1=i.en(e)
i.d=i.d+(a1.c-a1.d)
v=g.a
a2=v==null?a6:v.bY(0,a0,a6)
if(a2==null)a2=new A.cE()
for(a3=0;a3<o;){a4=J.k(a1.a,a1.d++)
a5=7
while(!0){if(!(a5>-1&&a3<o))break
if((a4&D.b.cA(1,a5))>>>0!==0)a2.sa4(0,0)
a2.q();++a3;--a5}}}return g}}
A.Od.prototype={}
A.rL.prototype={}
A.rM.prototype={}
A.CZ.prototype={}
A.aiW.prototype={}
A.t0.prototype={}
A.aiX.prototype={
aB1(d){var x,w,v,u,t,s=this,r=A.ba(d,!0,null,0)
s.a=r
x=r.zK(2,0)
if(J.k(x.a,x.d)!==255||J.k(x.a,x.d+1)!==216)return!1
if(s.me()!==216)return!1
w=s.me()
v=!1
u=!1
while(!0){if(w!==217){r=s.a
r=r.d<r.c}else r=!1
if(!r)break
t=s.a.O()
if(t<2)break
r=s.a
r.d=r.d+(t-2)
switch(w){case 192:case 193:case 194:v=!0
break
case 218:u=!0
break}w=s.me()}return v&&u},
azB(d){var x,w,v,u,t,s,r,q=this
q.a=A.ba(d,!0,null,0)
if(q.me()!==216)return null
x=new A.aiY()
w=q.me()
v=!1
u=!1
while(!0){if(w!==217){t=q.a
t=t.d<t.c}else t=!1
if(!t)break
switch(w){case 192:case 193:case 194:s=q.a.O()
if(s<2)C.aa(A.aI("Invalid Block"))
t=q.a
d=t.en(s-2)
t.d=t.d+(d.c-d.d)
q.UQ(w,d)
v=!0
break
case 218:q.VZ()
u=!0
break
default:q.VZ()
break}w=q.me()}t=q.d
if(t!=null){r=t.e
r.toString
x.a=r
t=t.d
t.toString
x.b=t}t=q.d=null
D.d.ab(q.y)
return v&&u?x:t},
fz(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this
m.a=A.ba(e,!0,null,0)
m.ajA()
if(m.y.length!==1)throw C.e(A.aI("Only single frame JPEGs supported"))
x=m.d
for(w=x.z,v=x.y,u=m.as,t=0;t<w.length;++t){s=v.h(0,w[t])
r=s.a
q=x.f
p=s.b
o=x.r
n=m.aaF(x,s)
if(r===q)r=0
else r=r===1&&q===4?2:1
if(p===o)q=0
else q=p===1&&o===4?2:1
u.push(new A.Od(n,r,q))}},
ajA(){var x,w,v,u,t,s=this
if(s.me()!==216)throw C.e(A.aI("Start Of Image marker not found."))
x=s.me()
while(!0){if(x!==217){w=s.a
w===$&&C.a()
w=w.d<w.c}else w=!1
if(!w)break
c$0:{if(x>=208&&x<=215||x===1){x=s.me()
break c$0}w=s.a
w===$&&C.a()
v=w.O()
if(v<2)C.aa(A.aI("Invalid Block"))
w=s.a
u=w.en(v-2)
w.d=w.d+(u.c-u.d)
switch(x){case 224:case 225:case 226:case 227:case 228:case 229:case 230:case 231:case 232:case 233:case 234:case 235:case 236:case 237:case 238:case 239:case 254:s.amU(x,u)
break
case 219:s.amX(u)
break
case 192:case 193:case 194:s.UQ(x,u)
break
case 195:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 205:case 206:case 207:throw C.e(A.aI("Unhandled frame type "+D.b.jv(x,16)))
case 196:s.amW(u)
break
case 221:s.e=u.O()
break
case 218:s.ana(u)
break
case 255:w=s.a
if(J.k(w.a,w.d)!==255)--s.a.d
break
default:w=s.a
t=!1
if(J.k(w.a,w.d+-3)===255){w=s.a
if(J.k(w.a,w.d+-2)>=192){w=s.a
w=J.k(w.a,w.d+-2)<=254}else w=t}else w=t
if(w){s.a.d-=3
break}if(x!==0)throw C.e(A.aI("Unknown JPEG marker "+D.b.jv(x,16)))
break}x=s.me()}}},
VZ(){var x,w=this.a
w===$&&C.a()
x=w.O()
if(x<2)throw C.e(A.aI("Invalid Block"))
w=this.a
w.d=w.d+(x-2)},
me(){var x,w=this,v=w.a
v===$&&C.a()
if(v.d>=v.c)return 0
do{do{x=w.a.bj()
if(x!==255){v=w.a
v=v.d<v.c}else v=!1}while(v)
v=w.a
if(v.d>=v.c)return x
do{x=w.a.bj()
if(x===255){v=w.a
v=v.d<v.c}else v=!1}while(v)
if(x===0){v=w.a
v=v.d<v.c}else v=!1}while(v)
return x},
an2(d){var x
for(x=0;x<12;++x)if(J.k(d.a,d.d++)!==B.a4n[x])return
this.r=new A.mJ("ICC_PROFILE",B.j7,d.da())},
amY(d){if(d.J()!==1165519206)return
if(d.O()!==0)return
this.w.fz(0,d)},
amU(d,e){var x,w,v,u,t,s=this,r=e
if(d===224){x=r
w=!1
if(J.k(x.a,x.d)===74){x=r
if(J.k(x.a,x.d+1)===70){x=r
if(J.k(x.a,x.d+2)===73){x=r
if(J.k(x.a,x.d+3)===70){x=r
x=J.k(x.a,x.d+4)===0}else x=w}else x=w}else x=w}else x=w
if(x){x=new A.aiZ()
w=r
J.k(w.a,w.d+5)
w=r
J.k(w.a,w.d+6)
w=r
J.k(w.a,w.d+7)
w=r
J.k(w.a,w.d+8)
w=r
J.k(w.a,w.d+9)
w=r
J.k(w.a,w.d+10)
w=r
J.k(w.a,w.d+11)
w=r
w=J.k(w.a,w.d+12)
x.f=w
v=r
v=J.k(v.a,v.d+13)
x.r=v
s.b=x
r.zK(14+3*w*v,14)}}else if(d===225)s.amY(r)
else if(d===226)s.an2(r)
else if(d===238){x=r
w=!1
if(J.k(x.a,x.d)===65){x=r
if(J.k(x.a,x.d+1)===100){x=r
if(J.k(x.a,x.d+2)===111){x=r
if(J.k(x.a,x.d+3)===98){x=r
if(J.k(x.a,x.d+4)===101){x=r
x=J.k(x.a,x.d+5)===0}else x=w}else x=w}else x=w}else x=w}else x=w
if(x){u=new A.aiW()
x=r
J.k(x.a,x.d+6)
x=r
J.k(x.a,x.d+7)
x=r
J.k(x.a,x.d+8)
x=r
J.k(x.a,x.d+9)
x=r
J.k(x.a,x.d+10)
x=r
u.d=J.k(x.a,x.d+11)
s.c=u}}else if(d===254)try{r.azI()}catch(t){}},
amX(d){var x,w,v,u,t,s,r,q,p
for(x=d.c,w=this.x;v=d.d,u=v<x,u;){u=d.a
d.d=v+1
t=J.k(u,v)
s=D.b.I(t,4)
t&=15
if(t>=4)throw C.e(A.aI("Invalid number of quantization tables"))
v=w[t]
if(v==null){v=new Int16Array(64)
w[t]=v}for(u=s!==0,r=0;r<64;++r){q=u?d.O():J.k(d.a,d.d++)
p=$.aaW()[r]
v.$flags&2&&C.f(v)
v[p]=q}}if(u)throw C.e(A.aI("Bad length for DQT block"))},
UQ(d,e){var x,w,v,u,t,s,r,q,p,o,n=this
if(n.d!=null)throw C.e(A.aI("Duplicate JPG frame data found."))
x=C.t(y.p,y.d2)
w=C.b([],y.t)
v=new A.SA(x,w)
v.b=d===194
v.c=e.bj()
v.d=e.O()
v.e=e.O()
u=e.bj()
for(t=n.x,s=0;s<u;++s){r=J.k(e.a,e.d++)
q=J.k(e.a,e.d++)
p=D.b.I(q,4)
o=J.k(e.a,e.d++)
w.push(r)
x.l(0,r,new A.t0(p&15,q&15,t,o))}v.mP()
n.d=v
n.y.push(v)},
amW(d){var x,w,v,u,t,s,r,q,p,o,n,m
for(x=d.c,w=this.Q,v=this.z;u=d.d,u<x;){t=d.a
d.d=u+1
s=J.k(t,u)
r=new Uint8Array(16)
for(q=0,p=0;p<16;++p){r[p]=J.k(d.a,d.d++)
q+=r[p]}o=d.en(q)
d.d=d.d+(o.c-o.d)
n=o.da()
if((s&16)!==0){s-=16
m=v}else m=w
if(m.length<=s)D.d.sp(m,s+1)
m[s]=this.ajz(r,n)}},
ana(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.bj()
if(h<1||h>4)throw C.e(A.aI("Invalid SOS block"))
x=i.d
x.toString
w=C.b([],y.b7)
for(v=i.z,u=i.Q,t=x.y,s=0;s<h;++s){r=J.k(d.a,d.d++)
q=J.k(d.a,d.d++)
if(!t.aq(0,r))throw C.e(A.aI("Invalid Component in SOS block"))
p=t.h(0,r)
p.toString
o=D.b.I(q,4)&15
n=q&15
if(o<u.length){m=u[o]
m.toString
p.w=m}if(n<v.length){m=v[n]
m.toString
p.x=m}w.push(p)}l=d.bj()
k=d.bj()
j=d.bj()
v=D.b.I(j,4)
u=i.a
u===$&&C.a()
v=new A.SB(u,x,w,i.e,l,k,v&15,j&15)
u=x.w
u===$&&C.a()
v.f=u
v.r=x.b
v.nw(0)},
ajz(d,e){var x,w,v,u,t,s,r,q=C.b([],y.e8),p=16
while(!0){if(!(p>0&&d[p-1]===0))break;--p}x=y.fe
q.push(new A.zs(C.aZ(2,null,!1,x)))
w=q[0]
for(v=0,u=0;u<p;){for(t=0;t<d[u];++t){w=q.pop()
w.a[w.b]=new A.CZ(e[v])
for(;s=w.b,s>0;)w=q.pop()
w.b=s+1
q.push(w)
for(;q.length<=u;w=r){s=C.aZ(2,null,!1,x)
r=new A.zs(s)
q.push(r)
w.a[w.b]=new A.rM(s)}++v}++u
if(u<p){s=C.aZ(2,null,!1,x)
r=new A.zs(s)
q.push(r)
w.a[w.b]=new A.rM(s)
w=r}}return q[0].a},
aaF(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=e.e
g===$&&C.a()
x=e.f
x===$&&C.a()
w=g<<3>>>0
v=new Int32Array(64)
u=new Uint8Array(64)
t=C.aZ(x*8,null,!1,y.aD)
for(s=e.c,r=e.d,q=0,p=0;p<x;++p){o=p<<3>>>0
for(n=0;n<8;++n,q=m){m=q+1
t[q]=new Uint8Array(w)}for(l=0;l<g;++l){k=s[r]
k.toString
j=e.r
j===$&&C.a()
A.beh(k,j[p][l],u,v)
i=l<<3>>>0
for(k=i+8,h=0;h<8;++h){j=t[o+h]
if(j!=null)D.k.c4(j,i,k,u,h<<3>>>0)}}}return t}}
A.zs.prototype={}
A.SA.prototype={
mP(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=g.y,w=new C.dJ(x,x.r,x.e);w.q();){v=x.h(0,w.d)
g.f=Math.max(g.f,v.a)
g.r=Math.max(g.r,v.b)}w=g.e
w.toString
g.w=D.c.eE(w/8/g.f)
w=g.d
w.toString
g.x=D.c.eE(w/8/g.r)
for(w=new C.dJ(x,x.r,x.e),u=y.k,t=y.f0;w.q();){s=x.h(0,w.d)
s.toString
r=g.e
r.toString
q=s.a
p=D.c.eE(D.c.eE(r/8)*q/g.f)
r=g.d
r.toString
o=s.b
n=D.c.eE(D.c.eE(r/8)*o/g.r)
m=g.w*q
l=g.x*o
k=J.f7(l,t)
for(j=0;j<l;++j){i=J.f7(m,u)
for(h=0;h<m;++h)i[h]=new Int32Array(64)
k[j]=i}s.e=p
s.f=n
s.r=k}}}
A.aiY.prototype={
gbO(d){return this.a},
gbz(d){return this.b}}
A.aiZ.prototype={}
A.SB.prototype={
nw(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.y,f=g.length,e=h.r
e.toString
if(e)if(h.Q===0)x=h.at===0?h.gacG():h.gacI()
else x=h.at===0?h.gacx():h.gacz()
else x=h.gacD()
e=f===1
if(e){w=g[0]
v=w.e
v===$&&C.a()
w=w.f
w===$&&C.a()
u=v*w}else{w=h.f
w===$&&C.a()
v=h.b.x
v===$&&C.a()
u=w*v}w=h.z
if(w==null||w===0)h.z=u
for(w=h.a,t=0;t<u;){for(s=0;s<f;++s)g[s].y=0
h.CW=0
if(e){r=g[0]
q=0
while(!0){v=h.z
v.toString
if(!(q<v))break
v=r.e
v===$&&C.a()
p=D.b.e1(t,v)
o=D.b.b3(t,v)
v=r.r
v===$&&C.a()
x.$2(r,v[p][o]);++t;++q}}else{q=0
while(!0){v=h.z
v.toString
if(!(q<v))break
for(s=0;s<f;++s){r=g[s]
n=r.a
m=r.b
for(l=0;l<m;++l)for(k=0;k<n;++k)h.acN(r,x,t,l,k)}++t;++q}}h.ch=0
if(t>=u)break
j=J.k(w.a,w.d)
i=J.k(w.a,w.d+1)
if(j===255)if(i>=208&&i<=215)w.d+=2
else break}},
pW(){var x,w=this,v=w.ch
if(v>0){--v
w.ch=v
return D.b.jD(w.ay,v)&1}v=w.a
if(v.d>=v.c)return null
x=v.bj()
w.ay=x
if(x===255)if(v.bj()!==0)return null
w.ch=7
return D.b.I(w.ay,7)&1},
vX(d){var x,w=new A.rM(d)
for(;x=this.pW(),x!=null;){if(w instanceof A.rM)w=w.a[x]
if(w instanceof A.CZ)return w.a}return null},
Iu(d){var x,w
for(x=0;d>0;){w=this.pW()
if(w==null)return null
x=(x<<1|w)>>>0;--d}return x},
wc(d){var x
if(d==null)return 0
if(d===1)return this.pW()===1?1:-1
x=this.Iu(d)
if(x==null)return 0
if(x>=D.b.cA(1,d-1))return x
return x+D.b.c_(-1,d)+1},
acE(d,e){var x,w,v,u,t,s,r=this,q=d.w
q===$&&C.a()
x=r.vX(q)
w=x===0?0:r.wc(x)
q=d.y
q===$&&C.a()
q+=w
d.y=q
e.$flags&2&&C.f(e)
e[0]=q
for(v=1;v<64;){q=d.x
q===$&&C.a()
u=r.vX(q)
if(u==null)break
t=u&15
s=u>>>4
if(t===0){if(s<15)break
v+=16
continue}v+=s
t=r.wc(t)
e[$.aaW()[v]]=t;++v}},
acH(d,e){var x,w,v=d.w
v===$&&C.a()
x=this.vX(v)
w=x===0?0:D.b.c_(this.wc(x),this.ax)
v=d.y
v===$&&C.a()
v+=w
d.y=v
e.$flags&2&&C.f(e)
e[0]=v},
acJ(d,e){var x=e[0],w=this.pW()
w.toString
w=D.b.c_(w,this.ax)
e.$flags&2&&C.f(e)
e[0]=(x|w)>>>0},
acy(d,e){var x,w,v,u,t,s,r,q,p=this,o=p.CW
if(o>0){p.CW=o-1
return}x=p.Q
w=p.as
for(o=p.ax,v=e.$flags|0;x<=w;){u=d.x
u===$&&C.a()
u=p.vX(u)
u.toString
t=u&15
s=u>>>4
if(t===0){if(s<15){o=p.Iu(s)
o.toString
p.CW=o+D.b.c_(1,s)-1
break}x+=16
continue}x+=s
r=$.aaW()[x]
u=p.wc(t)
q=D.b.c_(1,o)
v&2&&C.f(e)
e[r]=u*q;++x}},
acA(d,e){var x,w,v,u,t,s,r,q,p=this,o=p.Q,n=p.as
$label0$1:for(x=p.ax,w=e.$flags|0,v=0;o<=n;){u=$.aaW()[o]
t=p.cx
switch(t){case 0:t=d.x
t===$&&C.a()
s=p.vX(t)
if(s==null)throw C.e(A.aI("Invalid progressive encoding"))
r=s&15
v=s>>>4
if(r===0)if(v<15){t=p.Iu(v)
t.toString
p.CW=t+D.b.c_(1,v)
p.cx=4}else{p.cx=1
v=16}else{if(r!==1)throw C.e(A.aI("invalid ACn encoding"))
p.cy=p.wc(r)
p.cx=v!==0?2:3}continue $label0$1
case 1:case 2:q=e[u]
if(q!==0){t=p.pW()
t.toString
t=D.b.c_(t,x)
w&2&&C.f(e)
e[u]=q+t}else{--v
if(v===0)p.cx=t===2?3:0}break
case 3:t=e[u]
if(t!==0){q=p.pW()
q.toString
q=D.b.c_(q,x)
w&2&&C.f(e)
e[u]=t+q}else{t=p.cy
t===$&&C.a()
t=D.b.c_(t,x)
w&2&&C.f(e)
e[u]=t
p.cx=0}break
case 4:t=e[u]
if(t!==0){q=p.pW()
q.toString
q=D.b.c_(q,x)
w&2&&C.f(e)
e[u]=t+q}break}++o}if(p.cx===4)if(--p.CW===0)p.cx=0},
acN(d,e,f,g,h){var x,w,v=this.f
v===$&&C.a()
x=D.b.e1(f,v)*d.b+g
w=D.b.b3(f,v)*d.a+h
v=d.r
v===$&&C.a()
if(x>=v.length)return
v=v[x]
if(w>=v.length)return
e.$2(d,v[w])}}
A.x2.prototype={
kW(d){if(d.length<2||d[0]!==255||d[1]!==216)return!1
return A.aLS().aB1(d)},
fF(d){A.ba(d,!0,null,0)
return A.aLS().azB(d)},
je(d,e,f){var x=A.aLS()
x.fz(0,e)
if(x.y.length!==1)throw C.e(A.aI("only single frame JPEGs supported"))
return A.bdB(x)},
fa(d,e){return this.je(0,e,null)}}
A.xz.prototype={
N(){return"PngDisposeMode."+this.b}}
A.ES.prototype={
N(){return"PngBlendMode."+this.b}}
A.ET.prototype={}
A.St.prototype={}
A.pd.prototype={
N(){return"PngFilterType."+this.b}}
A.aoA.prototype={
gbO(d){return this.a},
gbz(d){return this.b}}
A.aiO.prototype={}
A.W0.prototype={
kW(d){var x,w=A.ba(d,!0,null,0).ei(8)
for(x=0;x<8;++x)if(J.k(w.a,w.d+x)!==B.xZ[x])return!1
return!0},
fF(b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=A.ba(b5,!0,b3,0)
b2.d=b4
x=b4.ei(8)
for(w=0;w<8;++w)if(J.k(x.a,x.d+w)!==B.xZ[w])return b3
for(b4=b2.a,v=b4.cy,u=y.t,t=b4.db,s=y.L,r=b4.ax;!0;){q=b2.d
p=q.d-q.b
o=q.J()
n=b2.d.ep(4)
switch(n){case"tEXt":q=b2.d
m=q.en(o)
q.d=q.d+(m.c-m.d)
l=m.da()
k=l.length
for(w=0;w<k;++w)if(l[w]===0){q=w+1
r.l(0,D.pN.fa(0,new Uint8Array(l.subarray(0,C.kU(0,w,k)))),D.pN.fa(0,new Uint8Array(l.subarray(q,C.kU(q,b3,k)))))
break}b2.d.d+=4
break
case"pHYs":q=b2.d
m=q.en(o)
q.d=q.d+(m.c-m.d)
j=A.aO(m,b3,0)
j.J()
j.J()
J.k(j.a,j.d++)
b2.d.d+=4
break
case"IHDR":q=b2.d
m=q.en(o)
q.d=q.d+(m.c-m.d)
i=A.aO(m,b3,0)
h=i.da()
b4.a=i.J()
b4.b=i.J()
b4.c=J.k(i.a,i.d++)
b4.d=J.k(i.a,i.d++)
J.k(i.a,i.d++)
b4.f=J.k(i.a,i.d++)
b4.r=J.k(i.a,i.d++)
q=b4.d
if(!(q===0||q===2||q===3||q===4||q===6))return b3
if(b4.f!==0)return b3
switch(q){case 0:if(!D.d.n(C.b([1,2,4,8,16],u),b4.c))return b3
break
case 2:if(!D.d.n(C.b([8,16],u),b4.c))return b3
break
case 3:if(!D.d.n(C.b([1,2,4,8],u),b4.c))return b3
break
case 4:if(!D.d.n(C.b([8,16],u),b4.c))return b3
break
case 6:if(!D.d.n(C.b([8,16],u),b4.c))return b3
break}if(b2.d.J()!==A.qA(h,A.qA(new C.bW(n),0)))throw C.e(A.aI("Invalid "+n+" checksum"))
break
case"PLTE":q=b2.d
m=q.en(o)
q.d=q.d+(m.c-m.d)
b4.w=m.da()
if(b2.d.J()!==A.qA(s.a(b4.w),A.qA(new C.bW(n),0)))throw C.e(A.aI("Invalid "+n+" checksum"))
break
case"tRNS":q=b2.d
m=q.en(o)
q.d=q.d+(m.c-m.d)
b4.x=m.da()
g=b2.d.J()
q=b4.x
q.toString
if(g!==A.qA(q,A.qA(new C.bW(n),0)))throw C.e(A.aI("Invalid "+n+" checksum"))
break
case"IEND":b2.d.d+=4
break
case"gAMA":if(o!==4)throw C.e(A.aI("Invalid gAMA chunk"))
b2.d.J()
b2.d.d+=4
break
case"IDAT":t.push(p)
q=b2.d
q.d=(q.d+=o)+4
break
case"acTL":b4.CW=b2.d.J()
b2.d.J()
b2.d.d+=4
break
case"fcTL":b2.d.J()
f=b2.d.J()
e=b2.d.J()
d=b2.d.J()
a0=b2.d.J()
a1=b2.d.O()
a2=b2.d.O()
q=b2.d
a3=J.k(q.a,q.d++)
q=b2.d
a4=J.k(q.a,q.d++)
q=B.RK[a3]
a5=B.Yz[a4]
v.push(new A.St(C.b([],u),f,e,d,a0,a1,a2,q,a5))
b2.d.d+=4
break
case"fdAT":b2.d.J()
D.d.gag(v).y.push(p)
q=b2.d
q.d=(q.d+=o-4)+4
break
case"bKGD":q=b4.d
if(q===3){q=b2.d
a6=J.k(q.a,q.d++);--o
a7=a6*3
q=b4.w
a8=q[a7]
a9=q[a7+1]
b0=q[a7+2]
q=b4.x
if(q!=null){q=D.k.n(q,a6)?0:255
a5=new Uint8Array(4)
a5[0]=a8
a5[1]=a9
a5[2]=b0
a5[3]=q
b4.z=new A.r0(a5)}else{q=new Uint8Array(3)
q[0]=a8
q[1]=a9
q[2]=b0
b4.z=new A.Oc(q)}}else if(q===0||q===4){b2.d.O()
o-=2}else if(q===2||q===6){q=b2.d
q.O()
q.O()
q.O()
o-=24}if(o>0)b2.d.d+=o
b2.d.d+=4
break
case"iCCP":b4.Q=b2.d.yJ()
q=b2.d
J.k(q.a,q.d++)
q=b4.Q
a5=b2.d
m=a5.en(o-(q.length+2))
a5.d=a5.d+(m.c-m.d)
b4.at=m.da()
b2.d.d+=4
break
case"cICP":q=b2.d
a5=q.d
if(o===4){b1=q.a
q.d=a5+1
J.k(b1,a5)
a5=b2.d
J.k(a5.a,a5.d++)
a5=b2.d
J.k(a5.a,a5.d++)
a5=b2.d
J.k(a5.a,a5.d++)}else q.d=a5+o
b2.d.d+=4
break
default:q=b2.d
q.d=(q.d+=o)+4
break}if(n==="IEND")break
q=b2.d
if(q.d>=q.c)return b3}return b4},
eI(b7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=null,b2=a9.a,b3=b2.a,b4=b2.b,b5=b2.cy,b6=b5.length
if(b6===0||b7===0){w=C.b([],y.a)
b5=b2.db
v=b5.length
for(u=0,t=0;t<v;++t){b6=a9.d
b6===$&&C.a()
b6.d=b5[t]
s=b6.J()
r=a9.d.ep(4)
b6=a9.d
q=b6.en(s)
b6.d=b6.d+(q.c-q.d)
p=q.da()
u+=p.length
w.push(p)
if(a9.d.J()!==A.qA(p,A.qA(new C.bW(r),0)))throw C.e(A.aI("Invalid "+r+" checksum"))}b1=new Uint8Array(u)
for(b5=w.length,o=0,n=0;n<w.length;w.length===b5||(0,C.z)(w),++n){p=w[n]
J.aPn(b1,o,p)
o+=p.length}}else{if(b7>=b6)throw C.e(A.aI("Invalid Frame Number: "+b7))
m=b5[b7]
b3=m.b
b4=m.c
w=C.b([],y.a)
for(b5=m.y,u=0,t=0;t<b5.length;++t){b6=a9.d
b6===$&&C.a()
b6.d=b5[t]
s=b6.J()
b6=a9.d
b6.ep(4)
b6.d+=4
b6=a9.d
q=b6.en(s-4)
b6.d=b6.d+(q.c-q.d)
p=q.da()
u+=p.length
w.push(p)}b1=new Uint8Array(u)
for(b5=w.length,o=0,n=0;n<w.length;w.length===b5||(0,C.z)(w),++n){p=w[n]
J.aPn(b1,o,p)
o+=p.length}}b5=b2.d
l=1
if(!(b5===3))if(!(b5===0)){if(b5===4)b5=2
else b5=b5===6?4:3
l=b5}x=null
try{x=B.dI.ql(b1)}catch(k){return b0}j=A.ba(x,!0,b0,0)
a9.c=a9.b=0
i=b0
if(b2.d===3){b5=b2.w
if(b5!=null){h=b5.length/3|0
g=b2.x
b6=g!=null
f=b6?g.length:0
e=b6?4:3
i=new A.lB(new Uint8Array(h*e),h,e)
for(b6=e===4,t=0,d=0;t<h;++t,d+=3){a0=b6&&t<f?g[t]:255
i.zC(t,b5[d],b5[d+1],b5[d+2],a0)}}}if(b2.d===0&&b2.x!=null&&i==null&&b2.c<=8){g=b2.x
a1=g.length
b5=b2.c
h=D.b.cA(1,b5)
b6=new Uint8Array(h*4)
i=new A.lB(b6,h,4)
if(b5===1)a2=255
else if(b5===2)a2=85
else{b5=b5===4?17:1
a2=b5}for(t=0;t<h;++t){a3=t*a2
i.zC(t,a3,a3,a3,255)}for(t=0;t<a1;t+=2){a4=(g[t]&255)<<8|g[t+1]&255
if(a4<h)b6[a4*4+3]=0}}b5=b2.c
if(b5===1)a5=B.ch
else if(b5===2)a5=B.cG
else{if(b5===4)b6=B.cH
else b6=b5===16?B.b_:B.y
a5=b6}b6=b2.d
if(b6===0&&b2.x!=null&&b5>8)l=4
a6=A.dx(b0,b0,a5,0,B.aa,b4,b0,0,b6===2&&b2.x!=null?4:l,i,B.y,b3,!1)
a7=b2.a
a8=b2.b
b2.a=b3
b2.b=b4
a9.e=0
if(b2.r!==0){b5=b4+7>>>3
a9.pU(j,a6,0,0,8,8,b3+7>>>3,b5)
b6=b3+3
a9.pU(j,a6,4,0,8,8,b6>>>3,b5)
b5=b4+3
a9.pU(j,a6,0,4,4,8,b6>>>2,b5>>>3)
b6=b3+1
a9.pU(j,a6,2,0,4,4,b6>>>2,b5>>>2)
b5=b4+1
a9.pU(j,a6,0,2,2,4,b6>>>1,b5>>>2)
a9.pU(j,a6,1,0,2,2,b3>>>1,b5>>>1)
a9.pU(j,a6,0,1,1,2,b3,b4>>>1)}else a9.amz(j,a6)
b2.a=a7
b2.b=a8
b5=b2.at
if(b5!=null)a6.c=new A.mJ(b2.Q,B.Qb,b5)
b2=b2.ax
if(b2.a!==0)a6.ar7(b2)
return a6},
je(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null
if(g.fF(e)==null)return f
x=g.a
w=x.cy
v=w.length
if(v===0){x=g.eI(0)
x.toString
return x}for(v=y.g,u=f,t=u,s=0;s<x.CW;++s){a0=w[s]
r=g.eI(s)
if(r==null)continue
if(t==null||u==null){t=r.YY(r.guy())
q=a0.f
t.y=D.c.C((q===0||a0.r===0?0:q/a0.r)*1000)
u=t
continue}q=s-1
p=w[q]
o=r.a
n=o==null
m=n?f:o.a
if(m==null)m=0
l=u.a
k=l==null
j=k?f:l.a
if(m===(j==null?0:j)){o=n?f:o.b
if(o==null)o=0
n=k?f:l.b
o=o===(n==null?0:n)&&a0.d===0&&a0.e===0&&a0.x===B.HN}else o=!1
if(o){q=a0.f
r.y=D.c.C((q===0||a0.r===0?0:q/a0.r)*1000)
t.jQ(r)
u=r
continue}i=t.x
u=A.oE((i===$?t.x=C.b([],v):i)[q],!1,!1)
h=p.w
if(h===B.HP){q=p.d
o=p.e
n=x.z
if(n==null){n=new Uint8Array(4)
m=new A.r0(n)
n[0]=0
n[1]=0
n[2]=0
n[3]=0
n=m}A.aWO(u,!1,n,q,q+p.b-1,o,o+p.c-1)}else if(h===B.HQ&&s>1){i=t.x
if(i===$)i=t.x=C.b([],v)
q=p.d
o=p.e
n=p.b
m=p.c
u=A.aNU(u,i[s-2],B.lz,m,n,q,o,m,n,q,o)}q=a0.f
u.y=D.c.C((q===0||a0.r===0?0:q/a0.r)*1000)
q=a0.x===B.HO?B.lz:B.i8
u=A.aNU(u,r,q,f,f,a0.d,a0.e,f,f,f,f)
t.jQ(u)}return t},
fa(d,e){return this.je(0,e,null)},
pU(a0,a1,a2,a3,a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.a,d=e.d
if(d===4)x=2
else if(d===2)x=3
else{d=d===6?4:1
x=d}w=x*e.c
v=D.b.I(w+7,3)
u=D.b.I(w*a6+7,3)
t=C.b([null,null],y.e)
s=C.b([0,0,0,0],y.t)
for(e=a4>1,r=a4-a2,q=a3,p=0,o=0;p<a7;++p,q+=a5,++f.e){n=B.xj[J.k(a0.a,a0.d++)]
m=a0.en(u)
a0.d=a0.d+(m.c-m.d)
d=m.da()
t[o]=d
o=1-o
f.WE(n,v,d,t[o])
f.c=f.b=0
l=d.length
k=new A.fj(d,0,Math.min(l,l),0,!0)
for(d=r<=1,j=a2,i=0;i<a6;++i,j+=a4){f.US(k,s)
l=a1.a
l=l==null?null:l.bY(j,q,null)
f.IP(l==null?new A.cE():l,s)
if(!d||e)for(h=0;h<a4;++h)for(l=q+h,g=0;g<r;++g)f.IP(a1.f2(j+g,l),s)}}},
amz(d,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.a,e=f.d
if(e===4)x=2
else if(e===2)x=3
else{e=e===6?4:1
x=e}w=x*f.c
v=f.a
u=f.b
t=D.b.I(v*w+7,3)
s=D.b.I(w+7,3)
r=C.aZ(t,0,!1,y.p)
q=C.b([r,r],y.S)
p=C.b([0,0,0,0],y.t)
f=a0.a
o=f.gU(f)
o.q()
for(n=0,m=0;n<u;++n,m=j){l=B.xj[J.k(d.a,d.d++)]
k=d.en(t)
d.d=d.d+(k.c-k.d)
f=k.da()
q[m]=f
j=1-m
g.WE(l,s,f,q[j])
g.c=g.b=0
f=q[m]
e=f.length
i=new A.fj(f,0,Math.min(e,e),0,!0)
for(h=0;h<v;++h){g.US(i,p)
g.IP(o.gM(o),p)
o.q()}}},
WE(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l=f.length
switch(d.a){case 0:break
case 1:for(x=e;x<l;++x)f[x]=f[x]+f[x-e]&255
break
case 2:for(w=g!=null,x=0;x<l;++x){v=w?g[x]:0
f[x]=f[x]+v&255}break
case 3:for(w=g!=null,x=0;x<l;++x){u=x<e?0:f[x-e]
v=w?g[x]:0
f[x]=f[x]+D.b.I(u+v,1)&255}break
case 4:for(w=g==null,t=!w,x=0;x<l;++x){s=x<e
u=s?0:f[x-e]
v=t?g[x]:0
r=s||w?0:g[x-e]
q=u+v-r
p=Math.abs(q-u)
o=Math.abs(q-v)
n=Math.abs(q-r)
if(p<=o&&p<=n)m=u
else m=o<=n?v:r
f[x]=f[x]+m&255}break}},
ll(d,e){var x,w,v,u,t,s=this
if(e===0)return 0
if(e===8)return d.bj()
if(e===16)return d.O()
for(x=d.c;w=s.c,w<e;){w=d.d
if(w>=x)throw C.e(A.aI("Invalid PNG data."))
v=d.a
d.d=w+1
u=J.k(v,w)
w=s.c
s.b=D.b.cA(u,w)
s.c=w+8}if(e===1)t=1
else if(e===2)t=3
else{if(e===4)x=15
else x=0
t=x}x=w-e
w=D.b.d5(s.b,x)
s.c=x
return w&t},
US(d,e){var x=this,w=x.a,v=w.d
switch(v){case 0:e[0]=x.ll(d,w.c)
return
case 2:e[0]=x.ll(d,w.c)
e[1]=x.ll(d,w.c)
e[2]=x.ll(d,w.c)
return
case 3:e[0]=x.ll(d,w.c)
return
case 4:e[0]=x.ll(d,w.c)
e[1]=x.ll(d,w.c)
return
case 6:e[0]=x.ll(d,w.c)
e[1]=x.ll(d,w.c)
e[2]=x.ll(d,w.c)
e[3]=x.ll(d,w.c)
return}throw C.e(A.aI("Invalid color type: "+v+"."))},
IP(d,e){var x,w,v,u,t,s,r,q=this.a,p=q.d
switch(p){case 0:p=q.x
if(p!=null&&q.c>8){q=p[0]
p=p[1]
x=e[0]
d.dZ(x,x,x,x!==((q&255)<<24|p&255)>>>0?d.gb1():0)
return}d.fh(e[0],0,0)
return
case 2:w=e[0]
x=e[1]
v=e[2]
q=q.x
if(q!=null){p=q[0]
u=q[1]
t=q[2]
s=q[3]
r=q[4]
q=q[5]
if(w!==((p&255)<<8|u&255)||x!==((t&255)<<8|s&255)||v!==((r&255)<<8|q&255)){d.dZ(w,x,v,d.gb1())
return}}d.fh(w,x,v)
return
case 3:d.sbT(0,e[0])
return
case 4:d.fh(e[0],e[1],0)
return
case 6:d.dZ(e[0],e[1],e[2],e[3])
return}throw C.e(A.aI("Invalid color type: "+p+"."))}}
A.pe.prototype={
N(){return"PnmFormat."+this.b}}
A.tH.prototype={
gbO(d){return this.a},
gbz(d){return this.b}}
A.aoB.prototype={
kW(d){var x
this.b=A.ba(d,!1,null,0)
x=this.AD()
if(x==="P1"||x==="P2"||x==="P5"||x==="P3"||x==="P6")return!0
return!1},
je(d,e,f){if(this.fF(e)==null)return null
return this.eI(0)},
fF(d){var x,w,v=this
v.b=A.ba(d,!1,null,0)
x=v.AD()
if(x==="P1"){w=v.a=new A.tH(B.hy)
w.e=B.HR}else if(x==="P2"){w=v.a=new A.tH(B.hy)
w.e=B.HS}else if(x==="P5"){w=v.a=new A.tH(B.hy)
w.e=B.nZ}else if(x==="P3"){w=v.a=new A.tH(B.hy)
w.e=B.HT}else if(x==="P6"){w=v.a=new A.tH(B.hy)
w.e=B.o_}else return v.b=null
w.a=v.w8()
w=v.a
w.toString
w.b=v.w8()
w=v.a
if(w.a===0||w.b===0)return v.a=v.b=null
return w},
eI(d){var x,w,v,u,t,s=this,r=null,q=s.a
if(q==null)return r
x=q.e
if(x===B.HR){x=q.a
w=A.dx(r,r,B.ch,0,B.aa,q.b,r,0,1,r,B.y,x,!1)
for(q=w.a,q=q.gU(q);q.q();){v=q.gM(q)
if(s.AD()==="1")v.fh(1,1,1)
else v.fh(0,0,0)}return w}else if(x===B.HS||x===B.nZ){u=s.w8()
if(u===0)return r
q=s.a
x=q.a
q=q.b
w=A.dx(r,r,s.a_y(u),0,B.aa,q,r,0,1,r,B.y,x,!1)
for(q=w.a,q=q.gU(q);q.q();){v=q.gM(q)
t=s.Bf(s.a.e,u)
v.fh(t,t,t)}return w}else if(x===B.HT||x===B.o_){u=s.w8()
if(u===0)return r
q=s.a
x=q.a
q=q.b
w=A.dx(r,r,s.a_y(u),0,B.aa,q,r,0,3,r,B.y,x,!1)
for(q=w.a,q=q.gU(q);q.q();)q.gM(q).fh(s.Bf(s.a.e,u),s.Bf(s.a.e,u),s.Bf(s.a.e,u))
return w}return r},
a_y(d){if(d>255)return B.b_
if(d>15)return B.y
if(d>3)return B.cH
if(d>1)return B.cG
return B.ch},
Bf(d,e){if(d===B.nZ||d===B.o_)return this.b.bj()
return this.w8()},
w8(){var x,w,v=this.AD()
if(J.cd(v)===0)return 0
try{x=C.d3(v,null)
return x}catch(w){return 0}},
AD(){var x,w,v,u,t=this.b
if(t==null)return""
x=this.c
if(x.length!==0)return D.d.kb(x,0)
w=D.e.hX(t.azH())
if(w.length===0)return""
for(;D.e.bZ(w,"#");)w=D.e.hX(this.b.a1K(70))
t=y.U
v=C.M(new C.aQ(C.b(w.split(" "),y.s),new A.aoC(),t),t.i("j.E"))
for(t=v.length,u=0;u<t;++u)if(D.e.bZ(v[u],"#")){D.d.sp(v,u)
break}D.d.V(x,v)
if(x.length===0)return""
return D.d.kb(x,0)}}
A.Wf.prototype={}
A.Wg.prototype={}
A.lE.prototype={}
A.Wi.prototype={}
A.Wj.prototype={}
A.Wm.prototype={}
A.Wn.prototype={}
A.F1.prototype={}
A.Wl.prototype={}
A.apl.prototype={
a9B(d){var x,w,v,u,t=this
d.O()
d.O()
d.O()
d.O()
x=D.b.bV(d.c-d.d,8)
if(x>0){t.e=new Uint16Array(x)
t.f=new Uint16Array(x)
t.r=new Uint16Array(x)
t.w=new Uint16Array(x)
for(w=0;w<x;++w){v=t.e
u=d.O()
v.$flags&2&&C.f(v)
v[w]=u
u=t.f
v=d.O()
u.$flags&2&&C.f(u)
u[w]=v
v=t.r
u=d.O()
v.$flags&2&&C.f(v)
v[w]=u
u=t.w
v=d.O()
u.$flags&2&&C.f(u)
u[w]=v}}}}
A.xG.prototype={
a1H(d,e,f,g,h,i,j){if(d.c-d.d<2)return
if(h==null)h=d.O()
switch(h){case 0:g.toString
this.an9(d,e,f,g)
break
case 1:if(i==null)i=this.an6(d,f)
g.toString
this.an8(d,e,f,g,i,j)
break
default:throw C.e(A.aI("Unsupported compression: "+h))}},
azG(d,e,f,g){return this.a1H(d,e,f,g,null,null,0)},
an6(d,e){var x,w=new Uint16Array(e)
for(x=0;x<e;++x)w[x]=d.O()
return w},
an9(d,e,f,g){var x,w=e*f
if(g===16)w*=2
if(w>d.c-d.d){x=new Uint8Array(w)
this.c=x
D.k.eW(x,0,w,255)
return}this.c=d.ei(w).da()},
an8(d,e,f,g,h,i){var x,w,v,u,t,s,r=e*f
if(g===16)r*=2
x=new Uint8Array(r)
this.c=x
w=i*f
if(w>=h.length){D.k.eW(x,0,r,255)
return}for(v=0,u=0;u<f;++u,w=t){t=w+1
s=d.en(h[w])
d.d=d.d+(s.c-s.d)
x=this.c
x.toString
this.acS(s,x,v)
v+=e}},
acS(d,e,f){var x,w,v,u,t,s,r,q,p
for(x=d.c,w=e.$flags|0,v=e.length;u=d.d,u<x;){t=d.a
d.d=u+1
u=J.k(t,u)
t=$.hq()
t.$flags&2&&C.f(t)
t[0]=u
s=$.i1()[0]
if(s<0){s=1-s
u=d.d
if(u>=x)break
t=d.a
d.d=u+1
r=J.k(t,u)
if(f+s>v)s=v-f
for(q=0;q<s;++q,f=p){p=f+1
w&2&&C.f(e)
e[f]=r}}else{++s
if(f+s>v)s=v-f
s=Math.min(s,x-d.d)
for(q=0;q<s;++q,f=p){p=f+1
u=J.k(d.a,d.d++)
w&2&&C.f(e)
e[f]=u}}}}}
A.kz.prototype={
N(){return"PsdColorMode."+this.b}}
A.apn.prototype={
a9C(d){var x,w,v=this
v.as=A.ba(d,!0,null,0)
v.amL()
if(v.c!==943870035)return
x=v.as.J()
v.as.ei(x)
x=v.as.J()
v.at=v.as.ei(x)
x=v.as.J()
v.ax=v.as.ei(x)
w=v.as
v.ay=w.ei(w.c-w.d)},
nw(d){var x,w=this
if(w.c===943870035){x=w.as
x===$&&C.a()
x=x==null}else x=!0
if(x)return!1
w.an4()
w.an5()
w.an7()
w.ay=w.ax=w.at=w.as=null
return!0},
Zt(){if(!this.nw(0))return null
return this.aA0()},
aA0(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.y
if(a0!=null)return a0
a0=e.a
a0=A.dx(d,d,B.y,0,B.aa,e.b,d,0,4,d,B.y,a0,!1)
e.y=a0
a0.ab(0)
for(a0=e.w,x=0;x<a0.length;++x){w=a0[x]
v=w.y
v===$&&C.a()
if((v&2)!==0)continue
v=w.w
v===$&&C.a()
u=v/255
t=w.r
s=w.cx
v=w.a
v.toString
r=v
q=0
while(!0){v=w.f
v===$&&C.a()
if(!(q<v))break
v=w.a
v.toString
p=v+q
o=w.b
v=r>=0
n=0
while(!0){m=w.e
m===$&&C.a()
if(!(n<m))break
m=s.a
l=m==null?d:m.bY(n,q,d)
if(l==null)l=new A.cE()
k=D.c.C(l.gX(l))
j=D.c.C(l.ga5())
i=D.c.C(l.ga6(l))
h=D.c.C(l.ga4(l))
o.toString
if(o>=0&&o<e.a&&v&&r<e.b){m=w.b
m.toString
g=e.y.a
f=g==null?d:g.bY(m+n,p,d)
if(f==null)f=new A.cE()
e.aav(D.c.C(f.gX(f)),D.c.C(f.ga5()),D.c.C(f.ga6(f)),D.c.C(f.ga4(f)),k,j,i,h,t,u,f)}++n;++o}++q;++r}}a0=e.y
a0.toString
return a0},
aav(d,e,f,g,h,i,j,k,l,m,n){var x,w,v,u,t,s=k/255*m
switch(l){case 1885434739:x=g
w=f
v=e
u=d
break
case 1852797549:x=k
w=j
v=i
u=h
break
case 1684632435:x=k
w=j
v=i
u=h
break
case 1684107883:u=Math.min(d,h)
v=Math.min(e,i)
w=Math.min(f,j)
x=k
break
case 1836411936:u=D.b.I(d*h,8)
v=D.b.I(e*i,8)
w=D.b.I(f*j,8)
x=k
break
case 1768188278:u=A.apo(d,h)
v=A.apo(e,i)
w=A.apo(f,j)
x=k
break
case 1818391150:u=A.apq(d,h)
v=A.apq(e,i)
w=A.apq(f,j)
x=k
break
case 1684751212:x=k
w=j
v=i
u=h
break
case 1818850405:u=Math.max(d,h)
v=Math.max(e,i)
w=Math.max(f,j)
x=k
break
case 1935897198:u=A.aMx(d,h)
v=A.aMx(e,i)
w=A.aMx(f,j)
x=k
break
case 1684633120:u=A.app(d,h)
v=A.app(e,i)
w=A.app(f,j)
x=k
break
case 1818518631:u=h+d>255?255:d+h
v=i+e>255?255:e+i
w=j+f>255?255:f+j
x=k
break
case 1818706796:x=k
w=j
v=i
u=h
break
case 1870030194:u=A.aMv(d,h,g,k)
v=A.aMv(e,i,g,k)
w=A.aMv(f,j,g,k)
x=k
break
case 1934387572:u=A.aMy(d,h)
v=A.aMy(e,i)
w=A.aMy(f,j)
x=k
break
case 1749838196:u=A.aMt(d,h)
v=A.aMt(e,i)
w=A.aMt(f,j)
x=k
break
case 1984719220:u=A.aMz(d,h)
v=A.aMz(e,i)
w=A.aMz(f,j)
x=k
break
case 1816947060:u=A.aMu(d,h)
v=A.aMu(e,i)
w=A.aMu(f,j)
x=k
break
case 1884055924:u=A.aMw(d,h)
v=A.aMw(e,i)
w=A.aMw(f,j)
x=k
break
case 1749903736:u=h<255-d?0:255
v=i<255-e?0:255
w=j<255-f?0:255
x=k
break
case 1684629094:u=Math.abs(h-d)
v=Math.abs(i-e)
w=Math.abs(j-f)
x=k
break
case 1936553316:u=A.aMs(d,h)
v=A.aMs(e,i)
w=A.aMs(f,j)
x=k
break
case 1718842722:x=k
w=j
v=i
u=h
break
case 1717856630:x=k
w=j
v=i
u=h
break
case 1752524064:x=k
w=j
v=i
u=h
break
case 1935766560:x=k
w=j
v=i
u=h
break
case 1668246642:x=k
w=j
v=i
u=h
break
case 1819634976:x=k
w=j
v=i
u=h
break
default:x=k
w=j
v=i
u=h}t=1-s
n.sX(0,D.c.C(d*t+u*s))
n.sa5(D.c.C(e*t+v*s))
n.sa6(0,D.c.C(f*t+w*s))
n.sa4(0,D.c.C(g*t+x*s))},
amL(){var x,w,v=this,u=v.as
u===$&&C.a()
v.c=u.J()
u=v.as.O()
v.d=u
if(u!==1){v.c=0
return}x=v.as.ei(6)
for(w=0;w<6;++w)if(J.k(x.a,x.d+w)!==0){v.c=0
return}v.e=v.as.O()
v.b=v.as.J()
v.a=v.as.J()
v.f=v.as.O()
v.r=B.a4X[v.as.O()]},
an4(){var x,w,v,u,t,s=this,r=s.at
r.d=r.b
for(r=s.z;x=s.at,x.d<x.c;){w=x.J()
v=s.at.O()
x=s.at
u=J.k(x.a,x.d++)
s.at.ep(u)
if((u&1)===0)++s.at.d
u=s.at.J()
x=s.at
t=x.en(u)
x.d=x.d+(t.c-t.d)
if((u&1)===1)++s.at.d
if(w===943868237)r.l(0,v,new A.Wh())}},
an5(){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.ax
m.d=m.b
x=m.J()
if((x&1)!==0)++x
w=n.ax.ei(x)
m=n.w
D.d.ab(m)
if(x>0){v=w.O()
u=$.hp()
u.$flags&2&&C.f(u)
u[0]=v
t=$.i0()[0]
if(t<0)t=-t
for(v=y.N,u=y.hf,s=y.l,r=y.af,q=0;q<t;++q){p=new A.Wk(C.t(v,u),C.b([],s),C.b([],r))
p.a9D(w)
m.push(p)}}for(q=0;q<m.length;++q)m[q].azA(w,n)
x=n.ax.J()
o=n.ax.ei(x)
if(x>0){o.O()
o.O()
o.O()
o.O()
o.O()
o.O()
o.bj()}},
an7(){var x,w,v,u,t,s,r=this,q=r.ay
q.d=q.b
x=q.O()
if(x===1){q=r.b
w=r.e
w===$&&C.a()
v=q*w
u=new Uint16Array(v)
for(t=0;t<v;++t)u[t]=r.ay.O()}else u=null
r.x=C.b([],y.X)
t=0
while(!0){q=r.e
q===$&&C.a()
if(!(t<q))break
q=r.x
w=r.ay
w.toString
s=t===3?-1:t
s=new A.xG(s)
s.a1H(w,r.a,r.b,r.f,x,u,t)
q.push(s);++t}r.y=A.aT3(r.r,r.f,r.a,r.b,r.x)},
gbO(d){return this.a},
gbz(d){return this.b}}
A.Wh.prototype={}
A.Wk.prototype={
a9D(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=a1.J(),a0=$.d4()
a0.$flags&2&&C.f(a0)
a0[0]=d
d=$.eE()
e.a=d[0]
a0[0]=a1.J()
e.b=d[0]
a0[0]=a1.J()
e.c=d[0]
a0[0]=a1.J()
d=d[0]
e.d=d
a0=e.b
a0.toString
e.e=d-a0
a0=e.c
d=e.a
d.toString
e.f=a0-d
e.as=C.b([],y.X)
x=a1.O()
for(w=0;w<x;++w){d=a1.O()
a0=$.hp()
a0.$flags&2&&C.f(a0)
a0[0]=d
v=$.i0()[0]
a1.J()
e.as.push(new A.xG(v))}u=a1.J()
if(u!==943868237)throw C.e(A.aI("Invalid PSD layer signature: "+D.b.jv(u,16)))
e.r=a1.J()
e.w=a1.bj()
a1.bj()
e.y=a1.bj()
if(a1.bj()!==0)throw C.e(A.aI("Invalid PSD layer data"))
t=a1.J()
s=a1.ei(t)
if(t>0){t=s.J()
if(t>0){r=s.ei(t)
d=r.d
r.J()
r.J()
r.J()
r.J()
r.bj()
r.bj()
if(r.c-d===20)r.d+=2
else{r.bj()
r.bj()
r.J()
r.J()
r.J()
r.J()}}t=s.J()
if(t>0)new A.apl().a9B(s.ei(t))
t=s.bj()
s.ep(t)
q=4-D.b.b3(t,4)-1
if(q>0)s.d+=q
for(d=s.c,a0=e.ay,p=e.cy,o=y.cE;s.d<d;){u=s.J()
if(u!==943868237)throw C.e(A.aI("PSD invalid signature for layer additional data: "+D.b.jv(u,16)))
n=s.ep(4)
t=s.J()
m=s.en(t)
l=s.d+(m.c-m.d)
s.d=l
if((t&1)===1)s.d=l+1
a0.l(0,n,A.b5I(n,m))
if(n==="lrFX"){k=A.aO(o.a(a0.h(0,"lrFX")).b,null,0)
k.O()
j=k.O()
for(i=0;i<j;++i){k.ep(4)
h=k.ep(4)
g=k.J()
if(h==="dsdw"){f=new A.Wg()
p.push(f)
f.a=k.J()
k.J()
k.J()
k.J()
k.J()
k.O()
k.O()
k.O()
k.O()
k.O()
k.ep(8)
J.k(k.a,k.d++)
J.k(k.a,k.d++)
J.k(k.a,k.d++)
k.O()
k.O()
k.O()
k.O()
k.O()}else if(h==="isdw"){f=new A.Wj()
p.push(f)
f.a=k.J()
k.J()
k.J()
k.J()
k.J()
k.O()
k.O()
k.O()
k.O()
k.O()
k.ep(8)
J.k(k.a,k.d++)
J.k(k.a,k.d++)
J.k(k.a,k.d++)
k.O()
k.O()
k.O()
k.O()
k.O()}else if(h==="oglw"){f=new A.Wm()
p.push(f)
f.a=k.J()
k.J()
k.J()
k.O()
k.O()
k.O()
k.O()
k.O()
k.ep(8)
J.k(k.a,k.d++)
J.k(k.a,k.d++)
if(f.a===2){k.O()
k.O()
k.O()
k.O()
k.O()}}else if(h==="iglw"){f=new A.Wi()
p.push(f)
f.a=k.J()
k.J()
k.J()
k.O()
k.O()
k.O()
k.O()
k.O()
k.ep(8)
J.k(k.a,k.d++)
J.k(k.a,k.d++)
if(f.a===2){J.k(k.a,k.d++)
k.O()
k.O()
k.O()
k.O()
k.O()}}else if(h==="bevl"){f=new A.Wf()
p.push(f)
f.a=k.J()
k.J()
k.J()
k.J()
k.ep(8)
k.ep(8)
k.O()
k.O()
k.O()
k.O()
k.O()
k.O()
k.O()
k.O()
k.O()
k.O()
J.k(k.a,k.d++)
J.k(k.a,k.d++)
J.k(k.a,k.d++)
J.k(k.a,k.d++)
J.k(k.a,k.d++)
J.k(k.a,k.d++)
if(f.a===2){k.O()
k.O()
k.O()
k.O()
k.O()
k.O()
k.O()
k.O()
k.O()
k.O()}}else if(h==="sofi"){f=new A.Wn()
p.push(f)
f.a=k.J()
k.ep(4)
k.O()
k.O()
k.O()
k.O()
k.O()
J.k(k.a,k.d++)
J.k(k.a,k.d++)
k.O()
k.O()
k.O()
k.O()
k.O()}else k.d+=g}}}}},
azA(d,e){var x,w,v,u,t,s=this,r=0
while(!0){x=s.as
x===$&&C.a()
if(!(r<x.length))break
x=x[r]
w=s.e
w===$&&C.a()
v=s.f
v===$&&C.a()
x.azG(d,w,v,e.f);++r}w=e.r
v=e.f
u=s.e
u===$&&C.a()
t=s.f
t===$&&C.a()
s.cx=A.aT3(w,v,u,t,x)}}
A.xH.prototype={}
A.apm.prototype={
je(d,e,f){var x,w,v,u=null,t=A.aMr(e)
this.a=t
x=1
if(x===1){t=t.Zt()
return t}for(w=u,v=0;v<x;++v){t=this.a
f=t==null?u:t.Zt()
if(f==null)continue
if(w==null){f.w=B.rm
w=f}else w.jQ(f)}return w},
fF(d){return this.a=A.aMr(d)}}
A.Wp.prototype={}
A.nd.prototype={
an(d,e){return new A.nd(this.a*e,this.b*e,this.c*e)},
a0(d,e){return new A.nd(this.a+e.a,this.b+e.b,this.c+e.c)},
ad(d,e){return new A.nd(this.a-e.a,this.b-e.b,this.c-e.c)}}
A.fS.prototype={
an(d,e){var x=this
return new A.fS(x.a*e,x.b*e,x.c*e,x.d*e)},
a0(d,e){var x=this
return new A.fS(x.a+e.a,x.b+e.b,x.c+e.c,x.d+e.d)},
ad(d,e){var x=this
return new A.fS(x.a-e.a,x.b-e.b,x.c-e.c,x.d-e.d)}}
A.F2.prototype={
gbO(d){return this.a},
gbz(d){return this.b}}
A.xI.prototype={
gbz(d){return this.f},
gbO(d){return this.r}}
A.Wo.prototype={
gbO(d){return this.a},
gbz(d){return this.b}}
A.jH.prototype={
swS(d){var x=this.a,w=this.b
x.$flags&2&&C.f(x)
x[w+1]=d},
zb(){var x=this.e,w=this.d
if(x)return new A.nd(B.cm[w>>>9],B.cm[w>>>4&31],B.bZ[w&15])
else return new A.nd(B.bZ[w>>>7&15],B.bZ[w>>>3&15],B.k_[w&7])},
zd(){var x=this.e,w=this.d
if(x)return new A.fS(B.cm[w>>>9],B.cm[w>>>4&31],B.bZ[w&15],255)
else return new A.fS(B.bZ[w>>>7&15],B.bZ[w>>>3&15],B.k_[w&7],B.k_[w>>>11&7])},
zc(){var x=this.r,w=this.f
if(x)return new A.nd(B.cm[w>>>10],B.cm[w>>>5&31],B.cm[w&31])
else return new A.nd(B.bZ[w>>>8&15],B.bZ[w>>>4&15],B.bZ[w&15])},
ze(){var x=this.r,w=this.f
if(x)return new A.fS(B.cm[w>>>10],B.cm[w>>>5&31],B.cm[w&31],255)
else return new A.fS(B.bZ[w>>>8&15],B.bZ[w>>>4&15],B.bZ[w&15],B.k_[w>>>12&7])},
vO(){var x=this,w=x.c?1:0,v=x.d,u=x.e?1:0,t=x.f,s=x.r?1:0
return(w|(v&16383)<<1|u<<15|(t&32767)<<16|s<<31)>>>0},
mh(d){var x=this,w=x.a[x.b+1]
x.c=(w&1)===1
x.swS(x.vO())
x.d=w>>>1&16383
x.swS(x.vO())
x.e=(w>>>15&1)===1
x.swS(x.vO())
x.f=w>>>16&32767
x.swS(x.vO())
x.r=(w>>>31&1)===1
x.swS(x.vO())}}
A.apr.prototype={
fF(d){var x,w=this,v=d.length,u=v-(v>>>1&1431655765)>>>0
u=(u&858993459)+(u>>>2&858993459)
if((u+(u>>>4)>>>0&252645135)*16843009>>>0>>>24===1){x=w.acC(d)
if(x!=null){w.a=d
return w.b=x}}x=w.acR(d)
if(x!=null){w.a=d
return w.b=x}x=w.acP(d)
if(x!=null){w.a=d
return w.b=x}return null},
acR(d){var x,w,v=A.ba(d,!1,null,0)
if(v.J()!==52)return null
if(v.J()!==55727696)return null
x=C.b([0,0,0,0],y.t)
w=new A.xI(x)
v.J()
w.b=v.J()
x[0]=v.bj()
x[1]=v.bj()
x[2]=v.bj()
x[3]=v.bj()
v.J()
v.J()
w.f=v.J()
w.r=v.J()
v.J()
v.J()
v.J()
v.J()
w.Q=v.J()
return w},
acP(d){var x,w,v=A.ba(d,!1,null,0)
if(v.J()!==52)return null
x=new A.F2()
x.b=v.J()
x.a=v.J()
v.J()
x.d=v.J()
v.J()
x.f=v.J()
v.J()
v.J()
v.J()
x.y=v.J()
w=v.J()
x.z=w
x.Q=v.J()
if(w!==559044176)return null
return x},
acC(d){var x,w,v,u,t,s,r=null,q=d.length,p=A.ba(d,!1,r,0)
if(p.J()!==0)return r
x=new A.Wo()
x.b=p.J()
x.a=p.J()
p.J()
p.J()
p.J()
p.J()
p.J()
p.J()
p.J()
w=p.J()
x.y=w
if(w===559044176)return r
v=0
u=8
if(!(q===32)){t=0
while(!0){if(!(t<10)){v=1
break}s=t<<1>>>0
if((D.b.c_(64,s)&q)>>>0!==0){u=D.b.c_(16,t)
v=1
break}if((D.b.c_(128,s)&q)>>>0!==0){u=D.b.c_(16,t)
break}++t}if(t===10)return r}if((v+1)*2===4)return r
x.b=x.a=u
return x},
eI(d){var x,w,v=this,u=v.b
if(u==null||v.a==null)return null
if(u instanceof A.Wo){u=u.a
x=v.b
x=x.gbz(x)
w=v.a
w.toString
return v.GV(u,x,w)}else if(u instanceof A.F2){u=v.a
u.toString
return v.acO(u)}else if(u instanceof A.xI){u=v.a
u.toString
return v.acQ(u)}return null},
je(d,e,f){if(this.fF(e)==null)return null
return this.eI(0)},
acO(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=d.length
if(j<52||l.b==null)return k
x=l.b
x.toString
y.fi.a(x)
w=A.ba(d,!1,k,0)
w.d+=52
v=x.Q
if(v<1)v=(x.d&4096)!==0?6:1
if(v!==1)return k
u=x.a
t=x.b
if(u*t*x.f/8>j-52)return k
switch(x.d&255){case 16:s=A.dx(k,k,B.y,0,B.aa,t,k,0,4,k,B.y,u,!1)
for(x=s.a,x=x.gU(x);x.q();){r=x.gM(x)
q=J.k(w.a,w.d++)
p=J.k(w.a,w.d++)
r.sX(0,p&240)
r.sa5((p&15)<<4)
r.sa6(0,q&240)
r.sa4(0,(q&15)<<4)}return s
case 17:s=A.dx(k,k,B.y,0,B.aa,t,k,0,4,k,B.y,u,!1)
for(x=s.a,x=x.gU(x);x.q();){r=x.gM(x)
o=w.O()
n=(o&1)!==0?255:0
r.sX(0,o>>>8&248)
r.sa5(o>>>3&248)
r.sa6(0,(o&62)<<2)
r.sa4(0,n)}return s
case 18:s=A.dx(k,k,B.y,0,B.aa,t,k,0,4,k,B.y,u,!1)
for(x=s.a,x=x.gU(x);x.q();){r=x.gM(x)
r.sX(0,J.k(w.a,w.d++))
r.sa5(J.k(w.a,w.d++))
r.sa6(0,J.k(w.a,w.d++))
r.sa4(0,J.k(w.a,w.d++))}return s
case 19:s=A.dx(k,k,B.y,0,B.aa,t,k,0,3,k,B.y,u,!1)
for(x=s.a,x=x.gU(x);x.q();){r=x.gM(x)
o=w.O()
r.sX(0,o>>>8&248)
r.sa5(o>>>3&252)
r.sa6(0,(o&31)<<3)}return s
case 20:s=A.dx(k,k,B.y,0,B.aa,t,k,0,3,k,B.y,u,!1)
for(x=s.a,x=x.gU(x);x.q();){r=x.gM(x)
o=w.O()
r.sX(0,(o&31)<<3)
r.sa5(o>>>2&248)
r.sa6(0,o>>>7&248)}return s
case 21:s=A.dx(k,k,B.y,0,B.aa,t,k,0,3,k,B.y,u,!1)
for(x=s.a,x=x.gU(x);x.q();){r=x.gM(x)
r.sX(0,J.k(w.a,w.d++))
r.sa5(J.k(w.a,w.d++))
r.sa6(0,J.k(w.a,w.d++))}return s
case 22:s=A.dx(k,k,B.y,0,B.aa,t,k,0,1,k,B.y,u,!1)
for(x=s.a,x=x.gU(x);x.q();)x.gM(x).sX(0,J.k(w.a,w.d++))
return s
case 23:s=A.dx(k,k,B.y,0,B.aa,t,k,0,4,k,B.y,u,!1)
for(x=s.a,x=x.gU(x);x.q();){r=x.gM(x)
n=J.k(w.a,w.d++)
m=J.k(w.a,w.d++)
r.sX(0,m)
r.sa5(m)
r.sa6(0,m)
r.sa4(0,n)}return s
case 24:return k
case 25:return x.y===0?l.Rm(u,t,w.da()):l.GV(u,t,w.da())}return k},
acQ(d){var x,w,v,u=this
if(!(u.b instanceof A.xI))return null
x=A.ba(d,!1,null,0)
w=x.d+=52
v=y.a7.a(u.b)
x.d=w+v.Q
if(v.c[0]===0)switch(v.b){case 2:return u.Rm(v.r,v.f,x.da())
case 3:return u.GV(v.r,v.f,x.da())}return null},
Rm(c5,c6,c7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=A.dx(b5,b5,B.y,0,B.aa,c6,b5,0,3,b5,B.y,c5,!1),b7=c5/4|0,b8=b7-1,b9=J.i2(D.k.gaj(c7),0,null),c0=new A.jH(b9),c1=new A.jH(J.i2(D.k.gaj(c7),0,null)),c2=new A.jH(J.i2(D.k.gaj(c7),0,null)),c3=new A.jH(J.i2(D.k.gaj(c7),0,null)),c4=new A.jH(J.i2(D.k.gaj(c7),0,null))
for(x=0,w=0;x<b7;++x,w+=4)for(v=0,u=0;v<b7;++v,u+=4){c0.b=A.ne(v,x)<<1>>>0
c0.mh(0)
t=b9[c0.b]
s=c0.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&b8)>>>0
o=(p+1&b8)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&b8)>>>0
k=(l+1&b8)>>>0
c1.b=A.ne(l,p)<<1>>>0
c1.mh(0)
c2.b=A.ne(k,p)<<1>>>0
c2.mh(0)
c3.b=A.ne(l,o)<<1>>>0
c3.mh(0)
c4.b=A.ne(k,o)<<1>>>0
c4.mh(0)
j=c1.zb()
i=B.bi[r][0]
h=c2.zb()
g=B.bi[r][1]
f=c3.zb()
e=B.bi[r][2]
d=c4.zb()
a0=B.bi[r][3]
a1=c1.zc()
a2=B.bi[r][0]
a3=c2.zc()
a4=B.bi[r][1]
a5=c3.zc()
a6=B.bi[r][2]
a7=c4.zc()
a8=B.bi[r][3]
a9=B.wj[s+t&3]
b0=a9[0]
b1=a9[1]
b2=D.b.I((j.a*i+h.a*g+f.a*e+d.a*a0)*b0+(a1.a*a2+a3.a*a4+a5.a*a6+a7.a*a8)*b1,7)
b3=D.b.I((j.b*i+h.b*g+f.b*e+d.b*a0)*b0+(a1.b*a2+a3.b*a4+a5.b*a6+a7.b*a8)*b1,7)
b4=D.b.I((j.c*i+h.c*g+f.c*e+d.c*a0)*b0+(a1.c*a2+a3.c*a4+a5.c*a6+a7.c*a8)*b1,7)
b1=b6.a
if(b1!=null)b1.dK(m+u,n,b2,b3,b4)
t=t>>>2;++r}}}return b6},
GV(b4,b5,b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=A.dx(a4,a4,B.y,0,B.aa,b5,a4,0,4,a4,B.y,b4,!1),a6=b4/4|0,a7=a6-1,a8=J.i2(D.k.gaj(b6),0,null),a9=new A.jH(a8),b0=new A.jH(J.i2(D.k.gaj(b6),0,null)),b1=new A.jH(J.i2(D.k.gaj(b6),0,null)),b2=new A.jH(J.i2(D.k.gaj(b6),0,null)),b3=new A.jH(J.i2(D.k.gaj(b6),0,null))
for(x=0,w=0;x<a6;++x,w+=4)for(v=0,u=0;v<a6;++v,u+=4){a9.b=A.ne(v,x)<<1>>>0
a9.mh(0)
t=a8[a9.b]
s=a9.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&a7)>>>0
o=(p+1&a7)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&a7)>>>0
k=(l+1&a7)>>>0
b0.b=A.ne(l,p)<<1>>>0
b0.mh(0)
b1.b=A.ne(k,p)<<1>>>0
b1.mh(0)
b2.b=A.ne(l,o)<<1>>>0
b2.mh(0)
b3.b=A.ne(k,o)<<1>>>0
b3.mh(0)
j=b0.zd()
i=B.bi[r][0]
h=b1.zd()
g=B.bi[r][1]
g=new A.fS(j.a*i,j.b*i,j.c*i,j.d*i).a0(0,new A.fS(h.a*g,h.b*g,h.c*g,h.d*g))
h=b2.zd()
i=B.bi[r][2]
i=g.a0(0,new A.fS(h.a*i,h.b*i,h.c*i,h.d*i))
h=b3.zd()
g=B.bi[r][3]
f=i.a0(0,new A.fS(h.a*g,h.b*g,h.c*g,h.d*g))
g=b0.ze()
h=B.bi[r][0]
i=b1.ze()
j=B.bi[r][1]
j=new A.fS(g.a*h,g.b*h,g.c*h,g.d*h).a0(0,new A.fS(i.a*j,i.b*j,i.c*j,i.d*j))
i=b2.ze()
h=B.bi[r][2]
h=j.a0(0,new A.fS(i.a*h,i.b*h,i.c*h,i.d*h))
i=b3.ze()
j=B.bi[r][3]
e=h.a0(0,new A.fS(i.a*j,i.b*j,i.c*j,i.d*j))
d=B.wj[s+t&3]
j=d[0]
i=d[1]
a0=D.b.I(f.a*j+e.a*i,7)
a1=D.b.I(f.b*j+e.b*i,7)
a2=D.b.I(f.c*j+e.c*i,7)
a3=D.b.I(f.d*d[2]+e.d*d[3],7)
i=a5.a
if(i!=null)i.f4(m+u,n,a0,a1,a2,a3)
t=t>>>2;++r}}}return a5}}
A.YW.prototype={
fz(d,e){var x,w=this
if(e.c-e.d<18)return
w.a=e.bj()
w.b=e.bj()
x=e.bj()
w.c=x<12?B.ZA[x]:B.kW
e.O()
w.e=e.O()
w.f=e.bj()
e.O()
e.O()
w.x=e.O()
w.y=e.O()
w.z=e.bj()
w.Q=e.bj()},
a0D(){var x=this,w=x.z
if(w!==8&&w!==16&&w!==24&&w!==32)return!1
w=x.c
if(w===B.du||w===B.dv){if(x.e>256||x.b!==1)return!1
w=x.f
if(w!==16&&w!==24&&w!==32)return!1}else if(x.b===1)return!1
return!0},
gbO(d){return this.x},
gbz(d){return this.y}}
A.hS.prototype={
N(){return"TgaImageType."+this.b}}
A.avE.prototype={
je(d,e,f){if(this.fF(e)==null)return null
return this.eI(0)},
fF(d){var x,w,v,u,t=this
t.a=new A.YW(B.kW)
x=A.ba(d,!1,null,0)
t.b=x
w=x.ei(18)
t.a.fz(0,w)
x=t.a
if(!x.a0D())return null
v=t.b
v.d+=x.a
u=x.c
if(u===B.du||u===B.dv)x.as=v.ei(x.e*D.b.I(x.f,3)).da()
x=t.a
x.ax=t.b.d
return x},
eI(d){var x=this,w=x.a
if(w==null)return null
w=w.c
if(w===B.JB)return x.Rl()
else if(w===B.JA||w===B.dv)return x.acU()
else if(w===B.du)return x.Rl()
return null},
Rh(d,e){var x,w,v,u,t,s,r,q=this,p=A.ba(d,!1,null,0),o=q.a.f
if(o===16){o=q.b
o===$&&C.a()
x=o.O()
w=x>>>7&248
v=x>>>2&248
u=(x&31)<<3
t=(x&32768)!==0?0:255
for(s=0;s<q.a.e;++s){e.m1(s,w)
e.m0(s,v)
e.m_(s,u)
e.lZ(s,t)}}else{r=o===32
for(s=0;s<q.a.e;++s){u=J.k(p.a,p.d++)
v=J.k(p.a,p.d++)
w=J.k(p.a,p.d++)
t=r?J.k(p.a,p.d++):255
e.m1(s,w)
e.m0(s,v)
e.m_(s,u)
e.lZ(s,t)}}},
acU(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=h.z,f=g===16,e=f||g===32,d=h.x,a0=h.y,a1=e?4:3
h=h.c
x=A.dx(i,i,B.y,0,B.aa,a0,i,0,a1,i,B.y,d,h===B.du||h===B.dv)
h=x.a
if((h==null?i:h.gcn())!=null){h=j.a.as
h.toString
d=x.a
d=d==null?i:d.gcn()
d.toString
j.Rh(h,d)}w=x.gbO(0)
v=x.gbz(0)-1
h=g===8
u=0
while(!0){d=j.b
d===$&&C.a()
a0=d.d
if(!(a0<d.c&&v>=0))break
a1=d.a
d.d=a0+1
t=J.k(a1,a0)
s=(t&127)+1
r=0
if((t&128)!==0)if(h){d=j.b
q=J.k(d.a,d.d++)
for(p=0;p<s;++p){o=u+1
d=x.a
if(d!=null)d.hF(u,v,q)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}}else{d=j.b
if(f){n=d.O()
q=n>>>7&248
m=n>>>2&248
l=(n&31)<<3
k=(n&32768)!==0?0:255
for(p=0;p<s;++p){o=u+1
d=x.a
if(d!=null)d.f4(u,v,q,m,l,k)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}}else{l=J.k(d.a,d.d++)
d=j.b
m=J.k(d.a,d.d++)
d=j.b
q=J.k(d.a,d.d++)
if(e){d=j.b
k=J.k(d.a,d.d++)}else k=255
for(p=0;p<s;++p){o=u+1
d=x.a
if(d!=null)d.f4(u,v,q,m,l,k)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}}}else if(h)for(p=0;p<s;++p){d=j.b
q=J.k(d.a,d.d++)
o=u+1
d=x.a
if(d!=null)d.hF(u,v,q)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}else if(f)for(p=0;p<s;++p){n=j.b.O()
k=(n&32768)!==0?0:255
o=u+1
d=x.a
if(d!=null)d.f4(u,v,n>>>7&248,n>>>2&248,(n&31)<<3,k)
d=j.b
if(d.d>=d.c){u=o
break}if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}else for(p=0;p<s;++p){d=j.b
l=J.k(d.a,d.d++)
d=j.b
m=J.k(d.a,d.d++)
d=j.b
q=J.k(d.a,d.d++)
if(e){d=j.b
k=J.k(d.a,d.d++)}else k=255
o=u+1
d=x.a
if(d!=null)d.f4(u,v,q,m,l,k)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}if(u>=w){--v
if(v<0)break
u=0}}return x},
Rl(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.b
g===$&&C.a()
x=i.a
g.d=x.ax
w=x.z
g=w===16
v=!0
if(!g)if(w!==32){u=x.c
if(u===B.du||u===B.dv){u=x.f
u=u===16||u===32}else u=!1
v=u}u=x.x
t=x.y
s=v?4:3
x=x.c
r=A.dx(h,h,B.y,0,B.aa,t,h,0,s,h,B.y,u,x===B.du||x===B.dv)
x=i.a
u=x.c
if(u===B.du||u===B.dv){x=x.as
x.toString
u=r.a
u=u==null?h:u.gcn()
u.toString
i.Rh(x,u)}if(w===8)for(q=r.gbz(0)-1;q>=0;--q){p=0
while(!0){g=r.a
g=g==null?h:g.a
if(!(p<(g==null?0:g)))break
g=i.b
o=J.k(g.a,g.d++)
g=r.a
if(g!=null)g.hF(p,q,o);++p}}else if(g)for(q=r.gbz(0)-1;q>=0;--q){p=0
while(!0){g=r.a
g=g==null?h:g.a
if(!(p<(g==null?0:g)))break
n=i.b.O()
m=(n&32768)!==0?0:255
g=r.a
if(g!=null)g.f4(p,q,n>>>7&248,n>>>2&248,(n&31)<<3,m);++p}}else for(q=r.gbz(0)-1;q>=0;--q){p=0
while(!0){g=r.a
g=g==null?h:g.a
if(!(p<(g==null?0:g)))break
g=i.b
l=J.k(g.a,g.d++)
g=i.b
k=J.k(g.a,g.d++)
g=i.b
j=J.k(g.a,g.d++)
if(v){g=i.b
m=J.k(g.a,g.d++)}else m=255
g=r.a
if(g!=null)g.f4(p,q,j,k,l,m);++p}}return r}}
A.avM.prototype={
eo(d){var x,w,v,u,t=this
if(d===0)return 0
if(t.c===0){t.c=8
t.b=t.a.bj()}for(x=t.a,w=0;v=t.c,d>v;){w=D.b.cA(w,v)+(t.b&B.hb[v])
d-=v
t.c=8
t.b=J.k(x.a,x.d++)}if(d>0){if(v===0){t.c=8
t.b=x.bj()}x=D.b.cA(w,d)
v=t.b
u=t.c-d
w=x+(D.b.jD(v,u)&B.hb[d])
t.c=u}return w}}
A.YZ.prototype={
j(d){var x=this,w=x.a,v=$.aKw().h(0,w)
if(v!=null)return v.a+": "+x.b.j(0)+" "+x.c
return"<"+w+">: "+x.b.j(0)+" "+x.c},
jq(d){var x,w,v,u=this,t=u.e
if(t!=null)return t
t=u.f
t.d=u.d
x=u.c
w=u.b
v=t.ei(x*(w!==B.q?B.n4[w.a]:0))
switch(w.a){case 1:return u.e=new A.mL(new Uint8Array(C.bn(v.ei(x).da())))
case 2:return u.e=new A.rR(x===0?"":v.ep(x-1))
case 7:return u.e=new A.mL(new Uint8Array(C.bn(v.ei(x).da())))
case 3:return u.e=A.aRr(v,x)
case 4:return u.e=A.aRm(v,x)
case 5:return u.e=A.aRn(v,x)
case 11:return u.e=A.aRs(v,x)
case 12:return u.e=A.aRl(v,x)
case 6:return u.e=new A.oD(new Int8Array(C.bn(J.aKD(D.k.gaj(v.da()),0,x))))
case 8:return u.e=A.aRq(v,x)
case 9:return u.e=A.aRo(v,x)
case 10:return u.e=A.aRp(v,x)
case 13:case 0:return null}}}
A.avO.prototype={
atO(d,e,f,g){var x,w,v,u=this
u.r=e
u.x=u.w=0
x=D.b.bV(u.a+7,8)
for(w=0,v=0;v<g;++v){u.GT(d,w,f)
w+=x}},
GT(d,e,f){var x,w,v,u,t,s,r,q,p=this
p.d=0
for(x=p.a,w=!0;f<x;){for(;w;){v=p.ot(10)
u=B.wJ[v]
t=D.b.I(u,1)&15
if(t===12){u=B.jF[(v<<2&12|p.j5(2))>>>0]
s=D.b.I(u,1)
f+=D.b.I(u,4)&4095
p.fS(4-(s&7))}else if(t===0)throw C.e(A.aI("TIFFFaxDecoder0"))
else if(t===15)throw C.e(A.aI("TIFFFaxDecoder1"))
else{f+=D.b.I(u,5)&2047
p.fS(10-t)
if((u&1)===0){p.f[p.d++]=f
w=!1}}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}for(;!w;){u=B.t1[p.j5(4)]
r=u>>>5&2047
q=!0
if(r===100){u=B.ui[p.ot(9)]
t=D.b.I(u,1)&15
r=D.b.I(u,5)&2047
if(t===12){p.fS(5)
u=B.jF[p.j5(4)]
s=D.b.I(u,1)
r=D.b.I(u,4)&4095
p.jN(d,e,f,r)
f+=r
p.fS(4-(s&7))}else if(t===15)throw C.e(A.aI("TIFFFaxDecoder2"))
else{p.jN(d,e,f,r)
f+=r
p.fS(9-t)
if((u&1)===0){p.f[p.d++]=f
w=q}}}else{if(r===200){u=B.rX[p.j5(2)]
r=u>>>5&2047
p.jN(d,e,f,r)
f+=r
p.fS(2-(u>>>1&15))
p.f[p.d++]=f}else{p.jN(d,e,f,r)
f+=r
p.fS(4-(u>>>1&15))
p.f[p.d++]=f}w=q}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}}p.f[p.d++]=f},
atP(d,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.r=a0
e.z=3
e.x=e.w=0
x=e.a
w=D.b.bV(x+7,8)
v=C.aZ(2,null,!1,y.u)
e.at=a3&1
e.as=a3>>>2&1
if(e.UO()!==1)throw C.e(A.aI("TIFFFaxDecoder3"))
e.GT(d,0,a1)
for(u=w,t=1;t<a2;++t){if(e.UO()===0){s=e.e
e.e=e.f
e.f=s
e.y=0
r=a1
q=-1
p=!0
o=0
while(!0){r.toString
if(!(r<x))break
e.Sp(q,p,v)
n=v[0]
m=v[1]
l=B.wv[e.j5(7)]&255
k=l>>>3&15
j=l&7
if(k===0){if(!p){m.toString
e.jN(d,u,r,m-r)}e.fS(7-j)
r=m
q=r}else if(k===1){e.fS(7-j)
i=o+1
h=i+1
if(p){r+=e.Al()
e.f[o]=r
g=e.Ak()
e.jN(d,u,r,g)
r+=g
e.f[i]=r}else{g=e.Ak()
e.jN(d,u,r,g)
r+=g
e.f[o]=r
r+=e.Al()
e.f[i]=r}o=h
q=r}else{if(k<=8){n.toString
f=n+(k-5)
i=o+1
e.f[o]=f
p=!p
if(p)e.jN(d,u,r,f-r)
e.fS(7-j)}else throw C.e(A.aI("TIFFFaxDecoder4"))
r=f
o=i
q=r}}e.f[o]=r
e.d=o+1}else e.GT(d,u,a1)
u+=w}},
atT(a3,a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.r=a4
a2.z=4
a2.x=a2.w=0
x=a2.a
w=D.b.bV(x+7,8)
v=C.aZ(2,null,!1,y.u)
u=a2.f
a2.d=0
a2.d=1
u[0]=x
a2.d=2
u[1]=x
for(t=0,s=0;s<a6;++s){r=a2.e
a2.e=a2.f
a2.f=r
a2.y=0
q=a5
p=-1
o=!0
n=0
while(!0){q.toString
if(!(q<x))break
a2.Sp(p,o,v)
m=v[0]
l=v[1]
k=B.wv[a2.j5(7)]&255
j=k>>>3&15
i=k&7
if(j===0){if(!o){l.toString
a2.jN(a3,t,q,l-q)}a2.fS(7-i)
q=l
p=q}else if(j===1){a2.fS(7-i)
h=n+1
g=h+1
if(o){q+=a2.Al()
r[n]=q
f=a2.Ak()
a2.jN(a3,t,q,f)
q+=f
r[h]=q}else{f=a2.Ak()
a2.jN(a3,t,q,f)
q+=f
r[n]=q
q+=a2.Al()
r[h]=q}n=g
p=q}else if(j<=8){m.toString
e=m+(j-5)
h=n+1
r[n]=e
o=!o
if(o)a2.jN(a3,t,q,e-q)
a2.fS(7-i)
q=e
n=h
p=q}else if(j===11){if(a2.j5(3)!==7)throw C.e(A.aI("TIFFFaxDecoder5"))
for(d=0,a0=!1;!a0;o=a1){for(;a2.j5(1)!==1;)++d
if(d>5){d-=6
if(!o&&d>0){h=n+1
r[n]=q
n=h}q+=d
if(d>0)o=!0
a1=a2.j5(1)===0
if(a1){if(!o){h=n+1
r[n]=q
n=h}}else if(o){h=n+1
r[n]=q
n=h}o=a1
a0=!0}a1=d===5
if(a1){if(!o){h=n+1
r[n]=q
n=h}q+=d}else{q+=d
h=n+1
r[n]=q
a2.jN(a3,t,q,1);++q
n=h}}}else throw C.e(A.aI("TIFFFaxDecoder5 "+j))}r[n]=q
a2.d=n+1
t+=w}},
Al(){var x,w,v,u,t,s,r=this
for(x=0,w=!0;w;){v=r.ot(10)
u=B.wJ[v]
t=D.b.I(u,1)&15
if(t===12){u=B.jF[(v<<2&12|r.j5(2))>>>0]
s=D.b.I(u,1)
x+=D.b.I(u,4)&4095
r.fS(4-(s&7))}else if(t===0)throw C.e(A.aI("TIFFFaxDecoder0"))
else if(t===15)throw C.e(A.aI("TIFFFaxDecoder1"))
else{x+=D.b.I(u,5)&2047
r.fS(10-t)
if((u&1)===0)w=!1}}return x},
Ak(){var x,w,v,u,t,s,r=this
for(x=0,w=!1;!w;){v=B.t1[r.j5(4)]
u=v>>>5&2047
if(u===100){v=B.ui[r.ot(9)]
t=D.b.I(v,1)&15
s=D.b.I(v,5)
if(t===12){r.fS(5)
v=B.jF[r.j5(4)]
s=D.b.I(v,1)
x+=D.b.I(v,4)&4095
r.fS(4-(s&7))}else if(t===15)throw C.e(A.aI("TIFFFaxDecoder2"))
else{x+=s&2047
r.fS(9-t)
if((v&1)===0)w=!0}}else{if(u===200){v=B.rX[r.j5(2)]
x+=v>>>5&2047
r.fS(2-(v>>>1&15))}else{x+=u
r.fS(4-(v>>>1&15))}w=!0}}return x},
UO(){var x,w,v=this,u="TIFFFaxDecoder8",t=v.as
if(t===0){if(v.ot(12)!==1)throw C.e(A.aI("TIFFFaxDecoder6"))}else if(t===1){t=v.w
t.toString
x=8-t
if(v.ot(x)!==0)throw C.e(A.aI(u))
if(x<4)if(v.ot(8)!==0)throw C.e(A.aI(u))
for(;w=v.ot(8),w!==1;)if(w!==0)throw C.e(A.aI(u))}if(v.at===0)return 1
else return v.j5(1)},
Sp(d,e,f){var x,w=this,v=w.e,u=w.d,t=w.y,s=t>0?t-1:0
s=e?(s&4294967294)>>>0:(s|1)>>>0
for(x=s;x<u;x+=2){t=v[x]
t.toString
d.toString
if(t>d){w.y=x
f[0]=t
break}}t=x+1
if(t<u)f[1]=v[t]},
jN(d,e,f,g){var x,w,v,u,t,s=8*e+f,r=s+g,q=D.b.I(s,3),p=s&7
if(p>0){x=D.b.cA(1,7-p)
w=J.k(d.a,d.d+q)
while(!0){if(!(x>0&&s<r))break
w=(w|x)>>>0
x=x>>>1;++s}d.l(0,q,w)}q=D.b.I(s,3)
for(v=r-7;s<v;q=u){u=q+1
J.b7(d.a,d.d+q,255)
s+=8}for(;s<r;){q=D.b.I(s,3)
v=J.k(d.a,d.d+q)
t=D.b.cA(1,7-(s&7))
J.b7(d.a,d.d+q,(v|t)>>>0);++s}},
ot(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.r
j===$&&C.a()
x=j.d
w=j.c-x-1
v=k.x
u=k.c
t=0
s=0
if(u===1){v.toString
r=J.k(j.a,x+v)
if(!(v===w)){j=v+1
x=k.r
u=x.a
x=x.d
if(j===w)t=J.k(u,x+j)
else{t=J.k(u,x+j)
j=k.r
s=J.k(j.a,j.d+(v+2))}}}else if(u===2){v.toString
r=B.f4[J.k(j.a,x+v)&255]
if(!(v===w)){j=v+1
x=k.r
u=x.a
x=x.d
if(j===w)t=B.f4[J.k(u,x+j)&255]
else{t=B.f4[J.k(u,x+j)&255]
j=k.r
s=B.f4[J.k(j.a,j.d+(v+2))&255]}}}else throw C.e(A.aI("TIFFFaxDecoder7"))
j=k.w
j.toString
q=8-j
p=d-q
if(p>8){o=p-8
n=8}else{n=p
o=0}j=k.x
j.toString
j=k.x=j+1
m=D.b.cA(r&B.hb[q],p)
l=D.b.d5(t&B.nl[n],8-n)
if(o!==0){l=D.b.cA(l,o)|D.b.d5(s&B.nl[o],8-o)
k.x=j+1
k.w=o}else if(n===8){k.w=0
k.x=j+1}else k.w=n
return(m|l)>>>0},
j5(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.r
m===$&&C.a()
x=m.d
w=m.c-x-1
v=n.x
u=n.c
t=0
if(u===1){v.toString
s=J.k(m.a,x+v)
if(!(v===w)){m=n.r
t=J.k(m.a,m.d+(v+1))}}else if(u===2){v.toString
s=B.f4[J.k(m.a,x+v)&255]
if(!(v===w)){m=n.r
t=B.f4[J.k(m.a,m.d+(v+1))&255]}}else throw C.e(A.aI("TIFFFaxDecoder7"))
m=n.w
m.toString
r=8-m
q=d-r
p=r-d
if(p>=0){o=D.b.d5(s&B.hb[r],p)
m+=d
n.w=m
if(m===8){n.w=0
m=n.x
m.toString
n.x=m+1}}else{o=(D.b.cA(s&B.hb[r],-p)|D.b.d5(t&B.nl[q],8-q))>>>0
m=n.x
m.toString
n.x=m+1
n.w=q}return o},
fS(d){var x,w=this,v=w.w
v.toString
x=v-d
if(x<0){v=w.x
v.toString
w.x=v-1
w.w=8+x}else w.w=x}}
A.Z_.prototype={
a9M(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.aO(d,h,0),f=d.O()
for(x=i.a,w=0;w<f;++w){v=d.O()
u=d.O()
t=d.J()
if(u>13){d.d+=4
continue}s=B.vx[u]
if(t*B.n4[u]>4)r=d.J()
else{r=d.d
d.d=r+4}q=new A.YZ(v,s,t,r,g)
x.l(0,v,q)
if(v===256){p=q.jq(0)
p=p==null?h:p.C(0)
i.b=p==null?0:p}else if(v===257){p=q.jq(0)
p=p==null?h:p.C(0)
i.c=p==null?0:p}else if(v===262){o=q.jq(0)
n=o==null?h:o.C(0)
if(n==null)n=17
if(n<17)i.d=B.XG[n]
else i.d=B.oT}else if(v===259){p=q.jq(0)
p=p==null?h:p.C(0)
i.e=p==null?0:p}else if(v===258){p=q.jq(0)
p=p==null?h:p.C(0)
i.f=p==null?0:p}else if(v===277){p=q.jq(0)
p=p==null?h:p.C(0)
i.r=p==null?0:p}else if(v===317){p=q.jq(0)
p=p==null?h:p.C(0)
i.Q=p==null?0:p}else if(v===339){p=q.jq(0)
o=p==null?h:p.C(0)
i.x=B.YE[o==null?0:o]}else if(v===320){o=q.jq(0)
if(o!=null){p=J.b_Y(D.k.gaj(o.l8()))
i.id=p
i.k1=0
p=p.length/3|0
i.k2=p
i.k3=p*2}}}p=i.id
m=p!=null
if(m&&i.d===B.oU)i.r=1
if(i.b===0||i.c===0)return
if(m&&i.f===8){l=p.length
for(m=p.$flags|0,w=0;w<l;++w){k=p[w]
m&2&&C.f(p)
p[w]=k>>>8}}if(i.d===B.oS)i.z=!0
i.w=i.r
if(x.aq(0,324)){i.ay=i.rZ(322)
i.ch=i.rZ(323)
i.CW=i.Be(324)
i.cx=i.Be(325)}else{i.ay=i.Bd(322,i.b)
if(!x.aq(0,278))i.ch=i.Bd(323,i.c)
else{j=i.rZ(278)
if(j===-1)i.ch=i.c
else i.ch=j}i.CW=i.Be(273)
i.cx=i.Be(279)}p=i.b
m=i.ay
i.cy=D.b.e1(p+m-1,m)
m=i.c
p=i.ch
i.db=D.b.e1(m+p-1,p)
i.dy=i.Bd(266,1)
i.fr=i.rZ(292)
i.fx=i.rZ(293)
i.rZ(338)
switch(i.d.a){case 0:case 1:x=i.f
if(x===1&&i.r===1)i.y=B.oR
else if(x===4&&i.r===1)i.y=B.alx
else if(D.b.b3(x,8)===0){x=i.r
if(x===1)i.y=B.aly
else if(x===2)i.y=B.alz
else i.y=B.hX}break
case 2:if(D.b.b3(i.f,8)===0){x=i.r
if(x===3)i.y=B.JD
else if(x===4)i.y=B.alB
else i.y=B.hX}break
case 3:x=!1
if(i.r===1)if(i.id!=null){x=i.f
x=x===4||x===8||x===16}if(x)i.y=B.alA
break
case 4:if(i.f===1&&i.r===1)i.y=B.oR
break
case 6:if(i.e===7&&i.f===8&&i.r===3)i.y=B.JD
else{if(x.aq(0,530)){o=x.h(0,530).jq(0)
i.as=o.C(0)
x=i.at=o.dV(0,1)}else x=i.at=i.as=2
p=i.as
p===$&&C.a()
if(p*x===1)i.y=B.hX
else if(i.f===8&&i.r===3)i.y=B.alC}break
case 5:if(D.b.b3(i.f,8)===0)i.y=B.hX
x=i.r
if(x===4)i.w=3
else if(x===5)i.w=4
break
default:if(D.b.b3(i.f,8)===0)i.y=B.hX
break}},
fa(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.x,d=e===B.hW,a0=e===B.Y
e=g.f
if(e===1)x=B.ch
else if(e===2)x=B.cG
else{if(e===4)e=B.cH
else if(d&&e===16)e=B.db
else if(d&&e===32)e=B.dS
else if(d&&e===64)e=B.eN
else if(a0&&e===8)e=B.eO
else if(a0&&e===16)e=B.eP
else if(a0&&e===32)e=B.eQ
else if(e===16)e=B.b_
else e=e===32?B.dT:B.y
x=e}w=g.id!=null&&g.d===B.oU
v=w?3:g.w
e=g.b
u=A.dx(f,f,x,0,B.aa,g.c,f,0,v,f,x,e,w)
if(w){e=u.a
e=e==null?f:e.gcn()
e.toString
t=g.id
s=t.length
r=s/3|0
q=g.k1
q===$&&C.a()
p=g.k2
p===$&&C.a()
o=g.k3
o===$&&C.a()
for(n=o,m=p,l=q,k=0;k<r;++k,++l,++m,++n){if(n>=s)break
e.kh(k,t[l],t[m],t[n])}}j=0
i=0
while(!0){e=g.db
e===$&&C.a()
if(!(j<e))break
h=0
while(!0){e=g.cy
e===$&&C.a()
if(!(h<e))break
g.acV(a2,u,h,j);++h;++i}++j}return u},
acV(b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null
if(a8.y===B.oR){a8.acF(b0,b1,b2,b3)
return}u=a8.cy
u===$&&C.a()
t=b3*u+b2
b0.d=a8.CW[t]
u=a8.ay
s=b2*u
r=a8.ch
q=b3*r
x=a8.cx[t]
p=u*r*a8.r
u=a8.f
r=u===16
if(r)p*=2
else if(u===32)p*=4
w=null
if(u===8||r||u===32||u===64){u=a8.e
if(u===1)w=b0
else if(u===5){w=A.ba(new Uint8Array(p),!1,a9,0)
v=A.aS6()
try{J.b01(v,A.aO(b0,x,0),w.a)}catch(o){}if(a8.Q===2)for(n=0;n<a8.ch;++n){m=a8.r
u=a8.ay
l=m*(n*u+1)
k=u*m
for(;m<k;++m){u=w
r=J.k(u.a,u.d+l)
j=w
i=a8.r
i=J.k(j.a,j.d+(l-i))
J.b7(u.a,u.d+l,r+i);++l}}}else if(u===32773){w=A.ba(new Uint8Array(p),!1,a9,0)
a8.Rk(b0,p,w.a)}else if(u===32946)w=A.ba(B.dI.ql(b0.yT(0,0,x)),!1,a9,0)
else if(u===8)w=A.ba(B.dI.ql(b0.yT(0,0,x)),!1,a9,0)
else if(u===6||u===7){a8.ajy(new A.x2().fa(0,y.D.a(b0.yT(0,0,x))),b1,s,q,a8.ay,a8.ch)
return}else throw C.e(A.aI("Unsupported Compression Type: "+u))
h=C.b([0,0,0],y.t)
for(g=q,f=0;f<a8.ch;++f,++g)for(e=s,d=0;d<a8.ay;++d,++e){u=w
if(u.d>=u.c||e>=a8.b||g>=a8.c)break
u=a8.r
if(u===1){u=a8.x
if(u===B.hW){u=a8.f
if(u===32){u=w.J()
r=$.d4()
r.$flags&2&&C.f(r)
r[0]=u
a0=$.qG()[0]}else if(u===64)a0=w.EI()
else if(u===16){u=w.O()
r=$.dn
a0=(r!=null?r:A.dN())[u]}else a0=0
if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.hF(e,g,a0)}}else{r=a8.f
if(r===8)if(u===B.Y){u=w
u=J.k(u.a,u.d++)
r=$.hq()
r.$flags&2&&C.f(r)
r[0]=u
a0=$.i1()[0]}else{u=w
a0=J.k(u.a,u.d++)}else if(r===16)if(u===B.Y){u=w.O()
r=$.hp()
r.$flags&2&&C.f(r)
r[0]=u
a0=$.i0()[0]}else a0=w.O()
else if(r===32)if(u===B.Y){u=w.J()
r=$.d4()
r.$flags&2&&C.f(r)
r[0]=u
a0=$.eE()[0]}else a0=w.J()
else a0=0
if(a8.d===B.oS){u=b1.a
a1=u==null?a9:u.gb1()
a0=(a1==null?0:a1)-a0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.hF(e,g,a0)}}}else if(u===2){u=a8.f
if(u===8){if(a8.x===B.Y){u=w
u=J.k(u.a,u.d++)
r=$.hq()
r.$flags&2&&C.f(r)
r[0]=u
a2=$.i1()[0]}else{u=w
a2=J.k(u.a,u.d++)}if(a8.x===B.Y){u=w
u=J.k(u.a,u.d++)
r=$.hq()
r.$flags&2&&C.f(r)
r[0]=u
a3=$.i1()[0]}else{u=w
a3=J.k(u.a,u.d++)}}else if(u===16){if(a8.x===B.Y){u=w.O()
r=$.hp()
r.$flags&2&&C.f(r)
r[0]=u
a2=$.i0()[0]}else a2=w.O()
if(a8.x===B.Y){u=w.O()
r=$.hp()
r.$flags&2&&C.f(r)
r[0]=u
a3=$.i0()[0]}else a3=w.O()}else if(u===32){if(a8.x===B.Y){u=w.J()
r=$.d4()
r.$flags&2&&C.f(r)
r[0]=u
a2=$.eE()[0]}else a2=w.J()
if(a8.x===B.Y){u=w.J()
r=$.d4()
r.$flags&2&&C.f(r)
r[0]=u
a3=$.eE()[0]}else a3=w.J()}else{a2=0
a3=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.dK(e,g,a2,a3,0)}}else if(u===3){u=a8.x
if(u===B.hW){u=a8.f
if(u===32){u=w.J()
r=$.d4()
r.$flags&2&&C.f(r)
r[0]=u
u=$.qG()
a4=u[0]
r[0]=w.J()
a5=u[0]
r[0]=w.J()
a6=u[0]}else{a5=0
a6=0
if(u===64)a4=w.EI()
else if(u===16){u=w.O()
r=$.dn
a4=(r!=null?r:A.dN())[u]
u=w.O()
r=$.dn
a5=(r!=null?r:A.dN())[u]
u=w.O()
r=$.dn
a6=(r!=null?r:A.dN())[u]}else a4=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.dK(e,g,a4,a5,a6)}}else{r=a8.f
if(r===8){if(u===B.Y){u=w
u=J.k(u.a,u.d++)
r=$.hq()
r.$flags&2&&C.f(r)
r[0]=u
a4=$.i1()[0]}else{u=w
a4=J.k(u.a,u.d++)}if(a8.x===B.Y){u=w
u=J.k(u.a,u.d++)
r=$.hq()
r.$flags&2&&C.f(r)
r[0]=u
a5=$.i1()[0]}else{u=w
a5=J.k(u.a,u.d++)}if(a8.x===B.Y){u=w
u=J.k(u.a,u.d++)
r=$.hq()
r.$flags&2&&C.f(r)
r[0]=u
a6=$.i1()[0]}else{u=w
a6=J.k(u.a,u.d++)}}else if(r===16){if(u===B.Y){u=w.O()
r=$.hp()
r.$flags&2&&C.f(r)
r[0]=u
a4=$.i0()[0]}else a4=w.O()
if(a8.x===B.Y){u=w.O()
r=$.hp()
r.$flags&2&&C.f(r)
r[0]=u
a5=$.i0()[0]}else a5=w.O()
if(a8.x===B.Y){u=w.O()
r=$.hp()
r.$flags&2&&C.f(r)
r[0]=u
a6=$.i0()[0]}else a6=w.O()}else if(r===32){if(u===B.Y){u=w.J()
r=$.d4()
r.$flags&2&&C.f(r)
r[0]=u
a4=$.eE()[0]}else a4=w.J()
if(a8.x===B.Y){u=w.J()
r=$.d4()
r.$flags&2&&C.f(r)
r[0]=u
a5=$.eE()[0]}else a5=w.J()
if(a8.x===B.Y){u=w.J()
r=$.d4()
r.$flags&2&&C.f(r)
r[0]=u
a6=$.eE()[0]}else a6=w.J()}else{a4=0
a5=0
a6=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.dK(e,g,a4,a5,a6)}}}else if(u>=4)if(a8.x===B.hW){u=a8.f
if(u===32){u=w.J()
r=$.d4()
r.$flags&2&&C.f(r)
r[0]=u
u=$.qG()
a4=u[0]
r[0]=w.J()
a5=u[0]
r[0]=w.J()
a6=u[0]
r[0]=w.J()
a7=u[0]}else{a5=0
a6=0
a7=0
if(u===64)a4=w.EI()
else if(u===16){u=w.O()
r=$.dn
a4=(r!=null?r:A.dN())[u]
u=w.O()
r=$.dn
a5=(r!=null?r:A.dN())[u]
u=w.O()
r=$.dn
a6=(r!=null?r:A.dN())[u]
u=w.O()
r=$.dn
a7=(r!=null?r:A.dN())[u]}else a4=0}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.f4(e,g,a4,a5,a6,a7)}}else{u=b1.a
a3=u==null?a9:u.gb1()
if(a3==null)a3=0
u=a8.f
if(u===8){if(a8.x===B.Y){u=w
u=J.k(u.a,u.d++)
r=$.hq()
r.$flags&2&&C.f(r)
r[0]=u
a4=$.i1()[0]}else{u=w
a4=J.k(u.a,u.d++)}if(a8.x===B.Y){u=w
u=J.k(u.a,u.d++)
r=$.hq()
r.$flags&2&&C.f(r)
r[0]=u
a5=$.i1()[0]}else{u=w
a5=J.k(u.a,u.d++)}if(a8.x===B.Y){u=w
u=J.k(u.a,u.d++)
r=$.hq()
r.$flags&2&&C.f(r)
r[0]=u
a6=$.i1()[0]}else{u=w
a6=J.k(u.a,u.d++)}if(a8.x===B.Y){u=w
u=J.k(u.a,u.d++)
r=$.hq()
r.$flags&2&&C.f(r)
r[0]=u
a7=$.i1()[0]}else{u=w
a7=J.k(u.a,u.d++)}if(a8.r===5)if(a8.x===B.Y){u=w
u=J.k(u.a,u.d++)
r=$.hq()
r.$flags&2&&C.f(r)
r[0]=u
a3=$.i1()[0]}else{u=w
a3=J.k(u.a,u.d++)}}else if(u===16){if(a8.x===B.Y){u=w.O()
r=$.hp()
r.$flags&2&&C.f(r)
r[0]=u
a4=$.i0()[0]}else a4=w.O()
if(a8.x===B.Y){u=w.O()
r=$.hp()
r.$flags&2&&C.f(r)
r[0]=u
a5=$.i0()[0]}else a5=w.O()
if(a8.x===B.Y){u=w.O()
r=$.hp()
r.$flags&2&&C.f(r)
r[0]=u
a6=$.i0()[0]}else a6=w.O()
if(a8.x===B.Y){u=w.O()
r=$.hp()
r.$flags&2&&C.f(r)
r[0]=u
a7=$.i0()[0]}else a7=w.O()
if(a8.r===5)if(a8.x===B.Y){u=w.O()
r=$.hp()
r.$flags&2&&C.f(r)
r[0]=u
a3=$.i0()[0]}else a3=w.O()}else if(u===32){if(a8.x===B.Y){u=w.J()
r=$.d4()
r.$flags&2&&C.f(r)
r[0]=u
a4=$.eE()[0]}else a4=w.J()
if(a8.x===B.Y){u=w.J()
r=$.d4()
r.$flags&2&&C.f(r)
r[0]=u
a5=$.eE()[0]}else a5=w.J()
if(a8.x===B.Y){u=w.J()
r=$.d4()
r.$flags&2&&C.f(r)
r[0]=u
a6=$.eE()[0]}else a6=w.J()
if(a8.x===B.Y){u=w.J()
r=$.d4()
r.$flags&2&&C.f(r)
r[0]=u
a7=$.eE()[0]}else a7=w.J()
if(a8.r===5)if(a8.x===B.Y){u=w.J()
r=$.d4()
r.$flags&2&&C.f(r)
r[0]=u
a3=$.eE()[0]}else a3=w.J()}else{a4=0
a5=0
a6=0
a7=0}if(a8.d===B.JE){A.aWA(a4,a5,a6,a7,h)
a4=h[0]
a5=h[1]
a6=h[2]
a7=a3}if(e<a8.b&&g<a8.c){u=b1.a
if(u!=null)u.f4(e,g,a4,a5,a6,a7)}}}}else throw C.e(A.aI("Unsupported bitsPerSample: "+u))},
ajy(d,e,f,g,h,i){var x,w,v,u
for(x=0;x<i;++x)for(w=x+g,v=0;v<h;++v){u=d.a
u=u==null?null:u.bY(v,x,null)
if(u==null)u=new A.cE()
e.pw(v+f,w,u)}},
acF(a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.cy
a2===$&&C.a()
w=a6*a2+a5
a3.d=a0.CW[w]
a2=a0.ay
v=a5*a2
u=a0.ch
t=a6*u
s=a0.cx[w]
x=null
r=a0.e
if(r===32773){q=D.b.b3(a2,8)===0?D.b.bV(a2,8)*u:(D.b.bV(a2,8)+1)*u
x=A.ba(new Uint8Array(a2*u),!1,a1,0)
a0.Rk(a3,q,x.a)}else if(r===5){x=A.ba(new Uint8Array(a2*u),!1,a1,0)
A.aS6().Zq(0,A.aO(a3,s,0),x.a)
if(a0.Q===2)for(p=0;p<a0.c;++p){o=a0.r
n=o*(p*a0.b+1)
for(;o<a0.b*a0.r;++o){a2=x
u=J.k(a2.a,a2.d+n)
r=x
m=a0.r
m=J.k(r.a,r.d+(n-m))
J.b7(a2.a,a2.d+n,u+m);++n}}}else if(r===2){x=A.ba(new Uint8Array(a2*u),!1,a1,0)
try{A.aMV(a0.dy,a0.ay,a0.ch).atO(x,a3,0,a0.ch)}catch(l){}}else if(r===3){x=A.ba(new Uint8Array(a2*u),!1,a1,0)
try{A.aMV(a0.dy,a0.ay,a0.ch).atP(x,a3,0,a0.ch,a0.fr)}catch(l){}}else if(r===4){x=A.ba(new Uint8Array(a2*u),!1,a1,0)
try{A.aMV(a0.dy,a0.ay,a0.ch).atT(x,a3,0,a0.ch,a0.fx)}catch(l){}}else if(r===8)x=A.ba(B.dI.ql(a3.yT(0,0,s)),!1,a1,0)
else if(r===32946)x=A.ba(B.dI.ql(a3.yT(0,0,s)),!1,a1,0)
else if(r===1)x=a3
else throw C.e(A.aI("Unsupported Compression Type: "+r))
k=new A.avM(x)
j=a4.gb1()
a2=a0.z
i=a2?j:0
h=a2?0:j
for(g=t,f=0;f<a0.ch;++f,++g){for(e=v,d=0;d<a0.ay;++d,++e){a2=a4.a
u=a2==null
r=u?a1:a2.b
if(g<(r==null?0:r)){a2=u?a1:a2.a
a2=e>=(a2==null?0:a2)}else a2=!0
if(a2)break
a2=k.eo(1)
u=a4.a
if(a2===0){if(u!=null)u.dK(e,g,i,0,0)}else if(u!=null)u.dK(e,g,h,0,0)}k.c=0}},
Rk(d,e,f){var x,w,v,u,t,s,r,q,p,o
for(x=J.c3(f),w=0,v=0;v<e;){u=w+1
t=J.k(d.a,d.d+w)
s=$.hq()
s.$flags&2&&C.f(s)
s[0]=t
r=$.i1()[0]
if(r>=0&&r<=127)for(t=r+1,w=u,q=0;q<t;++q,v=p,w=u){p=v+1
u=w+1
x.l(f,v,J.k(d.a,d.d+w))}else{t=r<=-1&&r>=-127
w=u+1
if(t){o=J.k(d.a,d.d+u)
for(t=-r+1,q=0;q<t;++q,v=p){p=v+1
x.l(f,v,o)}}}}},
Bd(d,e){var x=this.a
if(!x.aq(0,d))return e
x=x.h(0,d).jq(0)
x=x==null?null:x.C(0)
return x==null?0:x},
rZ(d){return this.Bd(d,0)},
Be(d){var x,w=this.a
if(!w.aq(0,d))return null
x=w.h(0,d)
w=x.jq(0)
w.toString
return C.SY(x.c,w.gmZ(w),!0,y.p)}}
A.ux.prototype={
N(){return"TiffFormat."+this.b}}
A.eT.prototype={
N(){return"TiffPhotometricType."+this.b}}
A.jQ.prototype={
N(){return"TiffImageType."+this.b}}
A.avP.prototype={
gbO(d){return this.a},
gbz(d){return this.b}}
A.ajN.prototype={
Zq(d,e,f){var x,w,v,u,t,s,r=this
r.r=f
x=J.cd(f)
r.w=0
w=y.D.a(e.a)
r.e=w
r.f=w.length
r.b=e.d
if(w[0]===0&&w[1]===1)throw C.e(A.aI("Invalid LZW Data"))
r.TD()
r.d=r.c=0
v=r.Hq()
w=r.x
u=0
while(!0){if(!(v!==257&&r.w<x))break
if(v===256){r.TD()
v=r.Hq()
r.as=0
if(v===257)break
J.b7(r.r,r.w++,v)
u=v}else{t=r.Q
t.toString
if(v<t){r.SD(v)
t=r.as
t===$&&C.a()
s=t-1
for(;s>=0;--s)J.b7(r.r,r.w++,w[s])
r.PM(u,w[r.as-1])}else{r.SD(u)
t=r.as
t===$&&C.a()
s=t-1
for(;s>=0;--s)J.b7(r.r,r.w++,w[s])
J.b7(r.r,r.w++,w[r.as-1])
r.PM(u,w[r.as-1])}u=v}v=r.Hq()}},
PM(d,e){var x,w=this,v=w.y
v===$&&C.a()
x=w.Q
x.toString
v.$flags&2&&C.f(v)
v[x]=e
v=w.z
v===$&&C.a()
v.$flags&2&&C.f(v)
v[x]=d
x=w.Q=x+1
if(x===511)w.a=10
else if(x===1023)w.a=11
else if(x===2047)w.a=12},
SD(d){var x,w,v,u,t,s,r=this
r.as=0
x=r.x
r.as=1
w=r.y
w===$&&C.a()
v=w[d]
x.$flags&2&&C.f(x)
x[0]=v
v=r.z
v===$&&C.a()
u=v[d]
for(t=1;u!==4098;t=s){s=t+1
r.as=s
x[t]=w[u]
u=v[u]}},
Hq(){var x,w,v,u,t=this,s=t.b,r=t.f
r===$&&C.a()
if(s>=r)return 257
for(;x=t.d,w=t.a,x<w;s=u){if(s>=r)return 257
w=t.c
v=t.e
v===$&&C.a()
u=s+1
t.b=u
t.c=(w<<8>>>0)+v[s]>>>0
t.d=x+8}s=x-w
t.d=s
return D.b.d5(t.c,s)&B.SY[w-9]},
TD(){var x,w,v=this
v.y=new Uint8Array(4096)
x=new Uint32Array(4096)
v.z=x
D.aJ.eW(x,0,4096,4098)
for(x=v.y,w=0;w<256;++w){x.$flags&2&&C.f(x)
x[w]=w}v.a=9
v.Q=258}}
A.avN.prototype={
fF(d){var x=this,w=A.ba(d,!1,null,0)
x.c=w
w=x.It(w)
x.a=w
if(w!=null)x.b=A.agc(A.ba(d,!1,null,0))
return x.a},
eI(d){var x,w,v=this.a
if(v==null)return null
v=v.f[d]
x=this.c
x===$&&C.a()
w=v.fa(0,x)
v=this.b
if(v!=null)w.e=v
return w},
je(d,e,f){var x,w,v,u=this,t=null,s=A.ba(e,!1,t,0)
u.c=s
s=u.a=u.It(s)
if(s==null)return t
x=s.f.length
w=u.eI(0)
if(w==null)return t
w.e=A.agc(A.ba(e,!1,t,0))
w.w=B.rm
for(v=1;v<x;++v)w.jQ(u.eI(v))
return w},
It(d){var x,w,v,u,t,s,r,q,p,o=null,n=C.b([],y.aU),m=new A.avP(n),l=d.O()
if(l!==18761&&l!==19789)return o
if(l===19789)d.e=!0
else d.e=!1
v=d.O()
m.d=v
if(v!==42)return o
u=d.J()
t=A.aO(d,o,0)
t.d=u
x=t
for(v=y.p,s=y.cV;u!==0;){w=null
try{r=new A.Z_(C.t(v,s),B.oT,B.JC,B.alD)
r.a9M(x)
w=r
q=w
if(!(q.b!==0&&q.c!==0))break}catch(p){break}n.push(w)
if(n.length===1){q=n[0]
m.a=q.b
m.b=q.c}u=x.J()
if(u!==0)x.d=u}return n.length!==0?m:o}}
A.awp.prototype={
xg(){var x,w=this.a,v=w.l4()
if((v&1)!==0)return!1
if((v>>>1&7)>3)return!1
if((v>>>4&1)===0)return!1
this.f.d=v>>>5
if(w.l4()!==2752925)return!1
x=this.b
x.a=w.O()
x.b=w.O()
return!0},
nw(d){var x,w,v,u,t=this,s=null
if(!t.af4())return s
x=t.b
w=x.a
t.d=A.dx(s,s,B.y,0,B.aa,x.b,s,0,4,s,B.y,w,!1)
t.aj9()
if(!t.alU())return s
w=x.w
if(w.length!==0){v=A.ba(new C.bW(w),!1,s,0)
w=t.d
w.toString
w.e=A.agc(v)}u=x.r
if(u!=null)t.d.c=new A.mJ("",B.j7,u)
return t.d},
af4(){var x,w,v,u,t=this
if(!t.xg())return!1
t.fr=A.b8D()
for(x=t.dy,w=0;w<4;++w){v=new Int32Array(2)
u=new Int32Array(2)
x[w]=new A.Zq(v,u,new Int32Array(2))}t.y=t.Q=0
x=t.b
v=x.a
t.z=v
x=x.b
t.as=x
t.at=v+15>>>4
t.ax=x+15>>>4
t.k1=0
x=t.a
v=t.f
u=v.d
u===$&&C.a()
u=A.aUu(x.en(u))
t.c=u
x.d+=v.d
u.cX(1)
t.c.cX(1)
t.am_(t.x,t.fr)
t.alT()
if(!t.alW(x))return!1
t.alY()
t.c.cX(1)
t.alX()
return!0},
am_(d,e){var x,w,v,u=this,t=u.c
t===$&&C.a()
t=t.cX(1)!==0
d.a=t
if(t){d.b=u.c.cX(1)!==0
if(u.c.cX(1)!==0){d.c=u.c.cX(1)!==0
for(t=d.d,x=0;x<4;++x){if(u.c.cX(1)!==0){w=u.c
v=w.cX(7)
w=w.cX(1)===1?-v:v}else w=0
t.$flags&2&&C.f(t)
t[x]=w}for(t=d.e,x=0;x<4;++x){if(u.c.cX(1)!==0){w=u.c
v=w.cX(6)
w=w.cX(1)===1?-v:v}else w=0
t.$flags&2&&C.f(t)
t[x]=w}}if(d.b)for(x=0;x<3;++x){t=e.a
w=u.c.cX(1)!==0?u.c.cX(8):255
t.$flags&2&&C.f(t)
t[x]=w}}else d.b=!1
return!0},
alT(){var x,w,v,u=this,t=u.w,s=u.c
s===$&&C.a()
t.a=s.cX(1)!==0
t.b=u.c.cX(6)
t.c=u.c.cX(3)
s=u.c.cX(1)!==0
t.d=s
if(s)if(u.c.cX(1)!==0){for(s=t.e,x=0;x<4;++x)if(u.c.cX(1)!==0){w=u.c
v=w.cX(6)
w=w.cX(1)===1?-v:v
s.$flags&2&&C.f(s)
s[x]=w}for(s=t.f,x=0;x<4;++x)if(u.c.cX(1)!==0){w=u.c
v=w.cX(6)
w=w.cX(1)===1?-v:v
s.$flags&2&&C.f(s)
s[x]=w}}if(t.b===0)s=0
else s=t.a?1:2
u.b6=s
return!0},
alW(d){var x,w,v,u,t,s,r,q=d.c-d.d,p=this.c
p===$&&C.a()
p=D.b.c_(1,p.cX(2))
this.cy=p
x=p-1
w=x*3
if(q<w)return!1
for(p=this.db,v=0,u=0;u<x;++u,w=s){t=d.zK(3,v)
s=w+((J.k(t.a,t.d)|J.k(t.a,t.d+1)<<8|J.k(t.a,t.d+2)<<16)>>>0)
if(s>q)s=q
r=new A.Hl(d.pB(s-w,w))
r.b=254
r.c=0
r.d=-8
p[u]=r
v+=3}p[x]=A.aUu(d.pB(q-w,d.d-d.b+w))
return w<q},
alY(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.c
h===$&&C.a()
x=h.cX(7)
w=i.c.cX(1)!==0?i.c.va(4):0
v=i.c.cX(1)!==0?i.c.va(4):0
u=i.c.cX(1)!==0?i.c.va(4):0
t=i.c.cX(1)!==0?i.c.va(4):0
s=i.c.cX(1)!==0?i.c.va(4):0
r=i.x
for(h=i.dy,q=r.a,p=!r.c,o=r.d,n=0;n<4;++n){if(q){m=o[n]
if(p)m+=x}else{if(n>0){h[n]=h[0]
continue}m=x}l=h[n]
k=l.a
j=m+w
if(j<0)j=0
else if(j>127)j=127
j=B.n5[j]
k.$flags&2&&C.f(k)
k[0]=j
if(m<0)j=0
else j=m>127?127:m
k[1]=B.n7[j]
j=l.b
k=m+v
if(k<0)k=0
else if(k>127)k=127
k=B.n5[k]
j.$flags&2&&C.f(j)
j[0]=k*2
k=m+u
if(k<0)k=0
else if(k>127)k=127
j[1]=B.n7[k]*101581>>>16
if(j[1]<8)j[1]=8
k=l.c
j=m+t
if(j<0)j=0
else if(j>117)j=117
j=B.n5[j]
k.$flags&2&&C.f(k)
k[0]=j
j=m+s
if(j<0)j=0
else if(j>127)j=127
k[1]=B.n7[j]}},
alX(){var x,w,v,u,t,s,r=this,q=r.fr
for(x=0;x<4;++x)for(w=0;w<8;++w)for(v=0;v<3;++v)for(u=0;u<11;++u){t=r.c
t===$&&C.a()
s=t.dY(B.a31[x][w][v][u])!==0?r.c.cX(8):B.SV[x][w][v][u]
t=q.b[x][w].a[v]
t.$flags&2&&C.f(t)
t[u]=s}t=r.c
t===$&&C.a()
t=t.cX(1)!==0
r.fx=t
if(t)r.fy=r.c.cX(8)},
amF(){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.b6
k.toString
if(k>0){x=l.w
for(k=x.e,w=x.f,v=l.x,u=v.e,t=0;t<4;++t){if(v.a){s=u[t]
if(!v.c){r=x.b
r.toString
s+=r}}else s=x.b
for(q=0;q<=1;++q){r=l.B
r===$&&C.a()
p=r[t][q]
r=x.d
r===$&&C.a()
if(r){s.toString
o=s+k[0]
if(q!==0)o+=w[0]}else o=s
o.toString
if(o<0)o=0
else if(o>63)o=63
if(o>0){r=x.c
r===$&&C.a()
if(r>0){n=r>4?D.b.I(o,2):D.b.I(o,1)
m=9-r
if(n>m)n=m}else n=o
if(n<1)n=1
p.b=n
p.a=2*o+n
if(o>=40)r=2
else r=o>=15?1:0
p.d=r}else p.a=0
p.c=q!==0}}}},
aj9(){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.b,j=k.at
if(j!=null)m.a1=j
x=J.f7(4,y.e6)
for(j=y.ao,w=0;w<4;++w)x[w]=C.b([new A.uC(),new A.uC()],j)
m.B=x
j=m.at
j.toString
x=J.f7(j,y.dE)
for(v=0;v<j;++v){u=new Uint8Array(16)
t=new Uint8Array(8)
x[v]=new A.Zr(u,t,new Uint8Array(8))}m.k2=x
m.ok=new Uint8Array(832)
j=m.at
j.toString
m.go=new Uint8Array(4*j)
u=m.p4=16*j
j=8*j
m.R8=j
t=m.b6
t.toString
s=B.n1[t]
r=s*u
q=(s/2|0)*j
m.p1=A.ba(new Uint8Array(16*u+r),!1,l,r)
j=m.R8
j.toString
m.p2=A.ba(new Uint8Array(8*j+q),!1,l,q)
j=m.R8
j.toString
m.p3=A.ba(new Uint8Array(8*j+q),!1,l,q)
j=k.a
m.RG=A.ba(new Uint8Array(j),!1,l,0)
p=k.a+1>>>1
m.rx=A.ba(new Uint8Array(p),!1,l,0)
m.ry=A.ba(new Uint8Array(p),!1,l,0)
k=m.b6
k.toString
o=B.n1[k]
if(k===2)m.ch=m.ay=0
else{k=D.b.bV(m.y-o,16)
m.ay=k
j=D.b.bV(m.Q-o,16)
m.ch=j
if(k<0)m.ay=0
if(j<0)m.ch=0}k=D.b.bV(m.as+15+o,16)
m.cx=k
j=D.b.bV(m.z+15+o,16)
m.CW=j
u=m.at
u.toString
if(j>u)m.CW=u
j=m.ax
j.toString
if(k>j)m.cx=j
n=u+1
x=J.f7(n,y.ai)
for(v=0;v<n;++v)x[v]=new A.Zo()
m.k3=x
k=m.at
k.toString
x=J.f7(k,y.cP)
for(v=0;v<k;++v){j=new Int16Array(384)
x[v]=new A.Zp(j,new Uint8Array(16))}m.b2=x
k=m.at
k.toString
m.k4=C.aZ(k,l,!1,y.aj)
m.amF()
A.b83()
m.e=new A.awq()
return!0},
alU(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.y2=0
x=j.id
w=j.x
v=j.db
u=0
while(!0){t=j.cx
t.toString
if(!(u<t))break
t=j.cy
t===$&&C.a()
s=v[(u&t-1)>>>0]
while(!0){u=j.y1
t=j.at
t.toString
if(!(u<t))break
t=j.k3
t===$&&C.a()
r=t[0]
q=t[1+u]
t=j.b2
t===$&&C.a()
p=t[u]
if(w.b){u=j.c
u===$&&C.a()
u=u.dY(j.fr.a[0])
t=j.c
o=j.fr
j.k1=u===0?t.dY(o.a[1]):2+t.dY(o.a[2])}u=j.fx
u===$&&C.a()
if(u){u=j.c
u===$&&C.a()
t=j.fy
t===$&&C.a()
n=u.dY(t)!==0}else n=!1
j.alV()
if(!n)n=j.alZ(q,s)
else{r.a=q.a=0
u=p.b
u===$&&C.a()
if(!u)r.b=q.b=0
p.f=p.e=0}u=j.b6
u.toString
if(u>0){u=j.k4
u===$&&C.a()
t=j.y1
o=j.B
o===$&&C.a()
m=j.k1
m===$&&C.a()
m=o[m]
o=p.b
o===$&&C.a()
l=m[o?1:0]
u[t]=l
l.c=l.c||!n}++j.y1}u=j.k3
u===$&&C.a()
u=u[0]
u.b=u.a=0
D.k.eW(x,0,4,0)
j.y1=0
j.ank()
u=j.b6
u.toString
k=!1
if(u>0){u=j.y2
t=j.ch
t===$&&C.a()
if(u>=t){t=j.cx
t.toString
t=u<=t
k=t}}if(!j.aen(k))return!1
u=++j.y2}return!0},
ank(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.y2,a5=a2.ok
a5===$&&C.a()
x=A.ba(a5,!1,a3,40)
w=A.ba(a2.ok,!1,a3,584)
v=A.ba(a2.ok,!1,a3,600)
a5=a4>0
u=0
while(!0){t=a2.at
t.toString
if(!(u<t))break
t=a2.b2
t===$&&C.a()
s=t[u]
if(u>0){for(r=-1;r<16;++r){t=r*32
x.kY(t-4,4,x,t+12)}for(r=-1;r<8;++r){t=r*32
q=t-4
t+=4
w.kY(q,4,w,t)
v.kY(q,4,v,t)}}else{for(r=0;r<16;++r)J.b7(x.a,x.d+(r*32-1),129)
for(r=0;r<8;++r){t=r*32-1
J.b7(w.a,w.d+t,129)
J.b7(v.a,v.d+t,129)}if(a5){J.b7(v.a,v.d+-33,129)
J.b7(w.a,w.d+-33,129)
J.b7(x.a,x.d+-33,129)}}t=a2.k2
t===$&&C.a()
p=t[u]
o=s.a
n=s.e
if(a5){x.pa(-32,16,p.a)
w.pa(-32,8,p.b)
v.pa(-32,8,p.c)}else if(u===0){t=x.a
q=x.d+-33
J.kZ(t,q,q+21,127)
q=w.a
t=w.d+-33
J.kZ(q,t,t+9,127)
t=v.a
q=v.d+-33
J.kZ(t,q,q+9,127)}t=s.b
t===$&&C.a()
if(t){m=A.aO(x,a3,-16)
l=m.yV()
if(a5){t=a2.at
t.toString
if(u>=t-1){t=p.a[15]
q=m.a
k=m.d
J.kZ(q,k,k+4,t)}else m.pa(0,4,a2.k2[u+1].a)}j=l[0]
l.$flags&2&&C.f(l)
l[96]=j
l[64]=j
l[32]=j
for(t=s.c,i=0;i<16;++i,n=n<<2>>>0){h=A.aO(x,a3,B.yn[i])
B.a_o[t[i]].$1(h)
n.toString
q=i*16
a2.RB(n,new A.fj(o,q,Math.min(384,384),q,!1),h)}}else{t=A.aUw(u,a4,s.c[0])
t.toString
B.a4w[t].$1(x)
if(n!==0)for(i=0;i<16;++i,n=n<<2>>>0){h=A.aO(x,a3,B.yn[i])
n.toString
t=i*16
a2.RB(n,new A.fj(o,t,Math.min(384,384),t,!1),h)}}t=s.f
t===$&&C.a()
q=A.aUw(u,a4,s.d)
q.toString
B.uS[q].$1(w)
B.uS[q].$1(v)
q=Math.min(384,384)
g=new A.fj(o,256,q,256,!1)
if((t&255)!==0){k=a2.e
if((t&170)!==0){k===$&&C.a()
k.n0(g,w)
k.n0(A.aO(g,a3,16),A.aO(w,a3,4))
f=A.aO(g,a3,32)
e=A.aO(w,a3,128)
k.n0(f,e)
k.n0(A.aO(f,a3,16),A.aO(e,a3,4))}else{k===$&&C.a()
k.a2B(g,w)}}d=new A.fj(o,320,q,320,!1)
t=t>>>8
if((t&255)!==0){q=a2.e
if((t&170)!==0){q===$&&C.a()
q.n0(d,v)
q.n0(A.aO(d,a3,16),A.aO(v,a3,4))
t=A.aO(d,a3,32)
k=A.aO(v,a3,128)
q.n0(t,k)
q.n0(A.aO(t,a3,16),A.aO(k,a3,4))}else{q===$&&C.a()
q.a2B(d,v)}}t=a2.ax
t.toString
if(a4<t-1){D.k.c4(p.a,0,16,x.da(),480)
D.k.c4(p.b,0,8,w.da(),224)
D.k.c4(p.c,0,8,v.da(),224)}a0=u*16
a1=u*8
for(r=0;r<16;++r){t=a2.p4
t.toString
q=a2.p1
q===$&&C.a()
q.kY(a0+r*t,16,x,r*32)}for(r=0;r<8;++r){t=a2.R8
t.toString
q=a2.p2
q===$&&C.a()
k=r*32
q.kY(a1+r*t,8,w,k)
t=a2.R8
t.toString
q=a2.p3
q===$&&C.a()
q.kY(a1+r*t,8,v,k)}++u}},
RB(d,e,f){var x,w,v,u,t,s
switch(d>>>30){case 3:x=this.e
x===$&&C.a()
x.aAK(0,e,f,!1)
break
case 2:this.e===$&&C.a()
w=J.k(e.a,e.d)+4
v=D.b.fC(D.b.I(J.k(e.a,e.d+4)*35468,16),32)
u=D.b.fC(D.b.I(J.k(e.a,e.d+4)*85627,16),32)
t=D.b.fC(D.b.I(J.k(e.a,e.d+1)*35468,16),32)
s=D.b.fC(D.b.I(J.k(e.a,e.d+1)*85627,16),32)
A.aws(f,0,w+u,s,t)
A.aws(f,1,w+v,s,t)
A.aws(f,2,w-v,s,t)
A.aws(f,3,w-u,s,t)
break
case 1:x=this.e
x===$&&C.a()
x.yY(e,f)
break
default:break}},
adv(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.p4,j=m.k4
j===$&&C.a()
j=j[d]
j.toString
x=m.p1
x===$&&C.a()
w=A.aO(x,l,d*16)
v=j.b
u=j.a
if(u===0)return
if(m.b6===1){if(d>0){x=m.e
x===$&&C.a()
k.toString
x.Ot(w,k,u+4)}if(j.c){x=m.e
x===$&&C.a()
k.toString
x.a4G(w,k,u)}if(e>0){x=m.e
x===$&&C.a()
k.toString
x.Ou(w,k,u+4)}if(j.c){j=m.e
j===$&&C.a()
k.toString
j.a4H(w,k,u)}}else{t=m.R8
x=m.p2
x===$&&C.a()
s=d*8
r=A.aO(x,l,s)
x=m.p3
x===$&&C.a()
q=A.aO(x,l,s)
p=j.d
if(d>0){x=m.e
x===$&&C.a()
k.toString
s=u+4
x.rL(w,1,k,16,s,v,p)
t.toString
x.rL(r,1,t,8,s,v,p)
x.rL(q,1,t,8,s,v,p)}if(j.c){x=m.e
x===$&&C.a()
k.toString
x.avy(w,k,u,v,p)
t.toString
o=A.aO(r,l,4)
n=A.aO(q,l,4)
x.rK(o,1,t,8,u,v,p)
x.rK(n,1,t,8,u,v,p)}if(e>0){x=m.e
x===$&&C.a()
k.toString
s=u+4
x.rL(w,k,1,16,s,v,p)
t.toString
x.rL(r,t,1,8,s,v,p)
x.rL(q,t,1,8,s,v,p)}if(j.c){j=m.e
j===$&&C.a()
k.toString
j.aB_(w,k,u,v,p)
t.toString
x=4*t
o=A.aO(r,l,x)
n=A.aO(q,l,x)
j.rK(o,t,1,8,u,v,p)
j.rK(n,t,1,8,u,v,p)}}},
aec(){var x,w=this,v=w.ay
v===$&&C.a()
x=v
while(!0){v=w.CW
v.toString
if(!(x<v))break
w.adv(x,w.y2);++x}},
aen(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.b6
d.toString
x=B.n1[d]
d=f.p4
d.toString
w=x*d
d=f.R8
d.toString
v=(x/2|0)*d
d=f.p1
d===$&&C.a()
u=-w
t=A.aO(d,e,u)
d=f.p2
d===$&&C.a()
s=-v
r=A.aO(d,e,s)
d=f.p3
d===$&&C.a()
q=A.aO(d,e,s)
p=f.y2
d=f.cx
d.toString
o=p*16
n=(p+1)*16
if(a0)f.aec()
if(p!==0){o-=x
f.to=A.aO(t,e,0)
f.x1=A.aO(r,e,0)
f.x2=A.aO(q,e,0)}else{f.to=A.aO(f.p1,e,0)
f.x1=A.aO(f.p2,e,0)
f.x2=A.aO(f.p3,e,0)}d=p<d-1
if(d)n-=x
m=f.as
if(n>m)n=m
f.xr=null
if(f.a1!=null&&o<n){l=f.xr=f.acW(o,n-o)
if(l==null)return!1}else l=e
k=f.Q
if(o<k){j=k-o
i=f.to
i===$&&C.a()
h=i.d
g=f.p4
g.toString
i.d=h+g*j
g=f.x1
g===$&&C.a()
h=g.d
i=f.R8
i.toString
i*=D.b.I(j,1)
g.d=h+i
h=f.x2
h===$&&C.a()
h.d+=i
if(l!=null)l.d=l.d+f.b.a*j
o=k}if(o<n){i=f.to
i===$&&C.a()
h=i.d
g=f.y
i.d=h+g
h=f.x1
h===$&&C.a()
i=g>>>1
h.d=h.d+i
h=f.x2
h===$&&C.a()
h.d+=i
if(l!=null)l.d+=g
f.aqG(0,o-k,f.z-g,n-o)}if(d){d=f.p1
l=f.p4
l.toString
d.kY(u,w,t,16*l)
l=f.p2
u=f.R8
u.toString
l.kY(s,v,r,8*u)
u=f.p3
l=f.R8
l.toString
u.kY(s,v,q,8*l)}return!0},
aqG(d,e,f,g){if(f<=0||g<=0)return!1
this.adQ(e,f,g)
this.adP(e,f,g)
return!0},
GB(d){var x
if((d&-4194304)>>>0===0)x=D.b.I(d,14)
else x=d<0?0:255
return x},
BT(d,e,f,g){var x=19077*d
g.l(0,0,this.GB(x+26149*f+-3644112))
g.l(0,1,this.GB(x-6419*e-13320*f+2229552))
g.l(0,2,this.GB(x+33050*e+-4527440))},
BK(a5,a6,a7,a8,a9,b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=new A.awB(),a0=b3-1,a1=D.b.I(a0,1),a2=d.$2(J.k(a7.a,a7.d),J.k(a8.a,a8.d)),a3=d.$2(J.k(a9.a,a9.d),J.k(b0.a,b0.d)),a4=D.b.I(3*a2+a3+131074,2)
f.BT(J.k(a5.a,a5.d),a4&255,a4>>>16,b1)
b1.l(0,3,255)
x=a6!=null
if(x){a4=D.b.I(3*a3+a2+131074,2)
w=J.k(a6.a,a6.d)
b2.toString
f.BT(w,a4&255,a4>>>16,b2)
b2.l(0,3,255)}for(v=1;v<=a1;++v,a3=t,a2=u){u=d.$2(J.k(a7.a,a7.d+v),J.k(a8.a,a8.d+v))
t=d.$2(J.k(a9.a,a9.d+v),J.k(b0.a,b0.d+v))
s=a2+u+a3+t+524296
r=D.b.I(s+2*(u+a3),3)
q=D.b.I(s+2*(a2+t),3)
a4=D.b.I(r+a2,1)
p=D.b.I(q+u,1)
w=2*v
o=w-1
n=J.k(a5.a,a5.d+o)
m=a4&255
l=a4>>>16
k=o*4
j=A.aO(b1,e,k)
n=19077*n
i=n+26149*l+-3644112
if((i&-4194304)>>>0===0)h=D.b.I(i,14)
else h=i<0?0:255
J.b7(j.a,j.d,h)
l=n-6419*m-13320*l+2229552
if((l&-4194304)>>>0===0)h=D.b.I(l,14)
else h=l<0?0:255
J.b7(j.a,j.d+1,h)
n=n+33050*m+-4527440
if((n&-4194304)>>>0===0)h=D.b.I(n,14)
else h=n<0?0:255
J.b7(j.a,j.d+2,h)
J.b7(j.a,j.d+3,255)
n=J.k(a5.a,a5.d+w)
m=p&255
l=p>>>16
j=w*4
i=A.aO(b1,e,j)
n=19077*n
g=n+26149*l+-3644112
if((g&-4194304)>>>0===0)h=D.b.I(g,14)
else h=g<0?0:255
J.b7(i.a,i.d,h)
l=n-6419*m-13320*l+2229552
if((l&-4194304)>>>0===0)h=D.b.I(l,14)
else h=l<0?0:255
J.b7(i.a,i.d+1,h)
n=n+33050*m+-4527440
if((n&-4194304)>>>0===0)h=D.b.I(n,14)
else h=n<0?0:255
J.b7(i.a,i.d+2,h)
J.b7(i.a,i.d+3,255)
if(x){a4=D.b.I(q+a3,1)
p=D.b.I(r+t,1)
o=J.k(a6.a,a6.d+o)
n=a4&255
m=a4>>>16
b2.toString
k=A.aO(b2,e,k)
o=19077*o
l=o+26149*m+-3644112
if((l&-4194304)>>>0===0)h=D.b.I(l,14)
else h=l<0?0:255
J.b7(k.a,k.d,h)
m=o-6419*n-13320*m+2229552
if((m&-4194304)>>>0===0)h=D.b.I(m,14)
else h=m<0?0:255
J.b7(k.a,k.d+1,h)
o=o+33050*n+-4527440
if((o&-4194304)>>>0===0)h=D.b.I(o,14)
else h=o<0?0:255
J.b7(k.a,k.d+2,h)
J.b7(k.a,k.d+3,255)
w=J.k(a6.a,a6.d+w)
o=p&255
n=p>>>16
j=A.aO(b2,e,j)
w=19077*w
m=w+26149*n+-3644112
if((m&-4194304)>>>0===0)h=D.b.I(m,14)
else h=m<0?0:255
J.b7(j.a,j.d,h)
n=w-6419*o-13320*n+2229552
if((n&-4194304)>>>0===0)h=D.b.I(n,14)
else h=n<0?0:255
J.b7(j.a,j.d+1,h)
w=w+33050*o+-4527440
if((w&-4194304)>>>0===0)h=D.b.I(w,14)
else h=w<0?0:255
J.b7(j.a,j.d+2,h)
J.b7(j.a,j.d+3,255)}}if((b3&1)===0){a4=D.b.I(3*a2+a3+131074,2)
w=J.k(a5.a,a5.d+a0)
o=a0*4
n=A.aO(b1,e,o)
f.BT(w,a4&255,a4>>>16,n)
n.l(0,3,255)
if(x){a4=D.b.I(3*a3+a2+131074,2)
a0=J.k(a6.a,a6.d+a0)
b2.toString
o=A.aO(b2,e,o)
f.BT(a0,a4&255,a4>>>16,o)
o.l(0,3,255)}}},
adP(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=p.xr
if(o==null)return
x=A.aO(o,null,0)
if(d===0){w=f-1
v=d}else{v=d-1
x.d=x.d-p.b.a
w=f}o=p.Q
u=p.as
if(o+d+f===u)w=u-o-v
for(o=p.b,t=0;t<w;++t){for(u=t+v,s=0;s<e;++s){r=J.k(x.a,x.d+s)
q=p.d.a
q=q==null?null:q.bY(s,u,null);(q==null?new A.cE():q).sa4(0,r)}x.d=x.d+o.a}},
adQ(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=A.ba(J.d5(l.d.gaj(0),0,null),!1,k,d*j.a*4),h=l.to
h===$&&C.a()
x=A.aO(h,k,0)
h=l.x1
h===$&&C.a()
w=A.aO(h,k,0)
h=l.x2
h===$&&C.a()
v=A.aO(h,k,0)
u=d+f
t=D.b.I(e+1,1)
s=j.a*4
j=l.rx
j===$&&C.a()
r=A.aO(j,k,0)
j=l.ry
j===$&&C.a()
q=A.aO(j,k,0)
if(d===0){l.BK(x,k,w,v,w,v,i,k,e)
p=f}else{j=l.RG
j===$&&C.a()
l.BK(j,x,r,q,w,v,A.aO(i,k,-s),i,e)
p=f+1}r.a=w.a
q.a=v.a
for(j=2*s,h=-s,o=d;o+=2,o<u;){r.d=w.d
q.d=v.d
n=w.d
m=l.R8
m.toString
w.d=n+m
v.d+=m
i.d+=j
m=x.d
n=l.p4
n.toString
x.d=m+2*n
l.BK(A.aO(x,k,-n),x,r,q,w,v,A.aO(i,k,h),i,e)}j=x.d
h=l.p4
h.toString
x.d=j+h
if(l.Q+u<l.as){j=l.RG
j===$&&C.a()
j.pa(0,e,x)
l.rx.pa(0,t,w)
l.ry.pa(0,t,v);--p}else if((u&1)===0)l.BK(x,k,w,v,w,v,A.aO(i,k,s),k,e)
return p},
acW(d,e){var x,w,v,u,t,s,r,q,p,o=this,n=o.b,m=n.a,l=n.b
if(d<0||e<=0||d+e>l)return null
if(d===0){n=m*l
o.ae=new Uint8Array(n)
x=o.a1
w=new A.awO(x,m,l)
v=x.bj()
u=w.d=v&3
w.e=D.b.I(v,2)&3
w.f=D.b.I(v,4)&3
w.r=D.b.I(v,6)&3
if(w.gcm())if(u===0){if(x.c-x.d<n)w.r=1}else if(u===1){t=new A.Zz(B.i_,C.b([],y.J))
t.a=m
t.b=l
n=C.b([],y.F)
u=C.b([],y.H)
s=new Uint32Array(2)
r=new A.Zm(x,s)
s=r.e=J.d5(D.aJ.gaj(s),0,null)
q=x.bj()
s.$flags&2&&C.f(s)
s[0]=q
q=x.bj()
s.$flags&2&&C.f(s)
s[1]=q
q=x.bj()
s.$flags&2&&C.f(s)
s[2]=q
q=x.bj()
s.$flags&2&&C.f(s)
s[3]=q
q=x.bj()
s.$flags&2&&C.f(s)
s[4]=q
q=x.bj()
s.$flags&2&&C.f(s)
s[5]=q
q=x.bj()
s.$flags&2&&C.f(s)
s[6]=q
x=x.bj()
s.$flags&2&&C.f(s)
s[7]=x
r.b=!1
u=new A.Su(r,t,n,u)
u.dy=m
u.fr=l
w.x=u
u.vG(m,l,!0)
n=w.x
x=n.ch
if(x.length===1&&x[0].a===B.JY&&n.ajq()){w.y=!0
n=w.x
x=n.c
p=x.a*x.b
n.db=0
x=D.b.b3(p,4)
x=new Uint8Array(p+(4-x))
n.cy=x
n.cx=J.i2(D.k.gaj(x),0,null)}else{w.y=!1
w.x.PW(m)}}else w.r=1
o.a3=w}n=o.a3
if(n!=null)if(!n.w){x=o.ae
x===$&&C.a()
if(!n.atN(0,d,e,x))return null}n=o.ae
n===$&&C.a()
return A.ba(n,!1,null,d*m)},
alZ(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.fr.b,a3=a1.k1
a3===$&&C.a()
x=a1.dy[a3]
a3=a1.b2
a3===$&&C.a()
w=a3[a1.y1]
v=A.ba(w.a,!1,null,0)
a3=a1.k3
a3===$&&C.a()
u=a3[0]
v.axT(0,v.c-v.d,0)
a3=w.b
a3===$&&C.a()
if(!a3){t=A.ba(new Int16Array(16),!1,null,0)
a3=a4.b
s=u.b
r=a1.Hn(a5,a2[1],a3+s,x.b,0,t)
a4.b=u.b=r>0?1:0
if(r>1)a1.apI(t,v)
else{q=D.b.I(J.k(t.a,t.d)+3,3)
for(p=0;p<256;p+=16)J.b7(v.a,v.d+p,q)}o=a2[0]
n=1}else{o=a2[3]
n=0}m=a4.a&15
l=u.a&15
for(k=0,j=0;j<4;++j){i=l&1
for(h=0,g=0;g<4;++g){r=a1.Hn(a5,o,i+(m&1),x.a,n,v)
i=r>n?1:0
m=m>>>1|i<<7
a3=J.k(v.a,v.d)!==0?1:0
if(r>3)a3=3
else if(r>1)a3=2
h=h<<2|a3
v.d+=16}m=m>>>4
l=l>>>1|i<<7
k=(k<<8|h)>>>0}f=l>>>4
for(e=m,d=0,a0=0;a0<4;a0+=2){a3=4+a0
m=D.b.dv(a4.a,a3)
l=D.b.dv(u.a,a3)
for(h=0,j=0;j<2;++j){i=l&1
for(g=0;g<2;++g){r=a1.Hn(a5,a2[2],i+(m&1),x.c,0,v)
i=r>0?1:0
m=m>>>1|i<<3
a3=J.k(v.a,v.d)!==0?1:0
if(r>3)a3=3
else if(r>1)a3=2
h=(h<<2|a3)>>>0
v.d+=16}m=m>>>2
l=l>>>1|i<<5}d=(d|D.b.c_(h,4*a0))>>>0
e=(e|D.b.c_(m<<4>>>0,a0))>>>0
f=(f|D.b.c_(l&240,a0))>>>0}a4.a=e
u.a=f
w.e=k
w.f=d
if((d&43690)===0)x.toString
return(k|d)>>>0===0},
apI(d,e){var x,w,v,u,t,s,r,q,p,o,n=new Int32Array(16)
for(x=0;x<4;++x){w=12+x
v=J.k(d.a,d.d+x)+J.k(d.a,d.d+w)
u=4+x
t=8+x
s=J.k(d.a,d.d+u)+J.k(d.a,d.d+t)
r=J.k(d.a,d.d+u)-J.k(d.a,d.d+t)
q=J.k(d.a,d.d+x)-J.k(d.a,d.d+w)
n[x]=v+s
n[t]=v-s
n[u]=q+r
n[w]=q-r}for(p=0,x=0;x<4;++x){w=x*4
o=n[w]+3
u=n[3+w]
v=o+u
t=n[1+w]
w=n[2+w]
s=t+w
r=t-w
q=o-u
u=D.b.I(v+s,3)
J.b7(e.a,e.d+p,u)
u=D.b.I(q+r,3)
J.b7(e.a,e.d+(p+16),u)
u=D.b.I(v-s,3)
J.b7(e.a,e.d+(p+32),u)
u=D.b.I(q-r,3)
J.b7(e.a,e.d+(p+48),u)
p+=64}},
af7(d,e){var x,w,v,u,t,s
if(d.dY(e[3])===0)x=d.dY(e[4])===0?2:3+d.dY(e[5])
else if(d.dY(e[6])===0)x=d.dY(e[7])===0?5+d.dY(159):7+2*d.dY(165)+d.dY(145)
else{w=d.dY(e[8])
v=2*w+d.dY(e[9+w])
u=B.Ud[v]
t=u.length
for(x=0,s=0;s<t;++s)x+=x+d.dY(u[s])
x+=3+D.b.c_(8,v)}return x},
Hn(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=e[h].a[f]
for(;h<16;h=x){if(d.dY(p[0])===0)return h
for(;d.dY(p[1])===0;){++h
p=e[$.aP1()[h]].a[0]
if(h===16)return 16}x=h+1
w=e[$.aP1()[x]].a
if(d.dY(p[2])===0){p=w[1]
v=1}else{v=this.af7(d,p)
p=w[2]}u=$.b_M()[h]
t=d.b
t===$&&C.a()
s=d.Qa(D.b.I(t,1))
t=d.b
r=B.wB[t]
d.b=B.wx[t]
t=d.d
t===$&&C.a()
d.d=t-r
t=s!==0?-v:v
q=g[h>0?1:0]
J.b7(i.a,i.d+u,t*q)}return 16},
alV(){var x,w,v,u,t,s,r,q,p,o=this,n=o.y1,m=4*n,l=o.go,k=o.id,j=o.b2
j===$&&C.a()
x=j[n]
n=o.c
n===$&&C.a()
n=n.dY(145)===0
x.b=n
if(!n){if(o.c.dY(156)!==0)w=o.c.dY(128)!==0?1:3
else w=o.c.dY(163)!==0?2:0
n=x.c
n.$flags&2&&C.f(n)
n[0]=w
l.toString
D.k.eW(l,m,m+4,w)
D.k.eW(k,0,4,w)}else{v=x.c
for(n=k.$flags|0,u=0,t=0;t<4;++t,u=p){w=k[t]
for(s=0;s<4;++s){j=m+s
r=B.Zr[l[j]][w]
q=B.vs[o.c.dY(r[0])]
for(;q>0;)q=B.vs[2*q+o.c.dY(r[q])]
w=-q
l.$flags&2&&C.f(l)
l[j]=w}p=u+4
l.toString
D.k.c4(v,u,p,l,m)
n&2&&C.f(k)
k[t]=w}}if(o.c.dY(142)===0)n=0
else if(o.c.dY(114)===0)n=2
else n=o.c.dY(183)!==0?1:3
x.d=n}}
A.Hl.prototype={
cX(d){var x,w
for(x=0;w=d-1,d>0;d=w)x=(x|D.b.cA(this.dY(128),w))>>>0
return x},
va(d){var x=this.cX(d)
return this.cX(1)===1?-x:x},
dY(d){var x,w=this,v=w.b
v===$&&C.a()
x=w.Qa(D.b.I(v*d,8))
if(w.b<=126)w.aoO()
return x},
Qa(d){var x,w,v,u,t,s=this,r=s.d
r===$&&C.a()
if(r<0){x=s.a
w=x.c
v=x.d
if(w-v>=1){u=x.bj()
r=s.c
r===$&&C.a()
s.c=(u|r<<8)>>>0
r=s.d+8
s.d=r
t=r}else{if(v<w){r=x.bj()
x=s.c
x===$&&C.a()
s.c=(r|x<<8)>>>0
x=s.d+8
s.d=x
r=x}else if(!s.e){x=s.c
x===$&&C.a()
s.c=x<<8>>>0
r+=8
s.d=r
s.e=!0}t=r}}else t=r
r=s.c
r===$&&C.a()
if(D.b.jD(r,t)>d){x=s.b
x===$&&C.a()
w=d+1
s.b=x-w
s.c=r-D.b.cA(w,t)
return 1}else{s.b=d
return 0}},
aoO(){var x,w=this,v=w.b
v===$&&C.a()
x=B.wB[v]
w.b=B.wx[v]
v=w.d
v===$&&C.a()
w.d=v-x}}
A.awq.prototype={
Ou(d,e,f){var x,w=A.aO(d,null,0)
for(x=0;x<16;++x){w.d=d.d+x
if(this.U9(w,e,f))this.Aq(w,e)}},
Ot(d,e,f){var x,w=A.aO(d,null,0)
for(x=0;x<16;++x){w.d=d.d+x*e
if(this.U9(w,1,f))this.Aq(w,1)}},
a4H(d,e,f){var x,w,v=A.aO(d,null,0)
for(x=4*e,w=3;w>0;--w){v.d+=x
this.Ou(v,e,f)}},
a4G(d,e,f){var x,w=A.aO(d,null,0)
for(x=3;x>0;--x){w.d+=4
this.Ot(w,e,f)}},
aB_(d,e,f,g,h){var x,w,v=A.aO(d,null,0)
for(x=4*e,w=3;w>0;--w){v.d+=x
this.rK(v,e,1,16,f,g,h)}},
avy(d,e,f,g,h){var x,w=A.aO(d,null,0)
for(x=3;x>0;--x){w.d+=4
this.rK(w,1,e,16,f,g,h)}},
rL(d,e,f,g,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=A.aO(d,null,0)
for(x=-3*e,w=-2*e,v=-e,u=2*e;t=g-1,g>0;g=t){if(this.Ua(h,e,a0,a1))if(this.Tr(h,e,a2))this.Aq(h,e)
else{s=J.k(h.a,h.d+x)
r=J.k(h.a,h.d+w)
q=J.k(h.a,h.d+v)
p=J.k(h.a,h.d)
o=J.k(h.a,h.d+e)
n=J.k(h.a,h.d+u)
m=$.aKp()
l=m[1020+3*(p-q)+m[1020+r-o]]
m=D.b.I(27*l+63,7)
k=(m&2147483647)-((m&2147483648)>>>0)
m=D.b.I(18*l+63,7)
j=(m&2147483647)-((m&2147483648)>>>0)
m=D.b.I(9*l+63,7)
i=(m&2147483647)-((m&2147483648)>>>0)
m=$.iE()[255+s+i]
J.b7(h.a,h.d+x,m)
m=$.iE()[255+r+j]
J.b7(h.a,h.d+w,m)
m=$.iE()[255+q+k]
J.b7(h.a,h.d+v,m)
m=$.iE()[255+p-k]
J.b7(h.a,h.d,m)
m=$.iE()[255+o-j]
J.b7(h.a,h.d+e,m)
m=$.iE()[255+n-i]
J.b7(h.a,h.d+u,m)}h.d+=f}},
rK(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=A.aO(d,null,0)
for(x=-2*e,w=-e;v=g-1,g>0;g=v){if(this.Ua(k,e,h,i))if(this.Tr(k,e,j))this.Aq(k,e)
else{u=J.k(k.a,k.d+x)
t=J.k(k.a,k.d+w)
s=J.k(k.a,k.d)
r=J.k(k.a,k.d+e)
q=3*(s-t)
p=$.aKq()
o=D.b.I(q+4,3)
n=p[112+((o&2147483647)-((o&2147483648)>>>0))]
o=D.b.I(q+3,3)
m=p[112+((o&2147483647)-((o&2147483648)>>>0))]
o=D.b.I(n+1,1)
l=(o&2147483647)-((o&2147483648)>>>0)
o=$.iE()[255+u+l]
J.b7(k.a,k.d+x,o)
o=$.iE()[255+t+m]
J.b7(k.a,k.d+w,o)
o=$.iE()[255+s-n]
J.b7(k.a,k.d,o)
o=$.iE()[255+r-l]
J.b7(k.a,k.d+e,o)}k.d+=f}},
Aq(d,e){var x=J.k(d.a,d.d+-2*e),w=-e,v=J.k(d.a,d.d+w),u=J.k(d.a,d.d),t=J.k(d.a,d.d+e),s=3*(u-v)+$.aKp()[1020+x-t],r=$.aKq(),q=r[112+D.b.fC(D.b.I(s+4,3),32)],p=r[112+D.b.fC(D.b.I(s+3,3),32)]
d.l(0,w,$.iE()[255+v+p])
d.l(0,0,$.iE()[255+u-q])},
Tr(d,e,f){var x=J.k(d.a,d.d+-2*e),w=J.k(d.a,d.d+-e),v=J.k(d.a,d.d),u=J.k(d.a,d.d+e),t=$.ab1()
return t[255+x-w]>f||t[255+u-v]>f},
U9(d,e,f){var x=J.k(d.a,d.d+-2*e),w=J.k(d.a,d.d+-e),v=J.k(d.a,d.d),u=J.k(d.a,d.d+e)
return 2*$.ab1()[255+w-v]+$.aKo()[255+x-u]<=f},
Ua(d,e,f,g){var x=J.k(d.a,d.d+-4*e),w=J.k(d.a,d.d+-3*e),v=J.k(d.a,d.d+-2*e),u=J.k(d.a,d.d+-e),t=J.k(d.a,d.d),s=J.k(d.a,d.d+e),r=J.k(d.a,d.d+2*e),q=J.k(d.a,d.d+3*e),p=$.ab1(),o=255+v
if(2*p[255+u-t]+$.aKo()[o-s]>f)return!1
return p[255+x-w]<=g&&p[255+w-v]<=g&&p[o-u]<=g&&p[255+q-r]<=g&&p[255+r-s]<=g&&p[255+s-t]<=g},
n0(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=new Int32Array(16)
for(x=0,w=0,v=0;v<4;++v){u=x+8
t=J.k(d.a,d.d+x)+J.k(d.a,d.d+u)
s=J.k(d.a,d.d+x)-J.k(d.a,d.d+u)
u=x+4
r=D.b.I(J.k(d.a,d.d+u)*35468,16)
q=x+12
p=D.b.I(J.k(d.a,d.d+q)*85627,16)
o=(r&2147483647)-((r&2147483648)>>>0)-((p&2147483647)-((p&2147483648)>>>0))
u=D.b.I(J.k(d.a,d.d+u)*85627,16)
q=D.b.I(J.k(d.a,d.d+q)*35468,16)
n=(u&2147483647)-((u&2147483648)>>>0)+((q&2147483647)-((q&2147483648)>>>0))
m=w+1
j[w]=t+n
w=m+1
j[m]=s+o
m=w+1
j[w]=s-o
w=m+1
j[m]=t-n;++x}for(l=0,w=0,v=0;v<4;++v){k=j[w]+4
u=j[w+8]
t=k+u
s=k-u
u=j[w+4]
r=D.b.I(u*35468,16)
q=j[w+12]
p=D.b.I(q*85627,16)
o=(r&2147483647)-((r&2147483648)>>>0)-((p&2147483647)-((p&2147483648)>>>0))
u=D.b.I(u*85627,16)
q=D.b.I(q*35468,16)
n=(u&2147483647)-((u&2147483648)>>>0)+((q&2147483647)-((q&2147483648)>>>0))
A.pS(e,l,0,0,t+n)
A.pS(e,l,1,0,s+o)
A.pS(e,l,2,0,s-o)
A.pS(e,l,3,0,t-n);++w
l+=32}},
aAK(d,e,f,g){this.n0(e,f)
if(g)this.n0(A.aO(e,null,16),A.aO(f,null,4))},
yY(d,e){var x,w,v=J.k(d.a,d.d)+4
for(x=0;x<4;++x)for(w=0;w<4;++w)A.pS(e,0,w,x,v)},
a2B(d,e){var x=this,w=null
if(J.k(d.a,d.d)!==0)x.yY(d,e)
if(J.k(d.a,d.d+16)!==0)x.yY(A.aO(d,w,16),A.aO(e,w,4))
if(J.k(d.a,d.d+32)!==0)x.yY(A.aO(d,w,32),A.aO(e,w,128))
if(J.k(d.a,d.d+48)!==0)x.yY(A.aO(d,w,48),A.aO(e,w,132))}}
A.awv.prototype={}
A.awy.prototype={}
A.awA.prototype={}
A.Hk.prototype={}
A.awz.prototype={}
A.awr.prototype={}
A.uC.prototype={}
A.Zo.prototype={}
A.Zq.prototype={}
A.Zp.prototype={}
A.Zr.prototype={}
A.Hm.prototype={
xg(){var x,w,v,u,t=this,s=t.b
if(s.eo(8)!==47)return!1
x=s.eo(14)+1
w=s.eo(14)+1
v=s.eo(1)
t.dy=x
t.fr=w
u=t.c
u.f=B.l0
u.a=x
u.b=w
u.d=v!==0
if(s.eo(3)!==0)return!1
return!0},
nw(d){var x,w,v,u,t,s,r=this,q=null
r.f=0
if(!r.xg())return q
r.vG(r.dy,r.fr,!0)
r.PW(r.dy)
x=r.dy
r.d=A.dx(q,q,B.y,0,B.aa,r.fr,q,0,4,q,B.y,x,!1)
x=r.cx
x.toString
w=r.c
v=w.a
u=w.b
if(!r.GS(x,v,u,u,r.gamJ()))return q
x=w.w
if(x.length!==0){t=A.ba(new C.bW(x),!1,q,0)
x=r.d
x.toString
x.e=A.agc(t)}s=w.r
if(s!=null)r.d.c=new A.mJ("",B.j7,s)
return r.d},
PW(d){var x,w=this,v=w.c
v=v.a*v.b+d
x=new Uint32Array(v+d*16)
w.cx=x
w.cy=J.d5(D.aJ.gaj(x),0,null)
w.db=v
return!0},
and(d){var x,w,v,u=this,t=u.b,s=t.eo(2),r=u.CW,q=D.b.c_(1,s)
if((r&q)>>>0!==0)return!1
u.CW=(r|q)>>>0
x=new A.Zn(B.JX)
u.ch.push(x)
r=B.a40[s]
x.a=r
x.b=d[0]
x.c=d[1]
switch(r.a){case 0:case 1:t=t.eo(3)+2
x.e=t
x.d=u.vG(A.pT(x.b,t),A.pT(x.c,x.e),!1)
break
case 3:w=t.eo(8)+1
if(w>16)v=0
else if(w>4)v=1
else{t=w>2?2:3
v=t}d[0]=A.pT(x.b,v)
x.e=v
x.d=u.vG(w,1,!1)
u.ae4(w,x)
break
case 2:break}return!0},
vG(d,e,f){var x,w,v,u,t,s,r,q,p=this
if(f)for(x=p.b,w=y.t,v=e,u=d;x.eo(1)!==0;){t=C.b([u,v],w)
if(!p.and(t))throw C.e(A.aI("Invalid Transform"))
u=t[0]
v=t[1]}else{v=e
u=d}x=p.b
if(x.eo(1)!==0){s=x.eo(4)
if(!(s>=1&&s<=11))throw C.e(A.aI("Invalid Color Cache"))}else s=0
if(!p.an0(u,v,s,f))throw C.e(A.aI("Invalid Huffman Codes"))
if(s>0){x=D.b.c_(1,s)
p.w=x
p.x=new A.aww(new Uint32Array(x),32-s)}else p.w=0
x=p.c
x.a=u
x.b=v
r=p.z
p.Q=A.pT(u,r)
p.y=r===0?4294967295:D.b.c_(1,r)-1
if(f){p.f=0
return null}q=new Uint32Array(u*v)
if(!p.GS(q,u,v,v,null))throw C.e(A.aI("Failed to decode image data."))
p.f=0
return q},
GS(b0,b1,b2,b3,b4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=506832829,a5=a3.f,a6=D.b.e1(a5,b1),a7=D.b.b3(a5,b1),a8=b1*b2,a9=b1*b3
if(a5>=a9){if(b4!=null)b4.$2(b3,!1)
return!0}x=a3.Sj(a7,a6)
w=a3.w
v=280+w
u=w>0?a3.x:null
t=a3.y
for(w=b0.$flags|0,s=a3.b,r=b4!=null,q=a5;q<a9;){if((a7&t)>>>0===0){p=a3.vP(a3.as,a3.Q,a3.z,a7,a6)
x=a3.ax[p]}o=0
if(x.d){n=x.c
w&2&&C.f(b0)
b0[q]=n;++q;++a7
if(a7>=b1){++a6
if(r&&a6<=b3)b4.$2(a6,!0)
if(u!=null)for(n=u.a,m=u.b,l=n.$flags|0;a5<q;){k=b0[a5]
j=D.b.d5(A.Mn(k,a4),m)
l&2&&C.f(n)
n[j]=k;++a5}a7=o}continue}if(s.a>=32)s.q0()
if(x.e){i=x.f[s.yz()&63]
n=i.a
m=s.a
if(n<256){s.a=m+n
n=i.b
w&2&&C.f(b0)
b0[q]=n
h=0}else{s.a=m+(n-256)
h=i.b}if(s.b)break
if(h===0){++q;++a7
if(a7>=b1){++a6
if(r&&a6<=b3)b4.$2(a6,!0)
if(u!=null)for(n=u.a,m=u.b,l=n.$flags|0;a5<q;){k=b0[a5]
j=D.b.d5(A.Mn(k,a4),m)
l&2&&C.f(n)
n[j]=k;++a5}a7=o}continue}}else h=x.r_(0,s)
if(h<256){if(x.b){n=x.c
w&2&&C.f(b0)
b0[q]=(n|h<<8)>>>0}else{g=x.r_(1,s)
if(s.a>=32)s.q0()
f=A.aXk(x.r_(2,s),h,g,x.r_(3,s))
w&2&&C.f(b0)
b0[q]=f}++q;++a7
if(a7>=b1){++a6
if(r&&a6<=b3)b4.$2(a6,!0)
if(u!=null)for(n=u.a,m=u.b,l=n.$flags|0;a5<q;){k=b0[a5]
j=D.b.d5(A.Mn(k,a4),m)
l&2&&C.f(n)
n[j]=k;++a5}a7=o}}else if(h<280){e=a3.Az(h-256)
d=x.r_(4,s)
if(s.a>=32)s.q0()
a0=a3.UG(b1,a3.Az(d))
if(q<a0||a8-q<e)return!1
else{a1=q-a0
for(a2=0;a2<e;++a2){n=b0[a1+a2]
w&2&&C.f(b0)
b0[q+a2]=n}}q+=e
a7+=e
for(;a7>=b1;){a7-=b1;++a6
if(r&&a6<=b3)b4.$2(a6,!0)}if((a7&t)>>>0!==0){p=a3.vP(a3.as,a3.Q,a3.z,a7,a6)
x=a3.ax[p]}if(u!=null)for(n=u.a,m=u.b,l=n.$flags|0;a5<q;){k=b0[a5]
j=D.b.d5(A.Mn(k,a4),m)
l&2&&C.f(n)
n[j]=k;++a5}}else if(h<v){for(;a5<q;){n=b0[a5]
m=u.a
l=u.b
l=D.b.d5(A.Mn(n,a4),l)
m.$flags&2&&C.f(m)
m[l]=n;++a5}n=u.a
m=n[h-280]
w&2&&C.f(b0)
b0[q]=m;++q;++a7
if(a7>=b1){++a6
if(r&&a6<=b3)b4.$2(a6,!0)
for(m=u.b,l=n.$flags|0;a5<q;){k=b0[a5]
j=D.b.d5(A.Mn(k,a4),m)
l&2&&C.f(n)
n[j]=k;++a5}a7=o}}else return!1}if(r)b4.$2(a6>b3?b3:a6,!1)
a3.f=q
return!0},
ajq(){var x,w,v,u,t
if(this.w>0)return!1
for(x=this.at,w=this.ax,v=0;v<x;++v){u=w[v].a
t=u[1]
if(t.a[t.b].a>0)return!1
t=u[2]
if(t.a[t.b].a>0)return!1
t=u[3]
if(t.a[t.b].a>0)return!1}return!0},
ae9(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this
if(e&&D.b.b3(d,16)!==0)return
x=m.r
w=d-x
v=m.dy
u=v*x
for(;w>0;){t=w>16?16:w
s=v*t
r=v*x
q=m.db
m.Q3(x,t,u)
for(v=m.dx,p=m.cx,o=0;o<s;++o){v.toString
n=p[q+o]
v.$flags&2&&C.f(v)
v[r+o]=n>>>8&255}w-=t
v=m.dy
u+=t*v
x+=t}m.r=d},
acB(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.f,j=D.b.e1(k,d),i=D.b.b3(k,d),h=d*e,g=d*f
if(k>=g){l.At(j)
return!0}x=l.Sj(i,j)
w=l.y
v=l.b
while(!0){if(!(!v.b&&k<g))break
if((i&w)>>>0===0){u=l.vP(l.as,l.Q,l.z,i,j)
x=l.ax[u]}if(v.a>=32)v.q0()
t=x.r_(0,v)
if(t<256){s=l.cy
s===$&&C.a()
s.$flags&2&&C.f(s)
s[k]=t;++k;++i
if(i>=d){++j
if(D.b.b3(j,16)===0)l.At(j)
i=0}}else if(t<280){r=l.Az(t-256)
q=x.r_(4,v)
if(v.a>=32)v.q0()
p=l.UG(d,l.Az(q))
if(k>=p&&h-k>=r)for(s=l.cy,o=0;o<r;++o){s===$&&C.a()
n=k+o
m=s[n-p]
s.$flags&2&&C.f(s)
s[n]=m}else{l.f=k
return!0}k+=r
i+=r
for(;i>=d;){i-=d;++j
if(D.b.b3(j,16)===0)l.At(j)}if(k<g&&(i&w)>>>0!==0){u=l.vP(l.as,l.Q,l.z,i,j)
x=l.ax[u]}}else return!1}l.At(j)
l.f=k
return!0},
At(d){var x,w,v,u=this,t=u.r,s=d-t,r=u.cy
r===$&&C.a()
x=A.ba(r,!1,null,u.c.a*t)
if(s>0){w=u.r
t=u.dx
t.toString
v=A.ba(t,!1,null,u.dy*w)
u.ch[0].as9(w,w+s,x,v)}u.r=d},
amK(d,e){var x,w,v,u,t,s,r=this,q=r.c.a,p=r.r
if(e)if(D.b.b3(d,16)!==0)return
x=d-p
if(x<=0){r.r=d
return}r.Q3(p,x,q*p)
for(w=r.db,v=r.r,u=0;u<x;++u,++v)for(t=0;t<r.dy;++t,++w){s=r.cx[w]
q=r.d.a
if(q!=null)q.f4(t,v,s>>>16&255,s>>>8&255,s&255,s>>>24&255)}r.r=d},
Q3(d,e,f){var x,w=this,v=w.ch,u=v.length,t=w.c.a,s=d+e,r=w.db,q=w.cx
q.toString
D.aJ.c4(q,r,r+t*e,q,f)
for(;x=u-1,u>0;u=x){t=v[x]
q=w.cx
q.toString
t.awZ(d,s,q,r,q,r)}},
an0(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=1,i=null
if(g&&k.b.eo(1)!==0){x=2+k.b.eo(3)
w=A.pT(d,x)
v=A.pT(e,x)
u=w*v
t=k.vG(w,v,!1)
if(t==null)return!1
k.z=x
for(s=t.$flags|0,r=j,q=0;q<u;++q){p=t[q]>>>8&65535
s&2&&C.f(t)
t[q]=p
if(p>=r)r=p+1}if(r>1000||r>d*e){i=new Int32Array(1)
D.aV.eW(i,0,1,255)
for(j=0,q=0;q<u;++q){o=t[q]
if(i[o]===-1){n=j+1
i[o]=j
j=n}m=i[o]
s&2&&C.f(t)
t[q]=m}}else j=r}else{t=null
r=1}if(k.b.b)return!1
l=k.an1(f,j,r,i)
if(l==null)return!1
k.as=t
k.at=j
k.ax=l
return!0},
IA(d,e,f,g,h,i){var x,w=d.a,v=d.b,u=g
do{u-=f
x=w[v+(e+u)]
x.a=h
x.b=i}while(u>0)},
akw(d,e,f){var x=D.b.cA(1,e-f)
for(;e<15;){x-=d[e]
if(x<=0)break;++e
x=x<<1>>>0}return e-f},
Sq(d,e){var x=D.b.cA(1,e-1)
for(;(d&x)>>>0!==0;)x=x>>>1
return x!==0?((d&x-1)>>>0)+x:d},
Qf(a2,a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=D.b.c_(1,a3),a0=new Int32Array(16),a1=new Int32Array(16)
for(x=0;x<a5;++x){w=a4[x]
if(w>15)return 0
a0[w]=a0[w]+1}if(a0[0]===a5)return 0
a1[1]=0
for(v=1;v<15;v=u){w=a0[v]
if(w>D.b.c_(1,v))return 0
u=v+1
a1[u]=a1[v]+w}for(w=a6!=null,x=0;x<a5;++x){t=a4[x]
if(t>0)if(w){s=a1[t]
if(s>=a5)return 0
a1[t]=s+1
a6.$flags&2&&C.f(a6)
a6[s]=x}else a1[t]=a1[t]+1}if(a1[15]===1){if(w){a2.toString
e.IA(a2,0,1,d,0,a6[0])}return d}r=d-1
for(q=0,p=1,o=1,x=0,v=1,n=2;v<=a3;++v,n=n<<1>>>0){o=o<<1>>>0
p+=o
o-=a0[v]
if(o<0)return 0
if(a2==null)continue
for(m=v&255;a0[v]>0;a0[v]=a0[v]-1,x=l){l=x+1
e.IA(a2,q,n,d,m,a6[x])
q=e.Sq(q,v)}}for(v=a3+1,w=a2!=null,k=d,j=0,i=4294967295,n=2;v<=15;++v,n=n<<1>>>0){o=o<<1>>>0
p+=o
o-=a0[v]
if(o<0)return 0
for(m=v-a3&255;a0[v]>0;a0[v]=a0[v]-1){h=(q&r)>>>0
if(h!==i){if(w)j+=k
g=e.akw(a0,v,a3)
k=D.b.cA(1,g)
d+=k
if(w){s=a2.a[a2.b+h]
s.a=g+a3&255
s.b=j-h}i=h}if(w){l=x+1
f=a6[x]
e.IA(a2,j+D.b.dv(q,a3),n,k,m,f)
x=l}q=e.Sq(q,v)}}if(p!==2*a1[15]-1)return 0
return d},
XF(d,e,f,g){var x,w,v,u,t,s,r=this.Qf(null,e,f,g,null)
if(r===0||d==null)return r
x=d.b
w=x.d
v=x.e
if(w+r>=v){u=new A.CY()
if(r>v)v=r
t=A.aLI(v)
u.e=v
u.b=u.a=t
d.b=d.b.c=u
x=u}s=new Uint16Array(g)
this.Qf(x.b,e,f,g,s)
return r},
an_(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.S_(new A.CY())
h.Px(128)
if(this.XF(h,7,d,19)===0)return!1
x=this.b
if(x.eo(1)!==0){w=2+x.eo(2+2*x.eo(3))
if(w>e)return!1}else w=e
for(v=f.$flags|0,u=8,t=0;t<e;w=s){s=w-1
if(w===0)break
if(x.a>=32)x.q0()
r=h.b.a
r.toString
q=r.a[r.b+(x.yz()&127)]
x.a=x.a+q.a
p=q.b
if(p<16){o=t+1
v&2&&C.f(f)
f[t]=p
if(p!==0)u=p
t=o}else{n=p-16
m=B.RQ[n]
l=B.S5[n]
k=x.eo(m)+l
if(t+k>e)return!1
j=p===16?u:0
for(;i=k-1,k>0;k=i,t=o){o=t+1
v&2&&C.f(f)
f[t]=j}}}return!0},
UR(d,e,f){var x,w,v,u,t,s,r=this.b,q=r.eo(1)
D.aV.eW(e,0,d,0)
if(q!==0){x=r.eo(1)
w=r.eo(r.eo(1)===0?1:8)
e.$flags&2&&C.f(e)
e[w]=1
if(x+1===2)e[r.eo(8)]=1
v=!0}else{u=new Int32Array(19)
t=r.eo(4)+4
for(s=0;s<t;++s)u[B.YK[s]]=r.eo(3)
v=this.an_(u,d,e)}return v&&!r.b?this.XF(f,8,e,d):0},
A3(d,e,f){var x=f.a,w=d.a
f.a=x+w
f.b=(f.b|D.b.c_(d.b,e))>>>0
return w},
aaS(d){var x,w,v,u,t,s,r,q=this
for(x=d.a,w=d.f,v=0;v<64;++v){u=w[v]
t=x[0]
s=t.a[t.b+v]
t=s.b
if(t>=256){u.a=s.a+256
u.b=t}else{u.b=u.a=0
r=D.b.dv(v,q.A3(s,8,u))
t=x[1]
r=D.b.dv(r,q.A3(t.a[t.b+r],16,u))
t=x[2]
r=D.b.dv(r,q.A3(t.a[t.b+r],0,u))
t=x[3]
D.b.dv(r,q.A3(t.a[t.b+r],24,u))}}},
an1(a5,a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a5>0,a2=a1?D.b.c_(1,a5):0,a3=B.Vn[a5],a4=a8==null
if(a4&&a6!==a7)return a0
x=new Int32Array(280+a2)
w=J.f7(a6,y.f)
for(v=0;v<a6;++v)w[v]=A.b3q()
a2=new A.S_(new A.CY())
a2.Px(a6*a3)
d.ay=a2
for(a2=!a4,u=0;u<a7;++u)if(a2&&a8[u]===-1)for(t=0;t<5;++t){s=B.ue[t]
if(d.UR(t===0&&a1?s+D.b.c_(1,a5):s,x,a0)===0)return a0}else{r=w[a4?u:a8[u]]
q=r.a
for(p=0,o=!0,n=0,t=0;t<5;++t){s=B.ue[t]
if(t===0&&a1)s+=D.b.c_(1,a5)
m=d.UR(s,x,d.ay)
l=d.ay.b
k=l.b
k.toString
q[t]=k
if(m===0)return a0
if(o&&B.a_m[t]===1)o=k.a[k.b].a===0
j=k.a
k=k.b
n+=j[k].a
l.d+=m
l.b=new A.CX(j,k+m)
if(t<=3){i=x[0]
for(h=1;h<s;++h){g=x[h]
if(g>i)i=g}p+=i}}r.b=o
r.d=!1
l=!1
if(o){k=q[1]
f=k.a[k.b].b
k=q[2]
e=k.a[k.b].b
k=q[3]
k=(k.a[k.b].b<<24|f<<16|e)>>>0
r.c=k
if(n===0){l=q[0]
l=l.a[l.b].b<256}if(l){r.d=!0
j=q[0]
r.c=(k|j.a[j.b].b<<8)>>>0}}l=!l&&p<6
r.e=l
if(l)d.aaS(r)}return w},
Az(d){var x
if(d<4)return d+1
x=D.b.I(d-2,1)
return D.b.c_(2+(d&1),x)+this.b.eo(x)+1},
UG(d,e){var x,w
if(e>120)return e-120
else{x=B.VV[e-1]
w=(x>>>4)*d+(8-(x&15))
return w>=1?w:1}},
ae4(d,e){var x,w,v,u,t,s,r=D.b.c_(1,D.b.dv(8,e.e)),q=new Uint32Array(r),p=e.d
p.toString
x=J.d5(D.aJ.gaj(p),0,null)
w=J.d5(D.aJ.gaj(q),0,null)
q[0]=e.d[0]
v=4*d
for(p=w.$flags|0,u=4;u<v;++u){t=x[u]
s=w[u-4]
p&2&&C.f(w)
w[u]=t+s&255}for(v=4*r;u<v;++u){p&2&&C.f(w)
w[u]=0}e.d=q
return!0},
vP(d,e,f,g,h){if(f===0||d==null)return 0
return d[e*D.b.I(h,f)+D.b.I(g,f)]},
Sj(d,e){var x=this,w=x.vP(x.as,x.Q,x.z,d,e)
return x.ax[w]}}
A.Su.prototype={
auT(d,e){return this.ae9(d,e)}}
A.Zm.prototype={
yz(){var x,w,v=this.a
if(v<32){x=this.d
w=D.b.d5(x[0],v)+((x[1]&B.nm[v])>>>0)*(B.nm[32-v]+1)}else{x=this.d
w=v===32?x[1]:D.b.d5(x[1],v-32)}return w},
eo(d){var x,w,v=this
if(!v.b&&d<25){x=v.yz()
w=B.nm[d]
v.a+=d
v.q0()
return(x&w)>>>0}else{v.b=!0
throw C.e(A.aI("Not enough data in input."))}},
q0(){var x,w,v,u=this,t=u.c,s=u.d,r=s.$flags|0,q=t.c
while(!0){if(!(u.a>=8&&t.d<q))break
x=J.k(t.a,t.d++)
w=s[0]
v=s[1]
r&2&&C.f(s)
s[0]=(w>>>8)+(v&255)*16777216
s[1]=v>>>8
s[1]=(s[1]|x*16777216)>>>0
u.a-=8}}}
A.aww.prototype={}
A.uD.prototype={
N(){return"VP8LImageTransformType."+this.b}}
A.Zn.prototype={
awZ(d,e,f,g,h,i){var x,w,v,u,t=this,s=t.b
switch(t.a.a){case 2:t.ar0(h,i,(e-d)*s)
break
case 0:t.azj(d,e,f,g,h,i)
if(e!==t.c){x=i-s
D.aJ.c4(h,x,x+s,f,i+(e-d-1)*s)}break
case 1:t.asa(d,e,f,g,h,i)
break
case 3:if(g===i&&t.e>0){w=e-d
v=w*A.pT(s,t.e)
u=i+w*s-v
D.aJ.c4(h,u,u+v,f,i)
t.YN(d,e,f,u,h,i)}else t.YN(d,e,f,g,h,i)
break}},
as9(d,e,f,g){var x,w,v,u,t,s,r=this.e,q=D.b.dv(8,r),p=this.b,o=this.d
if(q<8){x=D.b.c_(1,r)-1
w=D.b.c_(1,q)-1
for(v=d;v<e;++v)for(u=0,t=0;t<p;++t){if((t&x)>>>0===0){u=J.k(f.a,f.d);++f.d}r=o[(u&w)>>>0]
J.b7(g.a,g.d,r>>>8&255);++g.d
u=D.b.I(u,q)}}else for(v=d;v<e;++v)for(t=0;t<p;++t){s=J.k(f.a,f.d);++f.d
r=o[s]
J.b7(g.a,g.d,r>>>8&255);++g.d}},
YN(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=this.e,o=D.b.dv(8,p),n=this.b,m=this.d
if(o<8){x=D.b.c_(1,p)-1
w=D.b.c_(1,o)-1
for(p=h.$flags|0,v=d;v<e;++v)for(u=0,t=0;t<n;++t,i=r){if((t&x)>>>0===0){s=g+1
u=f[g]>>>8&255
g=s}r=i+1
q=m[u&w]
p&2&&C.f(h)
h[i]=q
u=D.b.dv(u,o)}}else for(p=h.$flags|0,v=d;v<e;++v)for(t=0;t<n;++t,i=r,g=s){r=i+1
s=g+1
q=m[f[g]>>>8&255]
p&2&&C.f(h)
h[i]=q}},
asa(a1,a2,a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.b,f=h.e,e=D.b.c_(1,f)-1,d=A.pT(g,f),a0=D.b.I(a1,h.e)*d
for(f=a5.$flags|0,x=a1;x<a2;){w=new Uint8Array(3)
for(v=a0,u=0;u<g;++u){if((u&e)>>>0===0){t=v+1
s=h.d[v]
w[0]=s&255
w[1]=s>>>8&255
w[2]=s>>>16&255
v=t}s=a3[a4+u]
r=s>>>8&255
q=w[0]
p=$.hq()
p.$flags&2&&C.f(p)
p[0]=q
q=$.i1()
o=q[0]
p[0]=r
n=q[0]
m=$.aOJ()
m.$flags&2&&C.f(m)
m[0]=o*n
l=$.aZw()
k=(s>>>16&255)+(l[0]>>>5)>>>0&255
p[0]=w[1]
o=q[0]
p[0]=r
m[0]=o*q[0]
j=l[0]
p[0]=w[2]
o=q[0]
p[0]=k
m[0]=o*q[0]
i=l[0]
f&2&&C.f(a5)
a5[a6+u]=(s&4278255360|k<<16|((s&255)+(j>>>5)>>>0)+(i>>>5)>>>0&255)>>>0}a6+=g
a4+=g;++x
if((x&e)>>>0===0)a0+=d}},
rA(d,e){return(((d&4278255360)>>>0)+((e&4278255360)>>>0)&4278255360|(d&16711935)+(e&16711935)&16711935)>>>0},
azj(a6,a7,a8,a9,b0,b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=4278190080,a5=a3.b
if(a6===0){x=a3.rA(a8[a9],a4)
b0.$flags&2&&C.f(b0)
b0[b1]=x
w=a9+1
v=b1+1
u=a5-1
t=b0[b1]
for(s=0;s<u;++s){t=a3.rA(a8[w+s],t)
b0[v+s]=t}a9+=a5
b1+=a5;++a6}x=a3.e
r=D.b.c_(1,x)
q=r-1
p=A.pT(a5,x)
o=D.b.I(a6,a3.e)*p
for(x=~q,n=b0.$flags|0,m=a6;m<a7;){l=b0[b1-a5]
k=a3.rA(a8[a9],l)
n&2&&C.f(b0)
b0[b1]=k
for(j=o,i=1;i<a5;i=e,j=h){h=j+1
g=a3.d[j]>>>8&15
f=$.b8C[g]
e=((i&x)>>>0)+r
if(e>a5)e=a5
d=a9+i
k=b1+i
a0=k-a5
a1=e-i
if(g===0)for(s=0;s<a1;++s)b0[k+s]=a3.rA(a8[d+s],a4)
else if(g===1){t=b0[k-1]
for(s=0;s<a1;++s){t=a3.rA(a8[d+s],t)
b0[k+s]=t}}else for(s=0;s<a1;++s){a2=k+s
l=f.$3(b0[a2-1],b0,a0+s)
b0[a2]=a3.rA(a8[d+s],l)}}a9+=a5
b1+=a5;++m
if((m&q)>>>0===0)o+=p}},
ar0(d,e,f){var x,w,v,u,t
for(x=d.$flags|0,w=0;w<f;++w){v=e+w
u=d[v]
t=u>>>8&255
x&2&&C.f(d)
d[v]=(u&4278255360|(u&16711935)+(t<<16|t)&16711935)>>>0}}}
A.awO.prototype={
gcm(){var x=this,w=x.d
if(w>1||x.e>=4||x.f>1||x.r!==0)return!1
return!0},
atN(d,e,f,g){var x,w,v,u,t,s,r=this
if(!r.gcm())return!1
x=B.a4G[r.e]
if(r.d===0){w=r.b
v=e*w
u=r.a
D.k.c4(g,v,v+f*w,u.a,u.d-u.b+v)}else{w=e+f
u=r.x
u===$&&C.a()
u.dx=g
t=u.c
if(r.y)w=u.acB(t.a,t.b,w)
else{s=u.cx
s.toString
u=u.GS(s,t.a,t.b,w,u.gauS())
w=u}if(!w)return!1}if(x!=null){w=r.b
x.$6(w,r.c,w,e,f,g)}if(r.f===1)if(!r.ad5(g,r.b,r.c,e,f))return!1
if(e+f>=r.c)r.w=!0
return!0},
ad5(d,e,f,g,h){if(e<=0||f<=0||g<0||h<0||g+h>f)return!1
return!0}}
A.Hs.prototype={
a9O(d,e){var x=this,w=d.bj()
x.w=0
x.f=(w&1)!==0
x.r=(w&2)===0
x.x=d.d-d.b
x.y=e-16}}
A.Sv.prototype={}
A.RX.prototype={}
A.RY.prototype={}
A.CX.prototype={
gp(d){return this.a.length-this.b},
h(d,e){return this.a[this.b+e]},
l(d,e,f){var x=this.a,w=this.b
x[D.b.a0(w,e)].a=f.gaBG()
x[D.b.a0(w,e)].b=f.gE(f)}}
A.CU.prototype={
h(d,e){return this.a[e]},
r_(d,e){var x,w=e.yz()&255,v=this.a,u=v[d],t=u.a[u.b+w].a-8
if(t>0){e.a+=8
x=e.yz()
v=v[d]
w=w+v.a[v.b+w].b+((x&D.b.cA(1,t)-1)>>>0)}else v=u
u=e.a
v=v.a[v.b+w]
e.a=u+v.a
return v.b}}
A.CY.prototype={}
A.S_.prototype={
Px(d){var x=this.b=this.a,w=A.aLI(d)
x.c=null
x.e=d
x.b=x.a=w}}
A.yS.prototype={
N(){return"WebPFormat."+this.b}}
A.Zz.prototype={
gbO(d){return this.a},
gbz(d){return this.b}}
A.Sw.prototype={}
A.awP.prototype={
kW(d){var x=A.ba(d,!1,null,0)
this.b=x
if(!this.Sg(x))return!1
return!0},
fF(d){var x,w=this,v=null,u=A.ba(d,!1,v,0)
w.b=u
if(!w.Sg(u))return v
u=new A.Sw(B.i_,C.b([],y.J))
w.a=u
x=w.b
x.toString
if(!w.XG(x,u))return v
u=w.a
switch(u.f.a){case 3:u.as=u.z.length
return u
case 2:x=w.b
x.toString
x.d=u.ay
if(!A.aN2(x,u).xg())return v
u=w.a
u.as=u.z.length
return u
case 1:x=w.b
x.toString
x.d=u.ay
if(!A.aN0(x,u).xg())return v
u=w.a
u.as=u.z.length
return u
case 0:throw C.e(A.aI("Unknown format for WebP"))}},
eI(d){var x,w,v,u,t=this,s=t.b
if(s==null||t.a==null)return null
x=t.a
if(x.e){x=x.z
w=x.length
if(d>=w)return null
v=x[d]
x=v.y
x===$&&C.a()
w=v.x
w===$&&C.a()
return t.Ri(s.pB(x,w),d)}w=x.f
if(w===B.l0){u=s.pB(x.ch,x.ay)
s=t.a
s.toString
return A.aN2(u,s).nw(0)}else if(w===B.p5){u=s.pB(x.ch,x.ay)
s=t.a
s.toString
return A.aN0(u,s).nw(0)}return null},
je(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null
if(d.fF(a2)==null)return a0
x=d.a.e
if(!x)return d.eI(0)
for(x=y.N,w=y.P,v=a0,u=v,t=u,s=0;r=d.a,s<r.as;++s){a3=r.z[s]
q=d.eI(s)
if(q==null)continue
r=a3.e
q.y=r
if(t==null||u==null){p=d.a
o=p.a
p=p.b
n=q.guy()
m=q.a
m=m==null?a0:m.gbF()
if(m==null)m=B.y
l=q.y
k=d.a
j=k.y
i=k.c
k=k.w
if(k.length===0)k=a0
else{k=new C.bW(k)
h=k.gp(0)
g=k.gp(0)
f=new A.rm(C.t(x,w))
f.fz(0,new A.fj(k,0,Math.min(h,g),0,!1))
k=f}e=d.a.r
t=A.dx(i,k,m,l,B.aa,p,e==null?a0:new A.mJ("",B.j7,e),j,n,a0,B.y,o,!1)
u=t}else{u=A.oE(u,!1,!1)
if(v!=null){p=v.f
p===$&&C.a()}else p=!1
if(p){p=v.a
o=v.b
n=v.c
m=v.d
A.aWO(u,!1,$.aYT(),p,p+n-1,o,o+m-1)}}u.y=r
r=a3.r
r===$&&C.a()
r=r?B.lz:B.i8
A.aNU(u,q,r,a0,a0,a3.a,a3.b,a0,a0,a0,a0)
if(u!==t)t.jQ(u)
v=a3}return t},
Ri(d,e){var x,w,v,u=null,t=C.b([],y.J),s=new A.Sw(B.i_,t)
if(!this.XG(d,s))return u
if(s.f===B.i_)return u
s.as=this.a.as
if(s.e){x=t.length
if(e>=x)return u
w=t[e]
t=w.y
t===$&&C.a()
x=w.x
x===$&&C.a()
return this.Ri(d.pB(t,x),e)}else{v=d.pB(s.ch,s.ay)
t=s.f
if(t===B.l0)return A.aN2(v,s).nw(0)
else if(t===B.p5)return A.aN0(v,s).nw(0)}return u},
Sg(d){if(d.ep(4)!=="RIFF")return!1
d.J()
if(d.ep(4)!=="WEBP")return!1
return!0},
XG(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l
for(x=d.c,w=d.b;d.d<x;){v=d.ep(4)
u=d.J()
t=u+1>>>1<<1>>>0
s=d.d
r=s-w
switch(v){case"VP8X":if(!this.aft(d,e))return!1
break
case"VP8 ":e.ay=r
e.ch=u
e.f=B.p5
break
case"VP8L":e.ay=r
e.ch=u
e.f=B.l0
break
case"ALPH":e.toString
s=d.a
q=d.e
p=J.at(s)
o=p.gp(s)
p=p.gp(s)
s=new A.fj(s,0,Math.min(o,p),0,q)
e.at=s
s.d=d.d
d.d+=t
break
case"ANIM":e.f=B.ans
n=d.J()
s=new Uint8Array(4)
s[0]=n>>>16&255
s[1]=n>>>8&255
s[2]=n&255
s[3]=n>>>24&255
e.c=new A.r0(s)
e.y=d.O()
break
case"ANMF":if(!this.aeL(d,e,u))return!1
break
case"ICCP":e.toString
m=d.en(u)
d.d=d.d+(m.c-m.d)
e.r=m.da()
break
case"EXIF":e.toString
e.w=d.ep(u)
break
case"XMP ":e.toString
d.ep(u)
break
default:d.d=s+t
break}s=d.d
l=t-(s-w-r)
if(l>0)d.d=s+l}if(!e.d)e.d=e.at!=null
return e.f!==B.i_},
aft(d,e){var x,w,v,u,t=d.bj()
if((t&192)!==0)return!1
x=D.b.I(t,4)
w=D.b.I(t,1)
if((t&1)!==0)return!1
if(d.l4()!==0)return!1
v=d.l4()
u=d.l4()
e.a=v+1
e.b=u+1
e.e=(w&1)!==0
e.d=(x&1)!==0
return!0},
aeL(d,e,f){var x=new A.Sv(d.l4()*2,d.l4()*2,d.l4()+1,d.l4()+1,d.l4())
x.a9O(d,f)
if(x.w!==0)return!1
e.z.push(x)
return!0}}
A.Se.prototype={
N(){return"IccProfileCompression."+this.b}}
A.mJ.prototype={}
A.Rr.prototype={
N(){return"FrameType."+this.b}}
A.mN.prototype={
ge5(){var x=this.x
return x===$?this.x=C.b([],y.g):x},
a9u(d,e,f,g){var x,w,v,u=this,t=d.gbF(),s=d.guy(),r=d.a
u.Ra(g,e,t,s,r==null?null:r.gcn())
t=d.b
if(t!=null)u.b=C.x8(t,y.N,y.I)
t=d.d
if(t!=null){s=y.N
u.d=C.x8(t,s,s)}u.ge5().push(u)
if(!f){x=d.ge5().length
for(t=y.g,w=1;w<x;++w){v=d.x
u.jQ(A.Sh((v===$?d.x=C.b([],t):v)[w],e,!1,g))}}},
a9t(d,e,f){var x,w,v,u,t=this,s=d.b
if(s!=null)t.b=C.x8(s,y.N,y.I)
s=d.d
if(s!=null){x=y.N
t.d=C.x8(s,x,x)}t.ge5().push(t)
if(!e&&d.ge5().length>1){w=d.ge5().length
for(s=y.g,v=1;v<w;++v){u=d.x
t.jQ(A.oE((u===$?d.x=C.b([],s):u)[v],!1,!1))}}},
jQ(d){var x=this
if(d==null)d=A.oE(x,!0,!0)
d.z=x.ge5().length
if(x.ge5().length===0||D.d.gag(x.ge5())!==d)x.ge5().push(d)
return d},
BY(){return this.jQ(null)},
Ra(d,e,f,g,h){var x,w,v=this,u=null
switch(f.a){case 0:if(h==null){x=D.c.eE(d*g/8)
w=new A.wN($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.c.eE(d/8)
w=new A.wN($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 1:if(h==null){x=D.c.eE(d*(g<<1>>>0)/8)
w=new A.wP($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.c.eE(d/4)
w=new A.wP($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 2:if(h==null){if(g===2)x=d
else if(g===4)x=d*2
else x=g===3?D.c.eE(d*1.5):D.c.eE(d/2)
w=new A.wR($,x,u,d,e,g)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}else{x=D.c.eE(d/2)
w=new A.wR($,x,h,d,e,1)
x=Math.max(x*e,1)
w.d=new Uint8Array(x)
v.a=w}break
case 3:if(h==null)v.a=A.aRu(d,e,g)
else v.a=new A.wS(new Uint8Array(d*e),h,d,e,1)
break
case 4:x=d*e
if(h==null)v.a=new A.wO(new Uint16Array(x*g),u,d,e,g)
else v.a=new A.wO(new Uint16Array(x),h,d,e,1)
break
case 5:v.a=A.b3F(d,e,g)
break
case 6:v.a=new A.D9(new Int8Array(d*e*g),d,e,g)
break
case 7:v.a=new A.D7(new Int16Array(d*e*g),d,e,g)
break
case 8:v.a=new A.D8(new Int32Array(d*e*g),d,e,g)
break
case 9:v.a=A.b3D(d,e,g)
break
case 10:v.a=A.b3E(d,e,g)
break
case 11:v.a=new A.D6(new Float64Array(d*e*4*g),d,e,g)
break}},
j(d){var x=this
return"Image("+x.gbO(0)+", "+x.gbz(0)+", "+x.gbF().b+", "+x.guy()+")"},
gbO(d){var x=this.a
x=x==null?null:x.a
return x==null?0:x},
gbz(d){var x=this.a
x=x==null?null:x.b
return x==null?0:x},
gbF(){var x=this.a
x=x==null?null:x.gbF()
return x==null?B.y:x},
goT(){var x=this.e
return x==null?this.e=new A.rm(C.t(y.N,y.P)):x},
a46(d,e){var x=this,w=x.b;(w==null?x.b=C.t(y.N,y.I):w).l(0,d,e)
if(x.b.a===0)x.b=null},
gU(d){var x=this.a
return x.gU(x)},
gaj(d){var x=this.a
x=x==null?null:x.gaj(x)
if(x==null)x=D.k.gaj(new Uint8Array(0))
return x},
da(){var x=this.a
x=x==null?null:J.e3(x.gaj(x))
return x==null?J.e3(this.gaj(0)):x},
guy(){var x=this.a
x=x==null?null:x.gcn()
x=x==null?null:x.b
if(x==null){x=this.a
x=x==null?null:x.c}return x==null?0:x},
gxL(){var x=this.a
return(x==null?null:x.gcn())!=null},
a0j(d,e){return d>=0&&e>=0&&d<this.gbO(0)&&e<this.gbz(0)},
iB(d,e,f,g){var x=this.a
x=x==null?null:x.iB(d,e,f,g)
if(x==null)x=new A.ka(new Uint8Array(0))
return x},
bY(d,e,f){var x=this.a
x=x==null?null:x.bY(d,e,f)
return x==null?new A.cE():x},
iC(d,e){return this.bY(d,e,null)},
f2(d,e){if(d<0||d>=this.gbO(0)||e<0||e>=this.gbz(0))return new A.cE()
return this.bY(d,e,null)},
a3s(d,e,f){switch(f.a){case 0:return this.f2(D.c.C(d),D.c.C(e))
case 1:case 3:return this.a3t(d,e)
case 2:return this.a3r(d,e)}},
a3t(d,e){var x,w,v,u,t,s,r=this,q=D.c.C(d),p=q-(d>=0?0:1),o=p+1
q=D.c.C(e)
x=q-(e>=0?0:1)
w=x+1
q=new A.aiu(d-p,e-x)
v=r.f2(p,x)
u=w>=r.gbz(0)?v:r.f2(p,w)
t=o>=r.gbO(0)?v:r.f2(o,x)
s=o>=r.gbO(0)||w>=r.gbz(0)?v:r.f2(o,w)
return r.iB(q.$4(v.gX(v),t.gX(t),u.gX(u),s.gX(s)),q.$4(v.ga5(),t.ga5(),u.ga5(),s.ga5()),q.$4(v.ga6(v),t.ga6(t),u.ga6(u),s.ga6(s)),q.$4(v.ga4(v),t.ga4(t),u.ga4(u),s.ga4(s)))},
a3r(d0,d1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=D.c.C(d0),c6=c5-(d0>=0?0:1),c7=c6-1,c8=c6+1,c9=c6+2
c5=D.c.C(d1)
x=c5-(d1>=0?0:1)
w=x-1
v=x+1
u=x+2
t=d0-c6
s=d1-x
c5=new A.ait()
r=c4.f2(c6,x)
q=c7<0
p=!q
o=!p||w<0?r:c4.f2(c7,w)
n=q?r:c4.f2(c6,w)
m=w<0
l=m||c8>=c4.gbO(0)?r:c4.f2(c8,w)
k=c9>=c4.gbO(0)||m?r:c4.f2(c9,w)
j=c5.$5(t,o.gX(o),n.gX(n),l.gX(l),k.gX(k))
i=c5.$5(t,o.ga5(),n.ga5(),l.ga5(),k.ga5())
h=c5.$5(t,o.ga6(o),n.ga6(n),l.ga6(l),k.ga6(k))
g=c5.$5(t,o.ga4(o),n.ga4(n),l.ga4(l),k.ga4(k))
f=q?r:c4.f2(c7,x)
e=c8>=c4.gbO(0)?r:c4.f2(c8,x)
d=c9>=c4.gbO(0)?r:c4.f2(c9,x)
a0=c5.$5(t,f.gX(f),r.gX(r),e.gX(e),d.gX(d))
a1=c5.$5(t,f.ga5(),r.ga5(),e.ga5(),d.ga5())
a2=c5.$5(t,f.ga6(f),r.ga6(r),e.ga6(e),d.ga6(d))
a3=c5.$5(t,f.ga4(f),r.ga4(r),e.ga4(e),d.ga4(d))
a4=!p||v>=c4.gbz(0)?r:c4.f2(c7,v)
a5=v>=c4.gbz(0)?r:c4.f2(c6,v)
a6=c8>=c4.gbO(0)||v>=c4.gbz(0)?r:c4.f2(c8,v)
a7=c9>=c4.gbO(0)||v>=c4.gbz(0)?r:c4.f2(c9,v)
a8=c5.$5(t,a4.gX(a4),a5.gX(a5),a6.gX(a6),a7.gX(a7))
a9=c5.$5(t,a4.ga5(),a5.ga5(),a6.ga5(),a7.ga5())
b0=c5.$5(t,a4.ga6(a4),a5.ga6(a5),a6.ga6(a6),a7.ga6(a7))
b1=c5.$5(t,a4.ga4(a4),a5.ga4(a5),a6.ga4(a6),a7.ga4(a7))
b2=!p||u>=c4.gbz(0)?r:c4.f2(c7,u)
b3=u>=c4.gbz(0)?r:c4.f2(c6,u)
b4=c8>=c4.gbO(0)||u>=c4.gbz(0)?r:c4.f2(c8,u)
b5=c9>=c4.gbO(0)||u>=c4.gbz(0)?r:c4.f2(c9,u)
b6=c5.$5(t,b2.gX(b2),b3.gX(b3),b4.gX(b4),b5.gX(b5))
b7=c5.$5(t,b2.ga5(),b3.ga5(),b4.ga5(),b5.ga5())
b8=c5.$5(t,b2.ga6(b2),b3.ga6(b3),b4.ga6(b4),b5.ga6(b5))
b9=c5.$5(t,b2.ga4(b2),b3.ga4(b3),b4.ga4(b4),b5.ga4(b5))
c0=c5.$5(s,j,a0,a8,b6)
c1=c5.$5(s,i,a1,a9,b7)
c2=c5.$5(s,h,a2,b0,b8)
c3=c5.$5(s,g,a3,b1,b9)
return c4.iB(D.c.C(c0),D.c.C(c1),D.c.C(c2),D.c.C(c3))},
pw(d,e,f){var x
if(y.dv.b(f))if(f.giM(f).gcn()!=null)if(this.gxL()){x=this.a
if(x!=null)x.dK(d,e,f.gbT(f),0,0)
return}x=this.a
if(x!=null)x.f4(d,e,f.gX(f),f.ga5(),f.ga6(f),f.ga4(f))},
dK(d,e,f,g,h){var x=this.a
return x==null?null:x.dK(d,e,f,g,h)},
gb1(){var x=this.a
x=x==null?null:x.gb1()
return x==null?0:x},
iH(d,e){var x=this.a
return x==null?null:x.iH(0,e)},
ab(d){return this.iH(0,null)},
YZ(a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null
if(a5==null)a5=a3.gbF()
x=B.E2.h(0,a5)
w=!1
if(a5===a3.gbF())if(a7===a3.guy()){v=a3.a
w=(v==null?a4:v.gcn())==null}if(w){u=A.oE(a3,!1,!1)
return u}for(w=a3.ge5(),v=w.length,t=y.N,s=y.p,r=a4,q=0;q<w.length;w.length===v||(0,C.z)(w),++q){p=w[q]
o=p.a
n=o==null
m=n?a4:o.a
if(m==null)m=0
o=n?a4:o.b
if(o==null)o=0
n=p.e
n=n==null?a4:A.Cm(n)
l=p.c
if(l==null)l=a4
else{k=l.a
j=l.b
l=l.c
l=new A.mJ(k,j,new Uint8Array(l.subarray(0,C.kU(0,a4,l.length))))}k=p.f
k=k==null?a4:new A.ka(new Uint8Array(C.bn(k.a)))
j=p.w
i=p.r
u=A.dx(k,n,a5,p.y,j,o,l,i,a7,a4,B.y,m,!1)
o=p.d
u.d=o!=null?C.x8(o,t,t):a4
if(r!=null)r.jQ(u)
else r=u
o=u.a
h=o==null?a4:o.gcn()
o=u.a
o=o==null?a4:o.gcn()
g=o==null?a4:o.gbF()
if(g==null)g=a5
o=p.a
if(h!=null){f=C.t(s,s)
e=o==null?a4:o.bY(0,0,a4)
if(e==null)e=new A.cE()
for(o=u.a,o=o.gU(o),d=a4,a0=0;o.q();){a1=o.gM(o)
a2=A.aXk(D.c.fZ(e.ge6()*255),D.c.fZ(e.gdX()*255),D.c.fZ(e.ge4()*255),0)
if(f.aq(0,a2)){n=f.h(0,a2)
n.toString
a1.sbT(0,n)}else{f.l(0,a2,a0)
a1.sbT(0,a0)
d=A.aNW(e,x,g,a7,d)
h.kh(a0,d.gX(d),d.ga5(),d.ga6(d));++a0}e.q()}}else{e=o==null?a4:o.bY(0,0,a4)
if(e==null)e=new A.cE()
for(o=u.a,o=o.gU(o);o.q();){A.aNW(e,x,a4,a4,o.gM(o))
e.q()}}if(a6)break}r.toString
return r},
YY(d){return this.YZ(null,!1,d)},
ar7(d){var x,w,v,u
if(this.d==null){x=y.N
this.d=C.t(x,x)}for(x=new C.dJ(d,d.r,d.e);x.q();){w=x.d
v=this.d
v.toString
u=d.h(0,w)
u.toString
v.l(0,w,u)}},
acm(d,e,f){var x,w=65536
switch(e.a){case 0:return null
case 1:return null
case 2:return null
case 3:x=d===B.b_?w:256
return new A.lB(new Uint8Array(x*f),x,f)
case 4:x=d===B.b_?w:256
return new A.VF(new Uint16Array(x*f),x,f)
case 5:x=d===B.b_?w:256
return new A.VG(new Uint32Array(x*f),x,f)
case 6:x=d===B.b_?w:256
return new A.VE(new Int8Array(x*f),x,f)
case 7:x=d===B.b_?w:256
return new A.VC(new Int16Array(x*f),x,f)
case 8:x=d===B.b_?w:256
return new A.VD(new Int32Array(x*f),x,f)
case 9:x=d===B.b_?w:256
return new A.Vz(new Uint16Array(x*f),x,f)
case 10:x=d===B.b_?w:256
return new A.VA(new Float32Array(x*f),x,f)
case 11:x=d===B.b_?w:256
return new A.VB(new Float64Array(x*f),x,f)}}}
A.fN.prototype={
gcn(){return null}}
A.wL.prototype={
kE(d,e){var x=this,w=x.d
if(e)w=new Uint16Array(w.length)
else w=new Uint16Array(C.bn(w))
return new A.wL(w,x.a,x.b,x.c)},
gbF(){return B.db},
gaj(d){return D.bu.gaj(this.d)},
gU(d){return A.aMe(this)},
kf(d,e,f,g,h){return A.kw(A.aMe(this),e,f,g,h)},
gp(d){return this.d.byteLength},
gb1(){return 1},
iB(d,e,f,g){var x=new Uint16Array(4),w=new A.vQ(x)
x[0]=A.cV(d)
x[1]=A.cV(e)
x[2]=A.cV(f)
x[3]=A.cV(g)
x=w
return x},
bY(d,e,f){if(f==null||!(f instanceof A.tv)||f.d!==this)f=A.aMe(this)
f.dg(0,d,e)
return f},
iC(d,e){return this.bY(d,e,null)},
hF(d,e,f){var x=this.c,w=this.d,v=A.cV(f)
w.$flags&2&&C.f(w)
w[e*this.a*x+d*x]=v},
dK(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=A.cV(f)
v.$flags&2&&C.f(v)
v[w]=u
if(x>1){v[w+1]=A.cV(g)
if(x>2)v[w+2]=A.cV(h)}},
f4(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=A.cV(f)
v.$flags&2&&C.f(v)
v[w]=u
if(x>1){v[w+1]=A.cV(g)
if(x>2){v[w+2]=A.cV(h)
if(x>3)v[w+3]=A.cV(i)}}},
j(d){return"ImageDataFloat16("+this.a+", "+this.b+", "+this.c+")"},
iH(d,e){}}
A.wM.prototype={
kE(d,e){var x=this,w=x.d
if(e)w=new Float32Array(w.length)
else w=new Float32Array(C.bn(w))
return new A.wM(w,x.a,x.b,x.c)},
gbF(){return B.dS},
gaj(d){return D.e5.gaj(this.d)},
gU(d){return A.aMf(this)},
kf(d,e,f,g,h){return A.kw(A.aMf(this),e,f,g,h)},
gp(d){return this.d.byteLength},
gb1(){return 1},
iB(d,e,f,g){var x=new Float32Array(4),w=new A.vR(x)
x[0]=d
x[1]=e
x[2]=f
x[3]=g
x=w
return x},
bY(d,e,f){if(f==null||!(f instanceof A.tw)||f.d!==this)f=A.aMf(this)
f.dg(0,d,e)
return f},
iC(d,e){return this.bY(d,e,null)},
hF(d,e,f){var x=this.c,w=this.d
w.$flags&2&&C.f(w)
w[e*this.a*x+d*x]=f},
dK(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&C.f(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2)v[w+2]=h}},
f4(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&C.f(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2){v[w+2]=h
if(x>3)v[w+3]=i}}},
j(d){return"ImageDataFloat32("+this.a+", "+this.b+", "+this.c+")"},
iH(d,e){}}
A.D6.prototype={
kE(d,e){var x=this,w=x.d
if(e)w=new Float64Array(w.length)
else w=new Float64Array(C.bn(w))
return new A.D6(w,x.a,x.b,x.c)},
gbF(){return B.eN},
gaj(d){return D.e6.gaj(this.d)},
gp(d){return this.d.byteLength},
gU(d){return A.aMg(this)},
kf(d,e,f,g,h){return A.kw(A.aMg(this),e,f,g,h)},
gb1(){return 1},
iB(d,e,f,g){var x=new Float64Array(4),w=new A.vS(x)
x[0]=d
x[1]=e
x[2]=f
x[3]=g
x=w
return x},
bY(d,e,f){if(f==null||!(f instanceof A.tx)||f.d!==this)f=A.aMg(this)
f.dg(0,d,e)
return f},
iC(d,e){return this.bY(d,e,null)},
hF(d,e,f){var x=this.c,w=this.d
w.$flags&2&&C.f(w)
w[e*this.a*x+d*x]=f},
dK(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&C.f(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2)v[w+2]=h}},
f4(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d
v.$flags&2&&C.f(v)
v[w]=f
if(x>1){v[w+1]=g
if(x>2){v[w+2]=h
if(x>3)v[w+3]=i}}},
j(d){return"ImageDataFloat64("+this.a+", "+this.b+", "+this.c+")"},
iH(d,e){}}
A.D7.prototype={
kE(d,e){var x=this,w=x.d
if(e)w=new Int16Array(w.length)
else w=new Int16Array(C.bn(w))
return new A.D7(w,x.a,x.b,x.c)},
gbF(){return B.eP},
gaj(d){return D.hq.gaj(this.d)},
gU(d){return A.aMh(this)},
kf(d,e,f,g,h){return A.kw(A.aMh(this),e,f,g,h)},
gp(d){return this.d.byteLength},
gb1(){return 32767},
iB(d,e,f,g){var x=D.c.C(d),w=D.c.C(e),v=D.c.C(f),u=D.c.C(g),t=new Int16Array(4),s=new A.vT(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
bY(d,e,f){if(f==null||!(f instanceof A.ty)||f.d!==this)f=A.aMh(this)
f.dg(0,d,e)
return f},
iC(d,e){return this.bY(d,e,null)},
hF(d,e,f){var x=this.c,w=this.d,v=D.c.C(f)
w.$flags&2&&C.f(w)
w[e*this.a*x+d*x]=v},
dK(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.c.C(f)
v.$flags&2&&C.f(v)
v[w]=u
if(x>1){v[w+1]=D.c.C(g)
if(x>2)v[w+2]=D.c.C(h)}},
f4(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.c.C(f)
v.$flags&2&&C.f(v)
v[w]=u
if(x>1){v[w+1]=D.c.C(g)
if(x>2){v[w+2]=D.c.C(h)
if(x>3)v[w+3]=D.c.C(i)}}},
j(d){return"ImageDataInt16("+this.a+", "+this.b+", "+this.c+")"},
iH(d,e){}}
A.D8.prototype={
kE(d,e){var x=this,w=x.d
if(e)w=new Int32Array(w.length)
else w=new Int32Array(C.bn(w))
return new A.D8(w,x.a,x.b,x.c)},
gbF(){return B.eQ},
gaj(d){return D.aV.gaj(this.d)},
gU(d){return A.aMi(this)},
kf(d,e,f,g,h){return A.kw(A.aMi(this),e,f,g,h)},
gp(d){return this.d.byteLength},
gb1(){return 2147483647},
iB(d,e,f,g){var x=D.c.C(d),w=D.c.C(e),v=D.c.C(f),u=D.c.C(g),t=new Int32Array(4),s=new A.vU(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
bY(d,e,f){if(f==null||!(f instanceof A.tz)||f.d!==this)f=A.aMi(this)
f.dg(0,d,e)
return f},
iC(d,e){return this.bY(d,e,null)},
hF(d,e,f){var x=this.c,w=this.d,v=D.c.C(f)
w.$flags&2&&C.f(w)
w[e*this.a*x+d*x]=v},
dK(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.c.C(f)
v.$flags&2&&C.f(v)
v[w]=u
if(x>1){v[w+1]=D.c.C(g)
if(x>2)v[w+2]=D.c.C(h)}},
f4(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.c.C(f)
v.$flags&2&&C.f(v)
v[w]=u
if(x>1){v[w+1]=D.c.C(g)
if(x>2){v[w+2]=D.c.C(h)
if(x>3)v[w+3]=D.c.C(i)}}},
j(d){return"ImageDataInt32("+this.a+", "+this.b+", "+this.c+")"},
iH(d,e){}}
A.D9.prototype={
kE(d,e){var x=this,w=x.d
if(e)w=new Int8Array(w.length)
else w=new Int8Array(C.bn(w))
return new A.D9(w,x.a,x.b,x.c)},
gbF(){return B.eO},
gaj(d){return D.hr.gaj(this.d)},
gU(d){return A.aMj(this)},
kf(d,e,f,g,h){return A.kw(A.aMj(this),e,f,g,h)},
gp(d){return this.d.byteLength},
gb1(){return 127},
iB(d,e,f,g){var x=D.c.C(d),w=D.c.C(e),v=D.c.C(f),u=D.c.C(g),t=new Int8Array(4),s=new A.vV(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
bY(d,e,f){if(f==null||!(f instanceof A.tA)||f.d!==this)f=A.aMj(this)
f.dg(0,d,e)
return f},
iC(d,e){return this.bY(d,e,null)},
hF(d,e,f){var x=this.c,w=this.d,v=D.c.C(f)
w.$flags&2&&C.f(w)
w[e*(this.a*x)+d*x]=v},
dK(d,e,f,g,h){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.c.C(f)
v.$flags&2&&C.f(v)
v[w]=u
if(x>1){v[w+1]=D.c.C(g)
if(x>2)v[w+2]=D.c.C(h)}},
f4(d,e,f,g,h,i){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.c.C(f)
v.$flags&2&&C.f(v)
v[w]=u
if(x>1){v[w+1]=D.c.C(g)
if(x>2){v[w+2]=D.c.C(h)
if(x>3)v[w+3]=D.c.C(i)}}},
j(d){return"ImageDataInt8("+this.a+", "+this.b+", "+this.c+")"},
iH(d,e){}}
A.wN.prototype={
aBm(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&C.by()
this.d=x},
kE(d,e){var x,w=this,v=w.d
if(e){v===$&&C.a()
v=new Uint8Array(v.length)}else{v===$&&C.a()
v=new Uint8Array(C.bn(v))}x=w.f
x=x==null?null:x.c7(0)
return new A.wN(v,w.e,x,w.a,w.b,w.c)},
gbF(){return B.ch},
gp(d){var x=this.d
x===$&&C.a()
return x.byteLength},
gb1(){var x=this.f
x=x==null?null:x.gb1()
return x==null?1:x},
gaj(d){var x=this.d
x===$&&C.a()
return D.k.gaj(x)},
gU(d){return A.EO(this)},
kf(d,e,f,g,h){return A.kw(A.EO(this),e,f,g,h)},
iB(d,e,f,g){var x=new A.vW(4,0)
x.dZ(D.c.C(d),D.c.C(e),D.c.C(f),D.c.C(g))
return x},
bY(d,e,f){if(f==null||!(f instanceof A.tB)||f.f!==this)f=A.EO(this)
f.dg(0,d,e)
return f},
iC(d,e){return this.bY(d,e,null)},
hF(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.EO(w):x).dg(0,d,e)
w.r.fk(0,f)},
dK(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.EO(w):x).dg(0,d,e)
w.r.fh(f,g,h)},
f4(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.EO(w):x).dg(0,d,e)
w.r.dZ(f,g,h,i)},
j(d){return"ImageDataUint1("+this.a+", "+this.b+", "+this.c+")"},
iH(d,e){},
gcn(){return this.f}}
A.wO.prototype={
kE(d,e){var x,w=this,v=w.d
if(e)v=new Uint16Array(v.length)
else v=new Uint16Array(C.bn(v))
x=w.e
x=x==null?null:x.c7(0)
return new A.wO(v,x,w.a,w.b,w.c)},
gbF(){return B.b_},
gaj(d){return D.bu.gaj(this.d)},
gb1(){var x=this.e
x=x==null?null:x.gb1()
return x==null?65535:x},
gU(d){return A.aMk(this)},
kf(d,e,f,g,h){return A.kw(A.aMk(this),e,f,g,h)},
gp(d){return this.d.byteLength},
iB(d,e,f,g){var x=D.c.C(d),w=D.c.C(e),v=D.c.C(f),u=D.c.C(g),t=new Uint16Array(4),s=new A.vX(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
bY(d,e,f){if(f==null||!(f instanceof A.tC)||f.d!==this)f=A.aMk(this)
f.dg(0,d,e)
return f},
iC(d,e){return this.bY(d,e,null)},
hF(d,e,f){var x=this.c,w=this.d,v=D.c.C(f)
w.$flags&2&&C.f(w)
w[e*this.a*x+d*x]=v},
dK(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.c.C(f)
v.$flags&2&&C.f(v)
v[w]=u
if(x>1){v[w+1]=D.c.C(g)
if(x>2)v[w+2]=D.c.C(h)}},
f4(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.c.C(f)
v.$flags&2&&C.f(v)
v[w]=u
if(x>1){v[w+1]=D.c.C(g)
if(x>2){v[w+2]=D.c.C(h)
if(x>3)v[w+3]=D.c.C(i)}}},
j(d){return"ImageDataUint16("+this.a+", "+this.b+", "+this.c+")"},
iH(d,e){},
gcn(){return this.e}}
A.wP.prototype={
aBn(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&C.by()
this.d=x},
kE(d,e){var x,w=this,v=w.d
if(e){v===$&&C.a()
v=new Uint8Array(v.length)}else{v===$&&C.a()
v=new Uint8Array(C.bn(v))}x=w.f
x=x==null?null:x.c7(0)
return new A.wP(v,w.e,x,w.a,w.b,w.c)},
gbF(){return B.cG},
gaj(d){var x=this.d
x===$&&C.a()
return D.k.gaj(x)},
gU(d){return A.EP(this)},
kf(d,e,f,g,h){return A.kw(A.EP(this),e,f,g,h)},
gp(d){var x=this.d
x===$&&C.a()
return x.byteLength},
gb1(){var x=this.f
x=x==null?null:x.gb1()
return x==null?3:x},
iB(d,e,f,g){var x=new A.vY(4,0)
x.dZ(D.c.C(d),D.c.C(e),D.c.C(f),D.c.C(g))
return x},
bY(d,e,f){if(f==null||!(f instanceof A.tD)||f.f!==this)f=A.EP(this)
f.dg(0,d,e)
return f},
iC(d,e){return this.bY(d,e,null)},
hF(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.EP(w):x).dg(0,d,e)
w.r.fl(0,f)},
dK(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.EP(w):x).dg(0,d,e)
w.r.fh(f,g,h)},
f4(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.EP(w):x).dg(0,d,e)
w.r.dZ(f,g,h,i)},
j(d){return"ImageDataUint2("+this.a+", "+this.b+", "+this.c+")"},
iH(d,e){},
gcn(){return this.f}}
A.wQ.prototype={
kE(d,e){var x=this,w=x.d
if(e)w=new Uint32Array(w.length)
else w=new Uint32Array(C.bn(w))
return new A.wQ(w,x.a,x.b,x.c)},
gbF(){return B.dT},
gaj(d){return D.aJ.gaj(this.d)},
gb1(){return 4294967295},
gU(d){return A.aMl(this)},
kf(d,e,f,g,h){return A.kw(A.aMl(this),e,f,g,h)},
gp(d){return this.d.byteLength},
iB(d,e,f,g){var x=D.c.C(d),w=D.c.C(e),v=D.c.C(f),u=D.c.C(g),t=new Uint32Array(4),s=new A.vZ(t)
t[0]=x
t[1]=w
t[2]=v
t[3]=u
x=s
return x},
bY(d,e,f){if(f==null||!(f instanceof A.tE)||f.d!==this)f=A.aMl(this)
f.dg(0,d,e)
return f},
iC(d,e){return this.bY(d,e,null)},
hF(d,e,f){var x=this.c,w=this.d,v=D.c.C(f)
w.$flags&2&&C.f(w)
w[e*this.a*x+d*x]=v},
dK(d,e,f,g,h){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.c.C(f)
v.$flags&2&&C.f(v)
v[w]=u
if(x>1){v[w+1]=D.c.C(g)
if(x>2)v[w+2]=D.c.C(h)}},
f4(d,e,f,g,h,i){var x=this.c,w=e*this.a*x+d*x,v=this.d,u=D.c.C(f)
v.$flags&2&&C.f(v)
v[w]=u
if(x>1){v[w+1]=D.c.C(g)
if(x>2){v[w+2]=D.c.C(h)
if(x>3)v[w+3]=D.c.C(i)}}},
j(d){return"ImageDataUint32("+this.a+", "+this.b+", "+this.c+")"},
iH(d,e){}}
A.wR.prototype={
aBo(d,e,f){var x=Math.max(this.e*e,1)
x=new Uint8Array(x)
this.d!==$&&C.by()
this.d=x},
kE(d,e){var x,w=this,v=w.d
if(e){v===$&&C.a()
v=new Uint8Array(v.length)}else{v===$&&C.a()
v=new Uint8Array(C.bn(v))}x=w.f
x=x==null?null:x.c7(0)
return new A.wR(v,w.e,x,w.a,w.b,w.c)},
gbF(){return B.cH},
gaj(d){var x=this.d
x===$&&C.a()
return D.k.gaj(x)},
gU(d){return A.EQ(this)},
kf(d,e,f,g,h){return A.kw(A.EQ(this),e,f,g,h)},
gp(d){var x=this.d
x===$&&C.a()
return x.byteLength},
gb1(){var x=this.f
x=x==null?null:x.gb1()
return x==null?15:x},
iB(d,e,f,g){var x=D.c.C(d),w=D.c.C(e),v=D.c.C(f),u=D.c.C(g),t=new A.w_(4,new Uint8Array(2))
t.dZ(x,w,v,u)
x=t
return x},
bY(d,e,f){if(f==null||!(f instanceof A.tF)||f.e!==this)f=A.EQ(this)
f.dg(0,d,e)
return f},
iC(d,e){return this.bY(d,e,null)},
hF(d,e,f){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.EQ(w):x).dg(0,d,e)
w.r.fm(0,f)},
dK(d,e,f,g,h){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.EQ(w):x).dg(0,d,e)
w.r.fh(f,g,h)},
f4(d,e,f,g,h,i){var x,w=this
if(w.c<1)return
x=w.r;(x==null?w.r=A.EQ(w):x).dg(0,d,e)
w.r.dZ(f,g,h,i)},
j(d){return"ImageDataUint4("+this.a+", "+this.b+", "+this.c+")"},
iH(d,e){},
gcn(){return this.f}}
A.wS.prototype={
kE(d,e){var x,w=this,v=w.d
if(e)v=new Uint8Array(v.length)
else v=new Uint8Array(C.bn(v))
x=w.e
x=x==null?null:x.c7(0)
return new A.wS(v,x,w.a,w.b,w.c)},
gbF(){return B.y},
gaj(d){return D.k.gaj(this.d)},
gU(d){return A.aoq(this)},
kf(d,e,f,g,h){return A.kw(A.aoq(this),e,f,g,h)},
gp(d){return this.d.byteLength},
gb1(){var x=this.e
x=x==null?null:x.gb1()
return x==null?255:x},
iB(d,e,f,g){var x=A.aQ1(D.c.C(D.c.b5(d,0,255)),D.c.C(D.c.b5(e,0,255)),D.c.C(D.c.b5(f,0,255)),D.c.C(D.c.b5(g,0,255)))
return x},
bY(d,e,f){if(f==null||!(f instanceof A.tG)||f.d!==this)f=A.aoq(this)
f.dg(0,d,e)
return f},
iC(d,e){return this.bY(d,e,null)},
hF(d,e,f){var x=this.c,w=this.d,v=D.c.C(f)
w.$flags&2&&C.f(w)
w[e*(this.a*x)+d*x]=v},
dK(d,e,f,g,h){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.c.C(f)
v.$flags&2&&C.f(v)
v[w]=u
if(x>1){v[w+1]=D.c.C(g)
if(x>2)v[w+2]=D.c.C(h)}},
f4(d,e,f,g,h,i){var x=this.c,w=e*(this.a*x)+d*x,v=this.d,u=D.c.C(f)
v.$flags&2&&C.f(v)
v[w]=u
if(x>1){v[w+1]=D.c.C(g)
if(x>2){v[w+2]=D.c.C(h)
if(x>3)v[w+3]=D.c.C(i)}}},
j(d){return"ImageDataUint8("+this.a+", "+this.b+", "+this.c+")"},
iH(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=e==null?l:A.aNW(e,l,B.y,l,l),j=m.c
if(j===1){x=k==null?0:D.b.b5(C.bc(k.gX(k)),0,255)
j=m.d
D.k.eW(j,0,j.length,x)}else if(j===2){j=k==null
x=j?0:D.b.b5(C.bc(k.gX(k)),0,255)
w=j?0:D.b.b5(C.bc(k.ga5()),0,255)
v=J.b_Z(D.k.gaj(m.d),0,null)
D.bu.eW(v,0,v.length,(w<<8|x)>>>0)}else if(j===4){j=k==null
x=j?0:D.b.b5(C.bc(k.gX(k)),0,255)
w=j?0:D.b.b5(C.bc(k.ga5()),0,255)
u=j?0:D.b.b5(C.bc(k.ga6(k)),0,255)
t=j?0:D.b.b5(C.bc(k.ga4(k)),0,255)
s=J.i2(D.k.gaj(m.d),0,null)
D.aJ.eW(s,0,s.length,(t<<24|u<<16|w<<8|x)>>>0)}else{j=k==null
x=j?0:D.b.b5(C.bc(k.gX(k)),0,255)
w=j?0:D.b.b5(C.bc(k.ga5()),0,255)
u=j?0:D.b.b5(C.bc(k.ga6(k)),0,255)
for(r=A.aoq(m),j=r.d,q=j.c>0,j=j.d,p=j.$flags|0;r.q();){if(q){o=r.c
n=D.c.C(D.b.b5(x,0,255))
p&2&&C.f(j)
j[o]=n}r.sa5(w)
r.sa6(0,u)}}},
gcn(){return this.e}}
A.Sx.prototype={
N(){return"Interpolation."+this.b}}
A.anS.prototype={}
A.Vz.prototype={
c7(d){return new A.Vz(new Uint16Array(C.bn(this.c)),this.a,this.b)},
gbF(){return B.db},
gb1(){return 1},
cD(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=A.cV(g)
x.$flags&2&&C.f(x)
x[e*v+f]=w}},
kh(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=A.cV(e)
x.$flags&2&&C.f(x)
x[d]=w
if(v>1){x[d+1]=A.cV(f)
if(v>2)x[d+2]=A.cV(g)}},
jx(d,e,f){var x,w=this.b
if(f<w){w=this.c[e*w+f]
x=$.dn
w=(x!=null?x:A.dN())[w]}else w=0
return w},
j_(d){var x=this.c[d*this.b],w=$.dn
return(w!=null?w:A.dN())[x]},
iY(d){var x,w=this.b
if(w<2)return 0
w=this.c[d*w+1]
x=$.dn
return(x!=null?x:A.dN())[w]},
iX(d){var x,w=this.b
if(w<3)return 0
w=this.c[d*w+2]
x=$.dn
return(x!=null?x:A.dN())[w]},
jy(d){var x,w=this.b
if(w<4)return 0
w=this.c[d*w+3]
x=$.dn
return(x!=null?x:A.dN())[w]},
m1(d,e){return this.cD(0,d,0,e)},
m0(d,e){return this.cD(0,d,1,e)},
m_(d,e){return this.cD(0,d,2,e)},
lZ(d,e){return this.cD(0,d,3,e)}}
A.VA.prototype={
c7(d){return new A.VA(new Float32Array(C.bn(this.c)),this.a,this.b)},
gbF(){return B.dS},
gb1(){return 1},
cD(d,e,f,g){var x,w=this.b
if(f<w){x=this.c
x.$flags&2&&C.f(x)
x[e*w+f]=g}},
kh(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x.$flags&2&&C.f(x)
x[d]=e
if(w>1){x[d+1]=f
if(w>2)x[d+2]=g}},
jx(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
j_(d){return this.c[d*this.b]},
iY(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
iX(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
jy(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
m1(d,e){return this.cD(0,d,0,e)},
m0(d,e){return this.cD(0,d,1,e)},
m_(d,e){return this.cD(0,d,2,e)},
lZ(d,e){return this.cD(0,d,3,e)}}
A.VB.prototype={
c7(d){return new A.VB(new Float64Array(C.bn(this.c)),this.a,this.b)},
gbF(){return B.eN},
gb1(){return 1},
cD(d,e,f,g){var x,w=this.b
if(f<w){x=this.c
x.$flags&2&&C.f(x)
x[e*w+f]=g}},
kh(d,e,f,g){var x,w=this.b
d*=w
x=this.c
x.$flags&2&&C.f(x)
x[d]=e
if(w>1){x[d+1]=f
if(w>2)x[d+2]=g}},
jx(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
j_(d){return this.c[d*this.b]},
iY(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
iX(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
jy(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
m1(d,e){return this.cD(0,d,0,e)},
m0(d,e){return this.cD(0,d,1,e)},
m_(d,e){return this.cD(0,d,2,e)},
lZ(d,e){return this.cD(0,d,3,e)}}
A.VC.prototype={
c7(d){return new A.VC(new Int16Array(C.bn(this.c)),this.a,this.b)},
gbF(){return B.eP},
gb1(){return 32767},
cD(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.b.C(g)
x.$flags&2&&C.f(x)
x[e*v+f]=w}},
kh(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.c.C(e)
x.$flags&2&&C.f(x)
x[d]=w
if(v>1){x[d+1]=D.c.C(f)
if(v>2)x[d+2]=D.c.C(g)}},
jx(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
j_(d){return this.c[d*this.b]},
iY(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
iX(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
jy(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
m1(d,e){return this.cD(0,d,0,e)},
m0(d,e){return this.cD(0,d,1,e)},
m_(d,e){return this.cD(0,d,2,e)},
lZ(d,e){return this.cD(0,d,3,e)}}
A.VD.prototype={
c7(d){return new A.VD(new Int32Array(C.bn(this.c)),this.a,this.b)},
gbF(){return B.eQ},
gb1(){return 2147483647},
cD(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.b.C(g)
x.$flags&2&&C.f(x)
x[e*v+f]=w}},
kh(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.c.C(e)
x.$flags&2&&C.f(x)
x[d]=w
if(v>1){x[d+1]=D.c.C(f)
if(v>2)x[d+2]=D.c.C(g)}},
jx(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
j_(d){return this.c[d*this.b]},
iY(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
iX(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
jy(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
m1(d,e){return this.cD(0,d,0,e)},
m0(d,e){return this.cD(0,d,1,e)},
m_(d,e){return this.cD(0,d,2,e)},
lZ(d,e){return this.cD(0,d,3,e)}}
A.VE.prototype={
c7(d){return new A.VE(new Int8Array(C.bn(this.c)),this.a,this.b)},
gbF(){return B.eO},
gb1(){return 127},
cD(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.b.C(g)
x.$flags&2&&C.f(x)
x[e*v+f]=w}},
kh(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.c.C(e)
x.$flags&2&&C.f(x)
x[d]=w
if(v>1){x[d+1]=D.c.C(f)
if(v>2)x[d+2]=D.c.C(g)}},
jx(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
j_(d){return this.c[d*this.b]},
iY(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
iX(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
jy(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
m1(d,e){return this.cD(0,d,0,e)},
m0(d,e){return this.cD(0,d,1,e)},
m_(d,e){return this.cD(0,d,2,e)},
lZ(d,e){return this.cD(0,d,3,e)}}
A.VF.prototype={
c7(d){return new A.VF(new Uint16Array(C.bn(this.c)),this.a,this.b)},
gbF(){return B.b_},
gb1(){return 65535},
cD(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.b.C(g)
x.$flags&2&&C.f(x)
x[e*v+f]=w}},
kh(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.c.C(e)
x.$flags&2&&C.f(x)
x[d]=w
if(v>1){x[d+1]=D.c.C(f)
if(v>2)x[d+2]=D.c.C(g)}},
jx(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
j_(d){return this.c[d*this.b]},
iY(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
iX(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
jy(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
m1(d,e){return this.cD(0,d,0,e)},
m0(d,e){return this.cD(0,d,1,e)},
m_(d,e){return this.cD(0,d,2,e)},
lZ(d,e){return this.cD(0,d,3,e)}}
A.VG.prototype={
c7(d){return new A.VG(new Uint32Array(C.bn(this.c)),this.a,this.b)},
gbF(){return B.dT},
gb1(){return 4294967295},
cD(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.b.C(g)
x.$flags&2&&C.f(x)
x[e*v+f]=w}},
kh(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.c.C(e)
x.$flags&2&&C.f(x)
x[d]=w
if(v>1){x[d+1]=D.c.C(f)
if(v>2)x[d+2]=D.c.C(g)}},
jx(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
j_(d){return this.c[d*this.b]},
iY(d){var x=this.b
if(x<2)return 0
return this.c[d*x+1]},
iX(d){var x=this.b
if(x<3)return 0
return this.c[d*x+2]},
jy(d){var x=this.b
if(x<4)return 0
return this.c[d*x+3]},
m1(d,e){return this.cD(0,d,0,e)},
m0(d,e){return this.cD(0,d,1,e)},
m_(d,e){return this.cD(0,d,2,e)},
lZ(d,e){return this.cD(0,d,3,e)}}
A.lB.prototype={
c7(d){return A.aSG(this)},
gbF(){return B.y},
gb1(){return 255},
cD(d,e,f,g){var x,w,v=this.b
if(f<v){x=this.c
w=D.b.C(g)
x.$flags&2&&C.f(x)
x[e*v+f]=w}},
kh(d,e,f,g){var x,w,v=this.b
d*=v
x=this.c
w=D.c.C(e)
x.$flags&2&&C.f(x)
x[d]=w
if(v>1){x[d+1]=D.c.C(f)
if(v>2)x[d+2]=D.c.C(g)}},
zC(d,e,f,g,h){var x,w,v=this.b
d*=v
x=this.c
w=D.b.C(e)
x.$flags&2&&C.f(x)
x[d]=w
if(v>1){x[d+1]=D.b.C(f)
if(v>2){x[d+2]=D.b.C(g)
if(v>3)x[d+3]=D.b.C(h)}}},
jx(d,e,f){var x=this.b
return f<x?this.c[e*x+f]:0},
j_(d){var x
d*=this.b
x=this.c
if(d>=x.length)return 0
return x[d]},
iY(d){var x=this.b
if(x<2)return 0
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+1]},
iX(d){var x=this.b
if(x<3)return 0
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+2]},
jy(d){var x=this.b
if(x<4)return 255
d*=x
x=this.c
if(d>=x.length)return 0
return x[d+3]},
m1(d,e){return this.cD(0,d,0,e)},
m0(d,e){return this.cD(0,d,1,e)},
m_(d,e){return this.cD(0,d,2,e)},
lZ(d,e){return this.cD(0,d,3,e)}}
A.tv.prototype={
c7(d){var x=this
return new A.tv(x.a,x.b,x.c,x.d)},
gbF(){return B.db},
gp(d){return this.d.c},
gcn(){return null},
gb1(){return 1},
ghZ(d){return this.a},
giA(d){return this.b},
dg(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gM(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c+v.c
w.c=x
return x<v.d.length},
h(d,e){var x,w=this.d
if(e<w.c){w=w.d[this.c+e]
x=$.dn
w=(x!=null?x:A.dN())[w]}else w=0
return w},
l(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=A.cV(f)
v.$flags&2&&C.f(v)
v[x+e]=w}},
gbT(d){return this.gX(0)},
sbT(d,e){this.sX(0,e)},
gX(d){var x,w=this.d
if(w.c>0){w=w.d[this.c]
x=$.dn
w=(x!=null?x:A.dN())[w]}else w=0
return w},
sX(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=A.cV(e)
v.$flags&2&&C.f(v)
v[x]=w}},
ga5(){var x,w=this.d
if(w.c>1){w=w.d[this.c+1]
x=$.dn
w=(x!=null?x:A.dN())[w]}else w=0
return w},
sa5(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=A.cV(d)
v.$flags&2&&C.f(v)
v[x+1]=w}},
ga6(d){var x,w=this.d
if(w.c>2){w=w.d[this.c+2]
x=$.dn
w=(x!=null?x:A.dN())[w]}else w=0
return w},
sa6(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=A.cV(e)
v.$flags&2&&C.f(v)
v[x+2]=w}},
ga4(d){var x,w=this.d
if(w.c>3){w=w.d[this.c+3]
x=$.dn
w=(x!=null?x:A.dN())[w]}else w=1
return w},
sa4(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=A.cV(e)
v.$flags&2&&C.f(v)
v[x+3]=w}},
ge6(){return this.gX(0)/1},
se6(d){this.sX(0,d)},
gdX(){return this.ga5()/1},
sdX(d){this.sa5(d)},
ge4(){return this.ga6(0)/1},
se4(d){this.sa6(0,d)},
ge9(){return this.ga4(0)/1},
se9(d){this.sa4(0,d)},
geM(){return A.ee(this)},
em(d,e){var x=this
if(x.d.c>0){x.sX(0,e.gX(e))
x.sa5(e.ga5())
x.sa6(0,e.ga6(e))
x.sa4(0,e.ga4(e))}},
fh(d,e,f){var x,w,v=this,u=v.d,t=u.c
if(t>0){u=u.d
x=v.c
w=A.cV(d)
u.$flags&2&&C.f(u)
u[x]=w
if(t>1){u[v.c+1]=A.cV(e)
if(t>2)u[v.c+2]=A.cV(f)}}},
dZ(d,e,f,g){var x,w,v=this,u=v.d,t=u.c
if(t>0){u=u.d
x=v.c
w=A.cV(d)
u.$flags&2&&C.f(u)
u[x]=w
if(t>1){u[v.c+1]=A.cV(e)
if(t>2){u[v.c+2]=A.cV(f)
if(t>3)u[v.c+3]=A.cV(g)}}}},
gU(d){return new A.dv(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.tv){x=C.M(u,C.n(u).i("j.E"))
x=C.a2(x)
w=C.M(e,C.n(e).i("j.E"))
return x===C.a2(w)}if(y.L.b(e)){x=J.at(e)
w=u.d
v=w.c
if(x.gp(e)!==v)return!1
w=w.d
if(w[u.c]!==x.h(e,0))return!1
if(v>1){if(w[u.c+1]!==x.h(e,1))return!1
if(v>2){if(w[u.c+2]!==x.h(e,2))return!1
if(v>3)if(w[u.c+3]!==x.h(e,3))return!1}}return!0}return!1},
gu(d){var x=C.M(this,C.n(this).i("j.E"))
return C.a2(x)},
$ibP:1,
$ibO:1,
giM(d){return this.d}}
A.tw.prototype={
c7(d){var x=this
return new A.tw(x.a,x.b,x.c,x.d)},
gp(d){return this.d.c},
gcn(){return null},
gb1(){return 1},
gbF(){return B.dS},
ghZ(d){return this.a},
giA(d){return this.b},
dg(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gM(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c+v.c
w.c=x
return x<v.d.length},
h(d,e){var x=this.d
return e<x.c?x.d[this.c+e]:0},
l(d,e,f){var x,w=this.d
if(e<w.c){w=w.d
x=this.c
w.$flags&2&&C.f(w)
w[x+e]=f}},
gbT(d){return this.gX(0)},
sbT(d,e){this.sX(0,e)},
gX(d){var x=this.d
return x.c>0?x.d[this.c]:0},
sX(d,e){var x,w=this.d
if(w.c>0){w=w.d
x=this.c
w.$flags&2&&C.f(w)
w[x]=e}},
ga5(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
sa5(d){var x,w=this.d
if(w.c>1){w=w.d
x=this.c
w.$flags&2&&C.f(w)
w[x+1]=d}},
ga6(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
sa6(d,e){var x,w=this.d
if(w.c>2){w=w.d
x=this.c
w.$flags&2&&C.f(w)
w[x+2]=e}},
ga4(d){var x=this.d
return x.c>3?x.d[this.c+3]:1},
sa4(d,e){var x,w=this.d
if(w.c>3){w=w.d
x=this.c
w.$flags&2&&C.f(w)
w[x+3]=e}},
ge6(){return this.gX(0)/1},
se6(d){this.sX(0,d)},
gdX(){return this.ga5()/1},
sdX(d){this.sa5(d)},
ge4(){return this.ga6(0)/1},
se4(d){this.sa6(0,d)},
ge9(){return this.ga4(0)/1},
se9(d){this.sa4(0,d)},
geM(){return A.ee(this)},
em(d,e){var x=this
x.sX(0,e.gX(e))
x.sa5(e.ga5())
x.sa6(0,e.ga6(e))
x.sa4(0,e.ga4(e))},
fh(d,e,f){var x=this.d,w=x.d,v=this.c
w.$flags&2&&C.f(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2)w[v+2]=f}},
dZ(d,e,f,g){var x=this.d,w=x.d,v=this.c
w.$flags&2&&C.f(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2){w[v+2]=f
if(x>3)w[v+3]=g}}},
gU(d){return new A.dv(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.tw){x=C.M(u,C.n(u).i("j.E"))
x=C.a2(x)
w=C.M(e,C.n(e).i("j.E"))
return x===C.a2(w)}if(y.L.b(e)){x=J.at(e)
w=u.d
v=w.c
if(x.gp(e)!==v)return!1
w=w.d
if(w[u.c]!==x.h(e,0))return!1
if(v>1){if(w[u.c+1]!==x.h(e,1))return!1
if(v>2){if(w[u.c+2]!==x.h(e,2))return!1
if(v>3)if(w[u.c+3]!==x.h(e,3))return!1}}return!0}return!1},
gu(d){var x=C.M(this,C.n(this).i("j.E"))
return C.a2(x)},
$ibP:1,
$ibO:1,
giM(d){return this.d}}
A.tx.prototype={
c7(d){var x=this
return new A.tx(x.a,x.b,x.c,x.d)},
gp(d){return this.d.c},
gcn(){return null},
gb1(){return 1},
gbF(){return B.eN},
ghZ(d){return this.a},
giA(d){return this.b},
dg(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gM(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c+v.c
w.c=x
return x<v.d.length},
h(d,e){var x=this.d
return e<x.c?x.d[this.c+e]:0},
l(d,e,f){var x,w=this.d
if(e<w.c){w=w.d
x=this.c
w.$flags&2&&C.f(w)
w[x+e]=f}},
gbT(d){return this.gX(0)},
sbT(d,e){this.sX(0,e)},
gX(d){var x=this.d
return x.c>0?x.d[this.c]:0},
sX(d,e){var x,w=this.d
if(w.c>0){w=w.d
x=this.c
w.$flags&2&&C.f(w)
w[x]=e}},
ga5(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
sa5(d){var x,w=this.d
if(w.c>1){w=w.d
x=this.c
w.$flags&2&&C.f(w)
w[x+1]=d}},
ga6(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
sa6(d,e){var x,w=this.d
if(w.c>2){w=w.d
x=this.c
w.$flags&2&&C.f(w)
w[x+2]=e}},
ga4(d){var x=this.d
return x.c>3?x.d[this.c+3]:1},
sa4(d,e){var x,w=this.d
if(w.c>3){w=w.d
x=this.c
w.$flags&2&&C.f(w)
w[x+3]=e}},
ge6(){return this.gX(0)/1},
se6(d){this.sX(0,d)},
gdX(){return this.ga5()/1},
sdX(d){this.sa5(d)},
ge4(){return this.ga6(0)/1},
se4(d){this.sa6(0,d)},
ge9(){return this.ga4(0)/1},
se9(d){this.sa4(0,d)},
geM(){return A.ee(this)},
em(d,e){var x=this
x.sX(0,e.gX(e))
x.sa5(e.ga5())
x.sa6(0,e.ga6(e))
x.sa4(0,e.ga4(e))},
fh(d,e,f){var x=this.d,w=x.d,v=this.c
w.$flags&2&&C.f(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2)w[v+2]=f}},
dZ(d,e,f,g){var x=this.d,w=x.d,v=this.c
w.$flags&2&&C.f(w)
w[v]=d
x=x.c
if(x>1){w[v+1]=e
if(x>2){w[v+2]=f
if(x>3)w[v+3]=g}}},
gU(d){return new A.dv(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.tx){x=C.M(u,C.n(u).i("j.E"))
x=C.a2(x)
w=C.M(e,C.n(e).i("j.E"))
return x===C.a2(w)}if(y.L.b(e)){x=J.at(e)
w=u.d
v=w.c
if(x.gp(e)!==v)return!1
w=w.d
if(w[u.c]!==x.h(e,0))return!1
if(v>1){if(w[u.c+1]!==x.h(e,1))return!1
if(v>2){if(w[u.c+2]!==x.h(e,2))return!1
if(v>3)if(w[u.c+3]!==x.h(e,3))return!1}}return!0}return!1},
gu(d){var x=C.M(this,C.n(this).i("j.E"))
return C.a2(x)},
$ibP:1,
$ibO:1,
giM(d){return this.d}}
A.ty.prototype={
c7(d){var x=this
return new A.ty(x.a,x.b,x.c,x.d)},
gp(d){return this.d.c},
gcn(){return null},
gb1(){return 32767},
gbF(){return B.eP},
ghZ(d){return this.a},
giA(d){return this.b},
dg(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gM(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c+v.c
w.c=x
return x<v.d.length},
h(d,e){var x=this.d
return e<x.c?x.d[this.c+e]:0},
l(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=D.c.C(f)
v.$flags&2&&C.f(v)
v[x+e]=w}},
gbT(d){return this.gX(0)},
sbT(d,e){this.sX(0,e)},
gX(d){var x=this.d
return x.c>0?x.d[this.c]:0},
sX(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.c.C(e)
v.$flags&2&&C.f(v)
v[x]=w}},
ga5(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
sa5(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&C.f(v)
v[x+1]=w}},
ga6(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
sa6(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.c.C(e)
v.$flags&2&&C.f(v)
v[x+2]=w}},
ga4(d){var x=this.d
return x.c>3?x.d[this.c+3]:32767},
sa4(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.c.C(e)
v.$flags&2&&C.f(v)
v[x+3]=w}},
ge6(){return this.gX(0)/32767},
se6(d){this.sX(0,d*32767)},
gdX(){return this.ga5()/32767},
sdX(d){this.sa5(d*32767)},
ge4(){return this.ga6(0)/32767},
se4(d){this.sa6(0,d*32767)},
ge9(){return this.ga4(0)/32767},
se9(d){this.sa4(0,d*32767)},
geM(){return A.ee(this)},
em(d,e){var x=this
x.sX(0,e.gX(e))
x.sa5(e.ga5())
x.sa6(0,e.ga6(e))
x.sa4(0,e.ga4(e))},
fh(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.b.C(d)
v.$flags&2&&C.f(v)
v[x]=w
if(u>1){v[x+1]=D.b.C(e)
if(u>2)v[x+2]=D.b.C(f)}}},
dZ(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.b.C(d)
v.$flags&2&&C.f(v)
v[x]=w
if(u>1){v[x+1]=D.b.C(e)
if(u>2){v[x+2]=D.b.C(f)
if(u>3)v[x+3]=D.b.C(g)}}}},
gU(d){return new A.dv(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.ty){x=C.M(u,C.n(u).i("j.E"))
x=C.a2(x)
w=C.M(e,C.n(e).i("j.E"))
return x===C.a2(w)}if(y.L.b(e)){x=J.at(e)
w=u.d
v=w.c
if(x.gp(e)!==v)return!1
w=w.d
if(w[u.c]!==x.h(e,0))return!1
if(v>1){if(w[u.c+1]!==x.h(e,1))return!1
if(v>2){if(w[u.c+2]!==x.h(e,2))return!1
if(v>3)if(w[u.c+3]!==x.h(e,3))return!1}}return!0}return!1},
gu(d){var x=C.M(this,C.n(this).i("j.E"))
return C.a2(x)},
$ibP:1,
$ibO:1,
giM(d){return this.d}}
A.tz.prototype={
c7(d){var x=this
return new A.tz(x.a,x.b,x.c,x.d)},
gp(d){return this.d.c},
gcn(){return null},
gb1(){return 2147483647},
gbF(){return B.eQ},
ghZ(d){return this.a},
giA(d){return this.b},
dg(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gM(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c+v.c
w.c=x
return x<v.d.length},
h(d,e){var x=this.d
return e<x.c?x.d[this.c+e]:0},
l(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=D.c.C(f)
v.$flags&2&&C.f(v)
v[x+e]=w}},
gbT(d){return this.gX(0)},
sbT(d,e){this.sX(0,e)},
gX(d){var x=this.d
return x.c>0?x.d[this.c]:0},
sX(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.c.C(e)
v.$flags&2&&C.f(v)
v[x]=w}},
ga5(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
sa5(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&C.f(v)
v[x+1]=w}},
ga6(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
sa6(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.c.C(e)
v.$flags&2&&C.f(v)
v[x+2]=w}},
ga4(d){var x=this.d
return x.c>3?x.d[this.c+3]:2147483647},
sa4(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.c.C(e)
v.$flags&2&&C.f(v)
v[x+3]=w}},
ge6(){return this.gX(0)/2147483647},
se6(d){this.sX(0,d*2147483647)},
gdX(){return this.ga5()/2147483647},
sdX(d){this.sa5(d*2147483647)},
ge4(){return this.ga6(0)/2147483647},
se4(d){this.sa6(0,d*2147483647)},
ge9(){return this.ga4(0)/2147483647},
se9(d){this.sa4(0,d*2147483647)},
geM(){return A.ee(this)},
em(d,e){var x=this
x.sX(0,e.gX(e))
x.sa5(e.ga5())
x.sa6(0,e.ga6(e))
x.sa4(0,e.ga4(e))},
fh(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.b.C(d)
v.$flags&2&&C.f(v)
v[x]=w
if(u>1){v[x+1]=D.b.C(e)
if(u>2)v[x+2]=D.b.C(f)}}},
dZ(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.b.C(d)
v.$flags&2&&C.f(v)
v[x]=w
if(u>1){v[x+1]=D.b.C(e)
if(u>2){v[x+2]=D.b.C(f)
if(u>3)v[x+3]=D.b.C(g)}}}},
gU(d){return new A.dv(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.tz){x=C.M(u,C.n(u).i("j.E"))
x=C.a2(x)
w=C.M(e,C.n(e).i("j.E"))
return x===C.a2(w)}if(y.L.b(e)){x=J.at(e)
w=u.d
v=w.c
if(x.gp(e)!==v)return!1
w=w.d
if(w[u.c]!==x.h(e,0))return!1
if(v>1){if(w[u.c+1]!==x.h(e,1))return!1
if(v>2){if(w[u.c+2]!==x.h(e,2))return!1
if(v>3)if(w[u.c+3]!==x.h(e,3))return!1}}return!0}return!1},
gu(d){var x=C.M(this,C.n(this).i("j.E"))
return C.a2(x)},
$ibP:1,
$ibO:1,
giM(d){return this.d}}
A.tA.prototype={
c7(d){var x=this
return new A.tA(x.a,x.b,x.c,x.d)},
gp(d){return this.d.c},
gcn(){return null},
gb1(){return 127},
gbF(){return B.eO},
ghZ(d){return this.a},
giA(d){return this.b},
dg(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gM(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c+v.c
w.c=x
return x<v.d.length},
h(d,e){var x=this.d
return e<x.c?x.d[this.c+e]:0},
l(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=D.c.C(f)
v.$flags&2&&C.f(v)
v[x+e]=w}},
gbT(d){return this.gX(0)},
sbT(d,e){this.sX(0,e)},
gX(d){var x=this.d
return x.c>0?x.d[this.c]:0},
sX(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.c.C(e)
v.$flags&2&&C.f(v)
v[x]=w}},
ga5(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
sa5(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&C.f(v)
v[x+1]=w}},
ga6(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
sa6(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.c.C(e)
v.$flags&2&&C.f(v)
v[x+2]=w}},
ga4(d){var x=this.d
return x.c>3?x.d[this.c+3]:127},
sa4(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.c.C(e)
v.$flags&2&&C.f(v)
v[x+3]=w}},
ge6(){return this.gX(0)/127},
se6(d){this.sX(0,d*127)},
gdX(){return this.ga5()/127},
sdX(d){this.sa5(d*127)},
ge4(){return this.ga6(0)/127},
se4(d){this.sa6(0,d*127)},
ge9(){return this.ga4(0)/127},
se9(d){this.sa4(0,d*127)},
geM(){return A.ee(this)},
em(d,e){var x=this
x.sX(0,e.gX(e))
x.sa5(e.ga5())
x.sa6(0,e.ga6(e))
x.sa4(0,e.ga4(e))},
fh(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.b.C(d)
v.$flags&2&&C.f(v)
v[x]=w
if(u>1){v[x+1]=D.b.C(e)
if(u>2)v[x+2]=D.b.C(f)}}},
dZ(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.b.C(d)
v.$flags&2&&C.f(v)
v[x]=w
if(u>1){v[x+1]=D.b.C(e)
if(u>2){v[x+2]=D.b.C(f)
if(u>3)v[x+3]=D.b.C(g)}}}},
gU(d){return new A.dv(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.tA){x=C.M(u,C.n(u).i("j.E"))
x=C.a2(x)
w=C.M(e,C.n(e).i("j.E"))
return x===C.a2(w)}if(y.L.b(e)){x=J.at(e)
w=u.d
v=w.c
if(x.gp(e)!==v)return!1
w=w.d
if(w[u.c]!==x.h(e,0))return!1
if(v>1){if(w[u.c+1]!==x.h(e,1))return!1
if(v>2){if(w[u.c+2]!==x.h(e,2))return!1
if(v>3)if(w[u.c+3]!==x.h(e,3))return!1}}return!0}return!1},
gu(d){var x=C.M(this,C.n(this).i("j.E"))
return C.a2(x)},
$ibP:1,
$ibO:1,
giM(d){return this.d}}
A.aop.prototype={
q(){var x=this,w=x.a
if(w.ghZ(w)+1>x.d){w.dg(0,x.b,w.giA(w)+1)
return w.giA(w)<=x.e}return w.q()},
gM(d){return this.a}}
A.tB.prototype={
c7(d){var x=this
return new A.tB(x.a,x.b,x.c,x.d,x.e,x.f)},
gp(d){var x=this.f,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
gcn(){return this.f.f},
gb1(){return this.f.gb1()},
gbF(){return B.ch},
ghZ(d){return this.a},
giA(d){return this.b},
dg(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.f
w=f*x.e
v.e=w
x=e*x.c
v.c=w+D.b.I(x,3)
v.d=x&7},
gM(d){return this},
q(){var x,w=this,v=++w.a,u=w.f
if(v===u.a){w.a=0
v=++w.b
w.d=0;++w.c
w.e=w.e+u.e
return v<u.b}x=u.c
if(u.f!=null||x===1){if(++w.d>7){w.d=0;++w.c}}else{v*=x
w.d=v&7
w.c=w.e+D.b.I(v,3)}v=w.c
u=u.d
u===$&&C.a()
return v<u.byteLength},
Im(d,e){var x,w=this.c,v=7-(this.d+e)
if(v<0){v+=8;++w}x=this.f.d
x===$&&C.a()
if(w>=x.length)return 0
return D.b.d5(x[w],v)&1},
ko(d){var x=this.f,w=x.f
if(w==null)x=x.c>d?this.Im(0,d):0
else x=w.jx(0,this.Im(0,0),d)
return x},
fk(d,e){var x,w,v,u,t,s,r=this.f
if(d>=r.c)return
x=this.c
w=7-(this.d+d)
if(w<0){++x
w+=8}v=r.d
v===$&&C.a()
u=v[x]
t=D.b.b5(D.c.C(e),0,1)
s=B.Xf[w]
v=D.b.cA(t,w)
r=r.d
r.$flags&2&&C.f(r)
r[x]=(u&s|v)>>>0},
h(d,e){return this.ko(e)},
l(d,e,f){return this.fk(e,f)},
gbT(d){return this.Im(0,0)},
sbT(d,e){this.fk(0,e)},
gX(d){return this.ko(0)},
sX(d,e){this.fk(0,e)},
ga5(){return this.ko(1)},
sa5(d){this.fk(1,d)},
ga6(d){return this.ko(2)},
sa6(d,e){this.fk(2,e)},
ga4(d){var x=this.f
return x.f==null&&x.c<4?x.gb1():this.ko(3)},
sa4(d,e){this.fk(3,e)},
ge6(){return this.ko(0)/this.f.gb1()},
se6(d){this.fk(0,d*this.f.gb1())},
gdX(){return this.ko(1)/this.f.gb1()},
sdX(d){this.fk(1,d*this.f.gb1())},
ge4(){return this.ko(2)/this.f.gb1()},
se4(d){this.fk(2,d*this.f.gb1())},
ge9(){return this.ga4(0)/this.f.gb1()},
se9(d){this.fk(3,d*this.f.gb1())},
geM(){return A.ee(this)},
em(d,e){var x=this
x.fk(0,e.gX(e))
x.fk(1,e.ga5())
x.fk(2,e.ga6(e))
x.fk(3,e.ga4(e))},
fh(d,e,f){var x=this,w=x.f.c
if(w>0){x.fk(0,d)
if(w>1){x.fk(1,e)
if(w>2)x.fk(2,f)}}},
dZ(d,e,f,g){var x=this,w=x.f.c
if(w>0){x.fk(0,d)
if(w>1){x.fk(1,e)
if(w>2){x.fk(2,f)
if(w>3)x.fk(3,g)}}}},
gU(d){return new A.dv(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.tB){x=C.M(u,C.n(u).i("j.E"))
x=C.a2(x)
w=C.M(e,C.n(e).i("j.E"))
return x===C.a2(w)}if(y.L.b(e)){x=u.f
w=x.f
v=w!=null?w.b:x.c
x=J.at(e)
if(x.gp(e)!==v)return!1
if(u.ko(0)!==x.h(e,0))return!1
if(v>1){if(u.ko(1)!==x.h(e,1))return!1
if(v>2){if(u.ko(2)!==x.h(e,2))return!1
if(v>3)if(u.ko(3)!==x.h(e,3))return!1}}return!0}return!1},
gu(d){var x=C.M(this,C.n(this).i("j.E"))
return C.a2(x)},
$ibP:1,
$ibO:1,
giM(d){return this.f}}
A.tC.prototype={
c7(d){var x=this
return new A.tC(x.a,x.b,x.c,x.d)},
gp(d){var x=this.d,w=x.e
w=w==null?null:w.b
return w==null?x.c:w},
gcn(){return this.d.e},
gb1(){return this.d.gb1()},
gbF(){return B.b_},
ghZ(d){return this.a},
giA(d){return this.b},
dg(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gM(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c
x+=v.e==null?v.c:1
w.c=x
return x<v.d.length},
er(d,e){var x=this.d,w=x.e
if(w!=null)x=w.jx(0,x.d[this.c],e)
else x=e<x.c?x.d[this.c+e]:0
return x},
h(d,e){return this.er(0,e)},
l(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=D.c.C(f)
v.$flags&2&&C.f(v)
v[x+e]=w}},
gbT(d){return this.gX(0)},
sbT(d,e){this.sX(0,e)},
gX(d){var x=this.d,w=x.e
if(w==null)x=x.c>0?x.d[this.c]:0
else x=w.j_(x.d[this.c])
return x},
sX(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.c.C(e)
v.$flags&2&&C.f(v)
v[x]=w}},
ga5(){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c]
else w=v>1?w.d[x.c+1]:0}else w=v.iY(w.d[x.c])
return w},
sa5(d){var x,w=this.d,v=w.c
if(v===2){w=w.d
v=this.c
x=D.c.C(d)
w.$flags&2&&C.f(w)
w[v]=x}else if(v>1){w=w.d
v=this.c
x=D.c.C(d)
w.$flags&2&&C.f(w)
w[v+1]=x}},
ga6(d){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c]
else w=v>2?w.d[x.c+2]:0}else w=v.iX(w.d[x.c])
return w},
sa6(d,e){var x,w=this.d,v=w.c
if(v===2){w=w.d
v=this.c
x=D.c.C(e)
w.$flags&2&&C.f(w)
w[v]=x}else if(v>2){w=w.d
v=this.c
x=D.c.C(e)
w.$flags&2&&C.f(w)
w[v+2]=x}},
ga4(d){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c+1]
else w=v>3?w.d[x.c+3]:w.gb1()}else w=v.jy(w.d[x.c])
return w},
sa4(d,e){var x,w=this.d,v=w.c
if(v===2){w=w.d
v=this.c
x=D.c.C(e)
w.$flags&2&&C.f(w)
w[v+1]=x}else if(v>3){w=w.d
v=this.c
x=D.c.C(e)
w.$flags&2&&C.f(w)
w[v+3]=x}},
ge6(){return this.gX(0)/this.d.gb1()},
se6(d){this.sX(0,d*this.d.gb1())},
gdX(){return this.ga5()/this.d.gb1()},
sdX(d){this.sa5(d*this.d.gb1())},
ge4(){return this.ga6(0)/this.d.gb1()},
se4(d){this.sa6(0,d*this.d.gb1())},
ge9(){return this.ga4(0)/this.d.gb1()},
se9(d){this.sa4(0,d*this.d.gb1())},
geM(){return this.d.c===2?this.gX(0):A.ee(this)},
em(d,e){var x=this
x.sX(0,e.gX(e))
x.sa5(e.ga5())
x.sa6(0,e.ga6(e))
x.sa4(0,e.ga4(e))},
fh(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.b.C(d)
v.$flags&2&&C.f(v)
v[x]=w
if(u>1){v[x+1]=D.b.C(e)
if(u>2)v[x+2]=D.b.C(f)}}},
dZ(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.b.C(d)
v.$flags&2&&C.f(v)
v[x]=w
if(u>1){v[x+1]=D.b.C(e)
if(u>2){v[x+2]=D.b.C(f)
if(u>3)v[x+3]=D.b.C(g)}}}},
gU(d){return new A.dv(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.tC){x=C.M(u,C.n(u).i("j.E"))
x=C.a2(x)
w=C.M(e,C.n(e).i("j.E"))
return x===C.a2(w)}if(y.L.b(e)){x=u.d
w=x.e
v=w!=null?w.b:x.c
x=J.at(e)
if(x.gp(e)!==v)return!1
if(u.er(0,0)!==x.h(e,0))return!1
if(v>1){if(u.er(0,1)!==x.h(e,1))return!1
if(v>2){if(u.er(0,2)!==x.h(e,2))return!1
if(v>3)if(u.er(0,3)!==x.h(e,3))return!1}}return!0}return!1},
gu(d){var x=C.M(this,C.n(this).i("j.E"))
return C.a2(x)},
$ibP:1,
$ibO:1,
giM(d){return this.d}}
A.tD.prototype={
c7(d){var x=this
return new A.tD(x.a,x.b,x.c,x.d,x.e,x.f)},
gp(d){var x=this.f,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
gcn(){return this.f.f},
gb1(){return this.f.gb1()},
gbF(){return B.cG},
gYo(){var x=this.f
return x.f!=null?2:x.c<<1>>>0},
ghZ(d){return this.a},
giA(d){return this.b},
dg(d,e,f){var x,w,v,u=this
u.a=e
u.b=f
x=u.gYo()
w=f*u.f.e
u.e=w
v=e*x
u.c=w+D.b.I(v,3)
u.d=v&7},
gM(d){return this},
q(){var x=this,w=++x.a,v=x.f
if(w===v.a){x.a=0
w=++x.b
x.d=0;++x.c
x.e=x.e+v.e
return w<v.b}if(v.f!=null||v.c===1){if((x.d+=2)>7){x.d=0;++x.c}}else{w*=x.gYo()
x.d=w&7
x.c=x.e+D.b.I(w,3)}w=x.c
v=v.d
v===$&&C.a()
return w<v.length},
In(d,e){var x,w=this.c,v=6-(this.d+(e<<1>>>0))
if(v<0){v+=8;++w}x=this.f.d
x===$&&C.a()
return D.b.d5(x[w],v)&3},
kp(d){var x=this.f,w=x.f
if(w==null)x=x.c>d?this.In(0,d):0
else x=w.jx(0,this.In(0,0),d)
return x},
fl(d,e){var x,w,v,u,t,s,r=this.f
if(d>=r.c)return
x=this.c
w=6-(this.d+(d<<1>>>0))
if(w<0){++x
w+=8}v=r.d
v===$&&C.a()
u=v[x]
t=D.b.b5(D.c.C(e),0,3)
s=B.RJ[D.b.I(w,1)]
v=D.b.cA(t,w)
r=r.d
r.$flags&2&&C.f(r)
r[x]=(u&s|v)>>>0},
h(d,e){return this.kp(e)},
l(d,e,f){return this.fl(e,f)},
gbT(d){return this.In(0,0)},
sbT(d,e){this.fl(0,e)},
gX(d){return this.kp(0)},
sX(d,e){this.fl(0,e)},
ga5(){return this.kp(1)},
sa5(d){this.fl(1,d)},
ga6(d){return this.kp(2)},
sa6(d,e){this.fl(2,e)},
ga4(d){var x=this.f
return x.f==null&&x.c<4?x.gb1():this.kp(3)},
sa4(d,e){this.fl(3,e)},
ge6(){return this.kp(0)/this.f.gb1()},
se6(d){this.fl(0,d*this.f.gb1())},
gdX(){return this.kp(1)/this.f.gb1()},
sdX(d){this.fl(1,d*this.f.gb1())},
ge4(){return this.kp(2)/this.f.gb1()},
se4(d){this.fl(2,d*this.f.gb1())},
ge9(){return this.ga4(0)/this.f.gb1()},
se9(d){this.fl(3,d*this.f.gb1())},
geM(){return A.ee(this)},
em(d,e){var x=this
x.fl(0,e.gX(e))
x.fl(1,e.ga5())
x.fl(2,e.ga6(e))
x.fl(3,e.ga4(e))},
fh(d,e,f){var x=this,w=x.f.c
if(w>0){x.fl(0,d)
if(w>1){x.fl(1,e)
if(w>2)x.fl(2,f)}}},
dZ(d,e,f,g){var x=this,w=x.f.c
if(w>0){x.fl(0,d)
if(w>1){x.fl(1,e)
if(w>2){x.fl(2,f)
if(w>3)x.fl(3,g)}}}},
gU(d){return new A.dv(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.tD){x=C.M(u,C.n(u).i("j.E"))
x=C.a2(x)
w=C.M(e,C.n(e).i("j.E"))
return x===C.a2(w)}if(y.L.b(e)){x=u.f
w=x.f
v=w!=null?w.b:x.c
x=J.at(e)
if(x.gp(e)!==v)return!1
if(u.kp(0)!==x.h(e,0))return!1
if(v>1){if(u.kp(1)!==x.h(e,1))return!1
if(v>2){if(u.kp(2)!==x.h(e,2))return!1
if(v>3)if(u.kp(3)!==x.h(e,3))return!1}}return!0}return!1},
gu(d){var x=C.M(this,C.n(this).i("j.E"))
return C.a2(x)},
$ibP:1,
$ibO:1,
giM(d){return this.f}}
A.tE.prototype={
c7(d){var x=this
return new A.tE(x.a,x.b,x.c,x.d)},
gp(d){return this.d.c},
gcn(){return null},
gb1(){return 4294967295},
gbF(){return B.dT},
ghZ(d){return this.a},
giA(d){return this.b},
dg(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gM(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c+v.c
w.c=x
return x<v.d.length},
h(d,e){var x=this.d
return e<x.c?x.d[this.c+e]:0},
l(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=D.c.C(f)
v.$flags&2&&C.f(v)
v[x+e]=w}},
gbT(d){return this.gX(0)},
sbT(d,e){this.sX(0,e)},
gX(d){var x=this.d
return x.c>0?x.d[this.c]:0},
sX(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.c.C(e)
v.$flags&2&&C.f(v)
v[x]=w}},
ga5(){var x=this.d
return x.c>1?x.d[this.c+1]:0},
sa5(d){var x,w,v=this.d
if(v.c>1){v=v.d
x=this.c
w=D.c.C(d)
v.$flags&2&&C.f(v)
v[x+1]=w}},
ga6(d){var x=this.d
return x.c>2?x.d[this.c+2]:0},
sa6(d,e){var x,w,v=this.d
if(v.c>2){v=v.d
x=this.c
w=D.c.C(e)
v.$flags&2&&C.f(v)
v[x+2]=w}},
ga4(d){var x=this.d
return x.c>3?x.d[this.c+3]:4294967295},
sa4(d,e){var x,w,v=this.d
if(v.c>3){v=v.d
x=this.c
w=D.c.C(e)
v.$flags&2&&C.f(v)
v[x+3]=w}},
ge6(){return this.gX(0)/4294967295},
se6(d){this.sX(0,d*4294967295)},
gdX(){return this.ga5()/4294967295},
sdX(d){this.sa5(d*4294967295)},
ge4(){return this.ga6(0)/4294967295},
se4(d){this.sa6(0,d*4294967295)},
ge9(){return this.ga4(0)/4294967295},
se9(d){this.sa4(0,d*4294967295)},
geM(){return A.ee(this)},
em(d,e){var x=this
x.sX(0,e.gX(e))
x.sa5(e.ga5())
x.sa6(0,e.ga6(e))
x.sa4(0,e.ga4(e))},
fh(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.b.C(d)
v.$flags&2&&C.f(v)
v[x]=w
if(u>1){v[x+1]=D.b.C(e)
if(u>2)v[x+2]=D.b.C(f)}}},
dZ(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.b.C(d)
v.$flags&2&&C.f(v)
v[x]=w
if(u>1){v[x+1]=D.b.C(e)
if(u>2){v[x+2]=D.b.C(f)
if(u>3)v[x+3]=D.b.C(g)}}}},
gU(d){return new A.dv(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.tE){x=C.M(u,C.n(u).i("j.E"))
x=C.a2(x)
w=C.M(e,C.n(e).i("j.E"))
return x===C.a2(w)}if(y.L.b(e)){x=J.at(e)
w=u.d
v=w.c
if(x.gp(e)!==v)return!1
w=w.d
if(w[u.c]!==x.h(e,0))return!1
if(v>1){if(w[u.c+1]!==x.h(e,1))return!1
if(v>2){if(w[u.c+2]!==x.h(e,2))return!1
if(v>3)if(w[u.c+3]!==x.h(e,3))return!1}}return!0}return!1},
gu(d){var x=C.M(this,C.n(this).i("j.E"))
return C.a2(x)},
$ibP:1,
$ibO:1,
giM(d){return this.d}}
A.tF.prototype={
c7(d){var x=this
return new A.tF(x.a,x.b,x.c,x.d,x.e)},
gp(d){var x=this.e,w=x.f
w=w==null?null:w.b
return w==null?x.c:w},
gcn(){return this.e.f},
gb1(){return this.e.gb1()},
gbF(){return B.cH},
ghZ(d){return this.a},
giA(d){return this.b},
dg(d,e,f){var x,w,v,u=this
u.a=e
u.b=f
x=u.e
w=x.c*4
v=x.e
if(w===4)x=f*v+D.b.I(e,1)
else if(w===8)x=f*x.a+e
else{x=f*v
x=w===16?x+(e<<1>>>0):x+D.b.I(e*w,3)}u.c=x
x=e*w
u.d=w>7?x&4:x&7},
gM(d){return this},
q(){var x,w,v,u=this,t=u.e
if(++u.a===t.a){u.a=0
x=++u.b
u.d=0
u.c=x*t.e
return x<t.b}w=t.c
x=t.f!=null||w===1
v=u.d
if(x){x=v+4
u.d=x
if(x>7){u.d=0;++u.c}}else{x=u.d=v+(w<<2>>>0)
for(;x>7;){x-=8
u.d=x;++u.c}}x=u.c
t=t.d
t===$&&C.a()
return x<t.length},
Io(d,e){var x,w=this.c,v=4-(this.d+(e<<2>>>0))
if(v<0){v+=8;++w}x=this.e.d
x===$&&C.a()
return D.b.d5(x[w],v)&15},
kq(d){var x=this.e,w=x.f
if(w==null)x=x.c>d?this.Io(0,d):0
else x=w.jx(0,this.Io(0,0),d)
return x},
fm(d,e){var x,w,v,u,t,s,r=this.e
if(d>=r.c)return
x=this.c
w=4-(this.d+(d<<2>>>0))
if(w<0){w+=8;++x}v=r.d
v===$&&C.a()
u=v[x]
t=D.b.b5(D.c.C(e),0,15)
s=w===4?15:240
v=D.b.cA(t,w)
r=r.d
r.$flags&2&&C.f(r)
r[x]=(u&s|v)>>>0},
h(d,e){return this.kq(e)},
l(d,e,f){return this.fm(e,f)},
gbT(d){return this.Io(0,0)},
sbT(d,e){this.fm(0,e)},
gX(d){return this.kq(0)},
sX(d,e){this.fm(0,e)},
ga5(){return this.kq(1)},
sa5(d){this.fm(1,d)},
ga6(d){return this.kq(2)},
sa6(d,e){this.fm(2,e)},
ga4(d){var x=this.e
return x.f==null&&x.c<4?x.gb1():this.kq(3)},
sa4(d,e){this.fm(3,e)},
ge6(){return this.kq(0)/this.e.gb1()},
se6(d){this.fm(0,d*this.e.gb1())},
gdX(){return this.kq(1)/this.e.gb1()},
sdX(d){this.fm(1,d*this.e.gb1())},
ge4(){return this.kq(2)/this.e.gb1()},
se4(d){this.fm(2,d*this.e.gb1())},
ge9(){return this.ga4(0)/this.e.gb1()},
se9(d){this.fm(3,d*this.e.gb1())},
geM(){return A.ee(this)},
em(d,e){var x=this
x.fm(0,e.gX(e))
x.fm(1,e.ga5())
x.fm(2,e.ga6(e))
x.fm(3,e.ga4(e))},
fh(d,e,f){var x=this,w=x.e.c
if(w>0){x.fm(0,d)
if(w>1){x.fm(1,e)
if(w>2)x.fm(2,f)}}},
dZ(d,e,f,g){var x=this,w=x.e.c
if(w>0){x.fm(0,d)
if(w>1){x.fm(1,e)
if(w>2){x.fm(2,f)
if(w>3)x.fm(3,g)}}}},
gU(d){return new A.dv(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.tF){x=C.M(u,C.n(u).i("j.E"))
x=C.a2(x)
w=C.M(e,C.n(e).i("j.E"))
return x===C.a2(w)}if(y.L.b(e)){v=u.e.c
x=J.at(e)
if(x.gp(e)!==v)return!1
if(u.kq(0)!==x.h(e,0))return!1
if(v>1){if(u.kq(1)!==x.h(e,1))return!1
if(v>2){if(u.kq(2)!==x.h(e,2))return!1
if(v>3)if(u.kq(3)!==x.h(e,3))return!1}}return!0}return!1},
gu(d){var x=C.M(this,C.n(this).i("j.E"))
return C.a2(x)},
$ibP:1,
$ibO:1,
giM(d){return this.e}}
A.tG.prototype={
c7(d){var x=this
return new A.tG(x.a,x.b,x.c,x.d)},
gp(d){var x=this.d,w=x.e
w=w==null?null:w.b
return w==null?x.c:w},
gcn(){return this.d.e},
gb1(){return this.d.gb1()},
gbF(){return B.y},
ghZ(d){return this.a},
giA(d){return this.b},
dg(d,e,f){var x,w,v=this
v.a=e
v.b=f
x=v.d
w=x.c
v.c=f*x.a*w+e*w},
gM(d){return this},
q(){var x,w=this,v=w.d
if(++w.a===v.a){w.a=0
if(++w.b===v.b)return!1}x=w.c
x+=v.e==null?v.c:1
w.c=x
return x<v.d.length},
er(d,e){var x=this.d,w=x.e
if(w!=null)x=w.jx(0,x.d[this.c],e)
else x=e<x.c?x.d[this.c+e]:0
return x},
h(d,e){return this.er(0,e)},
l(d,e,f){var x,w,v=this.d
if(e<v.c){v=v.d
x=this.c
w=D.c.C(D.c.b5(f,0,255))
v.$flags&2&&C.f(v)
v[x+e]=w}},
gbT(d){return this.d.d[this.c]},
sbT(d,e){var x=this.d.d,w=this.c,v=D.c.C(D.c.b5(e,0,255))
x.$flags&2&&C.f(x)
x[w]=v},
gX(d){var x=this.d,w=x.e
if(w==null)x=x.c>0?x.d[this.c]:0
else x=w.j_(x.d[this.c])
return x},
sX(d,e){var x,w,v=this.d
if(v.c>0){v=v.d
x=this.c
w=D.c.C(D.c.b5(e,0,255))
v.$flags&2&&C.f(v)
v[x]=w}},
ga5(){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c]
else w=v>1?w.d[x.c+1]:0}else w=v.iY(w.d[x.c])
return w},
sa5(d){var x,w=this.d,v=w.c
if(v===2){w=w.d
v=this.c
x=D.c.C(D.c.b5(d,0,255))
w.$flags&2&&C.f(w)
w[v]=x}else if(v>1){w=w.d
v=this.c
x=D.c.C(D.c.b5(d,0,255))
w.$flags&2&&C.f(w)
w[v+1]=x}},
ga6(d){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c]
else w=v>2?w.d[x.c+2]:0}else w=v.iX(w.d[x.c])
return w},
sa6(d,e){var x,w=this.d,v=w.c
if(v===2){w=w.d
v=this.c
x=D.c.C(D.c.b5(e,0,255))
w.$flags&2&&C.f(w)
w[v]=x}else if(v>2){w=w.d
v=this.c
x=D.c.C(D.c.b5(e,0,255))
w.$flags&2&&C.f(w)
w[v+2]=x}},
ga4(d){var x=this,w=x.d,v=w.e
if(v==null){v=w.c
if(v===2)w=w.d[x.c+1]
else w=v>3?w.d[x.c+3]:255}else w=v.jy(w.d[x.c])
return w},
sa4(d,e){var x,w=this.d,v=w.c
if(v===2){w=w.d
v=this.c
x=D.c.C(D.c.b5(e,0,255))
w.$flags&2&&C.f(w)
w[v+1]=x}else if(v>3){w=w.d
v=this.c
x=D.c.C(D.c.b5(e,0,255))
w.$flags&2&&C.f(w)
w[v+3]=x}},
ge6(){return this.gX(0)/this.d.gb1()},
se6(d){this.sX(0,d*this.d.gb1())},
gdX(){return this.ga5()/this.d.gb1()},
sdX(d){this.sa5(d*this.d.gb1())},
ge4(){return this.ga6(0)/this.d.gb1()},
se4(d){this.sa6(0,d*this.d.gb1())},
ge9(){return this.ga4(0)/this.d.gb1()},
se9(d){this.sa4(0,d*this.d.gb1())},
geM(){return this.d.c===2?this.gX(0):A.ee(this)},
em(d,e){var x=this
if(x.d.e!=null)x.sbT(0,e.gbT(e))
else{x.sX(0,e.gX(e))
x.sa5(e.ga5())
x.sa6(0,e.ga6(e))
x.sa4(0,e.ga4(e))}},
fh(d,e,f){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.b.C(d)
v.$flags&2&&C.f(v)
v[x]=w
if(u>1){v[x+1]=D.b.C(e)
if(u>2)v[x+2]=D.b.C(f)}}},
dZ(d,e,f,g){var x,w,v=this.d,u=v.c
if(u>0){v=v.d
x=this.c
w=D.b.C(d)
v.$flags&2&&C.f(v)
v[x]=w
if(u>1){v[x+1]=D.b.C(e)
if(u>2){v[x+2]=D.b.C(f)
if(u>3)v[x+3]=D.b.C(g)}}}},
gU(d){return new A.dv(this)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(e instanceof A.tG){x=C.M(u,C.n(u).i("j.E"))
x=C.a2(x)
w=C.M(e,C.n(e).i("j.E"))
return x===C.a2(w)}if(y.L.b(e)){x=u.d
w=x.e
v=w!=null?w.b:x.c
x=J.at(e)
if(x.gp(e)!==v)return!1
if(u.er(0,0)!==x.h(e,0))return!1
if(v>1){if(u.er(0,1)!==x.h(e,1))return!1
if(v>2){if(u.er(0,2)!==x.h(e,2))return!1
if(v>3)if(u.er(0,3)!==x.h(e,3))return!1}}return!0}return!1},
gu(d){var x=C.M(this,C.n(this).i("j.E"))
return C.a2(x)},
$ibP:1,
$ibO:1,
giM(d){return this.d}}
A.cE.prototype={
c7(d){return new A.cE()},
giM(d){return $.aYo()},
ghZ(d){return 0},
giA(d){return 0},
gp(d){return 0},
gb1(){return 0},
gbF(){return B.y},
gcn(){return null},
h(d,e){return 0},
l(d,e,f){},
gbT(d){return 0},
sbT(d,e){},
gX(d){return 0},
sX(d,e){},
ga5(){return 0},
sa5(d){},
ga6(d){return 0},
sa6(d,e){},
ga4(d){return 0},
sa4(d,e){},
ge6(){return 0},
se6(d){},
gdX(){return 0},
sdX(d){},
ge4(){return 0},
se4(d){},
ge9(){return 0},
se9(d){},
geM(){return 0},
em(d,e){},
fh(d,e,f){},
dZ(d,e,f,g){},
dg(d,e,f){},
gM(d){return this},
q(){return!1},
k(d,e){if(e==null)return!1
return e instanceof A.cE},
gu(d){return 0},
gU(d){return new A.dv(this)},
$ibP:1,
$ibO:1}
A.agn.prototype={
N(){return"FlipDirection."+this.b}}
A.Si.prototype={
j(d){return"ImageException: "+this.a},
$idb:1}
A.fj.prototype={
gp(d){return this.c-this.d},
h(d,e){return J.k(this.a,this.d+e)},
l(d,e,f){J.b7(this.a,this.d+e,f)
return f},
a0(d,e){var x=this,w=x.a,v=x.e,u=x.d
return A.ba(w,v,x.c-u-e,u+e)},
kY(d,e,f,g){var x=this.a,w=J.c3(x),v=this.d+d
if(f instanceof A.fj)w.c4(x,v,v+e,f.a,f.d+g)
else w.c4(x,v,v+e,y.L.a(f),g)},
pa(d,e,f){return this.kY(d,e,f,0)},
axT(d,e,f){var x=this.a,w=this.d+d
J.kZ(x,w,w+e,f)},
FM(d,e,f){var x=this,w=f!=null?x.b+f:x.d
return A.ba(x.a,x.e,d,w+e)},
en(d){return this.FM(d,0,null)},
pB(d,e){return this.FM(d,0,e)},
zK(d,e){return this.FM(d,e,null)},
bj(){return J.k(this.a,this.d++)},
ei(d){var x=this.en(d)
this.d=this.d+(x.c-x.d)
return x},
ep(d){var x,w,v,u,t,s=this
if(d==null){x=C.b([],y.t)
for(w=s.c;v=s.d,v<w;){u=s.a
s.d=v+1
t=J.k(u,v)
if(t===0)return C.fY(x,0,null)
x.push(t)}throw C.e(A.aI("EOF reached without finding string terminator (length: "+C.q(d)+")"))}return C.fY(s.ei(d).da(),0,null)},
yJ(){return this.ep(null)},
a1K(d){var x,w,v,u,t=this,s=C.b([],y.t)
for(x=t.c;w=t.d,w<x;){v=t.a
t.d=w+1
u=J.k(v,w)
s.push(u)
if(u===10||s.length>=d)return C.fY(s,0,null)}return C.fY(s,0,null)},
azH(){return this.a1K(256)},
azI(){var x,w,v,u,t=this,s=C.b([],y.t)
for(x=t.c;w=t.d,w<x;){v=t.a
t.d=w+1
u=J.k(v,w)
if(u===0)return new C.Ad(!0).Ah(s,0,null,!0)
s.push(u)}return D.a9.Ks(0,s,!0)},
O(){var x=this,w=J.k(x.a,x.d++)&255,v=J.k(x.a,x.d++)&255
if(x.e)return w<<8|v
return v<<8|w},
l4(){var x=this,w=J.k(x.a,x.d++)&255,v=J.k(x.a,x.d++)&255,u=J.k(x.a,x.d++)&255
if(x.e)return u|v<<8|w<<16
return w|v<<8|u<<16},
J(){var x=this,w=J.k(x.a,x.d++)&255,v=J.k(x.a,x.d++)&255,u=J.k(x.a,x.d++)&255,t=J.k(x.a,x.d++)&255
if(x.e)return(w<<24|v<<16|u<<8|t)>>>0
return(t<<24|u<<16|v<<8|w)>>>0},
EI(){return A.beV(this.MD())},
MD(){var x=this,w=J.k(x.a,x.d++)&255,v=J.k(x.a,x.d++)&255,u=J.k(x.a,x.d++)&255,t=J.k(x.a,x.d++)&255,s=J.k(x.a,x.d++)&255,r=J.k(x.a,x.d++)&255,q=J.k(x.a,x.d++)&255,p=J.k(x.a,x.d++)&255
if(x.e)return(D.b.c_(w,56)|D.b.c_(v,48)|D.b.c_(u,40)|D.b.c_(t,32)|s<<24|r<<16|q<<8|p)>>>0
return(D.b.c_(p,56)|D.b.c_(q,48)|D.b.c_(r,40)|D.b.c_(s,32)|t<<24|u<<16|v<<8|w)>>>0},
yT(d,e,f){var x,w=this,v=w.a
if(y.D.b(v))return w.a2w(e,f)
x=w.b+w.d+e
return J.aKF(v,x,f<=0?w.c:x+f)},
a2w(d,e){var x,w=this,v=e==null?w.c-w.d-d:e,u=w.a
if(y.D.b(u))return J.d5(D.k.gaj(u),u.byteOffset+w.d+d,v)
x=w.d+d
x=J.aKF(u,x,x+v)
return new Uint8Array(C.bn(x))},
da(){return this.a2w(0,null)},
yV(){var x=this.a
if(y.D.b(x))return J.i2(D.k.gaj(x),x.byteOffset+this.d,null)
return J.i2(D.k.gaj(this.da()),0,null)}}
A.anz.prototype={
d3(d){var x,w,v=this
if(v.a===v.c.length)v.ae2()
x=v.c
w=v.a++
x.$flags&2&&C.f(x)
x[w]=d&255},
a32(d){this.d3(d&255)
this.d3(D.b.I(d,8)&255)},
Fc(d){var x=this
x.d3(d&255)
x.d3(d>>>8&255)
x.d3(d>>>16&255)
x.d3(d>>>24&255)},
ae3(d){var x,w,v=this.c.length,u=v===0?8192:v*2
v=this.c
x=v.length
w=new Uint8Array(x+u)
D.k.fg(w,0,x,v)
this.c=w},
ae2(){return this.ae3(null)},
gp(d){return this.a}}
A.xM.prototype={
C(d){var x=this.b
return x===0?0:D.b.e1(this.a,x)},
lR(d){var x=this.b
return x===0?0:this.a/x},
k(d,e){if(e==null)return!1
return e instanceof A.xM&&this.a===e.a&&this.b===e.b},
gu(d){return C.P(this.a,this.b,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a)},
j(d){return""+this.a+"/"+this.b}}
A.VL.prototype={
j(d){return C.x(this).j(0)+"(0, 0, 0, 1)"},
k(d,e){if(e==null)return!1
if(this===e)return!0
if(J.W(e)!==C.x(this))return!1
return e instanceof A.VL},
gu(d){return 4278190080}}
A.ao8.prototype={
N(){return"PdfPageMode."+this.b}}
A.ao1.prototype={
a9y(d,e,f,g,h){var x,w,v,u,t,s,r=this,q=null,p=$.b_J()
r.e!==$&&C.by()
p=r.e=new A.VR(p,new A.ao3(r),!1,h)
x=C.b([],y.aJ)
w=y.N
v=y.K
u=A.tu(C.aJ(["/Type",B.abN],w,v),v)
t=r.b++
s=y.s
u=new A.VQ(x,r,t,0,u,p,C.b([],s),q,q,0)
t=r.c
t.H(0,u)
v=A.tu(C.aJ(["/Type",B.abT],w,v),v)
x=r.b++
p=new A.VK(u,f,r,x,0,v,p,C.b([],s),q,q,0)
t.H(0,p)
r.d!==$&&C.by()
r.d=p},
gauj(){var x,w,v,u=this.as
if(u==null){x=$.aOB()
u=new C.bW(new C.c7(Date.now(),0,!1).n_())
w=J.mQ(32,y.p)
for(v=0;v<32;++v)w[v]=x.DY(256)
u=this.as=new Uint8Array(C.bn(B.MH.eb(u.a0(u,w)).a))}return u},
H_(d,e){return this.aqM(d,!1)},
aqM(d,e){var x=0,w=C.U(y.aT),v=this,u,t,s,r,q,p,o,n,m
var $async$H_=C.V(function(f,g){if(f===1)return C.R(g,w)
while(true)switch(x){case 0:p=v.b
o=A.EG(null,y.K)
n=C.aP(y.c)
m=C.b([],y.s)
for(u=v.c.gU(0),t=new C.lT(u,new A.ao2()),s=o.a;t.q();){r=u.gM(0)
r.mP()
if(r instanceof A.ao6)s.l(0,"/Info",new A.dS(r.a,r.b))
n.H(0,r)}q=new A.pb(v.gauj(),B.ac0,!1)
s.l(0,"/ID",A.VJ(C.b([q,q],y.cN),y.bv))
u=v.d
u===$&&C.a()
new A.VS(o,n,p,m,null,null,0).l1(u,d)
return C.S(null,w)}})
return C.T($async$H_,w)},
Fn(d,e){return this.a3F(0,!1)},
a3F(d,e){var x=0,w=C.U(y.D),v,u=this
var $async$Fn=C.V(function(f,g){if(f===1)return C.R(g,w)
while(true)switch(x){case 0:v=A.aJF(new A.ao4(u,!1),y.D)
x=1
break
case 1:return C.S(v,w)}})
return C.T($async$Fn,w)}}
A.ao7.prototype={
geO(d){var x,w,v=this.e
if(v==null||v.h(0,B.nV)==null)return B.e7
try{x=J.aPd(v.h(0,B.nV),1)
if(x>=0&&x<8){v=B.a3X[x]
return v}return B.e7}catch(w){if(y.b8.b(C.aF(w)))return B.e7
else throw w}},
j(d){var x=this,w=null,v=x.a,u=x.b,t=x.e,s=t!=null,r=!s||t.h(0,B.nQ)==null?w:D.a9.fa(0,t.h(0,B.nQ)),q=!s||t.h(0,B.nR)==null?w:D.a9.fa(0,t.h(0,B.nR)),p=!s||t.h(0,B.km)==null?w:J.abd(J.k(t.h(0,B.km),0))/J.abd(J.k(t.h(0,B.km),1)),o=!s||t.h(0,B.kn)==null?w:J.abd(J.k(t.h(0,B.kn),0))/J.abd(J.k(t.h(0,B.kn),1)),n=!s||t.h(0,B.nS)==null?v:t.h(0,B.nS)
t=!s||t.h(0,B.nT)==null?u:t.h(0,B.nT)
return"width: "+C.q(v)+" height: "+u+"\nexifVersion: "+C.q(r)+" flashpixVersion: "+C.q(q)+"\nxResolution: "+C.q(p)+" yResolution: "+C.q(o)+"\npixelXDimension: "+C.q(n)+" pixelYDimension: "+C.q(t)+"\norientation: "+x.geO(0).j(0)}}
A.aG.prototype={
N(){return"PdfExifTag."+this.b}}
A.j0.prototype={
hj(d,e,f){var x,w,v,u,t,s,r
if(f!=null){e.d9(C.aZ(f,32,!1,y.p))
f+=2}e.d9(new C.bW("["))
x=this.a
if(x.length!==0){for(w=f!=null,v=y.p,u=0;u<x.length;++u){t=x[u]
if(w){e.dN(1)
s=e.a
r=e.b++
s.$flags&2&&C.f(s)
s[r]=10
if(!(t instanceof A.ce)&&!(t instanceof A.j0)){s=C.aZ(f,32,!1,v)
e.dN(f)
D.k.n6(e.a,e.b,s)
e.b+=f}}else{if(u>0)s=!(t instanceof A.cY||t instanceof A.pb||t instanceof A.j0||t instanceof A.ce)
else s=!1
if(s){e.dN(1)
s=e.a
r=e.b++
s.$flags&2&&C.f(s)
s[r]=32}}t.hj(d,e,f)}if(w)e.jp(10)}if(f!=null)e.d9(C.aZ(f-2,32,!1,y.p))
e.d9(new C.bW("]"))},
a2D(){var x,w,v,u=this.a
if(u.length<=1)return
x=C.aLW(this.$ti.c,y.cJ)
for(w=u.length,v=0;v<u.length;u.length===w||(0,C.z)(u),++v)x.l(0,u[v],!0)
D.d.ab(u)
D.d.V(u,new C.bz(x,C.n(x).i("bz<1>")))},
k(d,e){if(e==null)return!1
if(e instanceof A.j0)return this.a===e.a
return!1},
gu(d){return C.eP(this.a)}}
A.N8.prototype={
eb(d){var x,w,v,u,t,s=d.length,r=D.b.bV(s+3,4),q=new Uint8Array(r*5+2)
for(x=0,w=0;w<s;){q[x]=0
v=x+1
q[v]=0
q[x+2]=0
q[x+3]=0
q[x+4]=0
r=s-w
switch(r){case 3:u=(d[w]<<24|d[w+1]<<16|d[w+2]<<8|0)>>>0
break
case 2:u=(d[w]<<24|d[w+1]<<16|0)>>>0
break
case 1:u=(d[w]<<24|0)>>>0
break
default:u=(d[w]<<24|d[w+1]<<16|d[w+2]<<8|d[w+3]|0)>>>0}if(u===0&&r>=4){q[x]=122
w+=4
x=v
continue}for(t=4;t>=0;--t){q[x+t]=33+D.b.b3(u,85)
u=u/85|0}if(r<4){x+=r+1
break}w+=4
x+=5}v=x+1
q[x]=126
q[v]=62
return D.k.dh(q,0,v+1)}}
A.bR.prototype={
j(d){var x=null,w=new A.xw(new Uint8Array(65536))
this.hj(new A.dT(0,0,this,B.ac_,C.b([],y.s),x,x,0,y.c),w,x)
return C.fY(D.k.dh(w.a,0,w.b),0,x)}}
A.tt.prototype={
hj(d,e,f){e.d9(new C.bW("false"))},
k(d,e){if(e==null)return!1
if(e instanceof A.tt)return!0
return!1},
gu(d){return 218159}}
A.VN.prototype={}
A.ce.prototype={
l(d,e,f){this.a.l(0,e,f)},
h(d,e){return this.a.h(0,e)},
hj(d,e,f){var x,w={}
w.a=f
x=f!=null
if(x)e.d9(C.aZ(f,32,!1,y.p))
e.d9(B.Tv)
w.b=0
w.c=1
if(x){e.jp(10)
w.a=f+2
x=this.a
w.b=new C.bz(x,C.n(x).i("bz<1>")).ip(0,0,new A.ao_())}this.a.aA(0,new A.ao0(w,this,e,d))
x=w.a
if(x!=null){f=x-2
w.a=f
e.d9(C.aZ(f,32,!1,y.p))}e.d9(B.Tw)},
aq(d,e){return this.a.aq(0,e)},
bN(d){var x,w,v,u,t,s
for(x=d.a,w=new C.dJ(x,x.r,x.e),v=this.a;w.q();){u=w.d
t=x.h(0,u)
t.toString
s=v.h(0,u)
if(s==null)v.l(0,u,t)
else if(t instanceof A.j0&&s instanceof A.j0){D.d.V(s.a,t.a)
s.a2D()}else if(t instanceof A.ce&&s instanceof A.ce)s.bN(t)
else v.l(0,u,t)}},
k(d,e){if(e==null)return!1
if(e instanceof A.ce)return this.a===e.a
return!1},
gu(d){return C.eP(this.a)}}
A.EH.prototype={
hj(d,e,f){var x,w,v=this,u="/Filter",t=A.EG(v.a,y.K),s=t.a
if(s.aq(0,u))x=v.b
else{x=null
if(v.e&&d.d.a!=null){w=new Uint8Array(C.bn(d.d.a.$1(v.b)))
if(w.byteLength<v.b.byteLength){s.l(0,u,B.abK)
x=w}}}if(x==null){x=v.b
if(v.c){x=new A.N8().eb(x)
s.l(0,u,B.abJ)}}if(v.d&&d.d.b!=null)x=d.d.b.$2(x,d)
s.l(0,"/Length",new A.ey(x.length))
t.hj(d,e,f)
if(f!=null)e.jp(10)
e.d9(new C.bW("stream\n"))
e.d9(x)
e.d9(new C.bW("\nendstream"))}}
A.dS.prototype={
hj(d,e,f){e.d9(new C.bW(""+this.a+" "+this.b+" R"))},
k(d,e){if(e==null)return!1
if(e instanceof A.dS)return this.a===e.a&&this.b===e.b
return!1},
gu(d){return D.b.gu(this.a)+D.b.gu(this.b)}}
A.cY.prototype={
hj(d,e,f){var x,w,v,u,t=C.b([],y.t)
for(x=new C.bW(this.a),w=y.W,x=new C.bX(x,x.gp(0),w.i("bX<ab.E>")),w=w.i("ab.E");x.q();){v=x.d
if(v==null)v=w.a(v)
u=!0
if(!(v<33))if(!(v>126))if(v!==35)u=v===47&&t.length!==0||v===91||v===93||v===40||v===60||v===62
if(u){t.push(35)
D.d.V(t,new C.bW(D.e.c0(D.b.jv(v,16),2,"0")))}else t.push(v)}e.d9(t)},
k(d,e){if(e==null)return!1
if(e instanceof A.cY)return this.a===e.a
return!1},
gu(d){return D.e.gu(this.a)}}
A.ey.prototype={
hj(d,e,f){var x,w,v=this.a
if(C.o0(v))e.d9(new C.bW(D.b.j(D.c.C(v))))
else{x=D.c.av(v,5)
if(D.e.n(x,".")){w=x.length-1
for(;v=x[w],v==="0";)--w
x=D.e.af(x,0,(v==="."?w-1:w)+1)}e.d9(new C.bW(x))}},
k(d,e){if(e==null)return!1
if(e instanceof A.ey)return this.a===e.a
return!1},
gu(d){return D.c.gu(this.a)}}
A.ik.prototype={
hj(d,e,f){var x,w,v,u
for(x=this.a,w=0;w<x.length;++w){if(w>0){e.dN(1)
v=e.a
u=e.b++
v.$flags&2&&C.f(v)
v[u]=32}new A.ey(x[w]).hj(d,e,f)}},
l1(d,e){return this.hj(d,e,null)},
k(d,e){if(e==null)return!1
if(e instanceof A.ik)return this.a===e.a
return!1},
gu(d){return C.eP(this.a)}}
A.aod.prototype={
N(){return"PdfVersion."+this.b}}
A.VR.prototype={}
A.dT.prototype={
ayV(d){var x=d.b
d.d9(new C.bW(""+this.a+" "+this.b+" obj\n"))
this.Nt(d)
d.d9(new C.bW("endobj\n"))
return x},
Nt(d){this.c.hj(this,d,null)
d.jp(10)}}
A.a4Z.prototype={}
A.xw.prototype={
dN(d){var x,w=this.a,v=this.b
if(w.length-v>=d)return
x=new Uint8Array(v+d+65536)
D.k.n6(x,0,w)
this.a=x},
jp(d){var x,w
this.dN(1)
x=this.a
w=this.b++
x.$flags&2&&C.f(x)
x[w]=d},
d9(d){var x=this,w=J.at(d)
x.dN(w.gp(d))
D.k.n6(x.a,x.b,d)
x.b=x.b+w.gp(d)},
azu(d){var x,w,v,u,t,s=this
if(d.length===0)s.jp(10)
else for(x=d.split("\n"),w=x.length,v=0;v<w;++v){u=x[v]
if(u.length!==0){t=new C.bW("% "+u+"\n")
s.dN(t.gp(0))
D.k.n6(s.a,s.b,t)
s.b=s.b+t.gp(0)}}}}
A.aob.prototype={
N(){return"PdfStringFormat."+this.b}}
A.pb.prototype={
amR(d,e){var x,w,v,u,t
for(x=e.length,w=0;w<x;++w){v=e[w]
switch(v){case 10:d.dN(1)
u=d.a
t=d.b++
u.$flags&2&&C.f(u)
u[t]=92
d.dN(1)
t=d.a
u=d.b++
t.$flags&2&&C.f(t)
t[u]=110
break
case 13:d.dN(1)
u=d.a
t=d.b++
u.$flags&2&&C.f(u)
u[t]=92
d.dN(1)
t=d.a
u=d.b++
t.$flags&2&&C.f(t)
t[u]=114
break
case 9:d.dN(1)
u=d.a
t=d.b++
u.$flags&2&&C.f(u)
u[t]=92
d.dN(1)
t=d.a
u=d.b++
t.$flags&2&&C.f(t)
t[u]=116
break
case 8:d.dN(1)
u=d.a
t=d.b++
u.$flags&2&&C.f(u)
u[t]=92
d.dN(1)
t=d.a
u=d.b++
t.$flags&2&&C.f(t)
t[u]=98
break
case 12:d.dN(1)
u=d.a
t=d.b++
u.$flags&2&&C.f(u)
u[t]=92
d.dN(1)
t=d.a
u=d.b++
t.$flags&2&&C.f(t)
t[u]=102
break
case 40:d.dN(1)
u=d.a
t=d.b++
u.$flags&2&&C.f(u)
u[t]=92
d.dN(1)
t=d.a
u=d.b++
t.$flags&2&&C.f(t)
t[u]=40
break
case 41:d.dN(1)
u=d.a
t=d.b++
u.$flags&2&&C.f(u)
u[t]=92
d.dN(1)
t=d.a
u=d.b++
t.$flags&2&&C.f(t)
t[u]=41
break
case 92:d.dN(1)
u=d.a
t=d.b++
u.$flags&2&&C.f(u)
u[t]=92
d.dN(1)
t=d.a
u=d.b++
t.$flags&2&&C.f(t)
t[u]=92
break
default:d.dN(1)
u=d.a
t=d.b++
u.$flags&2&&C.f(u)
u[t]=v}}},
Ur(d,e){var x,w,v,u,t,s
switch(this.b.a){case 0:d.jp(60)
for(x=e.length,w=0;w<x;++w){v=e[w]
u=v>>>4&15
u=u<10?u+48:u+97-10
d.dN(1)
t=d.a
s=d.b++
t.$flags&2&&C.f(t)
t[s]=u
u=v&15
u=u<10?u+48:u+97-10
d.dN(1)
t=d.a
s=d.b++
t.$flags&2&&C.f(t)
t[s]=u}d.jp(62)
break
case 1:d.jp(40)
this.amR(d,e)
d.jp(41)
break}},
hj(d,e,f){var x=this
if(!x.c||d.d.b==null)return x.Ur(e,x.a)
x.Ur(e,d.d.b.$2(x.a,d))},
k(d,e){if(e==null)return!1
if(e instanceof A.pb)return this.a===e.a
return!1},
gu(d){return C.eP(this.a)}}
A.VM.prototype={
N(){return"PdfCrossRefEntryType."+this.b}}
A.jF.prototype={
abT(d,e,f){var x,w,v={}
v.a=e
x=new A.aoh(v,d)
w=f[0]
x.$2(w,this.e===B.kl?1:0)
x.$2(f[1],this.c)
x.$2(f[2],this.b)
return v.a},
k(d,e){if(e==null)return!1
if(e instanceof A.jF)return this.c===e.c
return!1},
j(d){var x=this
return""+x.a+" "+x.b+" obj "+x.e.b+" "+x.c},
gu(d){return this.c}}
A.VS.prototype={
XI(d,e,f){var x,w,v,u,t,s
d.d9(new C.bW(""+e+" "+f.length+"\n"))
for(x=f.length,w=0;w<f.length;f.length===x||(0,C.z)(f),++w){v=f[w]
u=D.e.c0(D.b.j(v.c),10,"0")
t=D.e.c0(D.b.j(v.b),5,"0")
s=v.e===B.kl?" n ":" f "
s=new C.bW(u+" "+t+s)
d.dN(s.gp(0))
D.k.n6(d.a,d.b,s)
d.b=d.b+s.gp(0)
d.dN(1)
s=d.a
t=d.b++
s.$flags&2&&C.f(s)
s[t]=10}},
hj(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=this,m=d.d.d.a
switch(m){case 0:x="1.4"
break
case 1:x="1.5"
break
default:x=null}e.d9(new C.bW("%PDF-"+C.q(x)+"\n"))
e.d9(B.VY)
e.azu("https://github.com/DavBfr/dart_pdf")
w=C.b([],y.d)
for(v=n.b,v=C.cw(v,v.r,C.n(v).c),u=v.$ti.c;v.q();){t=v.d
if(t==null)t=u.a(t)
s=e.b
r=t.a
q=t.b
p=new C.bW(""+r+" "+q+" obj\n")
e.dN(p.gp(0))
D.k.n6(e.a,e.b,p)
e.b=e.b+p.gp(0)
t.Nt(e)
t=new C.bW("endobj\n")
e.dN(t.gp(0))
D.k.n6(e.a,e.b,t)
e.b=e.b+t.gp(0)
w.push(new A.jF(s,B.kl,r,q))}n.a.a.l(0,"/Root",new A.dS(d.a,d.b))
switch(m){case 0:o=n.alx(d,e,w)
break
case 1:o=n.alw(d,e,w)
break
default:o=null}e.d9(new C.bW("startxref\n"+C.q(o)+"\n%%EOF\n"))},
l1(d,e){return this.hj(d,e,null)},
alx(d,e,f){var x,w,v,u,t,s,r,q,p,o=this
D.d.hq(f,new A.aog())
x=Math.max(o.c,D.d.gag(f).a+1)
w=C.b([],y.d)
w.push(B.ac2)
v=e.b
e.d9(new C.bW("xref\n"))
for(u=f.length,t=0,s=0,r=0;r<f.length;f.length===u||(0,C.z)(f),++r,s=p){q=f[r]
p=q.a
if(p!==s+1){o.XI(e,t,w)
D.d.ab(w)
t=p}w.push(q)}o.XI(e,t,w)
e.d9(new C.bW("trailer\n"))
u=o.a
u.a.l(0,"/Size",new A.ey(x))
u.hj(d,e,null)
e.jp(10)
return v},
alw(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.b
D.d.hq(f,new A.aoe())
x=Math.max(this.c,D.d.gag(f).a+1)
w=x+1
f.push(new A.jF(i,B.kl,x,0))
v=this.a.a
v.l(0,"/Type",B.abR)
v.l(0,"/Size",new A.ey(w))
u=y.t
t=C.b([],u)
t.push(0)
for(s=f.length,r=0,q=0,p=0;p<f.length;f.length===s||(0,C.z)(f),++p,q=o){o=f[p].a
if(o!==q+1){t.push(q-r+1)
t.push(o)
r=o}}t.push(q-r+1)
if(!(t.length===2&&t[0]===0&&t[1]===w))v.l(0,"/Index",A.anV(t))
n=C.b([1,D.c.eE(D.c.eE(Math.log(i)/0.6931471805599453)/8),1],u)
v.l(0,"/W",A.anV(n))
m=D.d.r0(n,new A.aof())
u=f.length
l=new DataView(new ArrayBuffer((u+1)*m))
for(k=m,p=0;p<f.length;f.length===u||(0,C.z)(f),++p)k=f[p].abT(l,k,n)
j=e.b
new A.dT(x,0,A.aSL(!0,J.e3(D.aI.gaj(l)),!1,!1,v),d.d,C.b([],y.s),null,null,0,y.q).ayV(e)
return j}}
A.a5_.prototype={}
A.VO.prototype={
mP(){var x,w,v
this.zT()
for(x=this.cx,w=this.c.a,v=0;!1;++v)w.l(0,"/a"+v,x[v].aBY())}}
A.aoc.prototype={
N(){return"PdfTextRenderingMode."+this.b}}
A.zF.prototype={}
A.VP.prototype={
as0(d){this.e.d9(new C.bW("W n "))},
a2a(d){var x=this.c
if(!x.gaa(0)){this.e.d9(new C.bW("Q "))
this.b=x.iR(0)}},
O2(){var x,w
this.e.d9(new C.bW("q "))
x=this.b
x===$&&C.a()
w=new C.br(new Float64Array(16))
w.dC(x.a)
this.c.i5(0,new A.zF(w))},
aul(d,e,f,g,h,i){var x=this.d,w=x.a_b$,v="/I"+e.a
if(!w.aq(0,v))w.l(0,v,e)
w=this.e
w.d9(new C.bW("q "))
switch(e.xr.a){case 0:new A.ik(C.b([h,0,0,i,f,g],y.n)).l1(x,w)
break
case 1:new A.ik(C.b([-h,0,0,i,h+f,g],y.n)).l1(x,w)
break
case 2:new A.ik(C.b([-h,0,0,-i,h+f,i+g],y.n)).l1(x,w)
break
case 3:new A.ik(C.b([h,0,0,-i,f,i+g],y.n)).l1(x,w)
break
case 4:new A.ik(C.b([0,-i,-h,0,h+f,i+g],y.n)).l1(x,w)
break
case 5:new A.ik(C.b([0,-i,h,0,f,i+g],y.n)).l1(x,w)
break
case 6:new A.ik(C.b([0,i,h,0,f,g],y.n)).l1(x,w)
break
case 7:new A.ik(C.b([0,i,-h,0,h+f,g],y.n)).l1(x,w)
break}w.d9(new C.bW(" cm "+v+" Do Q "))
x.L2$=!0},
aun(d,e,f,g){var x=this.e
new A.ik(C.b([d,e,f,g],y.cA)).l1(this.d,x)
x.d9(new C.bW(" re "))}}
A.VK.prototype={
mP(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="/AcroForm",g="/SigFlags"
i.zT()
x=i.c.a
x.l(0,"/Version",new A.cY("/1.7"))
w=i.cx
x.l(0,"/Pages",new A.dS(w.a,w.b))
w=i.db
if(w!=null)x.l(0,"/Metadata",new A.dS(w.a,w.b))
x.l(0,"/PageMode",new A.cY(B.a5g[i.fr.a]))
v=[]
w=i.x.d
w===$&&C.a()
w=w.cx.cx
u=w.length
t=0
for(;t<w.length;w.length===u||(0,C.z)(w),++t)for(s=w[t].dx,r=0;!1;++r)s[r].gXZ().gaBk()
if(v.length!==0){w=x.h(0,h)
if(w==null){w=A.EG(null,y.K)
x.l(0,h,w)
x=w}else x=w
w=y.do
w.a(x)
x=x.a
u=y.dt.a(x.h(0,g))
x.l(0,g,new A.ey((D.c.C((u==null?B.abX:u).a)|0)>>>0))
u=x.h(0,"/Fields")
if(u==null){u=A.VJ(null,y.K)
x.l(0,"/Fields",u)}y.bz.a(u)
s=y.K
q=A.EG(null,s)
for(p=v.length,u=u.a,o=y.N,n=q.a,t=0;t<v.length;v.length===p||(0,C.z)(v),++t){m=v[t]
m.gXZ()
l=m.gXZ()
k=l.gDg(l)
k=C.aJ([k.gDV(k),l.gDg(l).azK()],o,s)
n.V(0,k)
j=m.azK()
if(!D.d.n(u,j))u.push(j)}if(n.a!==0)x.l(0,"/DR",A.tu(C.aJ(["/Font",q],o,w),w))}}}
A.ao5.prototype={}
A.kv.prototype={
N(){return"PdfImageOrientation."+this.b}}
A.EI.prototype={
gbO(d){return this.xr.a>=4?this.x2:this.x1},
gbz(d){return this.xr.a<4?this.x2:this.x1}}
A.ao6.prototype={}
A.eN.prototype={
mP(){},
j(d){return C.x(this).j(0)+" "+this.c.j(0)}}
A.EJ.prototype={
Nt(d){var x=this,w=x.cx
w=A.aSL(!0,D.k.dh(w.a,0,w.b),!0,x.cy,x.c.a)
w.hj(x,d,null)
d.jp(10)}}
A.ao9.prototype={
N(){return"PdfPageRotation."+this.b}}
A.EK.prototype={
mP(){var x,w,v,u,t,s,r,q=this,p="/Contents"
q.a7Q()
x=q.x.d
x===$&&C.a()
x=x.cx
w=q.c.a
w.l(0,"/Parent",new A.dS(x.a,x.b))
x=q.cx
w.l(0,"/MediaBox",A.anV(C.b([0,0,x.a,x.b],y.n)))
for(x=q.db,v=x.length,u=q.dy,t=0;t<x.length;x.length===v||(0,C.z)(x),++t){s=x[t]
if(!u.h(0,s).d.L2$)s.y=!1}v=C.a0(x).i("aQ<1>")
x=C.M(new C.aQ(x,new A.aoa(),v),v.i("j.E"))
r=A.aSK(x)
if(w.aq(0,p)){x=w.h(0,p)
x.toString
if(x instanceof A.j0)D.d.qK(r.a,0,new C.cO(x.a,y.du))
else if(x instanceof A.dS)D.d.ir(r.a,0,x)}r.a2D()
x=r.a
v=x.length
if(v===1)w.l(0,p,D.d.gac(x))
else if(v!==0)w.l(0,p,r)}}
A.JB.prototype={
mP(){var x,w,v,u,t,s,r,q=this,p=null,o="/Resources"
q.zT()
x=y.K
w=A.EG(p,x)
if(q.L2$)w.a.l(0,"/ProcSet",A.VJ(B.a2q,y.di))
v=q.auX$
if(v.a!==0)w.a.l(0,"/Font",A.anY(v))
v=q.auY$
if(v.a!==0)w.a.l(0,"/Shading",A.anY(v))
v=q.auZ$
if(v.a!==0)w.a.l(0,"/Pattern",A.anY(v))
v=q.a_b$
if(v.a!==0)w.a.l(0,"/XObject",A.anY(v))
v=q.x
if(v.y!=null&&!q.c.a.aq(0,"/Group")){q.c.a.l(0,"/Group",A.tu(C.aJ(["/Type",B.abP,"/S",B.abW,"/CS",B.nW,"/I",new A.tt(!1),"/K",new A.tt(!1)],y.N,x),x))
u=v.y
if(u==null){u=C.b([],y.ds)
x=A.EG(p,x)
t=v.b++
s=v.e
s===$&&C.a()
s=new A.VO(u,v,t,0,x,s,C.b([],y.s),p,p,0)
v.c.H(0,s)
v.y=s
x=s}else x=u
w.a.l(0,"/ExtGState",new A.dS(x.a,x.b))}if(w.a.a!==0){x=q.c.a
if(x.aq(0,o)){r=x.h(0,o)
if(r instanceof A.ce){r.bN(w)
return}}x.l(0,o,w)}}}
A.VQ.prototype={
mP(){var x,w
this.zT()
x=this.cx
w=this.c.a
w.l(0,"/Kids",A.aSK(x))
w.l(0,"/Count",new A.ey(x.length))}}
A.xx.prototype={
a9z(d,e,f){this.c.a.l(0,"/Subtype",new A.cY(e))}}
A.eO.prototype={
j(d){return"PdfPoint("+C.q(this.a)+", "+C.q(this.b)+")"}}
A.aMd.prototype={
j(d){var x=this.a,w=this.b
return"Image "+x+"x"+w+" "+x*w*4+" bytes"}}
A.EM.prototype={
j(d){var x=this
return"PdfRect("+C.q(x.a)+", "+C.q(x.b)+", "+C.q(x.c)+", "+C.q(x.d)+")"},
an(d,e){var x=this
return new A.EM(x.a*e,x.b*e,x.c*e,x.d*e)}}
A.NF.prototype={
N(){return"BoxFit."+this.b}}
A.aep.prototype={
ar4(d){d.c=A.b59(this.a,null,d.gmM())
this.c.push(d)},
iD(a8){var x=0,w=C.U(y.D),v,u=this,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$iD=C.V(function(a9,b0){if(a9===1)return C.R(b0,w)
while(true)switch(x){case 0:x=!u.d?3:4
break
case 3:t=u.c,s=t.length,r=u.a,q=y.w,p=y.B,o=y.T,n=y.cx,m=y.dN,l=y.cd,k=0
case 5:if(!(k<t.length)){x=7
break}j=t[k]
i=new C.aE($.aw,l)
i.a=8
i.c=null
x=8
return C.N(i,$async$iD)
case 8:i=j.c
h=A.b58(i.x,!1,null)
g=h.cx
f=new A.VP(new C.t9(C.aZ(C.aS1(null),null,!1,n),m),i,g)
e=new C.br(new Float64Array(16))
e.es()
f.b=new A.zF(e)
i.dy.l(0,h,f)
i.db.push(h)
i=new C.bW("0 Tr ")
g.dN(i.gp(0))
D.k.n6(g.a,g.b,i)
g.b=g.b+i.gp(0)
i=j.a
d=i.ga0U(0)
g=i.gDU()
e=j.c
if(g){g=e==null
a0=g?null:e.cx
if(a0==null)a0=i.a
g=g?null:e.cx
if(g==null)g=i.a
a1=new A.NE(a0.b-(d.b+d.d),g.a-(d.a+d.c+0+0))}else{g=e==null
a0=g?null:e.cx
if(a0==null)a0=i.a
g=g?null:e.cx
if(g==null)g=i.a
a1=new A.NE(a0.a-(d.a+d.c+0+0),g.b-(d.b+d.d))}a2=A.aU5(null,B.Md,B.agc,null,B.aga,1,null,new A.rz(B.JP),new A.rz(B.JQ),B.a0Y,new A.rz(B.JR),new A.rz(B.JO),12,B.Q4,B.Q5,1,!1,0,0,B.ac1,1).atv(null,null,null,null,null,null)
a3=a2.w
a2.Z1(5)
a2.Z1(5)
a2.qf(a3*2)
a2.qf(a3*1.5)
a2.qf(a3*1.4)
a2.qf(a3*1.3)
a2.qf(a3*1.2)
a2.qf(a3*1.1)
g=a3*0.8
a2.at9(g,B.eM)
a2.qf(g)
a4=new A.YX()
e.toString
g=C.eu(null,null,null,q,p)
a0=C.b([a4],o)
a5=new A.w6(e,f,g,r).awN(a0)
a6=j.b.$1(a5)
a7=j.axt(a6,a5,a1)
g=j.c
e=g.cx
if(e.b===1/0){g.cx=new E.EL(a7.a,a7.b,e.c,e.d,e.e,e.f)
i.gDU()}j.bp(a6,a5)
case 6:t.length===s||(0,C.z)(t),++k
x=5
break
case 7:u.d=!0
case 4:x=9
return C.N(u.a.Fn(0,!1),$async$iD)
case 9:v=b0
x=1
break
case 1:return C.S(v,w)}})
return C.T($async$iD,w)}}
A.h3.prototype={
N(){return"Type1Fonts."+this.b}}
A.rz.prototype={
j(d){var x=B.a79.h(0,this.a)
x.toString
return'<Type1 Font "'+x+'">'}}
A.NE.prototype={
j(d){return"BoxConstraint <0, "+C.q(this.b)+"> <0, "+C.q(this.d)+">"}}
A.aeM.prototype={
gcg(){return this.a+this.c+0+0},
j(d){var x,w,v=this,u=v.a
if(u===0&&v.c===0&&v.b===0&&v.d===0)return"EdgeInsets.zero"
x=v.c
if(u===x){w=v.b
w=x===w&&w===v.d}else w=!1
if(w)return"EdgeInsets.all("+D.c.av(u,1)+")"
return"EdgeInsets("+D.c.av(u,1)+", "+D.c.av(v.b,1)+", "+D.c.av(x,1)+", "+D.c.av(v.d,1)+")"}}
A.Cc.prototype={
a0(d,e){var x=this
return new A.Cc(x.a+e.a,x.b+e.b,x.c+e.c,x.d+e.d)}}
A.abv.prototype={}
A.abu.prototype={
j(d){return A.b0n(0,0)}}
A.Rb.prototype={}
A.D3.prototype={
Ei(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
a1.a7r(a2)
x=a1.a
x.toString
w=a2.b
v=w.b
v===$&&C.a()
u=new C.br(new Float64Array(16))
u.dC(v.a)
v=x.a
t=x.b
s=new C.ep(new Float64Array(3))
s.jB(v,t,0)
r=u.yX(s)
s=t+x.d
q=new C.ep(new Float64Array(3))
q.jB(v,s,0)
p=u.yX(q)
x=v+x.c
v=new C.ep(new Float64Array(3))
v.jB(x,t,0)
o=u.yX(v)
v=new C.ep(new Float64Array(3))
v.jB(x,s,0)
s=r.a
x=p.a
t=o.a
v=u.yX(v).a
q=y.n
n=C.b([s[0],x[0],t[0],v[0]],q)
m=C.b([s[1],x[1],t[1],v[1]],q)
q=D.d.r0(n,B.pG)
v=D.d.r0(m,B.pG)
v=a1.b.aA5(a2,new A.eO(D.d.r0(n,D.id)-q,D.d.r0(m,D.id)-v),null)
q=a1.a
t=q.c
x=q.d
s=v.gbO(0)
l=v.gbz(0)
k=A.aWw(a1.c,new A.eO(s/1,l/1),new A.eO(t,x))
j=k.a
i=j.a
j=j.b
h=k.b
g=h.a
f=(t-g)/2
t=h.b
e=(x-t)/2
x=q.a+(f+0*f)
q=q.b+(e+0*e)
f=(s-i)/2
e=(l-j)/2
d=g/i
a0=t/j
w.O2()
w.aun(x,q,g,t)
w.as0(0)
w.aul(0,v,x-(0+f+0*f)*d,q-(0+e+0*e)*a0,v.gbO(0)*d,v.gbz(0)*a0)
w.a2a(0)}}
A.ais.prototype={
gbO(d){return this.d.a>=4?this.c:this.b},
gbz(d){return this.d.a<4?this.c:this.b},
aA5(d,e,f){var x=this.e
if(x.h(0,0)==null)x.l(0,0,this.Ys(d))
if(x.h(0,0).x!==d.d)x.l(0,0,this.Ys(d))
x=x.h(0,0)
x.toString
return x}}
A.UY.prototype={
arG(d,e,f){var x
if(f==null)return A.b54(d.d,this.f)
x=A.aWK(this.f)
if(x==null)throw C.e(C.f2("Unable decode the image"))
return A.aSM(d.d,A.bcV(x,f),B.e7)},
Ys(d){return this.arG(d,null,null)}}
A.EB.prototype={
N(){return"PageOrientation."+this.b}}
A.Vs.prototype={
gmM(){var x=this.c
x=x==null?null:x.cx
return x==null?this.a.a:x},
gMN(){var x=this.a.ga0U(0)
return x},
axt(d,e,f){var x,w,v,u,t,s,r=this,q=r.gMN()
q.toString
x=f.b
if(x<1/0)w=x
else{v=d.b.gbO(0)
v.toString
x=D.b.b5(v,0,x)
w=x}x=f.d
if(x<1/0)u=x
else{v=d.b.gbz(0)
v.toString
x=D.b.b5(v,0,x)
u=x}x=d.b
v=x.gbO(0)
v.toString
x=x.gbz(0)
x.toString
x=A.aWw(d.c,new A.eO(v,x),new A.eO(w,u)).b
v=x.a
x=x.b
d.a=new A.EM(0,0,v,x)
t=r.gmM().a===1/0?v+q.a+q.c:r.gmM().a
s=r.gmM().b===1/0?x+q.b+q.d:r.gmM().b
d.a=new A.EM(q.a,s-x-q.b,v,x)
return new A.eO(t,s)},
bp(d,e){var x,w,v,u,t=this,s=t.gMN()
s.toString
t.gmM()
s.gcg()
t.gmM()
if(t.a.gDU()){s=t.gMN()
s.toString
x=e.b
x.O2()
w=new Float64Array(16)
v=new C.br(w)
v.es()
v.MP(-1.5707963267948966)
u=s.b
v.f0(-t.gmM().b-s.a+u,-t.gmM().b+t.gmM().a+u-s.c,0,1)
s=x.e
new A.ik(C.b([w[0],w[1],w[4],w[5],w[12],w[13]],y.n)).l1(x.d,s)
s.d9(new C.bW(" cm "))
s=x.b
s===$&&C.a()
s.a.fw(0,v)
d.Ei(e)
x.a2a(0)}else d.Ei(e)}}
A.anL.prototype={
gDU(){var x,w=this.b
if(w===B.aad){x=this.a
x=x.b>x.a}else x=!1
if(!x)if(w===B.aae){w=this.a
w=w.a>w.b}else w=!1
else w=!0
return w},
ga0U(d){var x=this.c
if(this.gDU())return new A.Cc(x.d,x.a,x.b,x.c)
else return x}}
A.Rn.prototype={
N(){return"FontWeight."+this.b}}
A.Rm.prototype={
N(){return"FontStyle."+this.b}}
A.av3.prototype={
N(){return"TextDecorationStyle."+this.b}}
A.YG.prototype={
k(d,e){if(e==null)return!1
if(!(e instanceof A.YG))return!1
return this.a===e.a},
gu(d){return D.b.gu(this.a)},
j(d){var x,w=this.a
if(w===0)return"TextDecoration.none"
x=C.b([],y.s)
if((w&1)!==0)x.push("underline")
if((w&2)!==0)x.push("overline")
if((w&4)!==0)x.push("lineThrough")
if(x.length===1)return"TextDecoration."+x[0]
return"TextDecoration.combine(["+D.d.ca(x,", ")+"])"}}
A.avB.prototype={
Cx(d,e,f,g,h,i,j,k,l,m,n,o,p,q,a0,a1,a2,a3,a4,a5){var x=this,w=x.gDg(0),v=m==null?x.r:m,u=p==null?x.w:p,t=a0==null?x.x:a0,s=a3==null?x.Q:a3,r=f==null?x.ay:f
return A.aU5(x.ax,x.b,r,x.ch,x.CW,x.cx,w,x.d,x.f,v,x.e,x.c,u,x.y,t,x.at,!1,x.z,s,x.cy,x.as)},
atv(d,e,f,g,h,i){var x=null
return this.Cx(x,x,x,x,x,x,d,e,f,g,h,i,x,x,x,x,x,x,x,x)},
Z1(d){var x=null
return this.Cx(x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,d,x,x)},
qf(d){var x=null
return this.Cx(x,x,x,x,x,x,x,x,x,x,x,x,d,x,x,x,x,x,x,x)},
at9(d,e){var x=null
return this.Cx(x,x,x,x,x,x,x,x,x,x,x,x,d,x,e,x,x,x,x,x)},
gDg(d){var x,w=this
if(w.x!==B.eM)if(w.y!==B.eL){x=w.c
if(x==null)x=w.d
if(x==null)x=w.e
return x==null?w.f:x}else{x=w.e
if(x==null)x=w.c
if(x==null)x=w.d
return x==null?w.f:x}else if(w.y!==B.eL){x=w.d
if(x==null)x=w.c
if(x==null)x=w.e
return x==null?w.f:x}else{x=w.f
if(x==null)x=w.d
if(x==null)x=w.e
return x==null?w.c:x}},
j(d){var x=this
return"TextStyle(color:"+x.b.j(0)+" font:"+C.q(x.gDg(0))+" size:"+C.q(x.w)+" weight:"+x.x.j(0)+" style:"+x.y.j(0)+" letterSpacing:"+x.z+" wordSpacing:"+x.as+" lineSpacing:"+x.Q+" height:"+x.at+" background:"+C.q(x.ax)+" decoration:"+x.ay.j(0)+" decorationColor:"+C.q(x.ch)+" decorationStyle:"+x.CW.j(0)+" decorationThickness:"+x.cx+", renderingMode:"+x.cy.j(0)+")"}}
A.YX.prototype={}
A.w6.prototype={
awN(d){var x,w,v,u=this,t=C.eu(null,null,null,y.w,y.B)
t.V(0,u.c)
for(x=d.length,w=0;w<d.length;d.length===x||(0,C.z)(d),++w){v=d[w]
t.l(0,C.x(v),v)}return new A.w6(u.a,u.b,t,u.d)}}
A.wU.prototype={}
A.ZA.prototype={
Ei(d){}}
var z=a.updateTypes(["~(fj)","o(o,jb,o)","o([o])","~(t0,G<o>)","~(o,o,o,o,o,ea)","~(m,lo)","~(o,D)","D(eN<bR>)","o(jF,jF)","G<o>(G<o>{level:o?,windowBits:o})","~(o,el)","~(o,o,a4,a4,a4)","ea(ea,dT<bR>)","dS(dT<bR>)","ey(a4)","bx<m,dS>(m,dT<bR>)"])
A.aio.prototype={
$2(d,e){var x=A.aRk(e)
this.a.a.l(0,d,x)
return x},
$S:z+5}
A.aip.prototype={
$2(d,e){var x=e.c7(0)
this.a.a.l(0,d,x)
return x},
$S:z+10}
A.aiq.prototype={
$2(d,e){var x=A.aRk(e)
this.a.b.a.l(0,d,x)
return x},
$S:z+5}
A.ac0.prototype={
$4(d,e,f,g){var x,w,v=this,u=v.a
if(u.a<v.c){x=v.b.c&&v.d.ch!=null
w=v.e
if(x){x=v.d
w.dZ(x.ch.j_(d),x.ch.iY(d),x.ch.iX(d),x.ch.jy(d))}else w.dZ(d,e,f,g)
w.q();++u.a}},
$S:609}
A.agf.prototype={
$1(d){var x,w,v,u,t=this.b,s=t.fy,r=this.a,q=r.b
s=s[q]
x=t.go
w=r.a
x=x[w]
v=new Uint32Array(s*x)
u=q+1
r.b=u
if(u===t.id){r.b=0
r.a=w+1}return v},
$S:610}
A.aJ6.prototype={
$5(d,e,f,g,h){return this.a.dK(this.b-d,e,f,g,h)},
$S:46}
A.aJ7.prototype={
$5(d,e,f,g,h){return this.a.dK(this.b-d,this.c-e,f,g,h)},
$S:46}
A.aJ8.prototype={
$5(d,e,f,g,h){return this.a.dK(d,this.b-e,f,g,h)},
$S:46}
A.aJ9.prototype={
$5(d,e,f,g,h){return this.a.dK(e,d,f,g,h)},
$S:46}
A.aJa.prototype={
$5(d,e,f,g,h){return this.a.dK(this.b-e,d,f,g,h)},
$S:46}
A.aJb.prototype={
$5(d,e,f,g,h){return this.a.dK(this.b-e,this.c-d,f,g,h)},
$S:46}
A.aJc.prototype={
$5(d,e,f,g,h){return this.a.dK(e,this.b-d,f,g,h)},
$S:46}
A.aoC.prototype={
$1(d){return d!==""},
$S:16}
A.awB.prototype={
$2(d,e){return(d|e<<16)>>>0},
$S:97}
A.aiu.prototype={
$4(d,e,f,g){var x=this.b
return d+this.a*(e-d+x*(d+g-f-e))+x*(f-d)},
$S:612}
A.ait.prototype={
$5(d,e,f,g,h){var x=-e,w=d*d
return f+0.5*(d*(x+g)+w*(2*e-5*f+4*g-h)+w*d*(x+3*f-3*g+h))},
$S:613}
A.ao3.prototype={
$2(d,e){return d},
$S:z+12}
A.ao2.prototype={
$1(d){return d.y},
$S:z+7}
A.ao4.prototype={
$0(){var x=0,w=C.U(y.D),v,u=this,t
var $async$$0=C.V(function(d,e){if(d===1)return C.R(e,w)
while(true)switch(x){case 0:t=new A.xw(new Uint8Array(65536))
x=3
return C.N(u.a.H_(t,u.b),$async$$0)
case 3:v=D.k.dh(t.a,0,t.b)
x=1
break
case 1:return C.S(v,w)}})
return C.T($async$$0,w)},
$S:614}
A.anX.prototype={
$1(d){return new A.dS(d.a,d.b)},
$S:z+13}
A.anW.prototype={
$1(d){return new A.ey(d)},
$S:z+14}
A.anZ.prototype={
$2(d,e){return new C.bx(d,new A.dS(e.a,e.b),y.Z)},
$S:z+15}
A.ao_.prototype={
$2(d,e){return Math.max(d,e.length)},
$S:615}
A.ao0.prototype={
$2(d,e){var x,w=this,v=w.a,u=v.a
if(u!=null){w.c.d9(C.aZ(u,32,!1,y.p))
v.c=v.b-d.length+1}u=w.c
u.d9(new C.bW(d))
if(v.a!=null)if(e instanceof A.ce||e instanceof A.j0)u.jp(10)
else u.d9(C.aZ(v.c,32,!1,y.p))
else{x=!0
if(!(e instanceof A.ey))if(!(e instanceof A.tt))x=e instanceof A.dS
if(x)u.jp(32)}e.hj(w.d,u,v.a)
if(v.a!=null)u.jp(10)},
$S(){return C.n(this.b).i("~(m,ce.T)")}}
A.aoh.prototype={
$2(d,e){var x,w,v,u,t,s
for(x=this.b,w=this.a,v=x.$flags|0,u=0;u<d;++u){t=w.a
s=D.b.jD(e,(d-u-1)*8)
v&2&&C.f(x,9)
x.setUint8(t,s&255);++w.a}},
$S:616}
A.aog.prototype={
$2(d,e){return D.b.c8(d.a,e.a)},
$S:z+8}
A.aoe.prototype={
$2(d,e){return D.b.c8(d.a,e.a)},
$S:z+8}
A.aof.prototype={
$2(d,e){return d+e},
$S:97}
A.aoa.prototype={
$1(d){return d.y},
$S:z+7};(function aliases(){var x=A.eN.prototype
x.zT=x.mP
x=A.JB.prototype
x.a7Q=x.mP
x=A.ZA.prototype
x.a7r=x.Ei})();(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_2u,v=a._static_1,u=a.installStaticTearOff
x(A.a0q.prototype,"gaux",0,1,null,["$3$level$windowBits","$1"],["a__","tU"],9,0,0)
x(A.el.prototype,"gmZ",1,0,null,["$1","$0"],["dV","C"],2,0,0)
x(A.mL.prototype,"gmZ",1,0,null,["$1","$0"],["dV","C"],2,0,0)
x(A.rW.prototype,"gmZ",1,0,null,["$1","$0"],["dV","C"],2,0,0)
x(A.oC.prototype,"gmZ",1,0,null,["$1","$0"],["dV","C"],2,0,0)
x(A.rS.prototype,"gmZ",1,0,null,["$1","$0"],["dV","C"],2,0,0)
x(A.oD.prototype,"gmZ",1,0,null,["$1","$0"],["dV","C"],2,0,0)
x(A.rV.prototype,"gmZ",1,0,null,["$1","$0"],["dV","C"],2,0,0)
x(A.rT.prototype,"gmZ",1,0,null,["$1","$0"],["dV","C"],2,0,0)
x(A.rU.prototype,"gmZ",1,0,null,["$1","$0"],["dV","C"],2,0,0)
x(A.wG.prototype,"gmZ",1,0,null,["$1","$0"],["dV","C"],2,0,0)
var t
w(t=A.SB.prototype,"gacD","acE",3)
w(t,"gacG","acH",3)
w(t,"gacI","acJ",3)
w(t,"gacx","acy",3)
w(t,"gacz","acA",3)
v(A,"bf5","b89",0)
v(A,"beZ","b81",0)
v(A,"beX","b8_",0)
v(A,"bf3","b87",0)
v(A,"bf4","b88",0)
v(A,"bf2","b86",0)
v(A,"bf1","b85",0)
v(A,"bf0","b84",0)
v(A,"bf7","b8b",0)
v(A,"bf6","b8a",0)
v(A,"bf_","b82",0)
v(A,"beY","b80",0)
v(A,"bfi","b8m",0)
v(A,"bfg","b8k",0)
v(A,"bf8","b8c",0)
v(A,"bfa","b8e",0)
v(A,"bf9","b8d",0)
v(A,"bfb","b8f",0)
v(A,"bfj","b8n",0)
v(A,"bfh","b8l",0)
v(A,"bfc","b8g",0)
v(A,"bfd","b8h",0)
v(A,"bfe","b8i",0)
v(A,"bff","b8j",0)
w(A.Hm.prototype,"gamJ","amK",6)
w(A.Su.prototype,"gauS","auT",6)
u(A,"aOr",3,null,["$3"],["b8o"],1,0)
u(A,"bfk",3,null,["$3"],["b8p"],1,0)
u(A,"bfp",3,null,["$3"],["b8u"],1,0)
u(A,"bfq",3,null,["$3"],["b8v"],1,0)
u(A,"bfr",3,null,["$3"],["b8w"],1,0)
u(A,"bfs",3,null,["$3"],["b8x"],1,0)
u(A,"bft",3,null,["$3"],["b8y"],1,0)
u(A,"bfu",3,null,["$3"],["b8z"],1,0)
u(A,"bfv",3,null,["$3"],["b8A"],1,0)
u(A,"bfw",3,null,["$3"],["b8B"],1,0)
u(A,"bfl",3,null,["$3"],["b8q"],1,0)
u(A,"bfm",3,null,["$3"],["b8r"],1,0)
u(A,"bfn",3,null,["$3"],["b8s"],1,0)
u(A,"bfo",3,null,["$3"],["b8t"],1,0)
x(A.mN.prototype,"ga4g",0,5,null,["$5"],["dK"],11,0,0)
u(A,"bfy",6,null,["$6"],["b8M"],4,0)
u(A,"bfz",6,null,["$6"],["b8N"],4,0)
u(A,"bfx",6,null,["$6"],["b8L"],4,0)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(C.F,[A.aib,A.ax_,A.ax0,A.adW,A.jV,A.aBj,A.aFl,A.aiA,A.awZ,A.a0q,A.aiI,A.anB,A.rg,A.ae2,A.ahV,A.dv,A.oB,A.a2P,A.R3,A.lo,A.el,A.ac1,A.qQ,A.adL,A.adK,A.R5,A.agd,A.R6,A.R7,A.R8,A.Cq,A.a51,A.CM,A.CN,A.RC,A.ail,A.Sf,A.Od,A.rL,A.aiW,A.t0,A.aiX,A.zs,A.SA,A.aiY,A.aiZ,A.SB,A.ET,A.aoA,A.lE,A.xH,A.apl,A.xG,A.apn,A.Wh,A.Wk,A.Wp,A.F2,A.xI,A.Wo,A.jH,A.YW,A.avM,A.YZ,A.avO,A.Z_,A.avP,A.ajN,A.awp,A.Hl,A.awq,A.awv,A.awy,A.awA,A.Hk,A.awz,A.awr,A.uC,A.Zo,A.Zq,A.Zp,A.Zr,A.Hm,A.Zm,A.aww,A.Zn,A.awO,A.Hs,A.RX,A.RY,A.CX,A.CU,A.CY,A.S_,A.Zz,A.mJ,A.anS,A.aop,A.Si,A.fj,A.anz,A.xM,A.VL,A.ao1,A.ao7,A.bR,A.VN,A.VR,A.a4Z,A.xw,A.zF,A.VP,A.ao5,A.eO,A.aMd,A.EM,A.aep,A.rz,A.NE,A.aeM,A.abv,A.Rb,A.ZA,A.ais,A.Vs,A.anL,A.YG,A.avB,A.wU,A.w6])
u(A.aHp,A.ax_)
u(A.aHq,A.ax0)
v(C.a2K,[A.z9,A.NO,A.acy,A.hy,A.Nw,A.fM,A.fB,A.wp,A.rp,A.kl,A.wD,A.xz,A.ES,A.pd,A.pe,A.kz,A.hS,A.ux,A.eT,A.jQ,A.uD,A.yS,A.Se,A.Rr,A.Sx,A.agn,A.ao8,A.aG,A.aod,A.aob,A.VM,A.aoc,A.kv,A.ao9,A.NF,A.h3,A.EB,A.Rn,A.Rm,A.av3])
u(A.aiG,A.aiI)
u(A.Vp,A.anB)
v(C.c4,[A.RO,A.N8])
u(A.a7c,A.RO)
u(A.aFe,A.ahV)
u(A.a7d,A.aFe)
v(C.j,[A.vQ,A.vR,A.vS,A.vT,A.vU,A.vV,A.vW,A.vX,A.vY,A.vZ,A.w_,A.ka,A.mN,A.fN,A.tv,A.tw,A.tx,A.ty,A.tz,A.tA,A.tB,A.tC,A.tD,A.tE,A.tF,A.tG,A.cE])
v(A.ka,[A.Oc,A.r0])
u(A.rm,A.oB)
v(C.Bs,[A.aio,A.aip,A.aiq,A.awB,A.ao3,A.anZ,A.ao_,A.ao0,A.aoh,A.aog,A.aoe,A.aof])
v(A.el,[A.mL,A.rR,A.rW,A.oC,A.rS,A.oD,A.rV,A.rT,A.rU,A.wH,A.wF,A.wI,A.wG])
v(A.adL,[A.Nz,A.age,A.ahE,A.aik,A.x2,A.W0,A.aoB,A.apm,A.apr,A.avE,A.avN,A.awP])
v(C.mn,[A.ac0,A.agf,A.aJ6,A.aJ7,A.aJ8,A.aJ9,A.aJa,A.aJb,A.aJc,A.aoC,A.aiu,A.ait,A.ao2,A.anX,A.anW,A.aoa])
u(A.ae1,A.Nz)
u(A.aiK,A.agd)
v(A.aiK,[A.Sp,A.aiL,A.aiM,A.aiN,A.Sr])
u(A.Sq,A.Cq)
u(A.Ss,A.CN)
u(A.aij,A.qQ)
v(A.rL,[A.rM,A.CZ])
u(A.St,A.ET)
u(A.aiO,A.aoA)
u(A.tH,A.adK)
v(A.lE,[A.Wf,A.Wg,A.Wi,A.Wj,A.Wm,A.Wn])
v(A.xH,[A.F1,A.Wl])
v(A.Wp,[A.nd,A.fS])
u(A.Su,A.Hm)
u(A.Sv,A.Hs)
u(A.Sw,A.Zz)
v(A.fN,[A.wL,A.wM,A.D6,A.D7,A.D8,A.D9,A.wN,A.wO,A.wP,A.wQ,A.wR,A.wS])
v(A.anS,[A.Vz,A.VA,A.VB,A.VC,A.VD,A.VE,A.VF,A.VG,A.lB])
u(A.ao4,C.Br)
v(A.bR,[A.j0,A.tt,A.ce,A.dS,A.cY,A.ey,A.ik,A.pb,A.a5_])
u(A.EH,A.ce)
u(A.dT,A.a4Z)
u(A.jF,A.dS)
u(A.VS,A.a5_)
u(A.eN,A.dT)
v(A.eN,[A.VO,A.VK,A.EJ,A.ao6,A.JB,A.VQ])
u(A.xx,A.EJ)
u(A.EI,A.xx)
u(A.EK,A.JB)
u(A.Cc,A.aeM)
u(A.abu,A.abv)
u(A.D3,A.ZA)
u(A.UY,A.ais)
u(A.YX,A.wU)
x(A.a4Z,A.VN)
x(A.a5_,A.VN)
w(A.JB,A.ao5)})()
C.aVl(b.typeUniverse,JSON.parse('{"RO":{"c4":["G<o>","rg"]},"a7c":{"c4":["G<o>","rg"],"c4.S":"G<o>","c4.T":"rg"},"vQ":{"bP":[],"j":["a4"],"j.E":"a4"},"vR":{"bP":[],"j":["a4"],"j.E":"a4"},"vS":{"bP":[],"j":["a4"],"j.E":"a4"},"vT":{"bP":[],"j":["a4"],"j.E":"a4"},"vU":{"bP":[],"j":["a4"],"j.E":"a4"},"vV":{"bP":[],"j":["a4"],"j.E":"a4"},"vW":{"bP":[],"j":["a4"],"j.E":"a4"},"vX":{"bP":[],"j":["a4"],"j.E":"a4"},"vY":{"bP":[],"j":["a4"],"j.E":"a4"},"vZ":{"bP":[],"j":["a4"],"j.E":"a4"},"w_":{"bP":[],"j":["a4"],"j.E":"a4"},"ka":{"bP":[],"j":["a4"],"j.E":"a4"},"Oc":{"bP":[],"j":["a4"],"j.E":"a4"},"r0":{"bP":[],"j":["a4"],"j.E":"a4"},"mL":{"el":[]},"rR":{"el":[]},"rW":{"el":[]},"oC":{"el":[]},"rS":{"el":[]},"oD":{"el":[]},"rV":{"el":[]},"rT":{"el":[]},"rU":{"el":[]},"wH":{"el":[]},"wF":{"el":[]},"wI":{"el":[]},"wG":{"el":[]},"Sq":{"Cq":[]},"Ss":{"CN":[]},"rM":{"rL":[]},"CZ":{"rL":[]},"St":{"ET":[]},"Wf":{"lE":[]},"Wg":{"lE":[]},"Wi":{"lE":[]},"Wj":{"lE":[]},"Wm":{"lE":[]},"Wn":{"lE":[]},"F1":{"xH":[]},"Wl":{"xH":[]},"Sv":{"Hs":[]},"mN":{"j":["bO"],"j.E":"bO"},"fN":{"j":["bO"]},"wL":{"fN":[],"j":["bO"],"j.E":"bO"},"wM":{"fN":[],"j":["bO"],"j.E":"bO"},"D6":{"fN":[],"j":["bO"],"j.E":"bO"},"D7":{"fN":[],"j":["bO"],"j.E":"bO"},"D8":{"fN":[],"j":["bO"],"j.E":"bO"},"D9":{"fN":[],"j":["bO"],"j.E":"bO"},"wN":{"fN":[],"j":["bO"],"j.E":"bO"},"wO":{"fN":[],"j":["bO"],"j.E":"bO"},"wP":{"fN":[],"j":["bO"],"j.E":"bO"},"wQ":{"fN":[],"j":["bO"],"j.E":"bO"},"wR":{"fN":[],"j":["bO"],"j.E":"bO"},"wS":{"fN":[],"j":["bO"],"j.E":"bO"},"tv":{"bO":[],"bP":[],"j":["a4"],"j.E":"a4"},"tw":{"bO":[],"bP":[],"j":["a4"],"j.E":"a4"},"tx":{"bO":[],"bP":[],"j":["a4"],"j.E":"a4"},"ty":{"bO":[],"bP":[],"j":["a4"],"j.E":"a4"},"tz":{"bO":[],"bP":[],"j":["a4"],"j.E":"a4"},"tA":{"bO":[],"bP":[],"j":["a4"],"j.E":"a4"},"tB":{"bO":[],"bP":[],"j":["a4"],"j.E":"a4"},"tC":{"bO":[],"bP":[],"j":["a4"],"j.E":"a4"},"tD":{"bO":[],"bP":[],"j":["a4"],"j.E":"a4"},"tE":{"bO":[],"bP":[],"j":["a4"],"j.E":"a4"},"tF":{"bO":[],"bP":[],"j":["a4"],"j.E":"a4"},"tG":{"bO":[],"bP":[],"j":["a4"],"j.E":"a4"},"cE":{"bO":[],"bP":[],"j":["a4"],"j.E":"a4"},"Si":{"db":[]},"j0":{"bR":[]},"N8":{"c4":["ea","ea"],"c4.S":"ea","c4.T":"ea"},"tt":{"bR":[]},"ce":{"bR":[],"ce.T":"1"},"EH":{"ce":["bR"],"bR":[],"ce.T":"bR"},"dS":{"bR":[]},"cY":{"bR":[]},"ey":{"bR":[]},"ik":{"bR":[]},"pb":{"bR":[]},"jF":{"dS":[],"bR":[]},"VS":{"bR":[]},"VO":{"eN":["ce<bR>"],"dT":["ce<bR>"]},"VK":{"eN":["ce<bR>"],"dT":["ce<bR>"]},"EI":{"xx":[],"eN":["ce<bR>"],"dT":["ce<bR>"]},"eN":{"dT":["1"]},"EJ":{"eN":["ce<bR>"],"dT":["ce<bR>"]},"EK":{"eN":["ce<bR>"],"dT":["ce<bR>"]},"VQ":{"eN":["ce<bR>"],"dT":["ce<bR>"]},"xx":{"eN":["ce<bR>"],"dT":["ce<bR>"]},"YX":{"wU":[]},"bO":{"bP":[],"j":["a4"]},"b5_":{"eN":["ce<bR>"],"dT":["ce<bR>"]},"b51":{"eN":["ce<bR>"],"dT":["ce<bR>"]},"b5a":{"eN":["ce<bR>"],"dT":["ce<bR>"]},"b5b":{"eN":["ce<bR>"],"dT":["ce<bR>"]}}'))
C.aVk(b.typeUniverse,JSON.parse('{"Wp":1}'))
var y=(function rtii(){var x=C.ad
return{W:x("bW"),G:x("bP"),x:x("R5"),_:x("R7"),f:x("CU"),h:x("RX"),j:x("RY"),fa:x("CX"),gx:x("Sf"),P:x("lo"),r:x("el"),I:x("fN"),B:x("wU"),k:x("Dl"),E:x("u<Od>"),Q:x("u<R6>"),m:x("u<Cq>"),b:x("u<CN>"),F:x("u<CU>"),g:x("u<mN>"),T:x("u<wU>"),b7:x("u<t0>"),M:x("u<G<G<G<o>>>>"),o:x("u<G<G<o>>>"),S:x("u<G<o>>"),aG:x("u<Vs>"),R:x("u<b5_>"),ds:x("u<bhz>"),Y:x("u<eN<bR>>"),aJ:x("u<EK>"),cN:x("u<pb>"),d:x("u<jF>"),dm:x("u<ET>"),X:x("u<xG>"),af:x("u<lE>"),l:x("u<Wk>"),s:x("u<m>"),aU:x("u<Z_>"),a:x("u<ea>"),ao:x("u<uC>"),H:x("u<Zn>"),J:x("u<Hs>"),gn:x("u<a2P>"),e8:x("u<zs>"),n:x("u<O>"),t:x("u<o>"),f8:x("u<SA?>"),hh:x("u<jb?>"),e:x("u<ea?>"),cA:x("u<a4>"),y:x("u<~(fj)>"),d2:x("t0"),dN:x("t9<zF>"),f0:x("G<Dl>"),c7:x("G<Hk>"),e6:x("G<uC>"),L:x("G<o>"),Z:x("bx<m,dS>"),fL:x("bm"),bz:x("j0<bR>"),K:x("bR"),do:x("ce<bR>"),z:x("aG"),v:x("b51"),d5:x("VP"),V:x("EI"),C:x("dS"),di:x("cY"),eq:x("ey"),c:x("dT<bR>"),q:x("dT<EH>"),O:x("eN<bR>"),aY:x("b5a"),ew:x("b5b"),bv:x("pb"),bE:x("xx"),dv:x("bO"),fW:x("xG"),fh:x("Wh"),cE:x("F1"),hf:x("xH"),fi:x("F2"),a7:x("xI"),b8:x("nh"),i:x("xM"),N:x("m"),cV:x("YZ"),w:x("is"),ak:x("jb"),D:x("ea"),dd:x("Hk"),ai:x("Zo"),cP:x("Zp"),dE:x("Zr"),U:x("aQ<m>"),du:x("cO<dS>"),cd:x("aE<~>"),aX:x("a51"),cJ:x("D"),A:x("@"),p:x("o"),fe:x("rL?"),bC:x("So?"),ez:x("G<rL?>?"),dt:x("ey?"),aD:x("ea?"),eW:x("Hl?"),aj:x("uC?"),dP:x("Zq?"),cx:x("zF?"),u:x("o?"),aT:x("~")}})();(function constants(){var x=a.makeConstList
B.i8=new A.Nw(0,"direct")
B.lz=new A.Nw(1,"alpha")
B.pA=new A.fB(0,"none")
B.lA=new A.fB(3,"bitfields")
B.lB=new A.fB(6,"alphaBitfields")
B.aqL=new A.NF(1,"contain")
B.ic=new A.NO(0,"littleEndian")
B.fD=new A.NO(1,"bigEndian")
B.pG=new C.lq(C.be5(),C.ad("lq<O>"))
B.aqM=new A.abu()
B.Lh=new A.NF(0,"fill")
B.LD=B.Lh
B.P5=new A.Cc(0,0,0,0)
B.LB=B.P5
B.Md=new A.VL()
B.dI=new A.awZ()
B.Mw=new A.a0q()
B.MH=new A.a7c()
B.MM=new A.aHp()
B.MN=new A.aHq()
B.pW=new A.acy(4,"luminance")
B.PL=new A.rp(0,"red")
B.PM=new A.rp(1,"green")
B.PN=new A.rp(2,"blue")
B.PO=new A.rp(3,"alpha")
B.PP=new A.rp(4,"other")
B.r1=new A.wp(0,"uint")
B.mP=new A.wp(1,"half")
B.mQ=new A.wp(2,"float")
B.r2=new A.kl(0,"none")
B.Ed=new A.eO(0,0)
B.Q0=new A.Rb(B.Ed,B.Ed)
B.Q2=new A.agn(2,"both")
B.Q4=new A.Rm(0,"normal")
B.eL=new A.Rm(1,"italic")
B.Q5=new A.Rn(0,"normal")
B.eM=new A.Rn(1,"bold")
B.ch=new A.hy(0,"uint1")
B.cG=new A.hy(1,"uint2")
B.dS=new A.hy(10,"float32")
B.eN=new A.hy(11,"float64")
B.cH=new A.hy(2,"uint4")
B.y=new A.hy(3,"uint8")
B.b_=new A.hy(4,"uint16")
B.dT=new A.hy(5,"uint32")
B.eO=new A.hy(6,"int8")
B.eP=new A.hy(7,"int16")
B.eQ=new A.hy(8,"int32")
B.db=new A.hy(9,"float16")
B.rm=new A.Rr(1,"page")
B.aa=new A.Rr(2,"sequence")
B.j7=new A.Se(0,"none")
B.Qb=new A.Se(1,"deflate")
B.rq=new A.wD(2,"cur")
B.q=new A.fM(0,"none")
B.rv=new A.fM(1,"byte")
B.rw=new A.fM(10,"sRational")
B.rx=new A.fM(11,"single")
B.ry=new A.fM(12,"double")
B.rz=new A.fM(13,"ifd")
B.ad=new A.fM(2,"ascii")
B.a7=new A.fM(3,"short")
B.bh=new A.fM(4,"long")
B.bL=new A.fM(5,"rational")
B.rA=new A.fM(6,"sByte")
B.eS=new A.fM(7,"undefined")
B.rB=new A.fM(8,"sShort")
B.rC=new A.fM(9,"sLong")
B.QQ=new A.Sx(0,"nearest")
B.aqZ=new A.Sx(1,"linear")
B.n1=x([0,2,8],y.t)
B.Rg=x([0,4,2,1],y.t)
B.Qc=new A.wD(0,"invalid")
B.Qd=new A.wD(1,"ico")
B.Ri=x([B.Qc,B.Qd,B.rq],C.ad("u<wD>"))
B.rS=x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],y.t)
B.RJ=x([252,243,207,63],y.t)
B.acI=new A.xz(0,"none")
B.HP=new A.xz(1,"background")
B.HQ=new A.xz(2,"previous")
B.RK=x([B.acI,B.HP,B.HQ],C.ad("u<xz>"))
B.rX=x([292,260,226,226],y.t)
B.RO=x([0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0],y.t)
B.RQ=x([2,3,7],y.t)
B.t1=x([3226,6412,200,168,38,38,134,134,100,100,100,100,68,68,68,68],y.t)
B.RU=x([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],y.t)
B.S5=x([3,3,11],y.t)
B.nh=x([128,128,128,128,128,128,128,128,128,128,128],y.t)
B.tQ=x([B.nh,B.nh,B.nh],y.S)
B.U6=x([253,136,254,255,228,219,128,128,128,128,128],y.t)
B.WL=x([189,129,242,255,227,213,255,219,128,128,128],y.t)
B.WW=x([106,126,227,252,214,209,255,255,128,128,128],y.t)
B.a_Y=x([B.U6,B.WL,B.WW],y.S)
B.a0c=x([1,98,248,255,236,226,255,255,128,128,128],y.t)
B.Sw=x([181,133,238,254,221,234,255,154,128,128,128],y.t)
B.Sd=x([78,134,202,247,198,180,255,219,128,128,128],y.t)
B.a1x=x([B.a0c,B.Sw,B.Sd],y.S)
B.TY=x([1,185,249,255,243,255,128,128,128,128,128],y.t)
B.a03=x([184,150,247,255,236,224,128,128,128,128,128],y.t)
B.a3W=x([77,110,216,255,236,230,128,128,128,128,128],y.t)
B.ZT=x([B.TY,B.a03,B.a3W],y.S)
B.a_a=x([1,101,251,255,241,255,128,128,128,128,128],y.t)
B.U4=x([170,139,241,252,236,209,255,255,128,128,128],y.t)
B.a_n=x([37,116,196,243,228,255,255,255,128,128,128],y.t)
B.Tz=x([B.a_a,B.U4,B.a_n],y.S)
B.Xy=x([1,204,254,255,245,255,128,128,128,128,128],y.t)
B.a4I=x([207,160,250,255,238,128,128,128,128,128,128],y.t)
B.a4H=x([102,103,231,255,211,171,128,128,128,128,128],y.t)
B.V6=x([B.Xy,B.a4I,B.a4H],y.S)
B.T9=x([1,152,252,255,240,255,128,128,128,128,128],y.t)
B.a4T=x([177,135,243,255,234,225,128,128,128,128,128],y.t)
B.Zx=x([80,129,211,255,194,224,128,128,128,128,128],y.t)
B.a_X=x([B.T9,B.a4T,B.Zx],y.S)
B.ud=x([1,1,255,128,128,128,128,128,128,128,128],y.t)
B.a0O=x([246,1,255,128,128,128,128,128,128,128,128],y.t)
B.YZ=x([255,128,128,128,128,128,128,128,128,128,128],y.t)
B.a5o=x([B.ud,B.a0O,B.YZ],y.S)
B.UR=x([B.tQ,B.a_Y,B.a1x,B.ZT,B.Tz,B.V6,B.a_X,B.a5o],y.o)
B.a44=x([198,35,237,223,193,187,162,160,145,155,62],y.t)
B.U5=x([131,45,198,221,172,176,220,157,252,221,1],y.t)
B.a43=x([68,47,146,208,149,167,221,162,255,223,128],y.t)
B.Yf=x([B.a44,B.U5,B.a43],y.S)
B.a1A=x([1,149,241,255,221,224,255,255,128,128,128],y.t)
B.a2y=x([184,141,234,253,222,220,255,199,128,128,128],y.t)
B.YQ=x([81,99,181,242,176,190,249,202,255,255,128],y.t)
B.a3p=x([B.a1A,B.a2y,B.YQ],y.S)
B.a30=x([1,129,232,253,214,197,242,196,255,255,128],y.t)
B.a4v=x([99,121,210,250,201,198,255,202,128,128,128],y.t)
B.a0_=x([23,91,163,242,170,187,247,210,255,255,128],y.t)
B.Z7=x([B.a30,B.a4v,B.a0_],y.S)
B.VT=x([1,200,246,255,234,255,128,128,128,128,128],y.t)
B.a2W=x([109,178,241,255,231,245,255,255,128,128,128],y.t)
B.RN=x([44,130,201,253,205,192,255,255,128,128,128],y.t)
B.a3C=x([B.VT,B.a2W,B.RN],y.S)
B.ST=x([1,132,239,251,219,209,255,165,128,128,128],y.t)
B.Rk=x([94,136,225,251,218,190,255,255,128,128,128],y.t)
B.a35=x([22,100,174,245,186,161,255,199,128,128,128],y.t)
B.a_6=x([B.ST,B.Rk,B.a35],y.S)
B.a2x=x([1,182,249,255,232,235,128,128,128,128,128],y.t)
B.a_L=x([124,143,241,255,227,234,128,128,128,128,128],y.t)
B.WA=x([35,77,181,251,193,211,255,205,128,128,128],y.t)
B.X0=x([B.a2x,B.a_L,B.WA],y.S)
B.a5p=x([1,157,247,255,236,231,255,255,128,128,128],y.t)
B.UM=x([121,141,235,255,225,227,255,255,128,128,128],y.t)
B.a2Z=x([45,99,188,251,195,217,255,224,128,128,128],y.t)
B.Tr=x([B.a5p,B.UM,B.a2Z],y.S)
B.Rl=x([1,1,251,255,213,255,128,128,128,128,128],y.t)
B.RX=x([203,1,248,255,255,128,128,128,128,128,128],y.t)
B.a2C=x([137,1,177,255,224,255,128,128,128,128,128],y.t)
B.Td=x([B.Rl,B.RX,B.a2C],y.S)
B.a29=x([B.Yf,B.a3p,B.Z7,B.a3C,B.a_6,B.X0,B.Tr,B.Td],y.o)
B.Vi=x([253,9,248,251,207,208,255,192,128,128,128],y.t)
B.a0P=x([175,13,224,243,193,185,249,198,255,255,128],y.t)
B.a5h=x([73,17,171,221,161,179,236,167,255,234,128],y.t)
B.a0x=x([B.Vi,B.a0P,B.a5h],y.S)
B.a1T=x([1,95,247,253,212,183,255,255,128,128,128],y.t)
B.Zj=x([239,90,244,250,211,209,255,255,128,128,128],y.t)
B.a3V=x([155,77,195,248,188,195,255,255,128,128,128],y.t)
B.a2w=x([B.a1T,B.Zj,B.a3V],y.S)
B.XB=x([1,24,239,251,218,219,255,205,128,128,128],y.t)
B.a1k=x([201,51,219,255,196,186,128,128,128,128,128],y.t)
B.Zh=x([69,46,190,239,201,218,255,228,128,128,128],y.t)
B.a1H=x([B.XB,B.a1k,B.Zh],y.S)
B.WT=x([1,191,251,255,255,128,128,128,128,128,128],y.t)
B.a_l=x([223,165,249,255,213,255,128,128,128,128,128],y.t)
B.a08=x([141,124,248,255,255,128,128,128,128,128,128],y.t)
B.a3_=x([B.WT,B.a_l,B.a08],y.S)
B.Yr=x([1,16,248,255,255,128,128,128,128,128,128],y.t)
B.UJ=x([190,36,230,255,236,255,128,128,128,128,128],y.t)
B.U8=x([149,1,255,128,128,128,128,128,128,128,128],y.t)
B.SU=x([B.Yr,B.UJ,B.U8],y.S)
B.a02=x([1,226,255,128,128,128,128,128,128,128,128],y.t)
B.a0C=x([247,192,255,128,128,128,128,128,128,128,128],y.t)
B.a3T=x([240,128,255,128,128,128,128,128,128,128,128],y.t)
B.S_=x([B.a02,B.a0C,B.a3T],y.S)
B.a3B=x([1,134,252,255,255,128,128,128,128,128,128],y.t)
B.a_K=x([213,62,250,255,255,128,128,128,128,128,128],y.t)
B.a4P=x([55,93,255,128,128,128,128,128,128,128,128],y.t)
B.a00=x([B.a3B,B.a_K,B.a4P],y.S)
B.TR=x([B.a0x,B.a2w,B.a1H,B.a3_,B.SU,B.S_,B.a00,B.tQ],y.o)
B.a_M=x([202,24,213,235,186,191,220,160,240,175,255],y.t)
B.U3=x([126,38,182,232,169,184,228,174,255,187,128],y.t)
B.SW=x([61,46,138,219,151,178,240,170,255,216,128],y.t)
B.a2j=x([B.a_M,B.U3,B.SW],y.S)
B.Zv=x([1,112,230,250,199,191,247,159,255,255,128],y.t)
B.To=x([166,109,228,252,211,215,255,174,128,128,128],y.t)
B.a_f=x([39,77,162,232,172,180,245,178,255,255,128],y.t)
B.a2b=x([B.Zv,B.To,B.a_f],y.S)
B.ZH=x([1,52,220,246,198,199,249,220,255,255,128],y.t)
B.V3=x([124,74,191,243,183,193,250,221,255,255,128],y.t)
B.Wz=x([24,71,130,219,154,170,243,182,255,255,128],y.t)
B.a2a=x([B.ZH,B.V3,B.Wz],y.S)
B.Wv=x([1,182,225,249,219,240,255,224,128,128,128],y.t)
B.a4M=x([149,150,226,252,216,205,255,171,128,128,128],y.t)
B.a5A=x([28,108,170,242,183,194,254,223,255,255,128],y.t)
B.a4h=x([B.Wv,B.a4M,B.a5A],y.S)
B.a5C=x([1,81,230,252,204,203,255,192,128,128,128],y.t)
B.a2S=x([123,102,209,247,188,196,255,233,128,128,128],y.t)
B.a3P=x([20,95,153,243,164,173,255,203,128,128,128],y.t)
B.a2T=x([B.a5C,B.a2S,B.a3P],y.S)
B.YL=x([1,222,248,255,216,213,128,128,128,128,128],y.t)
B.a_G=x([168,175,246,252,235,205,255,255,128,128,128],y.t)
B.WI=x([47,116,215,255,211,212,255,255,128,128,128],y.t)
B.Uw=x([B.YL,B.a_G,B.WI],y.S)
B.YI=x([1,121,236,253,212,214,255,255,128,128,128],y.t)
B.ZJ=x([141,84,213,252,201,202,255,219,128,128,128],y.t)
B.a0r=x([42,80,160,240,162,185,255,205,128,128,128],y.t)
B.X5=x([B.YI,B.ZJ,B.a0r],y.S)
B.a51=x([244,1,255,128,128,128,128,128,128,128,128],y.t)
B.Rh=x([238,1,255,128,128,128,128,128,128,128,128],y.t)
B.a0H=x([B.ud,B.a51,B.Rh],y.S)
B.RH=x([B.a2j,B.a2b,B.a2a,B.a4h,B.a2T,B.Uw,B.X5,B.a0H],y.o)
B.SV=x([B.UR,B.a29,B.TR,B.RH],y.M)
B.SY=x([511,1023,2047,4095],y.t)
B.Tv=x([60,60],y.t)
B.Tw=x([62,62],y.t)
B.Tx=x([63,207,243,252],y.t)
B.Ua=x([8,8,4,2],y.t)
B.Rx=x([173,148,140],y.t)
B.Ry=x([176,155,140,135],y.t)
B.Rv=x([180,157,141,134,130],y.t)
B.RV=x([254,254,243,230,196,177,153,140,133,130,129],y.t)
B.Ud=x([B.Rx,B.Ry,B.Rv,B.RV],y.S)
B.Ui=x([0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576],y.t)
B.UB=x([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],y.t)
B.UX=x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095],y.t)
B.u1=x([0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29],y.t)
B.n4=x([0,1,1,2,4,8,1,1,2,4,8,4,8,4],y.t)
B.Vn=x([2954,2956,2958,2962,2970,2986,3018,3082,3212,3468,3980,5004],y.t)
B.ue=x([280,256,256,256,40],y.t)
B.ui=x([62,62,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,588,588,588,588,588,588,588,588,1680,1680,20499,22547,24595,26643,1776,1776,1808,1808,-24557,-22509,-20461,-18413,1904,1904,1936,1936,-16365,-14317,782,782,782,782,814,814,814,814,-12269,-10221,10257,10257,12305,12305,14353,14353,16403,18451,1712,1712,1744,1744,28691,30739,-32749,-30701,-28653,-26605,2061,2061,2061,2061,2061,2061,2061,2061,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,750,750,750,750,1616,1616,1648,1648,1424,1424,1456,1456,1488,1488,1520,1520,1840,1840,1872,1872,1968,1968,8209,8209,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,1552,1552,1584,1584,2000,2000,2032,2032,976,976,1008,1008,1040,1040,1072,1072,1296,1296,1328,1328,718,718,718,718,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,4113,4113,6161,6161,848,848,880,880,912,912,944,944,622,622,622,622,654,654,654,654,1104,1104,1136,1136,1168,1168,1200,1200,1232,1232,1264,1264,686,686,686,686,1360,1360,1392,1392,12,12,12,12,12,12,12,12,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390],y.t)
B.n5=x([4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157],y.t)
B.VV=x([24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112],y.t)
B.VY=x([37,194,165,194,177,195,171,10],y.t)
B.n7=x([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284],y.t)
B.ut=x([0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28],y.t)
B.Wi=x([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],y.t)
B.Wl=x([B.r1,B.mP,B.mQ],C.ad("u<wp>"))
B.jn=x([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],y.t)
B.Xf=x([254,253,251,247,239,223,191,127],y.t)
B.js=x([12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8],y.t)
B.uS=x([A.bfc(),A.bf4(),A.bfj(),A.bfh(),A.bfe(),A.bfd(),A.bff()],y.y)
B.uT=x([0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5],y.t)
B.oS=new A.eT(0,"whiteIsZero")
B.alE=new A.eT(1,"blackIsZero")
B.alL=new A.eT(2,"rgb")
B.oU=new A.eT(3,"palette")
B.alM=new A.eT(4,"transparencyMask")
B.JE=new A.eT(5,"cmyk")
B.alN=new A.eT(6,"yCbCr")
B.alO=new A.eT(7,"reserved7")
B.alP=new A.eT(8,"cieLab")
B.alQ=new A.eT(9,"iccLab")
B.alF=new A.eT(10,"ituLab")
B.alG=new A.eT(11,"logL")
B.alH=new A.eT(12,"logLuv")
B.alI=new A.eT(13,"colorFilterArray")
B.alJ=new A.eT(14,"linearRaw")
B.alK=new A.eT(15,"depth")
B.oT=new A.eT(16,"unknown")
B.XG=x([B.oS,B.alE,B.alL,B.oU,B.alM,B.JE,B.alN,B.alO,B.alP,B.alQ,B.alF,B.alG,B.alH,B.alI,B.alJ,B.alK,B.oT],C.ad("u<eT>"))
B.HN=new A.ES(0,"source")
B.HO=new A.ES(1,"over")
B.Yz=x([B.HN,B.HO],C.ad("u<ES>"))
B.alw=new A.ux(0,"invalid")
B.JC=new A.ux(1,"uint")
B.Y=new A.ux(2,"int")
B.hW=new A.ux(3,"float")
B.YE=x([B.alw,B.JC,B.Y,B.hW],C.ad("u<ux>"))
B.YK=x([17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15],y.t)
B.vs=x([-0.0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9],y.t)
B.vx=x([B.q,B.rv,B.ad,B.a7,B.bh,B.bL,B.rA,B.eS,B.rB,B.rC,B.rw,B.rx,B.ry,B.rz],C.ad("u<fM>"))
B.Zg=x([0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15],y.t)
B.PQ=new A.kl(1,"rle")
B.PR=new A.kl(2,"zips")
B.PS=new A.kl(3,"zip")
B.PT=new A.kl(4,"piz")
B.PU=new A.kl(5,"pxr24")
B.PV=new A.kl(6,"b44")
B.PW=new A.kl(7,"b44a")
B.Zk=x([B.r2,B.PQ,B.PR,B.PS,B.PT,B.PU,B.PV,B.PW],C.ad("u<kl>"))
B.a0k=x([231,120,48,89,115,113,120,152,112],y.t)
B.RI=x([152,179,64,126,170,118,46,70,95],y.t)
B.Zf=x([175,69,143,80,85,82,72,155,103],y.t)
B.SI=x([56,58,10,171,218,189,17,13,152],y.t)
B.a_b=x([114,26,17,163,44,195,21,10,173],y.t)
B.a_E=x([121,24,80,195,26,62,44,64,85],y.t)
B.a_4=x([144,71,10,38,171,213,144,34,26],y.t)
B.a3a=x([170,46,55,19,136,160,33,206,71],y.t)
B.VZ=x([63,20,8,114,114,208,12,9,226],y.t)
B.Xz=x([81,40,11,96,182,84,29,16,36],y.t)
B.Rm=x([B.a0k,B.RI,B.Zf,B.SI,B.a_b,B.a_E,B.a_4,B.a3a,B.VZ,B.Xz],y.S)
B.UI=x([134,183,89,137,98,101,106,165,148],y.t)
B.a2G=x([72,187,100,130,157,111,32,75,80],y.t)
B.a_V=x([66,102,167,99,74,62,40,234,128],y.t)
B.RZ=x([41,53,9,178,241,141,26,8,107],y.t)
B.Xg=x([74,43,26,146,73,166,49,23,157],y.t)
B.Wh=x([65,38,105,160,51,52,31,115,128],y.t)
B.Wr=x([104,79,12,27,217,255,87,17,7],y.t)
B.Zc=x([87,68,71,44,114,51,15,186,23],y.t)
B.a2g=x([47,41,14,110,182,183,21,17,194],y.t)
B.a0N=x([66,45,25,102,197,189,23,18,22],y.t)
B.a3Q=x([B.UI,B.a2G,B.a_V,B.RZ,B.Xg,B.Wh,B.Wr,B.Zc,B.a2g,B.a0N],y.S)
B.a0g=x([88,88,147,150,42,46,45,196,205],y.t)
B.a_h=x([43,97,183,117,85,38,35,179,61],y.t)
B.WF=x([39,53,200,87,26,21,43,232,171],y.t)
B.YV=x([56,34,51,104,114,102,29,93,77],y.t)
B.ZX=x([39,28,85,171,58,165,90,98,64],y.t)
B.W8=x([34,22,116,206,23,34,43,166,73],y.t)
B.Ro=x([107,54,32,26,51,1,81,43,31],y.t)
B.a3g=x([68,25,106,22,64,171,36,225,114],y.t)
B.UH=x([34,19,21,102,132,188,16,76,124],y.t)
B.a49=x([62,18,78,95,85,57,50,48,51],y.t)
B.Ve=x([B.a0g,B.a_h,B.WF,B.YV,B.ZX,B.W8,B.Ro,B.a3g,B.UH,B.a49],y.S)
B.ZR=x([193,101,35,159,215,111,89,46,111],y.t)
B.TO=x([60,148,31,172,219,228,21,18,111],y.t)
B.SR=x([112,113,77,85,179,255,38,120,114],y.t)
B.a45=x([40,42,1,196,245,209,10,25,109],y.t)
B.YA=x([88,43,29,140,166,213,37,43,154],y.t)
B.Wa=x([61,63,30,155,67,45,68,1,209],y.t)
B.WV=x([100,80,8,43,154,1,51,26,71],y.t)
B.S2=x([142,78,78,16,255,128,34,197,171],y.t)
B.Zt=x([41,40,5,102,211,183,4,1,221],y.t)
B.Vy=x([51,50,17,168,209,192,23,25,82],y.t)
B.V8=x([B.ZR,B.TO,B.SR,B.a45,B.YA,B.Wa,B.WV,B.S2,B.Zt,B.Vy],y.S)
B.Ww=x([138,31,36,171,27,166,38,44,229],y.t)
B.V4=x([67,87,58,169,82,115,26,59,179],y.t)
B.a1v=x([63,59,90,180,59,166,93,73,154],y.t)
B.a3J=x([40,40,21,116,143,209,34,39,175],y.t)
B.Sa=x([47,15,16,183,34,223,49,45,183],y.t)
B.U2=x([46,17,33,183,6,98,15,32,183],y.t)
B.a5D=x([57,46,22,24,128,1,54,17,37],y.t)
B.X_=x([65,32,73,115,28,128,23,128,205],y.t)
B.a_U=x([40,3,9,115,51,192,18,6,223],y.t)
B.Xb=x([87,37,9,115,59,77,64,21,47],y.t)
B.Zs=x([B.Ww,B.V4,B.a1v,B.a3J,B.Sa,B.U2,B.a5D,B.X_,B.a_U,B.Xb],y.S)
B.a50=x([104,55,44,218,9,54,53,130,226],y.t)
B.Tm=x([64,90,70,205,40,41,23,26,57],y.t)
B.a1u=x([54,57,112,184,5,41,38,166,213],y.t)
B.W9=x([30,34,26,133,152,116,10,32,134],y.t)
B.a0y=x([39,19,53,221,26,114,32,73,255],y.t)
B.Vu=x([31,9,65,234,2,15,1,118,73],y.t)
B.Zq=x([75,32,12,51,192,255,160,43,51],y.t)
B.Wf=x([88,31,35,67,102,85,55,186,85],y.t)
B.XN=x([56,21,23,111,59,205,45,37,192],y.t)
B.Y3=x([55,38,70,124,73,102,1,34,98],y.t)
B.a5c=x([B.a50,B.Tm,B.a1u,B.W9,B.a0y,B.Vu,B.Zq,B.Wf,B.XN,B.Y3],y.S)
B.XL=x([125,98,42,88,104,85,117,175,82],y.t)
B.Wk=x([95,84,53,89,128,100,113,101,45],y.t)
B.a_p=x([75,79,123,47,51,128,81,171,1],y.t)
B.Tf=x([57,17,5,71,102,57,53,41,49],y.t)
B.a1e=x([38,33,13,121,57,73,26,1,85],y.t)
B.a4L=x([41,10,67,138,77,110,90,47,114],y.t)
B.Zl=x([115,21,2,10,102,255,166,23,6],y.t)
B.UL=x([101,29,16,10,85,128,101,196,26],y.t)
B.WR=x([57,18,10,102,102,213,34,20,43],y.t)
B.Yv=x([117,20,15,36,163,128,68,1,26],y.t)
B.Zb=x([B.XL,B.Wk,B.a_p,B.Tf,B.a1e,B.a4L,B.Zl,B.UL,B.WR,B.Yv],y.S)
B.X8=x([102,61,71,37,34,53,31,243,192],y.t)
B.a4B=x([69,60,71,38,73,119,28,222,37],y.t)
B.Xd=x([68,45,128,34,1,47,11,245,171],y.t)
B.Rt=x([62,17,19,70,146,85,55,62,70],y.t)
B.a5x=x([37,43,37,154,100,163,85,160,1],y.t)
B.a4j=x([63,9,92,136,28,64,32,201,85],y.t)
B.a2M=x([75,15,9,9,64,255,184,119,16],y.t)
B.V1=x([86,6,28,5,64,255,25,248,1],y.t)
B.a0I=x([56,8,17,132,137,255,55,116,128],y.t)
B.T0=x([58,15,20,82,135,57,26,121,40],y.t)
B.a_0=x([B.X8,B.a4B,B.Xd,B.Rt,B.a5x,B.a4j,B.a2M,B.V1,B.a0I,B.T0],y.S)
B.a_y=x([164,50,31,137,154,133,25,35,218],y.t)
B.UZ=x([51,103,44,131,131,123,31,6,158],y.t)
B.a4f=x([86,40,64,135,148,224,45,183,128],y.t)
B.Ze=x([22,26,17,131,240,154,14,1,209],y.t)
B.TV=x([45,16,21,91,64,222,7,1,197],y.t)
B.a3K=x([56,21,39,155,60,138,23,102,213],y.t)
B.a59=x([83,12,13,54,192,255,68,47,28],y.t)
B.a_W=x([85,26,85,85,128,128,32,146,171],y.t)
B.Z_=x([18,11,7,63,144,171,4,4,246],y.t)
B.Vf=x([35,27,10,146,174,171,12,26,128],y.t)
B.YM=x([B.a_y,B.UZ,B.a4f,B.Ze,B.TV,B.a3K,B.a59,B.a_W,B.Z_,B.Vf],y.S)
B.a26=x([190,80,35,99,180,80,126,54,45],y.t)
B.a39=x([85,126,47,87,176,51,41,20,32],y.t)
B.a1p=x([101,75,128,139,118,146,116,128,85],y.t)
B.a2D=x([56,41,15,176,236,85,37,9,62],y.t)
B.T8=x([71,30,17,119,118,255,17,18,138],y.t)
B.a__=x([101,38,60,138,55,70,43,26,142],y.t)
B.YR=x([146,36,19,30,171,255,97,27,20],y.t)
B.a0e=x([138,45,61,62,219,1,81,188,64],y.t)
B.a46=x([32,41,20,117,151,142,20,21,163],y.t)
B.a3c=x([112,19,12,61,195,128,48,4,24],y.t)
B.a1G=x([B.a26,B.a39,B.a1p,B.a2D,B.T8,B.a__,B.YR,B.a0e,B.a46,B.a3c],y.S)
B.Zr=x([B.Rm,B.a3Q,B.Ve,B.V8,B.Zs,B.a5c,B.Zb,B.a_0,B.YM,B.a1G],y.o)
B.kW=new A.hS(0,"none")
B.du=new A.hS(1,"palette")
B.JB=new A.hS(2,"rgb")
B.alo=new A.hS(3,"gray")
B.alp=new A.hS(4,"reserved4")
B.alq=new A.hS(5,"reserved5")
B.alr=new A.hS(6,"reserved6")
B.als=new A.hS(7,"reserved7")
B.alt=new A.hS(8,"reserved8")
B.dv=new A.hS(9,"paletteRle")
B.JA=new A.hS(10,"rgbRle")
B.aln=new A.hS(11,"grayRle")
B.ZA=x([B.kW,B.du,B.JB,B.alo,B.alp,B.alq,B.alr,B.als,B.alt,B.dv,B.JA,B.aln],C.ad("u<hS>"))
B.a_m=x([0,1,1,1,0],y.t)
B.a_o=x([A.beX(),A.bf3(),A.bf5(),A.beZ(),A.bf1(),A.bf7(),A.bf0(),A.bf6(),A.beY(),A.bf_()],y.y)
B.n3=x([8,0,8,0],y.t)
B.Ti=x([5,3,5,3],y.t)
B.S7=x([3,5,3,5],y.t)
B.rK=x([0,8,0,8],y.t)
B.te=x([4,4,4,4],y.t)
B.SP=x([4,4,0,0],y.t)
B.wj=x([B.n3,B.Ti,B.S7,B.rK,B.n3,B.te,B.SP,B.rK],y.S)
B.wv=x([80,88,23,71,30,30,62,62,4,4,4,4,4,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41],y.t)
B.jE=x([0,1,4,5,16,17,20,21,64,65,68,69,80,81,84,85,256,257,260,261,272,273,276,277,320,321,324,325,336,337,340,341,1024,1025,1028,1029,1040,1041,1044,1045,1088,1089,1092,1093,1104,1105,1108,1109,1280,1281,1284,1285,1296,1297,1300,1301,1344,1345,1348,1349,1360,1361,1364,1365,4096,4097,4100,4101,4112,4113,4116,4117,4160,4161,4164,4165,4176,4177,4180,4181,4352,4353,4356,4357,4368,4369,4372,4373,4416,4417,4420,4421,4432,4433,4436,4437,5120,5121,5124,5125,5136,5137,5140,5141,5184,5185,5188,5189,5200,5201,5204,5205,5376,5377,5380,5381,5392,5393,5396,5397,5440,5441,5444,5445,5456,5457,5460,5461,16384,16385,16388,16389,16400,16401,16404,16405,16448,16449,16452,16453,16464,16465,16468,16469,16640,16641,16644,16645,16656,16657,16660,16661,16704,16705,16708,16709,16720,16721,16724,16725,17408,17409,17412,17413,17424,17425,17428,17429,17472,17473,17476,17477,17488,17489,17492,17493,17664,17665,17668,17669,17680,17681,17684,17685,17728,17729,17732,17733,17744,17745,17748,17749,20480,20481,20484,20485,20496,20497,20500,20501,20544,20545,20548,20549,20560,20561,20564,20565,20736,20737,20740,20741,20752,20753,20756,20757,20800,20801,20804,20805,20816,20817,20820,20821,21504,21505,21508,21509,21520,21521,21524,21525,21568,21569,21572,21573,21584,21585,21588,21589,21760,21761,21764,21765,21776,21777,21780,21781,21824,21825,21828,21829,21840,21841,21844,21845],y.t)
B.wx=x([127,127,191,127,159,191,223,127,143,159,175,191,207,223,239,127,135,143,151,159,167,175,183,191,199,207,215,223,231,239,247,127,131,135,139,143,147,151,155,159,163,167,171,175,179,183,187,191,195,199,203,207,211,215,219,223,227,231,235,239,243,247,251,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,127],y.t)
B.wB=x([7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],y.t)
B.jF=x([28679,28679,31752,-32759,-31735,-30711,-29687,-28663,29703,29703,30727,30727,-27639,-26615,-25591,-24567],y.t)
B.wJ=x([6430,6400,6400,6400,3225,3225,3225,3225,944,944,944,944,976,976,976,976,1456,1456,1456,1456,1488,1488,1488,1488,718,718,718,718,718,718,718,718,750,750,750,750,750,750,750,750,1520,1520,1520,1520,1552,1552,1552,1552,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,654,654,654,654,654,654,654,654,1072,1072,1072,1072,1104,1104,1104,1104,1136,1136,1136,1136,1168,1168,1168,1168,1200,1200,1200,1200,1232,1232,1232,1232,622,622,622,622,622,622,622,622,1008,1008,1008,1008,1040,1040,1040,1040,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,1712,1712,1712,1712,1744,1744,1744,1744,846,846,846,846,846,846,846,846,1264,1264,1264,1264,1296,1296,1296,1296,1328,1328,1328,1328,1360,1360,1360,1360,1392,1392,1392,1392,1424,1424,1424,1424,686,686,686,686,686,686,686,686,910,910,910,910,910,910,910,910,1968,1968,1968,1968,2000,2000,2000,2000,2032,2032,2032,2032,16,16,16,16,10257,10257,10257,10257,12305,12305,12305,12305,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,878,878,878,878,878,878,878,878,1904,1904,1904,1904,1936,1936,1936,1936,-18413,-18413,-16365,-16365,-14317,-14317,-10221,-10221,590,590,590,590,590,590,590,590,782,782,782,782,782,782,782,782,1584,1584,1584,1584,1616,1616,1616,1616,1648,1648,1648,1648,1680,1680,1680,1680,814,814,814,814,814,814,814,814,1776,1776,1776,1776,1808,1808,1808,1808,1840,1840,1840,1840,1872,1872,1872,1872,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,14353,14353,14353,14353,16401,16401,16401,16401,22547,22547,24595,24595,20497,20497,20497,20497,18449,18449,18449,18449,26643,26643,28691,28691,30739,30739,-32749,-32749,-30701,-30701,-28653,-28653,-26605,-26605,-24557,-24557,-22509,-22509,-20461,-20461,8207,8207,8207,8207,8207,8207,8207,8207,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232],y.t)
B.a0Y=x([],C.ad("u<rz>"))
B.a1W=x([0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0],y.t)
B.acJ=new A.pd(0,"none")
B.acK=new A.pd(1,"sub")
B.acL=new A.pd(2,"up")
B.acM=new A.pd(3,"average")
B.acN=new A.pd(4,"paeth")
B.xj=x([B.acJ,B.acK,B.acL,B.acM,B.acN],C.ad("u<pd>"))
B.abU=new A.cY("/PDF")
B.abV=new A.cY("/Text")
B.abM=new A.cY("/ImageB")
B.abS=new A.cY("/ImageC")
B.a2q=x([B.abU,B.abV,B.abM,B.abS],C.ad("u<cY>"))
B.cL=x([0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117],y.t)
B.hb=x([0,1,3,7,15,31,63,127,255],y.t)
B.ni=x([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],y.t)
B.bY=x([255,255,255,255,255,255,255,255,255,255,255],y.t)
B.f3=x([B.bY,B.bY,B.bY],y.S)
B.YU=x([176,246,255,255,255,255,255,255,255,255,255],y.t)
B.a4S=x([223,241,252,255,255,255,255,255,255,255,255],y.t)
B.Us=x([249,253,253,255,255,255,255,255,255,255,255],y.t)
B.Zo=x([B.YU,B.a4S,B.Us],y.S)
B.XD=x([255,244,252,255,255,255,255,255,255,255,255],y.t)
B.X2=x([234,254,254,255,255,255,255,255,255,255,255],y.t)
B.y4=x([253,255,255,255,255,255,255,255,255,255,255],y.t)
B.UW=x([B.XD,B.X2,B.y4],y.S)
B.a4e=x([255,246,254,255,255,255,255,255,255,255,255],y.t)
B.a0A=x([239,253,254,255,255,255,255,255,255,255,255],y.t)
B.xK=x([254,255,254,255,255,255,255,255,255,255,255],y.t)
B.a2I=x([B.a4e,B.a0A,B.xK],y.S)
B.uV=x([255,248,254,255,255,255,255,255,255,255,255],y.t)
B.VN=x([251,255,254,255,255,255,255,255,255,255,255],y.t)
B.a_D=x([B.uV,B.VN,B.bY],y.S)
B.n2=x([255,253,254,255,255,255,255,255,255,255,255],y.t)
B.a_t=x([251,254,254,255,255,255,255,255,255,255,255],y.t)
B.W1=x([B.n2,B.a_t,B.xK],y.S)
B.SD=x([255,254,253,255,254,255,255,255,255,255,255],y.t)
B.Xv=x([250,255,254,255,254,255,255,255,255,255,255],y.t)
B.jM=x([254,255,255,255,255,255,255,255,255,255,255],y.t)
B.YC=x([B.SD,B.Xv,B.jM],y.S)
B.WP=x([B.f3,B.Zo,B.UW,B.a2I,B.a_D,B.W1,B.YC,B.f3],y.o)
B.RF=x([217,255,255,255,255,255,255,255,255,255,255],y.t)
B.YO=x([225,252,241,253,255,255,254,255,255,255,255],y.t)
B.a1t=x([234,250,241,250,253,255,253,254,255,255,255],y.t)
B.a3d=x([B.RF,B.YO,B.a1t],y.S)
B.np=x([255,254,255,255,255,255,255,255,255,255,255],y.t)
B.Uy=x([223,254,254,255,255,255,255,255,255,255,255],y.t)
B.TW=x([238,253,254,254,255,255,255,255,255,255,255],y.t)
B.a0w=x([B.np,B.Uy,B.TW],y.S)
B.Xa=x([249,254,255,255,255,255,255,255,255,255,255],y.t)
B.a48=x([B.uV,B.Xa,B.bY],y.S)
B.a3l=x([255,253,255,255,255,255,255,255,255,255,255],y.t)
B.a_r=x([247,254,255,255,255,255,255,255,255,255,255],y.t)
B.a_7=x([B.a3l,B.a_r,B.bY],y.S)
B.TL=x([252,255,255,255,255,255,255,255,255,255,255],y.t)
B.S0=x([B.n2,B.TL,B.bY],y.S)
B.yb=x([255,254,254,255,255,255,255,255,255,255,255],y.t)
B.TU=x([B.yb,B.y4,B.bY],y.S)
B.a0q=x([255,254,253,255,255,255,255,255,255,255,255],y.t)
B.v5=x([250,255,255,255,255,255,255,255,255,255,255],y.t)
B.TJ=x([B.a0q,B.v5,B.jM],y.S)
B.SK=x([B.a3d,B.a0w,B.a48,B.a_7,B.S0,B.TU,B.TJ,B.f3],y.o)
B.a1I=x([186,251,250,255,255,255,255,255,255,255,255],y.t)
B.VB=x([234,251,244,254,255,255,255,255,255,255,255],y.t)
B.a2L=x([251,251,243,253,254,255,254,255,255,255,255],y.t)
B.W_=x([B.a1I,B.VB,B.a2L],y.S)
B.VR=x([236,253,254,255,255,255,255,255,255,255,255],y.t)
B.a0o=x([251,253,253,254,254,255,255,255,255,255,255],y.t)
B.Yb=x([B.n2,B.VR,B.a0o],y.S)
B.a23=x([254,254,254,255,255,255,255,255,255,255,255],y.t)
B.VJ=x([B.yb,B.a23,B.bY],y.S)
B.a2V=x([254,254,255,255,255,255,255,255,255,255,255],y.t)
B.VO=x([B.np,B.a2V,B.jM],y.S)
B.yc=x([B.bY,B.jM,B.bY],y.S)
B.SH=x([B.W_,B.Yb,B.VJ,B.VO,B.yc,B.f3,B.f3,B.f3],y.o)
B.Xu=x([248,255,255,255,255,255,255,255,255,255,255],y.t)
B.Wj=x([250,254,252,254,255,255,255,255,255,255,255],y.t)
B.Vw=x([248,254,249,253,255,255,255,255,255,255,255],y.t)
B.Yj=x([B.Xu,B.Wj,B.Vw],y.S)
B.Sg=x([255,253,253,255,255,255,255,255,255,255,255],y.t)
B.a3A=x([246,253,253,255,255,255,255,255,255,255,255],y.t)
B.W0=x([252,254,251,254,254,255,255,255,255,255,255],y.t)
B.a3z=x([B.Sg,B.a3A,B.W0],y.S)
B.a5q=x([255,254,252,255,255,255,255,255,255,255,255],y.t)
B.Vr=x([248,254,253,255,255,255,255,255,255,255,255],y.t)
B.TI=x([253,255,254,254,255,255,255,255,255,255,255],y.t)
B.a_P=x([B.a5q,B.Vr,B.TI],y.S)
B.a54=x([255,251,254,255,255,255,255,255,255,255,255],y.t)
B.ZS=x([245,251,254,255,255,255,255,255,255,255,255],y.t)
B.ZY=x([253,253,254,255,255,255,255,255,255,255,255],y.t)
B.Uh=x([B.a54,B.ZS,B.ZY],y.S)
B.Un=x([255,251,253,255,255,255,255,255,255,255,255],y.t)
B.XK=x([252,253,254,255,255,255,255,255,255,255,255],y.t)
B.a2o=x([B.Un,B.XK,B.np],y.S)
B.TB=x([255,252,255,255,255,255,255,255,255,255,255],y.t)
B.a4Y=x([249,255,254,255,255,255,255,255,255,255,255],y.t)
B.Ws=x([255,255,254,255,255,255,255,255,255,255,255],y.t)
B.Rs=x([B.TB,B.a4Y,B.Ws],y.S)
B.a5y=x([255,255,253,255,255,255,255,255,255,255,255],y.t)
B.VM=x([B.a5y,B.v5,B.bY],y.S)
B.TH=x([B.Yj,B.a3z,B.a_P,B.Uh,B.a2o,B.Rs,B.VM,B.yc],y.o)
B.a31=x([B.WP,B.SK,B.SH,B.TH],y.M)
B.KM=new A.fB(1,"rle8")
B.KR=new A.fB(2,"rle4")
B.KS=new A.fB(4,"jpeg")
B.KT=new A.fB(5,"png")
B.KU=new A.fB(7,"reserved7")
B.KV=new A.fB(8,"reserved8")
B.KW=new A.fB(9,"reserved9")
B.KN=new A.fB(10,"reserved10")
B.KO=new A.fB(11,"cmyk")
B.KP=new A.fB(12,"cmykRle8")
B.KQ=new A.fB(13,"cmykRle4")
B.xL=x([B.pA,B.KM,B.KR,B.lA,B.KS,B.KT,B.lB,B.KU,B.KV,B.KW,B.KN,B.KO,B.KP,B.KQ],C.ad("u<fB>"))
B.nl=x([0,128,192,224,240,248,252,254,255],y.t)
B.xZ=x([137,80,78,71,13,10,26,10],y.t)
B.nm=x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215,33554431,67108863,134217727,268435455,536870911,1073741823,2147483647,4294967295],y.t)
B.a3u=x([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258],y.t)
B.a3F=x([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],y.t)
B.e7=new A.kv(0,"topLeft")
B.abB=new A.kv(1,"topRight")
B.abC=new A.kv(2,"bottomRight")
B.abD=new A.kv(3,"bottomLeft")
B.abE=new A.kv(4,"leftTop")
B.abF=new A.kv(5,"rightTop")
B.abG=new A.kv(6,"rightBottom")
B.abH=new A.kv(7,"leftBottom")
B.a3X=x([B.e7,B.abB,B.abC,B.abD,B.abE,B.abF,B.abG,B.abH],C.ad("u<kv>"))
B.JX=new A.uD(0,"predictor")
B.ang=new A.uD(1,"crossColor")
B.anh=new A.uD(2,"subtractGreen")
B.JY=new A.uD(3,"colorIndexing")
B.a40=x([B.JX,B.ang,B.anh,B.JY],C.ad("u<uD>"))
B.bZ=x([0,17,34,51,68,85,102,119,136,153,170,187,204,221,238,255],y.t)
B.a4n=x([73,67,67,95,80,82,79,70,73,76,69,0],y.t)
B.a4w=x([A.bf8(),A.bf2(),A.bfi(),A.bfg(),A.bfa(),A.bf9(),A.bfb()],y.y)
B.yn=x([0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396],y.t)
B.a4G=x([null,A.bfy(),A.bfz(),A.bfx()],C.ad("u<~(o,o,o,o,o,ea)?>"))
B.k_=x([0,36,72,109,145,182,218,255],y.t)
B.cm=x([0,8,16,24,32,41,49,57,65,74,82,90,98,106,115,123,131,139,148,156,164,172,180,189,197,205,213,222,230,238,246,255],y.t)
B.a4U=x([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8],y.t)
B.acW=new A.kz(0,"bitmap")
B.HW=new A.kz(1,"grayscale")
B.acX=new A.kz(2,"indexed")
B.HX=new A.kz(3,"rgb")
B.HY=new A.kz(4,"cmyk")
B.acY=new A.kz(5,"multiChannel")
B.acZ=new A.kz(6,"duoTone")
B.HZ=new A.kz(7,"lab")
B.a4X=x([B.acW,B.HW,B.acX,B.HX,B.HY,B.acY,B.acZ,B.HZ],C.ad("u<kz>"))
B.a5f=x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0],y.t)
B.a5g=x(["/UseNone","/UseOutlines","/UseThumbs","/FullScreen"],y.s)
B.RR=x([2,6,2,6],y.t)
B.TE=x([6,2,6,2],y.t)
B.RP=x([2,2,6,6],y.t)
B.RD=x([1,3,3,9],y.t)
B.SM=x([4,0,12,0],y.t)
B.S4=x([3,1,9,3],y.t)
B.U9=x([8,8,0,0],y.t)
B.SN=x([4,12,0,0],y.t)
B.Rw=x([16,0,0,0],y.t)
B.Rr=x([12,4,0,0],y.t)
B.TF=x([6,6,2,2],y.t)
B.S8=x([3,9,1,3],y.t)
B.Rq=x([12,0,4,0],y.t)
B.Uq=x([9,3,3,1],y.t)
B.bi=x([B.te,B.RR,B.n3,B.TE,B.RP,B.RD,B.SM,B.S4,B.U9,B.SN,B.Rw,B.Rr,B.TF,B.S8,B.Rq,B.Uq],y.S)
B.f4=x([0,-128,64,-64,32,-96,96,-32,16,-112,80,-48,48,-80,112,-16,8,-120,72,-56,40,-88,104,-24,24,-104,88,-40,56,-72,120,-8,4,-124,68,-60,36,-92,100,-28,20,-108,84,-44,52,-76,116,-12,12,-116,76,-52,44,-84,108,-20,28,-100,92,-36,60,-68,124,-4,2,-126,66,-62,34,-94,98,-30,18,-110,82,-46,50,-78,114,-14,10,-118,74,-54,42,-86,106,-22,26,-102,90,-38,58,-70,122,-6,6,-122,70,-58,38,-90,102,-26,22,-106,86,-42,54,-74,118,-10,14,-114,78,-50,46,-82,110,-18,30,-98,94,-34,62,-66,126,-2,1,-127,65,-63,33,-95,97,-31,17,-111,81,-47,49,-79,113,-15,9,-119,73,-55,41,-87,105,-23,25,-103,89,-39,57,-71,121,-7,5,-123,69,-59,37,-91,101,-27,21,-107,85,-43,53,-75,117,-11,13,-115,77,-51,45,-83,109,-19,29,-99,93,-35,61,-67,125,-3,3,-125,67,-61,35,-93,99,-29,19,-109,83,-45,51,-77,115,-13,11,-117,75,-53,43,-85,107,-21,27,-101,91,-37,59,-69,123,-5,7,-121,71,-57,39,-89,103,-25,23,-105,87,-41,55,-73,119,-9,15,-113,79,-49,47,-81,111,-17,31,-97,95,-33,63,-65,127,-1],y.t)
B.a9j={ProcessingSoftware:0,SubfileType:1,OldSubfileType:2,ImageWidth:3,ImageLength:4,ImageHeight:5,BitsPerSample:6,Compression:7,PhotometricInterpretation:8,Thresholding:9,CellWidth:10,CellLength:11,FillOrder:12,DocumentName:13,ImageDescription:14,Make:15,Model:16,StripOffsets:17,Orientation:18,SamplesPerPixel:19,RowsPerStrip:20,StripByteCounts:21,MinSampleValue:22,MaxSampleValue:23,XResolution:24,YResolution:25,PlanarConfiguration:26,PageName:27,XPosition:28,YPosition:29,GrayResponseUnit:30,GrayResponseCurve:31,T4Options:32,T6Options:33,ResolutionUnit:34,PageNumber:35,ColorResponseUnit:36,TransferFunction:37,Software:38,DateTime:39,Artist:40,HostComputer:41,Predictor:42,WhitePoint:43,PrimaryChromaticities:44,ColorMap:45,HalftoneHints:46,TileWidth:47,TileLength:48,TileOffsets:49,TileByteCounts:50,BadFaxLines:51,CleanFaxData:52,ConsecutiveBadFaxLines:53,InkSet:54,InkNames:55,NumberofInks:56,DotRange:57,TargetPrinter:58,ExtraSamples:59,SampleFormat:60,SMinSampleValue:61,SMaxSampleValue:62,TransferRange:63,ClipPath:64,JPEGProc:65,JPEGInterchangeFormat:66,JPEGInterchangeFormatLength:67,YCbCrCoefficients:68,YCbCrSubSampling:69,YCbCrPositioning:70,ReferenceBlackWhite:71,ApplicationNotes:72,Rating:73,CFARepeatPatternDim:74,CFAPattern:75,BatteryLevel:76,Copyright:77,ExposureTime:78,FNumber:79,"IPTC-NAA":80,ExifOffset:81,InterColorProfile:82,ExposureProgram:83,SpectralSensitivity:84,GPSOffset:85,ISOSpeed:86,OECF:87,SensitivityType:88,RecommendedExposureIndex:89,ExifVersion:90,DateTimeOriginal:91,DateTimeDigitized:92,OffsetTime:93,OffsetTimeOriginal:94,OffsetTimeDigitized:95,ComponentsConfiguration:96,CompressedBitsPerPixel:97,ShutterSpeedValue:98,ApertureValue:99,BrightnessValue:100,ExposureBiasValue:101,MaxApertureValue:102,SubjectDistance:103,MeteringMode:104,LightSource:105,Flash:106,FocalLength:107,SubjectArea:108,MakerNote:109,UserComment:110,SubSecTime:111,SubSecTimeOriginal:112,SubSecTimeDigitized:113,XPTitle:114,XPComment:115,XPAuthor:116,XPKeywords:117,XPSubject:118,FlashPixVersion:119,ColorSpace:120,ExifImageWidth:121,ExifImageLength:122,RelatedSoundFile:123,InteroperabilityOffset:124,FlashEnergy:125,SpatialFrequencyResponse:126,FocalPlaneXResolution:127,FocalPlaneYResolution:128,FocalPlaneResolutionUnit:129,SubjectLocation:130,ExposureIndex:131,SensingMethod:132,FileSource:133,SceneType:134,CVAPattern:135,CustomRendered:136,ExposureMode:137,WhiteBalance:138,DigitalZoomRatio:139,FocalLengthIn35mmFilm:140,SceneCaptureType:141,GainControl:142,Contrast:143,Saturation:144,Sharpness:145,DeviceSettingDescription:146,SubjectDistanceRange:147,ImageUniqueID:148,CameraOwnerName:149,BodySerialNumber:150,LensSpecification:151,LensMake:152,LensModel:153,LensSerialNumber:154,Gamma:155,PrintIM:156,Padding:157,OffsetSchema:158,OwnerName:159,SerialNumber:160,InteropIndex:161,InteropVersion:162,RelatedImageFileFormat:163,RelatedImageWidth:164,RelatedImageLength:165,GPSVersionID:166,GPSLatitudeRef:167,GPSLatitude:168,GPSLongitudeRef:169,GPSLongitude:170,GPSAltitudeRef:171,GPSAltitude:172,GPSTimeStamp:173,GPSSatellites:174,GPSStatus:175,GPSMeasureMode:176,GPSDOP:177,GPSSpeedRef:178,GPSSpeed:179,GPSTrackRef:180,GPSTrack:181,GPSImgDirectionRef:182,GPSImgDirection:183,GPSMapDatum:184,GPSDestLatitudeRef:185,GPSDestLatitude:186,GPSDestLongitudeRef:187,GPSDestLongitude:188,GPSDestBearingRef:189,GPSDestBearing:190,GPSDestDistanceRef:191,GPSDestDistance:192,GPSProcessingMethod:193,GPSAreaInformation:194,GPSDate:195,GPSDifferential:196}
B.DQ=new C.a5(B.a9j,[11,254,255,256,257,257,258,259,262,263,264,265,266,269,270,271,272,273,274,277,278,279,280,281,282,283,284,285,286,287,290,291,292,293,296,297,300,301,305,306,315,316,317,318,319,320,321,322,323,324,325,326,327,328,332,333,334,336,337,338,339,340,341,342,343,512,513,514,529,530,531,532,700,18246,33421,33422,33423,33432,33434,33437,33723,34665,34675,34850,34852,34853,34855,34856,34864,34866,36864,36867,36868,36880,36881,36882,37121,37122,37377,37378,37379,37380,37381,37382,37383,37384,37385,37386,37396,37500,37510,37520,37521,37522,40091,40092,40093,40094,40095,40960,40961,40962,40963,40964,40965,41483,41484,41486,41487,41488,41492,41493,41495,41728,41729,41730,41985,41986,41987,41988,41989,41990,41991,41992,41993,41994,41995,41996,42016,42032,42033,42034,42035,42036,42037,42240,50341,59932,59933,65e3,65001,1,2,4096,4097,4098,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],C.ad("a5<m,o>"))
B.nQ=new A.aG(0,"ExifVersion")
B.nR=new A.aG(1,"FlashpixVersion")
B.aat=new A.aG(2,"ColorSpace")
B.nS=new A.aG(3,"PixelXDimension")
B.nT=new A.aG(4,"PixelYDimension")
B.aaY=new A.aG(5,"ComponentsConfiguration")
B.ab7=new A.aG(6,"CompressedBitsPerPixel")
B.abg=new A.aG(7,"MakerNote")
B.abq=new A.aG(8,"UserComment")
B.abA=new A.aG(9,"RelatedSoundFile")
B.aaj=new A.aG(10,"DateTimeOriginal")
B.aak=new A.aG(11,"DateTimeDigitized")
B.aal=new A.aG(12,"SubsecTime")
B.aam=new A.aG(13,"SubsecTimeOriginal")
B.aan=new A.aG(14,"SubsecTimeDigitized")
B.aao=new A.aG(15,"ExposureTime")
B.aap=new A.aG(16,"FNumber")
B.aaq=new A.aG(17,"ExposureProgram")
B.aar=new A.aG(18,"SpectralSensitivity")
B.aas=new A.aG(19,"ISOSpeedRatings")
B.aau=new A.aG(20,"OECF")
B.aav=new A.aG(21,"ShutterSpeedValue")
B.aaw=new A.aG(22,"ApertureValue")
B.aax=new A.aG(23,"BrightnessValue")
B.aay=new A.aG(24,"ExposureBias")
B.aaz=new A.aG(25,"MaxApertureValue")
B.aaA=new A.aG(26,"SubjectDistance")
B.aaB=new A.aG(27,"MeteringMode")
B.aaC=new A.aG(28,"LightSource")
B.aaD=new A.aG(29,"Flash")
B.aaE=new A.aG(30,"SubjectArea")
B.aaF=new A.aG(31,"FocalLength")
B.aaG=new A.aG(32,"FlashEnergy")
B.aaH=new A.aG(33,"SpatialFrequencyResponse")
B.aaI=new A.aG(34,"FocalPlaneXResolution")
B.aaJ=new A.aG(35,"FocalPlaneYResolution")
B.aaK=new A.aG(36,"FocalPlaneResolutionUnit")
B.aaL=new A.aG(37,"SubjectLocation")
B.aaM=new A.aG(38,"ExposureIndex")
B.aaN=new A.aG(39,"SensingMethod")
B.aaO=new A.aG(40,"FileSource")
B.aaP=new A.aG(41,"SceneType")
B.aaQ=new A.aG(42,"CFAPattern")
B.aaR=new A.aG(43,"CustomRendered")
B.aaS=new A.aG(44,"ExposureMode")
B.aaT=new A.aG(45,"WhiteBalance")
B.aaU=new A.aG(46,"DigitalZoomRation")
B.aaV=new A.aG(47,"FocalLengthIn35mmFilm")
B.aaW=new A.aG(48,"SceneCaptureType")
B.aaX=new A.aG(49,"GainControl")
B.aaZ=new A.aG(50,"Contrast")
B.ab_=new A.aG(51,"Saturation")
B.ab0=new A.aG(52,"Sharpness")
B.ab1=new A.aG(53,"DeviceSettingDescription")
B.ab2=new A.aG(54,"SubjectDistanceRange")
B.ab3=new A.aG(55,"InteroperabilityIFDPointer")
B.ab4=new A.aG(56,"ImageUniqueID")
B.ab5=new A.aG(57,"ImageWidth")
B.ab6=new A.aG(58,"ImageHeight")
B.nU=new A.aG(59,"ExifIFDPointer")
B.ab8=new A.aG(60,"GPSInfoIFDPointer")
B.ab9=new A.aG(61,"BitsPerSample")
B.aba=new A.aG(62,"Compression")
B.abb=new A.aG(63,"PhotometricInterpretation")
B.nV=new A.aG(64,"Orientation")
B.abc=new A.aG(65,"SamplesPerPixel")
B.abd=new A.aG(66,"PlanarConfiguration")
B.abe=new A.aG(67,"YCbCrSubSampling")
B.abf=new A.aG(68,"YCbCrPositioning")
B.km=new A.aG(69,"XResolution")
B.kn=new A.aG(70,"YResolution")
B.abh=new A.aG(71,"ResolutionUnit")
B.abi=new A.aG(72,"StripOffsets")
B.abj=new A.aG(73,"RowsPerStrip")
B.abk=new A.aG(74,"StripByteCounts")
B.abl=new A.aG(75,"JPEGInterchangeFormat")
B.abm=new A.aG(76,"JPEGInterchangeFormatLength")
B.abn=new A.aG(77,"TransferFunction")
B.abo=new A.aG(78,"WhitePoint")
B.abp=new A.aG(79,"PrimaryChromaticities")
B.abr=new A.aG(80,"YCbCrCoefficients")
B.abs=new A.aG(81,"ReferenceBlackWhite")
B.abt=new A.aG(82,"DateTime")
B.abu=new A.aG(83,"ImageDescription")
B.abv=new A.aG(84,"Make")
B.abw=new A.aG(85,"Model")
B.abx=new A.aG(86,"Software")
B.aby=new A.aG(87,"Artist")
B.abz=new A.aG(88,"Copyright")
B.a78=new C.cQ([36864,B.nQ,40960,B.nR,40961,B.aat,40962,B.nS,40963,B.nT,37121,B.aaY,37122,B.ab7,37500,B.abg,37510,B.abq,40964,B.abA,36867,B.aaj,36868,B.aak,37520,B.aal,37521,B.aam,37522,B.aan,33434,B.aao,33437,B.aap,34850,B.aaq,34852,B.aar,34855,B.aas,34856,B.aau,37377,B.aav,37378,B.aaw,37379,B.aax,37380,B.aay,37381,B.aaz,37382,B.aaA,37383,B.aaB,37384,B.aaC,37385,B.aaD,37396,B.aaE,37386,B.aaF,41483,B.aaG,41484,B.aaH,41486,B.aaI,41487,B.aaJ,41488,B.aaK,41492,B.aaL,41493,B.aaM,41495,B.aaN,41728,B.aaO,41729,B.aaP,41730,B.aaQ,41985,B.aaR,41986,B.aaS,41987,B.aaT,41988,B.aaU,41989,B.aaV,41990,B.aaW,41991,B.aaX,41992,B.aaZ,41993,B.ab_,41994,B.ab0,41995,B.ab1,41996,B.ab2,40965,B.ab3,42016,B.ab4,256,B.ab5,257,B.ab6,34665,B.nU,34853,B.ab8,258,B.ab9,259,B.aba,262,B.abb,274,B.nV,277,B.abc,284,B.abd,530,B.abe,531,B.abf,282,B.km,283,B.kn,296,B.abh,273,B.abi,278,B.abj,279,B.abk,513,B.abl,514,B.abm,301,B.abn,318,B.abo,319,B.abp,529,B.abr,532,B.abs,306,B.abt,270,B.abu,271,B.abv,272,B.abw,305,B.abx,315,B.aby,33432,B.abz],C.ad("cQ<o,aG>"))
B.am_=new A.h3(0,"courier")
B.am0=new A.h3(1,"courierBold")
B.am5=new A.h3(2,"courierBoldOblique")
B.am6=new A.h3(3,"courierOblique")
B.JO=new A.h3(4,"helvetica")
B.JP=new A.h3(5,"helveticaBold")
B.JQ=new A.h3(6,"helveticaBoldOblique")
B.JR=new A.h3(7,"helveticaOblique")
B.am7=new A.h3(8,"times")
B.am8=new A.h3(9,"timesBold")
B.am1=new A.h3(10,"timesBoldItalic")
B.am2=new A.h3(11,"timesItalic")
B.am3=new A.h3(12,"symbol")
B.am4=new A.h3(13,"zapfDingbats")
B.a79=new C.cQ([B.am_,"Courier",B.am0,"Courier-Bold",B.am5,"Courier-BoldOblique",B.am6,"Courier-Oblique",B.JO,"Helvetica",B.JP,"Helvetica-Bold",B.JQ,"Helvetica-BoldOblique",B.JR,"Helvetica-Oblique",B.am7,"Times-Roman",B.am8,"Times-Bold",B.am1,"Times-BoldItalic",B.am2,"Times-Italic",B.am3,"Symbol",B.am4,"ZapfDingbats"],C.ad("cQ<h3,m>"))
B.nE=new C.cQ([34665,"exif",40965,"interop",34853,"gps"],C.ad("cQ<o,m>"))
B.E2=new C.cQ([B.ch,1,B.cG,3,B.cH,15,B.y,255,B.b_,65535,B.dT,4294967295,B.eO,127,B.eP,32767,B.eQ,2147483647,B.db,1,B.dS,1,B.eN,1],C.ad("cQ<hy,o>"))
B.aac=new A.EB(0,"natural")
B.aad=new A.EB(1,"landscape")
B.aae=new A.EB(2,"portrait")
B.kl=new A.VM(1,"inUse")
B.nW=new A.cY("/DeviceRGB")
B.abI=new A.cY("/Page")
B.abJ=new A.cY("/ASCII85Decode")
B.abK=new A.cY("/FlateDecode")
B.abL=new A.cY("/RelativeColorimetric")
B.abN=new A.cY("/Pages")
B.Ec=new A.cY("/DeviceGray")
B.abO=new A.cY("/DCTDecode")
B.abP=new A.cY("/Group")
B.abQ=new A.cY("/DeviceCMYK")
B.abR=new A.cY("/XRef")
B.abT=new A.cY("/Catalog")
B.abW=new A.cY("/Transparency")
B.abX=new A.ey(0)
B.nX=new A.ey(8)
B.abZ=new A.ao8(0,"none")
B.ar6=new A.ao9(0,"none")
B.Ee=new A.aod(1,"pdf_1_5")
B.ac_=new A.VR(null,null,!1,B.Ee)
B.ac0=new A.aob(0,"binary")
B.ac1=new A.aoc(0,"fill")
B.aai=new A.VM(0,"free")
B.ac2=new A.jF(0,B.aai,0,65535)
B.hy=new A.pe(0,"invalid")
B.HR=new A.pe(1,"pbm")
B.HS=new A.pe(2,"pgm2")
B.nZ=new A.pe(3,"pgm5")
B.HT=new A.pe(4,"ppm3")
B.o_=new A.pe(5,"ppm6")
B.aga=new A.av3(0,"solid")
B.agc=new A.YG(0)
B.oR=new A.jQ(0,"bilevel")
B.alx=new A.jQ(1,"gray4bit")
B.aly=new A.jQ(2,"gray")
B.alz=new A.jQ(3,"grayAlpha")
B.alA=new A.jQ(4,"palette")
B.JD=new A.jQ(5,"rgb")
B.alB=new A.jQ(6,"rgba")
B.alC=new A.jQ(7,"yCbCrSub")
B.hX=new A.jQ(8,"generic")
B.alD=new A.jQ(9,"invalid")
B.i_=new A.yS(0,"undefined")
B.p5=new A.yS(1,"lossy")
B.l0=new A.yS(2,"lossless")
B.ans=new A.yS(3,"animated")
B.l5=new A.z9(0,"none")
B.apC=new A.z9(1,"partial")
B.apD=new A.z9(2,"full")
B.i0=new A.z9(3,"finish")})();(function staticFields(){$.le=C.bZ()
$.aNB=null
$.aUv=!1
$.b8C=C.b([A.aOr(),A.bfk(),A.bfp(),A.bfq(),A.bfr(),A.bfs(),A.bft(),A.bfu(),A.bfv(),A.bfw(),A.bfl(),A.bfm(),A.bfn(),A.bfo(),A.aOr(),A.aOr()],C.ad("u<o(o,jb,o)>"))
$.dn=null
$.aQV=C.bZ()})();(function lazyInitializers(){var x=a.lazyFinal,w=a.lazy
x($,"bjb","aZf",()=>A.aNr(B.js,B.rS,257,286,15))
x($,"bja","aZe",()=>A.aNr(B.uT,B.jn,0,30,15))
x($,"bj9","aZd",()=>A.aNr(null,B.RU,0,19,7))
x($,"bgy","aXP",()=>A.RZ(B.a4U))
x($,"bgx","aXO",()=>A.RZ(B.UB))
x($,"blr","aKw",()=>{var v=null,u="ISOSpeed"
return C.aJ([11,A.X("ProcessingSoftware",B.ad,v),254,A.X("SubfileType",B.bh,1),255,A.X("OldSubfileType",B.bh,1),256,A.X("ImageWidth",B.bh,1),257,A.X("ImageLength",B.bh,1),258,A.X("BitsPerSample",B.a7,1),259,A.X("Compression",B.a7,1),262,A.X("PhotometricInterpretation",B.a7,1),263,A.X("Thresholding",B.a7,1),264,A.X("CellWidth",B.a7,1),265,A.X("CellLength",B.a7,1),266,A.X("FillOrder",B.a7,1),269,A.X("DocumentName",B.ad,v),270,A.X("ImageDescription",B.ad,v),271,A.X("Make",B.ad,v),272,A.X("Model",B.ad,v),273,A.X("StripOffsets",B.bh,v),274,A.X("Orientation",B.a7,1),277,A.X("SamplesPerPixel",B.a7,1),278,A.X("RowsPerStrip",B.bh,1),279,A.X("StripByteCounts",B.bh,1),280,A.X("MinSampleValue",B.a7,1),281,A.X("MaxSampleValue",B.a7,1),282,A.X("XResolution",B.bL,1),283,A.X("YResolution",B.bL,1),284,A.X("PlanarConfiguration",B.a7,1),285,A.X("PageName",B.ad,v),286,A.X("XPosition",B.bL,1),287,A.X("YPosition",B.bL,1),290,A.X("GrayResponseUnit",B.a7,1),291,A.X("GrayResponseCurve",B.q,v),292,A.X("T4Options",B.q,v),293,A.X("T6Options",B.q,v),296,A.X("ResolutionUnit",B.a7,1),297,A.X("PageNumber",B.a7,2),300,A.X("ColorResponseUnit",B.q,v),301,A.X("TransferFunction",B.a7,768),305,A.X("Software",B.ad,v),306,A.X("DateTime",B.ad,v),315,A.X("Artist",B.ad,v),316,A.X("HostComputer",B.ad,v),317,A.X("Predictor",B.a7,1),318,A.X("WhitePoint",B.bL,2),319,A.X("PrimaryChromaticities",B.bL,6),320,A.X("ColorMap",B.a7,v),321,A.X("HalftoneHints",B.a7,2),322,A.X("TileWidth",B.bh,1),323,A.X("TileLength",B.bh,1),324,A.X("TileOffsets",B.bh,v),325,A.X("TileByteCounts",B.q,v),326,A.X("BadFaxLines",B.q,v),327,A.X("CleanFaxData",B.q,v),328,A.X("ConsecutiveBadFaxLines",B.q,v),332,A.X("InkSet",B.q,v),333,A.X("InkNames",B.q,v),334,A.X("NumberofInks",B.q,v),336,A.X("DotRange",B.q,v),337,A.X("TargetPrinter",B.ad,v),338,A.X("ExtraSamples",B.q,v),339,A.X("SampleFormat",B.a7,1),340,A.X("SMinSampleValue",B.q,v),341,A.X("SMaxSampleValue",B.q,v),342,A.X("TransferRange",B.q,v),343,A.X("ClipPath",B.q,v),512,A.X("JPEGProc",B.q,v),513,A.X("JPEGInterchangeFormat",B.q,v),514,A.X("JPEGInterchangeFormatLength",B.q,v),529,A.X("YCbCrCoefficients",B.bL,3),530,A.X("YCbCrSubSampling",B.a7,1),531,A.X("YCbCrPositioning",B.a7,1),532,A.X("ReferenceBlackWhite",B.bL,6),700,A.X("ApplicationNotes",B.a7,1),18246,A.X("Rating",B.a7,1),33421,A.X("CFARepeatPatternDim",B.q,v),33422,A.X("CFAPattern",B.q,v),33423,A.X("BatteryLevel",B.q,v),33432,A.X("Copyright",B.ad,v),33434,A.X("ExposureTime",B.bL,1),33437,A.X("FNumber",B.bL,v),33723,A.X("IPTC-NAA",B.bh,1),34665,A.X("ExifOffset",B.q,v),34675,A.X("InterColorProfile",B.q,v),34850,A.X("ExposureProgram",B.a7,1),34852,A.X("SpectralSensitivity",B.ad,v),34853,A.X("GPSOffset",B.q,v),34855,A.X(u,B.bh,1),34856,A.X("OECF",B.q,v),34864,A.X("SensitivityType",B.a7,1),34866,A.X("RecommendedExposureIndex",B.bh,1),34867,A.X(u,B.bh,1),36864,A.X("ExifVersion",B.eS,v),36867,A.X("DateTimeOriginal",B.ad,v),36868,A.X("DateTimeDigitized",B.ad,v),36880,A.X("OffsetTime",B.ad,v),36881,A.X("OffsetTimeOriginal",B.ad,v),36882,A.X("OffsetTimeDigitized",B.ad,v),37121,A.X("ComponentsConfiguration",B.eS,v),37122,A.X("CompressedBitsPerPixel",B.q,v),37377,A.X("ShutterSpeedValue",B.q,v),37378,A.X("ApertureValue",B.q,v),37379,A.X("BrightnessValue",B.q,v),37380,A.X("ExposureBiasValue",B.q,v),37381,A.X("MaxApertureValue",B.q,v),37382,A.X("SubjectDistance",B.q,v),37383,A.X("MeteringMode",B.q,v),37384,A.X("LightSource",B.q,v),37385,A.X("Flash",B.q,v),37386,A.X("FocalLength",B.q,v),37396,A.X("SubjectArea",B.q,v),37500,A.X("MakerNote",B.eS,v),37510,A.X("UserComment",B.eS,v),37520,A.X("SubSecTime",B.q,v),37521,A.X("SubSecTimeOriginal",B.q,v),37522,A.X("SubSecTimeDigitized",B.q,v),40091,A.X("XPTitle",B.q,v),40092,A.X("XPComment",B.q,v),40093,A.X("XPAuthor",B.q,v),40094,A.X("XPKeywords",B.q,v),40095,A.X("XPSubject",B.q,v),40960,A.X("FlashPixVersion",B.q,v),40961,A.X("ColorSpace",B.a7,1),40962,A.X("ExifImageWidth",B.a7,1),40963,A.X("ExifImageLength",B.a7,1),40964,A.X("RelatedSoundFile",B.q,v),40965,A.X("InteroperabilityOffset",B.q,v),41483,A.X("FlashEnergy",B.q,v),41484,A.X("SpatialFrequencyResponse",B.q,v),41486,A.X("FocalPlaneXResolution",B.q,v),41487,A.X("FocalPlaneYResolution",B.q,v),41488,A.X("FocalPlaneResolutionUnit",B.q,v),41492,A.X("SubjectLocation",B.q,v),41493,A.X("ExposureIndex",B.q,v),41495,A.X("SensingMethod",B.q,v),41728,A.X("FileSource",B.q,v),41729,A.X("SceneType",B.q,v),41730,A.X("CVAPattern",B.q,v),41985,A.X("CustomRendered",B.q,v),41986,A.X("ExposureMode",B.q,v),41987,A.X("WhiteBalance",B.q,v),41988,A.X("DigitalZoomRatio",B.q,v),41989,A.X("FocalLengthIn35mmFilm",B.q,v),41990,A.X("SceneCaptureType",B.q,v),41991,A.X("GainControl",B.q,v),41992,A.X("Contrast",B.q,v),41993,A.X("Saturation",B.q,v),41994,A.X("Sharpness",B.q,v),41995,A.X("DeviceSettingDescription",B.q,v),41996,A.X("SubjectDistanceRange",B.q,v),42016,A.X("ImageUniqueID",B.q,v),42032,A.X("CameraOwnerName",B.ad,v),42033,A.X("BodySerialNumber",B.ad,v),42034,A.X("LensSpecification",B.q,v),42035,A.X("LensMake",B.ad,v),42036,A.X("LensModel",B.ad,v),42037,A.X("LensSerialNumber",B.ad,v),42240,A.X("Gamma",B.bL,1),50341,A.X("PrintIM",B.q,v),59932,A.X("Padding",B.q,v),59933,A.X("OffsetSchema",B.q,v),65e3,A.X("OwnerName",B.ad,v),65001,A.X("SerialNumber",B.ad,v)],y.p,C.ad("R3"))})
x($,"bgB","aaW",()=>C.aM5(C.b([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63],y.t)))
w($,"biu","ab1",()=>C.Em(511))
w($,"biv","aKo",()=>C.Em(511))
w($,"bix","aKp",()=>A.aSm(2041))
w($,"biy","aKq",()=>A.aSm(225))
w($,"biw","iE",()=>C.Em(766))
x($,"blt","aP1",()=>C.aM5(B.a1W))
x($,"blC","b_M",()=>C.aM5(B.Zg))
x($,"biD","aYT",()=>A.aQ1(0,0,0,0))
x($,"bhA","aYo",()=>A.aRu(0,0,0))
x($,"bjE","hq",()=>C.Em(1))
x($,"bjF","i1",()=>A.b3K(D.k.gaj($.hq()),0,null))
x($,"bjx","hp",()=>A.b4F(1))
x($,"bjy","i0",()=>J.b_X(D.bu.gaj($.hp()),0,null))
x($,"bjz","d4",()=>C.b4I(1))
x($,"bjB","eE",()=>J.aKB(D.aJ.gaj($.d4()),0,null))
x($,"bjA","qG",()=>A.b2U(D.aJ.gaj($.d4())))
x($,"bjv","aOJ",()=>C.aM4(1))
x($,"bjw","aZw",()=>A.aUm(D.aV.gaj($.aOJ()),0))
x($,"bjt","aOI",()=>C.an4(1))
x($,"bju","aZv",()=>A.aUm(D.e5.gaj($.aOI()),0))
x($,"bjC","aOK",()=>A.b7S(1))
x($,"bjD","aZx",()=>{var v=$.aOK()
return A.b2V(v.gaj(v))})
w($,"bln","b_J",()=>B.Mw.gaux())})()};
(a=>{a["A6uoyTYgTwqxJqprhIQYGTvXukM="]=a.current})($__dart_deferred_initializers__);