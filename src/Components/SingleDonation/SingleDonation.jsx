

const SingleDonation = ({donate}) => {
    console.log(donate)
    const {title,category,img_url,price}=donate;
    return (
        <div>
            <div className="card card-side bg-base-100 mb-10 shadow-xl">
                    <figure>
                        <img className="w-80 h-96" src={img_url} alt="Movie"/>
                    </figure>
                <div className="card-body">
                <div className="badge text-2xl  py-4 badge-secondary">{category}</div>
                    <h2 className="card-title text-2xl">{title}</h2>
                    <p>{price}</p>
                    
                    <div className="card-actions">
                        <button className="btn btn-primary btn-sm">View Details</button>
                    </div>
                </div>
            </div>
    </div>
    );
};

export default SingleDonation;