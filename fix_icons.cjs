const fs = require('fs');

const file = 'client/src/pages/RideHistory.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  '<div className="p-2.5 bg-primary/10 rounded-xl border border-primary/20">\r\n                <Clock className="h-6 w-6 text-primary" />\r\n              </div>',
  '<Clock className="h-8 w-8 text-primary drop-shadow-sm" strokeWidth={2} />'
);

content = content.replace(
  '<div className="p-2.5 bg-primary/10 rounded-xl border border-primary/20">\n                <Clock className="h-6 w-6 text-primary" />\n              </div>',
  '<Clock className="h-8 w-8 text-primary drop-shadow-sm" strokeWidth={2} />'
);

content = content.replace(
  '<div className="p-2 rounded-lg bg-primary/20 text-primary">\r\n                  <MessageSquare className="h-5 w-5" />\r\n                </div>',
  '<MessageSquare className="h-6 w-6 text-primary" strokeWidth={2} />'
);

content = content.replace(
  '<div className="p-2 rounded-lg bg-primary/20 text-primary">\n                  <MessageSquare className="h-5 w-5" />\n                </div>',
  '<MessageSquare className="h-6 w-6 text-primary" strokeWidth={2} />'
);

fs.writeFileSync(file, content);
