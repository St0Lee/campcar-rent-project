export const Features = ({ name, price, gallery }) => {
    return (
      <div>
        <h3>Features</h3>
        <p>Name: {name}</p>
        <p>Price: {price}</p>
        <img src={gallery[0]} alt={name} />
      </div>
    );
  };
  