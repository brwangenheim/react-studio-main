export default function BakeryItem(props) {
  const { item, add } = props;

  return (
    <div className="card">
      <img src={item.image} alt={item.name} className="image" />
      <div className="content">
        <h3 className="title">{item.name}</h3>
        <p className="description">{item.description}</p>
        <p className="price">{item.price}</p>
        <button className="button" onClick={() => add(item)}>
          Add to Cart{" "}
        </button>
      </div>
    </div>
  );
}
