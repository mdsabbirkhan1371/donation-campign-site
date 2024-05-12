import { Link } from "react-router-dom";

const FeaturedDonation = ({donation}) => {
    const {id,title,category,img_url}=donation;

    return (
        <div>
            <Link to={`/donation/${id}`}>
            <div className={`card w-96 shadow-xl ${category==="Food" ? 'bg-violet-100' : category==="Health" ?'bg-blue-100':category==="Clothing" ? 'bg-green-200' : category==="Education" ?'bg-red-200' :'none'}`}>
                    <figure>
                        <img src={img_url} alt="Shoes" />
                    </figure>
                        <div className="card-body">
                        <div className={`badge rounded badge-ghost text-xl py-5  ${category==="Food" ? 'text-cyan-500' : category==="Health" ?'text-primary':category==="Clothing" ? 'text-secondary' : category==="Education" ?'text-error' :'none'}`}>{category}</div>
                        <h2 className={`card-title font-semibold text-2xl ${category==="Food" ? 'text-cyan-500' : category==="Health" ?'text-primary':category==="Clothing" ? 'text-secondary' : category==="Education" ?'text-error' :'none'}  `}>{title}</h2>

                     </div>
            </div>
            </Link>
            
           
        </div>
    );
};

export default FeaturedDonation;