

const SingleDonation = ({donation}) => {
    // console.log(donation)
    const {title,card_bg_color,category,category_bg_color,description,img_url,text_button_bg_color}=donation;
    return (
        <div>
            <div className="card w-96 shadow-xl bg-base-100">
               <figure>
                  <img src={img_url} alt="Shoes" />
                </figure>
  
                  <div className="card-body">
                     <div className="badge badge-outline">{category}</div>
                       <h2 className="card-title">
                                {title}
                        </h2>
                        <p>{description}</p>

                    </div>
            </div>
        </div>
    );
};

export default SingleDonation;