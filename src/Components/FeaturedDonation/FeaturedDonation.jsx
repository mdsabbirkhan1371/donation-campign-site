import { Link } from "react-router-dom";


const FeaturedDonation = ({donation}) => {
    console.log(donation)
    const {id,title,category,img_url}=donation;
    return (
        <div>
            <Link to={`/donation/${id}`}>
            <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={img_url} alt="Shoes" />
                    </figure>
                        <div className="card-body">
                        <div className="badge badge-secondary">{category}</div>
                        <h2 className="card-title">{title}</h2>

                     </div>
            </div>
            </Link>
            
           
        </div>
    );
};

export default FeaturedDonation;