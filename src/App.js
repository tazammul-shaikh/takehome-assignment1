import { useEffect, useState } from "react";

import MusicTable from "./components/MusicTable";
import PlayList from './playlist.json';

function App() {
  const [music, setMusic] = useState([]);

  useEffect(()=>{
    const data = PlayList;
    const musicData = [];
    for(let key in data){
        if(key === 'id'){
            for(let i in data[key]){
                musicData.push({id: data[key][i]});
            }
        }else{
            for(let i in data[key]){
                musicData[parseInt(i)][key] = data[key][i];
            }
        }
    }
    setMusic(musicData);
  },[]);

  return (
    <div className="App">
      <MusicTable music={music}/>
    </div>
  );
}

export default App;
