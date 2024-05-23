import axios from "axios";

export default function MovieDel(){
    const { movieCd } = useParams();

    const [form, setForm] = useState({ "movieCd": 0, "mRank": "", "movieNm": "", "openDt": "", "saleAcc": "", "audiAcc": "", "movieImg": "" })

    async function callAPI() {
        const result = await axios.delete(`http://192.168.0.9:8000/movie/${movieCd}`);
        
    }
}