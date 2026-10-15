"use client";
import { useState } from "react";
export function ShareButton({title}:{title:string}){const [done,setDone]=useState(false); async function share(){const url=location.href; if(navigator.share){await navigator.share({title,url});return;} await navigator.clipboard.writeText(url);setDone(true);setTimeout(()=>setDone(false),1800)} return <button onClick={share} className="share">{done?"Link copiado":"Compartilhar esta obra"}</button>}
