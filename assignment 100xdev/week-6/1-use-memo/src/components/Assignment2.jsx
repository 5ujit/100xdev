import React, { useEffect, useMemo, useState } from "react";

// In this assignment, you will create a component that renders a large list of sentences and includes an input field for filtering these items. 
// The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calculated when necessary (e.g., when the filter criteria changes).
// You will learn something new here, specifically how you have to pass more than one value in the dependency array

const words =["hi ", "my","name ","is", "for","to","to","random","word"];
const TOTAL_LINE=1000;
const ALL_WORDS=[];
for(let i=0; i<TOTAL_LINE; i++){
    let sentences= " ";
    for (let a=0;  a < words.length; a++ ){
        sentences +=(words[Math.floor(words.length*Math.random())])
        sentences += " "

    }
    ALL_WORDS.push(sentences);
}
export function Assignment2(){
    const [sentences, setSentences]=useState(ALL_WORDS);
    cnost [filter , setfilter ]=useState("");

    const filteredSentence= useMemo(()=>{
        return sentences.filter(x => x.includes(filter))
    } ,[filter,sentences])
    return <div>
        < input type="text" onChange={(e)=>{
            setfilter(e.target.value)
        }} />
        {filteredSentence.map(words=>  <div>
            {words}
        </div>)}

    </div>
}
