import React,{ useState, useEffect} from 'react'
import ItemDetail from '../Components/ItemDetail'
import { useParams} from "react-router-dom";
import { useLoading, Audio } from '@agney/react-loading';

export default function ItemDetailContainer () {
    const [item, setItem] = useState([]);
    const { id } = useParams();

    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <Audio width="20" />,
      });

    const cd = [
        {id : '1', name : 'Toxicity', band: 'System of a down', image:'cat-0012.jpg', tipo:'CD', precio:'600', tracklist:['Prison Song (3:21)','Needles (3:13)','Deer Dance (2:55)','Jet Pilot (2:06)','X (1:58)','Chop Suey! (3:30)','Bounce (1:54)','Forest (4:00)','ATWA (2:56)','Science (2:43)','Shimmy (1:51)','Toxicity (3:38)','Psycho (3:45)','Aerials (3:53)']},
        {id : '2', name : 'Discovery', band: 'Daft Punk', image:'cat-0011.jpg', tipo:'Vinilo', precio:'25.000', tracklist:['One More Time (5:21)','Aerodynamic (3:27)','Digital Love (4:58)','Harder, Better, Faster, Stronger (3:43)','Crescendolls (3:28)','Nightvision (1:43)','Superheroes (3:57)','High Life (3:13)','Something About Us (3:50)','Voyager (3:46)','Veridis Quo (5:44)','Short Circuit (3:24)','Face To Face (3:58)','Too Long (10:00)']},
        {id : '3', name : 'Future Nostalgia', band: 'Dua Lipa', image:'cat-0013.jpg', tipo:'Vinilo', precio:'7.500', tracklist:['Future Nostalgia (3:05)','Don\'t Start Now (3:03)','Cool (3:30)','Physical (3:14)','Levitating (3:24)','Pretty Please (3:15)','Hallucinate (3:29)','Love Again (4:18)','Break My Heart (3:42)','Good In Bed (Explicit) (3:39)','Boys Will Be Boys (2:46)']}
    ];

    const tareaAsyc = new Promise((resolve, reject)=>
        {
            setTimeout(()=> {
                return resolve(cd.find(i => i.id === id))
            }, 2000);
        }
    ) 

    useEffect(()=>{
        tareaAsyc.then((res) =>{
            setItem(res);
        },(rej)=>{
            console.log('paso algo->')
            console.log(rej)
        })
    },[])
    
    return(
        <>
            <div className="ItemDetailContainer">  
            {item.length === 0 ? (
                <div className="col-12" align="center"><p>Cargando {indicatorEl}</p></div>
            ) : (
                <ItemDetail id={item.id} name={item.name} band={item.band} image={item.image} tipo={item.tipo} precio={item.precio} tracklist={item.tracklist} />
            )}
            </div>
            
        </>  
    )
}
