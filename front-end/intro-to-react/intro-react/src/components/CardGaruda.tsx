interface ICardGarudasProps {
  image?: string;
  brandModel?: string;
  price?: number;
  brandType?: string;
}

export function CardGarudas({
  image,
  brandModel,
  brandType,
  price,
}: ICardGarudasProps) {
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="p-1">
        <img src={image} alt="kita garuda" />
      </figure>
      <div className="card-body flex items-start">
        <button className="btn btn-active btn-primary rounded-2xl bg-[#C49A45] border-none">
          {brandModel}
        </button>
        <h2 className="card-title line-clamp-2">{brandType}</h2>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>

        <p>Rp {price}</p>
      </div>
    </div>
  );
}
