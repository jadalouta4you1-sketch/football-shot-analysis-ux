// Local development plugin. Adds a named revision without changing existing designs.
const prefix = "Shot review • semester revision";
const ink = {r:.086,g:.2,b:.169};
const green = {r:.027,g:.357,b:.271};
const white = {r:1,g:1,b:1};
const paint = color => [{type:"SOLID",color}];
async function build() {
  const page=figma.currentPage;
  if(page.children.some(n=>n.name===prefix)) throw Error("This revision already exists on this page.");
  await figma.loadFontAsync({family:"Inter",style:"Regular"});
  if(figma.editorType==="figjam"){
    const offset=Math.max(0,...page.children.map(n=>n.x+n.width))+180;
    let previous=null;
    for(let i=0;i<board.length;i++){
      const s=figma.createSection();s.name=i===0?prefix:board[i][0];s.x=offset+(i%3)*950;s.y=Math.floor(i/3)*700;s.resizeWithoutConstraints(890,650);
      const notes=[];for(let j=0;j<board[i][1].length;j++){
        const sticky=figma.createSticky();s.appendChild(sticky);sticky.text.characters=board[i][1][j];sticky.x=30+(j%3)*280;sticky.y=60+Math.floor(j/3)*280;notes.push(sticky)
      }
      if(previous){const c=figma.createConnector();c.connectorStart={endpointNodeId:previous.id,magnet:"RIGHT"};c.connectorEnd={endpointNodeId:notes[0].id,magnet:"LEFT"};}
      previous=notes[notes.length-1]
    }
    return;
  }
  const root=figma.createSection();root.name=prefix;root.x=Math.max(0,...page.children.filter(n=>n!==root).map(n=>n.x+n.width))+180;
  root.resizeWithoutConstraints(3220,2100);
  const collection=figma.variables.createVariableCollection("Shot review / roles");
  const tokens={};for(const [name,value] of Object.entries({ink,action:green,surface:white,focus:{r:.604,g:.231,b:0}})){
    const v=figma.variables.createVariable(name,collection,"COLOR");v.setValueForMode(collection.defaultModeId,value);tokens[name]=v
  }
  const styleOps=[];const typeStyles={};for(const size of [18,30,32]){
    const style=figma.createTextStyle();style.name="Shot review / "+size;style.fontName={family:"Inter",style:"Regular"};style.fontSize=size;typeStyles[size]=style
  }
  function label(parent,copy,size=18){const t=figma.createText();parent.appendChild(t);t.fontName={family:"Inter",style:"Regular"};t.fontSize=size;t.fills=paint(ink);t.characters=copy;styleOps.push(t.setTextStyleIdAsync(typeStyles[size].id));t.layoutSizingHorizontal="FILL";return t}
  function stack(f,w){f.layoutMode="VERTICAL";f.primaryAxisSizingMode="AUTO";f.counterAxisSizingMode="FIXED";f.resize(w,64);f.itemSpacing=12;f.paddingTop=f.paddingBottom=f.paddingLeft=f.paddingRight=20;f.fills=paint(white)}
  function frame(name,x,y,w=440){const f=figma.createFrame();root.appendChild(f);f.name=name;stack(f,w);f.x=x;f.y=y;return f}
  function variants(name,states,x){const nodes=states.map((state,i)=>{const c=figma.createComponent();root.appendChild(c);stack(c,290);c.name="State="+state;c.x=x;c.y=1380+i*94;c.fills=paint(state==="Primary"?green:white);c.fills=[figma.variables.setBoundVariableForPaint(c.fills[0],"color",tokens[state==="Primary"?"action":"surface"])];
    c.strokes=paint(state==="Error"?{r:.65,g:.07,b:.1}:ink);c.strokeWeight=state==="Focus"?3:1;if(state==="Disabled")c.opacity=.55;
    const t=label(c,state==="Error"?"Shorten the note to 80 characters":state);if(state==="Primary")t.fills=paint(white);return c});const set=figma.combineAsVariants(nodes,root);set.name=name;return nodes}
  const buttons=variants("Action",["Primary","Secondary","Disabled"],40);
  variants("Review note",["Default","Focus","Error"],480);
  function action(f,copy,variant=0){const a=buttons[variant].createInstance();f.appendChild(a);a.findOne(n=>n.type==="TEXT").characters=copy;return a}
  const screens=[
    ["Select a match","University XI • illustrative fixtures","Northside · 14 Nov"],
    ["Compare shooting zones","Inside: 10 attempts · 2 goals · 20%","Outside: 2 attempts · 1 goal · 50%","● Goal    ○ Attempt without a goal","Which zone deserves a closer look?"],
    ["Review selection","Northside · 14 Nov","Outside the box · 1 goal from 2 attempts","Candidate for the next video session."],
    ["Saved for video review","Northside · 14 Nov","Outside the box · candidate saved."],
    ["Match data unavailable","Hillview · 21 Nov","Choose another fixture to continue."],
    ["No attempts outside","Inside: 4 attempts · 1 goal · 25%","Outside: 0 attempts · rate undefined."]];
  const fs=screens.map((a,i)=>{let f=frame(a[0],40+(i%3)*620,45+Math.floor(i/3)*530);a.forEach((v,j)=>label(f,v,j?18:32));return f});
  function pitch(f){const p=figma.createFrame();f.appendChild(p);p.name="Illustrative pitch · attacking right";p.resize(280,116);p.strokes=paint(ink);const box=figma.createRectangle();p.appendChild(box);box.resize(90,96);box.x=189;box.y=10;box.fills=[];box.strokes=paint(ink);for(let i=0;i<12;i++){const dot=figma.createEllipse();p.appendChild(dot);dot.resize(8,8);dot.x=i<10?198+(i%3)*24:90+(i-10)*36;dot.y=18+(i%4)*20;dot.strokes=paint(ink);dot.fills=paint([0,1,10].includes(i)?ink:white)}}
  pitch(fs[1]);
  async function wire(from,copy,to,k=0){const a=action(fs[from],copy,k);await a.setReactionsAsync([{trigger:{type:"ON_CLICK"},actions:[{type:"NODE",destinationId:fs[to].id,navigation:"NAVIGATE",transition:null,preserveScrollPosition:false}]}])}
  await wire(0,"Compare Northside",1);await wire(0,"Open unavailable fixture",4,1);await wire(0,"Open zero-attempt fixture",5,1);await wire(1,"Review outside attempts",2);await wire(2,"Save for video review",3);await wire(2,"Back to comparison",1,1);await wire(3,"Back to comparison",1,1);await wire(4,"Choose a match",0);await wire(5,"Choose a match",0);
  const mob=fs[1].clone();root.appendChild(mob);mob.name="Mobile comparison · 360";mob.resize(360,mob.height);mob.x=1940;mob.y=45;
  const hand=frame("Comparison • handoff",1940,660,610);["Comparison handoff","Zero shots: show an undefined rate. Equal rates: show both denominators. Missing fixture: return to match list.","Keyboard order: layout, zone, review, change match. Keep focus visible and return focus to the new heading.","Colours: ink #16332B, action #075B45, focus #9A3B00. Spacing 8, 16, 24, 32. Mobile stacks table above map."].forEach((t,i)=>label(hand,t,i?18:30));
  await Promise.all(styleOps);figma.viewport.scrollAndZoomIntoView([fs[0],fs[1]]);
}
const board=[
 ["Starting point",["What can the coach justify from one match?","User: choose clips before the debrief.","Club: focus the training discussion.","Constraint: two outside attempts.","Riskiest assumption: spatial cues improve explanation.","Target: correct zone and counts within 60 s, at least 80%."]],
 ["Discovery • scripted role exercise",["P1: picked 50% first.","P2: needed the marker key.","P3: wanted proof of saving.","Interpretation: preserve denominators.","Working persona: time-limited university coach.","Journey: find → compare → explain → save."]],
 ["Prioritization",["HMW reveal sample size?","HMW identify outcomes without colour?","HMW make saving unambiguous?","High impact, easy: counts, legend, receipt.","High impact, more effort: matched layouts.","Lower impact: fixture label, note, video playback, live feed."]],
 ["Content and flow",["Match list → comparison → review → receipt.","Zero shots → undefined rate.","Tied rates → compare volume.","Missing data → choose another match.","Date and opponent identify each fixture.","Review groups selected zone, counts and save action."]],
 ["Iteration • simulation",["Initial table: 2 of 3 within criterion.","Initial combined: 2 of 3 within criterion.","P2 exceeded 60 s looking for marker meaning.","P3 omitted the denominator in table condition.","Changes: key, counts, named receipt.","Generated retest: 3 of 3. No human timing measurements."]]
];
build().then(()=>figma.closePlugin("Semester revision added")).catch(e=>figma.closePlugin(String(e)));
