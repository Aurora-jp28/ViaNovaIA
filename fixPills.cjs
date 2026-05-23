const fs = require('fs');

const file1 = 'client/src/pages/SocialFeed.tsx';
let content1 = fs.readFileSync(file1, 'utf8');

content1 = content1.replace(
  '<div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full text-xs font-bold text-primary uppercase tracking-widest mb-3">\r\n              <MapPin className="h-3 w-3" /> ViaSocial\r\n            </div>\r\n            <h1 className="text-3xl font-extrabold tracking-tight">\r\n              Comparte tu <span className="text-primary">Aventura</span>\r\n            </h1>',
  `<h1 className="text-4xl md:text-5xl font-black tracking-tighter flex justify-center items-center gap-3 mb-3">
              <MapPin className="h-8 w-8 md:h-10 md:w-10 text-primary animate-bounce" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-orange-400 to-primary bg-[length:300%] animate-gradient">
                ViaSocial
              </span>
            </h1>
            <h2 className="text-2xl font-bold text-foreground/90">
              Comparte tu <span className="text-primary">Aventura</span>
            </h2>`
);
fs.writeFileSync(file1, content1);

const file2 = 'client/src/pages/AccountSettings.tsx';
let content2 = fs.readFileSync(file2, 'utf8');

content2 = content2.replace(
  '<span className="inline-block bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded text-sm font-mono font-bold tracking-widest">{vehicleData.plate}</span>',
  '<span className="inline-flex items-center gap-2 bg-secondary/40 text-foreground border border-white/10 px-3 py-1.5 rounded-lg text-sm font-mono font-semibold shadow-inner">{vehicleData.plate}</span>'
);
content2 = content2.replace(
  '{isActive && <span className="text-[10px] text-primary uppercase font-bold tracking-wider">Activo</span>}',
  '{isActive && <div className="flex items-center gap-1.5 text-primary text-xs font-bold"><div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Activo</div>}'
);
fs.writeFileSync(file2, content2);

const file3 = 'client/src/pages/RideHistory.tsx';
let content3 = fs.readFileSync(file3, 'utf8');

content3 = content3.replace(
  '<Badge className={`text-[10px] shrink-0 ${st.color}`}>{st.label}</Badge>',
  '<div className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md border ${st.color}`}>{st.label}</div>'
);
fs.writeFileSync(file3, content3);
