import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getCharacterDetail, cleanDetail } from "../redux/actions";

const useCharacter =() =>{
    const dispatch = useDispatch();
    const character = useSelector((state)=> state.CharacterDetail);
    const {detailId} = useParams();
    
    useEffect(()=>{
        dispatch(getCharacterDetail(detailId));
        return ()=>{
            dispatch(cleanDetail())
        };
    }, [detailId]);
    return character;
}
export default useCharacter;