const n=r=>r?typeof r=="string"?new Date(r):r&&typeof r=="object"&&r.year&&r.month&&r.day?new Date(r.year,r.month-1,r.day,r.hour||0,r.minute||0,r.second||0):null:null;export{n as p};
