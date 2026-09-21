// The build bundles HTML and the read-only knowledge module into this Worker.
function json(value,status=200){return new Response(JSON.stringify(value,null,2),{status,headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}});}
export default {async fetch(request){
 const u=new URL(request.url),p=u.searchParams;
 if(request.method!=='GET'&&request.method!=='HEAD') return json({error:'Method not allowed'},405);
 const major=p.get('major')||'cybersecurity';
 if(u.pathname.startsWith('/api/')&&!majors[major]) return json({error:'Unknown major',choices:Object.keys(majors)},400);
 try{
 if(u.pathname==='/api/majors')return json(majors);
 if(u.pathname==='/api/campus-feed/summary')return json({records:records.length,relevant:searchRecords({major,relevant:true}).length,clubEvents:records.filter(r=>r.type==='event').length,clubsAudited:145,socialProfilesFound:116,urgent:0,eventsThisWeek:0,newOpportunities:0,newSinceYesterday:0,checkedAt,ingestion:'Public Bronc Nation directory audit; no automatic sync'});
 if(u.pathname==='/api/sources')return json({sources:['Rider University','Rider News','DAIS public profile','Bronc Nation'].map(name=>({name,items:name==='Bronc Nation'?145:records.filter(r=>r.source===name).length,status:name==='Bronc Nation'?'Audited public directory snapshot':name==='DAIS public profile'?'Limited public listing':'Reviewed public snapshots',checkedAt:name==='Bronc Nation'?'2026-09-20':checkedAt})),automaticSync:false});
 if(u.pathname==='/api/retrieve')return json(retrieve(p.get('q'),major));
 if(['/api/campus-feed','/api/campus-feed/for-you'].includes(u.pathname)){
 const sourceAliases={'rider-university':'Rider University','bronc-nation':'Bronc Nation','rider-news':'Rider News'};
 const result=searchRecords({major,q:p.get('q')||'',source:sourceAliases[p.get('source')]||p.get('source')||'',type:p.get('type')||'',category:p.get('category')||'',relevant:u.pathname.endsWith('for-you')||p.get('relevant')==='true'}).filter(r=>(!u.pathname.endsWith('for-you')&&!p.get('relevant')||r.feedVisible!==false)&&(!p.get('importance')||r.importance===p.get('importance')));
 return json({major,checkedAt,count:result.length,items:result,limitations:'Reviewed public snapshots, not live ingestion. Relevance is rule-based. SOL integration is not connected.'});}
 if(u.pathname==='/')return new Response(request.method==='HEAD'?null:HTML,{headers:{'Content-Type':'text/html; charset=utf-8','X-Content-Type-Options':'nosniff','Referrer-Policy':'strict-origin-when-cross-origin'}});
 return json({error:'Not found'},404);
 }catch(e){return json({error:e.message},400);}
}};
