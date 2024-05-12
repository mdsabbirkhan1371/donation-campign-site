

const FeaturedDonation = ({donation}) => {
    console.log(donation)
    const {title,category,img_url,description}=donation;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={img_url} alt="Shoes" />
                    </figure>
                        <div className="card-body">
                        <div className="badge badge-secondary">{category}</div>
                            <h2 className="card-title">{title}</h2>
                            <p>{description}</p>
                     </div>
            </div>
        </div>
    );
};

export default FeaturedDonation;