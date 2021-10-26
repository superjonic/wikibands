import React, {useEffect} from "react";
import styles from './banddetail.module.css';
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getBandDetail } from "../../redux/actions";
import { getAlbumsBand } from './../../redux/actions/index';


export default function BandDetail(){
    const { id } = useParams()  
    const dispatch = useDispatch()
    const detail = useSelector((state) => state.bandDetail)

    const { data, albums } = detail;

    console.log(albums)
    useEffect(() => {
        dispatch(getBandDetail(id))
        dispatch(getAlbumsBand(id))
    }, [])


    return (
        <div>
           <h1>{data.name}</h1>  
           <h2>Members:</h2>
           {
               data.members?.map((member) => {
                   return (
                       <p>{member.name}</p>
                   )
               })
           }
           <h3>Formation Year</h3>
           <p>{data.year}</p>

           <h4>albums</h4>  

           {
               albums.map((album) => {
                   return (
                       <div> 
                           <h3>{album.name}</h3>
                           <p>{album.year}</p>
                       </div>    
                   )
               })
           }
           

        </div>
    )
}