
const Card = ({title, images, brand, price}) => {

    return (
        <>
            <div className="p-10 m-5 size-[400px] rounded-xl shadow-xl inset-shadow-xs hover:shadow-lg">
                <img
                    src={images[0]}
                    alt={title}
                    className="size-[200px] mx-auto object-cover"
                    loading="lazy"
                    decoding="async"
                    width={200}
                    height={200}
                    srcSet={`
                        ${images[0]} 1x,
                        ${images[1] || images[0]} 2x
                    `}
                />
                <div className="flex mt-15 items-center justify-between">
                    <div>
                        <p className="font-bold mr-5">{title}</p>
                        <p>{brand}</p>
                    </div>
                    <div>
                        <button className="border rounded-3xl p-3 hover:bg-black hover:text-white">${price}</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;